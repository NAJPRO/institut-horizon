/* ==========================================================================
   Institut Horizon Numerique - comportements
   JavaScript natif et defensif : chaque bloc verifie la presence de son point
   d'ancrage, pour qu'une page qui n'utilise pas un composant ne provoque
   aucune erreur en console.
   ========================================================================== */
(function () {
  "use strict";

  // Preference systeme lue une seule fois, plusieurs blocs s'en servent.
  var mouvementReduit = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------------------------------------------------------------
     Menu mobile
     --------------------------------------------------------------------- */
  var boutonMenu = document.querySelector("[data-menu-bouton]");
  var nav = document.querySelector("[data-menu]");

  if (boutonMenu && nav) {
    var basculerMenu = function (ouvert) {
      boutonMenu.setAttribute("aria-expanded", String(ouvert));
      nav.setAttribute("data-ouvert", String(ouvert));
      boutonMenu.textContent = ouvert ? "Fermer" : "Menu";
    };

    boutonMenu.addEventListener("click", function () {
      basculerMenu(boutonMenu.getAttribute("aria-expanded") !== "true");
    });

    document.addEventListener("keydown", function (evenement) {
      if (evenement.key === "Escape" &&
          boutonMenu.getAttribute("aria-expanded") === "true") {
        basculerMenu(false);
        boutonMenu.focus();
      }
    });
  }

  /* ---------------------------------------------------------------------
     Cartes de filieres depliables : le coeur du site

     Le bouton porte aria-expanded et aria-controls, et le panneau est
     masque par l'attribut hidden plutot que par une classe : le contenu
     replie sort ainsi de l'arbre d'accessibilite et de la navigation au
     clavier, au lieu de rester atteignable mais invisible.

     Plusieurs filieres peuvent rester ouvertes en meme temps : le visiteur
     compare deux formations, refermer la precedente le forcerait a faire des
     allers retours.
     --------------------------------------------------------------------- */
  var boutonsFiliere = document.querySelectorAll("[data-filiere-bouton]");

  boutonsFiliere.forEach(function (bouton) {
    var detail = document.getElementById(bouton.getAttribute("aria-controls"));

    if (!detail) {
      return;
    }

    var libelle = bouton.querySelector("[data-filiere-libelle]");

    bouton.addEventListener("click", function () {
      var ouvert = bouton.getAttribute("aria-expanded") === "true";

      bouton.setAttribute("aria-expanded", String(!ouvert));
      detail.hidden = ouvert;

      if (libelle) {
        libelle.textContent = ouvert
          ? "Voir le programme et les débouchés"
          : "Masquer le détail";
      }
    });
  });

  /* ---------------------------------------------------------------------
     Formulaire de preinscription
     --------------------------------------------------------------------- */
  var formulaire = document.querySelector("[data-formulaire]");

  if (formulaire) {
    var succes = document.querySelector("[data-succes]");

    var messagePour = function (champ) {
      if (champ.validity.valueMissing) {
        return champ.type === "radio"
          ? "Merci de choisir un rythme."
          : "Ce champ est obligatoire.";
      }
      if (champ.validity.typeMismatch && champ.type === "email") {
        return "Adresse email invalide.";
      }
      if (champ.validity.patternMismatch && champ.name === "telephone") {
        return "Format attendu : +237 6XX XX XX XX.";
      }
      return "Valeur invalide.";
    };

    var verifier = function (champ) {
      var zoneErreur = document.getElementById(champ.id + "-erreur");
      var valide = champ.checkValidity();

      champ.setAttribute("aria-invalid", String(!valide));
      if (zoneErreur) {
        zoneErreur.textContent = valide ? "" : messagePour(champ);
      }
      return valide;
    };

    formulaire.querySelectorAll("input, select, textarea").forEach(function (champ) {
      champ.addEventListener("blur", function () {
        verifier(champ);
      });
    });

    formulaire.addEventListener("submit", function (evenement) {
      var champs = formulaire.querySelectorAll("input, select, textarea");
      var premierInvalide = null;

      champs.forEach(function (champ) {
        if (!verifier(champ) && !premierInvalide) {
          premierInvalide = champ;
        }
      });

      if (premierInvalide) {
        evenement.preventDefault();
        premierInvalide.focus();
        return;
      }

      // Tant que l'action Formspree n'est pas renseignee, on confirme
      // localement plutot que de laisser le navigateur recharger la page.
      if (!formulaire.getAttribute("action")) {
        evenement.preventDefault();
        if (succes) {
          succes.hidden = false;
          succes.setAttribute("tabindex", "-1");
          succes.focus();
        }
        formulaire.reset();
      }
    });
  }

  /* ---------------------------------------------------------------------
     Annee courante du pied de page
     --------------------------------------------------------------------- */
  var annee = document.querySelector("[data-annee]");
  if (annee) {
    annee.textContent = String(new Date().getFullYear());
  }

  /* =====================================================================
     ANIMATIONS
     Le mouvement accompagne la lecture, il ne la conditionne jamais. Si le
     visiteur demande moins de mouvement, ou si le navigateur ne fournit pas
     IntersectionObserver, tout le contenu s'affiche immediatement dans son
     etat final.
     ===================================================================== */
  var elementsAnimes = document.querySelectorAll("[data-anim]");

  var reveler = function (element) {
    element.classList.add("est-visible");
  };

  if (elementsAnimes.length) {
    if (mouvementReduit || typeof IntersectionObserver !== "function") {
      elementsAnimes.forEach(reveler);
    } else {
      var observateur = new IntersectionObserver(
        function (entrees) {
          entrees.forEach(function (entree) {
            if (entree.isIntersecting) {
              reveler(entree.target);
              // Un bloc deja lu n'a plus de raison d'etre surveille.
              observateur.unobserve(entree.target);
            }
          });
        },
        { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
      );

      elementsAnimes.forEach(function (element) {
        observateur.observe(element);
      });
    }
  }

  /* ---------------------------------------------------------------------
     Compteurs chiffres

     Ce sont les quatre chiffres qui decident : le visiteur ne retiendra
     qu'eux. La valeur cible vit dans data-chiffre et l'eventuel suffixe dans
     data-suffixe, le texte visible reste juste dans le HTML : sans
     JavaScript, le chiffre est deja la, correctement formate.
     --------------------------------------------------------------------- */
  var chiffres = document.querySelectorAll("[data-chiffre]");

  if (chiffres.length && !mouvementReduit &&
      typeof IntersectionObserver === "function") {
    var formateur = new Intl.NumberFormat("fr-FR");

    var compterJusqua = function (element) {
      var cible = Number(element.getAttribute("data-chiffre"));
      if (!isFinite(cible)) {
        return;
      }

      var suffixe = element.getAttribute("data-suffixe") || "";
      var duree = 1200;
      var debut = null;

      var pas = function (horodatage) {
        if (debut === null) {
          debut = horodatage;
        }
        var avancement = Math.min((horodatage - debut) / duree, 1);
        // Courbe sortante : le compteur ralentit en approchant de sa valeur,
        // ce qui rend la lecture du chiffre final plus nette.
        var adouci = 1 - Math.pow(1 - avancement, 3);
        element.textContent =
          formateur.format(Math.round(cible * adouci)) + suffixe;

        if (avancement < 1) {
          window.requestAnimationFrame(pas);
        }
      };

      element.textContent = formateur.format(0) + suffixe;
      window.requestAnimationFrame(pas);
    };

    var observateurChiffres = new IntersectionObserver(
      function (entrees) {
        entrees.forEach(function (entree) {
          if (entree.isIntersecting) {
            // Le compte suit la cascade d'apparition du bloc, sinon les
            // chiffres montent avant que leur carte ne soit visible.
            var rang = Number(entree.target.closest(".chiffre") &&
              entree.target.closest(".chiffre").style.getPropertyValue("--rang")) || 0;
            window.setTimeout(function () {
              compterJusqua(entree.target);
            }, rang * 110);
            observateurChiffres.unobserve(entree.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    chiffres.forEach(function (chiffre) {
      observateurChiffres.observe(chiffre);
    });
  }

  /* ---------------------------------------------------------------------
     Ombre de l'en-tete au defilement
     Une seule mesure par image, sinon chaque evenement de defilement force
     une lecture du layout.
     --------------------------------------------------------------------- */
  var entete = document.querySelector(".entete");

  if (entete && !mouvementReduit) {
    var enAttente = false;

    var mesurer = function () {
      enAttente = false;
      var defilement = window.pageYOffset || document.documentElement.scrollTop;
      entete.setAttribute("data-defile", String(defilement > 24));
    };

    window.addEventListener("scroll", function () {
      if (!enAttente) {
        enAttente = true;
        window.requestAnimationFrame(mesurer);
      }
    }, { passive: true });

    mesurer();
  }
})();
