# Inleiding

Interoperabiliteit in de Ontwerp,- Bouw,- en Technieksector (OBT) is noodzakelijk zodat ICT-opdrachtgevers en -opdrachtnemers eenvoudig informatie digitaal kunnen vastleggen en uitwisselen. Hiertoe is eenduidigheid vereist: in de begrippen en structuren die gebruikt worden tussen mensen, en de dataformaten en uitwisseltechnieken die gebruikt worden tussen machines. Object Type Libraries (OTL'en) zijn een manier om tot die eenduidigheid te komen en worden steeds vaker toegepast in de sector. In een OTL worden begrippen en hun structuren gedefinieerd. Dit gebeurt steeds vaker in een linked data-formaat met de daarbij behorende uitwisseltechnieken. 

Voor het ontwikkelen en beheren van OTL'en is het wenselijk om, met alle partijen die een OTL hebben opgezet of gaan ontwikkelen, dezelfde richtlijnen te hanteren. Hoewel hier enkele standaarden voor zijn opgesteld -- onder andere de <a href="https://www.nen.nl/modellering-integratie-en-interoperabiliteit-van-informatie-in-de-gebouwde-omgeving-en-procesindustrie">NEN-2660 serie</a> en de <a href="https://profielstelselcatalogus.pldn.nl/">Standaard voor het beschrijven van begrippen (SBB)</a> van Geonovum -- heeft dit nog niet tot het vereiste niveau van eenduidigheid geleid. In de afgelopen jaren is een grote diversiteit aan OTL'en ontstaan. De diversiteit heeft te maken met het gebruik van definities, de structuur waarmee de OTL'en worden opgezet, de techniek die gebruikt wordt en de manier waarop OTL'en worden ingezet. Om meer eenheid te krijgen in de OTL'en worden daarom richtlijnen opgezet die helpen bij het beheer en de ontwikkeling van de OTL'en.

## Waarom richtlijnen
Richtlijnen helpen bij knelpunten waar jij in jouw werk mee te maken krijgt. Ze zijn gebaseerd op normen en praktijkervaringen. Richtlijnen helpen jou om keuzes te maken voor de juiste informatiemodellering. Ze zijn, kortom, bedoeld om de kwaliteit van gegevensuitwisseling in de bouw te verbeteren.

De vraag naar richtlijnen komt vanuit zowel opdrachtgevers als opdrachtnemers, omdat deze organisaties 'vastlopen' op toepassing van OTL'en in de praktijk. De volgende knelpunten zijn aangedragen:
- verschil in opvattingen over ‘wat is een OTL’;
- verschillende manieren van informatiemodellering waardoor software telkens opnieuw moet worden aangepast;
- verschil in structuur en opbouw van OTL'en waardoor gegevensuitwisseling niet gestandaardiseerd kan worden;
- een veelheid aan manieren om OTL-data uit te wisselen;
- een veelheid van definities van dezelfde objecten;
- geen inzicht en overzicht van bestaande OTL'en.

## Doel en doelgroep
Dit document is geschreven voor organisaties binnen de gebouwde omgeving die hun eigen OTL ontwikkelen en beheren, met name als het gaat om publieke OTL'en en organisaties die landelijk actief zijn.

Het doel van dit document is om (i) tot een uniform landschap van OTL'en te komen die met elkaar zijn uitgelijnd en aansluiten bij (inter)nationale standaarden, (ii) OTL'en volgens een afgesproken kwaliteitsstandaard te ontwikkelen en beheren.

## Waarop worden richtlijnen gebaseerd?
De richtlijnen worden gebaseerd op bestaande standaarden, normen en praktijkervaringen. Dit zijn onder andere:
- het Beheer- en OntwikkelModel voor Open Standaarden (BOMOS);
- de <a href="https://www.go-fair.org/fair-principles/">FAIR</a>Q-principes (Findability, Accessibility, Interoperability, Reusability en Quality);
- de <a href="https://www.nen.nl/modellering-integratie-en-interoperabiliteit-van-informatie-in-de-gebouwde-omgeving-en-procesindustrie">NEN 2660-serie</a>, "Modelleringsregels voor informatie in de gebouwde omgeving";
- de <a href="https://profielstelselcatalogus.pldn.nl/">Standaard voor het beschrijven van begrippen (SBB)</a> van Geonovum;
- de <a href="https://docs.crow.nl/ontology-alignment/whitepaper/">Ontology Matching trough alignment and extension: a Best Practice</a> van CROW;
- <a href="https://www.digigo.nu/digitaal-stelsel/waarom-dsgo">federatief data delen</a>.

Rijkswaterstaat, Provincie Gelderland en digiGO hebben de NEN 2660 afgekocht en deze NEN norm is tot eind 2025 gratis te downloaden op de website van de NEN, <a href="https://urldefense.com/v3/__https://connect.nen.nl/Home/Detail__;!!NFFV0PM8bbqw!M5JuU5t0-AzxNzYr1PWA33tQIbT0IAFveLFdgD24P66VGyfZjurAmpzO2mWRs4Rc_B1BtfGe_fAWwVKIUU-TlKVXS0RZtntAGvtxKpM$">NEN Connect - Home</a>. Op deze website dien je wel eerst een account aan te maken.

Op dit moment hebben we het <a href="https://www.geonovum.nl/geo-standaarden/metamodel-informatiemodellering-mim">Metamodel Informatiemodellering (MIM)</a> van Geonovum en de <a href="https://www.nen.nl/nen-3610-2022-nl-296137">NEN 3610</a> nog niet meegenomen in de richtlijnen. In de toekomst zal dit wel gebeuren.

## Terminologie

De term OTL heeft geen formele betekenis en wordt in de praktijk op verschillende manieren gebruikt. In deze sectie bepalen we de terminologie rondom OTL'en zoals we die in dit document gebruiken. Termonologie rondom informatiemodellering en linked data is specialistisch van aard en bevat soms tegenstrijdigheden. Omdat dit document niet bedoeld is voor specialisten, houden we een wat versimpelde terminologie aan die de onderliggende nuances van informatiemodellering en linked data hopelijk niet te veel geweld aandoet.

Onderstaande figuur visualiseert alle concepten en hoe ze samenhangen. 

<figure id="otl-componenten">
  <img src="figures/otl-componenten.png"/>
  <figcaption>Terminologie.</figcaption>
</figure>

Een **woordenboek** (synoniem: **begrippenkader**) is een lijst van termen voorzien een definities, eventueel aangevuld met (hiërarchische) relaties. Een woordenboek is bedoeld voor mensen om tot overeenstemming te komen over de betekenis van termen en begrippen. Een voorbeeld van een woordenboek is de <a href="https://www.begrippenxl.nl/ABDL/nl/index">Algemene begrippen- en definitielijst (ABDL)</a> van Rijkswaterstaat (merk op dat dit woordenboek niet per se conform de hier geldende richtlijnen is opgesteld).

Afhankelijk van hoe uitgebreid een woordenboek is opgesteld zijn er veel verschillende soorten woordenboeken (begrippenlijst, taxonomie, thesaurus, etc.). In dit document gebruiken we alleen de overkoepelende term woordenboek.

Er zijn geen verplichtingen aan de vorm van een woordenboek. Over het algemeen geldt dat een "rijkere" vorm (dus met meer informatie) meer begrip geeft aan lezers en beter doorzoekbaar is. Het geeft echter mogelijk ook een grotere beheerlast.

Een **ontologie** is een conceptueel model van een domein. Een ontologie bestaat uit klasses die eigenschappen hebben en onderlinge (hiërarchische) relaties, en lijsten van standaard domeinwaardes (enumeraties). Een ontologie is bedoeld voor machines om de structuur van gegevens vast te leggen. Voorbeelden van ontologieën zijn de <a href="https://otl.rws.nl/">Rijkswaterstaat OTL</a> en de <a href="https://amsterdam-otl.otl-viewer.com/">Gemeente Amsterdam OTL</a> (merk op dat deze ontologieën niet per se conform de hier geldende richtlijnen zijn opgesteld).

Om goed begrepen te worden door mensen, help het als klasses verwijzen naar de begrippen in een woordenboek die de klasse beschrijft (zie relatie `Beschrijft` in het figuur).

Met een **OTL** (synoniem: **informatiemodel**) bedoelen we zowel woordenboeken als ontologieën.

Een **informatieverzameling** bevat de eigenlijke instantiedata waarmee we doorgaans werken. Bijvoorbeeld een factuur of een materiaalijst. De structuur van deze instantiedata is vastgelegd door een ontologie. Om geïnterpreteerd te kunnen worden door een machine is er daarom altijd een (impliciete) verwijzing naar de ontologie nodig (zie relatie `isVanType` in het figuur).

Ondergaande figuur geeft een schematisch, fictief voorbeeld van hoe een woordenboek, ontologie en informatieverzameling samenhangen, weergegeven als UML-diagram. In de ontologie zie bovendien ook constructies als overerving (via de relatie `Subtype van`) en enumeraties. In de informatieverzameling zien we twee datainstanties. Deze worden gedefinieerd door de klasses Kogelklep en Vlinderklep. Klasses Kogelklep en Vlinderklep (en hun supertypes) leggen de structuur van de instanties vast. Om als mens te begrijpen wat een kogelklep en een vlinderklep precies zijn, verwijzen deze klasses naar de begrippen Kogelklep en Vlinderklep in het woordenboek. 

<figure id="ontologievoorbeeld">
  <img src="figures/ontologievoorbeeld.png"/>
  <figcaption>Schematische voorbeeld van hoe woordenboek, ontologie en informatieverzameling samenhangen.</figcaption>
</figure>

Bovenstaande is een abstracte weergave. In de praktijk zul je alle individuen, klasses (incl. relaties, eigenschappen en enumeraties) en begrippen in specifieke software beheren. De twee individuen zijn dan bijvoorbeeld twee rijen in een tabel van kleppen.