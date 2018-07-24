plus='http://src.ucoz.net/img/icon/plus.png'; // 
minus='http://src.ucoz.net/img/icon/minus.png'; // 

function setForums(){
addIcons();
if(getCookie('toggleForums')){
td=document.getElementById('forumbody').getElementsByTagName('td');
forums=getCookie('toggleForums');
forums=forums.split('-');
for(f=0;f<forums.length-1;f++){
toggleForum(td[forums[f]].getElementsByTagName('img')[0]);}}}

function addIcons(){
td=document.getElementById('forumbody').getElementsByTagName('td');
for(i=0;i<td.length;i++){
if(td[i].className=='gTableTop'){
td[i].innerHTML='<img src="'+minus+'" border="0" align="absmiddle" style="cursor:pointer;" onclick="preToggleForum(this,'+i+');" /> '+td[i].innerHTML;}}}

function preToggleForum(obj,num){
toggleForum(obj);
if(getCookie('toggleForums')){
toggledForums=getCookie('toggleForums');
hiddenForums=toggledForums;
forumNums=toggledForums.split('-');
for(i=0;i<forumNums.length;i++){
if(forumNums[i]==num){
hiddenForums=hiddenForums.replace(num+'-','');
delCookie('toggleForums');
if(hiddenForums!=''){setCookie('toggleForums',hiddenForums,'Mon, 01-Jan-2090 00:00:00 GMT','/forum/');}}}
if(hiddenForums==toggledForums){
delCookie('toggleForums');
setCookie('toggleForums',toggledForums+num+'-','Mon, 01-Jan-2090 00:00:00 GMT','/forum/');}}
else{setCookie('toggleForums',num+'-','Mon, 01-Jan-2090 00:00:00 GMT','/forum/');}}

function toggleForum(obj){
tr=obj.parentNode.parentNode.parentNode.getElementsByTagName('tr');
for(i=1;i<tr.length;i++){
tr[i].style.display=tr[i].style.display=='none'?'':'none';}
obj.src=obj.src==minus?plus:minus;}

function setCookie(name,value,expires,path,domain,secure) {
document.cookie=name+'='+escape(value)+
((expires)?'; expires='+expires:'') +
((path)?'; path='+path:'')+
((domain)?'; domain='+domain:'') +
((secure)?'; secure':'');} 

function getCookie(name){
var prefix=name+'='
var cookieStartIndex=document.cookie.indexOf(prefix);
if(cookieStartIndex==-1)
return null;
var cookieEndIndex=document.cookie.indexOf(';',cookieStartIndex+prefix.length)
if(cookieEndIndex==-1)
cookieEndIndex=document.cookie.length;
return unescape(document.cookie.substring(cookieStartIndex + prefix.length, cookieEndIndex));}

function delCookie(name,path,domain) { 
if(getCookie(name)){ 
document.cookie=name+'='+  
((path)?'; path=' + path : '')+ 
((domain)?'; domain=' + domain : '') + 
'; expires=Thu, 01-Jan-70 00:00:01 GMT'}}

setForums(); // 