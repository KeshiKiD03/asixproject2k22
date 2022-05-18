function readCookieLinks(name)
{
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if ((c.indexOf(nameEQ) == 0) && (c.length > nameEQ.length)) return unescape(c.substring(nameEQ.length,c.length));
		}
	return null;
}

var enabledLocalesForCurrentPage = new Array();

function addEnabledLocaleForCurrentPage (localeName)
{
    enabledLocalesForCurrentPage.push(localeName);    
}

function isLocaleEnabledForCurrentPage(localeName)
{
    if (enabledLocalesForCurrentPage.length == 0)
    {
        return true;
    } else {
        for (from=0; from < enabledLocalesForCurrentPage.length; from++)
        {
            if (enabledLocalesForCurrentPage[from] == localeName)
            {
                return true;
            }
        }
        return false;
    }
}

function goto(url) {
	if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)){
		var referLink = document.createElement('a');	
		//Si la url llega vacia, nos quedamos en la página actual para evitar que en IE de error 404
		if(url == ""){
			referLink.href = location.href;
		}else{
		//En caso contrario se mantiene el comportamiento normal.
			referLink.href = url;
		}
		document.body.appendChild(referLink);
		referLink.click();
		
	} else {
		location.href = url;
	}
}

function cambiaIdioma (idiomaActual, idiomaLink, site)
{
	var urlActual = document.location.href;
	var idiomaActualForm = idiomaActual.substring(0,idiomaActual.length-1)+"?";
	var urlLink = '';
	var urlActualAux='';


	if (site=="HedgeFunds")
	{
		if (urlActual.indexOf(site) > 0)
		{
			if( urlActual.indexOf(idiomaActual) > 0 )
			{
				// Estem a les pag interiors
				urlLink = urlActual.replace(idiomaActual, idiomaLink);
			}
			else
			{
				// Estem a la HOME
				if (urlActual.indexOf(site+"/") > 0)  	urlActualAux= urlActual + "Home/1191431147112"+ idiomaActual;
				else 									urlActualAux= urlActual + "/Home/1191431147112"+ idiomaActual;

				urlLink = urlActualAux.replace(idiomaActual, idiomaLink);
			}
		}
		else
		{
			urlLink= urlActual + "/"+ site +"/Home/1191431147112"+ idiomaLink;
		}
	
	}else {
	    // FW Comprobar en aleman si es una pagina de empresas
	    var cookie = readCookie("segmento");
	    if(("Empresas" == cookie) && ("/de/" == idiomaLink) || ("Empresas" == cookie) &&("/fr/" == idiomaLink) && (site=="SabAtl" || site=="BC")){
	        // pagina de empresas cambiada a aleman
	        aBsOnline = document.getElementById("a_BSonline").href;
	        urlLink = aBsOnline.replace(idiomaActual, idiomaLink);
	        // cortar la ejecucion del if siguiente
	    }else{
            if(urlActual.indexOf("/"+site+"//Page/") > 0){
        		if(document.getElementById("mainMenu")){
    				var opsmnsup=document.getElementById("mainMenu").getElementsByTagName('li');
					if(document.getElementById("mainMenu").getElementsByTagName('li').length==0){
							opsmnsup=document.getElementById("mainMenu").getElementsByTagName('td');
					}
						
					var i=0;
    				for(i=0;i<opsmnsup.length;i++){
    					if(opsmnsup[i].className=='actual'){
    						var purl=opsmnsup[i].getElementsByTagName('a')[0].href;
    						urlLink = purl.replace(idiomaActual, idiomaLink);
    						}
    				}
    			}else{
    				return;
    			}
       	 	}else{
    	    	if(urlActual.indexOf(idiomaActual)!=-1 && isLocaleEnabledForCurrentPage(idiomaLink.replace(/\//g, ""))){
    					urlLink = urlActual.replace(idiomaActual, idiomaLink);
    			}else if(urlActual.indexOf(idiomaActualForm)!=-1 && isLocaleEnabledForCurrentPage(idiomaLink.replace(/\//g, ""))){
						urlLink = urlActual.replace(idiomaActualForm, idiomaLink+"?");
				}else{
    				if(document.getElementById("mainMenu")){
    					var opsmnsup=document.getElementById("mainMenu").getElementsByTagName('li');
						if(document.getElementById("mainMenu").getElementsByTagName('li').length==0){
							opsmnsup=document.getElementById("mainMenu").getElementsByTagName('td');
						}
						
    					var i=0;
    					for(i=0;i<opsmnsup.length;i++){
    						if(opsmnsup[i].className=='actual'){
    							var purl=opsmnsup[i].getElementsByTagName('a')[0].href;
    							urlLink = purl.replace(idiomaActual, idiomaLink);
    						}
    					}
    				} else if (document.getElementById("tablaDual")) {
					if (document.getElementById("tablaDualPart").className.indexOf('segmentoActual')!=-1) {
						var purl=document.getElementById("tablaDualPart").getElementsByTagName('a')[0].href;
						urlLink = purl.replace(idiomaActual, idiomaLink);
					} else {
						var purl=document.getElementById("tablaDualEmp").getElementsByTagName('a')[0].href;
						urlLink = purl.replace(idiomaActual, idiomaLink);
					}
				}
    				else{
    					return;
    				}
    			}
    		}
        }
	}

	if (urlLink == "") {
		var idIdiomaActual = '';
		var idIdiomaLink = '';
		switch (idiomaActual) {
			case "/es/":
				idIdiomaActual = "1178258082822";
				break;
			case "/ca/":
				idIdiomaActual = "1183015603985";
				break;
			case "/va/":
				idIdiomaActual = "2000009474730";
				break;
			case "/eu/":
				idIdiomaActual = "1191435076733";
				break;
			case "/gl/":
				idIdiomaActual = "2000012148005";
				break;
			case "/de/":
				idIdiomaActual = "1183016450058";
				break;
			case "/en/":
				idIdiomaActual = "1178258082826";
				break;
			case "/fr/":
				idIdiomaActual = "1183016450079";
				break;
		}
                switch (idiomaLink) {
                        case "/es/":
                                idIdiomaLink = "1178258082822";
                                break;
                        case "/ca/":
                                idIdiomaLink = "1183015603985";
                                break;
                        case "/va/":
                                idIdiomaLink = "2000009474730";
                                break;
                        case "/eu/":
                                idIdiomaLink = "1191435076733";
                                break;
                        case "/gl/":
                                idIdiomaLink = "2000012148005";
                                break;
                        case "/de/":
                                idIdiomaLink = "1183016450058";
                                break;
                        case "/en/":
                                idIdiomaLink = "1178258082826";
                                break;
                        case "/fr/":
                                idIdiomaLink = "1183016450079";
                                break;
                }
		urlLink = urlActual.replace(new RegExp(idIdiomaActual, 'g') , idIdiomaLink);
	}

// window.location = urlLink;
  goto(urlLink);
}

function crCookie(name, value, days) {
		  if (days) {
		    var date = new Date();
		    date.setTime(date.getTime()+(days*24*60*60*1000));
		    var expires = "; expires="+date.toGMTString();
		  }
		  else var expires = "";
		  document.cookie = name+"="+escape(value)+expires+"; path=/";
		}
function r(name)
{
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if ((c.indexOf(nameEQ) == 0) && (c.length > nameEQ.length)) return unescape(c.substring(nameEQ.length,c.length));
	}
	return null;
}


function getParameter ( queryString, parameterName ) {
    // Add "=" to the parameter name (i.e. parameterName=value)
    var parameterName = parameterName + "=";
    if ( queryString.length > 0 ) {
        // Find the beginning of the string
        begin = queryString.indexOf ( parameterName );
        // If the parameter name is not found, skip it, otherwise return the value
        if ( begin != -1 ) {
            // Add the length (integer) to the beginning
            begin += parameterName.length;
            // Multiple parameters are separated by the "&" sign
            end = queryString.indexOf ( "&" , begin );
            if ( end == -1 ) {
                end = queryString.length
            }
            // Return the string
            return unescape ( queryString.substring ( begin, end ) );
        }
        // Return "null" if no parameter has been found
        return "null";
    }
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if ((c.indexOf(nameEQ) == 0) && (c.length > nameEQ.length)) return unescape(c.substring(nameEQ.length,c.length));
	}
	return null;
}

function DeleteCookie (name,path,domain) {
  if (GetCookie(name)) {
    document.cookie = name + "=" +
      ((path) ? "; path=" + path : "") +
      ((domain) ? "; domain=" + domain : "") +
      "; expires=Thu, 01-Jan-70 00:00:01 GMT";
  }
}

function SetCookie (name,value,expires,path,domain,secure) {

  document.cookie = unescape (name + "=" + value +
    ((expires) ? "; expires=" + expires.toUTCString() : "") +
    ((path) ? "; path=" + path : "") +
    ((domain) ? "; domain=" + domain : "") +
    ((secure) ? "; secure" : "") );

}

//Añadimos el código de la empresa personalizada al final del utmcsr de la cookie de Google Analytics
function hacerGA_BA (codempr) {

	var expire_date = new Date();
	expire_date.setDate(expire_date.getDate() + 120);

	cookie_utmz = unescape(cookies.getCookie("__utmz"));
	if (cookie_utmz!=""){
		var pos_utmcsr=cookie_utmz.indexOf("utmcsr")+7;
		var pos_utmccn=cookie_utmz.indexOf("|utmccn");
		var utmcsr = cookie_utmz.substring(pos_utmcsr,pos_utmccn);
		if(utmcsr.indexOf("#")==-1) {
			utmcsr = utmcsr + "#" + codempr;
		}
		else {
			utmcsr = utmcsr.substring(0,utmcsr.indexOf("#"));
			utmcsr = utmcsr + "#" + codempr;
		}
		var value_cookie = cookie_utmz.substring(0,pos_utmcsr) + utmcsr + cookie_utmz.substring(pos_utmccn);
		// name, value, expiration date, path, domain, secure
		var domIni = document.domain;
		var domFin = document.domain;
		var pos_www = domIni.indexOf("www.");
		if (pos_www == 0){
			domFin = domIni.substring(pos_www+4);
		}
		SetCookie("__utmz", unescape(value_cookie), expire_date, "/", domFin,"");
	}
}

//Si existe el parámetro "zanpid" en la URL lo guardamos en una cookie de sesión
function tracking () {
	var existeParam = document.URL.indexOf("zanpid=");
	if (existeParam!=-1) {
		var paramValue = "";
		var url = document.URL;
		var urlString = url.split("?");
		var listaParams = urlString[1].split("&");
		for(i=0; i<listaParams.length; i++) {
			if(listaParams[i].indexOf("zanpid=")!=-1) {
				var param = listaParams[i].split("=");
				paramValue = param[1];
				break;
			}
		}

		if(paramValue != "") {
			var domIni = document.domain;
			var domFin = document.domain;
			var pos_www = domIni.indexOf("www.");
			if (pos_www == 0){
				domFin = domIni.substring(pos_www+4);
			}
			SetCookie("zanpid", unescape(paramValue), "", "/", domFin,"");
		}
	}
}
