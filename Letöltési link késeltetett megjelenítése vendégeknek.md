# Letöltési link késeltetett megjelenítése vendégeknek

A szkript segítségével egy adott idő leforgása után jeleníthetjük meg a letöltési linket azoknak a látogatóknak akik még nem léptek be (a vendégeknek).

1. Illeszd be a következő kódot az **Anyag és hozzászólásainak oldala** sablonba (a Fájlkatalógus alól).

```html
<?if($USER_LOGGED_IN$)?>
<?if($FILE_URL$)?><a href="$FILE_URL$"><!--<s5223>-->Letöltöm a szerverről<!--</s>--></a> ($FILE_SIZE$)<?endif?>
<?if($RFILE_URL$)?> · <a href="$RFILE_URL$" target="_blank"><!--<s5224>-->Letöltés távoli szerverről<!--</s>--></a> ($RFILE_SIZE$)<?endif?><?else?>
<script type="text/javascript">  
  $(document).ready(function() {  
  $("#letoltbtnmt").delay(60000).fadeIn(600); // 60000-et behelyettesítjük a kívánt értékkel (10000 = 10 másodperc)  
});  

var szaml=60; // A 60-at behelyettesítjük a kívánt másodpercértékkel.  
var szamlalo=setInterval(idozites, 1000);  
function idozites()  
{  
  szaml=szaml-1;  
  if (szaml <= 0)  
  {  
  clearInterval(szamlalo);  
  document.getElementById("idovisszaszamlal").style.display = "none"  
  return;  
  }  

  document.getElementById("mperc").innerHTML= szaml;  
}  
</script>  
<style type="text/css">#letoltbtnmt {display:none;}</style>  
<div id="letoltbtnmt">
   
  <?if($FILE_URL$)?><a href="$FILE_URL$"><!--<s5223>-->Letöltöm a szerverről<!--</s>--></a> ($FILE_SIZE$)<?endif?>
<?if($RFILE_URL$)?> · <a href="$RFILE_URL$" target="_blank"><!--<s5224>-->Letöltés távoli szerverről<!--</s>--></a> ($RFILE_SIZE$)<?endif?>
   
</div>
<div id="idovisszaszamlal">A fájlt <b><span style="color:red;" id="mperc">60</span></b> másodperc múlva töltheted le. <a href="$LOGIN_LINK$">Jelentkezz be</a>, vagy <a href="$REGISTER_LINK$">regisztrálj</a>, ha nem szeretnél várni.</div><?endif?>
```

2. Módosítsd a 60000-t a kívánt értékre (1 másodperc = 1000) következő kódban:
```javascript
$("#letoltbtnmt").delay(60000).fadeIn(600);
```

3. ... és a 60-at a kívánt másodpercértékre:
```javascript
var szaml=60;
```


4. Módosítsd a 60-at itt is:
```html
<span style="color:red;" id="mperc">60</span>
```


5. A **LETÖLTÉSI GOMB KÓDJA** helyére illesszük be a letöltési gomb vagy link kódját **(Két helyen van!)**.
