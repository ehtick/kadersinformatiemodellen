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

In deze sectie bepalen we de terminologie rondom OTL'en zoals we die in dit document gebruiken. Deze terminologie leidt vaak tot verwarring. De term OTL heeft geen formele betekenis en wordt daarom op verschillende manieren gebruikt. Tegelijkertijd is termonologie rondom informatiemodellering en linked data specialistisch van aard en bevat het ook wat tegenstrijdigheden. Omdat dit document niet bedoeld is voor specialisten, houden we een wat versimpelde terminologie aan die de onderliggende nuances van informatiemodellering en linked data niet te veel geweld aandoet.

Een **woordenboek** is een lijst van termen voorzien een definities, eventueel aangevuld met (hiërarchische) relaties. Een woordenboek is bedoeld voor mensen om tot overeenstemming te komen over de betekenis van termen en begrippen. Een voorbeeld van een woordenboek is het <a href="https://www.begrippenxl.nl/ABDL/nl/index">ABDL</a>. Afhankelijk van hoe uitgebreid een woordenboek is opgesteld zijn er veel verschillende soorten woordenboeken (begrippenlijst, taxonomie, thesaurus, etc.). In dit document gebruiken we alleen de overkoepelende term woordenboek.

Een **ontologie** is een conceptueel model van een domein. Een ontologie bestaat uit klasses die eigenschappen hebben en onderlinge (hiërarchische) relaties, en lijsten van standaard domeinwaardes (enumeraties). Een ontologie is bedoeld voor machines om de structuur van gegevens vast te leggen. Een ontologie kan ook logica bevatten ("Het uiteinde van een kabel kan niet met meer dan één entiteit zijn verbonden."). Hiermee kunnen machines de correctheid van gegevens verifiëren. Een voorbeeld van een ontologie is die van de <a href="https://amsterdam-otl.otl-viewer.com/">Gemeente Amsterdam</a>. Om goed begrepen te worden door mensen, help het als klasses verwijzen naar de begrippen in een woordenboek die de klasse beschrijft.

Met een **OTL** (of **informatiemodel**) bedoelen we alles wat op het niveau van een woordenboek of ontologie zit.

Een **informatieverzameling** bevat de eigenlijke instantiedata waarmee we doorgaans werken. Bijvoorbeeld een factuur of een materiaalijst. De structuur van deze instantiedata is vastgelegd door een ontologie. Om geïnterpreteerd te kunnen worden door een machine is er daarom altijd een (impliciete) verwijzing naar de ontologie nodig.

Onderstaande figuur visualiseert hoe de verschillende concepten samenhangen. 

<figure id="otl-componenten">
  <img src="figures/otl-componenten.png"/>
  <figcaption>Terminologie.</figcaption>
</figure>

