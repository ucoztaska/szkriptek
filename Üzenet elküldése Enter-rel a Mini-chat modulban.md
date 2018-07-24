# Üzenet elküldése Enter-rel a Mini-chat modulban

Amikor írod az üzenetet nem kell mindig egérrel kattintva az Ok gombbal küldeni. Ezzel a szkripttel és a HTML kód apró változtatásával Enter-el is elküldhetjük üzenetünket.De ez csak a Mini-chat modulban működik,és csak akkor, ha az egér kurzor bent van a textarea-ban.

1. Vezérlőpult >> Külalak vezérlése >> [mini-chat alatt] Üzenetek hozzáadásának űrlapja.

2. Keresd meg ezt a kódot:

```html
<table border="0" cellpadding="1" cellspacing="1" width="100%">
<tr><td width="95%" rowspan="2">$FLD_MESSAGE$</td>
<td align="center" valign="top"><div style="font-size:10px;">$LENGTH_COUNTER$</div></td>
</tr><tr><td align="center" valign="bottom">$SUBMIT$</td></tr></table>
```

3. Töröld, majd illeszd be a helyére ezt: 

```html
<table border="0" cellpadding="1" cellspacing="1" width="100%">  
<tr><td id="iras" width="95%" rowspan="2" onClick="this.select();">$FLD_MESSAGE$</td>  
<td align="center" valign="top"><div style="font-size:10px;">$LENGTH_COUNTER$</div></td>  
</tr><tr><td align="center" valign="bottom">  
  <div style="width:30px"><form id="mchatBtn"><input type="submit" value="Küldés" class="mchat" id="mchatBtn" style="width:60px;"></form><img alt="" style="display:none;" id="mchatAjax" src="http://s32.ucoz.net/img/fr/ajax3.gif" border="0" width="60"/></div></td></tr></table>  

<script type="text/javascript">  

$("#iras").keyup(function(event){  
  if(event.which == 13){  
  $("#mchatBtn").click();  
  }  
  // Make sure the form isn't submitted  
  event.preventDefault();  
});  
</script> 
```

(by remus)
