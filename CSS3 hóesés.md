# CSS3 hóesés

Ez a szkript azért nagyszerű, mert egyáltalán nem használ fel semmilyen JavaScript vagy jQuery elemet. Csupán HTML-re és CSS3-ra alapul. Egy hátránya van – felhasznál 3 PNG fájlt.

Előre megjegyzem, hogy a szkript telepítése eléggé bonyolult, így ajánlott a HTML és CSS nyelv minimális ismerete. Teljes oldalra NEM ajánlott alkalmazni, hanem például csak fejlécre, vagy bármilyen más területen. Mi a fejlécet vesszük középpontba.

## Telepítés

Jobban belegondolva nem is annyira nehéz telepíteni.

Mint mondtam, a fejléccel foglalkozunk. Vegyük úgy, hogy a fejléc osztálya "fejlec". CSS-ben ennek az osztálynak meg kell adnod a `position: relative;` tulajdonságot. 

Így:

```css
.fejlec {position: relative;}
```

Megvan? Oké, minden a rendjén van.

Szintén a CSS-be - lehetőleg a sablon végére - illeszd be ezt a kódot: 

```css
.snowContainer { width: 100%; height: 100%; position: absolute; top: 0; left: 0; z-index: 0;}
#snow {width: 100%; height: 100%; background-image: url("http://yraaa.ru/_pu/27/15825154.png"), url("http://yraaa.ru/_pu/27/89961317.png"), url("http://yraaa.ru/_pu/27/21791255.png"); -webkit-animation: snow 20s linear infinite;-moz-animation: snow 20s linear infinite;-ms-animation: snow 20s linear infinite;animation: snow 20s linear infinite;}
@keyframes snow {0% {background-position: 0px 0px, 0px 0px, 0px 0px;} 100% {background-position: 500px 1000px, 400px 400px, 300px 300px;}}
@-moz-keyframes snow {0% {background-position: 0px 0px, 0px 0px, 0px 0px;} 100% {background-position: 500px 1000px, 400px 400px, 300px 300px;}}
@-webkit-keyframes snow {0% {background-position: 0px 0px, 0px 0px, 0px 0px;} 100% {background-position: 500px 1000px, 400px 400px, 300px 300px;}}
@-ms-keyframes snow {0% {background-position: 0px 0px, 0px 0px, 0px 0px;} 100% {background-position: 500px 1000px, 400px 400px, 300px 300px;}}
```

Rendben, most a fejléc kezdőtagja után

például: 

```html
<div class="fejlec">
```

illeszd be ezt a kódot: 

```html
<div class="snowContainer">
<div id="snow"></div>
</div>
```

**Amit fontos tudni:** a szülő elem néhány gyerek-eleme lehet, hogy elveszíti a kattinthatóságát. Ehhez csak adj `position: relative;` és `z-index: 100;` tulajdonságot.

Ha a teljes weboldalon szeretnél havat (bár ez nem csak hogy technikailag, de még szépség szempontjából sem szép), a body tagra alkalmazd a fent leírtakat a fejléc helyett.

*Forrás: http://yraaa.ru/scripts/snow-css3*
