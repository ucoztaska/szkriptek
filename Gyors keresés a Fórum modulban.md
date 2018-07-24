# Gyors keresés a Fórum modulban

A kód segítségével elhelyezhetünk a fórum oldalain egy keresőmezőt, amelynek segítségével bármire rákereshetünk a fórum keretén belül.

**A fórum oldalainak általános kinézete** sablonba, ahol a keresőt látni szeretnénk, illesszük be az alábbi kódot: 

```html
<form method="post" action="/forum/">
  <p align="center">  
    <input class="fastSearch" type="text" name="kw" placeholder="Gyors keresés..." size="150" maxlength="60" />  
    <input class="postSubmit" type="submit" value="Keresés!" />  
    <input type="hidden" name="a" value="6" />
  </p>
</form>
```

A kereső eredetileg a fórum oldalainak tetejére (a $GLOBAL_AHEADER$ kód után) készült, de ugyanúgy használható bárhol.
