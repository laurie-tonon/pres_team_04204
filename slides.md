---
theme: academic
layout: cover
class: text-white
coverAuthor: Laurie
coverBackgroundUrl: ./images/lego_fond.jpg
coverBackgroundSource: unsplash
coverBackgroundSourceUrl: https://unsplash.com/fr/photos/jouet-rond-en-plastique-jaune-et-blanc-zYdYz7JlevE
highlighter: shiki
drawings:
  persist: false
transition: slide-left
mdc: true
---

# Reproductibility and us

---
transition: fade-out
---
# Plan

1. Retour sur les journées du réseau national de recherche reproductible
	1. Le réseau
	2. Les présentations
	3. Les actions
	4. Et pour nous?
	 
2. Début d'application sur un projet
	1. Le projet EXPERIMENT
	2. Les données single cell CD45m
	3. Mes actions 
	

---
layout: cover
coverBackgroundUrl: https://source.unsplash.com/collection/94734566/1920x1080
class: text-white
---

# Retour sur les journées du réseau national de recherche reproductible

---
layout: center
---

<iframe src="https://giphy.com/embed/j0kQJxo5mzGYb4EvWK" width="480" height="377" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/moodman-j0kQJxo5mzGYb4EvWK">via GIPHY</a></p>

---
layout: figure-side
figureCaption: FRRR_logo
figureUrl: /images/FRRN_logo_small.png
---

# Le Réseau

