# Névnap jelzés

A mai és holnapi névnaposokat jelzi ez a szkript, amit nagyon könnyen el tudunk helyezni és konfigurálni tudjuk weboldalunkon.

1. Töltsd le a `nevnap.js` fájlt a `src` könyvtárból, majd töltsd fel azt a weboldalad `js` mappájába (ha nem létezik, hozd létre).

2. Illeszd be ezt a kódot oda, ahová a névnap jelzést szeretnéd látni:

```html
<style>.nevnapos{color:#0000FF;}.nevnap{color:#F00F00;font: normal 12px verdana, tahoma, arial, sans-serif;}</style><div id="datenev" style="display:inline-block;"></div><script src="/js/nevnap.js" type="text/javascript"></script>
```

**Paraméterek:**

 - `.nevnapos [...] color:#0000FF` - A neveknél használni kívánt szín (alapból kék)
 - `.nevnap [...] color:#F00F00` - A betűszín (lapból piros)
 - `.nevnap [...] font:[...]12px` - A betűk mérete (alapból 12 pontos)