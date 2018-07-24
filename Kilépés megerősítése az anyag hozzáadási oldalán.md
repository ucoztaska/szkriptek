# Kilépés megerősítése az anyag hozzáadási oldalán

Ugye, milyen elképesztően idegesítő, hogy egy anyag megírása közben véletlenül félrekattintasz és bezárod a böngészőt/fület? Ez a szkript segíteni fog! 

Nagyon, nagyon, NAGYON sokszor jártam úgy, hogy fél órán át írtam egy szöveget egy oldalon és figyelmetlenségemnek hála véletlenül bezártam a böngészőt vagy egy linkre kattintottam, mely elvitt máshova. Fél órányi munkám ment pocsékba, így újra kellett kezdenem. El tudjátok képzelni, mennyire idegesítő élmény, nemde? 

Ez a szkript több, mint valószínű, hogy segíteni fog elkerülni ezt a kellemetlen helyzetet, mivel az oldalról való kilépés előtt megjelenít egy megerősítő üzenetet.

## Telepítés

A kívánt modulhoz tartozó Az anyag hozzáadásának/szerkesztésének oldala sablonba, a $BODY$ tag után illeszd be ezt a kódot:

```html
<script type="text/javascript">
  window.onbeforeunload = function(evt) {
    var message = 'Biztosan ki akarsz lépni az oldalról?';
    if (typeof evt == 'undefined') {
      evt = window.event;
    }
    if (evt) {
      evt.returnValue = message;
    }
    
    return message;
  }
</script>
```

És kész is! Most kevesebbet kell törődnöd azzal, hogy semmibe megy a munkád :)
