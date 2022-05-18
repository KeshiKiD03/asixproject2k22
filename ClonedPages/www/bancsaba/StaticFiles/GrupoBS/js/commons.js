/*variables necesarias para transaccional y asignaciÃ³n de equivalencia sin este parche no hay manera de resolverlo para el caso empresas*/
window.arrayLanguages=["es","VA-es","CA-es","en","fr","EU-es","de","gl"];
window.currentLanguage="es";
if(location.href.indexOf('/TRExternalTransfer')!=-1 || location.href.indexOf('/TRExTransferNew')!=-1){
	parent.headerbs=window;
}

var esIE = false
//Detectar el navegador explorer
if (navigator.appVersion.indexOf("MSIE") != -1) { esIE = true; }
//Es Internet Explorer version 7.0
swIE70 = (navigator.appVersion.indexOf("7.0") == (-1))?0:1;

var newStyle = "<style type=\"text/css\" media=\"screen\">"; var endStyle = "</style>";

var rutaImg = "/StaticFiles/GrupoBS/img/";

if(document.styleSheets && document.styleSheets.length){
	var sheet=0;
	for(sheet=0;sheet<document.styleSheets.length;sheet++){
		if(document.styleSheets[sheet].href && document.styleSheets[sheet].href.indexOf('site-styles.css')!=-1){
			rutaImg= document.styleSheets[sheet].href.replace('/css/site-styles.css','/img/').split("?")[0];
			break;
		}
	}
}

String.prototype.trim = function(){ return this.replace(/^\s+|\s+$/g,'') }
	
	newStyle += "#content .tabsZone, .class03 #content .tabsZone { position:relative; background:none; border:none}\n";
	newStyle += "#content .tabsZone ul {background-position:0 3.6em; padding-bottom:6px; padding-left:20px;}\n";
	newStyle += ".class03 #content .tabsZone ul { border-top:none; padding-top:0;  background:transparent url("+rutaImg+"iconos/bgAuxPestanyas.gif) repeat-x 0 0; padding-bottom:0; padding-left:0; margin-bottom:0; overflow:hidden}\n";
		newStyle += ".class03 #content .tabsZone ul  ul { background:none; overflow:hidden;}\n";
		newStyle += ".class03 #content .tabsZone li li {float:none}\n"
		newStyle += ".class03 #content .tabsZone .action {border:none}\n"
	newStyle += "#content .tabsZone h2 {font-weight:normal; padding-top:4px; padding-left:12px; padding-bottom:6px; margin-bottom:0; background:transparent url("+rutaImg+"bgPestH2.gif) no-repeat 0 0}\n";
		newStyle += ".class03 #content .tabsZone h2 {padding-left:12px; padding-bottom:6px; margin-bottom:0; background:transparent url("+rutaImg+"bgPestH2.gif) no-repeat 0 0; margin-left:0}\n";
	newStyle += ".tabsZone .moduloLista {float:left; padding-bottom:0;}\n";
	newStyle += "#content .tabs li  {float:left; padding:0px 12px 0 0px; background:transparent url("+rutaImg +"/bgPest.gif) no-repeat 100% 0; margin-right:4px; margin-bottom:0}\n";
	newStyle += "#content .tabs li li {background-image:none}\n"
	newStyle += ".class03 #content .tabs li { background:transparent url("+rutaImg+"bgPest.gif) no-repeat 100% 0; margin-right:4px; margin-bottom:0; padding-bottom:0}\n"
		newStyle += ".class03 #content .tabs .contentTab li { background:none;}\n"
	newStyle += ".class03 #content .tabs li li { background:none;}\n"
	newStyle += ".class03 #content .tabs li { float:left; padding:0px 12px 0 0px; margin-right:4px; padding-bottom:0}\n";
	newStyle += "#content .tabs li.sel { background:transparent url("+rutaImg+"bgPestSel.gif) no-repeat 100% 0}\n";
		newStyle += ".class03 #content .tabs li.sel { background:#fff url("+rutaImg+"iconos/bgPestSelInt.gif) no-repeat 100% 0}\n";
	newStyle += "#content .tabs li.sel h2{ background:#fff url("+rutaImg+"bgPesth2Sel.gif) no-repeat 0 0; padding-bottom:7px; font-weight:bold; margin-bottom:0}\n";
	newStyle += ".class03 #content .tabs li.sel h2{ background:#fff url("+rutaImg+"iconos/bgPestSelH2Int.gif) no-repeat 0 0}\n";
	newStyle += ".class03 #content .tabs .action h3 {margin-bottom:6px}\n";
	newStyle += ".class03 #content .tabs .action li {margin-bottom:3px}\n";
	newStyle += ".class03 #content .tabs li.sel h2{padding-bottom:4px;}\n";
	newStyle += ".class03 #content .tabsZone h2 {padding-bottom:3px; }\n";
	newStyle += "#content .tabs li h2 {cursor:pointer}\n";
	newStyle += "#content .tabs li li {float:none; padding:0}\n";
	newStyle += "#content .tabs .contentTab { position:absolute; left:0; top:4.2em; background:transparent url("+rutaImg+"bgTabs.gif) no-repeat 0 100%; width:573px; padding:20px 0px 30px 20px; display:none}\n";
		newStyle += ".class03 #content .tabs .contentTab { position:absolute; border-top:none; padding:20px 0% 5px; top:23px;}\n";
	newStyle += "#content .tabs li.sel .contentTab {display:block}\n";
	newStyle += "#content .promo, #content .ftl.promo {border:none; width:auto}\n";
		newStyle += ".class03 #content .tabs .action li { background-repeat:no-repeat; background-position:0 4px}\n";
	newStyle += ".promoBody, #content .bigPromotion .photoFoot, #content .img2{display:none}";

	newStyle += "#content #accessForms .tabsZone {border:none}";
	newStyle += "#content #accessForms .tabsZone ul {background-position:0 2.6em; padding-bottom:6px; padding-left:0px;}";
	newStyle += "#content #accessForms .tabsZone ul { border-top:none; padding-top:0;  background:transparent url("+rutaImg+"iconos/bgAuxPestanyas.gif) repeat-x 0 0; padding-bottom:0; padding-left:0; margin-bottom:0; overflow:hidden}";
	newStyle += "#content #accessForms .tabsZone ul  ul { background:none; overflow:hidden;}";
	newStyle += "#content #accessForms .tabsZone li li {float:none}";
	newStyle += "#content #accessForms .tabsZone .action {border:none}";
	newStyle += "#content #accessForms .tabsZone h2 {padding-left:6px; padding-bottom:4px; margin-bottom:0; background:transparent url("+rutaImg+"bgPestH2.gif) no-repeat 0 0; margin-left:0}";
	newStyle += "#content #accessForms .tabs li {background:transparent url("+rutaImg+"bgPest.gif) no-repeat 100% 0; margin-right:4px; margin-bottom:0; padding-bottom:0; padding-right:6px}";
	newStyle += "#content #accessForms .tabs li li {background:none}"
	newStyle += "#content #accessForms .tabs li.sel {background:#fff url("+rutaImg+"iconos/bgPestSelInt.gif) no-repeat 100% 0}";
	newStyle += "#content #accessForms .tabs li.sel h2{background:#fff url("+rutaImg+"iconos/bgPestSelH2Int.gif) no-repeat 0 0; color:#000}";
	newStyle += "#content #accessForms .tabs .action h3 {margin-bottom:6px}";
	newStyle += "#content #accessForms .tabs .action li {margin-bottom:3px}";
	newStyle += "#content #accessForms .tabs li.sel h2{padding-bottom:4px;}";
	newStyle += "#content #accessForms .tabsZone h2 {padding-bottom:2px; font-size:1.1em; }";
	newStyle += "#content #accessForms .contentTab li li {background:none}";
	newStyle += "#content #accessForms .tabs .contentTab {position:absolute;  background:#fff url("+rutaImg+"iconos/bgAuxContentTab.gif) repeat-x 0 0; border-top:none; padding:20px 0% 5px; top:23px; }";
	newStyle += "#content #accessForms .tabs li.sel {background:#fff url("+rutaImg+"iconos/bgPestSelInt.gif) no-repeat 100% 0}";
	newStyle += "#content #accessForms .tabs .action li {background-repeat:no-repeat; background-position:0 4px}\n";
	newStyle += "#content #accessForms .tabs .contentTab {position:absolute;  background:#fff url("+rutaImg+"iconos/bgAuxContentTab.gif) repeat-x 0 0; border-top:none; padding:20px 0% 5px; top:23px; width:100%}";
	newStyle += ".button.tipo4 .buttonRight, .button.tipo4 .buttonLeft {width:5px; height:33px;}";
	//newStyle +=  ".button.tipo4 .buttonLeft {background:transparent url(/StaticFiles/GrupoBS/img/botones/bg_tipo4_left.gif) no-repeat 0 0}";
	//newStyle += ".button.tipo4 .buttonRight {background:transparent url(/StaticFiles/GrupoBS/img/botones/bg_tipo4_right.gif) no-repeat 0 0}";
	//newStyle += ".button.tipo4 div.boton {background:#7dd3f0 url(/StaticFiles/GrupoBS/img/botones/bg_tipo4.gif) repeat-x 0 100%; border-top:1px solid #d1d1d1;padding:2px 7px 8px 0px; font-size:1.3em}";
	//newStyle += "#content .tabsZone .tab{color:#737373; font-weight:normal; padding-top:4px; display: block;}.class03";
	//newStyle +=	"#content .tabsZone .tab{background:url('/StaticFiles/SabAtl/img/bgPestH2.gif') no-repeat scroll 0 0 transparent; margin-bottom:0; margin-left:0; padding-left:12px; padding-bottom:3px; display: block;}";
	//newStyle +=	"#content .tabs li .tab{cursor:pointer; display:block;}#content .tabs li.sel .tab{font-weight:bold; margin-bottom:0}.class03 #content .tabsZone li.sel .tab{color:#000000; display:block}.class03";
	//newStyle +=	"#content .tabs li.sel .tab{padding-bottom:4px; display: block;}.class03";
	//newStyle +=	"#content .tabs li.sel .tab{display: block; background:url('/StaticFiles/SabAtl/img/iconos/bgPestSelH2Int.gif') no-repeat scroll 0 0 #FFFFFF;}";
	
	newStyle += "#content .promo, #content .ftl.promo {border:none; width:auto}\n";
	if(document.all && location.href.indexOf('PPTransfer.process.bs')!=-1){
		newStyle += "#sm_full_NETi_container{visibility:visible}\n";
	}

newStyle += "</style>";
document.writeln(newStyle);

var cookies = {
  getCookie:function (cookieName) {
  	var theCookie=""+document.cookie;
	var ind=theCookie.indexOf(cookieName);
	if (ind==-1 || cookieName=="") return ""; 
    var ind1=theCookie.indexOf(';',ind);
	if (ind1==-1) ind1=theCookie.length; 
    return unescape(theCookie.substring(ind+cookieName.length+1,ind1));
 },  
 setCookie:function(cookieName, cookieValue, nDays) {
    var today = new Date();
    var expire = new Date();
    if (nDays==null || nDays==0) nDays=1;
    expire.setTime(today.getTime() + 3600000*24*nDays);
	document.cookie = cookieName+"="+escape(cookieValue)
                 + ";path=/;expires="+expire.toGMTString();
	},
	removeCookie:function(cookieName) {	
	  var today = new Date();
    var expire = new Date();
    nDays= -1;
    expire.setTime(today.getTime() + 3600000*24*nDays);
		document.cookie = cookieName+"="+escape("_deleted") + ";path=/;expires="+expire.toGMTString();
	}
}
var qGo = {
  arr_url:location.href.split('/'),
  arr_title:function(){  
  	return document.title.split(' - ');
  },
  getMarca:function () {
	// crear un mapping del banco
	var marca="";
	
	if(this.arr_title().length>0)
		for(var i=0;i<this.arr_title().length;i++){
			marca=this.arr_title()[i];
			if((marca=="SabadellAtlantico") || (marca=="Banco Sabadell") || (marca=="Banc Sabadell") ){
				marca="SabadellAtlantico";
				return this.cleanSpaces(marca);			
			}else if( (marca=="Banco Herrero") || marca=="BancoHerrero"){
				marca="Banco Herrero";
				return this.cleanSpaces(marca);
			}else if((marca=="BC") || (marca=="SabadellCAM") ){
				marca="BC";
				return this.cleanSpaces(marca);
			}
		}
		
 },
  getMarcaTx:function () {
    return marcaQgo;
 },
 getSegmento:function () {
  	//Nos quedaremos con el primer string
  var segmento="";
	if(this.arr_title().length>1) segmento=this.arr_title()[this.arr_title().length-2];
	segmento=this.cleanSpaces(segmento);
	// Si estamos en idioma castellano
	if ((segmento != "Particulares") && (segmento != "Empresas")) {
		// Si entramos en este if, el idioma no es castellano.
		if ((segmento == "Particulars") || (segmento == "Individuals") || (segmento == "Particuliers")) {
			segmento = "Particulares";
		} else {
			segmento = "Empresas";
		}
	}
    return segmento;
 },
 getSegmentoTx:function () {     
    return segmentoQgo;
 },
 getFamilia:function () {
    return this.cleanSpaces(this.cleanQuotes(familiaQgo));
 },  
 getIdioma:function () {
  	var idioma="";
	/* Marcaremos idioma espanol por defecto */
	if(this.arr_url[this.arr_url.length-2].length<4)
		idioma=this.arr_url[this.arr_url.length-2];
	else
		idioma='es'
    return this.cleanSpaces(idioma);
 },
 getIdiomaTx:function () {
    return idiomaQgo;
 },
 strToquery:function(){
	var params = "";
	if(typeof(idiomaQgo)!='undefined') {
		// Si idiomaQgo esta definida, estamos en el TX
        params="Marca="+this.getMarcaTx()+"&Idioma="+this.getIdiomaTx()+"&Segment="+this.getSegmentoTx()+"&Origen=trans"+"&Familia="+this.getFamilia();
    } else {
		// Estamos en el informacional
		params="Marca="+this.getMarca()+"&Idioma="+this.getIdioma()+"&Segment="+this.getSegmento()+"&Origen=info"+"&Familia="+this.getFamilia();
	}
	return params;
 },

 strToqueryNETi:function(){
        var params = "";
        var paramsNETi = "";
        if (document.getElementById("searchFile")) {
                var pregunta = document.getElementById("searchFile").value;
                if (pregunta) {
                        paramsNETi = "&tpl=ask&orig_logid=&user_question=" + pregunta;
                }
        }
        if(typeof(idiomaQgo)!='undefined') {
                // Si idiomaQgo esta definida, estamos en el TX
        params="Marca="+this.getMarcaTx()+"&Idioma="+this.getIdiomaTx()+"&Segment="+this.getSegmentoTx()+"&Origen=trans"+"&Familia="+this.getFamilia()+paramsNETi;
    } else {
                // Estamos en el informacional
                params="Marca="+this.getMarca()+"&Idioma="+this.getIdioma()+"&Segment="+this.getSegmento()+"&Origen=info"+"&Familia="+this.getFamilia()+paramsNETi;
        }
        return params;
 },
 Inicialice:function(){
	rtrelativCSS=rutaImg.replace('/img/','/css/');
	rtrelativJS=rutaImg.replace('/img/','/js/');
	var jsqgo=document.createElement("script");
	jsqgo.setAttribute("type","text/javascript");
	jsqgo.setAttribute("src","/StaticFiles/GrupoBS/js/qgo.js");
	var jsstyles=document.createElement("script");
	jsqgo.setAttribute("type","text/javascript");
	jsstyles.setAttribute("src",rtrelativJS+"fncStylesQgo.js");
	var cssqgo=document.createElement("link");
	cssqgo.setAttribute("rel","stylesheet");
	cssqgo.setAttribute("media","screen");
	cssqgo.setAttribute("type","text/css");
	rtrelativCSS=rutaImg.replace('/img/','/css/');
	cssqgo.setAttribute("href",rtrelativCSS+"qgo.css");
	var myhead=document.getElementsByTagName("head")[0];
	myhead.appendChild(jsstyles);
	myhead.appendChild(jsqgo);
	myhead.appendChild(cssqgo);
 },
cleanSpaces:function (str) {
	var newStr=str.replace(/^\s+|\s+$/g,'');
    return newStr;
 },
cleanQuotes:function (str) {
    str=str.replace(/&Agrave;/g,'À');
    str=str.replace(/&Aacute;/g,'Á');
    str=str.replace(/&agrave;/g,'à');
    str=str.replace(/&aacute;/g,'á');
    str=str.replace(/&Egrave;/g,'È');
    str=str.replace(/&Eacute;/g,'É');
    str=str.replace(/&egrave;/g,'è');
    str=str.replace(/&eacute;/g,'é');
    str=str.replace(/&Igrave;/g,'Ì');
    str=str.replace(/&Iacute;/g,'Í');
    str=str.replace(/&igrave;/g,'ì');
    str=str.replace(/&iacute;/g,'í');
    str=str.replace(/&Ograve;/g,'Ò');
    str=str.replace(/&Oacute;/g,'Ó');
    str=str.replace(/&ograve;/g,'ò');
    str=str.replace(/&oacute;/g,'ó');
    str=str.replace(/&Ugrave;/g,'Ù');
    str=str.replace(/&Uacute;/g,'Ú');
    str=str.replace(/&ugrave;/g,'ù');
    str=str.replace(/&uacute;/g,'ú');
    str=str.replace(/&Iuml;/g,'Ï');
    str=str.replace(/&iuml;/g,'ï');
    str=str.replace(/&Uuml;/g,'Ü');
    str=str.replace(/&uuml;/g,'ü');
    str=str.replace(/&Ccedil;/g,'Ç');
    str=str.replace(/&ccedil;/g,'ç');
    str=str.replace(/&Ntilde;/g,'Ñ');
    str=str.replace(/&ntilde;/g,'ñ');
    return str;
 }
}

