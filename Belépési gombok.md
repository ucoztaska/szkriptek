# Belépési gombok

A uCoz nemrég bevezette a közösségi hálózatokon keresztüli regisztráció lehetőségét. Kaptunk előre beállított gombokat is, melyeknél négy különböző készletet választhatunk ki (a modul beállításainál). Ezek az alapértelmezett kinézetek sokak számára túl unalmas, ezért most elkészítettünk egy vadonatúj gombkinézetet, mely mindenki tetszését el fogja nyerni!

1. **Vezérlőpult >> Külalak szerkesztése >> Stílusok táblázata (CSS)** >> [legelejére vagy legvégére illeszd be ezt a kódot: 

```css
.belepesgomb {padding:10px;border-radius:6px;display:block;color:#fff !important;font-size:11pt;font-weight:bold;font-family:sans-serif, ubuntu;text-decoration:none !important;;opacity:.9;transition-duration:250ms;margin-bottom:6px;text-shadow: 0 0 1px #222;padding-left:42px;text-align:left !important;}
.belepesgomb:hover {opacity:1;-webkit-box-shadow:inset 0 0 6px 0 #222;box-shadow:inset 0 0 6px 0 #222;transition-duration:250ms;color:#fff !important;text-decoration:none !important;}

.belepesgomb.fb {background:url('http://src.ucoz.net/.s/img/icon/social/fb-w.svg') no-repeat left #3b5998;background-size:25px;background-position: 8px;}
.belepesgomb.gp {background:url('http://src.ucoz.net/.s/img/icon/social/gp-w.svg') no-repeat left #c0392b;background-size:25px;background-position: 8px;}
.belepesgomb.tw {background:url('http://src.ucoz.net/.s/img/icon/social/tw-w.svg') no-repeat left #55acee;background-size:25px;background-position: 8px;}
.belepesgomb.uid {background:url('http://src.ucoz.net/.s/img/icon/social/u-w.svg') no-repeat left #3498db;background-size:25px;background-position: 8px;}
```

2. Illeszd be az alábbi kódot oda, ahol a belépési gombokat szeretnéd látni. (Az alapértelmezett **$LOGIN_FORM$** kódot is lecserélheted vele a **Belépés blokk HTML** kódjából - ehhez használd a szerkesztőt, vagy menj a **Vezérlőpult >> Külalak szerkesztése >> Első/Második container**, keresd meg, majd cseréld le a kódot). 

```html
<div id="ujbelepes">$LOGIN_FORM$</div>
<script type="text/javascript">$(document).ready(function(){ // Ha az oldal betöltése véget ért
$("#ujbelepes .login-with.uid").removeClass("login-with uid").addClass("belepesgomb uid").text("Belépés uID-vel"); // uID gomb kinézetének és szövegének megváltoztatása
$("#ujbelepes .login-with.facebook").removeClass("login-with facebook").addClass("belepesgomb fb").text("Belépés Facebook fiókkal"); // Facebook gomb kinézetének és szövegének megváltoztatása
$("#ujbelepes .login-with.twitter").removeClass("login-with twitter").addClass("belepesgomb tw").text("Belépés Twitter fiókkal"); // Twitter gomb kinézetének és szövegének megváltoztatása
$("#ujbelepes .login-with.google").removeClass("login-with google").addClass("belepesgomb gp").text("Belépés Google+ fiókkal"); // Google+ gomb kinézetének és szövegének megváltoztatása
});</script>
```
