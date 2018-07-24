# Továbbfejlesztett értesítés új privát üzenetekről

A szkript segítségével valós időben értesülhetsz az új privát üzenetekről, egy hangjelzés és egy továbbfejlesztett, jobb alsó sarokban megjelenő buborék által. 

## Jellemzők

 - Modern külalak
 - Automatikusan frissül
 - Hangjelzés új üzenet esetén
 - Közvetlen link az olvasatlan privát üzenetre
 - A feladó neve és avatarja, valamint az üzenet tárgya
 - Bezárhatóság

## Telepítés

1. Az Általános beállításokban engedélyezned kell az API alkalmazást.

2. Illeszd be az alábbi kódot a Honlap alsó része sablonba: 

```html
<?if($USER_LOGGED_IN$)?>  
<div id="one_pm"></div>  

<script type="text/javascript">  
  var no_ava = 'http://ucoztaska.ucoz.hu/assets/images/usericon.png';  

var this_mess_link = '';  
function m_reload() {  
if($('#one_pm').html()=='') {  
$.get('/index/14?'+Math.random(), function (data) {  
$('b.unread', data).each(function (i,index) {  
getLink = $(index).parent().attr("href");  
this_mess_link = getLink;  
getText = $(index).parent().text();  
getAuthorName = $(index).parent().parent().children('a').eq(1).text();  
getAuthor = $(index).parent().parent().children('a').eq(1).attr("href");  
getID = '#one_pm'+i;  
var xml = $.ajax({  
  type: 'GET',  
  url: '/api/index/8-0-'+getAuthorName.replace('-','~'),  
  dataType: 'xml',  
  async: false  
  }).responseText;  
var urlAvatar = $(xml).find('struct:first member:contains("USER_AVATAR")').find('string').text();  
var userName = $(xml).find('struct:first member:contains("USER_NAME")').find('string').text();  
$('#one_pm').html('<div id="one_pm'+i+'" style="display:none">'  
+'<div class="h_newpm">'  
+'<div class="h_npin"><a class="h_nover" href="'+getLink+'"></a>'  
+'<div class="h_nptitle">Új privát üzenet!</div><span class="h_del" onclick="h_del();return false;"></span>'  
+'<div class="h_npl"><div class="h_npimg"><a href="#" id="hnp_avatar"></a></div></div>'  
+'<div class="h_npr"><a href="#" id="hnp_author"></a> <a id="hnp_text" href="'+getLink+'">'+getText+'</a></div>'  
+'</div>'  
+'</div>'  
+'</div><div id="hnp_sound"></div>');  
$(getID+' #hnp_author').attr('href', getAuthor);  
$(getID+' #hnp_avatar').attr('href', getAuthor);  
$(getID+' #hnp_author').html(userName);  
$(getID+' #hnp_avatar').html('<img src="'+ (urlAvatar == '' ? no_ava : urlAvatar )+'">');  
setTimeout(function(){$(getID).slideDown(200);},200);  
$('#hnp_sound').html('<audio src="http://ucoztaska.ucoz.hu/assets/sounds/vk.mp3" volume="1" autoplay></audio>');setTimeout(function(){$('#hnp_sound').html('')},2000);  
});  
});  
}  
}  
function h_del() {$('#one_pm').fadeOut(200,function(){$('#one_pm').html('<i></i>')});$.get(this_mess_link);}  
m_reload();setInterval(function(){m_reload()}, 15000);  
</script>  

<style type="text/css">  
#one_pm {position:fixed;left:20px;bottom:0px;cursor:pointer;font-family:Tahoma,Arial,Verdana,sans-srif}  
#hnp_sound {position:absolute;top:-1000px;left:-1000px}  
#hnp_author span {display:none}  
.h_newpm {position:relative;width:350px;height:110px;margin-bottom:20px;background:rgba(0,0,0,0.7);text-shadow:0 1px 3px rgba(0,0,0,0.5);box-shadow:0 0 10px #000;-webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;}  
.h_newpm #hnp_author {color:#a4dcfa;font-weight:bold;text-decoration:none;}  
.h_newpm #hnp_author:hover {color:#a4dcfa;text-decoration:underline}  
.h_npin {padding:14px;padding-top:10px}  
.h_nptitle {color:#FFF;font-size:13px;font-weight:bold;padding-bottom:12px}  
.h_npimg {width:57px;height:57px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,0.3);-webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;}  
.h_npimg img {width:100%;-webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;}  
.h_npl {position:absolute;left:13px;top:38px;z-index:3;width:70px}  
.h_npr {position:absolute;left:84px;top:38px;z-index:3;color:#FFF;font-size:13px;padding-right:14px}  
.h_npr #hnp_text, .h_npr #hnp_text:hover {display:block;text-decoration:none;color:#FFF}  
.h_newpm:hover .h_del {display:inline-block;}  
.h_del {position:absolute;display:none;top:12px;right:12px;z-index:3;cursor:pointer;background:url('http://ucoztaska.ucoz.hu/assets/images/close_pm.png') 0px 0px;width:18px;height:18px}  
.h_del:hover {background-position:0px 18px}  
.h_nover {position:absolute;top:0px;left:0px;width:100%;height:100%;}  
</style>  

<?endif?>
```

**A kódban a következő elemeket kell módosítani, akár saját host-ra hozni:**

 - http://ucoztaska.ucoz.hu/assets/images/usericon.png - alapértelmezett "nincs avatar" ikon.
 - http://ucoztaska.ucoz.hu/assets/sounds/vk.mp3 - hangjelzés hangja.
 - http://ucoztaska.ucoz.hu/assets/images/close_pm.png - bezárás ikonja.

*Forrás: http://yraaa.ru/publ/vkontakte/22-1-0-2441*
