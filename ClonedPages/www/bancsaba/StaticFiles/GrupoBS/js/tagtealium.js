if(window.addEventListener){
	window.addEventListener("load", initTealium);
}else{
	window.attachEvent("onload", initTealium);
}

function initTealium(){	
	var proceso = "false";
	//Buscador de oficinas
	var buscador = document.getElementById("gSearch");
	if(buscador != null){
		proceso = "true";
		buscadorOficinasInit();
	}
	//Buscador interno
	var buscadorInterno = document.getElementById("buscadorDetalle");
	if(buscadorInterno != null){
		proceso = "true";
		busquedaInterna();
	}
	var enlacesVirtuales = document.querySelectorAll("#lnkqgoingsa");
	for (var i = 0; i < enlacesVirtuales.length; i++) {
		if(document.addEventListener){
			enlacesVirtuales[i].addEventListener("click", busquedaInternaEnlaceVirtual);
		}else{
			enlacesVirtuales[i].attachEvent("onclick", busquedaInternaEnlaceVirtual);
		}
	}
	//Testeado a mano, ya que en dev las busquedas no tienen los enlaces generales.
	var divEnlaces = document.querySelectorAll(".parrafo.mg15")[1];
	var enlacesGenerales ="";
	if(divEnlaces != null){
		for (var i = 0; i < divEnlaces.length; i++) {
			enlacesGenerales = divEnlaces[i].querySelectorAll("a");
			for (var i = 0; i < enlacesGenerales.length; i++) {
				if(document.addEventListener){
					enlacesVirtuales[i].addEventListener("click", busquedaInternaEnlaceGeneral);
				}else{
					enlacesVirtuales[i].attachEvent("onclick", busquedaInternaEnlaceGeneral);
				}
			}
		}
	}
	//Chat Online
	//var chatOnline = document.getElementById("informacionSAO");
	//if(chatOnline != null){
	//	proceso = "true";
	//	var linkOnline = document.getElementById("linkOnlineChat");
	//	var iconOnline = document.getElementById("iconOnlineChat");
	//	if(document.addEventListener){
	//		linkOnline.addEventListener("click", inicioChatOnline);
	//		iconOnline.addEventListener("click", inicioChatOnline);
	//	}else{
	//		linkOnline.attachEvent("onclick", inicioChatOnline);
	//		iconOnline.attachEvent("onclick", inicioChatOnline);
	//	}
	//}
	//Formulario hagase cliente.
	hagaseClientePart = window.location.href.indexOf("2000019059100");
	if(hagaseClientePart != -1){
		proceso="true";
		hagaseClienteParticulares();
	}
	
	//Landing de Seguros
	var paginaLanding = window.location.href.indexOf("2000026402066");
	var app = window.location.href.indexOf("isApp");
	
	if(paginaLanding != -1 && app == -1){
		proceso = "true";
		vaciarTealium();
		tealium_data.nombreOperativa = "contratacion seguros";
		tealium_data.pasoOperativa = "landing oferta";
		tealium_data.esProceso = "true";
		llamada();
	}
	
	//Call Me Back
	//Se ejecuta el javascript antes de que se cargue el div que nos interesa por lo que el innerText nunca tiene la cadena deseada.
	var callMe = document.getElementById("fbFormCorrect");
	if(callMe != null) {
		if(window.setTimeout != null){
			window.setTimeout(callMeBack,1000);
		}else{
			var delay = 1000; // milliseconds
			var before = Date.now();
			while (Date.now() < before + delay) {};
			callMeBack();
		}
	}	

	
	var formulario = document.getElementById("solicitud");
	if(formulario != null){
		var clienteEmpresa = document.getElementById("1191357089603");
		var clienteICO = document.getElementById("1191357093018");
		if(clienteEmpresa != null){
			//Hagase cliente empresas
			proceso = "true";
			vaciarTealium();
			tealium_data.nombreOperativa = "hagase cliente-empresas";
			tealium_data.pasoOperativa = "paso1-datos de la operación";
			tealium_data.nombreProducto = "cuenta expansion";
			tealium_data.esProceso = "true";
			llamada();
			if(document.addEventListener){
				document.querySelectorAll(".continue")[0].addEventListener("click",hagaseClienteEmpresa);
			}else{
				document.querySelectorAll(".continue")[0].attachEvent("onclick",hagaseClienteEmpresa);
			}
		}else if(clienteICO != null){
			//Hagase cliente ICO
			proceso = "true";
			vaciarTealium();
			tealium_data.nombreOperativa = "hagase cliente-empresas";
			tealium_data.pasoOperativa = "paso1-datos de la operación";
			tealium_data.nombreProducto = "lineas ico";
			tealium_data.esProceso = "true";
			llamada();
			if(document.addEventListener){
				document.querySelectorAll(".continue")[0].addEventListener("click",hagaseClienteICO);
			}else{
				document.querySelectorAll(".continue")[0].attachEvent("onclick",hagaseClienteICO);
			}
		}else{
			//Otros formularios
			//Pasa seleccionar el paso en el que nos encontramos: document.querySelectorAll(".current")[0].innerText
			var producto = document.getElementById("producto");
			if(producto != null){
				proceso = "true";
				//Estamos en un formulario de un solo paso o en el de hagase cliente particulares.
				if(window.location.href.indexOf("2000019059100") == -1){	
					//Estamos en un formulario de un solo paso			
					producto = producto.value;
					vaciarTealium();
					tealium_data.nombreOperativa = "contratación";
					tealium_data.pasoOperativa = "paso1-datos de la operación";
					tealium_data.nombreProducto = producto;
					tealium_data.esProceso = "true";
					llamada();
					if(document.addEventListener){
						document.getElementsByName("fb:formsubmittext")[0].addEventListener("click",formulariosProducto);
					}else{
						document.getElementsByName("fb:formsubmittext")[0].attachEvent("onclick",formulariosProducto);
					}
				}
			}else{
				//Estamos en un formulario de varios pasos
				proceso = "true";
				formularioMultipasoInicio();
			}
		}
	}
	var pasoFinalFormulario = document.querySelectorAll(".destacadoAzulFin")[0];
	if(pasoFinalFormulario != null){
		proceso = "true";
		pasoFinal();
	}

	//Oficina Virtual - Landing
	var isOficinaVirtualLanding = (window.location.href.indexOf("2000031246622") !== -1 || window.location.href.indexOf("2000031776435") !== -1);
	if (isOficinaVirtualLanding === true) {
		proceso = "true";
		oficinaVirtual(1);
	}

	//Oficina Virtual - Busqueda
	var isOficinaVirtualBusqueda = (window.location.href.indexOf("2000031365131") !== -1 || window.location.href.indexOf("2000031785913") !== -1);
	if (isOficinaVirtualBusqueda === true) {
		proceso = "true";
		oficinaVirtual(2);
	}

	//Oficina Virtual - FAQ
	if (window.location.href.indexOf("2000031301592") !== -1) {
		proceso = "true";
	}

	//Onboarding
	if (window.location.href.indexOf("2000032457735") !== -1) {
		proceso = "true";
		tagOnboardingView("2000032457735");
	}

	if(proceso == "false"){
		tealium_data.esProceso = proceso;
		llamada();
	}
	
}
//Buscador de oficinas
function buscadorOficinasInit(){
	vaciarTealium();
	tealium_data.nombreOperativa = "buscador oficinas y cajeros";
	tealium_data.pasoOperativa = "paso 1: inicio";
	tealium_data.esProceso = "true";
	llamada();
	var botonBuscador = document.querySelectorAll(".frmButton")[0]; 		
	if(document.addEventListener){
		botonBuscador.addEventListener("click", buscadorOficinasSend);
	}else{
		botonBuscador.attachEvent("onclick", buscadorOficinasSend);
	}
}
function buscadorOficinasSend(){
	var search = document.getElementById('search').value;
    if(search != ""){
		var oficina = document.getElementById("spanofi").className;
		var cajero = document.getElementById("spancaj").className;
		var tipo = "";
		if(oficina == "imgoficinas_checked" && cajero == "imgcajeros_checked"){
			tipo = "oficinas y cajeros"
		}else{
			if(oficina == "imgoficinas_checked"){
				tipo = "oficinas";
			}else if(cajero = "imgcajeros_checked"){
				tipo = "cajeros";
			}
		}
		vaciarTealium();
		tealium_data.nombreOperativa = "buscador oficinas y cajeros";
		tealium_data.pasoOperativa = "paso 2: busqueda realizada";
		tealium_data.localidadCodigoPostal = search;
		tealium_data.tipoSearch = tipo;
		tealium_data.esProceso = "true";
		llamada();
	}
}
//Buscador interno
function busquedaInterna(){
	var search = document.getElementsByName("consulta2")[0].value;
	vaciarTealium();
	tealium_data.nombreOperativa = "buscador interno";
	tealium_data.pasoOperativa = "paso 1: inicio";
	tealium_data.searchKeyword = search;
	tealium_data.esProceso = "true";
	llamada();
}
function busquedaInternaEnlaceVirtual(event) {
	//Event para todos los exploradores
	var event = event || window.event;
	var enlace = event.target || event.srcElement;
	vaciarTealium();
	tealium_data.nombreOperativa = "resultados de busqueda";
	tealium_data.pasoOperativa = "resultado asistente virtual";
	tealium_data.resultadoSearch = enlace.innerText;
	tealium_data.esProceso = "true";
	llamada();
}
function busquedaInternaEnlaceGeneral(event) {
	var event = event|| window.event;
	var enlace = event.target || event.srcElement;
	vaciarTealium();
	tealium_data.nombreOperativa = "resultados de busqueda";
	tealium_data.pasoOperativa = "resultado busqueda";
	tealium_data.resultadoSearch = "enlace.innerText";
	tealium_data.esProceso = "true";
	llamada();
}
//Chat Online
function inicioChatOnline() {
	vaciarTealium();
	tealium_data.nombreOperativa = "chat online";
	tealium_data.pasoOperativa = "iniciar chat con especialista online";
	tealium_data.esProceso = "true";
	llamada();
}
//Hagase Cliente Particulares
function hagaseClienteParticulares() {
	vaciarTealium();
	tealium_data.nombreOperativa = "hagase cliente - particulares";
	tealium_data.pasoOperativa = "paso1-datos de la operacion";
	tealium_data.nombreProducto = "cuenta expansion";
	tealium_data.esProceso = "true";
	llamada();
	var botonEnviar = document.querySelectorAll(".btn-blue")[0];
	if(botonEnviar!=null){
		if(document.addEventListener){
			botonEnviar.addEventListener("click",hagaseClienteParticulares2);
		}else{
			botonEnviar.attachEvent("onclick",hagaseClienteParticulares2);
		}
	}
}
function atrasParticulares1() {
	vaciarTealium();
	tealium_data.nombreOperativa = "hagase cliente - particulares";
	tealium_data.pasoOperativa = "paso1-datos de la operacion";
	tealium_data.nombreProducto = "cuenta expansion";
	tealium_data.esProceso = "true";
	llamada();
}
function hagaseClienteParticulares2() {
	if(!validateStep1IE()){
		llamadaEnvioForm("error","hagase cliente - particulares", document.querySelectorAll(".row.error-form")[0].getElementsByTagName("li")[0].innerText);
	}else{
		vaciarTealium();
		tealium_data.nombreOperativa = "hagase cliente - particulares";
		tealium_data.pasoOperativa = "paso2-escoja su oficina";
		tealium_data.nombreProducto = "cuenta expansion";
		tealium_data.esProceso = "true";
		llamada();
		var botonEnviar = document.querySelectorAll(".btn-blue")[1];
		if(botonEnviar!=null){
			if(document.addEventListener){
				botonEnviar.addEventListener("click",hagaseClienteParticulares3);
			}else{
				botonEnviar.attachEvent("onclick",hagaseClienteParticulares3);
			}
		}
	}
}
function atrasParticulares2() {
	vaciarTealium();
	tealium_data.nombreOperativa = "hagase cliente - particulares";
	tealium_data.pasoOperativa = "paso2-escoja su oficina";
	tealium_data.nombreProducto = "cuenta expansion";
	tealium_data.esProceso = "true";
	llamada();
}
function hagaseClienteParticulares3() {
	var estadoCivil = document.getElementById("resumeStatus").innerText;
	var pais = document.getElementsByClassName("selectBox-label")[5].innerText;
	var idioma = document.getElementById("resumeLanguage").innerText;
	vaciarTealium();
	tealium_data.nombreOperativa = "hagase cliente - particulares";
	tealium_data.pasoOperativa = "paso3-confirmación";
	tealium_data.nombreProducto = "cuenta expansion";
	tealium_data.regionCliente = pais;
	tealium_data.esProceso = "true";
	llamada();
	llamadaEnvioForm("succes","hagase cliente - particulares","succes")
}
//Hagase cliente de empresas (Lineas)
function hagaseClienteICO() {
	if(validator.fbValidate()){
		var aux = document.getElementById("tipocuenta.producto");
		var producto = aux.options[aux.selectedIndex].text;
		var rosa = document.querySelectorAll(".destacadoRosa2")[0];
		vaciarTealium();
		tealium_data.nombreOperativa = "hagase cliente-empresas";
		tealium_data.pasoOperativa = "paso2-comprobar solicitud";
		tealium_data.nombreProducto = producto;
		tealium_data.esProceso = "true";
		llamada();
		if(document.addEventListener){
			document.getElementsByName("fb:formsubmittext")[0].addEventListener("click",hagaseClienteICO2);
			document.getElementsByClassName("datosFacilitado")[0].addEventListener("click",atrasClienteICO);
		}else{
			document.getElementsByName("fb:formsubmittext")[0].attachEvent("onclick",hagaseClienteICO2);
			document.getElementsByClassName("datosFacilitado")[0].attachEvent("onclick",atrasClienteICO);
		}
	}else{
		llamadaEnvioForm("error", "hágase cliente-empresas", document.querySelectorAll(".textoDerechaDestacadosFormulario")[0].getElementsByTagName("li")[0].innerText);
	}
}
function atrasClienteICO() {
	vaciarTealium();
	tealium_data.nombreOperativa = "hagase cliente-empresas";
	tealium_data.pasoOperativa = "paso1-datos de la operación";
	tealium_data.nombreProducto = "lineas ico";
	tealium_data.esProceso = "true";
	llamada();
}
function hagaseClienteICO2() {
	var aux = document.getElementById("tipocuenta.producto");
	var producto = aux.options[aux.selectedIndex].text;
	vaciarTealium();
	tealium_data.nombreOperativa = "hagase cliente-empresas";
	tealium_data.pasoOperativa = "paso3-confirmacion";
	tealium_data.nombreProducto = producto;
	tealium_data.esProceso = "true";
	llamada();
	llamadaEnvioForm("succes","hágase cliente-empresas","succes");
}
//Formularios multipasos.
var divAValidar;
function formularioMultipasoInicio(){
	if(document.addEventListener){
		document.getElementsByClassName("datosFacilitado")[0].addEventListener("click",atrasMultipaso3);
		document.getElementsByClassName("goBack")[1].addEventListener("click",atrasMultipaso1);
		document.getElementsByClassName("goBack")[2].addEventListener("click",atrasMultipaso2);

	}else{
		document.getElementsByClassName("datosFacilitado")[0].attachEvent("onclick",atrasMultipaso3);
		document.getElementsByClassName("goBack")[1].attachEvent("onclick",atrasMultipaso1);
		document.getElementsByClassName("goBack")[2].addEventListener("click",atrasMultipaso2);

	}
	var producto = document.getElementsByName("producto")[0];
	divAValidar = document.getElementsByClassName("showscreen")[0].id;
	if(producto != null){
		producto = producto.value;
		var paso = "paso"+ document.querySelectorAll(".current")[0].innerText;
		vaciarTealium();
		tealium_data.nombreOperativa = "contratación";
		tealium_data.pasoOperativa = paso;
		tealium_data.nombreProducto = producto;
		tealium_data.esProceso = "true";
		llamada();
		if(document.addEventListener){
			var continues = document.querySelectorAll(".continue");
			var continua;
			for (var i = 0; i < continues.length; i++) {
				continua = continues[i];
				if(continua.name == ""){
					continua.addEventListener("click",formularioMultipaso);
				}else{
					continua.addEventListener("click",envioFinalMultipaso);
				}
			}
		}else{
			var continues = document.querySelectorAll(".continue");
			var continua;
			for (var i = 0; i < continues.length; i++) {
				continua = continues[i];
				if(continua.name == ""){
					continua.attachEvent("onclick",formularioMultipaso);
				}else{
					continua.addEventListener("click",envioFinalMultipaso);
				}
			}
		}
	}
}
function atrasMultipaso1() {
	divAValidar = document.getElementsByClassName("showscreen")[0].id;
	vaciarTealium();
	tealium_data.nombreOperativa = "contratación";
	tealium_data.pasoOperativa = "paso"+ document.querySelectorAll(".current")[0].innerText;
	tealium_data.nombreProducto = document.getElementsByName("producto")[0].value;
	tealium_data.esProceso = "true";
	llamada();
}
function atrasMultipaso2() {
	divAValidar = document.getElementsByClassName("showscreen")[0].id;
	vaciarTealium();
	tealium_data.nombreOperativa = "contratación";
	tealium_data.pasoOperativa = "paso"+ document.querySelectorAll(".current")[0].innerText;
	tealium_data.nombreProducto = document.getElementsByName("producto")[0].value;
	tealium_data.esProceso = "true";
	llamada();
}
function atrasMultipaso3() {
	divAValidar = document.getElementsByClassName("hiddenscreen")[0].id;
	vaciarTealium();
	tealium_data.nombreOperativa = "contratación";
	tealium_data.pasoOperativa = "paso"+ document.querySelectorAll(".current")[0].innerText;
	tealium_data.nombreProducto = document.getElementsByName("producto")[0].value;
	tealium_data.esProceso = "true";
	llamada();
}
function formularioMultipaso() {
	var producto = document.getElementsByName("producto")[0];	
	if(producto != null){
		producto = producto.value;
		var paso = "paso";
		if(document.querySelectorAll(".current")[0] != null){
			paso = paso + document.querySelectorAll(".current")[0].innerText;
		}else{
			paso = paso + "4. " + document.getElementById("titleComprobarSolicitud").innerText;
		}
		if(validator.fbValidate(divAValidar)){
			vaciarTealium();
			tealium_data.nombreOperativa = "contratación";
			tealium_data.pasoOperativa = paso;
			tealium_data.nombreProducto = producto;
			tealium_data.esProceso = "true";
			llamada();
		}else{
			llamadaEnvioForm("error",paso,document.querySelectorAll(".textoDerechaDestacadosFormulario")[0].getElementsByTagName("li")[0].innerText);
		}		
	}
	divAValidar = document.getElementsByClassName("showscreen")[0].id;
}
function envioFinalMultipaso() {
	llamadaEnvioForm("success", document.getElementsByName("producto")[0].value, "success");
}
//Formulario monopaso.
function formulariosProducto() {
	var producto = document.getElementById("producto");
	if(validator.fbValidateWithGA()){
		if(producto != null){
			producto = producto.value;
			vaciarTealium();
			tealium_data.nombreOperativa = "contratacion";
			tealium_data.pasoOperativa = "paso2-confirmación de la operación";
			tealium_data.nombreProducto = producto;
			tealium_data.esProceso = "true";
			llamada();
			if(document.addEventListener){
				document.getElementsByName("fb:formsubmittext")[1].addEventListener("click",formulariosProducto2);
				document.getElementsByClassName("datosFacilitado")[0].addEventListener("click",atrasMonoPaso);
			}else{
				document.getElementsByName("fb:formsubmittext")[1].attachEvent("onclick",formulariosProducto2);
				document.getElementsByClassName("datosFacilitado")[0].attachEvent("onclick",atrasMonoPaso);
			}
		}
	}else{
		llamadaEnvioForm("error","paso1-datos de la operación",document.querySelectorAll(".textoDerechaDestacadosFormulario")[0].getElementsByTagName("li")[0].innerText);
	}		
}
function atrasMonoPaso() {	
	vaciarTealium();
	tealium_data.nombreOperativa = "contratación";
	tealium_data.pasoOperativa = "paso1-datos de la operación";
	tealium_data.nombreProducto = document.getElementById("producto").value;
	tealium_data.esProceso = "true";	
	llamada();
}
function formulariosProducto2() {
	var producto = document.getElementById("producto");
	if(producto != null){
		producto = producto.value;
		vaciarTealium();
		tealium_data.nombreOperativa = "contratacion";
		tealium_data.pasoOperativa = "paso3-solicitud enviada";
		tealium_data.nombreProducto = producto;
		tealium_data.esProceso = "true";
		llamada();
		llamadaEnvioForm("success", "hágase cliente-empresas", "success");
	}
}
//Hagase cliente de empresas (Cuenta expansión)
function hagaseClienteEmpresa() {
	if(validator.fbValidate()){
		var aux = document.getElementById("personal.uno.estado");
		var estadoCivil = aux.options[aux.selectedIndex].text;
		aux = document.getElementById("personal.uno.pais");
		var pais = aux.options[aux.selectedIndex].text;
		aux = document.getElementById("personal.uno.idiomacom");
		var idioma = aux.options[aux.selectedIndex].text;
		var rosa = document.querySelectorAll(".destacadoRosa2")[0];
		vaciarTealium();
		tealium_data.nombreOperativa="hagase cliente-empresas";
		tealium_data.pasoOperativa="paso2-comprobar solicitud";
		tealium_data.nombreProducto="cuenta expansion";
		tealium_data.regionCliente=pais;
		tealium_data.esProceso = "true";
		llamada();
		if(document.addEventListener){
			document.getElementsByName("fb:formsubmittext")[0].addEventListener("click",hagaseClienteEmpresa2);
			document.getElementsByClassName("datosFacilitado")[0].addEventListener("click",atrasClienteEmpresas);
		}else{
			document.getElementsByName("fb:formsubmittext")[0].attachEvent("onclick",hagaseClienteEmpresa2);
			document.getElementsByClassName("datosFacilitado")[0].attachEvent("onclick",atrasClienteEmpresas);
		}
	}else{
		llamadaEnvioForm("error", "hágase cliente-empresas", document.querySelectorAll(".textoDerechaDestacadosFormulario")[0].getElementsByTagName("li")[0].innerText);
	}
}
function atrasClienteEmpresas() {
	vaciarTealium();
	tealium_data.nombreOperativa = "hagase cliente-empresas";
	tealium_data.pasoOperativa = "paso1-datos de la operación";
	tealium_data.nombreProducto = "cuenta expansion";
	tealium_data.esProceso = "true";
	llamada();
}
function hagaseClienteEmpresa2() {
	var aux = document.getElementById("personal.uno.estado");
	var estadoCivil = aux.options[aux.selectedIndex].text;
	aux = document.getElementById("personal.uno.pais");
	var pais = aux.options[aux.selectedIndex].text;
	aux = document.getElementById("personal.uno.idiomacom");
	var idioma = aux.options[aux.selectedIndex].text;
	vaciarTealium();
	tealium_data.nombreOperativa = "hagase cliente-empresas";
	tealium_data.pasoOperativa = "paso3-confirmacion";
	tealium_data.nombreProducto = "cuenta expansión";
	tealium_data.regionCliente = pais;
	tealium_data.esProceso = "true";
	llamada();
	llamadaEnvioForm("success", "hágase cliente-empresas", "success");
}
function callMeBack() {
	if(document.getElementById("fbFormCorrect").innerText == "Formulario procesado correctamente") {
		vaciarTealium();
		tealium_data.nombreOperativa = "call me back";
		tealium_data.pasoOperativa = "proceso completado";
		tealium_data.esProceso = "true";
		llamada();
	}
}
function pasoFinal() {
	var titulo = document.querySelectorAll(".margenIzqTitularFor")[0].innerText;
	var insideIframe = window.top !== window.self;
	if(!insideIframe){
		if(titulo == "Bienvenido a Banco Sabadell"){
			//formularios de hagase cliente empresa
			finalEmpresa();
		}else{
			//formularios random
			finalFormulario(titulo);
		}	
	}
	
}
function finalEmpresa() {
	vaciarTealium();
	tealium_data.nombreOperativa = "hagase cliente-empresas";
	tealium_data.pasoOperativa ="paso final-confimacion";
	tealium_data.esProceso = "true";
	var producto = document.querySelectorAll(".definicionFormulario")[0].innerText;
	if(producto.indexOf("Cuenta Expansión") != -1){
		//caso cuenta expansion
		tealium_data.nombreProducto = "cuenta expansion";
		//No tenemos el pais solo la provincia...
	}else if(producto.indexOf("ICO") != -1){
		//caso linea ico
		tealium_data.nombreProducto = "lineas ico";
	}else if(producto.indexOf("ICF") != -1){
		//caso linea icf
		tealium_data.nombreProducto = "Lineas ICF";
	}else{
		//acso linea BS-BI 2013
		tealium_data.nombreProducto = "Lineas BS-BI 2013";
	}
	llamada();
}
function finalFormulario(titulo) {
	vaciarTealium();
	tealium_data.nombreOperativa = "contratacion";
	tealium_data.pasoOperativa = "paso final-confirmación de la operación";
	tealium_data.nombreProducto = titulo;
	tealium_data.esProceso = "true";
	llamada();
}

