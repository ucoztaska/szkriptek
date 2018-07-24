# Bubblewrap CSS menü

Egy stílusos, bubblewrap típusú CSS menü.

**Stílusok táblázata (CSS):**

```css
.bubblewrap{ list-style-type:none; margin:0; padding:0; }   
.bubblewrap li{ display:inline; width: 65px; height:60px; }   
.bubblewrap li img{ width: 55px; height: 60px; border:0; margin-right: 12px; -moz-transition:-moz-transform 0.1s ease-in; -webkit-transition:-webkit-transform 0.1s ease-in;   -o-transition:-o-transform 0.1s ease-in; }   
.bubblewrap li img:hover{ -moz-transform:scale(1.8); -webkit-transform:scale(1.8); -o-transform:scale(1.8); }
```

Ahol a gombokat szeretnénk látni 

```html
<ul class="bubblewrap"> <li><a href="#"><img src="KÉP" title="Add to Stumbleupon" /></a></li> <li><a href="#"><img src="KÉP" title="Add to Facebook" /></a></li> <li><a href="#"><img src="KÉP" title="Add to Digg" /></a></li> <li><a href="#"><img src="KÉP" title="Add to Twitter" /></a></li> <li><a href=""><img src="KÉP" title="Add RSS Feed" /></a></li> </ul>
```

Természetesen a "KÉP" helyére a tetszés szerinti kép linkjét,és a title nevét kell beilleszteni.
Használjátok egészséggel. 

(by remus)