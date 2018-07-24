# Színes felhasználói statisztika

A szkript segítségével elhelyezhetünk egy színes felhasználói statisztikát honlapunkra.

Az egyik blokk HTML tartalmába (vagy bárhová máshova) illesszük be ezt a kódot: 

```html
<style type="text/css">
#statblock {width:200px;margin-top:15px}
#statday, #statday:hover, #statnow, #statusers {color:#FFF;padding:5px 12px;margin-top:5px;font: 11px Tahoma;display:block;text-decoration:none}
#statnow {background:#6EC32A}
#statday {background:#F4591C}
#statusers {background:#efefef;color:#666 !important}
#statusers a, #statusers a:hover {color:#666 !important}
#statday a {color:#FFF}
</style>

<div id="statblock">
<a id="statnow" href="javascript://" rel="nofollow" onclick="open_oline_list()">Online összesen: [b]<?substr($ONLINE_COUNTER$, 48, strrpos($ONLINE_COUNTER$,"onl2")-48-36)?>[/b]</a>
<a id="statday" href="javascript://" rel="nofollow" onclick="new _uWnd('TdUsrLst',' ',250,200,{autosize:0},{url:'/index/62-2'});return false;">Mai látogatók száma: <b id="usNaN"></b></a>
<?if($ONLINE_USERS_LIST$)?><div id="statusers">Most online: $ONLINE_USERS_LIST$</div><?endif?>
</div>

<script type="text/javascript">
function open_oline_list() {new _uWnd('UserList','Mai látogatók',240, 102,{autosize:0,resize:0,notaskbar:1,fadespeed:500,fadeclosespeed:500,align:'left'},'<fieldset class="sortUserlist"><legend>Összegzés:</legend><div>$ONLINE_COUNTER$</div></fieldset>');}
NanUsers = function(number, one, two, five) { number = Math.abs(number); number %= 100; if (number >= 5 && number <= 20) { return five; } number %= 10; if (number == 1) { return one; } if (number >= 2 && number <= 4) { return two; } return five; };
$.get('/index/62-2', function(numUs){$("#usNaN").append( $('a',$('cmd[p="content"]',numUs).text()).size());});
</script>
```

A kód második sorában cseréljük le a `width:200px`-t a beillesztés helyének megfelelő értékre. 

*Forrás: http://yraaa.ru/publ/22-1-0-2172*
