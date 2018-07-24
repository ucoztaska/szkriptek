# Lentről nyíló mini-chat

Egy szabványos, lentről nyíló mini-chat.

**LETÖLTÉS: https://mega.nz/#!vI8XXAYT!wy8EMZgzXfV2nf8k6d_CyjN3nOYJJ747MvD9aLsjztY**

1. Töltsd fel a **chatdesign** mappát a tárhelyedre.

2. **Vezérlőpult >> Külalak vezérlése >> Stílusok táblázata (CSS)**. A sablon legvégére illeszd be a következő kódot: 

```css
.chat {background: #414141 url('/chatdesign/social-box/bg.png'); position: fixed; right: 40px; bottom: 0px!important; padding: 4px 4px 4px 4px; border: 1px solid #000000; border-bottom: 0px solid #000000; border-radius: 4px 4px 0px 0px; width: 400px; z-index:10000;}
```

3. **Vezérlőpult >> Külalak vezérlése >> A honlap alsó része**. A sablon legvégére illeszd be ezt:

```html
<div class="chat">  
   
<script>function agentPlay() {$('.yraAgent').toggle('slow'); $('.agentBody').slideToggle('fast')}</script>  
  <a class="yraAgent" id="AgentStart" onclick="agentPlay()" style="display: block;">  
  <div align="left"><img src="/chatdesign/falmegjelenitese.png" border="0" alt=""></a>  
</a>  
  <div class="agentBody" id="Agent" style="display: none">  
  <div align="right"><a href="javascript:;" onclick="agentPlay()" class="closeYraaaAgent"><img src="/chatdesign/close.png" border="0" alt="" width="30px" height="30px"></a></div>  
  <br>  
$CHAT_BOX$  
<br>  
</div>  
</div>
```
