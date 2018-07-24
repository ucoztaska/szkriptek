# Privát üzenetek elküldése tárgy nélkül

A szkript segítségével elérhető az, hogy ha egy felhasználó nem adja meg az üzenet tárgyát, akkor a "(nincs tárgy)" szöveg jelenjen meg tárgyként. 

## A szkript logikája

Alapértelmezetten, ha nem adod meg az üzenet tárgyát, sikeres küldés helyett egy hibaüzenetet fogsz látni, amely figyelmeztet arra, hogy nem adtad meg a tárgyat. Sok esetben egyszerűen nem tudjuk, mit adjunk meg tárgyként, így azon gondolkodunk, mit írhatnánk oda. Vagy amikor nagyon sietünk és gondolkodásra sincs időnk, random karaktereket adunk meg tárgyként ("asdasd" és társai). 

A honlapod felhasználói szembesülhetnek ezzel a problémával, éppen ezért most megadjuk nekik a lehetőséget, hogy ne adjanak meg tárgyat. Vagyis a mező kitöltése továbbra is kötelező lesz, csak küldés esetén, amennyiben üres, hozzáadjuk a "(nincs tárgy)" szöveget. 

A szkript működése nagy vonalakban így néz ki: eltávolítja az alapértelmezett küldés gombot, majd lecseréli azt egy egyéni ID-val rendelkezővel, melyhez jQuery-vel hozzáfűzhetünk bizonyos funkciókat, a mi esetünkben a tárgy nélküli elküldést. A szkript leellenőrzi, hogy ki van-e töltve a tárgy mező, ha pedig nincs, akkor előbb hozzáadja a "(nincs tárgy)" szöveget és csak utána küldi el az üzenetet.

## A szkript telepítése

Menj a Privát üzenetek sablonba, majd a $BODY$ tag után illeszd be az alábbi kódot: 

```html
<script type="text/javascript">
  $(document).ready(function() {
    $("input[type=reset]").before("<input style='font-weight: bold;width: 130px; margin-right: 4px;' type='button' id='submitMsg' value='Küldés' />");
    $("#sbm").hide();
    $("#submitMsg").click(function() {
      var subject=$.trim($("#pmSubject").val());
      if(subject.length > 0) {
        $("#sbm").click();
      } else {
        $("#pmSubject").val("(nincs tárgy)");
        $("#sbm").click();
      }
      return false;
    });
  });
</script>
```

## Figyelem!

A szkript bizonyos esetekben (bonyolult sablonok, további szkriptek által okozott szkript-ütközés, stb.) nem működhet.
