# Kaders en richtlijnen
In dit hoofdstuk beschrijven we de kaders en richtlijnen. Voor een overzicht (zonder toelichting) van alle kaders en richtlijnen zie Bijlage: kaders en richtlijnen. 

We hebben de kaders en richtlijnen opgedeeld in:
- algemene kaders en richtlijnen; deze gelden altijd;
- aanvullende kaders en richtlijnen specifiek voor:
  - woordenboeken;
  - ontologieën (incl. domeinwaarden);
  - alignments.

De kaders en richtlijnen worden in de volgende secties per onderdeel beschreven. Voor elk onderdeel zijn er kenmerken beschreven.

Per kenmerk is verder aangegeven welke van de FAIRQ-eigenschappen het invult. De F en A gaan voornamelijk over toegang tot en beschikbaarheid van het informatiemodel, de I en R over technische operabiliteit en de Q voornamelijk over de kwaliteit van de beheerorganisatie.

## Algemeen
| #   | FAIRQ | Kenmerk       | Beschrijving                                                                                 |
|-----|-------|---------------|----------------------------------------------------------------------------------------------|
| 1   | F     | Naam          | Het informatiemodel heeft een eenduidige naam.                                               |
| 2   | F     | Soort         | Het is duidelijk wat voor soort informatiemodel het is. Keuze uit (meerdere antwoorden mogelijk):<br>• Woordenboek<br>• Ontologie<br>• Uitlijning |
| 3   | F     | Beschrijving  | Er is een beschrijvende tekst waarin wordt toegelicht waarvoor en voor wie de standaard bedoeld is. |
| 4   | F     | Eigenaar      | Er is een eigenaar van het informatiemodel. Naam en contactgegevens van het aanspreekpunt van de eigenaar zijn bekend. |
| 5   | F     | Beheerder     | Er is een beheerder van het informatiemodel. Naam en contactgegevens van het aanspreekpunt van de beheerder zijn bekend. |
| 6   | F     | Labels        | Er is een set van labels die beschrijven voor wie/wat/waar het informatiemodel van toepassing is. (Labels nog te bepalen.) |
| 7   | F     | Locatie       | Het informatiemodel is online vindbaar en beschikbaar. Het informatiemodel is online te verkrijgen. |
| 8   | A     | Toegang       | Het informatiemodel is in zijn geheel te downloaden of kan direct worden benaderd via een REST of SPARQL endpoint. Endpoints zijn gedocumenteerd. |
| 9   | A     | Inzage        | Het informatiemodel kan online worden ingezien via een viewer.                               |
| 10  | A     | Beschikbaarheid | Het informatiemodel is, eventueel via betaling, voor iedereen beschikbaar om te gebruiken. |
| 11  | A     | Nederlandse taal | Het informatiemodel en alle informatie eromheen zijn in het Nederlands opgesteld.          |
| 12  | A     | Engelse taal  | Het informatiemodel en alle informatie eromheen zijn in het Engels opgesteld.              |
| 13  | R     | Documentatie  | Het informatiemodel is gedocumenteerd.                                                       |
| 14  | Q     | Versiebeheer  | Er wordt gebruik gemaakt van versienummering met daarbij een datum.                          |
| 15  | Q     | Meest recente versie | De meest recente versie is beschikbaar.                                                 |
| 16  | Q     | Vorige versie | De vorige versie is beschikbaar.                                                            |
| 17  | Q     | Oudere versies | Oudere versies zijn beschikbaar.                                                           |
| 18  | Q     | Versieverschillen | Verschillen tussen versies zijn toegelicht.                                              |
| 19  | Q     | Releasekalender | Er is een planning beschikbaar voor toekomstige versies, inclusief een indicatie van verwachte wijzigingen per wijziging. |
| 20  | Q     | Issue tracker systeem | Er is de mogelijkheid om bugs en features in te schieten.                                |

## Ontologie
| #   | FAIRQ | Kenmerk       | Beschrijving                                                                                 |
|-----|-------|---------------|----------------------------------------------------------------------------------------------|
| 1   | I     | NEN 2660-compliant | De ontologie voldoet aan de NEN 2660.                                                    |
| 2   | I     | Formaat       | De ontologie is beschikbaar in een of meer van de volgende formaten:<br>• RDF-XML<br>• Turtle<br>• JSON-LD |
| 3   | I     | Taal          | De ontologie is beschreven in een of meer van de volgende talen:<br>• RDFS<br>• OWL<br>• SHACL |
| 4   | R     | Extensies     | Er wordt duidelijk aangegeven welke externe woordenboeken of ontologieën worden hergebruikt. |
| 5   | R     | Uitlijningen  | Er wordt duidelijk aangegeven welke uitlijningen deze ontologie heeft met andere ontologieën. |

## Woordenboek
| #   | FAIRQ | Kenmerk       | Beschrijving                                                                                 |
|-----|-------|---------------|----------------------------------------------------------------------------------------------|
| 1   | I     | NEN 2660-compliant | Het woordenboek voldoet aan de NEN 2660.                                                 |
| 2   | I     | Formaat       | Het woordenboek is beschikbaar in een of meer van de volgende formaten:<br>• RDF-XML<br>• Turtle<br>• JSON-LD |
| 3   | I     | Taal          | Het woordenboek is beschreven in SKOS.                                                    |
| 4   | R     | Extensies     | Er wordt duidelijk aangegeven welke externe woordenboeken of ontologieën worden hergebruikt. |
| 5   | R     | Uitlijningen  | Er wordt duidelijk aangegeven welke uitlijningen deze ontologie heeft met andere ontologieën. |

## Uitlijning
| #   | FAIRQ | Kenmerk       | Beschrijving                                                                                 |
|-----|-------|---------------|----------------------------------------------------------------------------------------------|
| 1   | I     | Compliant met best practice | De alignment is opgesteld in overeenstemming met [https://docs.crow.nl/ontology-alignment/whitepaper/] |
| 2   | I     | Formaat       | De uitlijning is beschikbaar in een of meer van de volgende formaten:<br>• RDF-XML<br>• Turtle<br>• JSON-LD |
| 3   | I     | Taal          | De uitlijning is beschreven in een of meer van de volgende talen:<br>• SKOS (alleen voor woordenboeken alignen)<br>• RDFS<br>• OWL<br>• SHACL |
