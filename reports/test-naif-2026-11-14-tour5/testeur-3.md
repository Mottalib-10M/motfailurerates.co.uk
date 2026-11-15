# Test naïf du 2026-11-14 (tour5), testeur 3 : motfailurerates.co.uk
**Persona :** Britannique de 61 ans, se sert de son téléphone pour WhatsApp et la météo, lit lentement, se méfie des sites qui demandent des données, ne comprend pas les sigles. Il/elle a cliqué sur le résultat Google « MOT Failure Rate by Make, Model and Age: Will My Car Pass? » parce qu'il/elle a cette question pour lui/elle-même ou un proche.

## 1. Concept

**Après 5 s (01-accueil-1) :** « C'est un site qui me dit si les voitures comme la mienne ratent souvent le MOT. » Le titre « MOT failure rate by make, model and age » et les trois menus « Make / Model / Year first registered » déjà remplis (Ford, Focus, 2015) sont limpides : je choisis ma voiture, j'ai un chiffre. Le MOT, je connais, c'est mon contrôle annuel. Rien ne me demande ma plaque ni mon e-mail : bon signe.

**Après 2 min :** je comprends que c'est une grosse base de chiffres officiels (« DVSA », dont je découvre le nom complet seulement plus bas) qui donne, pour mon modèle et mon année, le pourcentage de voitures recalées, la comparaison avec « all cars the same age », les pannes les plus fréquentes, le prix (« up to £54.85 ») et un bouton « 7 free checks before your MOT ». Le site dit honnêtement qu'il ne peut pas dire si **ma** voiture passera (« only a tester who inspects it can », page About).

**Clair ?** Le principe oui. Le résultat, à moitié : il y a trop de pourcentages qui se disputent ma lecture (voir §2).
**Pour qui ?** Les automobilistes d'Angleterre, d'Écosse et du pays de Galles avant leur MOT, ou quelqu'un qui hésite à acheter une occasion.
**Bénéfice concret :** savoir si ma voiture est « plutôt solide » ou « plutôt fragile » pour son âge, savoir quoi vérifier (ampoules, pneus, suspension), connaître le prix maximum et les règles de contre-visite.

## 2. « Tout le monde peut-il comprendre ? »

**Verdict : oui pour l'idée, non pour la lecture du chiffre principal.** Une personne comme moi comprend en 5 s ce que fait le site, mais se trompe probablement de chiffre.

Où ça décroche :
- **Le gros chiffre n'est pas mon cas d'aujourd'hui.** Pour une Focus de 2015 marquée « (11 years old now) », le grand « 21.4% » est le taux « when it was 8 years old » en 2023. Le chiffre qui me concerne vraiment (« At 11, the age it is now… 36.4% ») est plus bas, plus petit, au milieu d'un paragraphe. Je retiens « 21.4 %, mieux que la moyenne » et je pars rassuré(e) à tort.
- **Deux colonnes de pourcentages** partout (« Failed » / « All cars the same age failed », « FAILED » / « ALL CARS FAILED ») : je dois comprendre que la deuxième est la moyenne de référence. Ce n'est expliqué qu'en petits caractères gris.
- **Les classements « at equal age »** : sur « Cars least likely to fail », la Q2 (9.4%) passe avant la T-Roc (9.2%) ; sur la page Audi, l'A8 (14.1%) est avant la Q2 (9.4%). Le texte l'explique (« it is further below its own reference »), mais pour moi un classement où un plus petit chiffre arrive après un plus grand, c'est une erreur.
- **Des données de 2023** lues en 2026 : le site s'en justifie, mais je me demande si c'est encore valable.
- **Sigles et jargon** : DVSA (développé seulement sous le tableau), DVLA, DfT, V5C, « class 4 », « Open Government Licence v3.0 », « anonymised », « ingress of dirt », « roller brake test », « pins and bushes ».

## 3. Parcours écran par écran

