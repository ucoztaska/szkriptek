# Privát üzenetek instant megjelenítése

A linkre kattintva egy felugró dobozban olvashatunk és küldhetünk privát üzeneteket.

1. **Vezérlőpult >> Külalak vezérlése >> Stílusok táblázata (CSS)**. A sablon elejére vagy végére illeszd be a következő kódot: 

```css
#privuzpanel {position:absolute;margin-top:8px;z-index: 1010;right: 20px;border:1px solid #ddd;-webkit-box-shadow: 0 0 10px 2px #333;box-shadow: 0 0 10px 2px #333;}
```

2. Ahol a "Privát üzenetek" gombot szeretnénk látni, illeszd be a következő kódot: 

```html
<a href="#" onclick="privuzmegj();">Privát üzenetek</a>  
  <div id="privuzpanel" style="display:none;">  
  <iframe src="/index/14" width="800px" height="500px" border="0" frameborder="0"></iframe>  
  </div>  
<script type="text/javascript">  
function privuzmegj() {  
  var mit = document.getElementById("privuzpanel");  
  if(mit.style.display == "none") {  
  mit.style.display = "block";  
  }  
  else {  
  mit.style.display = "none";  
  }  
}  
</script>
```
