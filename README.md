# Institut Horizon Numérique - site vitrine

Site vitrine statique du centre de formation Horizon Numérique, Bonamoussadi,
Douala.

**Aucune étape de build, aucune dépendance.** Ouvrez `index.html` et le site
fonctionne. Déposez le dossier sur Vercel ou Netlify et il est en ligne.

---

## Plan de design

Écrit avant le code, et le code le suit.

### Le problème à résoudre

Le visiteur est un bachelier, ou un parent qui compare deux ou trois centres.
Il cherche quatre réponses : **quelles filières, combien ça coûte, combien de
temps, et est-ce que ça débouche sur un emploi.** Ces quatre réponses doivent
être trouvables en moins de trente secondes. Toute la mise en page découle de
cette contrainte.

### Palette

Le bleu nuit et l'électrique viennent du logo.

| Variable CSS   | Valeur    | Rôle                                    |
| -------------- | --------- | --------------------------------------- |
| `--nuit`       | `#101A3D` | Fond des sections fortes, texte         |
| `--jaune`      | `#FFD400` | **Uniquement** les boutons et ce qui se clique |
| `--electrique` | `#3C4CE0` | Accent secondaire, liens, badges, chiffres |
| `--craie`      | `#F4F4EF` | Fond clair                              |
| `--vert`       | `#0E9F6E` | Indicateurs de réussite : tarifs, taux de placement, débouchés |

**La discipline du jaune est ce qui fait tenir la page.** Il ne sert à rien
d'autre qu'aux appels à l'action. Le bandeau de rentrée du hero, par exemple,
est **encadré** de jaune mais n'a pas de fond jaune : il porte une information
urgente sans voler la vedette au bouton juste en dessous. Si le jaune
apparaissait dans un visuel décoratif, le visiteur ne saurait plus où cliquer.

C'est aussi pourquoi **aucune image du site ne contient de jaune**.

### Typographie

| Police            | Rôle                                                    |
| ----------------- | ------------------------------------------------------- |
| **Space Grotesk** | Titres, chiffres, boutons et libellés de données. Grotesque un peu géométrique, avec du caractère, qui évite le rendu startup générique d'une Poppins ou d'une Montserrat. |
| **IBM Plex Sans** | Corps de texte et tableaux. Très lisible, et surtout dessinée avec de bons chiffres, ce qui compte sur un site rempli de durées, de tarifs et de pourcentages. |

Le `body` porte `font-variant-numeric: tabular-nums` : les chiffres ont tous la
même largeur, donc les tarifs et les durées s'alignent en colonne d'une carte
à l'autre. C'est ce qui rend la comparaison possible d'un coup d'oeil.

### Concept de mise en page

Énergique et structuré : angles nets, rayons faibles, blocs pleine largeur
alternant fond clair et fond nuit. La numérotation des étapes est grande et
assumée. Rien n'est arrondi ni adouci, contrairement au registre rassurant qui
conviendrait à un cabinet médical : ici le ton doit être dynamique.

### Élément signature

**La grille des filières en cartes dépliables.** Chaque carte affiche, sans
aucun clic, les trois informations décisives dans un ordre qui ne change
jamais : **durée, rythme, tarif**. Le clic ne sert qu'à obtenir le détail,
programme et débouchés.

Le bouton de dépliage occupe toute la largeur de la carte : c'est une grande
cible, facile à viser au pouce sur un téléphone d'entrée de gamme. **Plusieurs
cartes peuvent rester ouvertes en même temps** : le visiteur compare deux
formations, refermer la précédente le forcerait à faire des allers-retours.

Tout est en JavaScript natif, avec `aria-expanded` sur le bouton,
`aria-controls` vers le panneau, et l'attribut `hidden` sur le contenu replié
plutôt qu'une classe CSS. Le contenu masqué sort ainsi de l'arbre
d'accessibilité et de la navigation au clavier.

---

## Structure des fichiers

```
institut-horizon-numerique/
  index.html               Accueil
  a-propos/index.html      Le centre
  services/index.html      Les 5 filières en détail
  galerie/index.html       En images
  contact/index.html       Préinscription
  assets/
    css/style.css          Feuille de style unique, commentée
    js/main.js             Menu, cartes dépliables, formulaire
    img/                   Visuels, WebP + repli JPEG
    logo/                  Déclinaisons du logo et jeu d'icônes
  favicon.ico
  robots.txt
  sitemap.xml
  site.webmanifest
  SEO-NOTES.md
  BRIEF-IMAGES.md
  README.md
```

Chemins **relatifs** : le site fonctionne depuis un serveur comme depuis le
disque.

---

## Déclinaisons du logo livrées

