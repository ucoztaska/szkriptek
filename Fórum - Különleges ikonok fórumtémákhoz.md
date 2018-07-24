# Különleges ikonok fórumtémákhoz

**LETÖLTÉS: https://mega.nz/#!qZcw0S6J!UDngCSerM_vl5yctuwqBpf-y9RGRHadROdE2G39lOak**

A szkript segítségével minden témának adhatunk egy különleges ikont.

1. Töltsd fel a tárhelyedre a "forumik" mappát.

2. **Vezérlőpult >> Külalak vezérlése >> Stílusok táblázata (CSS)**. A sablon elejére vagy végére illeszd be a következő kódot: 

```css
.thDescr,  
  .threadDescr {display:none}  
  #frM30 img {opacity:.33; -moz-opacity: 0.33; filter: alpha(opacity=33);}  
  #frM30 img:hover {opacity:.5; -moz-opacity: 0.5; filter: alpha(opacity=50);}  
  #frM30 img.selectedImg {opacity:1; ; -moz-opacity: 1; filter: alpha(opacity=100);}
```

3. **Vezérlőpult >> Külalak vezérlése >> A fórum oldalainak általános kinézete**. Keresd meg a **$BODY$** taget, majd a vége után nyomj egy entert és illeszd be a lennebb található kódot. 

```html
<script type="text/javascript">$('.thDescr').each(function(){  
  var s = $(this).html().match( /sml\[(\w+)\]/ );  
  $(this).show();  
  if (s==null) return;  
  var name = s[1];  
  s = s[0];  
  $(this).html( $(this).html().replace(s,'') );  
  if( $(this).html()=='()' ) $(this).html('');  
  if( $('table.gTable:first td.gTableTop div.gTopCornerRight + img').size()==0 ) $('table.gTable:first td.gTableTop div.gTopCornerRight').after('<img src="http://oldalad.ucoz.hu/forumik/'+name+'.png" /> ');  
  })  
  $('.threadDescr').each(function(){  
  var s = $(this).html().match( /sml\[(\w+)\]/ );  
  $(this).show();  
  if (s==null) return;  
  var name = s[1];  
  s = s[0];  
  $(this).html( $(this).html().replace(s,'') );  
  $(this).parent().prev().find('img').attr('src','http://oldalad.ucoz.hu/forumik/'+name+'.png');
  });  
  </script>
```

FIGYELEM! A kódban módosítsd a http://oldalam.ucoz.hu címet a saját honlapod címére! (VIGYÁZAT!! KÉT HELYEN VAN!)

4. **Vezérlőpult >> Külalak vezérlése >> [fórum alatt] Üzenet hozzáadásának űrlapja**. Keresd meg a **$_THREAD_DESCR$** tagot, töröld, majd illeszd be ezt a helyébe: 

```html
<input type="text" id="threadAbout" value="" class="postDescrFl" size="60" maxlength="50" />  
  <img src="http://s3.ucoz.net/img/fr/ic1/thread.gif" alt="" class="selectedImg" />  
  <img src="/forumik/arrow.png" alt="arrow" />  
  <img src="/forumik/engine.png" alt="Engine" />  
  <img src="/forumik/hammer.png" alt="Hammer" />  
  <img src="/forumik/help.png" alt="Help" />  
  <img src="/forumik/idea.png" alt="Idea" />  
  <img src="/forumik/info.png" alt="Info" />  
  <img src="/forumik/lightning.png" alt="Lightning" />  
  <img src="/forumik/question.png" alt="question" />  
  <img src="/forumik/smile.png" alt="Smile" />  
  <img src="/forumik/star.png" alt="Star" />  
  <img src="/forumik/warn.png" alt="Warn" />  
  <div style="display:none">$_THREAD_DESCR$</div>
```

5. Szintén ennek a sablonnak a végére illeszd be a következő kódot: 

```html
<?if($_THREAD_NAME$)?>  
  <script type="text/javascript">  
  $('#frF3').css('width','auto').attr('size', 60);  
  $('#frM30 img').click(function(){  
  $('#frM30 .selectedImg').removeClass('selectedImg');  
  $(this).addClass('selectedImg')  
  });  
  if( $('#frF4').val()!='' ){  
  if( $('#frF4').val().match( /sml\[\w+\]/ ) ){  
  $('#threadAbout').val( $('#frF4').val().replace( $('#frF4').val().match( /sml\[(\w+)\]/ )[0], '' ) );  
  $('#frM30 .selectedImg').removeClass('selectedImg');  
  $('#frM30 img[src$="'+ $('#frF4').val().match( /sml\[(\w+)\]/ )[1] +'.png"]').addClass('selectedImg');  
  } else $('#threadAbout').val( $('#frF4').val() );  
  }  
  function checksubmit(){  
  var s = $('#frM30 .selectedImg').attr('src').match( /\/(\w*)\.png/i );  
  if( s!=null ) s = 'sml['+s[1]+']'; else s='';  
  $('#frF4').val( s + $('#threadAbout').val() );  
  return true;  
  }</script>  
  <?endif?>
```

*Forrás: http://maxrom.ucoz.com/forum/6-182-1*