| Écran | Compris | Coince |
|---|---|---|
| 01-accueil-1 | Titre, phrase « 28.6% of cars failed their MOT at the first attempt in 2023 », les 3 menus, « Year first registered » avec « (11 years old now) ». « As on the V5C logbook » : je sais où chercher l'année. | « Choose yours: the share of the same make, model and year that failed, against every car of that age » : phrase longue, j'ai dû la relire. Je ne vois pas de bouton « Go » : je ne sais pas si je dois valider. |
| 01-accueil-suite1 | « 21.4% », « Better than average for its age », bouton vert « 7 free checks before your MOT », pannes fréquentes, prix £54.85, « When is my MOT due? ». | Le paragraphe « At 11, the age it is now » contient le chiffre utile (36.4%) noyé dans une phrase de 5 lignes. « lamps, reflectors and electrical equipment 47.3% » : 47 % de quoi ? (« of failed tests », dit la fin de phrase). |
| 01-accueil-suite2 | Tableau par année avec ma ligne en surbrillance (2015) et 2012. | 4 colonnes en capitales (« REGISTERED TESTS FAILED ALL CARS FAILED ») : je ne sais pas tout de suite que « ALL CARS FAILED » est la moyenne. Pourquoi 2012 est aussi en gras ? (expliqué dans la légende, en gris). |
| 01-accueil-suite3 | « Nothing you choose is sent anywhere » : rassurant. Le paragraphe 12.3 % / 31.7 % / 43.7 % selon l'âge est parlant. | « anonymised test results DVSA publishes one line per test » : technique. « 32,769,477 » : chiffre impressionnant mais inutile pour moi. |
| 01-accueil-suite4 | Tableau des taux nationaux par période, simple. Titre « Age is the first factor » clair. | « DVSA table DVSA/MOT/01 » : charabia. Le repli « How the rates are counted, and why this file (method) » ne m'attire pas. |
| 01-accueil-suite5 | L'idée que l'âge compte plus que la marque. | Paragraphe « That is why a model's raw rate can mislead… » très long et abstrait : je décroche. |
| 01-accueil-suite6 à suite9 | Liste des 20 modèles les plus testés, je retrouve des voitures que je connais (Fiesta, Corsa, Yaris). | Pas de numéro de rang. Certains noms sont soulignés (liens) et d'autres non (« Ford Transit », « Mini », « Volkswagen Transporter ») : pourquoi ? Long défilement de chiffres sur le téléphone. |
| 01-accueil-suite9/10 | « What fails cars at the MOT » : pneus sous 1,6 mm, ampoule, ressort cassé. Concret. | « A failed test carries 2.39 defects on average » : bizarre. |
| 01-accueil-suite11 | Diesel / essence / hybride, kilométrage, régions (Twickenham vs Dundee) : intéressant. Prix, date du premier MOT, amende de £1,000, contre-visite gratuite sous 10 jours : très utile. | « up to a month (minus a day) early » : bien mais à relire. |
| 01-accueil-suite12 | « Before the test: seven checks that cost nothing » : liste numérotée claire, c'est ce que je cherchais. | La fin n'est pas capturée. |
| 02-menu-1 / suite1 | Rubriques lisibles : « Failure rates », « By make » (Ford, Vauxhall…), « 7 free checks before your MOT ». | « Cost, dates and retests » est replié alors que c'est ce qu'une personne pressée cherche. Pas d'entrée « Home ». Pas de champ de recherche. |
| 03-en-about-1 à suite4 | « Radif Partners, a company that builds free tools on public data », « It is free and needs no account or email », « We are not DVSA… », « cannot… tell you whether your own car will pass ». Très rassurant et honnête. | DfT, DVLA, « Open Government Licence v3.0 » : sigles. « Radif Partners » ne me dit rien. |
| 04-en-audi-a3-1 à suite6 | Même outil, déjà sur Audi A3, 17.8 %, « Better than average for its age ». Tableau des défauts par groupe puis des pannes précises. | Même confusion entre le grand 17.8 % (à 8 ans) et le 31.0 % (à 11 ans). Libellés officiels incompréhensibles : « ball joint dust cover no longer prevents the ingress of dirt », « projected beam image is obviously incorrect ». |
| 05-en-audi-a4-1 à suite6 | Tout pareil, 20.2 %. « High mileage, low failure » : phrase claire. | Le texte dit « every registration year from 2001 to 2020 » alors que le tableau va de 2020 à 2009 (repli jusqu'à 2007) : je ne vois pas 2001. « Pins and bushes » : inconnu. |
| 06-en-audi-1 à suite6 | Page marque : « Opens on the A3: choose yours. » (bonne aide). « the third best record of the makes… behind BMW and Jaguar ». | Classement A8, A7, Q2, Q7… : l'ordre ne suit pas les chiffres affichés. Les noms de modèles ne sont pas des liens sauf A3 et A4. |
| 07-en-bmw-3-series-1 à suite6 | « BMW 320d? Try 320, then 3 Series. » : utile, ma voiture s'appelle « 320d » sur la carte grise. | « 2013 (13 years old now) » : 24.5 % en gros, mais 32.1 % pour l'âge actuel. Ligne 2020 : 14.4 % contre 12.3 % (pire que la moyenne) sans aucune mention. « Service brake (roller brake test): efficiency below requirements » : jargon. |
| 08-en-bmw-1 à suite6 | « BMW has the best record at equal age » : clair. | Liste de modèles « M3, 730, X6, Z4, 530, 435… » sans rang, ordre non intuitif. |
| 09-en-cars-least-likely-1 à suite6 | Le comparateur à deux voitures (Yaris contre Corsa) est la meilleure trouvaille : « Registered in 2015, the Yaris failed less often than the Corsa: 18.0% against 31.0% » en gras, puis « At 11… Yaris 30.2%, Corsa 41.7% ». Ça, je comprends tout de suite. | « Compare with: make / model » se trouve sous le pli, je risque de ne pas le voir. « class 4 », « ranked at equal age » : jargon. Classement sans numéros. |

## 4. Chaque fonction

| Fonction | Trouvée ? | Comprise ? | Utile ? | Évidence /5 |
|---|---|---|---|---|
| Vérificateur marque / modèle / année | Oui, tout de suite | Oui pour la saisie, à moitié pour le résultat (quel chiffre est le mien) | Très | 3/5 |
| Comparaison à « all cars the same age » | Oui | Avec effort | Oui | 3/5 |
| Taux « à l'âge actuel » (At 11, the age it is now) | Seulement en lisant | Oui une fois trouvé | Le plus utile | 2/5 |
| Tableau par année d'immatriculation | Oui | Moyennement (colonnes) | Oui | 3/5 |
| Pannes les plus fréquentes (groupes + détails) | Oui | Groupes oui, détails non (libellés officiels) | Oui | 3/5 |
| « 7 free checks before your MOT » | Oui (bouton vert + menu + liste en bas d'accueil) | Oui | Très | 5/5 |
| Prix, date et contre-visite | Oui (liens « Cost and retests », « When is my MOT due? ») | Oui | Très | 4/5 |
| Comparateur deux modèles (Cars least likely to fail) | Seulement via le menu | Oui, c'est le plus clair | Oui (achat d'occasion) | 4/5 |
| Classements par marque / top 20 | Oui | Non (ordre qui contredit les chiffres) | Moyennement | 2/5 |
| Page About (qui, pourquoi, financement) | Via pied de page / menu | Oui | Rassurante | 4/5 |

## 5. Enchaînement et navigation

- Chaque page reprend le même outil en haut, déjà réglé sur la voiture de la page : on ne se perd pas, et le fil d'Ariane « Home / Audi A3 » aide.
- Le lien « Every age and failure reason for the Focus → » mène logiquement à la page modèle ; sur la page modèle elle-même il disparaît, c'est cohérent.
- Le bouton vert « 7 free checks before your MOT » revient partout : bonne constance.
- Pages très longues sur téléphone (13 écrans pour l'accueil) : la partie la plus pratique (les 7 contrôles) est tout en bas.
- Menu : « Cost, dates and retests » replié, pas de « Home », pas de recherche par modèle.
- Liens incohérents dans les listes : certains modèles cliquables, d'autres non, sans indication.

## 6. Difficultés classées

1. **Le gros chiffre n'est pas celui de mon âge actuel** (01-accueil-suite1, 04, 05, 06, 07, 08, 09). Vécu : je lis « 21.4% / Better than average » et je crois que ma Focus de 11 ans a 1 chance sur 5 d'échouer, alors que le site lui-même estime 36.4 %. Recommandation : mettre en grand le taux à l'âge actuel, et le taux 2023 en second. Texte : « Your Focus is 11 now. Of Focus cars aged 11 in 2023, **36.4%** failed (all cars aged 11: 34.4%). When yours was 8, in 2023, it did better than average: 21.4% against 24.5%. »
2. **La deuxième colonne de pourcentage n'est pas nommée comme une moyenne** (01-accueil-suite2, tous les tableaux et listes). Vécu : « ALL CARS FAILED » ressemble à un deuxième résultat pour ma voiture. Recommandation : renommer « Average, all cars » et colorer en vert/rouge la ligne selon qu'elle est au-dessous ou au-dessus. Texte : colonne « AVERAGE (ALL CARS) » ; ligne « All cars the same age failed » → « Average for all cars of that age ».
3. **Classements dont l'ordre contredit les chiffres** (01-accueil-suite6, 06-suite4, 08-suite4, 09-suite5). Vécu : Q2 9.4 % avant T-Roc 9.2 %, A8 14.1 % avant Q2 9.4 % ; je crois à une erreur. Recommandation : numéroter les rangs et afficher l'écart, qui est le critère de tri. Texte : « 1. Audi Q2 — 5.5 points better than average (9.4% against 14.9%) ».
4. **Libellés de pannes officiels incompréhensibles** (04-suite5/6, 05-suite6, 07-suite6). Vécu : « ingress of dirt », « projected beam image is obviously incorrect », « pins and bushes », « roller brake test ». Recommandation : une traduction simple en tête, le libellé officiel en petit. Texte : « Split rubber cover on a suspension joint (lets dirt in) », « Headlight pointing the wrong way », « Worn suspension pins and bushes (rubber mounts) », « Brakes too weak on the test machine ».
5. **Sigles non expliqués à la première apparition** (01-accueil-1/3/4, 03-about, 09-suite5). Vécu : DVSA, DVLA, DfT, V5C, « class 4 », « DVSA/MOT/01 ». Recommandation : développer à la première occurrence, supprimer les références de tableau. Texte : « official results from the DVSA (the government agency that runs the MOT) » ; « As on the V5C logbook (your car's registration document) » ; « cars and small vans » au lieu de « class 4 ».
6. **Pas de bouton de validation ni d'invitation claire à changer de voiture** (01-accueil-1). Vécu : les menus sont pré-remplis, je ne sais pas si je dois appuyer quelque part, ni si Ford Focus 2015 est « un exemple ». Recommandation : une ligne au-dessus des menus. Texte : « Example shown: Ford Focus 2015. Pick your own car below, the result updates by itself. »
7. **Le comparateur deux voitures est caché** (09-…-1/suite1). Vécu : c'est la fonction la plus parlante, mais elle n'est que dans la page « Cars least likely to fail », sous le pli. Recommandation : un lien depuis le résultat de l'accueil. Texte : « Compare with another car → ».
8. **Données de 2023 et incohérences de détail** (05-suite3 ; 07-suite2). Vécu : « every registration year from 2001 to 2020 » alors que je ne vois que 2009–2020 ; ligne BMW 2020 pire que la moyenne sans mention. Recommandation : aligner le texte sur le tableau visible et signaler « worse than average » quand c'est le cas. Texte : « Year by year, the A4 is at or below the average for every year shown (2007 to 2020). »

## 7. À garder

- L'outil en haut de page, pré-réglé sur la voiture de la page, avec « (11 years old now) » à côté de l'année.
- « Better than average for its age » en gras : verdict lisible.
- « Nothing you choose is sent anywhere », « free and needs no account or email », « We are not DVSA… We cannot… tell you whether your own car will pass » : très rassurant pour quelqu'un de méfiant.
- Le bouton vert « 7 free checks before your MOT » et la liste numérotée des 7 contrôles.
- Prix plafond £54.85, contre-visite gratuite sous 10 jours, amende jusqu'à £1,000 : infos pratiques.
- « BMW 320d? Try 320, then 3 Series. » et « Opens on the A3: choose yours. » : aides en langage simple.
- Le comparateur Yaris contre Corsa avec la phrase de conclusion en gras.

## 8. Notes

Clarté : 6/10
Facilité : 7/10
Utilité : 8/10
