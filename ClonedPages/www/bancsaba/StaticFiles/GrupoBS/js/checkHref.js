// Funcion que revisa los enlaces existentes en el html y los modifica para añadir el valor de la empresa de personalizacion
// Personalizacion: se personalizan con el valor de la empresa (codempr), este valor se recibe en la llamada de la funcion o se recupera de la url general de la pagina que se esta visualizando.
// Restriccion: Se mira la cookie llamada segmento y solo se reemplazaran aquellas paginas donde el valor de esta cookie sea 'Particulares' o 'Empresas'
// 20100812 - Fase II - Se incluye dentro de la navegacion personalizada la seccion de empresas

var nombreCookie = 'segmentoPers';
var cookieParticulares = 'Particulares';
var idParticulares = '1191332204474';

var cookieEmpresas = 'Empresas';
var idEmpresas = '1191332202619';

var idBSOnline = '1191332204053';

function checkHref(){
	checkHref('');
}


function checkHref(empresa){
	
	// Se comprueba si existe la cookie que indica la seccion en la que estamos, si esta es Particulares se sigue con el reemplazo
	var valorCookie = '';
        var pos = document.cookie.indexOf(nombreCookie + '=');
        if(pos != -1){
                pos += nombreCookie.length + 1;
                var fin = document.cookie.indexOf(';',pos);
                if(fin == -1){
                        fin = document.cookie.length;
                }
                var valorCookie = document.cookie.substring(pos, fin);
        }

        var consSatellite = "/Satellite/";
       	var paginaActual = document.location.href;
	if(paginaActual.indexOf(consSatellite) == -1 && paginaActual.indexOf("/ContentServer") != -1){  consSatellite = "/ContentServer/";}

	var inicio = paginaActual.indexOf(consSatellite);
        if(inicio!=-1){
        	inicio += consSatellite.length;
		// Busqueda de empresa
		if (empresa==undefined){
            		var fin = paginaActual.indexOf("/",inicio);
            		if(fin!=-1){
                		var cadena=paginaActual.substring(inicio,fin);
                		if(cadena.indexOf("_") > -1 && cadena.indexOf("_") < cadena.length){
                    			empresa = cadena.substring(inicio,cadena.indexOf("_"));
                		} // if empresa
            		}// if fin != -1
		} // if empresa
	}// if inicio != -1


	// Inclusion de la empresa en los links
       	if(empresa != undefined){
            	for(var i=0; i<(document.links.length); i++){
                	var enlace = document.links[i].href;
                	// Comprobar si es un enlace interno /... o http://www.sabadellatlantico.com/cs/Satellite/...
                	var enlaceValido = enlace.indexOf("/");
                	if(enlaceValido != 0){ enlaceValido = enlace.indexOf(paginaActual.substring(0,inicio-1)); }
                	if(enlaceValido == 0){
                    		var inicioEnlace = enlace.indexOf(consSatellite);
				
				// A los enlaces bajo Empresas y bajo BSOnline se les aplica la personalizacion
				// var enlacePersonalizado = (enlace.indexOf(idEmpresas) == -1) && (enlace.indexOf(idBSOnline) == -1);
				var enlacePersonalizado = (enlace.indexOf(idBSOnline) == -1);
				

				// Si el valor de la cookie es el de la de particulares o es un enlace a Particulares se les aplica la personalizacion siempre
				//var cookieOk = (valorCookie == cookieParticulares) || (enlace.indexOf(idParticulares) != -1); 
				var cookieOk = (valorCookie == cookieParticulares) || (enlace.indexOf(idParticulares) != -1) ||
					       (valorCookie == cookieEmpresas)     || (enlace.indexOf(idEmpresas) != -1);                    		
				
				if(enlacePersonalizado && cookieOk && inicioEnlace!=-1){
                 		       inicioEnlace += consSatellite.length;
                        		var finEnlace = enlace.indexOf("/",inicioEnlace);
                        		if(finEnlace!=-1 && inicio!=finEnlace){

                            			var empresaEnlace = enlace.substring(inicioEnlace,finEnlace);
                            			if(empresaEnlace != null && empresaEnlace.indexOf("_") == -1){

                                			document.links[i].href = enlace.substring(0,inicioEnlace) + empresa + enlace.substring(inicioEnlace,enlace.length);
                            			}// if EmpresaEnlace
                        		}// if finEnlace
                        		else{

                            			var empresaEnlace = enlace.substring(inicioEnlace,enlace.length-1);
                            			if(empresaEnlace != null && empresaEnlace.indexOf("_") == -1){
                                			document.links[i].href = enlace.substring(0,inicioEnlace) + empresa + enlace.substring(inicioEnlace,enlace.length);
                            			}
                        		}// else finEnlace
                    		}// if enlacePersonalizado && cookieOk && inicioEnlace
                	}// if enlaceValido == 0
            	}// for
	}// if empresa != undefined



    }// checkHref ()
