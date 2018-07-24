# Idézetek stílusa 5 színben

A kódok segítségével az unalmas alapértelmezett idézeti formát egy extrább, stílusosabb külalakkal rendelkező idézeti formává alakíthatod uCoz-os honlapodhoz.

Mindössze annyit kell tenned, hogy a neked tetsző színezetű idézet stílus CSS kódját bemásolod a **Stílusok táblázata (CSS)** sablon végére. 

**Kék:**

```css
.bbQuoteBlock {display:block; position:relative; border:1px solid #3498db;}
.bbQuoteBlock .bbQuoteName {background:#3498db; padding:15px!important; color:#fff; font-weight:bold; font-size:8pt; z-index:400; text-transform:uppercase; position:relative;}
.bbQuoteBlock .bbQuoteName .qName {font-weight: normal !important;padding-left: 4px;letter-spacing: 1px;}
.bbQuoteBlock .quoteMessage {border:none!important;background:#eee;color:#333;font-style:italic; padding:15px;}
.bbQuoteBlock .quoteMessage:after {content:"\201D"; position:absolute; bottom:-70px; right:20px; font-size:80pt; color:#bbb; opacity:.6; z-index:300; font-style:normal; font-weight:bold; font-family:times;}
.bbQuoteBlock .bbQuoteName:after {position:absolute; content:""; bottom:-20px; right:200px; border-left:10px solid transparent; border-right:10px solid transparent; border-top:10px solid #3498db; border-bottom:10px solid transparent;}
```


**Piros:**

```css
.bbQuoteBlock {display:block; position:relative; border:1px solid #e74c3c;}
.bbQuoteBlock .bbQuoteName {background:#e74c3c; padding:15px!important; color:#fff; font-weight:bold; font-size:8pt; z-index:400; text-transform:uppercase; position:relative;}
.bbQuoteBlock .bbQuoteName .qName {font-weight: normal !important;padding-left: 4px;letter-spacing: 1px;}
.bbQuoteBlock .quoteMessage {border:none!important;background:#eee;color:#333;font-style:italic; padding:15px;}
.bbQuoteBlock .quoteMessage:after {content:"\201D"; position:absolute; bottom:-70px; right:20px; font-size:80pt; color:#bbb; opacity:.6; z-index:300; font-style:normal; font-weight:bold; font-family:times;}
.bbQuoteBlock .bbQuoteName:after {position:absolute; content:""; bottom:-20px; right:200px; border-left:10px solid transparent; border-right:10px solid transparent; border-top:10px solid #e74c3c; border-bottom:10px solid transparent;}
```


**Zöld:**

```css
.bbQuoteBlock {display:block; position:relative; border:1px solid #27ae60;}
.bbQuoteBlock .bbQuoteName {background:#27ae60; padding:15px!important; color:#fff; font-weight:bold; font-size:8pt; z-index:400; text-transform:uppercase; position:relative;}
.bbQuoteBlock .bbQuoteName .qName {font-weight: normal !important;padding-left: 4px;letter-spacing: 1px;}
.bbQuoteBlock .quoteMessage {border:none!important;background:#eee;color:#333;font-style:italic; padding:15px;}
.bbQuoteBlock .quoteMessage:after {content:"\201D"; position:absolute; bottom:-70px; right:20px; font-size:80pt; color:#bbb; opacity:.6; z-index:300; font-style:normal; font-weight:bold; font-family:times;}
.bbQuoteBlock .bbQuoteName:after {position:absolute; content:""; bottom:-20px; right:200px; border-left:10px solid transparent; border-right:10px solid transparent; border-top:10px solid #27ae60; border-bottom:10px solid transparent;}
```


**Fekete:**

```css
.bbQuoteBlock {display:block; position:relative; border:1px solid #222;}
.bbQuoteBlock .bbQuoteName {background:#222; padding:15px!important; color:#fff; font-weight:bold; font-size:8pt; z-index:400; text-transform:uppercase; position:relative;}
.bbQuoteBlock .bbQuoteName .qName {font-weight: normal !important;padding-left: 4px;letter-spacing: 1px;}
.bbQuoteBlock .quoteMessage {border:none!important;background:#eee;color:#333;font-style:italic; padding:15px;}
.bbQuoteBlock .quoteMessage:after {content:"\201D"; position:absolute; bottom:-70px; right:20px; font-size:80pt; color:#bbb; opacity:.6; z-index:300; font-style:normal; font-weight:bold; font-family:times;}
.bbQuoteBlock .bbQuoteName:after {position:absolute; content:""; bottom:-20px; right:200px; border-left:10px solid transparent; border-right:10px solid transparent; border-top:10px solid #222; border-bottom:10px solid transparent;}
```


**Sötétkék:**

```css
.bbQuoteBlock {display:block; position:relative; border:1px solid #2c3e50;}
.bbQuoteBlock .bbQuoteName {background:#2c3e50; padding:15px!important; color:#fff; font-weight:bold; font-size:8pt; z-index:400; text-transform:uppercase; position:relative;}
.bbQuoteBlock .bbQuoteName .qName {font-weight: normal !important;padding-left: 4px;letter-spacing: 1px;}
.bbQuoteBlock .quoteMessage {border:none!important;background:#eee;color:#333;font-style:italic; padding:15px;}
.bbQuoteBlock .quoteMessage:after {content:"\201D"; position:absolute; bottom:-70px; right:20px; font-size:80pt; color:#bbb; opacity:.6; z-index:300; font-style:normal; font-weight:bold; font-family:times;}
.bbQuoteBlock .bbQuoteName:after {position:absolute; content:""; bottom:-20px; right:200px; border-left:10px solid transparent; border-right:10px solid transparent; border-top:10px solid #2c3e50; border-bottom:10px solid transparent;}
```
