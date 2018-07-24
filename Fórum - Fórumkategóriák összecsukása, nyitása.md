# Fórumkategóriák összecsukása/nyitása

A szkript segítségével a felhasználók összecsukhatják a fórumkategóriákat, majd később megnyithatják azokat. Az adatok cookie-ban lesznek elmentve, így a következő látogatáskor megmarad a kiválasztott nézet (összecsukott/nyitott).

Töltsd le az **src** mappában levő **toggleforum.js** fájlt, majd töltsd fel a weboldalad **js** mappájába.

**A fórum oldalainak általános kinézete** sablonba, a **$BODY$** tagot cseréld erre: 

```html
<div id="forumbody">$BODY$</div><?if($PAGE_ID$='main')?><style type="text/css">  
  .gTopCornerRight {display:none;}  
  </style>  
  <script type="text/javascript" src="/js/toggleforum.js"></script><?endif?>
```