var dom={
    $:function(id){
        return document.getElementById(id);
    },
    getElementsByClass:function(searchClass,node,tag) {
        var classElements = new Array();
        if ( node == null )
            node = document;
        if ( tag == null )
        	tag = '*';
        var els = node.getElementsByTagName(tag);
        var elsLen = els.length;
        var pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
        for (i = 0, j = 0; i < elsLen; i++) {
        if ( pattern.test(els[i].className) ) {
            classElements[j] = els[i];
         		j++;
            }
        }
    return classElements;
    }
}

function getElementsByClassSafari(searchClass,node,tag) {
	var classElements = new Array();
	if ( node == null )
		node = document;
	if ( tag == null )
		tag = '*';
	var els = node.getElementsByTagName(tag);
	var elsLen = els.length;
	var pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
	for (i = 0, j = 0; i < elsLen; i++) {
	if ( pattern.test(els[i].className) ) {
		classElements[j] = els[i];
			j++;
		}
	}
return classElements;
}

/* XMLHTTP */

function XMLHttpFactories() {
	return [
		function () {return new XMLHttpRequest()},
		function () {return new ActiveXObject("Msxml2.XMLHTTP")},
		function () {return new ActiveXObject("Msxml3.XMLHTTP")},
		function () {return new ActiveXObject("Microsoft.XMLHTTP")}
	];
}

function createXMLHTTPObject() {
	var xmlhttp = false;
	var factories = XMLHttpFactories();
	for (var i=0;i<factories.length;i++) {
		try {
			xmlhttp = factories[i]();
		}
		catch (e) {
			continue;
		}
		break;
	}
	return xmlhttp;
}

function sendRequestForceCallback(url,callback,postData) {
	var req = createXMLHTTPObject();
	if (!req) return;
	var method = (postData) ? "POST" : "GET";
	req.open(method,url,true);
	req.setRequestHeader('User-Agent','XMLHTTP/1.0');
	if (postData)
		req.setRequestHeader('Content-type','application/x-www-form-urlencoded');
	req.onreadystatechange = function () {
		//Se ejecuta callback cuando se ha fializado la llamada (readyState = 4)
		if (req.readyState != 4) return;		
		callback(req);
	}
	if (req.readyState == 4) return;
	req.send(postData);
	//alert(req.readyState);
}
 
function sendRequest(url,callback,postData) {
	var req = createXMLHTTPObject();
	if (!req) return;
	var method = (postData) ? "POST" : "GET";
	req.open(method,url,true);
	req.setRequestHeader('User-Agent','XMLHTTP/1.0');
	if (postData)
		req.setRequestHeader('Content-type','application/x-www-form-urlencoded');
	req.onreadystatechange = function () {
		if (req.readyState != 4) return;
		if (req.status != 200 && req.status != 304) {
//			alert('HTTP error ' + req.status);
			return;
		}
		callback(req);
	}
	if (req.readyState == 4) return;
	req.send(postData);
	//alert(req.readyState);
}





function doNothingResponse(req) {
}

/* Fin XMLHTTP */


//calcular la edad de una persona
//recibe la fecha como un string en formato espaÃ±ol //devuelve un entero con la edad. Devuelve false en caso de que la fecha sea incorrecta o mayor que el dia actual 
function calcular_edad(fecha){

    //calculo la fecha de hoy
    hoy=new Date()

    //calculo la fecha que recibo
    //La descompongo en un array
    var array_fecha = fecha.split("/")
    //si el array no tiene tres partes, la fecha es incorrecta
    if (array_fecha.length!=3)
       return false

    //compruebo que los ano, mes, dia son correctos
    var ano
    ano = parseInt(array_fecha[2]);
    if (isNaN(ano))
       return false

    var mes
    mes = parseInt(array_fecha[1]);
    if (isNaN(mes))
       return false

    var dia
    dia = parseInt(array_fecha[0]);
    if (isNaN(dia))
       return false

    //si el aÃ±o de la fecha que recibo solo tiene 2 cifras hay que cambiarlo a 4
    if (ano<=99)
       ano +=1900

    //resto los aÃ±os de las dos fechas
    edad=hoy.getFullYear()- ano - 1; //-1 porque no se si ha cumplido aÃ±os ya este aÃ±o

    //si resto los meses y me da menor que 0 entonces no ha cumplido aÃ±os. Si da mayor si ha cumplido
    if (hoy.getMonth() + 1 - mes < 0) //+ 1 porque los meses empiezan en 0
       return edad
    if (hoy.getMonth() + 1 - mes > 0)
       return edad+1

    //entonces es que eran iguales. miro los dias
    //si resto los dias y me da menor que 0 entonces no ha cumplido aÃ±os. Si da mayor o igual si ha cumplido
    if (hoy.getUTCDate() - dia >= 0)
       return edad + 1

    return edad
}

/*Reposicionamiento y alineacion del logo en los diferentes navegadores y portales*/
function pslogo(){
	
	if(document.getElementById("headerPart1") && document.getElementById("bsonline")){
		
		//anchoReal=document.getElementById("bsonline").offsetLeft-document.getElementById("headerPart1").offsetLeft;
		//anchoReal+=document.getElementById("bsonline").offsetWidth;
		anchoReal = 309;
		
		if(!document.all)
			document.getElementById("headerPart1").style.width=(anchoReal)+'px';
		else if(navigator.appVersion.indexOf('MSIE 7.0')!=-1 || navigator.appName=='Opera')
			document.getElementById("headerPart1").style.width=(anchoReal+26)+'px';
		else if(navigator.appVersion.indexOf('MSIE 8.0')!=-1 || navigator.appName=='Opera')
			document.getElementById("headerPart1").style.width=(anchoReal+26)+'px';

		if(document.all && navigator.appName!='Opera'){
			pss=(anchoReal-((navigator.appVersion.indexOf('MSIE 7.0')!=-1)?28:25))+'px 5px';
		}
		else
			pss=(anchoReal-46)+'px 10px';
		
		
		document.getElementById("headerPart1").style.backgroundPosition=pss;

	}
	
	if(document.getElementById("headerPart1SUB")){
		document.getElementById("headerPart1SUB").style.backgroundPosition='350px 5px';
	}
	
}

function rcctmn(ttmn){
	if(ttmn<0.62){
		hp='45em';mm='40em';hp2='25em';cnt='100px';
	}
	else{
		hp='38.5em';mm='28.2em';hp2='22em';cnt='';
		if(document.getElementById("bsonline") && document.getElementById("bsonline").className=="actual"){
			hp2='22em'
		}
	}
	if(document.all){
		hp2='220px';
		if(document.getElementById("miscellaneous").style.width=='100%'){
			rmnew=setTimeout(function(){document.getElementById("miscellaneous").style.width='auto'},200);
		}
	}
	
	if(document.getElementById("headerPart1")){
		document.getElementById("headerPart1").style.width=hp;
	}
	if(document.getElementById("headerPart2"))
		document.getElementById("headerPart2").style.width=hp2;
	if(document.getElementById("mainMenu"))
		document.getElementById("mainMenu").style.width=mm;
	if(document.getElementById("contacto"))
		document.getElementById("contacto").style.width=cnt;
	pslogo()
}

function descargarCookiesHabilitado()
{
	var cookieAceptacionCookies_SabAtl = cookies.getCookie("aceptacionCookies_SabAtl");
	var cookieAceptacionCookies_AB = cookies.getCookie("aceptacionCookies_AB");
	var cookieAceptacionCookies_SabUbp = cookies.getCookie("aceptacionCookies_SabUbp");
	var cookieAceptacionCookies_BSAndorra = cookies.getCookie("aceptacionCookies_BSAndorra");
	var cookieAceptacionCookies_BSUK = cookies.getCookie("aceptacionCookies_BancoSabadellUK");
	var cookieAceptacionCookies_BSParis = cookies.getCookie("aceptacionCookies_BSParis");
	var cookieAceptacionCookies_BSCasablanca = cookies.getCookie("aceptacionCookies_BSCasablanca");
	var cookieAceptacionCookies_BSFincom = cookies.getCookie("aceptacionCookies_BSFincom");
	var esActivoBank = document.location.href.indexOf("ActivoBank");
	var esSabAtl = document.location.href.indexOf("SabAtl");
	var esSabUbp = document.location.href.indexOf("SabUbp");
	var esBSAndorra = document.location.href.indexOf("BSAndorra");
	var esBSUK = document.location.href.indexOf("BancoSabadellUK");
	var esBSParis = document.location.href.indexOf("BSParis");
	var esBSCasablanca = document.location.href.indexOf("BSCasablanca");
	var esBSFincom = document.location.href.indexOf("BSFincom");
	
	// la descarga de cookies estará habilitado si:
	// - La cookie de aceptación existe y tiene valor true
	// Esto se aplica (de momento) para los sitios SabAtl, AB y SabUbp. Para el resto de sitios se permite la descarga de la cookie.
	if(cookieAceptacionCookies_SabAtl == "true" || cookieAceptacionCookies_BSAndorra == "true" || cookieAceptacionCookies_AB == "true" 
		|| cookieAceptacionCookies_SabUbp == "true" || cookieAceptacionCookies_BSUK == "true" 
		|| cookieAceptacionCookies_BSParis == "true" || cookieAceptacionCookies_BSCasablanca == "true" 
		|| cookieAceptacionCookies_BSFincom == "true"
		|| (esActivoBank==-1 && esSabAtl==-1 && esSabUbp==-1 && esBSAndorra==-1 && esBSUK==-1 && esBSParis==-1 && esBSCasablanca==-1 && esBSFincom==-1))
	{
		return true;
	}
	else
	{
		return false;
	}
}

var presentation = {
    fontSizeIncrement : 0,
	setPaddingForRightZone : function() {
  		var altura=0;
		var marcoAltura = 24;
		
		if(dom.getElementsByClass("headers")[0].offsetHeight>0 && dom.getElementsByClass("headers")[0].offsetHeight<100){
			altura+=dom.getElementsByClass("headers")[0].offsetHeight;
		}else{
			if(typeof(dom.getElementsByClass("headers")[0].getElementsByTagName("h1")[0])!='undefined') {
				altura+=dom.getElementsByClass("headers")[0].getElementsByTagName("h1")[0].offsetHeight;
			}
		}
	   
		if(dom.$("breadcrumb")){
			altura+=dom.$("breadcrumb").offsetHeight;
			if(dom.$("breadcrumb").offsetHeight==0)
			{
				marcoAltura = 14;
			}
		}
		if(dom.getElementsByClass("subtitle").length){
			altura+=dom.getElementsByClass("subtitle")[0].offsetHeight;
			
			marcoAltura = 14;
		}
		
		//dom.$("rightZone").style.paddingTop = (altura+marcoAltura)/10 + "em";
		
         if (dom.$("container").className.indexOf("class02")!=-1) {
             /*casos de banca privada particulares o autonomos y empresas, repasar, antes se dividia por 10, hemos vuelto a dividir por 1.2*/
			if(parseInt(dom.$("rightZone").style.paddingTop)>4){
			 	dom.$("rightZone").style.paddingTop =  parseFloat(dom.$("rightZone").style.paddingTop)/1.2 + "em";
			}
			else{
				dom.$("rightZone").style.paddingTop =  parseFloat(dom.$("rightZone").style.paddingTop)/1.2 + "em";
			}
        }
		else if(dom.$("container").className.indexOf("class03")!=-1){
			if(parseInt(dom.$("rightZone").style.paddingTop)>4){
			 	dom.$("rightZone").style.paddingTop =  parseFloat(dom.$("rightZone").style.paddingTop)/1.4 + "em";
			}
		}
    },
	addJsTools : function () { // Herramientas que necesitan de js para funcionar
        var item = document.createElement("li");
        item.className = "ftr print";
        item.style.cursor = "pointer";
        //item.style.color = "#09c";
        item.style.textDecoration = "underline";
        if(typeof(imprimir)!='undefined')
					item.appendChild(document.createTextNode(imprimir));
				else
					item.appendChild(document.createTextNode("Imprimir"));
        item.onclick = function () {
            window.print();
        }
        dom.getElementsByClass("tools")[0].appendChild(item);
    },
    addSizeTextButtons : function () {
        var buttonsZone = document.createElement("div");
        buttonsZone.id="textSizes";
        buttonsZone.className = "ftr";
        var label = document.createElement ("p");
        label.appendChild(document.createTextNode(texto));
        label.className = "ftl"
        var list = document.createElement ("ul");
        list.className = "ftl";
        var item = document.createElement ("li");
        item.className ="ftl";
        var link =document.createElement ("span");
        link.id = "reducir";
        link.onclick = function () {
            tmn=parseInt((parseFloat(document.getElementsByTagName("body")[0].style.fontSize)*100)-6)/100;
			if(tmn>0.44){
				document.getElementsByTagName("body")[0].style.fontSize = tmn + "em";
				
				/* redimensionamos los elementos de cabecera  */
				rcctmn(tmn);

				if(descargarCookiesHabilitado() == true) 
				{
					cookies.setCookie("bsll_size", document.getElementsByTagName("body")[0].style.fontSize, 7);
				}
			}
        }
        link.appendChild(document.createTextNode(reducirTexto));
        item.appendChild(link);
        var link =document.createElement ("span");
        link.id = "ampliar";
        link.onclick = function () {
			tmn=parseInt((parseFloat(document.getElementsByTagName("body")[0].style.fontSize)*100)+6)/100;
			if(tmn<0.79){
				document.getElementsByTagName("body")[0].style.fontSize = tmn + "em";
				
				/* redimensionamos los elementos de cabecera  */
				rcctmn(tmn);

				if(descargarCookiesHabilitado() == true)
				{				
					cookies.setCookie("bsll_size", document.getElementsByTagName("body")[0].style.fontSize, 7);
				}
			}
        }
        link.appendChild(document.createTextNode(aumentarTexto));
        item.appendChild(link);
        list.appendChild(item);
        buttonsZone.appendChild(label);
        buttonsZone.appendChild(list);
        dom.$("miscellaneous").insertBefore(buttonsZone,dom.$("languages"));
    }  
}

