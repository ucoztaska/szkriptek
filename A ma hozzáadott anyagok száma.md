# A ma hozzáadott anyagok száma

A szkript segítségével bárhol az oldalon megjelenítheted, hogy hány anyagot tettél közzé egy adott modulban a mai napon. A telepítés egyszerűbb, mint gondolnád! 

Sok oldalon lehet látni, hogy azon a napon, amikor meglátogatjuk az oldalt, hány bejegyzés lett közzétéve. A uCoz rendszerben is meg lehet ezt oldani, ráadásul nagyon egyszerűen! Yraaa-s barátaink megmutattak egy olyan megoldást, aminek a meglelésén órákat szenvedtem régebb. Nagy taps illeti őket a kiváló munkájukért!

## Telepítés

Valószínűleg már érezted, hogy informerekkel fogunk dolgozni, és igaz is volt a megérzésed! 

1. Menj a *Vezérlőpult » Eszközök » Informerek* oldalra, majd hozz létre egy új informert a következő beállításokkal:

- **Informer neve:** itt akármit megadhatsz
- **Fejezet:** válaszd ki a kívánt modult
- **Adattípus:** Bejegyzések
- **Rendezési módszer:** Bejegyzés dátuma D
- **Bejegyzések száma:** 99
- **Jelenlegi bejegyzések:** Nap
- **Üzenet, amennyiben nincs anyag a folyó napra:** 0

Az informered ehhez hasonlóan kell kinézzen:

![Informerek beállításai](https://i.imgur.com/aWBrVWy.png)

Amennyiben csak bizonyos kategóriákhoz szeretnél számlálót, a Kiegészítő opciók alatt megadhatod a szükséges kategóriák ID-jait.

2. Az informer sablonját cseréld le egy **1**-es számra. A teljes sablonnak csak azt kell tartalmaznia, hogy **1**.

3. Ahol a számlálót látni szeretnéd, illeszd be a következő kódot, behelyettesítve a *$MYINF_4$* kódot az informered kódjával (mindkét helyen):

```html
<?if($MYINF_4$!='<div class="noEntries">0</div>')?>+<?len($MYINF_4$)?><?endif?>
```

**Megjegyzés:**

 - A szkript csak akkor működik, ha naponta legfeljebb 99 anyagot töltesz fel a honlapodra.
 - A szkript egy normális szöveghez hasonlóan működik. CSS segítségével könnyedén stilizálhatod.

*Forrás: http://yraaa.ru/scripts/za-segodnya*
