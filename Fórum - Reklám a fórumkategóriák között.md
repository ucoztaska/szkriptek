# Reklám a fórumkategóriák között

A szkript segítségével reklámokat jeleníthetünk meg a fórumkategóriák között.

A kódban használhatjuk a uCoz banner-forgató funkcióját, AdSense kódot, illetve más bannert is elhelyezhetünk.

A **Fórum oldalainak általános kinézete** sablonba, a $BODY$ tag után illesszük be a következő kódot: 

```html
<?if($PAGE_ID$="main")?>  
  <div id="anMsg">BANNER KÓDJA</div>  
  <script type="text/javascript">  
  //<![CDATA[  
  (function(){  
  var newDiv = document.getElementById('anMsg');  
  var divs = document.getElementsByTagName('div');  
  var k=1;  
  for(var i=0; i<divs.length; i++)  
  if( divs[i].className=='gDivLeft' ){  
  if( k==2 ){  
  divs[i].parentNode.insertBefore(newDiv, divs[i]);  
  break;  
  }  
  k ++;  
  }  
  })();  
  //]]>  
  </script>  
  <?endif?>
```

Ne felejtsük el módosítani a BANNER KÓDJA szöveget a bannerünk, vagy banner-forgatónk HTML kódjával. 

*Forrás: http://maxrom.ucoz.com/forum/6-63-1*
