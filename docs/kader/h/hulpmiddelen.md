# Handige hulpmiddelen

In dit hoofdstuk verwijzen we naar bestaande hulpmiddelen of voorbeelden die kunnen helpen bij het opstellen van een OTL. 

## Overzicht van woordenboeken en ontologiën

Het volgende is een incomplete lijst van bestaande informatiemodellen (zowel woordenboeken als ontologieën):

- Rijkswaterstaat heeft zijn woordenboek en ontologie apart van elkaar opgezet:
    - woordenboek: <a href="https://www.begrippenxl.nl/ABDL/nl/index">Algemene begrippen- en definitielijst (ABDL)</a>;
    - ontologie: <a href="https://otl.rws.nl/">Rijkswaterstaat OTL</a>;
    - ieder OTL-element heeft een corresponderend ABDL-concept. Omgekeerd is dat niet het geval: de ABDL is (veel) omvangrijker dan de OTL;
    - zowel de ABDL als OTL zijn gebaseerd op de NEN 2660. Daarnaast is de OTL nadrukkelijk opgebouwd rond de beheerobjecten, elementen en bouwdelen uit de NEN 2767-4-2;
    - de huidige versie van de RWS OTL is nadrukkelijk niet ontworpen (en wordt ook niet toegepast of voorgeschreven) voor gegevens uitwisseling met externe partijen, maar uitsluitend voor intern gebruik.
- de <a href="https://amsterdam.otl-viewer.com/">Gemeente Amsterdam OTL</a>;
- de <a href="https://otl.waternet.nl/">Waternet OTL</a>;
- de <a href="https://otl.prorail.nl/otl/">ProRail OTL</a>;
- het <a href="https://www.crow.nl/thema-s/management-openbare-ruimte/imbor/over-imbor-1">informatiemodel beheer openbare ruimte (IMBOR)</a> van CROW;
- het <a href="https://www.riool.net/applicaties/gegevenswoordenboek-stedelijk-water">gegevenswoordenboek stedelijk water (GWSW)</a> van RioNed;
- Geonovum beheert een groot aantal informatiemodellen, waaronder:
    - de <a href="https://www.geonovum.nl/geo-standaarden/informatiemodellen-nen3610-familie/gegevenscatalogus-basisregistratie-adressen-en">basisadministratie adressen en gebouwen (BAG)</a>;
    - de <a href="https://www.geonovum.nl/geo-standaarden/bgt-imgeo">basisregistratie grootschalige topografie (BGT)</a>;
    - de <a href="https://www.geonovum.nl/geo-standaarden/bro-basisregistratie-ondergrond/basisregistratie-ondergrond-imbro">basisregistratie ondergrond (BRO)</a>;
    - het <a href="https://www.geonovum.nl/geo-standaarden/informatiemodel-kabels-en-leidingen">informatiemodel kabels en leidingen (IMKL)</a>;
    - het <a href="https://www.geonovum.nl/geo-standaarden/imx-geo-semantisch-model-basis-en-kernregistraties">semantisch model basis- en kernregistraties (IMX-Geo)</a>;
    - zie voor de complete lijst het <a href="https://www.geonovum.nl/geo-standaarden">overzicht</a> van Geonovum.

Een overzicht van meer informatiemodellen is te vinden op de website van <a href="https://www.bimloket.nl/ictstandaarden/">digiGO</a>.

## Draaiboek OTL voor B&U sectoren

Link naar document: <a href="docs/Draaiboek ontwikkeling en beproeving OTL 1.0.pdf" download>Draaiboek OTL voor B&U sector</a>.

digiGO heeft een draaiboek laten opstellen waarin stapsgewijs wordt beschreven hoe tot de ontwikkeling van een OTL te komen en hoe deze vervolgens voor een bepaalde toepassing te implementeren. Daarbij is ook een OTL uitgewerkt voor bio-based isoleren in de B&U-sector. Deze OTL is gebaseerd op onder andere de <a href="https://w3c-lbd-cg.github.io/bot/">W3C Building Topology Ontology</a>, de <a href="https://ketenstandaard.nl/nl-sfb-facts/viewer/">NL-SfB</a>, <a href="https://technical.buildingsmart.org/standards/ifc/">IFC</a> en de <a href="https://www.nen.nl/normcommissie-conditiemeting">NEN 2767-4</a>.

Het draaiboek is opgezet als onderdeel van het digiGO-versnellingsproject Draaiboek en beproeving OTL-implementatie.

## Handleiding OTL | IMBOR-LD

Link: <a href="https://docs.crow.nl/imbor/handleiding-otl/">Handleiding OTL | IMBOR-LD</a> (niet onderhouden, 28 augustus 2020).

Deze handleiding van CROW beschrijft hoe op basis van IMBOR-LD een eigen ontologie gemaakt kan worden ten behoeve van uitwisseling tussen opdrachtnemer en opdrachtgever. Hoewel de handleiding gericht is op hergebruik van IMBOR-LD, zijn een aantal van de stappen in deze handleiding zodanig generiek dat ze ook van toepassing zijn bij het opzetten van een algemene OTL.

De originele vraag voor deze handleiding komt voor uit het BIM Pro-programma van de Provincies. Men wil een OTL kunnen samenstellen die aan de opdrachtgever gegeven kan worden, die deze vervolgens 'invult' en teruglevert. Waarop de Provincie de gegevens kan valideren en inlezen in hun systemen. Het doel (en daarmee de scope) van deze handleiding om een Provincie in staat te stellen moet zijn om een OTL op te zetten in een spreadsheet (conventioneel) of LinkedData (duurzaam) formaat.

N.B. Dit is een oude versie van IMBOR, gebaseerd op een oude versie van de NEN 2660.

## Ontwerpnotitie OTL, Provincie Gelderland

Link naar document: <a href="docs/Ontwerpnotitie OTL-1.10_20230303-geredigeerd.pdf" download>Ontwerpnotitie OTL, Provincie Gelderland</a>

Dit document is opgezet ter verduidelijking van de totstandkoming van de Object Type Library (OTL) voor de Provincie Gelderland. Hierin wordt beschreven welke ontwerpuitgangspunten, keuzes & raakvlakken aan de basis staan van de OTL.