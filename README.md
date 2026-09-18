# Squad page

Ontwerp en maak met een team een Squad Page met HTML, CSS en JS.

<!--De instructie van deze leertaak staan in de [INSTRUCTIONS](https://github.com/fdnd-task/your-tribe-squad-page/blob/main/docs/INSTRUCTIONS.md)-->
De instructie voor deze leertaak staan in de [WIKI](https://github.com/fdnd-task/your-tribe-squad-page/wiki)

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).

***
# Squad Page team Full Circle
Dit is onze ontwerp van de squad page. Gemaakt door Aliya, Miriale en Sam!
[Full Circle - Squad Page Link!](https://edu.nl/t4r47)

<img width="341" height="349" alt="Screenshot 2026-09-16 at 16 14 36" src="https://github.com/user-attachments/assets/24c04a1f-c5db-430f-95bd-f8ecd7793060" />

# Inhoudsopgave
- [Beschrijving](#beschrijving)
- [KAMPVUUR SESSIE](#kampvuur-sessie)
- [Gebruik](#gebruik)
- [Kenmerken](#kenmerken)
- [Bronnen](#bronnen)

## Beschrijving
Om de klas beter te leren kennen hebben wij, als team, een squad page gemaakt met een polaroid en daarop een foto van zijn/haar favoriete lied en hun visitekaartje die ze in week 1 hebben gemaakt. 

## KAMPVUUR SESSIE
### Samenwerken
#### Hoe ging het samenwerking?

Samenwerking ging heel goed en communicatie was perfect. Communicatie verlief via teams en ook blijven zitten na school tijd om verder aan ons project te werken.

#### Hebben we de doelen behaald die in ons team canvas staan?

Ja. We hebben ons elkaar goed geholpen ondanks verschil in kennis van software en samen geleerd hoe iteratief werken in groepsverband.

#### Wat zouden we de volgende keer betere willen doen?
- Meer Issues
- betere namen voor commits
- beter op mobiele versie letten.

### Methodisch handelen

#### Hoe hebben jullie gebruik gemaakt van issues?
Amper gebruikt. Wij hebben issues over het hoofd gezien.

#### Wat zeggen de commits over jullie werkwijze?
Miriale: Ik heb wel wat meer mogen committen, elk klein wijziging committen zit nog niet helemaal in mijn routine van coderen. dus de volgende keer kan ik dat wat meer doen.  

Aliya: Ik bij elke verandering, een commit geschreven meer om safe te zijn. Ik zou de volgende keer wel iets meer structuur hebben in wat ik commit in plaats van random commits maken en ook een betere beschrijving van wat ik commit.

Sam: Persoonlijk was ik meer van het doen en zelf proberen tot dat ik het goed vond in het begin deed ik elk klein dingetje committen maar uiteindelijk heb ik dat minder gedaan en gewoon 1 keer meerdere dingen aangepast en geüpload

#### En hoe is het verdelen van taken gegaan als je kijkt naar de tekening?  
Verdeling van de taken in het algemeen ging in het begin iets lastiger, maar uiteindelijk heeft iedereen zijn eigen deel kunnen doen. Op basis van de tekening lijkt het alsof de een ander meer heeft gedaan dan de ander, maar dat komt omdat niet iedereen evenveel heeft gecommit. Dus we zouden kunnen zeggen dat de taakverdeling wel goed ging.

## Gebruik
Twee pagina's ( Home page met alle polaroids en een Go-To pagina met een paar leuke plekken binnen/rondom Amstelkampus )
De namen die op de polaroids staan zijn klikbaar en zijn gekoppeld aan de visitekaartje de hij/zij hebben geprogrammeerd
De Spotify covers op elke polaroid zijn ook klikbaar en zijn gekoppeld aan de spotify link van zijn/haar favorite lied.

## Kenmerken
Wij hebben gebruik gemaakt van 3 programmeer talen: [HTML](#html), [CSS](#css), [JS](#javascript)

### HTML
Hieronder staat de basis structuur uitgelegd met de setting in de HEAD en opmaak van de BODY:
In de `<head>` word een CSS file geladen. Een local CSS file met specifieke styling voor deze pagina.
 ```
<link rel="stylesheet" href="styles/styles.css">
```

### Body
De body bestaat uit 1 section en daarin ongeveer 40 articles voor de kaarten.


### CSS
In de CSS worden er externe fonts geladen: Archivo Black en Rock Salt. 

```
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&family=Rock+Salt&display=swap%27');
```

#### font-size
De `h1` voor titel 'Squad Page' staat op `font-size: 60px;` en font type: Archivo Black
De `h2` voor de text FDND staat op `font-size: 27vw;` om het ook gelijk responsive te maken en de font type is: Archivo Black

#### text-decoration
Omdat de namen op elk kaart een link is hebben we de `<a>` tag gebruikt en voor de styling hebben we:
```
    a{
        text-decoration: none;
        color: black;
    }

    a:hover{
        text-decoration: underline;
    }
```
En de font voor de namen is Rock Salt.

#### Responsive
Naast het ontwerpen van een desktopversie hebben wij ons project ook responsive gemaakt, zodat het niet alleen toegankelijk is op laptops, maar ook op tablets en telefoons:
<img width="1463" height="832" alt="Screenshot 2026-09-16 at 16 22 27" src="https://github.com/user-attachments/assets/7a342d69-e854-49ba-95c9-ef401d859944" />
<img width="340" height="712" alt="Screenshot 2026-09-16 at 16 25 00" src="https://github.com/user-attachments/assets/07791ea8-0d5f-489c-8537-e0d700e81ada" /> <img width="558" height="744" alt="Screenshot 2026-09-16 at 16 26 55" src="https://github.com/user-attachments/assets/588b3734-45fe-4661-ac1c-be01be509f11" />





### JavaScript
Om alle 40 kaarten in een keer rond de circle te plaatsen hebben we JavaScript gebruikt zodat het niet een voor een in CSS hoeft.

 ## Bronnen
 - [Spotify](https://open.spotify.com)
 - [Google Fonts](https://fonts.google.com)
 - [Google Forms](https://workspace.google.com/products/forms/)