var bigPromo = function (obj) {
    this.obj = obj;
    this.intro =  dom.getElementsByClass("promoIntro", this.obj)[0];
    var body = dom.getElementsByClass("promoBody", this.obj)[0];
    var photoContainer = dom.getElementsByClass("ftl", this.obj)[0];
    var header = this.obj.getElementsByTagName("h2")[0];
    var photoFooter = dom.getElementsByClass("photoFoot", this.obj)[0];
    var img1 = dom.getElementsByClass("img1", this.obj)[0];
    var img2 = dom.getElementsByClass("img2", this.obj)[0];
    function addBehaviour() {
        var newParagraph = document.createElement("p");
        if (img2 || photoFooter || body) {
            var link = document.createElement("a");
			// Obtenemos la traducciÃ³n 		
			var literalMasInfo =  document.getElementById("literalMasinfo").innerHTML;			
			if (literalMasInfo != "null")  {	
				link.appendChild(document.createTextNode(literalMasInfo));
			} else {
				link.appendChild(document.createTextNode("Más información"));
			}
			link.className = "moreInfo";
            link.setAttribute("href", "#");
            link.onclick = function() {
                if (body) {
					var auxHeader = header;
					photoContainer.insertBefore(auxHeader, photoContainer.firstChild);
					body.style.display="block";
                }
                if (photoFooter) photoFooter.style.display = "block";
                if (body) this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
                
				img1.parentNode.removeChild(img1);
                if (img2) {
                    //img1.parentNode.removeChild(img1);
                    img2.style.display="block";
                }
                return false;
            }
            newParagraph.appendChild(link);
            this.intro.appendChild(newParagraph);
        }
    }this.addBehaviour = addBehaviour;
}

var buttons = {
    makePresentation : function(button) {
        var buttonClass = button.className.replace("btn ","");
        if (button.className.indexOf("tipo4")==-1) {
            button.onmousedown = function() { this.style.color="#ff9"}
            button.onmouseup = function() { this.style.color="#fff"}
        }
        else {
            button.style.cursor="auto";
            button.setAttribute("disabled", "disabled");
        }
        var exteriorDiv = document.createElement("div");
        exteriorDiv.className = "button ftl "+buttonClass;
        var leftDiv = document.createElement("div");
        leftDiv.className = "ftl buttonLeft";
        var buttonDiv = document.createElement("div");
        buttonDiv.className = "ftl boton";
        var rightDiv = document.createElement("div");
        rightDiv.className = "ftl buttonRight";
        exteriorDiv.appendChild(leftDiv);
        exteriorDiv.appendChild(buttonDiv);
        exteriorDiv.appendChild(rightDiv);
        button.parentNode.insertBefore(exteriorDiv, button);
        button.style.background="none";
        button.style.border="none";
        button.style.fontSize="1em";
        buttonDiv.appendChild(button);
    },
    init : function() {
        var buttonList = dom.getElementsByClass("btn");
        for (var i = 0; i < buttonList.length; i++) {
            buttons.makePresentation(buttonList[i]);
        }
    }
}

tabs = function (obj) {
    this.specialHeight=0; // altura de los items sin contar con su contenido. es necesario porque vamos a usar posiciones absolutas. se utiliza para calcular altura tabszone en funcion del contenido visible.
    this.obj = obj;
	
	function init() { //inicalizamos la altura y llamamos a los mÃ©todos
		if(typeof(this.obj.getElementsByTagName("ul")[0]) != "undefined"){
	        this.specialHeight = this.obj.getElementsByTagName("ul")[0].offsetHeight;
	        this.setHeightForContent();
			this.addFakeLinks(this.specialHeight);
		}
    }this.init=init;
	
	function setHeightForContent() {
        var contentTabs = dom.getElementsByClass("contentTab", this.obj, "div");
        var height = 0;
		for (var i = 0; i < contentTabs.length; i++) {
           contentTabs[i].style.width = this.obj.getElementsByTagName("ul")[0].offsetWidth - 2 + "px";
           
			if (contentTabs[i].parentNode.className.indexOf("sel")!=-1) {
                height = contentTabs[i].offsetHeight;
            }        
        }
        this.obj.getElementsByTagName("ul")[0].style.height = this.specialHeight + height + 10 +"px";
	}this.setHeightForContent=setHeightForContent;
	
	function addFakeLinks(specialHeight) {
		var links = obj.getElementsByTagName("h2");
		if (links.length == 0) links = dom.getElementsByClass("tab", this.obj, "span");

		//Para el caso que hay pestanias
		if (links.length > 0){
	        for (var i=0; i<links.length; i++) {
				links[i].onmouseover = function() { this.style.textDecoration="underline";}
				links[i].onmouseout = function() { this.style.textDecoration="none";}
			
			
	            links[i].onclick = function() {
					for (var j=0; j<links.length; j++) {
	                    links[j].parentNode.getElementsByTagName("div")[0].style.display="none";
	                    links[j].parentNode.className = links[j].parentNode.className.replace("sel","");
	                }
					this.parentNode.getElementsByTagName("div")[0].style.display="block";
	                this.parentNode.className += " sel";										
					if (this.parentNode.parentNode.parentNode.className.indexOf("home")==-1) {
						//existe menu lateral izquierdo
						aux_right = 0; aux_content = 0; diferencia = 0;
						if (dom.$("rightZone")) { aux_right = dom.$("rightZone").offsetHeight;}
						if (dom.$("contenIntProducto") != null){ aux_content = dom.$("contenIntProducto").offsetHeight;}
						if (aux_right >= aux_content) { diferencia = aux_right - aux_content;}
						//Unicamente se aplica a Internet Explorer 6
						if (dom.$("contenIntProducto") != null) {
							if ((esIE) && !(swIE70)) { dom.$("contenIntProducto").style.marginBottom = diferencia+"px";}
						}
						if(this.parentNode.parentNode.parentNode.getElementsByTagName("ul").length){
							this.parentNode.parentNode.parentNode.getElementsByTagName("ul")[0].style.height = 
								parseInt(this.parentNode.getElementsByTagName("div")[0].offsetHeight) + 
								parseInt(specialHeight)+10+"px";
						}
					}
	            }//  links[i].onkeypress = links[i].onclick();
	        }
		}
		else {
			//Para el caso de que no haya pestanias
			var contentTabs = dom.getElementsByClass("contentTab", this.obj, "div");
			contentTabs[0].style.display = "block";
			//Borra los bordes de estilo contentTab JESUS
			contentTabs[0].style.border = "1px solid #FFFFFF";
			//Borra el background imagen en caso de que no haya pestaÃ±as JESUS
			contentTabs[0].style.background = "none";
			//tengo que ver la altura de la capa
			this.obj.getElementsByTagName("ul")[0].style.height = contentTabs[0].offsetHeight+30+"px";
			//Borra los bordes de la etiqueta UL de tabsZone JESUS
			this.obj.getElementsByTagName("ul")[0].style.border = "1px solid #FFFFFF";
		}
    }this.addFakeLinks = addFakeLinks;
	
}


var activeLink = function () {
    this.obj = null;
    function init(obj) {
        this.obj = obj;
        this.updateItemStyle();
        var images = this.makeAuxImages(obj);
        this.obj.appendChild(images[0]);
        this.obj.appendChild(images[1]);
		this.obj.className="activeOk";
    }this.init = init
    
    function makeAuxImages (obj) {
        //borde sup
		var rutaImg2=rutaImg;
		// No pillaba el estilo en FF3
        if(document.styleSheets[(document.styleSheets.length-1)].href && document.styleSheets[(document.styleSheets.length-1)].href.indexOf("bancaPrivada.css")!=-1){
			rutaImg2=document.styleSheets[(document.styleSheets.length-1)].href.replace('/css/bancaPrivada.css','/img/');
		}
		
        if(document.styleSheets[(document.styleSheets.length-1)].href && document.styleSheets[(document.styleSheets.length-1)].href.indexOf("BancaPrivadaGris.css")!=-1){
			rutaImg2=document.styleSheets[(document.styleSheets.length-1)].href.replace('/css/AndorraBancaPrivadaGris.css','/img/');
		}		
		
		var imagen = document.createElement("img");
        imagen.setAttribute("alt","");
        imagen.setAttribute("src",rutaImg2+"active_tr.gif");
        //borde inf
        var imagen2 = document.createElement("img");
        imagen2.setAttribute("alt","");
        imagen2.setAttribute("src",rutaImg2+"active_br.gif");
        imagen2.className="down";
        imagen2.style.top=obj.offsetHeight-6+"px";
        return new Array(imagen, imagen2);
    }this.makeAuxImages = makeAuxImages
    
    function _getDepth (obj) {
        
        if ((obj.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode) && (obj.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.className=="mainNavigation")) {
            return 4;
        }
        if (obj.parentNode.parentNode.parentNode.parentNode.parentNode.className=="mainNavigation"){
            return 3;
        }
        if (obj.parentNode.parentNode.parentNode.className=="mainNavigation"){
            return 2;
        }
        return 1;
    }this._getDepth = _getDepth
    
    function updateItemStyle () {
        switch (this._getDepth(this.obj)) {
            case 2:
                this.obj.style.marginLeft="-16px"
                this.obj.style.paddingLeft="30px"
                this.obj.style.backgroundPosition="18px 6px";               
                break;
            case 3:
                 this.obj.style.marginLeft="-28px"
                 this.obj.style.paddingLeft="40px"
                 this.obj.style.backgroundPosition="30px 7px";                
                break;
            case 4:
                this.obj.style.marginLeft="-40px"
                this.obj.style.paddingLeft="50px"
                this.obj.style.backgroundPosition="41px 7px";
                break;
        }
    }this.updateItemStyle = updateItemStyle;
}

// INICIO MAR - funciÃ³n de control mÃºltiple de evento resize
var resizeListeners = "";
function addResizeListener(listener) {
  if (resizeListeners == "") {
    resizeListeners = listener + "();";
  } else {
    resizeListeners = resizeListeners + listener + "();";
  }
}
function launchResizeListeners() {
	eval(resizeListeners);
}
// FIN MAR

// INICIO funciones para el timeout de sesiÃ³n
function pageWidth(){
	return window.innerWidth != null? window.innerWidth: document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth:document.body != null? document.body.clientWidth:null;
}
function pageHeight(){
	return window.innerHeight != null? window.innerHeight: document.documentElement && document.documentElement.clientHeight ? document.documentElement.clientHeight:document.body != null? document.body.clientHeight:null;
}

function posLeft() {
	return typeof window.pageXOffset != 'undefined' ? window.pageXOffset:document.documentElement && document.documentElement.scrollLeft? document.documentElement.scrollLeft:document.body.scrollLeft? document.body.scrollLeft:0;
}

function posTop() {
	return typeof window.pageYOffset != 'undefined' ? window.pageYOffset:document.documentElement && document.documentElement.scrollTop? document.documentElement.scrollTop: document.body.scrollTop?document.body.scrollTop:0;
}

//function $(x){
//	return document.getElementById(x);
//}

function scrollFix(){
	var obol=document.getElementById('ol');
	if (obol) {
		obol.style.top=posTop()+'px';
		obol.style.left=posLeft()+'px';
	}
}

function sizeFix(){
	var obol=document.getElementById('ol');
	if (obol) {
		obol.style.height=pageHeight()+'px';
		obol.style.width=pageWidth()+'px';
	}
}

function kp(e){
	ky=e?e.which:event.keyCode;
	if(ky==88||ky==120)
		hm();
	return false;
}

function inf(h){
	//Antiguo bug de IE con z-index. Ya no aplica.
        /*
	tag=document.getElementsByTagName('select');
	for(i=tag.length-1;i>=0;i--)
		tag[i].style.visibility=h;
	tag=document.getElementsByTagName('object');
	for(i=tag.length-1;i>=0;i--)
		tag[i].style.visibility=h;
        */
}

function ShowModal(obl, wd){
	var h='hidden';
	var b='block';
	var p='px';
	var obol=document.getElementById('ol'); 
	var obbxd = document.getElementById('mbd');
	if (obbxd) {
		if(document.getElementById(obl))
			obbxd.innerHTML = document.getElementById(obl).innerHTML;
	}
	if (obol) {
		obol.style.height=pageHeight()+p;
		obol.style.width=pageWidth()+p;
		obol.style.top=posTop()+p;
		obol.style.left=posLeft()+p;
		obol.style.display=b;
	}
	var tp=posTop()+((pageHeight()-190)/2)-12;
	var lt=posLeft()+((pageWidth()-wd)/2)-12;
	var obbx=document.getElementById('mbox');
	if (obbx) {
		obbx.style.top=(tp<0?0:tp)+p;
		obbx.style.left=(lt<0?0:lt)+p;
		obbx.style.width=wd+p;
		//obbx.style.height=190+p;
	}
	inf(h);
	if (obbx)
		obbx.style.display=b;
	return false;
}

function hm(){
	var v='visible';
	var n='none';
	if(document.getElementById('ol'))
		document.getElementById('ol').style.display=n;
	if(document.getElementById('mbox'))
		document.getElementById('mbox').style.display=n;
	inf(v);
}

