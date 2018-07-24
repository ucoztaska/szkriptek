# Kép-konténerek

Ezek stílusos konténerek, melyeket könnyen fel lehet használni, ha valamit szeretnénk "reklámozni". A kép egy picit nagyobb lesz, és le fog gördülni egy leírás. 

Ezt a kódot illesszük be egy akármilyen oldalba (Fontos, hogy HTML Kódok Panelban szerkesszünk!) 

```html
<table><tbody><tr><td>
<!-- 1.kép-->
<div class="imagepluscontainer" style="width:auto;">
<a href="URL CÍM" target="blank"><img src="KÉP_URL" title="Title"></a>
<div class="desc">
LEÍRÁS
</div>
</div></td>
<!-- 2.kép-->
<td><div class="imagepluscontainer" style="width:auto;">
<a href="URL CÍM" target="blank"><img src="KÉP_URL" title="Title"></a>
<div class="desc">
LEÍRÁS
</div>
</div></td>
<!-- 3.kép-->
<td>
<div class="imagepluscontainer" style="width:auto;">
<a href="URL CÍM" target="blank"><img src="KÉP_URL" title="Title"></a>
<div class="desc">
LEÍRÁS
</div>
</div></td>
<!-- 4.kép-->
<td><div class="imagepluscontainer" style="width:auto;">
<a href="URL CÍM" target="blank"><img src="KÉP_URL" title="Title"></a>
<div class="desc">
LEÍRÁS
</div>
</div></td>
<!-- 5.kép-->
<td>
<div class="imagepluscontainer" style="width:auto;">
<a href="URL CÍM" target="blank"><img src="KÉP_URL" title="Title"></a>
<div class="desc">
LEÍRÁS
</div>
</div></td></tr></tbody></table>
<style>
.imagepluscontainer{ /* main image container */
position: relative;
z-index: 1;
}

.imagepluscontainer img{ /* CSS for image within container */
position: relative;
z-index: 2;
-moz-transition: all 0.5s ease; /* Enable CSS3 transition on all props */
-webkit-transition: all 0.5s ease-in-out;
-o-transition: all 0.5s ease-in-out;
-ms-transition: all 0.5s ease-in-out;
transition: all 0.5s ease-in-out;
}
   div.imagepluscontainer img {
   width:192px;
   height:200px;
   border-radius: 8px;
}

.imagepluscontainer:hover img{ /* CSS for image when mouse hovers over main container */
-moz-box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
-webkit-box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
-moz-transform: scale(1.05, 1.05);
-webkit-transform: scale(1.05, 1.05);
-ms-transform: scale(1.05, 1.05);
-o-transform: scale(1.05, 1.05);
transform: scale(1.05, 1.05);
}

.imagepluscontainer div.desc{ /* CSS for desc div of each image. */
position: absolute;
width: 80%;
z-index: 1; /* Set z-index to that less than image's, so it's hidden beneath it */
bottom: 0; /* Default position of desc div is bottom of container, setting it up to slide down */
left: 5px;
padding: 8px;
background: rgba(0, 0, 0, 0.8); /* black bg with 80% opacity */
color: white;
-moz-border-radius: 0 0 8px 8px; /* CSS3 rounded borders */
-webkit-border-radius: 0 0 8px 8px;
border-radius: 0 0 8px 8px;
opacity: 0; /* Set initial opacity to 0 */
-moz-box-shadow: 0 0 6px rgba(0, 0, 0, 0.8); /* CSS3 shadows */
-webkit-box-shadow: 0 0 6px rgba(0, 0, 0, 0.8);
box-shadow: 0 0 6px rgba(0, 0, 0, 0.8);
-moz-transition: all 0.5s ease 0.5s; /* Enable CSS3 transition on desc div. Final 0.5s value is the delay before animation starts */
-webkit-transition: all 0.5s ease 0.5s;
-o-transition: all 0.5s ease 0.5s;
-ms-transition: all 0.5s ease 0.5s;
transition: all 0.5s ease 0.5s;
}

.imagepluscontainer div.desc a{
color: #3686f2;
}

.imagepluscontainer:hover div.desc{ /* CSS for desc div when mouse hovers over main container */
-moz-transform: translate(0, 100%);
-webkit-transform: translate(0, 100%);
-ms-transform: translate(0, 100%);
-o-transform: translate(0, 100%);
transform: translate(0, 100%);
opacity:1; /* Reveal desc DIV fully */
}

/*### Below CSS when applied to desc DIV slides the desc div from the right edge of the image ###*/

.imagepluscontainer div.rightslide{
width: 150px; /* reset from default */
top:15px;
right:0;
left:auto; /* reset from default */
bottom:auto; /* reset from default */
padding-left:15px;
-moz-border-radius: 0 8px 8px 0;
-webkit-border-radius: 0 8px 8px 0;
border-radius: 0 8px 8px 0;
}

.imagepluscontainer:hover div.rightslide{
-moz-transform: translate(100%, 0);
-webkit-transform: translate(100%, 0);
-ms-transform: translate(100%, 0);
-o-transform: translate(100%, 0);
transform: translate(100%, 0);
}

/*### Below CSS when applied to desc DIV slides the desc div from the left edge of the image ###*/

.imagepluscontainer div.leftslide{
width: 150px; /* reset from default */
top:15px;
left:0;
bottom:auto; /* reset from default */
padding-left:15px;
-moz-border-radius: 8px 0 0 8px;
-webkit-border-radius: 8px 0 0 8px;
border-radius: 8px 0 0 8px;
}

.imagepluscontainer:hover div.leftslide{
-moz-transform: translate(-100%, 0);
-webkit-transform: translate(-100%, 0);
-ms-transform: translate(-100%, 0);
-o-transform: translate(-100%, 0);
transform:translate(-100%, 0);
}

/*### Below CSS when applied to desc DIV slides the desc div from the top edge of the image ###*/

.imagepluscontainer div.upslide{
top:0;
bottom:auto; /* reset from default */
padding-bottom:10px;
-moz-border-radius: 8px 8px 0 0;
-webkit-border-radius: 8px 8px 0 0;
border-radius: 8px 8px 0 0;   
}
.imagepluscontainer div.upslide{text-shadow: 0 0 0.2em #fff, 0 0 0.2em #fff,0 0 0.2em #fff;color:#3686f2;font-size:16px;font-weight:bold;}
.imagepluscontainer div.desc{text-shadow: 0 0 0.1em #000, 0 0 0.1em #000,0 0 0.1em #fff;color:#7dccf8;font-size:12px;font-weight:bold;}
.imagepluscontainer:hover div.upslide{
-moz-transform: translate(0, -100%);
-webkit-transform: translate(0, -100%);
-ms-transform: translate(0, -100%);
-o-transform: translate(0, -100%);
transform:translate(0, -100%);
}
</style>
```

- **URL CÍM** - Az az URL cím, melyre navigáljunk, ha rákattintunk a képre
- **KÉP_URL** - A kép URL címje
- **TITLE** - Rámutatáskor megjelenő szöveg
- **LEÍRÁS** - A leírás

Fontos megjegyezni, hogy csak 5 ilyen képet helyezhetünk el egy helyen... Ha többet szeretnénk megjeleníteni, akkor két külön táblázatba kell illesztenünk, és hagynunk kell a két táblázat között helyet, másképp minden egybefolyik!

*Forrás: http://www.dynamicdrive.com/style/csslibrary/item/image_with_sliding_description_panel_using_css3_transitions/*