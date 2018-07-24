Valaki szerkesztette a fórumbejegyzését. A uCoz rendszer - a legjobb esetben - kiemeli, hogy igen, ekkor és ebben az időpontban, ez és az a felhasználó szerkesztette a bejegyzését. Ez kezdetben eléggé rondán néz ki, de könnyen szebbé tehetjük!

1. Töltsd le a a **forum-edit.png** fájlt az **src** mappából, majd töltsd fel a tárhelyed **img** mappájába.

2. Illeszd be a **Stílusok táblázata (CSS)** sablon végére a következő kódot:

```css
.editPostForum{display:block;float:right;border:1px solid #ccc;padding:12px;width:330px;font:11px Tahoma;background:#f7f7f7 url('/img/forum-edit.png') no-repeat left;background-position:10px;padding-left:52px}  
.editedTime{padding:2px}
```

A fórum modul **Bejegyzések kinézete** sablonjában keresd meg az alábbi kódot: 

```html
<?if($EDITEDBY$)?><br><br><div class="edited">Az üzenetet módosította: $EDITEDBY$</div><?endif?></td></tr>
```

(a kód különbözhet egyes sablonok esetében)

A fent említett kódot cseréld erre: 

```html
<?if($EDITEDBY$)?><br><br><div class="edited"><div class="editPostForum"><b>Az üzenetet szerkesztette:</b><br> $EDITEDBY$</div></div><?endif?></td></tr>
```
