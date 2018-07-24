# A kép BB- és HTML kódja a fényképek alatt

A szkript segítségével megjeleníthetjük a kép BB és HTML kódját, valamint a fotó teljes linkjét a fotó alatt.

A **Teljes méretű fotók oldala hozzászólásokkal együtt** és/vagy a **Fénykép oldala pop-up ablakban** sablonokba ahol a mezőket szeretnénk látni, illesszük be a következő kódot:

```html
<td align="center" colspan="2">    
  BB Kód: <input type="text" size="75" value="[img]$PHOTO_URL$[/img]"><br>    
  HTML Kód:    <input type="text" size="75" value="<img src='$PHOTO_URL$' />"><br>    
  Link:                 <input type="text" size="75" value="$PHOTO_URL$">    
</td>
```
