# BB-kódok aláírás szerkesztésénél

**LETÖLTÉS: https://mega.nz/#!jQsUgJRI!H5NDMsRYm0BI4srq7Xp3ecDN3SB_VIxi196TOoZf2nk**

A szkript beilleszt az aláírás szerkesztése mező fölé öt gombot: félkövér, dőlt, aláhúzott, áthúzott és kép, melynek segítségével formázhatjuk az aláírás szövegét.

1. Töltsd fel a letöltött archívum tartalmát a tárhelyedre (ehhez használhatsz FTP-t).

2. **Vezérlőpult » Külalak vezérlése » A felhasználó adatainak szerkesztése oldal**. A $BODY$ tag után illeszd be a következő kódot: 

```html
<script type='text/javascript' src='/js/profedit.bbcodes.js'></script><script>  
  $('#siF9').before('<img src=\"/img/bbkod_sig/semn_bbcode/bold.png\" style=\"padding: 0 2px 3px 0;\" title=\"Félkövér\" onclick=\"bbCode(\'b\');\"><img src=\"/img/bbkod_sig/semn_bbcode/italic.png\" style=\"padding: 0 2px 3px 0;\" title=\"Dőlt\" onclick=\"bbCode(\'i\');\"><img src=\"/img/bbkod_sig/underline.png\" style=\"padding: 0 2px 3px 0;\" title=\"Aláhúzott\" onclick=\"bbCode(\'u\');\"><img src=\"/img/bbkod_sig/strike.png\" style=\"padding: 0 2px 3px 0;\" title=\"Áthúzott\" onclick=\"bbCode(\'s\');\"><img src=\"/img/bbkod_sig/image.png\" style=\"padding: 0 2px 3px 0;\" title=\"Kép\" onclick=\"bbCode(\'img\');\">');  
  </script>
```