function initmb(){
	var ab='absolute';
	var n='none';
	var obody=document.getElementsByTagName('body')[0];
	var frag=document.createDocumentFragment();
	var obol=document.createElement('div');
	obol.setAttribute('id','ol');
	obol.style.display=n;
	obol.style.position=ab;
	obol.style.top=0;
	obol.style.left=0;
	obol.style.zIndex=998;
	obol.style.width='100%';
	frag.appendChild(obol);
	var obbx=document.createElement('div');
	obbx.setAttribute('id','mbox');
	obbx.style.display=n;
	obbx.style.position=ab;
	obbx.style.zIndex=999;
	var obl=document.createElement('span');
	obbx.appendChild(obl);
	var obbxd=document.createElement('div');
	obbxd.setAttribute('id','mbd');
	obl.appendChild(obbxd);
	frag.insertBefore(obbx,obol.nextSibling);
	obody.insertBefore(frag,obody.firstChild);
	window.onscroll = scrollFix; 
	addResizeListener("sizeFix"); 
	window.onresize = launchResizeListeners;
}
        var checkTimer = "true";
        var visible=false
        var oldtitle = document.title;

        function ShowTimeoutDialog()
        {
                if(typeof pathNeti !== 'undefined'){
                        if(pathNeti == "/txbs/" || pathNeti == "/txempbs/" ){
                                tealium_data.nivel2 = "timeout";
                                tealium_data.categoriaProducto = "banca a distancia"
                                tealium_data.nombreProducto = "timeout"
                                bsProcesos(tealium_data);
                        }
                }

                if (accionUsuarioTx) {
                        RefrescarKeepAlive();
                } else {
                        if(typeof(kPress)=='undefined' || !kPress){
                                if(typeof preLogoutIntercam=== "function"){
                    preLogoutIntercam();
                }
                                visible = true;
                                ShowModal('boxDesconexion',530);
                                if (document.getElementById("btnsalir")) {
                                        document.getElementById("btnsalir");
                                        timer();
                                }
                        }
                        else{
                                kPress=false;
                                Continuar();
                        }
                }
        }

        if(typeof(countdown)=='undefined'){
                countdown=30;
        }

        //Función cuenta atrás del TimeOut
        function timer(){
                var intervalTimer;
                var updateCountdown;
                oldtitle = document.title;
                countdown=30;

                intervalTimer = setInterval(function(){

                        countdown = --countdown <= -1 ? 29 : countdown;
                        document.getElementById('countdown-number').innerHTML = countdown;
                        document.title = countdown + " " + oldtitle;

                        //comprobamos si estamos en el tab de navegador con la web visble.
                        if (document.visibilityState === 'visible' && checkTimer == "true") {
                                checkTimer = "false";
                                refreshCountdown(countdown); //enviamos el tiempo que nos quede de sesiÃ³n.
                        }

                        if (!visible) {
                                clearInterval(intervalTimer);
                                countdown=30;
                                checkTimer = "true";
                                document.title=oldtitle;
                                return;
                        }
                        if (countdown == 0) {
                        clearInterval(intervalTimer);
                        SalirAuto();
                        }
                }, 1000);
                function refreshCountdown(setTiming){
                        document.getElementsByClassName('fill-circle')[0].classList.add("start"); //Incluimos clase con la animaciÃ³n de la cuenta atrÃ¡s.
                        document.getElementsByClassName('fill-circle')[0].style.animationDuration = countdown + 's'; //Enviamos el tiempo que debe durar la animaciÃ³n.
                }
        }

        function Continuar(){
            hm('boxDesconexion');
                document.title=oldtitle;
                if(typeof pathNeti !== 'undefined'){
                        if(pathNeti == "/txbs/" || pathNeti == "/txempbs/" ){
                        tealium_data.nivel2 = "posicion global";
                        tealium_data.categoriaProducto = ""
                        tealium_data.nombreProducto = ""
                        }
                }

            visible=false;
            Refrescar();
        }

	var isAICI=false;
	
	function Salir(){
	    hm('boxDesconexion');
	    visible=false;
	    //Ir a la pagina de logout
	    if (isAICI) {
	    	doAction("INOpenReqCreditImportNew.doLogout");
	    } else {
			logoutURLPortal(false);
        }
	}

	function doLogoutResponse(req) {
		window.location.href=logoutURL;
	}


	function doLogoutBSOnlinePLUS(req) {
		// Para todos los portales se reasigna para hacer el logout de BSOnlinePLUS en Spring.
		try{
			sendRequestForceCallback("/txtransfersbs/spring/sessionLogout",doLogoutResponse);
		}catch(error){window.location.href=logoutURL;}	
	}

	function doLogoutFFPPSinCookies(req) {
    //do nothing!
  }

	function doLogoutFFPP(req) {
		var contextoActual = getContextoActual();//readCookie('rutaTransaccional');
		
			// Para los portales SabAtl Particulares y SabUbp Particulares se reasigna para hacer el logout de Finanzas Personales en Spring.
			if (contextoActual == "txbs/") {
				try{
					sendRequestForceCallback("/txsa/j_spring_security_logout",doLogoutResponse);
				}catch(error){window.location.href=logoutURL;}	
			} else if (contextoActual == "txsbp/") {
				try{
					sendRequestForceCallback("/txbup/j_spring_security_logout",doLogoutResponse);
				}catch(error){window.location.href=logoutURL;}	
			} else {
				window.location.href=logoutURL;
			}
	}

  function getContextoActual() {
		var contextoActual = readCookie('rutaTransaccional');
		if(contextoActual!=null) return contextoActual;

     var aceptacionCookies = readCookie('aceptacionCookies_SabAtl');
     if (aceptacionCookies != null && (aceptacionCookies == "true" || aceptacionCookies == "false")) {
        var segmento = readCookie('segmento');
        if (segmento == null || segmento.substring(0,1) == "P") return "txbs/";
        else return "txempbs/";
     }
     
     var aceptacionCookies = readCookie('aceptacionCookies_BC');
     if (aceptacionCookies != null && (aceptacionCookies == "true" || aceptacionCookies == "false")) {
        var segmento = readCookie('segmento');
        if (segmento == null || segmento.substring(0,1) == "P") return "activobank/";
        else return "txempbc/";
     }
  
     var aceptacionCookies = readCookie('aceptacionCookies_SabUbp');
     if (aceptacionCookies != null && (aceptacionCookies == "true" || aceptacionCookies == "false")) {
        return "txsbp/";
     }
  
  	 var theHref = window.location.href;
		 if(theHref.indexOf('txbsa')!=-1) return "txbsa/";
		 if(theHref.indexOf('txbs')!=-1) return "txbs/";
		 if(theHref.indexOf('txempbs')!=-1) return "txempbs/";
		 if(theHref.indexOf('activobank')!=-1) return "activobank/";
		 if(theHref.indexOf('txempbc')!=-1) return "txempbc/";
		 if(theHref.indexOf('txsbp')!=-1) return "txsbp/";
		 if(theHref.indexOf('txsa')!=-1) return "txbs/";
		 if(theHref.indexOf('txbgp')!=-1) return "activobank/";
  
     //Por defecto, si la cosa va muy mal -> txbs. 
     return "txbs/";
  
  }

	/* Logout segun el portal SabAtl, BC, BSParis, BSCasablanca, Urquijo (SabUbp) */
	function logoutURLPortal(modeAuto)
	{    
		var contextoActual = getContextoActual();//readCookie('rutaTransaccional');
		// Si la desconexion es automatica
		if (modeAuto) {
			varTransaccionalLogout = varTransaccionalLogout+'?mode=auto';
		}
		// logout por defecto segun portal.
		logoutURL=window.location.protocol + '//' + window.location.host + varTransaccionalLogout;

		// Para SabAtl y SabUbp se lanza el logout de InterCAM
		if ((contextoActual == "txbs/") || (contextoActual == "txempbs/") || (contextoActual == "txsbp/"))  {

			try {

				//HDEV-34804 - Control de sesión para el widget de Zendesk
				localStorage.setItem("z.wdgt.userLoggedOut", true);

                if(typeof logoutIntercam=== "function"){
                    logoutIntercam(logoutURL);
                } else {
					sendRequestForceCallback("/txappbs/bsonline/logout.do",doNothingResponse);
				}
			}catch(error){}
			// Para los portales SabAtl Particulares y SabUbp Particulares se lanza el logout de Finanzas Personales.
			if (contextoActual == "txbs/") {
				try{
					sendRequestForceCallback("/txsa/j_spring_security_logout",doNothingResponse);
				}catch(error){}
			} else if (contextoActual == "txsbp/") {
				try{
					sendRequestForceCallback("/txbup/j_spring_security_logout",doNothingResponse);
				}catch(error){}
			}

		}

                if(typeof logoutIntercam=== "function"){
           // No hacemos redireccion se harÃ¡ en la funcion logoutIntercam
        } else {

			var keyRandom = getKeyRandom();
			if (logoutURL.indexOf("?")!=-1) {
				logoutURL = logoutURL + "&key=" + keyRandom;
			} else {
				logoutURL = logoutURL + "?key=" + keyRandom;
			}
			window.location.href=logoutURL;
		}
	}
	
	function esperarRespuestaLogout(request) {
	    var xmlLogout=request.responseText;
		//document.write(xmlLogout);
	}
		
	function SalirAuto()
    {    
                hm('boxDesconexion');
                visible=false;

                //Ir a la pagina de logout
                if (isAICI) {
                    doAction("INOpenReqCreditImportNew.doLogout");
                } else {
					logoutURLPortal(true);
		        }
    }


	//TIMEOUT /// 02/01/07 P3993
	// 11 min ----> 660000;
	varTransaccionalTimeSesion = -2;
	//timeOutValue = parseInt(varTransaccionalTimeSesion);
	//timeAlert = timeOutValue-3000;
	var accionUsuarioTx = false;
	var timeAccionUsuarioTx = null;
	var accionUsuarioRefrescar = false;


	function Refrescar() {
		sendRequest(varTransaccionalKeepAlive,doNothingResponse);
		if(typeof(TimerIDS)!='undefined') {
			clearTimeout(TimerIDS);
		}
		timeOutValue = parseInt(varTransaccionalTimeSesion);
                accionUsuarioTx = false;
                timeAccionUsuarioTx = null;
		accionUsuarioRefrescar = true;
		TimerIDS=setTimeout('ShowTimeoutDialog()', timeOutValue);
	}

	
	function RefrescarKeepAlive() {
		if (!Date.now) {
			Date.now = function() { return new Date().getTime(); }
		}
		if (timeAccionUsuarioTx != null) {
			var timeActualTx = Date.now();
			var diferenciaTimeTx = timeActualTx - timeAccionUsuarioTx;
			timeOutValue = parseInt(varTransaccionalTimeSesion)-diferenciaTimeTx;
		} else {
			timeOutValue = parseInt(varTransaccionalTimeSesion);
		}

		sendRequest(varTransaccionalKeepAlive,doNothingResponse);
		if(typeof(TimerIDS)!='undefined') {
			clearTimeout(TimerIDS);
		}
		accionUsuarioTx = false;
		timeAccionUsuarioTx = null;
		TimerIDS=setTimeout('ShowTimeoutDialog()', timeOutValue);
	}

	
	function MantenerSesion(){	
		if(r("username") != null){
			if (accionUsuarioRefrescar) {
				accionUsuarioRefrescar = false;
			} else {
				accionUsuarioTx = true;
				if (!Date.now) {
					Date.now = function() { return new Date().getTime(); }
				}
				timeAccionUsuarioTx = Date.now();
			}
		}
	}
// FIN funciones para el timeout de sesiÃ³n

/* preservem l'onload del transaccional*/
var _previous_onload;
var _loaded_marker = document.getElementById('_body_loaded');
if (_loaded_marker && _loaded_marker.value == "false") {
       _previous_onload = window.onload;
       _loaded_marker.value = "true";
}


	
window.onload = function() {

	//alert("entrando en funcion iniciando ");
	
	 //invoquem l'onload del transaccional
	if(_previous_onload) _previous_onload();
	
	
	if (dom.getElementsByClass("imagenRegalo")[0] != null){
		var imgReg = 100;
		var hImgReg = dom.getElementsByClass("imagenRegalo")[0].offsetHeight;
		if (hImgReg <= imgReg){ dom.getElementsByClass("imagenRegalo")[0].style.marginTop=30+"px";}
	}
	//se aniade esta linea para cuando se realice un history.back() se posicione en lo alto de la pagina
	//window.scroll(0,0);
	var tabsZones = dom.getElementsByClass("tabsZone");
	if (tabsZones.length) {
		for (var i = 0; i<tabsZones.length; i++) {
			eval("tabs"+ i +" = new tabs(dom.getElementsByClass(\"tabsZone\")["+i+"])");
			eval("tabs"+ i +".init()");
		}
	}
	if (dom.$("leftZone") && dom.getElementsByClass("active", dom.$("leftZone"), "li")[0]) {
		var itemActive = new activeLink();
		itemActive.init(dom.getElementsByClass("active", dom.$("leftZone"), "li")[0]);
	}
	//buttons.init();
	
	var promos = dom.getElementsByClass("promo")
	if (promos.length) {
		//necesito por explorer. he de dar tamaÃ±o a los divs. lo calculo en funcion del offsetWidth
		for (var i=0; i<promos.length; i++) {
			promos[i].style.width = promos[i].offsetWidth + 2 +"px";
		}
	}
	
	
	
	//voy a buscar aquellos elementos que tengan la clase btn para cambiarle el pulsado
	var objBtn = dom.getElementsByClass("btn");
	if (objBtn.length > 0){
		for (var i=0;i<objBtn.length;i++){
			objBtn[i].onmouseup = function() { this.style.color = "#ffffff";}
			objBtn[i].onmousedown = function() { this.style.color = "#ffff99";}
		}
	}
	
	//botones solicitar
	/*
	var solicita = dom.getElementsByClass("btn")
	if (solicita.length) {
		for (var i=0; i<solicita.length; i++) {
			solicita[i].style.width = solicita[i].offsetWidth + 2 +"px";
		}
	}
	*/
	if (dom.getElementsByClass("tools").length) {
		presentation.addJsTools()
	}
	//if (dom.$("miscellaneous")) {
	//	presentation.addSizeTextButtons()
	//}
	if(dom.getElementsByClass("goTop").length){
		if(document.documentElement && document.documentElement.clientHeight){
			objSubir=dom.getElementsByClass("goTop")[0]
			objSubir.style.position='relative'
			if(document.documentElement.clientHeight > objSubir.offsetTop)
				objSubir.style.visibility='hidden';
		}
	}
	
	//imprimir catalogo
	if (dom.$("printer")) {dom.$("printer").style.display="block";}
	//inicializo tamanio de letra
	if (cookies.getCookie("bsll_size")!="") {	
		
		tmn=(parseFloat(cookies.getCookie("bsll_size")));
			if(tmn>0.44){
				
				
				/* redimensionamos los elementos de cabecera  */
				rcctmn(tmn);
				
				
			}
		
		
		if(document.getElementsByTagName("body")[0] != null){
			document.getElementsByTagName("body")[0].style.fontSize = cookies.getCookie("bsll_size");
		}
		//pslogo();
	}
	else {
		if(document.getElementsByTagName("body")[0] != null){
			document.getElementsByTagName("body")[0].style.fontSize = "0.625em";
		}
		//pslogo();
	}
	var bigPromos = dom.getElementsByClass("bigPromotion");
	for (var i =0; i<bigPromos.length; i++) {
		eval("var p"+i+" = new bigPromo(bigPromos["+i+"])");
		eval("p"+ i +".addBehaviour()");
	}
	
	if (dom.$("languages")) {
		var links = dom.$("languages").getElementsByTagName("a");
        for (var i=0; i<links.length; i++) {
            links[i].onclick=function() {
				var actualUrl = window.location.toString();
				var aux = this.id.split("_");
				if (actualUrl.indexOf(aux[1]) != -1) { window.location=actualUrl.replace(aux[1],aux[2]);}
				else { window.location=this.href;}
                return false;
            }
        }
		
		if(typeof varMenuBSOnlineTxPart != 'undefined'){
			varMenuBSOnlineTxPart.search
			sbc=varMenuBSOnlineTxPart.indexOf('=');
			lgEntorno=varMenuBSOnlineTxPart.substring(sbc+1);
			switch (lgEntorno){
				case "FRA":
					window.currentLanguage="fr";
					break;
				case "ENG":
					window.currentLanguage="en";
					break;
				case "CAT":
					window.currentLanguage="CA-es";
					break;
			}
		}	
    }    
  if (dom.$("homeEmpresasModules")) {
        var height = 0
        var listados = dom.getElementsByClass("listing",dom.$("homeEmpresasModules"),"div");
        for (var i=0; i<listados.length; i++) {
            height = Math.max(height, listados[i].offsetHeight);
        }
        for (var i=0; i<listados.length; i++) {
           listados[i].style.height = (height - 10) / 10.1 + "em";
        }
	}
	// INICIO timeout de sesiÃ³n
	//alert(varTransaccionalTimeSesion);
	if(varTransaccionalTimeSesion!='-2'){
		initmb();
		timeOutValue = parseInt(varTransaccionalTimeSesion);
		//timeAlert = (timeOutValue-(timeoutPopupScript*300));
		if(typeof(TimerIDS)!='undefined') {
			clearTimeout(TimerIDS);
		}
		TimerIDS=setTimeout('ShowTimeoutDialog()', timeOutValue);
	}
	// FIN timeout de sesiÃ³n
	//Se identifica el boton de volver atras
        if (dom.$("irAtras")!=null) {
                var direccion = document.referrer;
                var regex = "Satellite";
                if(direccion.indexOf(regex, direccion.length - regex.length) !==-1){
                        dom.$("irAtras").style.display="none";
                }

                dom.$("irAtras").onclick = function() {
                        history.back();return false;
                }
	}
	/*modificado para que no machaque el pie JESUS antes estaba colocado justo antes del if que llama a la funcion presentation.addJsTools*/
	if (dom.$("rightZone") && dom.getElementsByClass("headers").length) {
		presentation.setPaddingForRightZone()
	}
	/*Aqui mostramos el modulo derecho, necesario para evitar salto*/
	if(document.getElementById("rightZone"))
		document.getElementById("rightZone").style.visibility='visible';
	
	if(document.getElementById('solicitudProducto')&&document.getElementById('ayudaProducto')){
		var alturaSolicitud = document.getElementById('solicitudProducto').offsetHeight;
		var alturaAyuda = document.getElementById('ayudaProducto').offsetHeight;
		if (alturaSolicitud < alturaAyuda){
			document.getElementById('solicitudProducto').style.height=alturaAyuda - 18 +'px';
		}
	}
	if(document.getElementById("lnkqgo") || document.getElementById("lnkqgo2") || document.getElementById("lnkqgo3") || document.getElementById("iframeQgoLogin") || document.getElementById("lnkqgoingsa"))
		qGo.Inicialice();
	
	//if(document.getElementById('iframeQgoLogin'))
		//loginTxQgo();
 		
}

document.addEventListener('DOMContentLoaded', function() {

	if (document.getElementById("gSearch") !=null) {
		init();
		if (literalBusqueda!=null) { showAddress(literalBusqueda);}
		dom.$("gSearch").onsubmit = function() {
			showAddress();
			return false;
		}
	   // showAddress(literalBusqueda);
	}
}, false);
	
function loginTxQgo(){
}

function busqueda(lugar) {
	document.getElementById("mapaProvincias").value = lugar;
	document.getElementById("mapSearch").submit();
	return false;
}
	
function EsNumero(sText) {
	var ValidChars = "0123456789";
	var IsNumber=true;
	var Char;
	for (i = 0; i < sText.length && IsNumber == true; i++) { 
		Char = sText.charAt(i); 
		if (ValidChars.indexOf(Char) == -1) { IsNumber = false;}
	}
	return IsNumber;
}

function prefiltroNumerosDecimales(evt,separador) {          
	var charCode = (evt.which) ? evt.which : event.keyCode
	var keychar = String.fromCharCode(charCode);
          
  if (keychar == separador) return true;
  if (charCode > 31 && (charCode < 48 || charCode > 57) )
            return false;

  return true;
}    
        
function EsNumeroConDecimales(sText) {
 var IsNumber=true;

 if ( parseFloat(sText) != sText ) IsNumber = false;
 return IsNumber;
}

