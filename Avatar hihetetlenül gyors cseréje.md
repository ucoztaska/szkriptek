# Avatar hihetetlenül gyors cseréje

**LETÖLTÉS: https://mega.nz/#!2RsBkZCK!vWVG6Pgr1hpeIOli2R3TcIueu8wKMq3-NSCGZ5uiWFE**

A szkript segítségével beállíthatjuk a felhasználók avatar-képének hihetetlenül gyors cseréjét! 

1. Töltsd fel a tárhelyedre a letöltött archívum tartalmát.

2. **Vezérlőpult >> Külalak vezérlése >> A felhasználó saját oldala** >> `</body>` elé beilleszted ezt: 

```html
<script src="/js/avatar.js"></script>
```

3. Ugyanabba a sablonba, ahol az avatar-csere felé vezető linket szeretnéd látni, illeszd be az alábbi kódot: 

```html
<?if($_IS_OWN_PROFILE$)?><a href="javascript://" onclick="uAvatar._uwnd();" id="uavatar-link" replid="#mprofile">Avatar módosítása</a><?endif?>
```

[OPCIONÁLIS] Ha azt szeretnéd, hogy a megváltozott avatar automatikusan megjelenjen a módosítások mentése után, a Felhasználó saját oldala sablonban keresd meg az $_AVATAR$ kódot, majd módosítsd erre: 

```html
<div id="uavaimager">$_AVATAR$</div>
```

*Forrás: http://webo4ka.ru/load/skripty_i_modifikacii_dlja_ucoz/1/46-1-0-3949*
