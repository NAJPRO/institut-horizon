/* ==========================================================================
   Institut Horizon Numerique - comportements
   JavaScript natif et defensif : chaque bloc verifie la presence de son point
   d'ancrage, pour qu'une page qui n'utilise pas un composant ne provoque
   aucune erreur en console.
   ========================================================================== */
(function () {
  "use strict";

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
})();
