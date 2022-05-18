/*!
  * Bowser - a browser detector
  * https://github.com/ded/bowser
  * MIT License | (c) Dustin Diaz 2015
  */
!function(e,t){typeof module!="undefined"&&module.exports?module.exports=t():typeof define=="function"&&define.amd?define(t):this[e]=t()}("bowser",function(){function t(t){function n(e){var n=t.match(e);return n&&n.length>1&&n[1]||""}function r(e){var n=t.match(e);return n&&n.length>1&&n[2]||""}var i=n(/(ipod|iphone|ipad)/i).toLowerCase(),s=/like android/i.test(t),o=!s&&/android/i.test(t),u=/CrOS/.test(t),a=n(/edge\/(\d+(\.\d+)?)/i),f=n(/version\/(\d+(\.\d+)?)/i),l=/tablet/i.test(t),c=!l&&/[^-]mobi/i.test(t),h;/opera|opr/i.test(t)?h={name:"Opera",opera:e,version:f||n(/(?:opera|opr)[\s\/](\d+(\.\d+)?)/i)}:/yabrowser/i.test(t)?h={name:"Yandex Browser",yandexbrowser:e,version:f||n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)}:/windows phone/i.test(t)?(h={name:"Windows Phone",windowsphone:e},a?(h.msedge=e,h.version=a):(h.msie=e,h.version=n(/iemobile\/(\d+(\.\d+)?)/i))):/msie|trident/i.test(t)?h={name:"Internet Explorer",msie:e,version:n(/(?:msie |rv:)(\d+(\.\d+)?)/i)}:u?h={name:"Chrome",chromeBook:e,chrome:e,version:n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:/chrome.+? edge/i.test(t)?h={name:"Microsoft Edge",msedge:e,version:a}:/chrome|crios|crmo/i.test(t)?h={name:"Chrome",chrome:e,version:n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:i?(h={name:i=="iphone"?"iPhone":i=="ipad"?"iPad":"iPod"},f&&(h.version=f)):/sailfish/i.test(t)?h={name:"Sailfish",sailfish:e,version:n(/sailfish\s?browser\/(\d+(\.\d+)?)/i)}:/seamonkey\//i.test(t)?h={name:"SeaMonkey",seamonkey:e,version:n(/seamonkey\/(\d+(\.\d+)?)/i)}:/firefox|iceweasel/i.test(t)?(h={name:"Firefox",firefox:e,version:n(/(?:firefox|iceweasel)[ \/](\d+(\.\d+)?)/i)},/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t)&&(h.firefoxos=e)):/silk/i.test(t)?h={name:"Amazon Silk",silk:e,version:n(/silk\/(\d+(\.\d+)?)/i)}:o?h={name:"Android",version:f}:/phantom/i.test(t)?h={name:"PhantomJS",phantom:e,version:n(/phantomjs\/(\d+(\.\d+)?)/i)}:/blackberry|\bbb\d+/i.test(t)||/rim\stablet/i.test(t)?h={name:"BlackBerry",blackberry:e,version:f||n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)}:/(web|hpw)os/i.test(t)?(h={name:"WebOS",webos:e,version:f||n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)},/touchpad\//i.test(t)&&(h.touchpad=e)):/bada/i.test(t)?h={name:"Bada",bada:e,version:n(/dolfin\/(\d+(\.\d+)?)/i)}:/tizen/i.test(t)?h={name:"Tizen",tizen:e,version:n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i)||f}:/safari/i.test(t)?h={name:"Safari",safari:e,version:f}:h={name:n(/^(.*)\/(.*) /),version:r(/^(.*)\/(.*) /)},!h.msedge&&/(apple)?webkit/i.test(t)?(h.name=h.name||"Webkit",h.webkit=e,!h.version&&f&&(h.version=f)):!h.opera&&/gecko\//i.test(t)&&(h.name=h.name||"Gecko",h.gecko=e,h.version=h.version||n(/gecko\/(\d+(\.\d+)?)/i)),!h.msedge&&(o||h.silk)?h.android=e:i&&(h[i]=e,h.ios=e);var p="";h.windowsphone?p=n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i):i?(p=n(/os (\d+([_\s]\d+)*) like mac os x/i),p=p.replace(/[_\s]/g,".")):o?p=n(/android[ \/-](\d+(\.\d+)*)/i):h.webos?p=n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i):h.blackberry?p=n(/rim\stablet\sos\s(\d+(\.\d+)*)/i):h.bada?p=n(/bada\/(\d+(\.\d+)*)/i):h.tizen&&(p=n(/tizen[\/\s](\d+(\.\d+)*)/i)),p&&(h.osversion=p);var d=p.split(".")[0];if(l||i=="ipad"||o&&(d==3||d==4&&!c)||h.silk)h.tablet=e;else if(c||i=="iphone"||i=="ipod"||o||h.blackberry||h.webos||h.bada)h.mobile=e;return h.msedge||h.msie&&h.version>=10||h.yandexbrowser&&h.version>=15||h.chrome&&h.version>=20||h.firefox&&h.version>=20||h.safari&&h.version>=6||h.opera&&h.version>=10||h.ios&&h.osversion&&h.osversion.split(".")[0]>=6||h.blackberry&&h.version>=10.1?h.a=e:h.msie&&h.version<10||h.chrome&&h.version<20||h.firefox&&h.version<20||h.safari&&h.version<6||h.opera&&h.version<10||h.ios&&h.osversion&&h.osversion.split(".")[0]<6?h.c=e:h.x=e,h}var e=!0,n=t(typeof navigator!="undefined"?navigator.userAgent:"");return n.test=function(e){for(var t=0;t<e.length;++t){var r=e[t];if(typeof r=="string"&&r in n)return!0}return!1},n._detect=t,n})



var BS = BS || {};
var yaEjecutado = false;
var esPaginaAccesoLogin = false;
var esTransaccional = false;
var esInformacional = false;
var esNavegadorObsoleto = false;

var idPaginaLogin_SabAtl = "1191332204053";
var idPaginaLoginParticulares_SabAtl = "1191332204474";
var idPaginaLoginEmpresas_SabAtl = "1191332202619";
var idPaginaLoginBancaPrivada_SabAtl = "2000024744202";
var idPaginaLogin_BC = "1191355337777";
var idPaginaLogin_BSAndorra = "2000007769927";
var idPaginaLogin_BSCasablanca = "1191433478175";
var idPaginaLogin_BSParis = "1191428372282";
var idPaginaLogin_BSMiami = "4000002921556";
var idPaginaLogin_BancoSabadellUK = "4000000967185";
var idPaginaLogin_SabUbp = "2000007023174";
var idPaginaLogin_BSMarkets_AccesoClientes = "1191408940915";
var idPaginaLogin_BSMarkets_AccesoNoClientes = "1191408941609";

BS.moduloNavObs = function(){

	var nombreCookieObs = 'MsgObsoleto_leido_SabAtl';
	var vecesMostrarCapaAbierta = 3;

	var urlPaginaBloqueo_SabAtl = "/cs/Satellite/SabAtl/Navegador_Obsoleto/GBS_Generico_FA/2000022702337/1191332198208/";
	var urlPaginaBloqueo_BC = "/cs/Satellite/BC/Navegador_Obsoleto/GBS_Generico_FA/2000022702337/1191355345452/";
	var urlPaginaBloqueo_BSAndorra = "/cs/Satellite/BSAndorra/Navegador_Obsoleto/GBS_Generico_FA/2000022702337/2000006435001/";
	var urlPaginaBloqueo_BSCasablanca = "/cs/Satellite/BSCasablanca/Navegador_Obsoleto/GBS_Generico_FA/2000022702337/1191433478140/";
	var urlPaginaBloqueo_BSParis = "/cs/Satellite/BSParis/Navegador_Obsoleto/GBS_Generico_FA/2000022702337/1191428347489/";
	var urlPaginaBloqueo_BSMiami = "/cs/Satellite/BSMiami/Navegador_Obsoleto/GBS_Generico_FA/2000022702337/4000002921543/";
	var urlPaginaBloqueo_BancoSabadellUK = "/cs/Satellite/BancoSabadellUK/Navegador_Obsoleto/GBS_Generico_FA/2000022702337/4000000966868/";
	var urlPaginaBloqueo_BSFincom = "/cs/Satellite/BSFincom/Navegador_Obsoleto/GBS_Generico_FA/2000022702337/1191430746508/";
	var urlPaginaBloqueo_SabUbp = "/cs/Satellite/SabUbp/Navegador-Obsoleto/2000022743655/";
	var urlPaginaBloqueo_BSMarkets = "/cs/Satellite?cid=2000022747156&pagename=BSMarkets2%2FPage%2FPage_Interna_Primaria_HTMLBlock_4_Template&language=es_ES";
	var urlPaginaBloqueo_Mobile = "/cs/Satellite?pagename=SabAtl/Page/CapaNavObsMobile&language=";



	function navegador(nombre,versionAviso,versionBloqueo){
		this.nombre = nombre;
		this.versionAviso = versionAviso;
		this.versionBloqueo = versionBloqueo;
	}

	//Las versiones que se indican se comparan "inferior a". Por ejemplo si pone 34 se considerará obsoleta la 33.9, 33, 32, etc. pero no la 34.
	//La primera version es la de aviso, la segunda la de bloqueo. Idealmente la primera es mayor que la segunda.
	var navegadores = [
						new navegador('firefox'           ,38.1 , 27),
						new navegador('chrome'            ,44   , 41),
						new navegador('internet explorer' ,12   ,  9),
						new navegador('safari'            , 7.9 ,  7.9),
						new navegador('opera'             ,12.18, 12.15),
						new navegador('android'           , 5.1 ,  5),
						new navegador('windows phone'     , 0   , 11), /*Para este, si osversion es 8.1 no se admite ninguna*/
						new navegador('opera mobile'      ,30   , 30), /*lo de mobile se lo añadimos por nav.mobile=true */
						new navegador('iphone'            , 8   ,  8),  /*safari "mobile"*/
						new navegador('ipad'              , 8   ,  8)   /*tambien safari "mobile"*/
					  ];

	var comprobarObsoleto = function(modo){
		var nav = bowser._detect(navigator.userAgent);
		var bloquearNavegador = false;
		
		if(!nav || !nav.name || !nav.version) return;
		if(nav.name.toLowerCase() == 'opera' && nav.mobile){
			nav.name = 'opera mobile';
		}
		
		for(var i=0;i<navegadores.length;i++){
			if(nav.name.toLowerCase() === navegadores[i].nombre.toLowerCase()){
				//if(!bowser.msie || !esOrigenInterno()){
				if(nav.version < navegadores[i].versionBloqueo || (nav.name.toLowerCase()=='windows phone' && nav.osversion <= 8.1)){
					if(window.console){
						console.log('Bloqueo de navegador por version antigua: '+nav.name+' '+nav.version);
					}
					capaNavObs(recuperarIdioma(),nav.mobile || nav.tablet? 'mobile' : nav.name.toLowerCase(), modo);
					bloquearNavegador = true;
					esNavegadorObsoleto = true;
				}
				else if(nav.version < navegadores[i].versionAviso){
					mostrarAvisoObsoleto();
				}
				//}
				break;
			}
		}

		if (!bloquearNavegador && modo=="cajalogin") {
			var moduloLogin = document.getElementById("loginModule");
			var moduloLoginHidden = document.getElementById("loginModuleHidden");
			var moduloLoginEmpr = document.getElementById("loginModuleEmpr");
			var moduloLoginHiddenEmpr = document.getElementById("loginModuleHiddenEmpr");

			if (moduloLogin && moduloLoginHidden){
				moduloLogin.innerHTML = moduloLoginHidden.innerHTML;
				moduloLoginHidden.innerHTML = "";
				if (typeof sitio!="undefined"){
					if(sitio != "SabAtl"){
						moduloLogin.style.height = "auto";
					}
				}
			}
			if (moduloLoginEmpr && moduloLoginHiddenEmpr){
				moduloLoginEmpr.innerHTML = moduloLoginHiddenEmpr.innerHTML;
				moduloLoginHiddenEmpr.innerHTML = "";
				if (typeof sitio!="undefined"){
					if(sitio == "SabAtl"){	
						moduloLoginEmpr.style.height = "320px";
					}else{
						moduloLogin.style.height = "auto";
					}
				}else{
					moduloLogin.style.height = "auto";
				}
			}
		}
	}

	//depende de la variable global ipCliente con la ip previamente sacada de la request desde servidor
	var esOrigenInterno = function(){
		if (typeof accesoInterno != 'undefined'){	
			if (accesoInterno=="true"){
				return true;
			}
		}
		return false;
	}

	var mostrarAvisoObsoleto = function(){
		var numObs = parseInt(obtenerValorCookie(nombreCookieObs)) || 0;
		actualizarCookie(nombreCookieObs,++numObs,7);
		descubrirCapa();

		if (numObs <= vecesMostrarCapaAbierta) {
			if(typeof capaObsMinToMax == 'function'){		
				capaObsMinToMax();
			}
			if(window.console){
				console.log('Maximizada capa de aviso por navegador obsoleto');
			}
		}
	}

	var descubrirCapa = function(){
		var capaObs = document.getElementById('msgobsoleto');
		if(capaObs != null) {
			capaObs.style.display="block";
			if(window.console){
				console.log('Mostrada capa de aviso por navegador obsoleto');
			}
		}
	}

	var obtenerValorCookie = function(nombre) {
		var theCookie=""+document.cookie;
		var ind=theCookie.indexOf(nombre);
		if (ind==-1 || nombre=="") {
			return "";
		}
		var ind1=theCookie.indexOf(';',ind);
		if (ind1==-1) {
			ind1=theCookie.length; 
		}
		return unescape(theCookie.substring(ind+nombre.length+1,ind1));
	}

	var actualizarCookie = function(c_name,value,exdays) {
		var exdate = new Date();
		exdate.setDate(exdate.getDate() + exdays);
		var c_value = escape(value) + ((exdays==null) ? ";path=/" : "; expires=" + exdate.toUTCString() + ";path=/");
		document.cookie = c_name + "=" + c_value;
	}


	var capaNavObs = function(idioma,browser, modo){

		var moduloLogin = document.getElementById("loginModule");
		var moduloLoginHidden = document.getElementById("loginModuleHidden");
		var moduloLoginObsoleto = document.getElementById("loginModuleObsoleto");
		var moduloLoginEmpr = document.getElementById("loginModuleEmpr");
		var moduloLoginHiddenEmpr = document.getElementById("loginModuleHiddenEmpr");
		var moduloLoginObsoletoEmpr = document.getElementById("loginModuleObsoletoEmpr");
		var loginDual = document.getElementById("accessForms");
		var landing = document.getElementById("mainLanding");

		var urlPaginaBloqueo = urlPaginaBloqueo_SabAtl;
		var site = "SabAtl";
		var urlFinal = "/";
		var urlActual = document.location.href;
		var prefixSession = "SA";
		if(browser == 'mobile') {
			site = "Mobile";
			urlFinal = "";
		} else if ((urlActual.indexOf("/SabAtl") != -1) || (urlActual.indexOf("/txbs/") != -1) || (urlActual.indexOf("/txempbs/") != -1)) {
			site = "SabAtl";
			prefixSession = "SA";
		} else if ((urlActual.indexOf("/BC") != -1) || (urlActual.indexOf("/activobank/") != -1)) {
			site = "BC";
			prefixSession = "BC";
		} else if ((urlActual.indexOf("/SabUbp") != -1) || (urlActual.indexOf("/txsbp/") != -1)) {
			site = "SabUbp";
		} else if ((urlActual.indexOf("/BSAndorra") != -1) || (urlActual.indexOf("/txbsa/") != -1)) {
			site = "BSAndorra";
			prefixSession = "BSA";
		} else if ((urlActual.indexOf("/BSCasablanca") != -1) || (urlActual.indexOf("/txempbsc/") != -1)) {
			site = "BSCasablanca";
			prefixSession = "BSC";
		} else if ((urlActual.indexOf("/BSParis") != -1) || (urlActual.indexOf("/txbsp/") != -1) || (urlActual.indexOf("/txempbsp/") != -1)) {
			site = "BSParis";
			prefixSession = "BSP";
		} else if ((urlActual.indexOf("/BSMiami") != -1) || (urlActual.indexOf("/txbsmi/") != -1)) {
			site = "BSMiami";
			prefixSession = "BSMI";
		} else if ((urlActual.indexOf("/BancoSabadellUK") != -1) || (urlActual.indexOf("/txempbsl/") != -1)) {
			site = "BancoSabadellUK";
			prefixSession = "UK";
		} else if (urlActual.indexOf("/BSFincom") != -1) {
			site = "BSFincom";
			prefixSession = "BSFC";
		} else if (urlActual.indexOf("/BSMarkets2") != -1) {
			site = "BSMarkets";
		}
		eval("var urlPaginaBloqueo = urlPaginaBloqueo_"+site);

		if (site != "BSMarkets") {
			urlPaginaBloqueo = urlPaginaBloqueo + idioma + urlFinal;
		}

		var enlaceLoginDual = document.getElementById("a_BSonline");
		if (enlaceLoginDual) {
			enlaceLoginDual.href = urlPaginaBloqueo;
		} else {
			var pestanyaLoginDual = document.getElementById("bsonline");
			if (pestanyaLoginDual) {
				pestanyaLoginDual.children[0].href = urlPaginaBloqueo;
			}
		}

		if ((moduloLogin || moduloLoginEmpr) && modo=="cajalogin") {
			if (moduloLoginObsoleto){
				var enlaceMasInformacion = document.getElementById("enlaceMasInformacion");
				if (enlaceMasInformacion) {
					enlaceMasInformacion.href = urlPaginaBloqueo;
				}
				moduloLogin.innerHTML = moduloLoginObsoleto.innerHTML;
				if (typeof sitio!="undefined"){
					if(sitio != "SabAtl"){
						moduloLogin.style.height = "auto";
					}
				}
				if (moduloLoginHidden) moduloLoginHidden.innerHTML = "";
			}
			if (moduloLoginObsoletoEmpr){
				var enlaceMasInformacion = document.getElementById("enlaceMasInformacion");
				if (enlaceMasInformacion) {
					enlaceMasInformacion.href = urlPaginaBloqueo;
				}
				moduloLoginEmpr.innerHTML = moduloLoginObsoletoEmpr.innerHTML;
				if (typeof sitio!="undefined"){
					if(sitio == "SabAtl"){
						moduloLoginEmpr.style.height = "320px";
					}else{
						moduloLoginEmpr.style.height = "auto";
					}
				}else{
					moduloLoginEmpr.style.height = "auto";
				}
				if (moduloLoginHiddenEmpr) moduloLoginHiddenEmpr.innerHTML = "";
			}
		} else if (loginDual || esPaginaAccesoLogin || esTransaccional || landing || esInformacional) {
			if (esTransaccional && (site=="BSCasablanca" || site=="BSParis" || site=="BSMiami" || site=="BancoSabadellUK") && browser=="internet explorer") {
				if(window.console){
					console.log("Excepcion bloqueo TX OFEX. Navegador: " + browser);
				}
			} else if (esInformacional && urlActual.indexOf(idPaginaLoginEmpresas_SabAtl) != -1 && (idioma == "fr" || idioma == "de" || idioma == "eu" || idioma == "gl")) {
				document.location.href = urlPaginaBloqueo;
			} else if (esInformacional && (idioma == "eu" || idioma == "gl") && ( urlActual.indexOf(idPaginaLoginParticulares_SabAtl) != -1 || urlActual.indexOf(idPaginaLoginBancaPrivada_SabAtl) != -1)) {
				document.location.href = urlPaginaBloqueo;
			} else if (esInformacional ) {
				//ej. "/Satellite/SabAtl/"
				var endsWidth = urlActual.indexOf("/Satellite/"+site+"/", urlActual.length - ("/Satellite/"+site+"/").length);
				if (endsWidth !== -1) {
					var idPageSession = obtenerValorCookie(prefixSession+"_Session");
					eval("var pageLogin = idPaginaLogin_"+site);
					if (idPageSession.indexOf(pageLogin) != -1) {
						eval("var homePageBloqueo = urlPaginaBloqueo_"+site);
						homePageBloqueo =  homePageBloqueo + sIdioma(idPageSession.split("_")[1]) + urlFinal;
						document.location.href = homePageBloqueo;
					}
				}
			}else {
				document.location.href = urlPaginaBloqueo;
			}
		}
	}

	var capaNavObs_OLD = function(idioma,browser){

		var cssCapa = document.createElement("link");
		cssCapa.rel = "stylesheet";
		cssCapa.type = "text/css";
		cssCapa.href = "/StaticFiles/GrupoBS/css/capaNavObs.css";
		document.getElementsByTagName("head")[0].appendChild(cssCapa)

		var div1 = document.createElement("div");
		div1.className = "capaNavObs";
		var div2 = document.createElement("div");
		div2.className = "capaNavObsOverlay";
		var div3 = document.createElement("div");
		div3.className = "CapaNavObsOffset";
		var div4 = document.createElement("div");
		div4.className = "capaNavObsContenido";
		var iframeMensaje = document.createElement("iframe");
		iframeMensaje.scrolling="no";
		iframeMensaje.frameBorder = "0";
		if(browser == 'mobile'){
			document.location = "https://www.bancsabadell.com/cs/Satellite?pagename=SabAtl/Page/CapaNavObsMobile&language="+idioma;
		}
		else{
			iframeMensaje.src = "https://www.bancsabadell.com/cs/Satellite?pagename=SabAtl/Page/CapaNavObs&language="+idioma+"&browser="+browser;
		}

		div4.appendChild(iframeMensaje);
		div3.appendChild(div4);
		div1.appendChild(div2);
		div1.appendChild(div3);

		document.body.appendChild(div1);

		if (window.addEventListener) {
			window.addEventListener('load', cascarForms);
		}
		else if (window.attachEvent) {
			window.attachEvent('onload', cascarForms);
		}
	}

	var recuperarIdioma = function(){
		if(typeof language == "string"){
			if(language == "1178258082822") return "es";
			if(language == "1183015603985") return "ca";
			if(language == "1183016450058") return "de";
			if(language == "1178258082826") return "en";
			if(language == "1191435076733") return "eu";
			if(language == "1183016450079") return "fr";
			if(language == "2000012148005") return "gl";
			if(language == "2000009474730") return "va";
			else return "es";
		}
		if(document.URL.match(/\/cs\/|\/csdev\/|\/csint\/|\/cspre\//i)){
			if (idiomaUrl = document.URL.match(/\/es\/|\/ca\/|\/de\/|\/en\/|\/eu\/|\/fr\/|\/gl\/|\/va\//i)) return idiomaUrl[0].replace(/\//g,'');
		}
		if(typeof idiomaQgo != "undefined" && idiomaQgo != null){
			return idiomaQgo;
		}
		return "es";
	}
	
	var sIdioma = function(idLanguage){
		if(idLanguage == "1178258082822") return "es";
		if(idLanguage == "1183015603985") return "ca";
		if(idLanguage == "1183016450058") return "de";
		if(idLanguage == "1178258082826") return "en";
		if(idLanguage == "1191435076733") return "eu";
		if(idLanguage == "1183016450079") return "fr";
		if(idLanguage == "2000012148005") return "gl";
		if(idLanguage == "2000009474730") return "va";
		else return "es";
	}

	var cascarForms = function(){
		for(var i=0;i<document.forms.length;i++){
			document.forms[i].innerHTML = "";
		}
	}

	return{
		comprobarObsoletoStart: function(modo){
			var esCajaLogin = false;
			if ((typeof(modo)!="undefined") && (modo=="cajalogin")) {
				esCajaLogin = true;
			} else {
				modo="";
			}
			if (!yaEjecutado || esCajaLogin) {
				comprobarObsoleto(modo);
				yaEjecutado = true;
			}
		},
		capaNavObs: function(idioma,browser, modo){
			capaNavObs(idioma,browser, modo);
		}
	};

}();


function rCheckNavigator(name){
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if ((c.indexOf(nameEQ) == 0) && (c.length > nameEQ.length)) return unescape(c.substring(nameEQ.length,c.length));
	}
	return null;
}

var urlActual = document.location.href;

if (urlActual.indexOf("/cs") != -1) {
	if ((urlActual.indexOf(idPaginaLogin_SabAtl) != -1) || (urlActual.indexOf(idPaginaLogin_BC) != -1) || (urlActual.indexOf(idPaginaLogin_BSAndorra) != -1) || (urlActual.indexOf(idPaginaLogin_BSCasablanca) != -1) || (urlActual.indexOf(idPaginaLogin_BSParis) != -1) || (urlActual.indexOf(idPaginaLogin_BSMiami) != -1) || (urlActual.indexOf(idPaginaLogin_BancoSabadellUK) != -1) || (urlActual.indexOf(idPaginaLogin_SabUbp) != -1) || (urlActual.indexOf(idPaginaLogin_BSMarkets_AccesoClientes) != -1) || (urlActual.indexOf(idPaginaLogin_BSMarkets_AccesoNoClientes) != -1)){
		esPaginaAccesoLogin = true;
		BS.moduloNavObs.comprobarObsoletoStart();
	} else {
		if (window.addEventListener) {
			window.addEventListener('load', BS.moduloNavObs.comprobarObsoletoStart, false);
		}
		else if (window.attachEvent) {
			esInformacional = true;
			var readyStateCheckInterval = setInterval(function() {
				if (document.readyState === "complete" || document.readyState === 'interactive') {
					clearInterval(readyStateCheckInterval);
					BS.moduloNavObs.comprobarObsoletoStart();
				}
			}, 100);
			//window.attachEvent('onload', BS.moduloNavObs.comprobarObsoletoStart);
		}
	}
} else {
	esTransaccional = true;
	BS.moduloNavObs.comprobarObsoletoStart();
}
