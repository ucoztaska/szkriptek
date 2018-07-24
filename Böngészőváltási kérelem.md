# Böngészőváltási kérelem

Ez a szkript hasznos, ha a weboldalunk csak egy adott böngészőben jelenik meg tökéletesen.

Illeszd be a kért böngészőnek megfelelő kódot oda, ahol a felhívó szöveget szeretnéd látni-

**Chrome:**

```<?ifnot($USER_AGENT$='chrome')?>Az oldal Google Chrome-ra van optimalizálva. Kérjük $USER_AGENT$ helyett használjon inkább Google Chrome-ot az oldal megtekintéséhez!<?endi```f?>


**Mozilla Firefox:**

```<?ifnot($USER_AGENT$='firefox')?>Az oldal Firefoxra van optimalizálva. Kérjük $USER_AGENT$ helyett használjon inkább Firefoxot az oldal megtekintéséhez!<?endif?>```


**Opera:**

```<?ifnot($USER_AGENT$='opera')?>Az oldal Operára van optimalizálva. Kérjük $USER_AGENT$ helyett használjon inkább Operát az oldal megtekintéséhez!<?endif?>```


**Safari:**

```<?ifnot($USER_AGENT$='safari')?>Az oldal Safari böngészőre van optimalizálva. Kérjük $USER_AGENT$ helyett használjon inkább Safarit az oldal megtekintéséhez!<?endif?>```


**Internet Explorer:**

```<?ifnot($USER_AGENT$='ie')?>Az oldal Internet Explorerre van optimalizálva. Kérjük $USER_AGENT$ helyett használjon inkább Internet Explorert az oldal megtekintéséhez!<?endif?>```


 - A szkript nem működik régi Internet Explorer böngészőkben.
 - A felhívó szöveg tartalma nyugodtan módosítható.
 - A kódokban a $USER_AGENT$ a felhasználó által használt böngésző nevét fogja kiírni.
