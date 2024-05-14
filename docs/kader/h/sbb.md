# Korte samenvatting van de Standaard voor het beschrijven van begrippen (SBB)
Voor het opstellen van een woordenboek volgen we de <a href="https://docs.geostandaarden.nl/nl-sbb/nl-sbb/">SBB</a>. In dit hoofdstuk geven we een korte samenvatting van de SBB. 

Merk op dat de SBB voldoet aan de NEN 2660. Een woordenboek opgezet volgens de SBB is dus comform hoe woordenboeken volgens de NEN 2660 moeten worden opgezet.

## Inleiding

De SBB onderscheidt verschillende vormen van woordenboeken:
- een begrippenlijst is de meest simpele vorm van een woordenboek. Het is een lijst van termen voorzien van een definitie en/of toelichting;
- een taxonomie is een begrippenlijst met hiërarchische relaties. Dit geeft structuur aan het woordenboek en maakt het makkelijker begrippen te vinden;
- een thesaurus is een taxonomie met relaties tussen begrippen. Hiermee wordt duidelijk hoe begrippen met elkaar samenhangen. Daarnaast vergroot het de vindbaarheid van begrippen omdat op gerelateerde begrippen kan worden gezocht.

Er zijn geen verplichtingen aan de vorm van een woordenboek. Over het algemeen geldt dat een "rijkere" vorm (dus met meer informatie) meer begrip geeft aan lezers en beter doorzoekbaar is. Het geeft echter ook mogelijk een grotere beheerlast.

Een woordenboek wordt in de SBB een begrippenkader genoemd. Een begrippenkader is een verzameling van begrippen die in een bepaalde context relevant zijn. Een begrip is een eenheid van denken -- een idee, betekenis of categorisering. Begrippen hebben eigenschappen en onderlinge relaties, o.a. naar brondocumenten. Een brondocument is een resource op het web of een fysiek document dat relevant is voor een begrip. Tot slot zijn er collecties. Een collectie is een verzameling van begrippen die voor een bepaalde situatie betekenisvol bij elkaar passen.

Het gebruik van begrippen en begrippenkaders is verplicht en redelijk evident. Elk begrip behoort tot minimaal één begrippenkader. Begrippen kunnen worden gebruikt in meerdere begrippenkaders. Als een begrip in een document wordt beschreven (wetgeving, standaarden, etc.) dan is het goed daar naar te verwijzen via een brondocument (maar dit is niet verplicht). Merk op dat een brondocument hier een beschrijving is van (incl. verwijzing naar) het eigenlijke brondocument. Een collectie bevat nul of meer begrippen. Het gebruik van collecties is optioneel. Collecties zijn geen onderdeel van een begrippenlijst, taxonomie of thesaurus. We besteden hier weinig aandacht aan het gebruik van collecties.

## Specificatie

De concepten begrip, begrippenkader, brondocument en collectie hebben elk eigenschappen en relaties tot elkaar. Een begrippenkader heeft bijvoorbeeld een naam, een uitleg en een of meer topbegrippen. Deze eigenschappen en relaties zijn uitgebreid beschreven in de SBB. Het model is daarnaast uitgewerkt in RDF, zie onderstaande figuur. 

<figure id="figure">
  <img src="figures/skos-ap-nl.png"/>
  <figcaption>Toepassingsprofiel van het SBB in SKOS.</figcaption>
</figure>

Zoals kan worden gezien wordt gebruik gemaakt van de volgende taalbinding:

| SBB-entiteit | Taalbinding in RDF |
|--------------|--------------------|
| begrippenkader | `skos:ConceptScheme` |
| begrip       | `skos:Concept`|
| brondocument | `foaf:Document` |
| collectie | `skos:Collection` |

Het figuur laat ook zien welke eigenschappen of relaties verplicht zijn via de cardinaliteit `[1..*]`. Dit lichten we nog eens toe in de volgende subsecties. 

### Begrippenkader

Een begrippenkader (`skos:ConceptScheme`) moet een naam (`dct:title`) hebben en zou een uitleg (`rdfs:comment`) moeten hebben.

Het aangeven van topbegrippen via de relatie "heeft topbegrip" (`skos:HasTopConcept`) is niet verplicht omdat deze automatisch kunnen worden afgeleid.

### Begrip

Een begrip (`skos:Concept`) moet minimaal een Nederlandse (`@nl`) voorkeursterm (`skos:prefLabel`) en een definitie (`skos:definition`) hebben. Een begrip moet tot een of meer begrippenkaders behoren via de relatie "in kader" (`skos:inScheme`). Het wordt afgeraden om een naam (`rdfs:label`) te specificeren omdat deze te algemeen is. 

Voor hiërarchische relaties geldt dat deze minimaal vanuit het onderliggende begrip naar het bovenliggende begrip moeten worden aangegeven via de relatie "heeft bovenliggend begrip" (`skos:broader`).

Het aangeven van topbegrippen via de realtie "is topbegrip van" (`skos:topConceptOf`) is niet verplicht omdat deze automatisch kunnen worden afgeleid.

