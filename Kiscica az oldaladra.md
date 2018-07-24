# Kiscica az oldaladra

**LETÖLTÉS: https://mega.nz/#!KFMglbaB!87xLItydibBhWm6FzEMg67Ga3PwldItw6R5-uJSDjuQ**

Egy szimpatikus kiscica az oldalad alsó részén, mely a szemével követi a kurzor mozgását.

1. Töltsd fel a tárhelyedre az "img" elnevezésű mappát.

2. **Vezérlőpult >> Külalak vezérlése >> Stílusok táblázata (CSS)**. A sablon elejére vagy végére illesszd be a következő kódot: 

```css
#cat{position:fixed;right:80px;bottom:0;width:146px;height:55px;}  
#cat:hover .cat-itself{height:103px;}  
#cat:hover .cat-eye{display:none!important;}  
.cat-paws{position:absolute;right:0;bottom:-4px;width:132px;height:33px;z-index:2;background:url('/img/cat/cat-paws.png') no-repeat right bottom;}  
.cat-itself-wrap{position:absolute;width:100%;height:100%;z-index:1;}  
.cat-itself{position:absolute;left:0;bottom:0;width:125px;height:55px;z-index:0;background:url('/img/cat/cat-itself.png') no-repeat;-webkit-transition:all .1s .1s ease-out;transition:all .1s .1s ease-out;}  
.cat-eye{position:absolute;display:none;width:28px;height:28px;background:url('/img/cat/cat-eye.png');}  
.cat-eyeball{position:absolute;left:7.5px;top:7.5px;width:13px;height:13px;background:url('/img/cat/cat-eyeball.png');}  
#cat-eye-left{left:25px;top:23px;}  
#cat-eye-right{left:74px;top:26px;}
```

3. **Vezérlőpult >> Külalak vezérlése >> A honlap alsó része**. A sablon legvégére illesszd be a következő kódot: 

```html
<script type="text/javascript" src="/.s/t/1086/template.min.js"></script>  
<div id="cat">  
  <div class="cat-paws"></div>  
  <div class="cat-itself-wrap">  
  <div class="cat-itself">  
  <div id="cat-eye-left" class="cat-eye">  
  <div class="cat-eyeball"></div>  
  </div>  
  <div id="cat-eye-right" class="cat-eye">  
  <div class="cat-eyeball"></div>  
  </div>  
  </div>  
  </div>  
  </div>  
  </div>  
  </div>  

<script>  
  $(function() {  
  var el1 = $('#cat-eye-left'), eyeBall1 = el1.find('div');  
  var el2 = $('#cat-eye-right'), eyeBall2 = el2.find('div');  
  el1.show();  
  el2.show();  
  var x1 = el1.offset().left + 37, y1 = el1.offset().top + 15;  
  var r = 6, x , y, x2, y2, isEyeProcessed = false;  
  $('body').mousemove(function(e) {  
  if (!isEyeProcessed) {  
  isEyeProcessed = true;  
  var x2 = e.pageX, y2 = e.pageY;  
   
  y = ((r * (y2 - y1)) / Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1))) + y1;  
  x = (((y - y1) * (x2 - x1)) / (y2 - y1)) + x1;  
   
  eyeBall1.css({  
  marginTop: (y - y1 + 1) + 'px',  
  marginLeft: (x - x1) + 'px'  
  });  
  eyeBall2.css({  
  marginTop: (y - y1 - 1) + 'px',  
  marginLeft: (x - x1) + 'px'  
  });  
  isEyeProcessed = false;  
  }  
  });  
   
  $('#cat').mousemove(function(e) {  
  e.stopPropagation();  
  return false;  
  });  
   
  });  
  </script>
```

*Forrás: http://yraaa.ru/publ/22-1-0-2037*
