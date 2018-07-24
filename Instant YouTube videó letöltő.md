# Instant YouTube videó letöltő

Ennek a szkriptnek segítségével on-line letölthetünk bármilyen YouTube videót közvetlenül az oldaladon keresztül! A látogatóknak csak annyit kell tenniük, hogy kimásolják a kívánt YouTube videó URL címét, majd beillesztik az oldalad mezejébe, végül a Letöltés gombra kattintunk! 

**Kompatibilitás:** Mozilla Firefox, Google Chrome, Opera, Internet Explorer 

Ezt a kódot beillesztjük oda, ahol szeretnénk látni a letöltőt: 

```html
<form action="https://en.savefrom.net/index.php" method="get" target="_blank">  
<input type="text" name="url" placeholder="A videó URL címe" size="32" /><input type="submit" value="Letöltés!" />
```
