# Anyaggal kapcsolatos probléma bejelentése

**LETÖLTÉS: https://mega.nz/#!2ANlSYyI!DPdX02Ec8Uop87mhqTXnKbM3gv92R223GCVHplJhwBk**

Amennyiben a honlapon levő egyik anyag hibás (valami hiányzik belőle vagy nem működik megfelelően), a felhasználók jelenthetik azt a szerzőnek vagy a honlap adminisztrátorának.

Rengeteg ilyenféle szkriptet megírtak már a uCoz rendszerhez, viszont egyik sem működött, valamint egyik sem volt könnyen kibővíthető. A mai napon meghoztuk a szkriptet, ami mindkét kritériumot beteljesíti: remekül működik és nagyon könnyű a testreszabása is.

## Telepítés

1. Töltsd le az archívumot, majd töltsd fel a **js** mappát a tárhelyedre.

2. **Vezérlőpult >> Honlap-stílus >> Külalak szerkesztése** >> a kívánt modulnak megfelelő **Anyag és hozzászólásainak oldala** sablon. Itt, ahol a gombot vagy linket szeretnéd látni, beilleszted a következő kódok egyikét: 

**Gomb:**
```html
<?if($USER_ID$ != $UID$ && $USER_LOGGED_IN$)?>
<button onclick="startCTM()">Anyaggal kapcsolatos probléma bejelentése</button>
<?endif?>
```

**Szabványos link:**
```html
<?if($USER_ID$ != $UID$ && $USER_LOGGED_IN$)?>
<a href="javascript://" class="kn_mat" onclick="startCTM()">Anyaggal kapcsolatos probléma bejelentése</a>
<?endif?>
```

Mi a másodikat ajánljuk, mivel egyszerűbb személyre szabni a link kinézetét egy kis CSS tudással.

Szintén ugyanebben a sablonba, a link vagy gomb alá illeszd be a következő kódot: 

```html
<script type="text/javascript">  
var username = '$USER$';  
var ctmarray = [  
{'ctm':['Érvénytelen forrás',true,'$USERNAME$, kérünk, add meg a helyes forrást.']},  
{'ctm':['Nem működő letöltési link']},  
{'ctm':['Helytelen kép']},  
{'ctm':['Szerzői jogok megsértése',true,'$USERNAME$, kérünk, mutass bizonyítékot erre.']},  
{'ctm':['Más problémám van',true,'$USERNAME$, mondd el nekünk, mi történt.']}  
];  
var ctmtmp = [  
'Az oldal, melyre a jelentés érkezett: [b][url={URL}]{TITLE}[/url][/b][br]Jelentés tartalma: [color=#ff0000][b]{MOAN_MESSAGE}[/b][/color]',  
'[br]Kiegészítő információk: [color=#38761D][b]{EXTRA_MESSAGE}[/b][/color]'  
];  
/*  
{URL} = Az oldal, amelyről jelentés érkezett  
{TITLE} = Az oldal címe
{MOAN_MESSAGE} = Jelentés szövege
{EXTRA_MESSAGE} = Jelentés kiegészítő információi
*/  
</script>  

  <script type="text/javascript" src="/js/entry_report.js"></script>
```

## Személyre szabás

A szkriptet nagyon egyszerű személyre szabni. Amennyiben több elemet (jelentési típust) szeretnél elérhetővé tenni felhasználóid számára, illessz be egy új kódsort oda, ahol az új mezőt szeretnéd látni. A kódsorok a következőképpen néznek ki:

- **{'ctm':['Elem szövege']}** - elem, kiegészítő mező nélkül.
- **{'ctm':['Elem szövege',true,'Kiegészítő mező helyjelölője (placeholder).']}** - elem, kiegészítő mezővel (így a felhasználók több információt is megadhatnak, mint például: helyes link, stb.)


Az egyetlen dolgod, hogy beilleszted őket a kódban arra a helyre, ahol látni szeretnéd őket. Fontos, hogy mindegyik elem után rakj vesszőt (,). **Kivételt képez a listában szereplő legutolsó elem!**

A kód alapból az anyag szerzőjének küldi el a jelentést. Amennyiben azt szeretnéd, hogy a jelentés hozzád, az oldal adminisztrátorához érkezzen , a kódban cseréld ki a **$USER$** változót a te felhasználónevedre. 

## Figyelem!

A szkript csak akkor működik, amennyiben a csoportok számára el van tüntetve a Biztonsági kód. Ellenkező esetben azok a felhasználók, akiknek normális esetben megjelenik a biztonsági kód (captcha), hibaüzenetet kapnak.

A csoportjogot a **Felhasználók >> Felhasználói csoportok >> Az összes csoport jogainak beállítása >> Egyéb** szekcióban lehet módosítani. 

*Forrás: http://yraaa.ru/scripts/zhaloba-na-material-v-ls-avtoru-materiala*
