# Synthèse des testeurs naïfs du 2026-11-14, tour 4 (corrections du 5e tour) : motfailurerates.co.uk

Notes reçues : 6/7/8, 6/7/8, 6/7/8 (la clarté bloque, à cause du double chiffre).
Périmètre de ce tour : **les corrections validées par l'éditeur seulement** (gros chiffre, seconde ligne, comparateur).
Le reste est noté « non retenu à ce tour », à reprendre si l'éditeur le demande.
Rappel : le tour 3 avait mis en gros le taux de l'âge actuel (36,4 %) ; l'éditeur a tranché pour l'inverse.

| # | Difficulté | Testeurs | Décision |
|---|---|---|---|
| 1 | Le gros chiffre (36,4 %, « Worse ») est celui des voitures de 2012 ; le chiffre de l'année choisie (21,4 %, « Better ») est en petit ; deux verdicts contraires | 3 | **corrigé.** Cause dans le code (`MotChecker.tsx`, `main`) : le chiffre principal était le taux à l'âge actuel. Désormais `data-principal` = taux de l'année choisie (Focus 2015 : 21,4 %), avec **un seul verdict** (« Better than average for its age: 21.4% failed, against 24.5% for all cars the same age »). En dessous, « At 11, the age it is now » : une phrase explique le lien (« Cars fail more as they get older… 2023 is the latest year with figures by model; the closest guide is Focus cars that were already 11 then (registered in 2012): 36.4% of them failed. »), sans second verdict. Repli nommé sur toutes les voitures si moins de 100 tests à cet âge. |
| 2 | Comparateur : le verdict compare des voitures de 2012 alors que l'année choisie est 2015 | 3 | **corrigé.** Le second modèle et le verdict portent sur l'année choisie (« Registered in 2015, the Yaris failed less often than the Corsa… ») ; l'âge actuel suit en une ligne de chiffres, sans verdict. |
| 3 | « registered in 2012 » sans explication | 2 | **corrigé** par le n° 1 (phrase d'explication) ; légende du tableau : « and 2012 (cars that were 11 in 2023, the age yours is now) ». |
| 4 | Données 2023 sans explication en haut ; « Latest national rate » 2026 ajoute du bruit | 2 | **corrigé en partie** : la seconde ligne dit « 2023 is the latest year with figures by model ». Ligne nationale 2026 gardée (non retenu à ce tour). |
| 5 | Trop de pourcentages dans l'encadré | 1 | **corrigé en partie** : un verdict au lieu de deux, le taux national à l'âge actuel retiré de l'encadré. |
| 6 | Classements « at equal age » qui semblent dans le désordre (T-Roc / Q2, A8) | 3 | **non retenu à ce tour** : hors corrections validées ; la légende l'explique depuis le tour 3. Piste : afficher l'écart au même âge. |
| 7 | Modèles non cliquables dans les listes (Transit, Mini, Transporter, Q2, A8) | 3 | **non retenu à ce tour** : hors corrections validées. Piste : « (no page yet: use the checker above) ». |
| 8 | Aide BMW « 320d? Try 320, then 3 Series » peu claire / trop petite | 3 | **non retenu à ce tour** : hors corrections validées. |
| 9 | Jargon des libellés de défauts DVSA (« ingress of dirt », « projected beam image ») et sigles (DfT, OGL) | 2 | **non retenu à ce tour** : hors corrections validées ; une traduction de chaque libellé demanderait un dictionnaire à relire. |
| 10 | Pages longues, pavés de texte, liste des 20 modèles à replier | 2 | **non retenu à ce tour** : hors corrections validées. |
| 11 | Repli « Show the years 2020 to 2007 » en double du tableau | 1 | **non retenu** : déjà intitulé au tour 3. |
| 12 | Année de départ différente selon la page (2016, 2013) | 1 | **non retenu** : chaque page part de l'année la plus testée du modèle, annoncée sur la page Audi. |
| 13 | Infos pratiques (coût, échéance, retest) trop bas | 1 | **non retenu** : coût, échéance et bouton « 7 free checks » sont déjà dans l'encadré résultat. |

## Défauts de trame relevés
- Aucun : tout est dans `src/components/calc/MotChecker.tsx` (propre au site). `_trame/_template` non touché.

## Contrôles
- Test `tests/coherence-tour3.test.ts` mis à jour : gros chiffre = taux Focus 2015, ligne « At 11, the age it is now » avec le taux 2012, un seul verdict dans l'encadré.
- `npm run check` : passe (EXIT 0) — build, 44 tests vitest, check-seo, unique, trame, liens, layout (48 pages × 4 largeurs, 0), sources 0 morte, premier écran 0, contraste 0, saisie 0, règles 0, mot-clé 0/46. Log : `logs/mot-t5-check.log`.
- Captures refaites (accueil, comparateur) et relues : gros chiffre 21,4 % (Focus 2015) + « Better than average for its age » seul verdict ; seconde ligne « At 11, the age it is now … 36.4% » ; comparateur Yaris/Corsa 2015 (18,0 % / 31,0 %) puis ligne âge actuel 30,2 % / 41,7 %.
