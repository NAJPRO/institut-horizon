# Notes SEO - Institut Horizon Numérique

Domaine de référence utilisé dans les balises canoniques, l'Open Graph et le
sitemap : `https://institut-horizon.vercel.app`. **Si le domaine final est
différent, il faut le remplacer partout** (commande en fin de document).

---

## 1. Titles et meta descriptions, page par page

### Accueil `/`

- **Title** (51 caractères)
  `Formation informatique à Douala | Horizon Numérique`
- **Description** (147 caractères)
  `Centre de formation à Bonamoussadi, Douala. Développement web, réseaux,
marketing digital et bureautique. Cours du jour et du soir, de 3 à 12 mois.`
- **Intention visée** : la requête large « formation informatique Douala ».
  La description énumère les filières et le rythme parce que ce sont les deux
  critères de tri du visiteur.

### Le centre `/a-propos/`

- **Title** (52 caractères)
  `Le centre de formation | Horizon Numérique, Douala`
- **Description** (151 caractères)
  `Ouvert en 2012 à Bonamoussadi, Horizon Numérique a formé 2 400 apprenants à
Douala. Équipe pédagogique, laboratoires, matériel et pédagogie par projet.`
- **Intention visée** : réassurance. C'est la page que consulte le parent qui
  paie la formation, pas le jeune qui la suivra.

### Les filières `/services/`

- **Title** (52 caractères)
  `Nos 5 filières et leurs tarifs | Horizon Numérique`
- **Description** (155 caractères)
  `Développement web, réseaux, marketing digital, bureautique et maintenance à
Douala. Programme, durée, tarif en FCFA et débouchés de chaque filière.`
- **Intention visée** : la page la plus stratégique du site. Elle capte les
  requêtes de filière précise (« formation développement web Douala ») et
  celles qui contiennent « prix » ou « tarif ».

### En images `/galerie/`

- **Title** (52 caractères)
  `Salles et laboratoires en images | Horizon Numérique`
- **Description** (152 caractères)
  `Salles de cours, laboratoire réseaux, salle de projet et remise des
attestations : découvrez le centre de formation de Bonamoussadi à Douala.`
- **Intention visée** : preuve matérielle. Un centre qui montre ses
  laboratoires rassure davantage qu'un centre qui les décrit.

### Préinscription `/contact/`

- **Title** (54 caractères)
  `Préinscription en ligne | Horizon Numérique, Douala`
- **Description** (152 caractères)
  `Préinscrivez-vous gratuitement à l'une des cinq filières du centre de
formation de Bonamoussadi, Douala. Réponse du secrétariat sous 48 heures.`
- **Intention visée** : transactionnelle. C'est l'objectif de conversion du
  site entier.

---

## 2. Mots clés visés

### Mots clés principaux

| Mot clé                              | Page porteuse         |
| ------------------------------------ | --------------------- |
| formation informatique Douala        | Accueil               |
| centre de formation Bonamoussadi     | Accueil, Le centre    |
| formation développement web Douala   | Les filières          |
| cours du soir informatique Douala    | Accueil, Les filières |
| formation réseaux Douala             | Les filières          |
| formation marketing digital Cameroun | Les filières          |

### Mots clés secondaires

Travaillés dans les fiches de filière : formation maintenance informatique
Douala, formation bureautique comptabilité Douala, prix formation informatique
Cameroun, formation Sage comptabilité Douala, préparation CCNA Douala,
centre de formation professionnelle Littoral.

### La saisonnalité, à ne pas manquer

Le trafic de ce secteur est **fortement saisonnier**. Les pics se situent en
juillet-août-septembre (après les résultats du baccalauréat) puis en
décembre-janvier. Publiez vos contenus et lancez vos campagnes **six semaines
avant** ces pics, le temps que Google indexe et positionne les pages.

Pensez aussi à mettre à jour les deux dates de rentrée avant chaque session :
elles apparaissent dans le hero de l'accueil, dans le pied de page de toutes
les pages, et dans l'encadré de la page de préinscription.

---

## 3. Données structurées en place

