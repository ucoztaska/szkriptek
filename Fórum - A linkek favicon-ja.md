# A linkek favicon-ja fórumban

A szkript segítségével könnyedén megjeleníthetjük bármelyik oldal favicon-ját (a böngészőfülön megjelenő, az oldalt képviselő ikont) a fórumbejegyzésekben.

A szkript működéséhez ki kell kapcsolni a **Külső linkek cseréje u.to szolgáltatás segítségével** funkciót az **Általános beállításokban** (Vezérlőpult » Beállítások menü » Általános beállítások).

Amennyiben ezt megtettük, menjünk a **Fórum oldalainak általános kinézete** sablonba, majd a **$BODY$** tag után illesszük be a következő kódot: 

```html
<script type="text/javascript">  
  $('td.posttdMessage a.link').each(function(){  
  site=this.href.split('/')[2];link=this.href;data=this.innerHTML;  
  if(data.indexOf('border="0"')==-1 && link.indexOf('mailto')!=0){  
  $(this).before('<img src="https://www.google.com/s2/favicons?domain='+site+'" alt="favicon.ico" align="absmiddle" width="16" border="0"> ');}});  
</script>
```

**Figyelem!** A szkript csak az újonnan hozzáadott bejegyzéseknél fog működni, amennyiben előzőleg használtad az u.to szolgáltatást. A régieket manuálisan kell frissíteni ahhoz, hogy ott is működjön.