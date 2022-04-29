# CGIsuvi2022
Test work done for summer internship at CGI.

Kood on kirjutatud **Visual Studio Code** keskkonnas, veebileht jooksutatud kohalikus serveris VSC extension **Live Server**'iga

## Failid ja struktuur
- **suncalc-master** *(kaust mis sisaldab SunCalc library't)*
    - LICENSE *(kasutamisõigused SunCalc library'le)*
    - package-lock.json
    - package.json
    - README.md *(SunCalc readme)*
    - suncalc.js
    - test.js
- index.html *(lehekülje html)*
- README.md *(seesama fail mida praegu loed)*
- script.js *(lehekülje JavaScript)*
- style.css *(lehekülje CSS)*

## Etapp 1 - Öö pikkuse kuvamine

Kokku kulus aega ~4h.
- ~1.5h kulus raamistiku üles seadmisele
- ~2.5h kulus öö pikkuse leidmise ülesse seadmisele

Raskusteks oli algse idee loomine, et kuidas üldse probleemile läheneda ja välja mõelda või leida lahendus kuidas leida päikeseloojang, -tõus ja öö pikkus.

Kasutab SunCalc JavaScript library't, kus..
- päikesetõusuks loetakse päikse ülemise piiri tekkimist horisondile
- päikeseloojanguks loetakse päikse kadumist horisondi taha

Öö pikkuse arvutamisega loogika on järgnev:
- öö jaotatakse kaheks osaks: peale keskööd ja enne keskööd
- öö pikkus saadetakse kahe osa kokku liitmisel
- "peale keskööd" osa on 00:00-st kuni vana öö lõpuni
- "enne keskööd" osa on uue öö algusest kuni 23:59-ni. 

## Etapp 2 - Kaardi integratsioon
Tehniliselt näitab kaart sisestatud asukohta peale kellaaegade kalkuleerimist, kuid miskipärast ei õnnestu tähise kuvamine.

Kaardi pealt positsiooni valimine pole integreeritud. Hetkene kaardilahendus seda ei võimalda või ma ei tajunud seda võimalust ära.

## Etapp 3 - Öö piirjoon
Selle etapini ma ei jõudnud.

Lahenduse ideid mul kindlaid pole.
- Ehk saaks panna tumendatud ala .png pildina kaardi peale, kuid see ei tundu effektiivne
- Tõenäoliselt parem teha kuidagi vektoritega (SVG)

## Etapp 4 - Lisad
Tiba sai ilusamaks tehtud küll minu arust.