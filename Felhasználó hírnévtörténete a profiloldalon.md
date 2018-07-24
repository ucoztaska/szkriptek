# Felhasználó hírnévtörténete a profiloldalon

![Felhasználó hírnévtörténete a profiloldalon](res/usrep.png)

**LETÖLTÉS: https://drive.google.com/open?id=0B_wBgv1thFXZbVk2M1l6d2hUbWM**

A szkript segítségével megjeleníthető a felhasználók hírneve a profil oldalán, így nem kell megnyitni a Hírnévtörténet ablakot a megtekintéshez. 

## Telepítés

1. Töltsd le az archívumot a letöltési oldal jobb felső sarkában található letöltési gombbal.

2. Töltsd fel az usrep mappát a tárhelyedre.

3. A **Felhasználó saját oldala** sablonba, ahol a hírnévtörténetet meg akarod jeleníteni, illeszd be az alábbi kódot:

```html
<script id="scriptRep" type="text/javascript"></script>  
<div style="border:1px solid #dedede; background:#fff;">  
<div style="padding:5px; border:0px; border-bottom:1px solid #ccc;">  
<div id="editRep" style="float:right;"></div>  
<b>$_USERNAME$</b> hírneve - <b id="kdfjeu2">$_REPUTATION$</b></div>  
<div id="testRepa" style="padding:5px; max-height:153px; overflow: auto;"></div>  
</div>  
<div style="padding:5px;"></div>  
<script type="text/javascript">var user_id = "$_USER_ID$";</script>  
<script type="text/javascript" src="/usrep/uS_Rep.js"></script>
```

*Forrás: http://yraaa.ru/scripts/reputation-profile*
