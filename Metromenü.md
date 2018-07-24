# Metromenü

**LETÖLTÉS: https://mega.nz/#!PVFRhI6a!MkVOqM9M1FixEDcYWHV4sp6mutU3PY7c6ZnyiRw5HZg**

Színes, elegáns, egyszerű és modern menü bármilyen weboldalhoz.

1. Töltsd fel a **js** mappát a tárhelyedre.

2. A Stílusok táblázata **(CSS)** sablonba illeszd be az alábbi kódot: 

```css
#menu {  
float: left;  
position: relative;  
top: 0;  
left: 0;  
margin:0px;  
overflow: hidden;  
}  
#menu .colourful {  
display: block;  
position: absolute;  
background: #f0ad22;  
height: 38px;  
width: 85px;  
top: 4px;  
left: -100px;  
}  
#menu ul {  
margin: 0;  
padding: 0;  
list-style: none;  
float: left;  
position: relative;  
top: 0;  
left: 0;  
z-index: 1;  
}  
#menu li {  
float: left;  
margin: 0 1px 0 0;  
}  
#menu a:link, #menu a:visited, #menu a:hover, #menu a:active {  
color: #000;  
text-align: center;  
display: block;  
border: solid;  
border-width: 4px 0 0;  
line-height: 40px;  
width: 85px;  
  transition-duration:250ms;
}  
#menu li a:hover {  
text-decoration: none;  
color: #fff;  
text-shadow: 0 0 1px #999;  
transition-duration:250ms;
}
```

3. A kívánt sablonba, a `</body>` tag elé: 

```html
<script src="/js/init.js"></script>  
<script src="/js/easing.js"></script> 
```

4. Illeszd be a következő kódot oda, ahol a menüt szeretnéd látni: 

```html
<div id="menu">  
<ul>  
<li> <a href="/">Főoldal</a>  

</li>  
<li> <a href="/forum">Fórum</a>  

</li>  
<li> <a href="/load">Letöltések</a>  

</li>  
<li> <a href="/news">Hírek</a>  

</li>  
<li> <a href="/blog">Blog</a>  

</li>  
<li> <a href="/video">Videók</a>  

</li>  
<li> <a href="/index/0-3">Kapcsolat</a>  
</li>  
</ul>  
</div> 
```

A menüelemeket persze módosítanod kell a sajátjaidra. 

*Forrás: http://webo4ka.ru/load/46-1-0-4009*