| Page         | Type Schema.org                                                                                                                                                                             |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Accueil      | `EducationalOrganization` avec `address`, `geo` (4.0900 / 9.7400), `telephone`, `email`, `openingHours`, `foundingDate`, `numberOfStudents`, `sameAs`                                       |
| Les filières | Un `Course` par filière, avec `provider`, `coursePrerequisites`, `educationalCredentialAwarded`, `offers` (prix en XAF) et `hasCourseInstance` renseignant `courseMode` et `courseWorkload` |

Les `Course` peuvent faire apparaître les formations dans les résultats
enrichis de Google avec leur durée et leur tarif. C'est un avantage
concurrentiel direct face aux centres qui n'affichent pas leurs prix.

**À vérifier après mise en ligne** avec l'outil de test des résultats enrichis.

---

## 4. Points techniques déjà traités

- `lang="fr"`, `charset UTF-8`, viewport responsive sur les 5 pages.
- Canonical et meta description uniques par page.
- Open Graph complet et carte Twitter `summary_large_image`.
- `og-image.jpg` 1200x630 aux couleurs de la marque.
- Un seul `h1` par page, hiérarchie `h2`/`h3` sans saut de niveau.
- `alt` descriptif en français sur toutes les images.
- WebP avec repli JPEG, `width`/`height` déclarés, `loading="lazy"` hors hero.
- `robots.txt`, `sitemap.xml` avec `lastmod`, jeu d'icônes complet et
  `site.webmanifest` rempli.
- Ancres profondes vers chaque filière (`/services/#dev-web`), utilisables
  directement dans une publication Facebook ou un message WhatsApp.

---

## 5. Les 5 actions à faire vous même après livraison

### 1. Créer la fiche Google Business Profile

Sur `business.google.com`, créez la fiche au nom **Institut Horizon
Numérique**, catégorie principale « École de formation professionnelle ».
Adresse, téléphone et horaires **exactement** comme sur le site. Publiez un
post Google à chaque ouverture de session : ces posts sont peu utilisés par la
concurrence et remontent bien en local.

### 2. Remplacer les visuels par vos photos réelles

Les images actuelles sont des compositions graphiques. Voir `BRIEF-IMAGES.md`.
Les priorités sont le laboratoire réseaux et une salle de cours en activité :
ce sont les deux images qui prouvent que le centre existe vraiment. Les trois
portraits d'anciens sont actuellement des pastilles d'initiales.

### 3. Obtenir l'accord écrit de vos anciens pour les témoignages

Les trois témoignages sont **rédigés à titre d'exemple**. Remplacez-les par de
vrais témoignages, avec le nom, le poste actuel et l'employeur. **Demandez
l'accord écrit** de chaque ancien avant de publier son nom et son employeur.
Un témoignage vérifiable vaut dix arguments commerciaux.

### 4. Vérifier le site dans la Search Console

Sur `search.google.com/search-console`, ajoutez la propriété et soumettez
`https://institut-horizon.vercel.app/sitemap.xml`. Surveillez les requêtes qui
contiennent un nom de filière : elles indiquent quelles formations chercher à
remplir en priorité pour la session suivante.

### 5. Réserver le nom de domaine et le raccorder

Un `.cm` se réserve auprès de l'ANTIC ou d'un bureau d'enregistrement agréé.
`horizonnumerique.cm` est court et se dicte facilement au téléphone, ce qui
compte pour un secrétariat qui reçoit beaucoup d'appels.

### Après changement de domaine

```bash
# depuis le dossier institut-horizon-numerique/
grep -rl "www.horizonnumerique.cm" . | xargs sed -i \
  "s|www.horizonnumerique.cm|votre-domaine.cm|g"
```

---

## 6. Deux mentions à vérifier avant la mise en ligne

**Le taux de placement.** Le site annonce 78 pour cent à six mois, calculé sur
la promotion 2024. Ce chiffre doit correspondre à votre réalité et être
justifiable. La page explique déjà la méthode de calcul et ce que deviennent
les 22 pour cent restants : gardez cette transparence, elle vous protège.

**L'agrément.** Le numéro MINEFOP affiché est un exemple. Remplacez-le par le
vôtre, ou retirez la mention. Afficher un agrément que l'on n'a pas expose à
des sanctions.