In een thesaurus moeten begrippen een elkaar worden gerelateerd via "is gerelateerd aan" (`skos:related`), "is specialisatie van" (`isothes:broaderGeneric`), "is generalisatie van" (`isothes:narrowerGeneric`), "is onderdeel van" (`isothes:broaderPartitive`), "omvat" (`isothes:narrowerPartitive`), "is exemplaar van" (`isothes:broaderInstantial`) en "is categorie van" (`isothes:narrowerInstantial`). Relatie "is gerelateerd aan" is een generieke vorm van deze relaties, de overige zijn specialisaties van deze relatie. De specialisaties kunnen als "is gerelateerd aan" worden geïnterpreteerd; omgekeerd is dit niet het geval. Het is aan de ontwikkelaar van een woordenboek om de keuze te maken welke relaties hij wil gebruiken: generieke of gespecialiseerde. Het zou goed zijn als de ontwikkelaar deze keuze consequent doorvoert, en niet generieke en gespecialiseerde door elkaar heen gebruikt.

### Brondocument

Een brondocument (`foaf:Document`) moet minimaal een naam (`dct:title`) hebben. Het gebruik van bronnen is niet verplicht. Het is goed om bronnen te gebruiken en deze van een bronverwijzing (`dct:bibliographicCitation`) of url (`foaf:page`) te voorzien als begrippen gebaseerd zijn op externe bronnen. 

### Collectie

Een collectie (`skos:Collection`) moet een voorkeursterm (`skos:prefLabel`) hebben. Het gebruik van collecties is volledig optioneel. Een collectie bevat nul of meer begrippen via de relatie "bevat" (`skos:member`). Merk op dat een collectie bepaalt of een begrip lid is van de collectie of niet. Er is geen omgekeerde relatie, d.w.z., een begrip kan zichzelf geen lid maken van een collectie.

## Voorbeelden

<p class="note" title="Naamgeving in de voorbeelden">
Ten behoeve van de leesbaarheid is er in de hier getoonde voorbeelden gebruik gemaakt van betekenisvolle namen. Dit wil niet zeggen dat dit ook de aangeraden naamgevingsconventie is. Zie voor algemene strategieën voor naamgeving de SBB of de NEN 2660.
</p>

### Begrippenlijst

Het volgende voorbeeld toont een begrippenlijst met daarin een begrippenkader met twee begrippen waarbij een begrip een brondocument heeft.

```
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .
@prefix dct: <http://purl.org/dc/terms/> .
@prefix digigo: <http://digigo.nu/def#> .

digigo:Begrippenkader1 a skos:ConceptScheme ;
    dct:title "Begrippenkader1"@nl ;
	rdfs:comment "Een voorbeeld van een begrippenlijst."@nl .

digigo:Begrip1 a skos:Concept ;
    skos:prefLabel "Begrip 1"@nl ;
    skos:definition "Dit is de definitie van begrip 1."@nl ;
	skos:inScheme digigo:Begrippenkader1 .

digigo:Begrip2 a skos:Concept ;
    skos:prefLabel "Begrip 2"@nl ;
    skos:definition "Dit is de definitie van begrip 2."@nl ;
	skos:inScheme digigo:Begrippenkader1 ;
    dct:source digigo:Bron1 .

digigo:Bron1 a foaf:Document ;
    dct:title "Bron1"@nl
```

### Taxonomie

In dit voorbeeld wordt hierarchie gedefinieerd met behulp van `skos:broader`. De topbegrippen zijn aangegeven met `skos:topConceptOf`.

```
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .
@prefix dct: <http://purl.org/dc/terms/> .
@prefix digigo: <http://digigo.nu/def#> .

digigo:Begrippenkader10 a skos:ConceptScheme ;
    dct:title "Begrippenkader10"@nl ;
	rdfs:comment "Een voorbeeld van een taxonomie."@nl

digigo:Begrip10 a skos:Concept ;
    skos:prefLabel "Begrip 10"@nl ;
    skos:definition "Dit is de definitie van begrip 10."@nl ;
	skos:inScheme digigo:Begrippenkader10
	skos:topConceptOf digigo:Begrippenkader10

digigo:Begrip11 a skos:Concept ;
    skos:prefLabel "Begrip 11"@nl ;
    skos:definition "Dit is de definitie van begrip 11."@nl ;
	skos:inScheme digigo:Begrippenkader10
	skos:topConceptOf digigo:Begrippenkader10

digigo:Begrip12 a skos:Concept ;
    skos:prefLabel "Begrip 12"@nl ;
    skos:definition "Dit is de definitie van begrip 12."@nl ;
	skos:inScheme digigo:Begrippenkader10
	skos:broader digigo:Begrip10

digigo:Begrip13 a skos:Concept ;
    skos:prefLabel "Begrip 13"@nl ;
    skos:definition "Dit is de definitie van begrip 13."@nl ;
	skos:inScheme digigo:Begrippenkader10
	skos:broader digigo:Begrip12
```