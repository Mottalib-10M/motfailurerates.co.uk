# Synthèse des testeurs naïfs du 2026-11-14, tour 5 (corrections du 6e tour) : motfailurerates.co.uk

Notes reçues : 7/8/8, 7/7/8, 6/7/8.
Périmètre de ce tour : **la correction validée par l'éditeur seulement** (deux chiffres côte à côte, verdict sur le prochain MOT).
Le reste est noté « non retenu à ce tour », à reprendre si l'éditeur le demande.
Rappel pour ne pas osciller : tour 3 = gros chiffre à l'âge actuel ; tour 4 = gros chiffre de l'année choisie (choix de l'éditeur) ;
les trois testeurs du tour 5 retrouvent le défaut inverse (le chiffre du prochain MOT est noyé). L'éditeur tranche pour **les deux
chiffres au même niveau** : plus de chiffre « principal » et « secondaire » à inverser d'un tour à l'autre.

| # | Difficulté | Testeurs | Décision |
|---|---|---|---|
| 1 | Le gros chiffre (21,4 %, Focus 2015 à 8 ans en 2023) ne répond pas à « mon prochain MOT » ; le 36,4 % est noyé dans un paragraphe | 3 | **corrigé.** `MotChecker.tsx` : deux cases côte à côte, même taille (`text-3xl`), chacune titrée : « Your next MOT (cars aged 11 now) 36.4% » et « Your car's year (at 8, in 2023) 21.4% ». Un seul verdict, sur le prochain MOT : « Worse than average for its age: of Focus cars aged 11, 36.4% failed, against 34.4% for all cars the same age. » Ligne courte « Why two figures: 2023 is the latest year with figures by model, so your next MOT is read from cars that were already 11 then (registered in 2012)… ». Moins de 100 tests à l'âge actuel : la case montre le taux de toutes les voitures de cet âge, et le verdict est remplacé par « Too few … tests at 11 (fewer than 100) … ». Chiffres lus dans les mêmes données qu'avant (mot-lite.json), rien d'ajouté. |
| 2 | Comparateur : même logique attendue | — (éditeur) | **corrigé.** Le second modèle a les deux mêmes cases (« Next MOT (cars aged 11 now) 41.7% », « Its year (at 8, in 2023) 31.0% ») ; le verdict porte sur le prochain MOT (« For the next MOT (cars aged 11), the Yaris failed less often than the Corsa: 30.2% against 41.7%. ») ; repli sur l'année choisie si un des deux modèles a moins de 100 tests à cet âge. |
| 3 | Trop de taux nationaux (28,6 %, 26,8 %, 24,5 %) ; « Latest national rate » | 3 | **non retenu à ce tour** : hors correction validée (en partie allégé : le 24,5 % ne figure plus dans l'encadré). |
| 4 | Classements « at equal age » dont l'ordre semble contredire les pourcentages ; pas de rang ni d'écart | 3 | **non retenu à ce tour** : hors correction validée. Piste : afficher l'écart au même âge et un numéro de rang. |
| 5 | Libellés de défauts DVSA (« ingress of dirt », « pins and bushes », « roller brake test ») | 3 | **non retenu à ce tour** : traduire chaque libellé demande un dictionnaire relu ; hors correction validée. |
| 6 | Aide « BMW 320d? Try 320, then 3 Series. » peu claire ; classement BMW en codes moteur | 3 | **non retenu à ce tour** : hors correction validée. |
| 7 | Modèles non cliquables dans les listes (Transit, Mini, Q2, A8…) | 3 | **non retenu à ce tour** : hors correction validée. |
| 8 | Page A4 : « from 2001 to 2020 » alors que le tableau montre 2007–2020 | 2 | **non retenu à ce tour** : hors correction validée ; à aligner au prochain tour (défaut objectif signalé). |
| 9 | Année de départ différente selon la page (2015, 2016, 2013) ; 3 Series 24,5 % / 17,4 % | 1 | **non retenu à ce tour** : chaque page part de l'année la plus testée du modèle. |
| 10 | Colonne « All cars failed » pas lue comme une moyenne | 1 | **non retenu à ce tour** : hors correction validée. |
| 11 | Sigles (DVLA, DfT, OGL, « class 4 », « DVSA/MOT/01 ») | 1–2 | **non retenu à ce tour** : hors correction validée. |
| 12 | Comparateur caché / liste après 4 écrans ; menu « Cost, dates and retests » replié ; accueil long | 1–2 | **non retenu à ce tour** : hors correction validée. |
| 13 | Pas de mention « exemple » sur l'accueil, pas de bouton « Go » | 1 | **non retenu à ce tour** : hors correction validée. |

## Défauts de trame relevés
- Aucun : tout est dans `src/components/calc/MotChecker.tsx` (propre au site). `_trame/_template` non touché.

## Contrôles
- Test `tests/coherence-tour3.test.ts` mis à jour : deux cases titrées (Focus 2015 : 36,4 % prochain MOT, 21,4 % année), même taille (`text-3xl`, plus de `text-4xl`), un seul verdict, sur l'âge actuel, ligne « Why two figures ».
- `npm run check` : passe (EXIT 0) — build, 44 tests vitest, check-seo (5 avertissements « §21 » non bloquants sur des pages marque/modèle non touchées ; 22 au tour précédent), unique, trame, liens, layout (48 pages × 4 largeurs, 0), sources 0 morte, premier écran 0/46, contraste 0, saisie 0, règles 0, mot-clé 0/46. Log : `logs/mot-t6-check.log`.
- Captures refaites (accueil, comparateur) et relues : cases « Your next MOT (cars aged 11 now) 36.4% » / « Your car's year (at 8, in 2023) 21.4% » de même taille ; comparateur Yaris 30.2 % / 18.0 %, Corsa 41.7 % / 31.0 %, verdict « For the next MOT (cars aged 11), the Yaris failed less often than the Corsa: 30.2% against 41.7%. »
