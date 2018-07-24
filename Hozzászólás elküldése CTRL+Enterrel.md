# Hozzászólás elküldése CTRL+Enterrel

Majdnem minden honlap bejegyzéseihez hozzá lehet szólni. Szeretjük az egyszerűséget, éppen ezért bemutatjuk, hogyan küldhető el egy hozzászólás a CTRL+Enter billentyűkombinációval. 

Nagyon jó dolog, ha leegyszerűsítjük felhasználóink dolgát azáltal, hogy a lehető legegyszerűbb módon teszünk elérhetővé bizonyos funkciókat a honlapon. Mai szkriptünk segítségével a felhasználók elküldhetik hozzászólásaikat a CTRL+Enter billentyűkombináció segítségével, így nem kell az egérrel is végrehajtaniuk egy műveletet.

## Miért CTRL+Enter?

Mert lehet, hogy a felhasználóid szeretnek új sorba írni dolgokat. A CTRL+Enter a leghasználtabb megoldás olyan szövegmezők esetében, amelyekbe beilleszthető új sor.

## Telepítés

A telepítés nagyon egyszerű - mindössze tudnod kell a hozzászólás elküldési gombjának és a szövegmezőnek az ID-ját. Előbbit a **Hozzászólások űrlapja** sablonban találhatod meg, egy olyan **input** elemnél, melynek **value** attribútuma "Küldés", utóbbit pedig ugyanabban a sablonban, a **textarea** elemnél. Az ID alapértelmezés szerint a gomb esetén **addcBut**, a szövegmező esetén pedig **message**.

A **Hozzászólások űrlapja** sablon végére illeszd be ezt a kódot:

```html
<script type="text/javascript">
$('#message').keydown(function (e) {
 if (e.ctrlKey && e.keyCode == 13) {
 $("#addcBut").click();
 }
});
</script>
```

A kódban az alapértelmezett hozzászólási elemek azonosítói (ID) találhatóak. Amennyiben nem működik a szkript, valószínűleg helytelen azonosítót írtál be. 