| Fichier                   | Usage                                      |
| ------------------------- | ------------------------------------------ |
| `logo.png`                | Logo principal, fond transparent, en-tête  |
| `logo-blanc.png`          | Version monochrome claire, pied de page    |
| `logo-noir.png`           | Version monochrome foncée                  |
| `monogramme.png` / `.svg` | Icône seule, carrée                        |
| `icone.svg`               | Horizon seul, vectoriel, fond transparent  |
| `favicon.ico`             | Multi-résolution 16, 32, 48                |
| `favicon-16x16.png`, `favicon-32x32.png` | Favicons PNG                |
| `apple-touch-icon.png`    | 180x180, fond plein                        |
| `android-chrome-192x192.png`, `android-chrome-512x512.png` | Manifeste |
| `assets/img/og-image.jpg` | 1200x630, aperçu WhatsApp et Facebook      |

**Note sur `logo-blanc.png`** : le jaune y disparaît volontairement. Sur un
aplat nuit, un logo bichrome entrerait en concurrence avec les boutons, seuls
éléments jaunes de l'interface.

---

## Modifier le contenu

### Changer les dates de rentrée

**À faire avant chaque session.** Les deux dates sont définies au même endroit,
dans le script de génération, mais dans le site livré elles apparaissent à
trois endroits :

- le bandeau du hero, dans `index.html` ;
- le pied de page de **toutes** les pages, ligne « Prochaine rentrée » ;
- l'encadré de `contact/index.html` et les fiches de `services/index.html`.

```bash
grep -rl "15 septembre 2026" . | xargs sed -i "s|15 septembre 2026|NOUVELLE DATE|g"
grep -rl "12 janvier 2027" . | xargs sed -i "s|12 janvier 2027|NOUVELLE DATE|g"
```

### Modifier une filière : tarif, durée, programme

Chaque filière apparaît à **deux endroits**, et il faut modifier les deux :

1. la carte de l'accueil, dans `index.html`, bloc `<article class="filiere">` ;
2. la fiche complète dans `services/index.html`, bloc
   `<section class="fiche" id="...">`, **plus le JSON-LD du `<head>`** de cette
   page, qui contient le prix et la durée de chaque `Course`.

Si vous changez un tarif sans mettre à jour le JSON-LD, Google affichera
l'ancien prix dans ses résultats enrichis.

### Ajouter une filière

Dupliquez une carte dans `index.html` et une fiche dans `services/index.html`.
Trois points d'attention :

- l'`id` de la fiche doit être unique et repris dans l'`aria-controls` du
  bouton de la carte ainsi que dans son `id` de panneau (`detail-<id>`) ;
- ajoutez la filière au menu du pied de page et à la liste déroulante du
  formulaire de préinscription ;
- ajoutez un objet `Course` au JSON-LD de la page des filières.

### Brancher le formulaire de préinscription

Le formulaire **n'envoie rien** tant que l'attribut `action` est absent : il
valide les champs et affiche une confirmation locale.

Pour l'activer, créez un formulaire sur `formspree.io` puis dans
`contact/index.html` remplacez :

```html
<form class="formulaire" data-formulaire novalidate>
```

par :

```html
<form class="formulaire" data-formulaire novalidate
      action="https://formspree.io/f/VOTRE_ID" method="POST">
```

### Changer le numéro de téléphone

Le numéro `+237 6 78 46 87 28` est le **numéro actuellement en ligne**.

```bash
grep -rl "678468728" . | xargs sed -i "s|678468728|VOTRE_NUMERO|g"
grep -rl "6 78 46 87 28" . | xargs sed -i "s|6 78 46 87 28|VOTRE NUMERO|g"
```

---

## Accessibilité et performance

- lien d'évitement vers le contenu principal sur chaque page ;
- focus clavier visible partout, avec une couleur d'anneau adaptée au fond :
  jaune sur les sections nuit, électrique sur les sections claires, parce que
  le jaune pur manque de contraste sur fond clair ;
- menu mobile piloté par `aria-expanded` et `aria-controls`, refermable avec
  la touche Échap ;
- cartes de filières avec `aria-expanded`, `aria-controls` et `hidden` ;
- choix du rythme en boutons radio stylés en cartes, avec `fieldset` et
  `legend`, et focus visible sur le conteneur ;
- messages d'erreur de formulaire liés aux champs et annoncés en `aria-live` ;
- `prefers-reduced-motion` respecté ;
- chiffres tabulaires pour l'alignement des tarifs et des durées.

Poids de la page d'accueil, images comprises : environ **106 Ko**.

---

## Animations

