# Brief images - Institut Horizon Numérique

Document à donner à un photographe, ou à utiliser comme prompts pour un
générateur d'images.

**14 images à produire.** Les visuels en place sont des compositions
graphiques. Remplacez-les **sans changer les noms de fichiers ni les
dimensions**, déclarés en dur dans le HTML.

---

## 1. Récapitulatif

| # | Fichier | Dimensions | Ratio | Sujet |
|---|---------|-----------|-------|-------|
| 1 | `hero` | **2000 x 860** | 2.33:1 | Apprenants en cours, vue large |
| 2 | `locaux` | **1200 x 840** | 10:7 | Une salle de cours |
| 3 | `pedagogie` | **1200 x 840** | 10:7 | Travail en groupe sur un projet |
| 4-6 | `ancien-sf`, `ancien-mt`, `ancien-ab` | **400 x 400** | 1:1 | Portraits des trois anciens |
| 7 | `salle-cours` | **1080 x 810** | 4:3 | Salle de cours |
| 8 | `labo-informatique` | **1080 x 810** | 4:3 | Laboratoire informatique |
| 9 | `labo-reseaux` | **1080 x 810** | 4:3 | Laboratoire réseaux |
| 10 | `atelier-projet` | **1080 x 810** | 4:3 | Salle de projet |
| 11 | `cours-du-soir` | **1080 x 810** | 4:3 | Cours du soir |
| 12 | `soutenance` | **1080 x 810** | 4:3 | Soutenance devant un jury |
| 13 | `bibliotheque` | **1080 x 810** | 4:3 | Bibliothèque technique |
| 14 | `remise-attestations` | **1080 x 810** | 4:3 | Remise des attestations |

Chaque image en **`.webp` + `.jpg`**. `og-image.jpg` est déjà produite à partir
du logo.

---

## 2. La contrainte de couleur

> **Aucune image ne doit contenir de jaune vif.**

Le jaune `#FFD400` est réservé aux boutons et à ce qui se clique. C'est la
règle qui structure toute l'interface : si du jaune apparaît dans une photo,
l'oeil ne distingue plus les zones cliquables du décor.

Concrètement : évitez les murs peints en jaune, les chaises jaunes, les
vêtements jaune vif au premier plan. Le bleu, le blanc, le gris et le vert
sont les bienvenus.

---

## 3. Direction artistique commune

### Ce qui est attendu

- **Des gens en train de travailler**, pas des salles vides. C'est la
  différence entre un centre qui tourne et une brochure.
- **Ambiance studieuse mais vivante** : concentration, entraide, écrans
  allumés, quelqu'un qui explique au tableau.
- **Lumière naturelle** dominante, complétée par l'éclairage de la salle.
- **Diversité réelle des apprenants** : des jeunes sortis du lycée comme des
  adultes en reconversion, hommes et femmes en proportions équilibrées. Les
  cours du soir accueillent des gens qui travaillent déjà, cela doit se voir.
- **Matériel visible et identifiable** : écrans, baie de brassage, câbles
  réseau. C'est ce qui prouve que le centre est équipé.

### Ce qu'il faut éviter

- Salles vides et rangées, sans personne.
- Photos posées, tout le monde regardant l'objectif en souriant.
- Ordinateurs éteints ou écrans noirs : cela donne un centre à l'arrêt.
- Le cliché du code vert sur fond noir, ou des mains sur un clavier en gros
  plan sans contexte.
- Marques et logos de constructeurs lisibles en gros plan.
- Texte, logo ou filigrane incrusté.

### Prompt de base réutilisable

```
Documentary photograph inside a vocational IT training center in Douala,
Cameroon. Students of mixed ages and genders working at computers, screens on,
an instructor explaining. Natural daylight from windows, blue and white
interior, no yellow. Candid working atmosphere, not posed. Realistic
photograph, no text, no watermark, no brand logos.
```

Ratio **21:9** pour le hero, **4:3** pour la galerie, **1:1** pour les
portraits.

---

## 4. Image par image

### `hero` - 2000 x 860

Vue large d'une salle en activité, prise depuis le fond ou depuis un angle.
Plusieurs apprenants de dos ou de trois quarts devant leurs écrans, un
formateur debout.

> **Important** : le texte du site se superpose sur le **tiers gauche** de
> cette image, avec un voile sombre. Cette zone doit rester relativement
> calme, sans visage important ni détail à préserver.

### `locaux` - 1200 x 840

Une salle de cours vue depuis la porte, avec des apprenants installés.
L'objectif est de montrer la capacité et l'équipement.

### `pedagogie` - 1200 x 840

Trois ou quatre apprenants autour d'un même écran ou d'un tableau, en train de
discuter d'un projet. C'est l'image qui illustre la pédagogie par projet,
elle doit montrer de l'échange, pas du travail individuel.

