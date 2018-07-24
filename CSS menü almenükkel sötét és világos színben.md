# CSS menü almenükkel sötét és világos színben

Egyszerű, de nagyszerű menü, mely csak a CSS3 technológiára alapszik. Almenükkel is rendelkezik, ráadásul sötét és világos szín közül is választhatunk, a honlapunk színárnyalatainak megfelelően.

Illeszd be az alábbi kódot a **Stílusok táblázata (CSS)** sablonba: 

```css
/* -- DARK MENU -- */

.blackmenu ul {
  padding:0;
  margin:0;
  background:#333;
  display:block;
  height:49px;
  border-bottom:3px solid #222;
}

.blackmenu ul li {
  list-style-type:none;
  float:left;
}

.blackmenu ul li a {
  padding:14px 10px;
  display:block;
  color:#fff;
  font-family:'Segoe UI', sans-serif;
  text-decoration:none;
}

.blackmenu ul li a:hover {
  background:#222;
  -webkit-box-shadow: inset 0 0 20px 0 #111;
  box-shadow: inset 0 0 20px 0 #111;
}

.blackmenu ul li ul {
  visibility:hidden;
  list-style-type:none;
  margin:0;
  padding:0;
  width: 250px;
  position:absolute;
  z-index:980;
  background:#222;
  border-bottom:0;
  height:auto;
}

.blackmenu ul li:hover ul {
  visibility:visible;
}

.blackmenu ul li ul li {
  float:none;
}

.blackmenu ul li ul li a {
  display:block;width:230px;
}

.blackmenu ul li ul li a:hover {
  -webkit-box-shadow: inset 0 0 20px 0 #000;
  box-shadow: inset 0 0 20px 0 #000;
  background:#111;  
}

/* -- --------- -- */

/* -- LIGHT MENU -- */

.lightmenu ul {
  padding:0;
  margin:0;
  background:#ccc;
  display:block;
  height:49px;
  border-bottom:3px solid #bbb;
}

.lightmenu ul li {
  list-style-type:none;
  float:left;
}

.lightmenu ul li a {
  padding:14px 10px;
  display:block;
  color:#222;
  font-family:'Segoe UI', sans-serif;
  text-decoration:none;
}

.lightmenu ul li a:hover {
  background:#bbb;
  -webkit-box-shadow: inset 0 0 20px 0 #aaa;
  box-shadow: inset 0 0 20px 0 #aaa;
}

.lightmenu ul li ul {
  visibility:hidden;
  list-style-type:none;
  margin:0;
  padding:0;
  width: 250px;
  position:absolute;
  z-index:980;
  background:#bbb;
  border-bottom:0;
  height:auto;
}

.lightmenu ul li:hover ul {
  visibility:visible;
}

.lightmenu ul li ul li {
  float:none;
}

.lightmenu ul li ul li a {
  display:block;width:230px;
}

.lightmenu ul li ul li a:hover {
  -webkit-box-shadow: inset 0 0 20px 0 #888;
  box-shadow: inset 0 0 20px 0 #888;
  background:#aaa;  
}

/* -- ---------- -- */
```

**Sötét menü HTML kódja:**

```html
<div class="blackmenu"><ul><li><a href="#">Menüelem</a></li><li><a href="#">Menüelem</a></li><li><a href="#">Menüelem</a></li><li><a href="#">Menüelem</a></li><li><a href="#">Menüelem</a>
  <ul><li><a href="#">Almenü</a></li><li><a href="#">Almenü</a></li><li><a href="#">Almenü</a></li><li><a href="#">Almenü</a></li></ul>
  </li></ul>
</div>
```

**Világos menü HTML kódja:**

```html
<div class="lightmenu"><ul><li><a href="#">Menüelem</a></li><li><a href="#">Menüelem</a></li><li><a href="#">Menüelem</a></li><li><a href="#">Menüelem</a></li><li><a href="#">Menüelem</a>
  <ul><li><a href="#">Almenü</a></li><li><a href="#">Almenü</a></li><li><a href="#">Almenü</a></li><li><a href="#">Almenü</a></li></ul>
  </li></ul>
</div>
```