function getPageId() {
	var exprMatch = window.location.href.match(/(\d{13})\/[a-z]{2}/);
	return exprMatch.length > 1 ? exprMatch[1] : "";
}

function getCookieSegmento() {
	var segmento = "particulares";
	var cookie = readCookie("segmento");
	if (cookie !== null && (cookie === "Empresas" || cookie === "Empreses" || cookie === "Enpresak" || cookie === "Business" || cookie === "Entreprises" || cookie === "Firmen")) {
        segmento = "empresas";
    }
    return segmento;
}

function oficinaVirtualComun() {
	tealium_data.pagina.categoriaPagina = "operativa";
	tealium_data.pagina.idPagina = getPageId();
	tealium_data.prod.categoriaProducto = "servicios";
	tealium_data.prod.nombreProducto = "asistente virtual";
	tealium_data.prod.nivel1 = getCookieSegmento();	
	tealium_data.prod.nivel2 = "servicios";
	tealium_data.prod.nivel3 = "asistente virtual";
	tealium_data.prod.nivel9 = "servicing";
	tealium_data.area.canal = "bancsabadell";
	tealium_data.area.entorno = readCookie("username") !== null ? "bso.transaccional" : "bso.informacional";
}

function tealiumCtaAsist(type) {
	var clickCTAInfo = "asistente virtual:" + idArticuloActual + ":" + type;
	tealium_data.pagina.nombreLink = "click_cta";
	tealium_data.eventos.click_cta_info = clickCTAInfo;
	bsSend('link', tealium_data);
}