### Les trois portraits d'anciens - 400 x 400

| Fichier | Personne | Poste affiché sur le site |
|---------|----------|---------------------------|
| `ancien-sf` | Sandrine Fotso | Développeuse front-end chez Sotracam Digital |
| `ancien-mt` | Marcel Tandjeu | Administrateur réseaux chez Wouri Assurances |
| `ancien-ab` | Aïcha Bello | Community manager, en freelance |

Ce sont actuellement des pastilles d'initiales : aucun visage n'a été
fabriqué, un visage généré se repère immédiatement et ruinerait la crédibilité
d'un témoignage.

**Consignes** : cadrage carré, visage centré, buste visible, tenue de travail,
expression naturelle. Fond neutre ou lieu de travail flou. Ils sont affichés en
petit, dans un cercle de 52 px : cadrez serré, un plan large serait illisible.

> **Les témoignages sont des exemples.** Remplacez-les par de vrais
> témoignages et obtenez l'**accord écrit** de chaque ancien avant de publier
> son nom, sa photo et son employeur.

### Les huit images de la page En images - 1080 x 810

| Fichier | Sujet | Précision |
|---------|-------|-----------|
| `salle-cours` | Salle de cours | Groupe en cours, formateur au tableau |
| `labo-informatique` | Laboratoire informatique | Rangées de postes, tous occupés |
| `labo-reseaux` | Laboratoire réseaux | **Baie de brassage, câbles, commutateurs** |
| `atelier-projet` | Salle de projet | Petits groupes, ambiance décontractée |
| `cours-du-soir` | Cours du soir | **Éclairage artificiel, fenêtres sombres** |
| `soutenance` | Soutenance de projet | Un apprenant présente, jury assis face à lui |
| `bibliotheque` | Bibliothèque technique | Ouvrages, postes de consultation |
| `remise-attestations` | Remise des attestations | Groupe souriant, attestations en main |

Deux images portent plus que les autres :

- **`labo-reseaux`** prouve que le centre possède du vrai matériel, argument
  central de la filière la plus chère après le développement ;
- **`cours-du-soir`** doit être prise **le soir**, lumière artificielle et
  fenêtres noires. Une photo de jour ne convaincra pas les actifs, qui sont la
  moitié de vos apprenants.

---

## 5. Si vous photographiez vous même

- Photographiez **pendant un vrai cours**, pas dans une salle mise en scène.
- **Prévenez le groupe** en début de séance et proposez à ceux qui refusent de
  se placer hors champ.
- Faites signer une **autorisation de droit à l'image** à chaque personne
  reconnaissable, apprenants et formateurs. Pour les mineurs, l'autorisation
  est signée par le représentant légal.
- Prenez la photo des cours du soir un jour où la lumière est déjà tombée.
- Variez les points de vue : depuis le fond, depuis l'avant, en plongée
  légère.
- Un téléphone récent suffit. Montez la luminosité plutôt que d'utiliser le
  flash, qui écrase les visages et fait briller les écrans.

---

## 6. Export et mise en place

```bash
# Vue de galerie, 4:3
convert source.jpg -resize 1080x810^ -gravity center -extent 1080x810 \
        -quality 82 -interlace Plane assets/img/labo-reseaux.jpg
cwebp -q 78 assets/img/labo-reseaux.jpg -o assets/img/labo-reseaux.webp

# Portrait d'ancien, carré, cadrage sur le visage
convert source.jpg -resize 400x400^ -gravity north -extent 400x400 \
        -quality 84 -interlace Plane assets/img/ancien-sf.jpg
cwebp -q 80 assets/img/ancien-sf.jpg -o assets/img/ancien-sf.webp

# Hero, panoramique
convert source.jpg -resize 2000x860^ -gravity center -extent 2000x860 \
        -quality 80 -interlace Plane assets/img/hero.jpg
cwebp -q 76 assets/img/hero.jpg -o assets/img/hero.webp
```

### Poids à respecter

| Image | Cible WebP | Maximum |
|-------|-----------|---------|
| `hero` | 60 à 90 Ko | 120 Ko |
| Portraits d'anciens | 10 à 20 Ko | 30 Ko |
| Galerie et intérieurs | 30 à 50 Ko | 70 Ko |

L'accueil pèse actuellement **106 Ko**. La cible est de rester sous 1 Mo.

### Après remplacement

Mettez à jour l'attribut `alt` de chaque image : il doit décrire la photo
réelle, en français. Les `alt` sont dans `index.html`, `a-propos/index.html`
et `galerie/index.html`.

Vérifiez ensuite :

```bash
python3 -m http.server 8099
# puis ouvrez http://localhost:8099/
```
