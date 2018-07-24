# CSS-menü

Egy stílusos CSS menü weboldaladhoz.

A **Stílusok táblázata (CSS)** sablonba a következő kódot illesszük: 

```css
.menu_container{    
     width:980px;    
     height:77px;    
     margin:40px auto 0 auto;    
     background:#09f;    
     overflow:hidden;    
     -webkit-box-shadow:0 0 7px #888;    
     -moz-box-shadow:0 0 7px #888;    
     box-shadow:0 0 7px #888;    
}    

.menu{    
     height:41px;    
     background:#333;    
}    

.menu ul{    
     position:relative;    
     float:left;    
}    

.menu ul li{    
     float:left;    
}    

.menu ul li a{    
     display:block;    
     height:41px;    
     padding:0 20px;    
     font-size:15px;    
     color:#777;    
     line-height:45px;    
     -webkit-transition:all .2s linear;    
     -moz-transition:all .2s linear;    
     -ms-transition:all .2s linear;    
     -o-transition:all .2s linear;    
     transition:all .2s linear;    
}    

.menu ul li:hover a,    
.menu ul li a.selected{    
     background:#09f;    
     color:#fff;    
}    

.menu ul li a:active{    
     color:#ccc;    
}    

.menu ul:hover li a.selected{    
     background:#333;    
     color:#777;    
}    

.menu ul li:hover a.selected{    
     background:#09f;    
     color:#fff;    
}    

.menu ul li a:active.selected{    
     color:#ccc;    
}    

.menu ul ul{    
     width:980px;    
     height:36px;    
     position:absolute;    
     left:0;    
     margin-left:8%;    
     filter:alpha(opacity=0);    
     opacity:0;    
     background:#09f;    
     -webkit-transition:all .4s ease-out .1s;    
     -moz-transition:all .4s ease-out .1s;    
     -ms-transition:all .4s ease-out .1s;    
     -o-transition:all .4s ease-out .1s;    
     transition:all .4s ease-out .1s;    
}    

.menu ul ul.visible{    
     z-index:1;    
     margin-left:0;    
     filter:alpha(opacity=100);    
     opacity:1;    
}    
.menu ul:hover ul.visible{    
     margin-left:8%;    
     filter:alpha(opacity=0);    
     opacity:0;    
}    
.menu ul li:hover ul.visible{    
     margin-left:0;    
     filter:alpha(opacity=100);    
     opacity:1;    
}    
.menu ul li:hover ul{    
     z-index:2;    
     margin-left:0;    
     filter:alpha(opacity=100);    
     opacity:1;    
}    
.menu ul ul li a{    
     height:36px;    
     padding:0 20px;    
     font-size:13px;    
     color:#fff;    
     text-transform:capitalize;    
     line-height:40px;    
     -webkit-transition:color .3s ease-in-out;    
     -moz-transition:color .3s ease-in-out;    
     -ms-transition:color .3s ease-in-out;    
     -o-transition:color .3s ease-in-out;    
     transition:color .3s ease-in-out;    
}    
.menu ul ul li:hover a{    
     color:#333;    
     text-shadow:1px 1px 5px #888;    
}    
.menu ul ul li a:active{    
     color:#666;    
}    
.search{    
     margin:3px 8px 0 0;    
     float:right;    
     border:solid 1px #555;    
}    
.search_field{    
     width:160px;    
     height:20px;    
     padding:6px 4px;    
     float:left;    
     color:#666;    
     font-size:13px;    
     line-height:20px;    
     background:#333;    
     -webkit-transition:color .2s linear;    
     -moz-transition:color .2s linear;    
     -ms-transition:color .2s linear;    
     -o-transition:color .2s linear;    
     transition:color .2s linear    
}    

.search_field:focus{    
     color:#999;    
}    

.button{    
     width:28px;    
     height:28px;    
     float:left;    
     background:#333 url(https://i.imgur.com/pf65ZFs.png) 0 3px;    
}
```

**A honlap felső része** sablonban, ahol a menüt szeretnénk látni, a következő kódot illesszük:

```html
<div class="menu_container">      
     <nav class="menu">      
     <ul>      
     <li><a href="#" class="selected">Főoldal</a>      
     <ul class="visible">      
     <li><a href="#">Almenü 1</a></li>      
     <li><a href="#">Almenü 2</a></li>      
     <li><a href="#">Almenü 3</a></li>      
     <li><a href="#">Almenü 4</a></li>      
     <li><a href="#">Almenü 5</a></li>      
     <li><a href="#">Almenü 6</a></li>      
     </ul>      
     </li>      
     <li><a href="#">Fórum</a>      
     <ul>      
     <li><a href="#">Almenü 1</a></li>      
     <li><a href="#">Almenü 2</a></li>      
     <li><a href="#">Almenü 3</a></li>      
     <li><a href="#">Almenü 4</a></li>      
     <li><a href="#">Almenü 5</a></li>      
     <li><a href="#">Almenü 6</a></li>      
     </ul>      
     </li>      
     <li><a href="#">Fájlkatalógus</a>      
     <ul>      
     <li><a href="#">Almenü 1</a></li>      
     <li><a href="#">Almenü 2</a></li>      
     <li><a href="#">Almenü 3</a></li>      
     <li><a href="#">Almenü 4</a></li>      
     <li><a href="#">Almenü 5</a></li>      
     <li><a href="#">Almenü 6</a></li>      
     </ul>      
     </li>      
     <li><a href="#">Blog</a>      
     <ul>      
     <li><a href="#">Almenü 1</a></li>      
     <li><a href="#">Almenü 2</a></li>      
     <li><a href="#">Almenü 3</a></li>      
     <li><a href="#">Almenü 4</a></li>      
     <li><a href="#">Almenü 5</a></li>      
     <li><a href="#">Almenü 6</a></li>      
     </ul>      
     </li>      
     <li><a href="#">Honlapkatalógus</a>      
     <ul>      
     <li><a href="#">Almenü 1</a></li>      
     <li><a href="#">Almenü 2</a></li>      
     <li><a href="#">Almenü 3</a></li>      
     <li><a href="#">Almenü 4</a></li>      
     <li><a href="#">Almenü 5</a></li>      
     <li><a href="#">Almenü 6</a></li>      
     </ul>      
     </li>      
     <li><a href="#">Egyebek</a>      
     <ul>      
     <li><a href="#">Almenü 1</a></li>      
     <li><a href="#">Almenü 2</a></li>      
     <li><a href="#">Almenü 3</a></li>      
     <li><a href="#">Almenü 4</a></li>      
     <li><a href="#">Almenü 5</a></li>      
     <li><a href="#">Almenü 6</a></li>      
     </ul>      
     </li>      
     <li><a href="#">Kapcsolat</a>      
     <ul>      
     <li><a href="#">Almenü 1</a></li>      
     <li><a href="#">Almenü 2</a></li>      
     <li><a href="#">Almenü 3</a></li>      
     <li><a href="#">Almenü 4</a></li>      
     <li><a href="#">Almenü 5</a></li>      
     <li><a href="#">Almenü 6</a></li>      
     </ul>      
     </li>      
     </ul>      
     <form class="search">      
     <input type="text" class="search_field" name="search" placeholder="Keresés...">      
     <input type="submit" class="button" value="" >      
     </form>      
     </nav>      
     </div>   
```

*Forrás: http://webo4ka.ru/load/46-1-0-3887*