function oficinaVirtual(id) {	
	tealium_data = newDataLayer();
	oficinaVirtualComun();
	switch(id) {
		case 1: /*Landing*/
			tealium_data.prod.nivel4 = "dashboard";
			tealium_data.operativa.pasoOperativa = "dashboard";
			break;
		case 2: /*Búsqueda*/
			tealium_data.prod.nivel4 = "resultado";
			tealium_data.operativa.pasoOperativa = "resultado";
			tealium_data.pagina.nombreLink = "search";
			tealium_data.busqueda.nombreSearch = "asistente virtual";
			var searchedText = getParameterByName('query');
			searchedText = searchedText.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
			tealium_data.busqueda.searchKeyword = searchedText;
			break;
		case 3: /*Detalle FAQ*/
			tealium_data.prod.nivel4 = idArticuloActual;
			tealium_data.operativa.pasoOperativa = idArticuloActual;
			tealium_data.operativa.idProceso = idArticuloActual;
			break;		 
	}
	llamadaInf();
}

function oficinaVirtualError(code, type, page, description) {
	tealium_data = newDataLayer();
	oficinaVirtualComun();
	tealium_data.operativa.pasoOperativa = "error";
	tealium_data.error.errorCode = code;
	tealium_data.error.errorType = type;
	tealium_data.error.errorPage = page;
	tealium_data.error.errorDescription = description;
	llamadaInf();
}

