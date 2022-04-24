# CGIsuvi2022
Test work done for summer internship at CGI.

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