function EsMes(month) {
	var EsMes=true;

	if (month < 1 || month > 12) EsMes=false;

	return EsMes;
}

// ******************************************************************
// This function accepts a string variable and verifies if it is a
// proper date or not. It validates format matching either
// mm-dd-yyyy or mm/dd/yyyy. Then it checks to make sure the month
// has the proper number of days, based on which month it is.

// The function returns true if a valid date, false if not.
// ******************************************************************

function isDate(dateStr) {

		var datePat = /^(\d{1,2})(\/)(\d{1,2})(\/)(\d{4})$/;
		var matchArray = dateStr.match(datePat); // is the format ok?
		
		if (matchArray == null) {
		//alert("Please enter date as either dd/mm/yyyy.");
		//return false;
		return false;
		}
		
		month = matchArray[3]; // p@rse date into variables
		day = matchArray[1];
		year = matchArray[5];
		
		if (month < 1 || month > 12) { // check month range
		//alert("Month must be between 1 and 12.");
		return false;
		}
		
		if (day < 1 || day > 31) {
		//alert("Day must be between 1 and 31.");
		return false;
		}
		
		if ((month==4 || month==6 || month==9 || month==11) && day==31) {
		//alert("Month "+month+" doesn`t have 31 days!")
		return false;
		}
		
		if (month == 2) { // check for february 29th
		var isleap = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
		if (day > 29 || (day==29 && !isleap)) {
		//alert("February " + year + " doesn`t have " + day + " days!");
		return false;
		}
		}
		return true; // date is valid
}