function tagOnboardingView(id) {
	tealium_data = newDataLayer();
	tealium_data.prod.paso = "paso1";
	tealium_data.operativa.pasoOperativa = "paso1";
	tealium_data.pagina.categoriaPagina = "landing";
	tealium_data.pagina.idioma = lang;
	tealium_data.pagina.idPagina = id;
	tealium_data.prod.nivel1 = "particulares";
	tealium_data.prod.nivel2 = "landing contratacion";
	tealium_data.prod.nivel3 = "cuentas";
	tealium_data.prod.nivel4 = "cuenta expansion";
	tealium_data.prod.categoriaProducto = "alta digital";
	tealium_data.prod.nombreProducto = "cuenta expansion";
	tealium_data.area.canal = "bancsabadell";
	tealium_data.area.entorno = entorno;
	tealium_data.pagina.nombreLink = "form_lead_inicio";
	llamadaInf();
}

function tagLink(clickCTAInfo) {
	tealium_data.pagina.nombreLink = "click_cta";
	tealium_data.eventos.click_cta_info = clickCTAInfo;
	if (typeof bsSend === 'function') {
		console.log("Llamada a la función bsSend.");
		bsSend("link", tealium_data);
	} else {
		console.log("Función bsSend no definida.");
	}
}

function llamadaInf() {
	if (typeof bsSend === 'function') {
		console.log("Llamada a la función bsSend.");
		bsSend("view", tealium_data);
	} else {
		console.log("Función bsSend no definida.");
	}
}

function llamada(){
	if(typeof bsProcesos === 'function'){
		try{		
			if(r('clientid')){
				tealium_data.idCliente = readCookie('clientid');
			}
			console.log("Llamada a la función bsProcesos.");
			bsProcesos(tealium_data);
		}catch(e){
			console.log("Función bsProcesos ha fallado.");
		}
	}else{
		console.log("Función bsProcesos no definida.");
	}
}

function llamadaEnvioForm(estado,paso,mensaje){
	if(typeof bsEnvioForm === 'function'){
		try{
			console.log("Llamada a la función bsEnvioForm.");
			bsEnvioForm(estado,paso,mensaje);
		}catch(e){
			console.log("Función bsEnvioForm ha fallado.");
		}
	}else{
		console.log("Función bsEnvioForm no definida.");
	}
}
