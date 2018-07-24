# Metropoll - Metro stílusú kérdőív

**LETÖLTÉS: https://mega.nz/#!eZEwja4K!8XKg7B34MRrM5W3qBetY2L_Q2tJS04K5qjs0B6QoLpQ**

Haladni kell a korral! Éppen ezért bemutatunk egy vadonatúj "Kérdőívek" kinézetet.

1. Töltsd fel az archívum tartalmát a tárhelyedre.

2. **Vezérlőpult >> Külalak vezérlése >> Kérdőívek űrlap típusai**. A teljes sablon tartalmát módosítsd erre: 

```html
<div class="pollBlock">  
  <div class="pollTitle">$QUESTION$</div>  
  <div class="pollAns">$ANSWERS$</div>  
  <div align="center">  
  <button class="button_poll bleumarin" type="submit" href="$ARCHIVE_LINK$"><span>Szavazások archívuma</span></button>  
  <button class="button_poll orange" type="submit" href="$RESULTS_LINK$"><span>Eredmények</span></button>  
  </div>  
  <div class="pollTot">Összes válasz: <b>$TOTAL_VOTES$</b></div>  
  </div>  
<link type="text/css" rel="StyleSheet" href="/metro_poll.css" />  
  <script type="text/javascript" src="/metro_poll.js"></script>
```

*Forrás: http://webo4ka.ru/load/46-1-0-3702*