Le visiteur compare deux ou trois centres et cherche quatre réponses :
quelles filières, combien ça coûte, combien de temps, est-ce que ça débouche.
Toute la mise en page vise à rendre ces réponses trouvables en moins de trente
secondes ; **le mouvement obéit à la même règle**. Il est donc bref — 460 ms,
contre 820 ms sur un site où l'on cherche à apaiser — il n'attend jamais, et
il sert à diriger le regard vers les informations décisives plutôt qu'à
décorer.

Le mouvement est piloté par des attributs dans le HTML plutôt que par des
sélecteurs de structure : un bloc déplacé garde son animation, un bloc ajouté
en hérite en écrivant un attribut.

| Attribut | Effet |
| --- | --- |
| `data-hero` | Anime les enfants directs dès le chargement, en cascade. Le bandeau de session entre en premier, avant le titre : c'est l'information la plus urgente de la page. |
| `data-anim="montee"` | Entrée par le bas. Le cas général. |
| `data-anim="gauche"` / `"droite"` | Entrée latérale, pour les colonnes appariées. |
| `data-anim="titre"` | Surtitre, titre puis chapô entrent dans l'ordre de lecture. |
| `data-anim="chiffres"` | Bloc signature, voir ci-dessous. |
| `data-anim="etape"` | Trace le filet électrique au-dessus d'une étape d'inscription, puis fait entrer son numéro et son texte. |
| `data-anim="fiche"` | Entrée sobre des fiches de filière détaillées. |
| `data-anim="pastilles"` | Vague rapide sur les entreprises partenaires : elles se lisent d'un bloc, pas une par une. |

Chaque élément accepte `style="--delai:120ms"` pour retarder son entrée et
composer une cascade.

### Le bloc signature : les quatre chiffres

C'est ici que se joue la quatrième question, celle qui décide vraiment : est-ce
que ça débouche sur un emploi. Les valeurs montent depuis zéro et arrivent dans
l'ordre, **le taux de placement en dernier**. Le compte n'est pas une
décoration : il retient le regard sur les seuls chiffres que le visiteur
retiendra de sa visite.

La valeur cible vit dans `data-chiffre`, le suffixe éventuel dans
`data-suffixe`, et le texte visible reste juste dans le HTML :

```html
<p class="chiffre__valeur" data-chiffre="78" data-suffixe=" %">78 %</p>
```

Sans JavaScript, le chiffre est déjà là, correctement formaté. Le script ne
fait que le recompter. Le rang du bloc (`style="--rang:3"`) pilote à la fois
son entrée en CSS et le départ de son compte en JavaScript, pour que le
chiffre ne monte pas avant que sa carte ne soit visible.

### Dépliage d'une filière

Le panneau de détail s'ouvre en 320 ms au lieu d'apparaître d'un coup, pour
que le visiteur garde le fil de l'endroit où il en était dans la carte.
L'animation ne touche pas au mécanisme : le panneau reste masqué par
l'attribut `hidden`, donc il sort toujours de l'arbre d'accessibilité et de la
navigation au clavier quand il est replié, et `aria-expanded` reste la source
de vérité.

### Les trois garde-fous

1. **Sans JavaScript, rien n'est masqué.** Le CSS ne cache un bloc animé que
   sous le sélecteur `.js`, classe posée par un script d'une ligne dans le
   `<head>`.
2. **`prefers-reduced-motion: reduce` désactive tout**, en CSS comme en
   JavaScript : les blocs sont révélés d'emblée, les compteurs affichent leur
   valeur finale et l'en-tête ne réagit plus au défilement.
3. **Aucun contenu ne dépend d'une animation pour exister.** Les valeurs des
   compteurs sont écrites dans le HTML ; le script ne fait que les recompter.

Le script utilise un `IntersectionObserver` qui libère chaque élément dès
qu'il est apparu, et une seule mesure par image pour l'ombre de l'en-tête. Si
le navigateur ne fournit pas `IntersectionObserver`, tout le contenu est
affiché immédiatement.

---

## Mise en ligne

### Netlify

Glissez le dossier sur `app.netlify.com/drop`.

### Vercel

```bash
cd institut-horizon-numerique
npx vercel --prod
```

Répondez « non » à la détection de framework.

### Après la mise en ligne

Voir `SEO-NOTES.md`, section « Les 5 actions à faire vous même ».

---

## Avertissement sur le contenu

Trois éléments sont des **exemples à valider avant mise en ligne** :

- **les trois témoignages d'anciens**, à remplacer par de vrais témoignages
  avec l'accord écrit des personnes citées ;
- **le taux de placement de 78 pour cent**, qui doit correspondre à votre
  réalité et être justifiable ;
- **le numéro d'agrément MINEFOP**, à remplacer par le vôtre ou à retirer.

Les tarifs, durées et programmes des filières doivent également être relus par
la direction pédagogique : ils engagent le centre vis-à-vis des futurs
apprenants.