* <mdi-clock-outline /> Réseau récent, les journées de cette année sont seulement les deuxièmes organisées.
* <mdi-account /> Réseau national composé de scientifiques (surtout recherche universitaire) intéressés par le sujet.
* <mdi-person-alert-outline /> Objectif de promouvoir la reproductibilité en recherche, les outils et la formation sur le sujet.
* Fonctionne par liste de diffusion, forums et goupes de travail
    *  [https://www.recherche-reproductible.fr/](https://www.recherche-reproductible.fr/)
    *  [https://groupes.renater.fr/sympa/info/recherche-reproductible](https://groupes.renater.fr/sympa/info/recherche-reproductible)
    *  [https://forum.recherche-reproductible.fr/](https://forum.recherche-reproductible.fr/)

---
layout: figure-side
figureCaption: gitlab pfgt
figureUrl: /images/gitlab_doc_repro.png
---

# Les journées 2024
Saint Martin d'Hères, du 26 au 28 Mars 2024

* Talks sur la reproductibilité en recherche, au sens large
* Organisées sur 3 jours:
    * Jour 1: présentations de nos voisins européens sur le sujet
    * Jour 2: présentations de chercheurs membres du réseau français
    * Jour 3: organisation du réseau

---
layout: center
class: "text-center"
---
# <mdi-memory/>
# Ce que je retiens

---
layout: center
class: "text-center"
---
Pour un chercheur, il n’y a rien de plus frustrant que l’impossibilité de reproduire des résultats majeurs obtenus quelques mois auparavant. Les causes de ce type de déconvenues sont multiples et parfois pernicieuses. Ce phénomène participe à ce que certains identifient comme une “crise de la reproductibilité de la recherche”. — Vers une recherche reproductible, Desquilbet et al., 2019.

---
layout: figure-side
figureUrl: https://journals.plos.org/ploscompbiol/article/figure/image?size=large&id=10.1371/journal.pcbi.1010139.g001
---

# Pas que le code

La reproductibilité se réfléchit à toutes les étapes du projet, de la conception des analyses au reporting final.

* Choix des outils
* Effets des variables et environnement
* Statistiques
* Code
* ...

---
layout: 2x2-grid-header
---

# Des outils internationaux

::topleft::

<v-click>

## Open science

<br />

- [ https://osf.io/](https://osf.io/)
- Environnement 
- Sorte de repository avec stockages de notes, codes, données...

</v-click>

::topright::

<v-click>

## Tier-2

<br />

- [https://tier2-project.eu/](https://tier2-project.eu/)
- Projet international

</v-click>

::bottomleft::

<v-click>

## European open science cloud
<br />

- [https://eosc-portal.eu/](https://eosc-portal.eu/)
- Projet européen de cloud pour partager des données

</v-click>

::bottomright::

<v-click>

## HAL
<br />

- [https://hal.science/](https://hal.science/)
- Archives ouvertes de projets scientifiques

</v-click>

---

# La formation

<mdi-account-school-outline font-size="72px"/>

- Importance de former les étudiants (master, thésards..)
    - Summer schools, ECTS...
- Fournir des outils pour former les formateurs (exemple [zenodo.org](https://zenodo.org/search?q=metadata.creators.person_or_org.name%3A%22Eva%20Furrer%22&l=list&p=1&s=10&sort=bestmatch))
- Difficulté à faire appliquer dans les labos ce qu'on apprend en formation
   => besoin de direction

---
layout: figure
figureCaption: FAIR principles, Par SangyaPundir — Travail personnel, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=53414062
figureUrl: ./images/FAIR_data_principles.jpg
---

# Les données
Penser aussi licenses, DOI
---

# Les actions du réseau

<mdi-map-check-outline font-size="72px"/>
- Des groupes de travail (formation, notebooks...)
<br />
- Des MOOC, sur la plateforme FUN
    - Recherche reproductible : principes méthodologiques pour une science transparente
    - Reproducible Research II: Practices and tools for managing computations and data
<br />
- Recrutement d'un project manager
<br />
- Lien avec éditeurs, ministère...

---
layout: figure-side
figureUrl: ./images/pfgt_gitlab.png

---
# Et pour nous?

- Gestion des notes:
    - Markdown+++ (cette présentation par exemple <twemoji-star-struck />)

    
- Gestion des codes:
    - Versionner: <mdi-github /> Github, <mdi-gitlab /> gitlab
    - renv ou autre pour gérer les packages (guix?)
    - container: <span v-mark.red="1"> <mdi-docker  /> Docker pour packager tout</span>

    
- Développements => software heritage

<v-click>
```ts
Deviens très important
```
</v-click>

---
layout: cover
coverBackgroundUrl: https://source.unsplash.com/collection/94734566/1920x1080
class: text-white
---

# Début d'application sur un projet

---
layout: center
---

<iframe src="https://giphy.com/embed/1dvbRYfNzOKh1qKSR0" width="480" height="411" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/chubbiverse-smart-math-chubbicorn-1dvbRYfNzOKh1qKSR0">via GIPHY</a></p>

---
layout: figure
figureUrl: ./images/schema_experiment.png
---
# Le projet Experiment

- Tumeurs ovaire: Comparaison de syndrôme paraneoplasique ou non.
- 21 patients: scRNAseq congelé

---

# Les données

Quality controls

```r
RunCellQC(srt = tmp,          UMI_threshold = 2000,          gene_threshold = 500,          mito_threshold = 20,          db_rate = NULL,          outlier_threshold = c("log10_nCount:lower:3", 
                                "log10_nCount:higher:4",                                "log10_nFeature:lower:3",  
                                "log10_nFeature:higher:4",
                                "featurecount_dist:lower:3")
```

Et on retire les cellules CD45+ (contaminants ou erreur).

---
layout: two-cols-header
---

# Les données

Analyses single cell avec Seurat v5.

::left::

#### CTRL

![](/images/qc_ctrl_barplot.png)

::right::

#### PNS

![](/images/qc_pns_barplot.png)

---
layout: two-cols-header
---

# Les données

Analyses single cell avec Seurat v5.

::left::

#### CTRL

![](/images/upset_ctrl.png)

::right::

#### PNS

![](/images/upset_pns.png)

---
layout: two-cols-header
---

# Les données

Analyses single cell avec Seurat v5. Intégration avec harmony.

::left::

#### CTRL

![](/images/umap_ctrl.png)

::right::

#### PNS


![](/images/umap_pns.png)


---
layout: two-cols-header
---

# Les données

Analyses single cell avec Seurat v5. On merge les fibroblasts des 2 conditions.


::left::

![](/images/fibro_merge.png)

::right::

![](/images/fibro_merge_barplot.png)

---

# Mes actions

## Rproject et renv

```
 "Seurat": {
      "Package": "Seurat",
      "Version": "5.0.1",
      "Source": "Repository",
      "Repository": "CRAN",
```
<br/>

## Gitlab
[https://gitlab.com/laurie-tonon/experiment_pj_cd45m](https://gitlab.com/laurie-tonon/experiment_pj_cd45m)
<img src="/images/gitlab_experiment.png" alt="image" width="30%" height="auto">

---
layout: center
class: "text-center"
---

# <mdi-docker  />
# Docker
Soon

---
layout: end
---

# <twemoji-unicorn font-size="72px"/>
# Merci
Questions, discussion