function html_entity_decode(texto) {
	texto = texto.replace(/&quot;/g,'"'); // 34 22
	texto = texto.replace(/&amp;/g,'&'); // 38 26	
	texto = texto.replace(/&#39;/g,"'"); // 39 27
	texto = texto.replace(/&lt;/g,'<'); // 60 3C
	texto = texto.replace(/&gt;/g,'>'); // 62 3E
	texto = texto.replace(/&circ;/g,'^'); // 94 5E
	texto = texto.replace(/&lsquo;/g,'â€˜'); // 145 91
	texto = texto.replace(/&rsquo;/g,'â€™'); // 146 92
	texto = texto.replace(/&ldquo;/g,'â€œ'); // 147 93
	texto = texto.replace(/&rdquo;/g,'â€'); // 148 94
	texto = texto.replace(/&bull;/g,'â€¢'); // 149 95
	texto = texto.replace(/&ndash;/g,'â€“'); // 150 96
	texto = texto.replace(/&mdash;/g,'â€”'); // 151 97
	texto = texto.replace(/&tilde;/g,'Ëœ'); // 152 98
	texto = texto.replace(/&trade;/g,'â„¢'); // 153 99
	texto = texto.replace(/&scaron;/g,'Å¡'); // 154 9A
	texto = texto.replace(/&rsaquo;/g,'â€º'); // 155 9B
	texto = texto.replace(/&oelig;/g,'Å“'); // 156 9C
	texto = texto.replace(/&#357;/g,'Â'); // 157 9D
	texto = texto.replace(/&#382;/g,'Å¾'); // 158 9E
	texto = texto.replace(/&Yuml;/g,'Å¸'); // 159 9F
	texto = texto.replace(/&nbsp;/g,' '); // 160 A0
	texto = texto.replace(/&iexcl;/g,'Â¡'); // 161 A1
	texto = texto.replace(/&cent;/g,'Â¢'); // 162 A2
	texto = texto.replace(/&pound;/g,'Â£'); // 163 A3
	texto = texto.replace(/&curren;/g,' '); // 164 A4
	texto = texto.replace(/&yen;/g,'Â¥'); // 165 A5
	texto = texto.replace(/&brvbar;/g,'Â¦'); // 166 A6
	texto = texto.replace(/&sect;/g,'Â§'); // 167 A7
	texto = texto.replace(/&uml;/g,'Â¨'); // 168 A8
	texto = texto.replace(/&copy;/g,'Â©'); // 169 A9
	texto = texto.replace(/&ordf;/g,'Âª'); // 170 AA
	texto = texto.replace(/&laquo;/g,'Â«'); // 171 AB
	texto = texto.replace(/&not;/g,'Â¬'); // 172 AC
	texto = texto.replace(/&shy;/g,'Â­'); // 173 AD
	texto = texto.replace(/&reg;/g,'Â®'); // 174 AE
	texto = texto.replace(/&macr;/g,'Â¯'); // 175 AF
	texto = texto.replace(/&deg;/g,'Â°'); // 176 B0
	texto = texto.replace(/&plusmn;/g,'Â±'); // 177 B1
	texto = texto.replace(/&sup2;/g,'Â²'); // 178 B2
	texto = texto.replace(/&sup3;/g,'Â³'); // 179 B3
	texto = texto.replace(/&acute;/g,'Â´'); // 180 B4
	texto = texto.replace(/&micro;/g,'Âµ'); // 181 B5
	texto = texto.replace(/&para/g,'Â¶'); // 182 B6
	texto = texto.replace(/&middot;/g,'Â·'); // 183 B7
	texto = texto.replace(/&cedil;/g,'Â¸'); // 184 B8
	texto = texto.replace(/&sup1;/g,'Â¹'); // 185 B9
	texto = texto.replace(/&ordm;/g,'Âº'); // 186 BA
	texto = texto.replace(/&raquo;/g,'Â»'); // 187 BB
	texto = texto.replace(/&frac14;/g,'Â¼'); // 188 BC
	texto = texto.replace(/&frac12;/g,'Â½'); // 189 BD
	texto = texto.replace(/&frac34;/g,'Â¾'); // 190 BE
	texto = texto.replace(/&iquest;/g,'Â¿'); // 191 BF
	texto = texto.replace(/&Agrave;/g,'Ã€'); // 192 C0
	texto = texto.replace(/&Aacute;/g,'Ã'); // 193 C1
	texto = texto.replace(/&Acirc;/g,'Ã‚'); // 194 C2
	texto = texto.replace(/&Atilde;/g,'Ãƒ'); // 195 C3
	texto = texto.replace(/&Auml;/g,'Ã„'); // 196 C4
	texto = texto.replace(/&Aring;/g,'Ã…'); // 197 C5
	texto = texto.replace(/&AElig;/g,'Ã†'); // 198 C6
	texto = texto.replace(/&Ccedil;/g,'Ã‡'); // 199 C7
	texto = texto.replace(/&Egrave;/g,'Ãˆ'); // 200 C8
	texto = texto.replace(/&Eacute;/g,'Ã‰'); // 201 C9
	texto = texto.replace(/&Ecirc;/g,'ÃŠ'); // 202 CA
	texto = texto.replace(/&Euml;/g,'Ã‹'); // 203 CB
	texto = texto.replace(/&Igrave;/g,'ÃŒ'); // 204 CC
	texto = texto.replace(/&Iacute;/g,'Ã'); // 205 CD
	texto = texto.replace(/&Icirc;/g,'ÃŽ'); // 206 CE
	texto = texto.replace(/&Iuml;/g,'Ã'); // 207 CF
	texto = texto.replace(/&ETH;/g,'Ã'); // 208 D0
	texto = texto.replace(/&Ntilde;/g,'Ã‘'); // 209 D1
	texto = texto.replace(/&Ograve;/g,'Ã’'); // 210 D2
	texto = texto.replace(/&Oacute;/g,'Ã“'); // 211 D3
	texto = texto.replace(/&Ocirc;/g,'Ã”'); // 212 D4
	texto = texto.replace(/&Otilde;/g,'Ã•'); // 213 D5
	texto = texto.replace(/&Ouml;/g,'Ã–'); // 214 D6
	texto = texto.replace(/&times;/g,'Ã—'); // 215 D7
	texto = texto.replace(/&Oslash;/g,'Ã˜'); // 216 D8
	texto = texto.replace(/&Ugrave;/g,'Ã™'); // 217 D9
	texto = texto.replace(/&Uacute;/g,'Ãš'); // 218 DA
	texto = texto.replace(/&Ucirc;/g,'Ã›'); // 219 DB
	texto = texto.replace(/&Uuml;/g,'Ãœ'); // 220 DC
	texto = texto.replace(/&Yacute;/g,'Ã'); // 221 DD
	texto = texto.replace(/&THORN;/g,'Ãž'); // 222 DE
	texto = texto.replace(/&szlig;/g,'ÃŸ'); // 223 DF
	texto = texto.replace(/&agrave;/g,'Ã '); // 224 E0
	texto = texto.replace(/&aacute;/g,'Ã¡'); // 225 E1
	texto = texto.replace(/&acirc;/g,'Ã¢'); // 226 E2
	texto = texto.replace(/&atilde;/g,'Ã£'); // 227 E3
	texto = texto.replace(/&auml;/g,'Ã¤'); // 228 E4
	texto = texto.replace(/&aring;/g,'Ã¥'); // 229 E5
	texto = texto.replace(/&aelig;/g,'Ã¦'); // 230 E6
	texto = texto.replace(/&ccedil;/g,'Ã§'); // 231 E7
	texto = texto.replace(/&egrave;/g,'Ã¨'); // 232 E8
	texto = texto.replace(/&eacute;/g,'Ã©'); // 233 E9
	texto = texto.replace(/&ecirc;/g,'Ãª'); // 234 EA
	texto = texto.replace(/&euml;/g,'Ã«'); // 235 EB
	texto = texto.replace(/&igrave;/g,'Ã¬'); // 236 EC
	texto = texto.replace(/&iacute;/g,'Ã­'); // 237 ED
	texto = texto.replace(/&icirc;/g,'Ã®'); // 238 EE
	texto = texto.replace(/&iuml;/g,'Ã¯'); // 239 EF
	texto = texto.replace(/&eth;/g,'Ã°'); // 240 F0
	texto = texto.replace(/&ntilde;/g,'Ã±'); // 241 F1
	texto = texto.replace(/&ograve;/g,'Ã²'); // 242 F2
	texto = texto.replace(/&oacute;/g,'Ã³'); // 243 F3
	texto = texto.replace(/&ocirc;/g,'Ã´'); // 244 F4
	texto = texto.replace(/&otilde;/g,'Ãµ'); // 245 F5
	texto = texto.replace(/&ouml;/g,'Ã¶'); // 246 F6
	texto = texto.replace(/&divide;/g,'Ã·'); // 247 F7
	texto = texto.replace(/&oslash;/g,'Ã¸'); // 248 F8
	texto = texto.replace(/&ugrave;/g,'Ã¹'); // 249 F9
	texto = texto.replace(/&uacute;/g,'Ãº'); // 250 FA
	texto = texto.replace(/&ucirc;/g,'Ã»'); // 251 FB
	texto = texto.replace(/&uuml;/g,'Ã¼'); // 252 FC
	texto = texto.replace(/&yacute;/g,'Ã½'); // 253 FD
	texto = texto.replace(/&thorn;/g,'Ã¾'); // 254 FE
	texto = texto.replace(/&yuml;/g,'Ã¿'); // 255 FF
	return texto;
}

// Devuelve(si existe) el parÃ¡metro de la request que se le pasa a la funciÃ³n
function gup( name ) {    
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");    
    var regexS = "[\\?&]"+name+"=([^&#]*)";    
    var regex = new RegExp( regexS );    
    var results = regex.exec( window.location.search );    
    if( results == null )        
        return "";    
    else return results[1];    
}

//------------------------------------------------------------
// Rutina de validaciÃ³n del codigo cuenta cliente de un banco
// Justino Martinez, 2003
// http://www.webviva.com
// http://www.webviva.com/biblioteca
//------------------------------------------------------------

// Funcion que chequea los dos digitos de control
// Creada originalmente por Daniel Rodriguez y Joaquin
// Bravo y publicada en 
// http://programacion.com/html/articulo/tw_ccc/
function DigitoControl(cadena){
    var cifras = new Array(1,2,4,8,5,10,9,7,3,6);
    var chequeo = 0;
    for (var i=0; i < cifras.length; i++){
        chequeo += parseInt(cadena.charAt(i)) * cifras[i];
    }
    chequeo = 11 - (chequeo % 11);
    if (chequeo == 11) {chequeo = 0;}
    if (chequeo == 10) {chequeo = 1;}
    return chequeo;
}

// Funcion que valida el codigo de cuenta cliente
function ValidarCCC(entidad,oficina,dc,nc) {
    
    // Comprobamos que solo hemos introducido numeros
    if (!EsNumero(entidad)){
        return false;
    }
    if (!EsNumero(oficina)){
        return false;
    }
    if (!EsNumero(dc)){
        return false;
    }
    if (!EsNumero(nc)){
        return false;
    }
    // Comprobamos el primer digito de control
    var primer_control="00"+entidad+oficina;
    var primer_digito=DigitoControl(primer_control);
    if (primer_digito != dc.charAt(0)){
        return false;
    }
    
    // Comprobamos el segundo digito de control
    var segundo_control=nc;
    var segundo_digito=DigitoControl(segundo_control);
    if (segundo_digito != dc.charAt(1)){
        return false;
    }
    
    return true;
}

// rellenar string con ceros
function zeroStringFill(o,n)
{
	for(var x=o.length;x<n;x++)
		o='0'+o
 	return o;
}

function imposeMaxLength(Object, MaxLen)
{
  return (Object.value.length <= MaxLen);
}

/*Chapi, casos no definidos de funciones*/
if(typeof(createCookie)=='undefined'){
	createCookie=function(){};
}

function reducirTxt(){
        tmn=parseInt((parseFloat(document.getElementsByTagName("body")[0].style.fontSize)*100)-6)/100;
        if(tmn>0.44){
                document.getElementsByTagName("body")[0].style.fontSize = tmn + "em";
                /* redimensionamos los elementos de cabecera  */
                rcctmn(tmn);				

				if(descargarCookiesHabilitado() == true) 
				{
					cookies.setCookie("bsll_size", document.getElementsByTagName("body")[0].style.fontSize, 7);
				}
        }
}


function aumentarTxt(){
        tmn=parseInt((parseFloat(document.getElementsByTagName("body")[0].style.fontSize)*100)+6)/100;
        if(tmn<0.79){
                document.getElementsByTagName("body")[0].style.fontSize = tmn + "em";
                /* redimensionamos los elementos de cabecera  */
                rcctmn(tmn);

				if(descargarCookiesHabilitado() == true) 
				{
					cookies.setCookie("bsll_size", document.getElementsByTagName("body")[0].style.fontSize, 7);
				}
        }

}

function openTexto(idgbstexto){
	window.open('/cs/Satellite?c=GBS_Texto&cid='+idgbstexto+'&pagename=SabAtl%2FGBS_Texto%2FGBS_popupCondiciones&title=Condiciones','condicionesLegales', 'width=600,height=400,scrollbars=yes,menubar=yes');
	void(0);
}

function openTextoPRE(idgbstexto){
	window.open('/cspre/Satellite?c=GBS_Texto&cid='+idgbstexto+'&pagename=SabAtl%2FGBS_Texto%2FGBS_popupCondiciones&title=Condiciones','condicionesLegales', 'width=600,height=400,scrollbars=yes,menubar=yes');
	void(0);
}

function lopdcommonsjs(idgbstexto, idiomagbstexto, portalgbstextoid){
	var portalgbstexto = "SabAtl";
	if  (portalgbstextoid==1) portalgbstexto = "SabAtl";
	else if (portalgbstextoid==2) portalgbstexto = "BancoHerrero";
	else if (portalgbstextoid==3) portalgbstexto = "BC";
	window.open('/cs/Satellite?c=GBS_Texto&cid='+idgbstexto+'&language='+idiomagbstexto+'&pagename='+portalgbstexto+'%2FGBS_Texto%2FGBS_popupCondiciones&title=Condiciones','condicionesLegales', 'width=600,height=400,scrollbars=yes,menubar=yes');
	void(0);
}

function openlopinstantcardandcas(){
	window.open('https://www.bsandorra.com/cs/Satellite?c=GBS_Texto&cid=2000006419658&language=1178258082822&pagename=BSAndorra%2FGBS_Texto%2FGBS_popupCondiciones&title=Consulte+las+condiciones+legales+de+esta+solicitud','condicionesLegales', 'width=600,height=400,scrollbars=yes,menubar=yes');void(0);
}
function openlopinstantcardandcat(){
	window.open('https://www.bsandorra.com/cs/Satellite?c=GBS_Texto&cid=2000006419658&language=1183015603985&pagename=BSAndorra%2FGBS_Texto%2FGBS_popupCondiciones&title=Consulte+las+condiciones+legales+de+esta+solicitud','condicionesLegales', 'width=600,height=400,scrollbars=yes,menubar=yes');void(0);
}
function openlopinstantcardandfr(){
	window.open('https://www.bsandorra.com/cs/Satellite?c=GBS_Texto&cid=2000006419658&language=1183016450079&pagename=BSAndorra%2FGBS_Texto%2FGBS_popupCondiciones&title=Consulte+las+condiciones+legales+de+esta+solicitud','condicionesLegales', 'width=600,height=400,scrollbars=yes,menubar=yes');void(0);
}
function openlopinstantcardanden(){
	window.open('https://www.bsandorra.com/cs/Satellite?c=GBS_Texto&cid=2000006419658&language=1178258082826&pagename=BSAndorra%2FGBS_Texto%2FGBS_popupCondiciones&title=Consulte+las+condiciones+legales+de+esta+solicitud','condicionesLegales', 'width=600,height=400,scrollbars=yes,menubar=yes');void(0);
}

function openlopinstantcardcas(){
	window.open('https://www.bancsabadell.com/cs/Satellite?c=GBS_Texto&cid=1191438038985&language=1178258082822&pagename=SabAtl%2FGBS_Texto%2FGBS_popupCondiciones&title=Consulte+las+condiciones+legales+de+esta+solicitud','condicionesLegales', 'width=600,height=400,scrollbars=yes,menubar=yes');void(0);
}
function openlopinstantcardcat(){
	window.open('https://www.bancsabadell.com/cs/Satellite?c=GBS_Texto&cid=1191438039021&language=1183015603985&pagename=SabAtl%2FGBS_Texto%2FGBS_popupCondiciones&title=Consulti+les+condicions+legals+d%C2%B4aquesta+sol%C2%B7licitud','condicionesLegales', 'width=600,height=400,scrollbars=yes,menubar=yes');void(0);
}
function openlopinstantcarden(){
	window.open('https://www.bancsabadell.com/cs/Satellite?c=GBS_Texto&cid=1191438039029&language=1178258082826&pagename=SabAtl%2FGBS_Texto%2FGBS_popupCondiciones&title=Consult+legal+conditions+of+this+application','condicionesLegales', 'width=600,height=400,scrollbars=yes,menubar=yes');void(0);
}

function openlopinstantcardbhcas(){
	window.open('https://www.bancoherrero.com/cs/Satellite?c=GBS_Texto&cid=1191438038985&language=1178258082822&pagename=BancoHerrero%2FGBS_Texto%2FGBS_popupCondiciones&title=Consulte+las+condiciones+legales+de+esta+solicitud','condicionesLegales', 'width=600,height=400,scrollbars=yes,menubar=yes');void(0);
}

function openlopinstantcardbgcas(){
	window.open('https://www.sabadellcam.com/cs/Satellite?c=GBS_Texto&cid=1191438038985&language=1178258082822&pagename=BC%2FGBS_Texto%2FGBS_popupCondiciones&title=Consulte+las+condiciones+legales+de+esta+solicitud','condicionesLegales', 'width=600,height=400,scrollbars=yes,menubar=yes');void(0);
}

function openlopinstantcardbgen(){
	window.open('https://www.sabadellcam.com/cs/Satellite?c=GBS_Texto&cid=1191438039029&language=1178258082826&pagename=BC%2FGBS_Texto%2FGBS_popupCondiciones&title=Consult+legal+conditions+of+this+application','condicionesLegales', 'width=600,height=400,scrollbars=yes,menubar=yes');void(0);
}

function openlopdcas(){
	window.open('/clausuladolopd/','condicionesLegales', 'width=600,height=400,scrollbars=yes,menubar=yes');void(0);
}

function openlopdcasactivo(){
	window.open('https://www.activobank.com/cs/Satellite?c=GBS_Texto&cid=1183017542638&language=1178258082822&pagename=ActivoBank%2FGBS_Texto%2FGBS_popupCondiciones&title=Consulte+las+condiciones+legales+de+esta+solicitud','condicionesLegales','width=600,height=400,scrollbars=yes,menubar=yes');void(0);
}

function openlopdcat(){
	window.open('/clausulatlopd/','condicionesLegales', 'width=600,height=400,scrollbars=yes,menubar=yes');void(0);
}

function openlopdeng(){
	window.open('/clauselopd/','condicionesLegales', 'width=600,height=400,scrollbars=yes,menubar=yes');void(0);
}

function openlopdfra(){
	window.open('/clauselopdfr/','condicionesLegales', 'width=600,height=400,scrollbars=yes,menubar=yes');void(0);
}
function openlopdcasf(){
	window.open('https://www.bansabadellfincom.com/cs/Satellite?c=GBS_Texto&cid=1191431009993&language=1178258082822&pagename=BSFincom/GBS_Texto/GBS_popupCondiciones&title=Consulte+las+condiciones+legales+de+esta+solicitud','condicionesLegales', 'width=600,height=400,scrollbars=yes,menubar=yes');void(0);
}

function openlopdcaspr(){
        window.open('/clausuladolopdpr/','condicionesLegales', 'width=600,height=400,scrollbars=yes,menubar=yes');void(0);
}

function openlopdcatpr(){
        window.open('/clausulatlopdpr/','condicionesLegales', 'width=600,height=400,scrollbars=yes,menubar=yes');void(0);
}

function openlopdengpr(){
        window.open('/clauselopdpr/','condicionesLegales', 'width=600,height=400,scrollbars=yes,menubar=yes');void(0);
}

function openlopdfrapr(){
        window.open('/clauselopdfrpr/','condicionesLegales', 'width=600,height=400,scrollbars=yes,menubar=yes');void(0);
}

function openlopdcasct(){
        window.open('/clausuladolopdct/','condicionesLegales', 'width=600,height=400,scrollbars=yes,menubar=yes');void(0);
}
function openlopdcatct(){
        window.open('/clausulatlopdct/','condicionesLegales', 'width=600,height=400,scrollbars=yes,menubar=yes');void(0);
}

/* Condiciones formulario prescripcion inmobilidaria */
function openlopdcasinmo(){
	window.open('/clausuladolopdinmo/','condicionesLegales', 'width=600,height=400,scrollbars=yes,menubar=yes');void(0);
}
function openlopdcatinmo(){
	window.open('/clausulatlopdinmo/','condicionesLegales', 'width=600,height=400,scrollbars=yes,menubar=yes');void(0);
}
function openlopdenginmo(){
	window.open('/clauselopdinmo/','condicionesLegales', 'width=600,height=400,scrollbars=yes,menubar=yes');void(0);
}

/* Condiciones formulario disposicion linea expansion */
function openlopdcasdisp(){
	window.open('/cs/Satellite?c=GBS_Texto&cid=1191358495497&language=1178258082822&pagename=SabAtl%2FGBS_Texto%2FGBS_popupCondiciones&title=Consulte+las+condiciones+legales+de+esta+solicitud','condicionesLegales', 'width=600,height=400,scrollbars=yes,menubar=yes');void(0);
}
function openlopdcatdisp(){
	window.open('/cs/Satellite?c=GBS_Texto&cid=1191358495628&language=1183015603985&pagename=SabAtl%2FGBS_Texto%2FGBS_popupCondiciones&title=Consulti+les+condicions+legals+d%C2%B4aquesta+sol%C2%B7licitud','condicionesLegales', 'width=600,height=400,scrollbars=yes,menubar=yes');void(0);
}
function openlopdengdisp(){
	window.open('/cs/Satellite?c=GBS_Texto&cid=1191358495755&language=1178258082826&pagename=SabAtl%2FGBS_Texto%2FGBS_popupCondiciones&title=Consult+legal+conditions+of+this+application','condicionesLegales', 'width=600,height=400,scrollbars=yes,menubar=yes');void(0);
}
	
/*Condiciones formulario Banca Personal*/
function openlopdbpes(){
window.open('/cs/Satellite?c=GBS_Texto&cid=2000010501983&pagename=SabAtl%2FGBS_Texto%2FGBS_popupCondiciones&title=Condiciones','condicionesLegales', 'width=600,height=400,scrollbars=yes,menubar=yes');void(0);
}

function openlopdbpca(){
window.open('/cs/Satellite?c=GBS_Texto&cid=2000010535078&pagename=SabAtl%2FGBS_Texto%2FGBS_popupCondiciones&title=Condiciones','condicionesLegales', 'width=600,height=400,scrollbars=yes,menubar=yes');void(0);
}

function openlopdbpva(){
window.open('/cs/Satellite?c=GBS_Texto&cid=2000010535102&pagename=SabAtl%2FGBS_Texto%2FGBS_popupCondiciones&title=Condiciones','condicionesLegales', 'width=600,height=400,scrollbars=yes,menubar=yes');void(0);
}

function openlopdbpen(){
window.open('/cs/Satellite?c=GBS_Texto&cid=2000010535122&pagename=SabAtl%2FGBS_Texto%2FGBS_popupCondiciones&title=Condiciones','condicionesLegales', 'width=600,height=400,scrollbars=yes,menubar=yes');void(0);
}

function obpde(){
window.open('/cs/Satellite?c=GBS_Texto&cid=2000010535115&pagename=SabAtl%2FGBS_Texto%2FGBS_popupCondiciones&title=Condiciones','condicionesLegales', 'width=600,height=400,scrollbars=yes,menubar=yes');void(0);
}

function openlopdbpfr(){
window.open('/cs/Satellite?c=GBS_Texto&cid=2000010535129&pagename=SabAtl%2FGBS_Texto%2FGBS_popupCondiciones&title=Condiciones','condicionesLegales', 'width=600,height=400,scrollbars=yes,menubar=yes');void(0);
}
function openlopdbpeu(){
window.open('/cs/Satellite?c=GBS_Texto&cid=2000010535156&pagename=SabAtl%2FGBS_Texto%2FGBS_popupCondiciones&title=Condiciones','condicionesLegales', 'width=600,height=400,scrollbars=yes,menubar=yes');void(0);
}

function creaCookieSesion(name, value) { 
  var expires = "";
  document.cookie = name+"="+escape(value)+expires+"; path=/";
}

function marcarEnlace(id){	
	if(document.getElementById(id)!=null){
		document.getElementById(id).style.textDecoration="underline";
	}
}

function desmarcarEnlace(id){
	if(document.getElementById(id)!=null){
		document.getElementById(id).style.textDecoration="none";
	}
}
function crearCapaQgo(){
	var c='<div id="d2QGO" style="position:absolute;top:0px;width:517px"><iframe style="position:absolute;top:0px;width:517px;filter:alpha(opacity=0);opacity:0"></iframe>'+
	' <div class="sombra">'+
	' <div class="a"></div>'+
	' <div id="c"></div>'+
	' <div class="d"></div>'+
	' </div>'+
	' <div class="cuerpo">'+
	' <div class="barra"><span class="cerrar" onclick="acrr(this)">X</span>'+((typeof(ayudaQgo)!='undefined')?ayudaQgo:'ayuda')+'</div>'+
	' <div class="centro" id="med">'+
	' <div id="d3"></div>'+
	' <div class="continf">'+
	' <input type="button" value="'+((typeof(cerrarQgo)!='undefined')?cerrarQgo:'cerrar')+'" onclick="acrr(this.parentNode)" />'+
	' </div>'+
	' </div>'+
	' <div class="bajo"></div>'+
	' </div>'+
	'</div>'+
	'</div>';
	mybody=document.getElementsByTagName("body")[0];
	cpIni=document.createElement("div");
	cpIni.setAttribute("id","d0");
	cpIni.style.visibility="hidden";
	cpIni.innerHTML=c;
	mybody.appendChild(cpIni);
	/*if(document.getElementById("lnkqgo")){
		if(document.all){
		document.getElementById("lnkqgo").onclick=function(){mostrar(event,qGo.strToquery())}
		}
		else{
		document.getElementById("lnkqgo").onclick=function(event){mostrar(event,qGo.strToquery())}
		}
	document.getElementById("lnkqgo").href="javascript:void(0)"	
	}
	*/
}

//Funcion javascript para BSMiami, para mostrar un alert al intentar acceder a una URL externa al portal
function LinkOut(url,lang) {
    var message_ES = 'Al hacer clic en OK, va a dejar BancoSabadellMiami.com y navegar a un sitio que no es controlado por BancoSabadell Miami.';
    var message_EN = 'By clicking OK below, you will be leaving BancoSabadellMiami.com and navigating to a site not controlled by BancoSabadell Miami.';
    var message = message_ES;
    if (lang=="en") {
        message = message_EN;
    }
    if (confirm(message)) {
        window.open(url);
    }
}

function handle_json_chat_commons(nombreCompleto,dni,urlChat,idiomaChat,json_data,cat) {
        var the_object = JSON.parse(json_data);
        try{
                var nombre = the_object[0].name;
                if(nombre!=undefined) nombreCompleto = nombre;
        }catch(err){}

        try{
                var apellido1=the_object[0].lastname;
                if(apellido1!=undefined) nombreCompleto += " " + apellido1;
        }catch(err){}

        try{
                var apellido2=the_object[0].secondLastname;
                if(apellido2!=undefined) nombreCompleto += " " + apellido2;
        }catch(err){}

        try{
                var numdoc=the_object[0].id.value;
                if(numdoc!=undefined) dni = numdoc;
        }catch(err){}

        nombreCompleto = nombreCompleto.replace(/\?/g, ".");
        nombreCompleto = nombreCompleto.replace(/\&/g, ".");

        var linkChat = urlChat + "&lang=" + idiomaChat;
        var urlDefinitivaChat = linkChat + "&cob=1" + "&cat=" + cat + "&ref=" + nombreCompleto + "&ref2=" + dni;

        window.open(urlDefinitivaChat);

}


function handle_json_chat_WIM_commons(json_data,urlChat,entryPointId,templateName,idiomaChat,countryCode,nombreCompleto,dni,site,formOrigen,idioma,estado,tipoChat,esCliente) {
        var the_object = JSON.parse(json_data);
        try{
                var nombre = the_object[0].name;
                if(nombre!=undefined) nombreCompleto = nombre;
        }catch(err){}

        try{
                var apellido1=the_object[0].lastname;
                if(apellido1!=undefined) nombreCompleto += " " + apellido1;
        }catch(err){}

        try{
                var apellido2=the_object[0].secondLastname;
                if(apellido2!=undefined) nombreCompleto += " " + apellido2;
        }catch(err){}

        try{
                var numdoc=the_object[0].id.value;;
                if(numdoc!=undefined) dni = numdoc;
        }catch(err){}

        try{
                var numpers=the_object[0].numPers;
        }catch(err){}

        try{
                var email=the_object[0].eMail;
                if(email=="") email = numpers;

        }catch(err){}

        nombreCompleto = nombreCompleto.replace(/\?/g, ".");
        nombreCompleto = nombreCompleto.replace(/\&/g, ".");

	if (nombreCompleto != null) nombreCompleto = nombreCompleto.substring(0, 120);
	if (email != null) email = email.substring(0, 250);
	if (dni != null) dni = dni.substring(0, 9);
	if (numpers != null) numpers = numpers.substring(0, 25);
	if (site != null) site = site.substring(0, 20);
	if (formOrigen != null) formOrigen = formOrigen.substring(0, 24);
	if (idioma != null) idioma = idioma.substring(0, 8);
	if (estado != null) estado = estado.substring(0, 25);

        var linkChat = urlChat + "?ver=v11&refererName=BS&entryPointId=" + entryPointId + "&templateName=" + templateName + "&languageCode=" + idiomaChat + "&countryCode=" + countryCode;
        var urlDefinitivaChat = linkChat + "&fieldname_1=" + nombreCompleto + "&fieldname_2=" + email + "&fieldname_3=" + dni + "&fieldname_4=" + numpers + "&fieldname_6=" + site + "&fieldname_7=" + formOrigen + "&fieldname_8=" + idioma + "&fieldname_9=" + estado + "&fieldname_10=" + tipoChat + "&fieldname_11=" + esCliente;

        window.open(urlDefinitivaChat);
}

//Recuperamos los datos de las empresas de la response
function leerEmpresas(request){
	try{
		var xmlEmpresas = request.responseXML;
		//Se inicializa el desplegable de empresas
		if(document.getElementById("comboEmpresas")!=null){
			var comboEmpresas = document.getElementById("comboEmpresas");
			comboEmpresas.options.length = 0;
		}
		
		if(xmlEmpresas!=null){
				
				var nifEmpresa = "";
				var listaHTML = "";
				var lstCampos ="";
				var nombreEmpresa = "";
				var lstEmpresas = xmlEmpresas.documentElement.getElementsByTagName("empresa");
				var campo="";
				
				if(lstEmpresas.length==0){
					errorRecuperarSE();
					return;
				}
				
				if(lstEmpresas.length>1){
					//Si el cliente gestiona mas de una empresa se pintara el selector de empresas
					for(var i = 0; i!=lstEmpresas.length; i++){
						lstCampos = lstEmpresas[i].childNodes;	
						for(var x = 0; x!=lstCampos.length; x++){
							campo = lstCampos[x].nodeName;
							if(campo.indexOf("identifier") !=-1){
								nifEmpresa = lstCampos[x].firstChild.nodeValue;
							}else if(campo.search("name") != -1){
								if(document.getElementById("comboEmpresas")!=null){
									nombreEmpresa = lstCampos[x].firstChild.nodeValue;
									//listaHTML += "<option style='font-size:1em' name="+nifEmpresa+" id="+nifEmpresa+">" + nombreEmpresa + "</option>";
									var option = new Option(nombreEmpresa,nifEmpresa);
									option.setAttribute("id",nifEmpresa);
									option.setAttribute("style","font-size:1em");
									var s = document.getElementById("comboEmpresas");
									s.options[s.options.length] = option;
								}
							}
						}
					}
				
					//Pintamos la informacion dentro del div
					//if(document.getElementById("comboEmpresas")!=null){
						//if(listaHTML != ""){
							//jQuery("#comboEmpresas").html(listaHTML);
							//document.getElementById("comboEmpresas").innerHTML = listaHTML;
							
						//}
					//}
					
					//Controlar la visibilidad de los bloques dentro del modulo
					if(document.getElementById("selectorEmpresas")!=null){
						if(document.getElementById("selectorEmpresas").style.display=='none'){
							document.getElementById("cargandoSE").style.display='none';
							document.getElementById("selectorEmpresas").style.display='block';
						}
					}
					
				}else{
					//Si el cliente gestiona una unica empresa directamente el enlace mostrara la capa de sus especialistas
					lstCampos = lstEmpresas[0].childNodes;
					for(var y = 0; y!=lstCampos.length; y++){
						campo = lstCampos[y].nodeName;
						if(campo.indexOf("identifier") !=-1){
							nifEmpresa = lstCampos[y].firstChild.nodeValue;
						}
					}
					
					//Hacemos la llamada al servicio que recupera los datos del especialista
					var servicioEspecialista = "%3Fpagename%3DGrupoBS%2FGBS_Especialistas%2FservicioEspecialistasEmp%26nifEmpresa%3D"+nifEmpresa+"%26sessionId%3D" + sessionId +"%26cdsIp%3D"+cdsIp+"%26serverName%3D"+serverName;							
					var urlSolicitudEsp = entorno + decodeURIComponent(servicioEspecialista);			
					sendRequestSE(urlSolicitudEsp,recuperarSE);
				}
			}
	}catch(err){
		//Pintar mensaje de error
		errorRecuperarSE();
	}
}

function randomString(string_length) {
	var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ";
	var randomstring = '';
	for (var i=0; i<string_length; i++) {
		var rnum = Math.floor(Math.random() * chars.length);
		randomstring += chars.substring(rnum,rnum+1);
	}
	return randomstring;
}


function setJSESSIONID_JBSWL(){
	var cookieName = "JSESSIONID";
	var time = new Date().getTime();
	var valueIdSession = "";
	var valueCookie = "";
	
	var cookiesArray = document.cookie.split(";");
	for(var i = 0; i<cookiesArray.length; i++){
		if(cookiesArray[i].indexOf("JSESSIONID=")!=-1){
			valueJsessionid = cookiesArray[i];
			valueJsessionidArray = valueJsessionid.split("JSESSIONID=");
			if(typeof(valueJsessionidArray[1])!='undefined'){
				valueIdSession = valueJsessionidArray[1];
			}
		}
	}
	if (valueIdSession==""){
		valueCookie = randomString(24) + time;
	} else {
		valueCookie = valueIdSession.substring(0,24) + time;
	}
	var c_value = escape(valueCookie) + ";path=/";
	document.cookie = "JSESSIONID_JBSWL" + "=" + c_value;
}


function getJSESSIONID_JBSWL(){
	var valorCookie = cookies.getCookie("JSESSIONID_JBSWL");
	if (valorCookie==null || valorCookie=="") {
		setJSESSIONID_JBSWL();
		valorCookie = cookies.getCookie("JSESSIONID_JBSWL");
	}
	return valorCookie;
}


function activaAlertasCabecera(msgVal,opVal,docVal) {
        
	var segmento = getCookie("segmento");
	if(typeof(sitio) != "undefined"){
		if(sitio != "SabAtl"){
			if(msgVal!="0" || opVal!="0" || docVal!="0"){
		        if(document.getElementById("campana") !=null){
					document.getElementById("campana").src = "/StaticFiles/"+sitio+"/img/envelope.png";
				}
            }
		}
    }

    if(msgVal!="0"){
		if(document.getElementById("msg")!=null){
			if(document.getElementById("msg").style.display=="none"){
					document.getElementById("msg").style.display = "block";
			}
		}

                if(document.getElementById("mail")!=null){
                        if(document.getElementById("mail").style.display=="none"){
                                        document.getElementById("mail").style.display = "block";
                        }
                }
	}

	if(opVal!="0"){
		if(document.getElementById("op")!=null){
			if(document.getElementById("op").style.display=="none"){
					document.getElementById("op").style.display = "block";
			}
		}
	}

    if(docVal!="0"){
		if(document.getElementById("doc")!=null){
				if(document.getElementById("doc").style.display=="none"){
						document.getElementById("doc").style.display = "block";
				}
		}
		
		if(typeof(sitio) != "undefined"){
			if(sitio == "SabAtl"){
				if(document.getElementById("campana") != null){
					document.getElementById("campana").src = "/StaticFiles/SabAtl/img/lapiz.png";
				}
				if(document.getElementById("campana2") != null){
					document.getElementById("campana2").src = "/StaticFiles/SabAtl/img/i_firmas_pendientes.png";
					showMenuFirmas(docVal);
				}
			} 
		}else {
			if(document.getElementById("campana") != null){
				document.getElementById("campana").src = "/StaticFiles/SabAtl/img/lapiz.png";
			}
			if(document.getElementById("campana2") != null){
				document.getElementById("campana2").src = "/StaticFiles/SabAtl/img/i_firmas_pendientes.png";
				showMenuFirmas(docVal);
			}
		}	
    }
}

//Función que muestra el menú de firmas pendientes en las páginas de inicio y cambio de idioma del transaccional
function showMenuFirmas(docVal){
	if(jQuery('#campana2').css("visibility") != "hidden"){
		var operativaName = window.location.pathname.split("/")[2];
		if(operativaName == "LoginDNI.doLogin.bs" || operativaName == "ChangeLocale.init.bs" || operativaName == "start.doLogin.bs" || operativaName == "start.initLoginDNI.bs"){
			if(document.getElementById('menuFirmas') != null){
				jQuery('#menuFirmas').slideDown("slow");
			}else{				
				controlLlamadaFirma = true;
				sendRequest("/" + rutaTx + "HeaderDocsQueryServlet?numResults=3&signType=D&numPendingDocs="+docVal,obtenerDatos);
				jQuery('#menuFirmas').slideDown("slow");
			}
		}
	}
}

function hideMenuFirmas(){
	jQuery("#menuFirmas").slideUp("up");
}

//Funcion que se llama cuando se actualiza la cookie SA_Alert para actualizar el icono del lapiz.
function uploadPen() {
	var coockie = getCookie("SA_Alert");
	var docVal = "0";
        if(coockie != ""){
                docVal = coockie.split("_")[2];
        }
        if(docVal == "0"){
                document.getElementById("campana").src = "/StaticFiles/SabAtl/img/lapiz2.png";
		document.getElementById("campana2").src = "/StaticFiles/SabAtl/img/i_firmas.png";
        }else{
		document.getElementById("campana").src = "/StaticFiles/SabAtl/img/lapiz.png";
		document.getElementById("campana2").src = "/StaticFiles/SabAtl/img/i_firmas_pendientes.png";
        }
}


function getAccountsEmpCCF(req){
	try{
		var json_data = req.responseText;
		var numeroCuentas = 1;
		if(json_data!="") {
			var reqResponse = JSON.parse(json_data); 
		   	numeroCuentas = reqResponse[0].numberAccounts;
		}
		if(readCookie("BSOP_PP") !== null && numeroCuentas >= 0 && numeroCuentas < 40){
			var bsopValue = readCookie("BSOP_PP");
			if(bsopValue.indexOf(controlCenterPorcentaje) !== -1){
				bsopValue = bsopValue + "|BSOEMP_MENOS40CUENTAS";
				setUnescapeCookie("BSOP_PP", bsopValue, 1);
			}
		}

		

	}catch(err){
		console.log(err);
	} finally{
		ejecutarPilotajeGlobal();
	}
}

//Recupera la llamada AJAX de la LoginFW.getInfo.bs para obtener los mensajes, operaciones y documentos pendientes
function getPendingMessagesAJAXResponse(request) {
	try{
		var json_data = request.responseText;
		if(json_data!="") {
			var the_object = JSON.parse(json_data);
			numMessages = the_object[0].pendingMessages;
			numOperations = the_object[0].pendingOpersSigns;
			numFiles = the_object[0].pendingMessagesNumber;
			updateDNI = the_object[0].targetCustomer;	
			navEnrollment = the_object[0].navigatorEnrollment;		
		}

		var expdate = "";
        if (numMessages==null || numMessages=="")
                numMessages = 0;
        if (numOperations==null || numOperations=="")
                numOperations = 0;
        if (numFiles==null || numFiles=="")
                numFiles=0;

		if (updateDNI==null || updateDNI=="")
				updateDNI=0;
					
	}catch(err){
		numMessages = 0;
		numOperations = 0;
		numFiles=0;
		updateDNI=0;	  
	}
    
	SetCookie("SA_Alert", numMessages+"_"+numOperations+"_"+numFiles, expdate, "/");							  

    activaAlertasCabecera(numMessages.toString(),numOperations.toString(),numFiles.toString());
	
	if(navEnrollment != null){
		if(navEnrollment == "S"){
			initCountdownAlert("alert-fixed-ok");
		}else if(navEnrollment == "N"){
			initCountdownAlert("alert-fixed-ko");
		}
	}

        if(document.location.href.indexOf("/txbs/")!=-1){
		if (segmento.substring(0,1) == "P"){
			if (updateDNI == 1) {
				SetCookie("BSOP_FW", "FW_ACTUALIZA_DNI");	
			} else {
                                SetCookie("BSOP_FW", "");
			}				  
		} 
	}
}

function updateDeviceTokenCookie(ipCliente){
	if(!ipCliente) return;
	
    var res = ipCliente.split(",");
	if(res[0] == null) return;
	
	var nombreCookie = "DeviceTokenCookie";
	var valorCookie = getCookie(nombreCookie);
	var expiracionCookie = 1825; //en dias, 365*5
	
	var array_Cookie = "";
	if (valorCookie) {
		array_Cookie = valorCookie.split(".");
		if (array_Cookie.length < 5) return;
	}

	if(!valorCookie || valorCookie.indexOf(",")!=-1 || array_Cookie[4].length < 3){
		//workaround ie8
		if (!Date.now) {
			Date.now = function() { return new Date().getTime(); }
		}
		valorCookie = res[0]+'.'+Date.now();
	}
	setCookie(nombreCookie,valorCookie,expiracionCookie);
}


if (typeof setCookie != 'function') {
	setCookie = function(c_name,value,exdays){
		var exdate = new Date();
		exdate.setDate(exdate.getDate() + exdays);
		var c_value = escape(value) + ((exdays==null) ? ";path=/" : "; expires=" + exdate.toUTCString() + ";path=/");
		document.cookie = c_name + "=" + c_value;
	}
}

if (typeof setUnescapeCookie != 'function') {
	setUnescapeCookie = function(c_name,value,exdays){
		var exdate = new Date();
		exdate.setDate(exdate.getDate() + exdays);
		var c_value = value + ((exdays==null) ? ";path=/" : "; expires=" + exdate.toUTCString() + ";path=/");
		document.cookie = c_name + "=" + c_value;
	}
}

if (typeof getCookie != 'function') {
	getCookie = function(c_name) {
		var c_value = document.cookie;
		var c_start = c_value.indexOf(" " + c_name + "=");
		if (c_start == -1) c_start = c_value.indexOf(c_name + "=");
		
		if (c_start == -1) {
			c_value = null;
		} else {
			c_start = c_value.indexOf("=", c_start) + 1;
			var c_end = c_value.indexOf(";", c_start);
			if (c_end == -1) c_end = c_value.length;
			c_value = unescape(c_value.substring(c_start,c_end));
		}
		return c_value;
	}
}

function importAccipiter() {
	var cookieBSPersonalizacion = decodeURI(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURI("BSPersonalizacion").replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
	if(cookieBSPersonalizacion != null) ad1 += '/PERSONALITZACIO=' + cookieBSPersonalizacion;
	
	document.write('<scr' + 'ipt sr'+'c="' + adserver + ad1 +'" type="text/javascript" language="javascript">');
	document.write('<\/scr' + 'ipt>');
	
	function reinclude(){
		
		document.write('<scr' + 'ipt sr'+'c="/StaticFiles/GrupoBS/js/escribeaci.js" type="text/javascript" language="javascript">');
		document.write('<\/scr' + 'ipt>');
	}
	reinclude();
}

//Funciones javascript de traspaso de sesion para BSO+
function doSessionTransfer_BSOPlus (operativa,aplicacion,opAplicExt,site,segmento,usaActiveSpace,prefijoRutaTx,lang)
{
	operativaRedir = operativa;
	contextAplic = aplicacion;
	operAplicExterna = opAplicExt;
	siteAplicExterna = site;
	segmentAplicExterna = segmento;
	var randomNumber = Math.random();
	prefijoRutaTransaccional = prefijoRutaTx;
	idioma = lang;
	if (usaActiveSpace == "si") {
		operativaJson = "LoginFW.getInfoAS.bs";
		loginType = "as_session";
		varJson = "sessionId";
	} else {
		operativaJson = "LoginFW.getInfo3.bs";
		loginType = "rowid";
		varJson = "datalogin";
	}	
	sendRequest('/' + prefijoRutaTransaccional + operativaJson + '?key=' + randomNumber,handle_json_SessionTransfer_BSOPlus);
}


function handle_json_SessionTransfer_BSOPlus (request)
{
	var json_data = jQuery.trim(request.responseText);
	if(json_data!="") {
		try{
			var json_parsed = JSON.parse(json_data);
			solicitaOperativa_BSOPlus(json_data, idioma);
		} catch(exception) {
			window.location = '/' + prefijoRutaTransaccional + 'ChangeLocale.init.bs';
		}
	} else {
		window.location = '/' + prefijoRutaTransaccional + 'ChangeLocale.init.bs';
	}
}


function solicitaOperativa_BSOPlus (json_data,locale)
{
	var lugarFormDin = document.getElementById("lugarFormDin");
	lugarFormDin.innerHTML='';
	var formDinamico = document.createElement("form");
	formDinamico.setAttribute("action",contextAplic);
	formDinamico.setAttribute("method","post");
	formDinamico.setAttribute("accept-charset","UTF-8");

	//Comprobamos si estamos en Operativa Maestra a partir de un valor que nos llega en el json_data
	var isOM = 0;
	if(json_data.indexOf("\"IOM\"")!=-1) {
		isOM = 1;
	}

	var inputTextjson_data = document.createElement("input");
	inputTextjson_data.setAttribute("id",varJson);
	inputTextjson_data.setAttribute("name",varJson);
	inputTextjson_data.setAttribute("type","text");
	inputTextjson_data.value = json_data;

	var inputTextLanguage = document.createElement("input");
	inputTextLanguage.setAttribute("id","language");
	inputTextLanguage.setAttribute("name","language");
	inputTextLanguage.setAttribute("type","text");
	inputTextLanguage.value = locale;

	var inputTextMarca = document.createElement("input");
	inputTextMarca.setAttribute("id","marca");
	inputTextMarca.setAttribute("name","marca");
	inputTextMarca.setAttribute("type","text");
	inputTextMarca.value = siteAplicExterna;

	var inputTextSegment = document.createElement("input");
	inputTextSegment.setAttribute("id","segment");
	inputTextSegment.setAttribute("name","segment");
	inputTextSegment.setAttribute("type","text");
	inputTextSegment.value = segmentAplicExterna;

	var inputTextLoginType = document.createElement("input");
	inputTextLoginType.setAttribute("id","loginType");
	inputTextLoginType.setAttribute("name","loginType");
	inputTextLoginType.setAttribute("type","text");
	inputTextLoginType.value = loginType;

	var inputTextIDMenu = document.createElement("input");
	inputTextIDMenu.setAttribute("id","idmenu");
	inputTextIDMenu.setAttribute("name","idmenu");
	inputTextIDMenu.setAttribute("type","text");
	inputTextIDMenu.value = operativaRedir.substring(1);

	//Se calcula la variable portal (por defecto es bs)
	var portal = "bs";
	var urlActual = document.location.href;
	if (isOM==1) {
		portal = "opm";
	} else if ((urlActual.indexOf("gosccenter.bancsabadell.com")!=-1) || (urlActual.indexOf("ccenter.bancsabadell.com")!=-1)) {
		portal = "cc";
	} else if (urlActual.indexOf("ccemp.bancsabadell.com")!=-1) {
		portal = "ccemp";
	} else if (siteAplicExterna == "SabAtl") {
		if (segmentAplicExterna.charAt(0)=='P') {
			portal = "bs";
		} else {
			portal = "bsemp";
		}
	}
	else if (siteAplicExterna == "BC") {
		if (segmentAplicExterna == "Particulares") {
			portal = "cam";
		} else if (segmentAplicExterna == "Empresas") {
			portal = "camemp";
		}
	}
	else if (siteAplicExterna == "SabUbp") {
		portal = "sbp";
	}

	var inputTextPortal = document.createElement("input");
	inputTextPortal.setAttribute("id","portal");
	inputTextPortal.setAttribute("name","portal");
	inputTextPortal.setAttribute("type","text");
	inputTextPortal.value = portal;
	
	var inputTextOperativaId = document.createElement("input");
	inputTextOperativaId.setAttribute("id","operationId");
	inputTextOperativaId.setAttribute("name","operationId");
	inputTextOperativaId.setAttribute("type","text");
	inputTextOperativaId.value = operAplicExterna;

	var inputTextAccesoInterno = document.createElement("input");
        inputTextAccesoInterno.setAttribute("id","accesoInterno");
        inputTextAccesoInterno.setAttribute("name","accesoInterno");
        inputTextAccesoInterno.setAttribute("type","text");
        inputTextAccesoInterno.value = accesoInterno;

	var inputTextTipoCabeceraAMostrar = document.createElement("input");
        inputTextTipoCabeceraAMostrar.setAttribute("id","tipoCabeceraAMostrar");
        inputTextTipoCabeceraAMostrar.setAttribute("name","tipoCabeceraAMostrar");
        inputTextTipoCabeceraAMostrar.setAttribute("type","text");
        inputTextTipoCabeceraAMostrar.value = tipoCabeceraAMostrar;

	formDinamico.appendChild(inputTextjson_data);
	formDinamico.appendChild(inputTextLanguage);
	formDinamico.appendChild(inputTextMarca);
	formDinamico.appendChild(inputTextSegment);
	formDinamico.appendChild(inputTextLoginType);
	formDinamico.appendChild(inputTextIDMenu);
	formDinamico.appendChild(inputTextPortal);
	formDinamico.appendChild(inputTextOperativaId);
	formDinamico.appendChild(inputTextAccesoInterno);
        formDinamico.appendChild(inputTextTipoCabeceraAMostrar);

	lugarFormDin.appendChild(formDinamico);
	formDinamico.submit();
}

function detectLanguage() {
	var lang;
	(typeof(navigator.userLanguage) != "undefined") ? lang = navigator.userLanguage :
	lang = "";
	return lang;
}

function validateDeviceTokenCookie() {

	if(typeof(ipCliente) != "undefined"){
		updateDeviceTokenCookie(ipCliente);
		
		var evisionIpClienteElem = document.getElementsByName("evision.deviceTokenCookie");
		var i;
		for (i = 0; i < evisionIpClienteElem.length; i++) {
			evisionIpClienteElem[i].value = getCookie('DeviceTokenCookie');
		}
	}
	
	var evisionCsid = document.getElementsByName("evision.csid");
	var cookieValueJBSWL = getJSESSIONID_JBSWL();
	for (var i = 0; i < evisionCsid.length; i++) {
		evisionCsid[i].value = cookieValueJBSWL; 
	}
}

//INICIO FUNCIONES LOGIN SCA

function callLoadLayout(formname,lang,contexto) {

	if (typeof(formname) != 'undefined' && formname != null){

		$.ajax({
			url: contexto+"LoginDNISCA.loadLayout.bs?language="+lang+"&key="+getKeyRandom(),
			dataType: "html",
			type: "POST",
			success: function(responseLayout){
				if(formname.indexOf('mpres')>-1){
					$("#capaSCAEmp").html(responseLayout);
					$("#capaSCAEmp").css("display", "block");
				}else if(formname.indexOf('New')>-1){
					$("#capaSCAMod").html(responseLayout);
					$("#capaSCAMod").css("display", "block");
				}else{
					$("#capaSCA").html(responseLayout);
					$("#capaSCA").css("display", "block");
				}
				
			},
			error: function(errorLayout){
				// Error al cargar la capa
			},
		});
	}
}

function doActionSCA(formname,id,lang){

	validateDeviceTokenCookie();
		
		for (j = 0; j < document.forms.length; j++)
		  for (i = 0; i < document.forms[j].elements.length; i++)
			if (document.forms[j].elements[i].type == "button")
			  document.forms[j].elements[i].disabled=true;
		

		var keyRandom = getKeyRandom();
		$("form[name='"+formname+"']").attr('action', id+".bs?language="+lang+"&key="+keyRandom);
		$("form[name='"+formname+"']").submit();
}

function checkOTPFW(formname){
	var blocks = document.querySelectorAll('.input-digits');
	var claveSCA = "";
	for(var i=0; i<blocks.length; i++){
		if (!$(blocks[i]).val()) {
			return;
		}
		claveSCA += $(blocks[i]).val();
	}
	
	if (typeof(formname) != 'undefined' && formname != null){
		if(formname.indexOf('mpres')>-1){
			$('#claveSCA').val("");
			$('#claveSCAMod').val("");
		}if(formname.indexOf('New')>-1){
			$('#claveSCAEmp').val("");
			$('#claveSCA').val("");
		}else{
			$('#claveSCAEmp').val("");
			$('#claveSCAMod').val("");
		}
	}
	
	$('#claveSCA').val(claveSCA);
	if(typeof callDoLogin=== 'function') {
		callDoLogin(formname);
	} else if(typeof callDoLoginMod=== 'function') {
		callDoLoginMod(formname);
	}
}

function mostrarLayout() {
	document.getElementById("modal").style.left='0px';
	document.getElementById("modal").style.display="block";
	document.getElementById("modal").style.position="fixed";
}

function ocultarLayout() {

	document.getElementById("modal").style.display="none";
	document.getElementById("modal").style.position="absolute";

	if (typeof(formname) != 'undefined' && formname != null){
		if(formname.indexOf('mpres')>-1){
			$("#capaSCAEmp").html("");
		}else if(formname.indexOf("New")>-1){
			$("#capaSCAMod").html("");
		}else{
			$("#capaSCA").html("");
		}
	}
	$("#indSCA").val("");
	
	for (j = 0; j < document.forms.length; j++)
		for (i = 0; i < document.forms[j].elements.length; i++)
			if (document.forms[j].elements[i].type == "button")
				document.forms[j].elements[i].disabled=false;
}

//FIN FUNCIONES LOGIN SCA

//INICIO FUNCIONES Ejecutar pilotaje
var ejecutarPilotajeGlobal = function(){
    var perfilesUser = getCookie('BSOP_PP') || '';
        
    //Perfiles gestionados en FW
    if (getCookie('BSOP_FW') != "") {
    	if (perfilesUser != "") {
       		perfilesUser += '|';
       	} 
       	perfilesUser += getCookie('BSOP_FW');
    }   
        
    //Comprobamos si estamos navegando por IE
    if(typeof(bowser)=='undefined'){
        !function(e,t){typeof module!="undefined"&&module.exports?module.exports=t():typeof define=="function"&&define.amd?define(t):this[e]=t()}("bowser",function(){function t(t){function n(e){var n=t.match(e);return n&&n.length>1&&n[1]||""}function r(e){var n=t.match(e);return n&&n.length>1&&n[2]||""}var i=n(/(ipod|iphone|ipad)/i).toLowerCase(),s=/like android/i.test(t),o=!s&&/android/i.test(t),u=/CrOS/.test(t),a=n(/edge\/(\d+(\.\d+)?)/i),f=n(/version\/(\d+(\.\d+)?)/i),l=/tablet/i.test(t),c=!l&&/[^-]mobi/i.test(t),h;/opera|opr/i.test(t)?h={name:"Opera",opera:e,version:f||n(/(?:opera|opr)[\s\/](\d+(\.\d+)?)/i)}:/yabrowser/i.test(t)?h={name:"Yandex Browser",yandexbrowser:e,version:f||n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)}:/windows phone/i.test(t)?(h={name:"Windows Phone",windowsphone:e},a?(h.msedge=e,h.version=a):(h.msie=e,h.version=n(/iemobile\/(\d+(\.\d+)?)/i))):/msie|trident/i.test(t)?h={name:"Internet Explorer",msie:e,version:n(/(?:msie |rv:)(\d+(\.\d+)?)/i)}:u?h={name:"Chrome",chromeBook:e,chrome:e,version:n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:/chrome.+? edge/i.test(t)?h={name:"Microsoft Edge",msedge:e,version:a}:/chrome|crios|crmo/i.test(t)?h={name:"Chrome",chrome:e,version:n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:i?(h={name:i=="iphone"?"iPhone":i=="ipad"?"iPad":"iPod"},f&&(h.version=f)):/sailfish/i.test(t)?h={name:"Sailfish",sailfish:e,version:n(/sailfish\s?browser\/(\d+(\.\d+)?)/i)}:/seamonkey\//i.test(t)?h={name:"SeaMonkey",seamonkey:e,version:n(/seamonkey\/(\d+(\.\d+)?)/i)}:/firefox|iceweasel/i.test(t)?(h={name:"Firefox",firefox:e,version:n(/(?:firefox|iceweasel)[ \/](\d+(\.\d+)?)/i)},/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t)&&(h.firefoxos=e)):/silk/i.test(t)?h={name:"Amazon Silk",silk:e,version:n(/silk\/(\d+(\.\d+)?)/i)}:o?h={name:"Android",version:f}:/phantom/i.test(t)?h={name:"PhantomJS",phantom:e,version:n(/phantomjs\/(\d+(\.\d+)?)/i)}:/blackberry|\bbb\d+/i.test(t)||/rim\stablet/i.test(t)?h={name:"BlackBerry",blackberry:e,version:f||n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)}:/(web|hpw)os/i.test(t)?(h={name:"WebOS",webos:e,version:f||n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)},/touchpad\//i.test(t)&&(h.touchpad=e)):/bada/i.test(t)?h={name:"Bada",bada:e,version:n(/dolfin\/(\d+(\.\d+)?)/i)}:/tizen/i.test(t)?h={name:"Tizen",tizen:e,version:n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i)||f}:/safari/i.test(t)?h={name:"Safari",safari:e,version:f}:h={name:n(/^(.*)\/(.*) /),version:r(/^(.*)\/(.*) /)},!h.msedge&&/(apple)?webkit/i.test(t)?(h.name=h.name||"Webkit",h.webkit=e,!h.version&&f&&(h.version=f)):!h.opera&&/gecko\//i.test(t)&&(h.name=h.name||"Gecko",h.gecko=e,h.version=h.version||n(/gecko\/(\d+(\.\d+)?)/i)),!h.msedge&&(o||h.silk)?h.android=e:i&&(h[i]=e,h.ios=e);var p="";h.windowsphone?p=n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i):i?(p=n(/os (\d+([_\s]\d+)*) like mac os x/i),p=p.replace(/[_\s]/g,".")):o?p=n(/android[ \/-](\d+(\.\d+)*)/i):h.webos?p=n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i):h.blackberry?p=n(/rim\stablet\sos\s(\d+(\.\d+)*)/i):h.bada?p=n(/bada\/(\d+(\.\d+)*)/i):h.tizen&&(p=n(/tizen[\/\s](\d+(\.\d+)*)/i)),p&&(h.osversion=p);var d=p.split(".")[0];if(l||i=="ipad"||o&&(d==3||d==4&&!c)||h.silk)h.tablet=e;else if(c||i=="iphone"||i=="ipod"||o||h.blackberry||h.webos||h.bada)h.mobile=e;return h.msedge||h.msie&&h.version>=10||h.yandexbrowser&&h.version>=15||h.chrome&&h.version>=20||h.firefox&&h.version>=20||h.safari&&h.version>=6||h.opera&&h.version>=10||h.ios&&h.osversion&&h.osversion.split(".")[0]>=6||h.blackberry&&h.version>=10.1?h.a=e:h.msie&&h.version<10||h.chrome&&h.version<20||h.firefox&&h.version<20||h.safari&&h.version<6||h.opera&&h.version<10||h.ios&&h.osversion&&h.osversion.split(".")[0]<6?h.c=e:h.x=e,h}var e=!0,n=t(typeof navigator!="undefined"?navigator.userAgent:"");return n.test=function(e){for(var t=0;t<e.length;++t){var r=e[t];if(typeof r=="string"&&r in n)return!0}return!1},n._detect=t,n})
    }
    if (bowser.msie || bowser.msedge) {
        perfilesUser += '|NAV_IE';
        if(typeof(perfilesDesactivarIE)!='undefined') {
            var pIE = perfilesDesactivarIE.split(',');
            for(var i=0;i<pIE.length;i++){
                perfilesUser = perfilesUser.replace(pIE[i],'');
            }
        }
    }
    
    var pU = perfilesUser.split('|');
    for(var i=0;i<pU.length;i++){
        ejecutarPilotajeGlobalPerfil(pU[i]);
    }
};
    
var ejecutarPilotajeGlobalPerfil = function(perfil){
    if(perfil.length > 0){
		var elems = document.querySelectorAll('.mostrar'+perfil);
		for (var i=0; elems.length>i; i++){
			if(elems[i].tagName.toLowerCase() == "a"){
				elems[i].style.display = "block";
				elems[i].parentNode.style.display = "list-item";
			}else if(elems[i].tagName.toLowerCase() == "div"){
				elems[i].style.display = "block";
			}else if(elems[i].tagName.toLowerCase() == "li"){
				if (elems[i].className.indexOf("agrupadorMenu")!=-1) {
					elems[i].style.display = "inline";
				} else {
					elems[i].style.display = "block";
				}
			}else if(elems[i].tagName.toLowerCase() == "td"){
				elems[i].style.display = "table-cell";
			}
		}
		elems = document.querySelectorAll('.ocultar'+perfil);
		for (var i=0; elems.length>i; i++){
			if(elems[i].tagName.toLowerCase() == "a"){
				elems[i].parentNode.style.display = "none";
			}else {
				elems[i].style.display = "none";
			}
		}
	}
};

function getKeyRandom() {
        var sessionId=getCookie("JSESSIONID");
        if (!Date.now) {
                Date.now = function() { return new Date().getTime(); }
        }
        var crypto = window.crypto || window.msCrypto;
        var cryptoValue = "";
        if(typeof(crypto)!='undefined') {
                var randomValuesArray = new Int32Array(1);
                cryptoValue = Math.abs(crypto.getRandomValues(randomValuesArray)[0]);
        } else {
                cryptoValue = randomString(10);
        }
        if (sessionId==null || sessionId==""){
                keyRandom = cryptoValue + Date.now();
        } else {
                keyRandom = sessionId.substring(0,7) + cryptoValue + Date.now();
        }
        return keyRandom;
}
//FIN									
