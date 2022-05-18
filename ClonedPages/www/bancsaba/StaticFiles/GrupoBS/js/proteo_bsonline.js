function testArch() {
	var id = "form:button3";
	var escapedId = id.replace(/:/g, "\\:");
	jQuery("#" + escapedId).addClass("testClass");
}
/**
 * Tratamiento para el correcto cierre de la pestaña mas opciones
 * Segun el navegador ejecuto una serie de acciones distinas, en explorer
 * tengo un escuchador para el documento entero que si pulsa fuera del componente
 * lo cierra.
 * Y en los demas el escuchador se encuentra en la etiqueta de html que nos permite
 * saber si el componente esta activo y lo cierra de ser asi.
 * @author jcabalal
 */
var nav = navigator.appName;

if (nav == "Microsoft Internet Explorer") {

    jQuery(document).click(function(event) {
          jQuery('.bso-enlace-tooltip').removeClass('active-tooltip');
        if(!jQuery(event.target).closest('.bso-button-combo').length) {
            if(jQuery('.bso-button-combo').hasClass('active')) {
            	if(jQuery(event.target).has( "li" ).length){
                 jQuery('.bso-boton-desplegable ul').fadeOut('fast');
                 jQuery('.bso-button-combo.active').removeClass('active');
            	}
            }
        }
          if (jQuery(event.target).hasClass('bso-enlace-tooltip')) {
                 if(!jQuery(event.target).hasClass('active-tooltip')){
                 jQuery(event.target).addClass('active-tooltip');
                 }
          }

          if(!jQuery('.bso-enlace-tooltip').hasClass('active-tooltip')){
                 if(!jQuery(event.target).closest('.bso-tooltip').length
                		 && !jQuery(event.target).closest('.bso-combo-estandar-select-flecha').length
                		 && !jQuery(event.target).closest('.ui-datepicker-prev').length
                		 && !jQuery(event.target).closest('.ui-datepicker-next').length){
                 jQuery('.bso-tooltip').fadeOut('fast') ;
                 jQuery('.bso-enlace-tooltip').removeClass('active-tooltip');
                 if (jQuery('.bso-combo-estandar-select').hasClass("activated")) {
	                	var desplCombo = jQuery('.bso-combo-estandar-select.activated');
	                	 desplCombo.find('.bso-combo-normal-lista').fadeOut('fast');
	                	 desplCombo.removeClass('activated');
	                	 jQuery('.bso-combo-estandar-select-flecha').removeClass('expanded');
	                 }
                 }
          }

    });
} else {
    jQuery('html').click(function(e) {
          jQuery('.bso-enlace-tooltip').removeClass('active-tooltip');
          if (jQuery('.bso-button-combo').hasClass('active')) {
        	  if(jQuery(e.target).has( "li" ).length){
        		  jQuery('.bso-boton-desplegable ul').fadeOut('fast');
        		  jQuery('.bso-button-combo.active').removeClass('active');}
          }

          if (jQuery(e.target).hasClass('bso-enlace-tooltip')) {
                 if(!jQuery(e.target).hasClass('active-tooltip')){
                 jQuery(e.target).addClass('active-tooltip');
                 }
          }

          if(!jQuery('.bso-enlace-tooltip').hasClass('active-tooltip')){
                 if(!jQuery(e.target).closest('.bso-tooltip').length
                 	&& !jQuery(e.target).closest('.bso-combo-estandar-select').length
                 	&& !jQuery(e.target).closest('.ui-datepicker-prev').length
                 	&&!jQuery(e.target).closest('.ui-datepicker-next').length ){
                 jQuery('.bso-tooltip').fadeOut('fast') ;
                 jQuery('.bso-enlace-tooltip').removeClass('active-tooltip');
	                 if (jQuery('.bso-combo-estandar-select').hasClass("activated")) {
	                	var desplCombo = jQuery('.bso-combo-estandar-select.activated');
	                	 desplCombo.find('.bso-combo-normal-lista').fadeOut('fast');
	                	 desplCombo.removeClass('activated');
	                	 jQuery('.bso-combo-estandar-select-flecha').removeClass('expanded');
	                 }
                 }
          }

    });
}

/**
 * Objeto de funciones útiles para la integración de Javascript con JSF
 *
 * @author aaregall
 * @since 2.9.0
 */




var ProteoJSFUtils = {
	/**
	 * Escapa el carácter <code>:</code>.
	 *
	 * @param id
	 * @returns la string con el carácter <code>:</code> escapado.
	 */
	escapeIdColons : function(id) {
		return id.replace(/:/g, "\\:");
	},
	/**
	 * Determina si una string tiene formato de fecha dd/mm/yyyy o no.
	 *
	 * @param str
	 * @returns {Boolean}
	 */
	isDateString : function(str) {
		var m = str
				.match(/(\d+)(-|\/)(\d+)(?:-|\/)(?:(\d+)\s+(\d+):(\d+)(?::(\d+))?(?:\.(\d+))?)?/);
		return (m) ? (m[2] == "/") : false;
	},
	/**
	 * Devuelve el prefijo que utilizan los id's de los inputs de componentes
	 * aplicativos de arquitectura.
	 *
	 * @returns {String}
	 */
	getArqAppComponentPrefixId : function() {
		return "arqAppComponent_";
	},
	/**
	 * Devuelve si una cadena empieza con un patrón de texto determinado
	 * Se utiliza para compatibilizar con varios navegadores
	 * @param str			Cadena a analizar
	 * @param pattern		Patrón a buscar
	 * @returns {Boolean}	Cumple (true), no cumple (false)
	 */
	startsWith : function(str, pattern) {

		if(!(str && pattern && pattern !== 'undefined')){
			return false;
		}

		var d = pattern.length;
		return d >= 0 && str.lastIndexOf(pattern, 0) === 0;
	},
	/**
	 * Devuelve si una cadena acaba con un patrón de texto determinado
	 * Se utiliza para compatibilizar con varios navegadores
	 * @param str			Cadena a analizar
	 * @param pattern		Patrón a buscar
	 * @returns {Boolean}	Cumple (true), no cumple (false)
	 */
	endsWith : function(str, pattern) {

		if(!(str && pattern && pattern !== 'undefined')){
			return false;
		}

		var d = str.length - pattern.length;
		return d >= 0 && str.lastIndexOf(pattern) === d;
	}
};

/**
 * Objeto de acceso a literales Proteo.
 *
 * @author aaregall
 * @since 2.9.0
 */
var ProteoLocalizer = {
	/**
	 * Devuelve el literal correspondiente a la clave parametrizada.
	 *
	 * @param key
	 * @returns literal
	 */
	getLiteral : function(key) {
		return (typeof (Proteo) !== 'undefined' && Proteo[key]) ? Proteo[key]
				: "NOT_FOUND_" + key;
	},

	/**
	 * Devuelve el literal correspondiente a la clave parametrizada contenida en
	 * el array especificado como parámetro.
	 *
	 * @param literalArray
	 * @param key
	 * @returns literal
	 */
	getFunctionalComponentLiteral : function(literalArray, key) {

		var la = window[literalArray];

		return (la !== 'undefined' && la[key]) ? la[key] : "NOT_FOUND_" + key;
	}
};

/**
 * Clase singleton Javascript de gestión de eventos de formularios.
 *
 * @author aaregall
 * @since 2.10.0
 */
var ProteoFormEventHandler = (function() {

	/**
	 * @private
	 */
	var _preventFormSubmit = function(event) {
		var keyCode = event.keyCode || event.which;
		if (keyCode == 13 && (event.target.type !== "submit")
				&& _isInputType(event.target)) {
			event.preventDefault();
			return false;
		}
	};

	/**
	 * Comprueba si <code>eventTarget</code> es un tag de entrada de texto
	 * cuyo evento enter se deba prevenir
	 *
	 * @private
	 * @param {DOMElement}
	 *            eventTarget
	 */
	function _isInputType(eventTarget) {
		var target = jQuery('#' + ProteoJSFUtils.escapeIdColons(eventTarget.id));
		var tag = target.prop("tagName").toLowerCase();
		return (tag == "input" || tag == "select");
	}
	;

	/**
	 * Gestiona los eventos <code>keyup</code> y <code>keypress</code> de
	 * los formularios de la vista, permitiendo prevenir el submit si se pulsa
	 * la tecla enter cuando el foco no es un type=submit.
	 *
	 * @public
	 * @param preventSubmitOnEnter,
	 *            define si se deberá prevenir el submit del formulario
	 */
	var handleFormKeyEvents = function(preventSubmitOnEnter) {
		var _prevent = preventSubmitOnEnter || true;
		if (_prevent) {
			jQuery("form").on("keyup keypress", _preventFormSubmit);
		}
	};

	/**
	 * Constructor de clase. Gestiona que la instancia de objeto de esta clase
	 * sea singleton.
	 *
	 * @constructor
	 */
	var _proteoFormEventHandler = function() {
		if (arguments.callee._singletonInstance) {
			return arguments.callee._singletonInstance;
		}
		arguments.callee._singletonInstance = {
			handleFormKeyEvents : handleFormKeyEvents
		};

		return arguments.callee._singletonInstance;
	};

	return _proteoFormEventHandler;
})();

/**
 * Variable encargada de gestionar peticiones AJAX
 *
 * @author everis
 * @since 3.0.0
 *
 */
var proteoAJAX = {

	/**
	 * Gestión del ciclo de vida de un evento AJAX
	 *
	 * @param data					Objeto con los datos de la petición AJAX
	 * @param _startCallback		Método a invocar en la fase inicial
	 * @param _endCallBack			Método a invocar en la fase final
	 * @param enableWaitingLayer	Objeto capa de espera. Permite configurar la capa de espera
	 */
	manageEvent : function(data, _startCallback, _endCallBack, enableWaitingLayer) {

		// Estado de la petición
		var ajaxStatus = data.status;

		switch (ajaxStatus) {
	        case "begin":

		        // console.log("AJAX Action is being executed (response not sended yet)...");

	        	if(enableWaitingLayer){
	        		proteoAJAX.showWaitingLayer(data.source.id);
	        	}

	        	if(_startCallback){
	        		_startCallback();
	        	}

	            break;

	        case "complete":

		        // console.log("AJAX Action is completed (response received)...");

	            break;

	        case "success":

		        // console.log("AJAX Action is successfully processed (finished)...");

	        	if(_endCallBack){
	        		_endCallBack();
	        	}

	        	if(enableWaitingLayer){

	        		// Desbloqueo de la capa de espera
	        		jQuery.unblockUI();

	        		// Cerramos cualquier lightbox de capa de espera abierto
	        		jQuery(document).find('div[id$=waitingLayer]').each(function(){
	        			if(ProteoJSFUtils.startsWith(jQuery(this).attr('id'), 'lightbox')) {
	        				proteoLightbox.close(jQuery(this).attr('id'));
	        			}
	        		});
	        	}

	            break;
		}
    },

    showWaitingLayer : function(parentId) {

		// Buscamos un elemento con id 'xxx<waitingLayer>xxx', definido después del elemeneto
    	// que ha disparado el evento
    	var waitingLayerElem = jQuery("#" + ProteoJSFUtils.escapeIdColons(parentId));

    	waitingLayerElem = jQuery(waitingLayerElem).next().find('div[id$=waitingLayer]');

		if(waitingLayerElem && waitingLayerElem.length){

			// Si se trata de un lightbox, lo abrimos
			var waitingLayerID = waitingLayerElem.attr('id');
			if(ProteoJSFUtils.startsWith(waitingLayerID, 'lightbox')) {
				waitingLayerID = waitingLayerID.substring('lightbox_'.length);
				proteoLightbox.open(ProteoJSFUtils.escapeIdColons(waitingLayerID));
			}
			else {
				// Contenido custom a cargar por blockUI
				proteoAJAX.customWaitingLayer(waitingLayerElem);
			}
		}
		else {
			proteoAJAX.defaultWaitingLayer();
		}
    },

    defaultWaitingLayer : function() {

    	var message = ProteoLocalizer.getLiteral("waitingLayer.default.message");

    	jQuery.blockUI({
			title:	''
			, message : message

	        , css : {
				border: 'none'
				, padding: '15px'
				, 'font-size' : '18px'
				, backgroundColor: '#000'
				, '-webkit-border-radius': '10px'
				, '-moz-border-radius': '10px'
				, opacity: '0.7'
				, color: '#fff'
			}
			, timeout : 20000
		});
    },

    customWaitingLayer : function(waitingLayerElem) {

    	jQuery.blockUI({
			message: waitingLayerElem
			, timeout: 20000
		});
    }
};

/*******************************************************************************
 * COMPONENTES BS-Online
 ******************************************************************************/
/**
 * Objeto de gestión de comportamiento Javascript del componente
 * ProteoInformationNoticeComponent.
 *
 * @auhtor BCR
 * @since 2.9.0
 */
var proteoInformationNotice = {

	initComponent : function(clientId, position) {

		var obj = jQuery('.bso-aviso span.bso-tooltip-down-arrow');
		if (position == "left") {
			obj.css('left', '25%');
		}
		if (position == "center") {
			obj.css('left', '50%');
		}
		if (position == "right") {
			obj.css('left', '75%');
		}

	},
	close : function(clientId) {

		var escapedId = ProteoJSFUtils.escapeIdColons(clientId)

		jQuery('#' + escapedId).fadeTo('fast', 0, function() {
			jQuery(this).hide();
		});

	},
};

/**
 * Método que, a partir de una URL, genera (y ejecuta) un formulario
 * para navegar hasta esa ruta, pasando los parámetros por POST.
 *
 * @param url - URL de lavegación
 * @param urlParams - Mapa de parámetros a incluir en la URL
 */
function createAndExecutePOSTLink(url, urlParams) {

	var inputs = '';
	if(!jQuery.isEmptyObject(urlParams)) {
		for(var prop in urlParams) {
			inputs += '<input type="hidden" name="' + prop
				+ '" value="' + urlParams[prop].replace(/"/g, "&quot;") + '">';
		}
	}

	var form = jQuery('<form action="' + url + '" method="POST">' + inputs + '</form>');

	jQuery('body').append(form);
	form.submit();
}

function irADevolverMovimiento(url, timeStamp, amountValue, amountCurrency,
		accountBank, accountAccountNumber, accountBranch, accountCheckDigit,
		productCode, sessionDateDay, sessionDateMonth, sessionDateYear,
		valueDateDay, valueDateMonth, valueDateYear, movementDateDay,
		movementDateMonth, movementDateYear, existDocument, balance,
		apuntNumber, referencor, extractType) {

	var form = jQuery('<form action="' + url + '" method="POST">'
			+ '<input type="hidden" name="timeStamp" value="' + timeStamp
			+ '">' + '<input type="hidden" name="amount.value" value="'
			+ amountValue + '">'
			+ '<input type="hidden" name="amount.currency" value="'
			+ amountCurrency + '">'
			+ '<input type="hidden" name="account.bank" value="' + accountBank
			+ '">'
			+ '<input type="hidden" name="account.accountNumber" value="'
			+ accountAccountNumber + '">'
			+ '<input type="hidden" name="account.branch" value="'
			+ accountBranch + '">'
			+ '<input type="hidden" name="account.checkDigit" value="'
			+ accountCheckDigit + '">'
			+ '<input type="hidden" name="productCode" value="' + productCode
			+ '">' + '<input type="hidden" name="sessionDate.day" value="'
			+ sessionDateDay + '">'
			+ '<input type="hidden" name="sessionDate.month" value="'
			+ sessionDateMonth + '">'
			+ '<input type="hidden" name="sessionDate.year" value="'
			+ sessionDateYear + '">'
			+ '<input type="hidden" name="valueDate.day" value="'
			+ valueDateDay + '">'
			+ '<input type="hidden" name="valueDate.month" value="'
			+ valueDateMonth + '">'
			+ '<input type="hidden" name="valueDate.year" value="'
			+ valueDateYear + '">'
			+ '<input type="hidden" name="movementDate.day" value="'
			+ movementDateDay + '">'
			+ '<input type="hidden" name="movementDate.month" value="'
			+ movementDateMonth + '">'
			+ '<input type="hidden" name="movementDate.year" value="'
			+ movementDateYear + '">'
			+ '<input type="hidden" name="existDocument" value="'
			+ existDocument + '">'
			+ '<input type="hidden" name="balance" value="' + balance + '">'
			+ '<input type="hidden" name="apuntNumber" value="' + apuntNumber
			+ '">' + '<input type="hidden" name="referencor" value="'
			+ referencor + '">'
			+ '<input type="hidden" name="extractType" value="' + extractType
			+ '">' +

			'</form>');

	jQuery('body').append(form);
	form.submit();
}

/**
 * Objeto de gestion de comportamiento Javascript del componente "Contendor de
 * filtros".
 *
 * @author BCaracena
 */

function setValorFiltro(id_filtro, valor) {
	if (id_filtro.indexOf("id_txt", 0) != -1) {
		jQuery("#" + ProteoJSFUtils.escapeIdColons(id_filtro)).val(valor);
	}

	else if (id_filtro.indexOf("id_cmb", 0) != -1) {
		jQuery(
				"#" + ProteoJSFUtils.escapeIdColons(id_filtro)
						+ " .bso-combo-normal-input span")
				.html(
						ProteoLocalizer
								.getLiteral("bso.channel.component.filterContainer.combo.default"));
		jQuery("#" + ProteoJSFUtils.escapeIdColons(id_filtro)).val(valor);
		id_filtro = id_filtro.substring(15, id_filtro.length);
		jQuery("#" + ProteoJSFUtils.escapeIdColons(id_filtro)).val(valor);

	} else if (id_filtro.indexOf("id_date", 0) != -1) {
		var dia = jQuery("input.bso-textfield.bso-textfield-dia");
		var mes = jQuery("input.bso-textfield.bso-textfield-mes");
		var anio = jQuery("input.bso-textfield.bso-textfield-anio");

		var partes = valor.split("/");

		if (partes.length < 3) {
			dia.val("");
			mes.val("");
			anio.val("");
		} else {
			dia.val(partes[0]);
			mes.val(partes[1]);
			anio.val(partes[2]);
		}
	}
}

function crearFiltro(valor, id) {
	var filtro = new Array(valor, id);
	return filtro;
}
var proteoFilterContainer = {
	initComponent : function(clientId) {

		if (jQuery('#'
				+ ProteoJSFUtils.escapeIdColons(clientId)
				+ '.bso-contenedor-filtros .bso-contenedor-filtros-etiquetas ul li').length > 0) {
			jQuery(
					'#'
							+ ProteoJSFUtils.escapeIdColons(clientId)
							+ '.bso-contenedor-filtros .bso-contenedor-filtros-add')
					.hide();
			jQuery(
					'#'
							+ ProteoJSFUtils.escapeIdColons(clientId)
							+ '.bso-contenedor-filtros .bso-contenedor-filtros-editar')
					.show();
		} else {
			jQuery(
					'#'
							+ ProteoJSFUtils.escapeIdColons(clientId)
							+ '.bso-contenedor-filtros .bso-contenedor-filtros-editar')
					.hide();
			jQuery(
					'#'
							+ ProteoJSFUtils.escapeIdColons(clientId)
							+ '.bso-contenedor-filtros .bso-contenedor-filtros-add')
					.show();
		}
		this.applyPlaceholder();

	},

	borrarTooltip : function(idComponent) {
		if (jQuery('.bso-contenedor-filtros').length > 0) {

			jQuery(
					'div[id="' + idComponent
							+ '"]  .bso-combo-normal-input div')
					.html(
							ProteoLocalizer
									.getLiteral("bso.channel.component.filterContainer.combo.default"));

			jQuery(
					'div[id="' + idComponent
							+ '"] input[id$="cmb_intervalo_fecha"]').val(
					"default");

			jQuery(
					'div[id="' + idComponent
							+ '"] input[id^="day_"][id$="id_date_desde"]').val(
					"");
			jQuery(
					'div[id="' + idComponent
							+ '"] input[id^="month_"][id$="id_date_desde"]')
					.val("");
			jQuery(
					'div[id="' + idComponent
							+ '"] input[id^="year_"][id$="id_date_desde"]')
					.val("");
			jQuery(
					'div[id="' + idComponent
							+ '"] input[id^="day_"][id$="id_date_hasta"]').val(
					"");
			jQuery(
					'div[id="' + idComponent
							+ '"] input[id^="month_"][id$="id_date_hasta"]')
					.val("");
			jQuery(
					'div[id="' + idComponent
							+ '"] input[id^="year_"][id$="id_date_hasta"]')
					.val("");

			if (jQuery('.bso-combo-estandar-select .bso-combo-normal-input a div').hasClass("selected")){
				jQuery('.bso-combo-estandar-select .bso-combo-normal-input a div').removeClass("selected");
				}
			jQuery('div[id="' + idComponent + '"] input[id$="id_cmb_importe"]')
					.val("default");

			jQuery('div[id="' + idComponent + '"] input[id$="id_cmb_tipo_concepto"]')
			.val("default");

			jQuery(
					'div[id="' + idComponent
							+ '"] input[id$="id_txt_importe_hasta"]').val("");
			jQuery(
					'div[id="' + idComponent
							+ '"] input[id$="id_txt_importe_desde"]').val("");

			if (jQuery('div[id="' + idComponent
					+ '"] input[id$="id_cmb_tipo_operacion"]')) {
				jQuery(
						'div[id="' + idComponent
								+ '"] input[id$="id_cmb_tipo_operacion"]').val(
						"default");
			}

			this.mostarIntervaloFechas(idComponent);
			this.mostarEntre2Fechas(idComponent);
			this.mostarImportes(idComponent);
			this.mostarComboImportes(idComponent);

			this.clearErrors(idComponent);
		}
	},

	mostarIntervaloFechas : function(idComponent) {
		if (jQuery('.bso-contenedor-filtros').length > 0) {
				jQuery('div[id="' + idComponent + '"] div[id="entre2fechas"]')
						.show();
				jQuery(
						'div[id="' + idComponent
								+ '"] input[id$="cmb_intervalo_fecha"]').show;
				jQuery(
						'div[id="' + idComponent
								+ '"] input[id$="cmb_intervalo_fecha"]').on('change', function() {
									var combo =jQuery(
											'div[id="' + idComponent
											+ '"] input[id$="cmb_intervalo_fecha"]');
									if(combo.val()!= "default")
									{
										var diaDesde = jQuery(
												'div[id="' + idComponent
														+ '"] input[id^="day_"][id$="id_date_desde"]');
										var mesDesde = jQuery(
												'div[id="' + idComponent
														+ '"] input[id^="month_"][id$="id_date_desde"]');
										var anioDesde = jQuery(
												'div[id="' + idComponent
														+ '"] input[id^="year_"][id$="id_date_desde"]');

										var diaHasta = jQuery(
												'div[id="' + idComponent
														+ '"] input[id^="day_"][id$="id_date_hasta"]');
										var mesHasta = jQuery(
												'div[id="' + idComponent
														+ '"] input[id^="month_"][id$="id_date_hasta"]');
										var anioHasta = jQuery(
												'div[id="' + idComponent
														+ '"] input[id^="year_"][id$="id_date_hasta"]');
										var today = new Date();
										var deduct= new Date();
										var dd = today.getDate();
										var mm = today.getMonth()+1;
										var yyyy = today.getFullYear();

										if(dd<10) {
										    dd='0'+dd;
										}

										if(mm<10) {
										    mm='0'+mm;
										}

										diaHasta.val(dd);
										mesHasta.val(mm);
										anioHasta.val(yyyy);
										var value=combo.val();
										if(value=="0"){
											deduct = new Date();
											}
										else if(value=="7"){
											deduct = new Date(new Date().setDate(new Date().getDate()-7));}
										else if(value != "default"){
											deduct = new Date(new Date().setMonth(new Date().getMonth()-value));}
										dd = deduct.getDate();
										mm = deduct.getMonth()+1;
										yyyy = deduct.getFullYear();
										if(dd<10) {dd='0'+dd;}
										if(mm<10) {mm='0'+mm;}
										diaDesde.val(dd);
										mesDesde.val(mm);
										anioDesde.val(yyyy);
									}
								});

		}
	},


	mostarEntre2Fechas : function(idComponent) {
		if (jQuery('.bso-contenedor-filtros').length > 0) {

			var valorDiaDesde = jQuery(
					'div[id="' + idComponent
							+ '"] input[id^="day_"][id$="id_date_desde"]')
					.val();
			var valorMesDesde = jQuery(
					'div[id="' + idComponent
							+ '"] input[id^="month_"][id$="id_date_desde"]')
					.val();
			var valorAnyoDesde = jQuery(
					'div[id="' + idComponent
							+ '"] input[id^="year_"][id$="id_date_desde"]')
					.val();
			var valorDiaHasta = jQuery(
					'div[id="' + idComponent
							+ '"] input[id^="day_"][id$="id_date_hasta"]')
					.val();
			var valorMesHasta = jQuery(
					'div[id="' + idComponent
							+ '"] input[id^="month_"][id$="id_date_hasta"]')
					.val();
			var valorAnyoHasta = jQuery(
					'div[id="' + idComponent
							+ '"] input[id^="year_"][id$="id_date_hasta"]')
					.val();

			if (valorDiaDesde == "" && valorMesDesde == ""
					&& valorAnyoDesde == "") {
				hayFechaDesde = false;
			} else if (valorDiaDesde != "" || valorMesDesde != ""
					|| valorAnyoDesde != "") {
				hayFechaDesde = true;
			}
			if (valorDiaHasta == "" && valorMesHasta == ""
					&& valorAnyoHasta == "") {
				hayFechaHasta = false;
			} else if (valorDiaHasta != "" || valorMesHasta != ""
					|| valorAnyoHasta != "") {
				hayFechaHasta = true;
			}
			jQuery('div[id="' + idComponent + '"] div[id="intervaloFecha"]')
						.show();

		}

	},

	mostarImportes : function(idComponent) {
		if (jQuery('.bso-contenedor-filtros').length > 0) {

			var importeHasta = jQuery(
					'div[id="' + idComponent
							+ '"] input[id$="id_txt_importe_hasta"]').val();
			var importeDesde = jQuery(
					'div[id="' + idComponent
							+ '"] input[id$="id_txt_importe_desde"]').val();
			var hayImporteDesde = false;
			var hayImporteHasta = false;
			if (importeDesde == "" || importeDesde == "Desde") {
				hayImporteDesde = false;
			} else if (importeDesde != "" && importeDesde != "Desde") {
				hayImporteDesde = true;
			}
			if (importeHasta == "" || importeHasta == "Hasta") {
				hayImporteHasta = false;
			} else if (importeHasta != "" && importeHasta != "Hasta") {
				hayImporteHasta = true;
			}

			this.mostrarTipoImporte(idComponent);
		}
	},

	mostarComboImportes : function(idComponent, maximp) {
		if (jQuery('.bso-contenedor-filtros').length > 0) {
			var valor = jQuery(
					'div[id="' + idComponent + '"] input[id$="id_cmb_importe"]')
					.val();

			var importeHasta = jQuery(
					'div[id="' + idComponent
							+ '"] input[id$="id_txt_importe_hasta"]');
			var importeDesde = jQuery(
					'div[id="' + idComponent
							+ '"] input[id$="id_txt_importe_desde"]');
			var idImporteDesde = jQuery(
					'div[id="' + idComponent
							+ '"] input[id$="id_txt_importe_desde"]').attr("id");
			var idImporteHasta = jQuery(
					'div[id="' + idComponent
							+ '"] input[id$="id_txt_importe_hasta"]').attr("id");


			removeErrorMessage(idImporteDesde);
			removeInvalidComponentClass(idImporteDesde);
			removeErrorMessage(idImporteHasta);
			removeInvalidComponentClass(idImporteHasta);

			if(valor === "menos50") {
				importeDesde.val("0,00");
				importeHasta.val("50,00");
			}
			else if(valor === "mas1000") {
				importeDesde.val("1.000,00");

				importeHasta.val(maximp);
			}
			else if(valor != "default"){
				var interval = valor.split("hasta");
				importeDesde.val(interval[0]+",00");
				importeHasta.val(interval[1]+",00");
			}

			this.mostrarTipoImporte(idComponent);
		}
	},
	mostrarTipoImporte : function(idComponent) {
		if (jQuery('.bso-contenedor-filtros').length > 0) {
			var importeHasta = jQuery(
					'div[id="' + idComponent
							+ '"] input[id$="id_txt_importe_hasta"]').val();
			var importeDesde = jQuery(
					'div[id="' + idComponent
							+ '"] input[id$="id_txt_importe_desde"]').val();
			var valor_combo = jQuery(
					'div[id="' + idComponent + '"] input[id$="id_cmb_importe"]')
					.val();

			if ((importeHasta != null && importeHasta != "")
					|| (importeDesde != null && importeDesde != "")
					|| (valor_combo != null && valor_combo != "" && valor_combo != "default")) {
				if((importeHasta!="Hasta" || importeDesde!="Desde")){
				jQuery(
						'div[id="' + idComponent
								+ '"] div[id="radio_import_type"]').show();
				}
				else {
					jQuery(
							'div[id="' + idComponent
									+ '"] div[id="radio_import_type"]').hide();
				}

			} else {
				jQuery(
						'div[id="' + idComponent
								+ '"] div[id="radio_import_type"]').hide();
			}
		}
	},

	eliminarFiltro : function(idComponent, id_filtro) {

		var filtro = jQuery('div[id="' + idComponent + '"] li[id="' + id_filtro
				+ '"]');

		if (id_filtro.indexOf("DATE", 0) != -1) {

			jQuery(
					'div[id="' + idComponent
							+ '"] input[id$="cmb_intervalo_fecha"]')
					.parent()
					.find('.bso-combo-normal-input span')
					.html(
							ProteoLocalizer
									.getLiteral("bso.channel.component.filterContainer.combo.default"));

			jQuery(
					'div[id="' + idComponent
							+ '"] input[id$="cmb_intervalo_fecha"]').val(
					"default");

			jQuery(
					'div[id="' + idComponent
							+ '"] input[id^="day_"][id$="id_date_desde"]').val(
					"");
			jQuery(
					'div[id="' + idComponent
							+ '"] input[id^="month_"][id$="id_date_desde"]')
					.val("");
			jQuery(
					'div[id="' + idComponent
							+ '"] input[id^="year_"][id$="id_date_desde"]')
					.val("");
			jQuery(
					'div[id="' + idComponent
							+ '"] input[id^="day_"][id$="id_date_hasta"]').val(
					"");
			jQuery(
					'div[id="' + idComponent
							+ '"] input[id^="month_"][id$="id_date_hasta"]')
					.val("");
			jQuery(
					'div[id="' + idComponent
							+ '"] input[id^="year_"][id$="id_date_hasta"]')
					.val("");

		} else if (id_filtro.indexOf("IMPORT", 0) != -1) {
			jQuery('div[id="' + idComponent + '"] input[id$="id_cmb_importe"]')
					.parent()
					.find('.bso-combo-normal-input span')
					.html(
							ProteoLocalizer
									.getLiteral("bso.channel.component.filterContainer.combo.default"));

			jQuery('div[id="' + idComponent + '"] input[id$="id_cmb_importe"]')
					.val("default");

			jQuery(
					'div[id="' + idComponent
							+ '"] input[id$="id_txt_importe_hasta"]').val("");
			jQuery(
					'div[id="' + idComponent
							+ '"] input[id$="id_txt_importe_desde"]').val("");

			this.mostrarTipoImporte(idComponent);

		} else if (id_filtro.indexOf("OPERATION", 0) != -1) {
			jQuery(
					'div[id="' + idComponent
							+ '"] input[id$="id_cmb_tipo_operacion"]')
					.parent()
					.find('.bso-combo-normal-input span')
					.html(
							ProteoLocalizer
									.getLiteral("bso.channel.component.filterContainer.combo.default"));
			jQuery(
					'div[id="' + idComponent
							+ '"] input[id$="id_cmb_tipo_operacion"]').val(
					"default");
		}

		filtro.fadeOut(400, function() {
			jQuery(this).remove();
		});
	},
	clearErrors : function(idComponent) {
		var idFechaDesde = jQuery(
				'div[id="' + idComponent
						+ '"] input[id^="day_"][id$="id_date_desde"]').attr(
				"id").replace("day_", "");
		var idFechaHasta = jQuery(
				'div[id="' + idComponent
						+ '"] input[id^="day_"][id$="id_date_hasta"]').attr(
				"id").replace("day_", "");

		var idImporteDesde = jQuery(
				'div[id="' + idComponent
						+ '"] input[id$="id_txt_importe_desde"]').attr("id");
		var idImporteHasta = jQuery(
				'div[id="' + idComponent
						+ '"] input[id$="id_txt_importe_hasta"]').attr("id");

		removeErrorMessage(idFechaDesde);
		removeInvalidComponentClass(idFechaDesde);
		removeErrorMessage(idFechaHasta);
		removeInvalidComponentClass(idFechaHasta);

		removeErrorMessage(idImporteDesde);
		removeInvalidComponentClass(idImporteDesde);
		removeErrorMessage(idImporteHasta);
		removeInvalidComponentClass(idImporteHasta);
	},
	validateTooltip : function(idComponent) {

		this.clearErrors(idComponent);
		var importeMax = 10000000000000.0;
		var importeMin = 0;

		var diaDesde = jQuery(
				'div[id="' + idComponent
						+ '"] input[id^="day_"][id$="id_date_desde"]').val();
		var mesDesde = jQuery(
				'div[id="' + idComponent
						+ '"] input[id^="month_"][id$="id_date_desde"]').val();
		var anioDesde = jQuery(
				'div[id="' + idComponent
						+ '"] input[id^="year_"][id$="id_date_desde"]').val();

		var diaHasta = jQuery(
				'div[id="' + idComponent
						+ '"] input[id^="day_"][id$="id_date_hasta"]').val();
		var mesHasta = jQuery(
				'div[id="' + idComponent
						+ '"] input[id^="month_"][id$="id_date_hasta"]').val();
		var anioHasta = jQuery(
				'div[id="' + idComponent
						+ '"] input[id^="year_"][id$="id_date_hasta"]').val();

		var idFechaDesde = jQuery(
				'div[id="' + idComponent
						+ '"] input[id^="day_"][id$="id_date_desde"]').attr(
				"id").replace("day_", "");
		var idFechaHasta = jQuery(
				'div[id="' + idComponent
						+ '"] input[id^="day_"][id$="id_date_hasta"]').attr(
				"id").replace("day_", "");

		var fechaDesde;
		var fechaHasta;
		var fechaActual = new Date();
		var hayFechaDesde = false;
		var hayFechaHasta = false;
		var hayError = false;
		if (diaDesde != "" && mesDesde != "" && anioDesde != "") {
			fechaDesde = new Date(anioDesde, mesDesde, diaDesde);
			hayFechaDesde = true;
		}
		if (diaHasta != "" && mesHasta != "" && anioHasta != "") {
			fechaHasta = new Date(anioHasta, mesHasta, diaHasta);
			hayFechaHasta = true;
		}

		if (typeof (fechaDesde) != "undefined") {
			dif = fechaActual - fechaDesde;
			var dias = Math.floor(dif / (1000 * 60 * 60 * 24));

			if (dias > 730) {
				addErrorMessage(idFechaDesde,
						"bso.channel.component.filterContainer.error.fechaDesdeYhastaMayor24Meses");
				addInvalidComponentClass(idFechaDesde);
				hayError = true;
			}

			if (fechaDesde > fechaHasta) {
				addErrorMessage(idFechaDesde,
						"bso.channel.component.filterContainer.error.fechaEntradaDesdeesMayor");
				addInvalidComponentClass(idFechaDesde);

				addErrorMessage(idFechaHasta,
						"bso.channel.component.filterContainer.error.fechaEntradaHastaEsMenor");
				addInvalidComponentClass(idFechaHasta);

				hayError = true;
			}
		}
		if (hayFechaDesde == true && hayFechaHasta == false) {
			addErrorMessage(idFechaHasta,
					"bso.channel.component.filterContainer.error.fechaEntradaHastaEmpty");
			addInvalidComponentClass(idFechaHasta);
			hayError = true;
		}
		if (hayFechaDesde == false && hayFechaHasta == true) {
			addErrorMessage(idFechaDesde,
					"bso.channel.component.filterContainer.error.fechaEntradaDesdeEmpty");
			addInvalidComponentClass(idFechaDesde);
			hayError = true;
		}

        var importeHasta = jQuery(
                      'div[id="' + idComponent
                                   + '"] input[id$="id_txt_importe_hasta"]').val();
        var importeDesde = jQuery(
                      'div[id="' + idComponent
                                   + '"] input[id$="id_txt_importe_desde"]').val();

        var idImporteDesde = jQuery(
                      'div[id="' + idComponent
                                   + '"] input[id$="id_txt_importe_desde"]').attr("id");
        var idImporteHasta = jQuery(
                      'div[id="' + idComponent
                                   + '"] input[id$="id_txt_importe_hasta"]').attr("id");

        if ((importeDesde != "") && (importeHasta != "")) {
               var importeDesdeFloat = importeDesde.replace(/\./g, '');
               var importeHastaFloat = importeHasta.replace(/\./g, '');
               importeDesdeFloat = importeDesdeFloat.replace(",", '.');
               importeHastaFloat = importeHastaFloat.replace(",", '.');
               importeDesdeFloat = parseFloat( importeDesdeFloat);
               importeHastaFloat = parseFloat(importeHastaFloat);

               if (importeDesdeFloat > importeHastaFloat) {

                      addErrorMessage(idImporteDesde,
                                    "bso.channel.component.filterContainer.error.importeEntradaDesdeEsMayor");
                      addInvalidComponentClass(idImporteDesde);

                      hayError = true;
               }

               if (importeDesdeFloat < importeMin) {
                      addErrorMessage(idImporteDesde,
                                   'bso.channel.component.currencyinput.min');
                      addInvalidComponentClass(idImporteDesde);
                      hayError = true;
               } else if (importeDesdeFloat > importeMax) {
                      addErrorMessage(idImporteDesde,
                                   'bso.channel.component.currencyinput.max');
                      addInvalidComponentClass(idImporteDesde);
                      hayError = true;
               }

               if (importeHastaFloat < importeMin) {
                      addErrorMessage(idImporteHasta,
                                   'bso.channel.component.currencyinput.min');
                      addInvalidComponentClass(idImporteHasta);
                      hayError = true;
               } else if (importeHastaFloat > importeMax) {
                      addErrorMessage(idImporteHasta,
                                   'bso.channel.component.currencyinput.max');
                      addInvalidComponentClass(idImporteHasta);
                      hayError = true;
               }

        }
        if (importeDesde != ""
                      && (importeHasta == "" || typeof (importeHasta) === "undefined")) {
               addErrorMessage(idImporteHasta,
                             "bso.channel.component.filterContainer.error.importeEntradaHastaEmpty");
               addInvalidComponentClass(idImporteHasta);
               hayError = true;
        }
        if ((typeof (importeDesde) === "undefined" || importeDesde == "")
                      && importeHasta != "") {
               addErrorMessage(importeDesde,
                             "bso.channel.component.filterContainer.error.importeEntradaDesdeEmpty");
               addInvalidComponentClass(importeDesde);
               hayError = true;
        }

        if (hayError) {
               return false;
        } else {
               return true;
        }

  },
  applyPlaceholder : function(clientId) {
	  jQuery('[placeholder]').placeholder();
	  jQuery(window).unbind("beforeunload.placeholder");

  }

};

/**
 * Objeto de gestión de comportamiento Javascript del componente "Texto de
 * Entrada"
 *
 * @author aaregall
 * @since 2.9.0
 */
var proteoTextInput = {

		initComponent:function(clientId){

			jQuery('input[id="' + clientId + '"]').keyup(function(e){
				var key=e.keyCode? e.keyCode : e.charCode;
				if(key !== 18 && key !== 17 && key !== 16){
				filtroListaBlanca(jQuery(this),clientId);}
			});
			jQuery('input[id="' + clientId + '"]').bind('paste',function(e){
				var text = '';
				if (window.clipboardData && window.clipboardData.getData) { // IE
					text = window.clipboardData.getData('Text');
				}
				else if (e.originalEvent.clipboardData && e.originalEvent.clipboardData.getData) { // other browsers
					text = e.originalEvent.clipboardData.getData('text/plain');
				}

				if(text){
					text = eliminarCaract(text);
					var escapedId = ProteoJSFUtils.escapeIdColons(clientId);
					jQuery("#" + escapedId).val(text);
				}
				return false;
			});
		},

	/**
	 * Validación de la longitud del valor del campo de texto.
	 *
	 * @param {String}
	 *            clientId
	 * @param {Integer}
	 *            maxLength
	 */
	validate : function(clientId, maxLength, event) {
		var val = jQuery('input[id="' + clientId + '"]').val();
		if (val.length > maxLength) {
			addErrorMessage(clientId,
					"bso.channel.component.textinput.error.maxlength");
			addInvalidComponentClass(clientId);
		} else {
			if (event) {
				var keyCode = event.keyCode || event.which;
				if (keyCode == 13) {
					event.preventDefault();
					return false;
				}
			}
			removeInvalidComponentClass(clientId);
		}
		return true;
	},
	/**
	 * Aplica la funcionalidad del atributo placeholder. Usado para
	 * comaptibilidad en IE.
	 *
	 * @param {String}
	 *            clientId
	 */
	applyPlaceholder : function(clientId) {
		jQuery('input[id="' + clientId + '"]').placeholder();
	}
};

/**
 * Objeto de gestión de comportamiento Javascript del
 * componente "Combo estándar" (combobox).
 *
 * @author aaregall
 * @since 2.9.0
 */

var proteoCombo = {
	initComponent : function(clientId) {

		if (jQuery("div[id*='externalDIV_" + clientId + "'].bso-combo-estandar") != null
				&& jQuery("div[id*='externalDIV_" + clientId
						+ "'].bso-combo-estandar").length > 0) {

			jQuery("div[id*='externalDIV_" + clientId + "'].bso-combo-estandar")
					.find(".bso-extra").css(
							"padding-left",
							jQuery(
									"div[id*='externalDIV_" + clientId
											+ "'] .bso-label").width());

			jQuery("div[id*='externalDIV_" + clientId+ "'].bso-combo-estandar:not(.bso-form-disabled)").each(function() {
				var curCombo = jQuery(this);
				curCombo.find('.bso-combo-estandar-select').bind('click',function() {

					if (nav == "Microsoft Internet Explorer") {
						   window.event.cancelBubble = true;
					}

					var curSelect = jQuery(this);
					var desplCombo = jQuery('.bso-combo-estandar-select.activated');
					if (!curSelect.find('.bso-combo-estandar-select-flecha').hasClass("expanded")) {
						curCombo.find('.bso-combo-normal-lista').fadeIn('fast');

						if (curCombo.find('.bso-combo-normal-lista').data('scrollable')) {
							curCombo.find('.bso-combo-normal-lista').customScrollbar('resize');
						} else {
							curCombo.find('.bso-combo-normal-lista').customScrollbar({
								fixedThumbHeight : 40,
								resize : true,
								vScroll : true
							});
						}

						curSelect.find('.bso-combo-estandar-select-flecha').toggleClass('expanded');
						jQuery('.bso-combo-estandar-select-flecha.expanded').parent().addClass('activated');
					} else {
						curCombo.find('.bso-combo-normal-lista').fadeOut('fast');
						curSelect.find('.bso-combo-estandar-select-flecha').toggleClass('expanded');
						jQuery('.bso-combo-estandar-select.activated').removeClass('activated');
					}
					if (jQuery('.bso-combo-estandar-select').hasClass("activated")) {
						desplCombo.find('.bso-combo-normal-lista').fadeOut('fast');
						desplCombo.removeClass('activated');
						desplCombo.find('.bso-combo-estandar-select-flecha').toggleClass("expanded");
					}



				});
			});

			jQuery("div[id*='externalDIV_" + clientId+ "'] .bso-combo-estandar-ul li").click(function() {
				var container = jQuery(this).parents('.bso-combo-estandar');
				jQuery(this).parents('.bso-combo-estandar').find('.bso-combo-normal-input a div').addClass('selected').html(jQuery(this).html());
				container.find('.bso-hidden').val(jQuery(this).attr('value')).trigger('change');
			});

			jQuery("div[id*='externalDIV_" + clientId+ "'] .bso-combo-estandar-ul li").hover(function() {
				var div = jQuery(this);
					if(this.offsetWidth < this.scrollWidth && !div.attr('title')){
						div.attr('title', div.text());
				    }


			});
		}
	},
	/**
	 * Aplica lógica de borrado de clase de error al evento
	 * onchange del select (cuando se selecciona una opción).
	 *
	 * @param clientId
	 */
	registerSelectOnChange : function(clientId) {
		jQuery("input[name='" + clientId + "']").change(
				function() {
					var defaultVal = null;
					if (defaultVal != jQuery(this).val()) {
						var labelMsg = getLabelMessage(clientId);
						removeRequiredMessage(ProteoJSFUtils
								.escapeIdColons(clientId), labelMsg);
						removeInvalidComponentClass(clientId);
					}
				});
	}
};

/**
 * Objeto de gestión de comportamiento Javascript del
 * componente "RadioButton"
 *
 * @author aaregall
 * @since 2.9.0
 */
var proteoRadioButton = {

	initComponent : function(clientId) {

		if (jQuery("div[id*='externalDIV_" + clientId + "'] :radio").length > 0) {
			var radiobutton = jQuery("div[id*='externalDIV_" + clientId
					+ "'] :radio");
			jQuery(radiobutton).each(function() {
				//jQuery(this).wrap('<span class="custom-radio"></span>');
				if (jQuery(this).is(':checked')) {
					jQuery(this).parent().addClass("selected");
				}
			});
		}

		if (jQuery('.bso-radio-button-horizontal').length > 0
				|| jQuery('.bso-radio-button-vertical').length > 0) {
			jQuery('.bso-radio-button-horizontal .bso-radio:not(.bso-disabled)')
					.each(
							function() {
								var radioGroup = jQuery(this);
								radioGroup.find('.custom-radio').click(
										function() {
											radioGroup.find('.custom-radio')
													.removeClass('selected');
											radioGroup.find('.custom-radio')
													.find(':radio').removeAttr(
															'checked');
											jQuery(this).addClass('selected');
											jQuery(this).find(':radio').prop(
													'checked', true);
											jQuery(this).find(':radio').blur();
										});
							});
			jQuery('.bso-radio-button-vertical .bso-radio:not(.bso-disabled)')
					.each(
							function() {
								var radioGroup = jQuery(this);
								radioGroup.find('.custom-radio').click(
										function() {
											radioGroup.find('.custom-radio')
													.removeClass('selected');
											radioGroup.find('.custom-radio')
													.find(':radio').removeAttr(
															'checked');
											jQuery(this).addClass('selected');
											jQuery(this).find(':radio').prop(
													'checked', true);
											jQuery(this).find(':radio').blur();
										});
							});
		}


	},
	/**
	 * Aplica lógica de borrado de clase de error al evento
	 * onclick de los radiobuttons.
	 *
	 * @param clientId
	 */
	registerRadiosOnClick : function(clientId) {
		jQuery("input[name='" + clientId + "'][type='radio']")
				.each(
						function() {
							jQuery(this)
									.click(
											function() {
												if (jQuery(this).is(":checked")) {
													var labelMsg = getLabelMessage(clientId);
													removeRequiredMessage(
															ProteoJSFUtils
																	.escapeIdColons(clientId),
															labelMsg);
													removeInvalidComponentClass(clientId);
												}
											});
						});
	}
};

/**
 * Objeto de gestión de comportamiento Javascript del
 * componente "Checkbox"
 *
 * @author aaregall
 * @since 2.9.0
 */
var proteoCheckbox = {

	initComponent : function(clientId) {

		if (jQuery("div[id*='" + clientId + "'] > .bso-field > label")
				.find("a").length) {
			jQuery("div[id*='" + clientId + "']").addClass(
					"bso-check-box-con-enlace");
		}

		// Evento click
		proteoCheckbox.registerCheckboxOnClick(clientId);
	},
	/**
	 * Aplica lógica de borrado de clase de error al evento
	 * onclick de los checkbox.
	 *
	 * @param clientId
	 */
	registerCheckboxOnClick : function(clientId) {
		jQuery("input[id*='" + clientId + "'][type='checkbox']")
				.each(
						function() {
							jQuery(this)
									.click(
											function() {
												if (jQuery(this).is(":checked")) {
													var labelMsg = getLabelMessage(clientId);
													removeRequiredMessage(
															ProteoJSFUtils
																	.escapeIdColons(clientId),
															labelMsg);
													removeInvalidComponentClass(clientId);
													jQuery(this).parent()
															.addClass(
																	"selected");
													jQuery(this).attr(
															'checked', true);
												} else {
													jQuery(this).parent()
															.removeClass(
																	"selected");
													jQuery(this).attr(
															'checked', false);
												}
											});
						});
	}
};

/**
 * Clase JavaScript de soporte al objeto proteoSuggestionBox utilizada para
 * gestionar las propiedades de cada componente de manera individual a nivel de
 * objeto JS.
 *
 * @author aaregall
 * @since 2.9.0
 */
function ProteoSuggestionBoxElement(params) {
	this._clientId = params.clientId || null;
	this._suggestions = params.suggestions || null;
	this._noResultsLabel = params.noResultsLabel || null;
	this._numCharsActivation = params.numCharsActivation || 1;
	this._numCharsTruncate = params.numCharsTruncate || 50;
};
ProteoSuggestionBoxElement.prototype.getClientId = function() {
	return this._clientId;
};
ProteoSuggestionBoxElement.prototype.getSuggestions = function() {
	return this._suggestions;
};
ProteoSuggestionBoxElement.prototype.setSuggestions = function(suggestions) {
	this._suggestions = suggestions;
};
ProteoSuggestionBoxElement.prototype.getNoResultsLabel = function() {
	return this._noResultsLabel;
};
ProteoSuggestionBoxElement.prototype.setNoResultsLabel = function(
		noResultsLabel) {
	this._noResultsLabel = noResultsLabel;
};
ProteoSuggestionBoxElement.prototype.getNumCharsActivation = function() {
	return this._numCharsActivation;
};
ProteoSuggestionBoxElement.prototype.setNumCharsActivation = function(
		numCharsActivation) {
	this._numCharsActivation = numCharsActivation;
};
ProteoSuggestionBoxElement.prototype.getNumCharsTruncate = function() {
	return this._numCharsTruncate;
};
ProteoSuggestionBoxElement.prototype.setNumCharsTruncate = function(
		numCharsTruncate) {
	this._numCharsTruncate = numCharsTruncate;
};

/**
 * Objeto de gestión del comportamiento JavaScript del
 * compontente Suggestion Box
 *
 * @author aaregall
 * @since 2.9.0
 */
var proteoSuggestionBox = {
	/**
	 * Flag de control de invocación a la API de jQuery
	 * Navigate.
	 */
	navigateInvoked : false,
	/**
	 * Mapa de equivalencia de acentos.
	 */
	accentMap : {
		"á" : "a",
		"à" : "a",
		"ä" : "a",
		"â" : "a",
		"é" : "e",
		"è" : "e",
		"ë" : "e",
		"ê" : "e",
		"í" : "i",
		"ì" : "i",
		"ï" : "i",
		"î" : "i",
		"ó" : "o",
		"ò" : "o",
		"ö" : "o",
		"ô" : "o",
		"ú" : "u",
		"ù" : "u",
		"ü" : "u",
		"û" : "u"
	},
	/**
	 * Método que inicializa el comportamiento DOM del
	 * componente, registrando eventos necesarios y aplicando el API
	 * Autocomplete.
	 *
	 * @param {Array}
	 *            params
	 */
	initComponent : function(params) {

		var suggestionBoxElement = new ProteoSuggestionBoxElement(params);
		this.applyAutocomplete(suggestionBoxElement);
		this.registerTextInputEvents(suggestionBoxElement);
		this.registerButtonClickEvent(suggestionBoxElement);
		this.registerListBehaviors(suggestionBoxElement);
		if (!this.navigateInvoked) {
			jQuery('.bso-lista-sugerencias ul li a').navigate();
			this.navigateInvoked = true;
		}
	},
	/**
	 * Aplica el API de jQuery Autocomplete al input de entrada del componente.
	 *
	 * @param {ProteoSuggestionBoxElement}
	 *            suggestionBoxElement
	 */
	applyAutocomplete : function(suggestionBoxElement) {
		var clientId = suggestionBoxElement.getClientId();
		jQuery('input[id="suggestionBox_textInput_' + clientId + '"]')
				.autocomplete(
						{
							appendTo : jQuery('div[id="suggestionBox_list_'
									+ clientId + '"]'),
							open : function(event, ui) {
								var menu = jQuery(this).data("ui-autocomplete").menu.element;
								var curlist = jQuery('div[id="suggestionBox_list_'
										+ clientId + '"]');

								curlist.fadeIn('fast');
								curlist.find('ul:first').hide();
								if (curlist.data('scrollable')) {
									curlist.customScrollbar('resize');
								} else {
									curlist.customScrollbar({
										fixedThumbHeight : 40,
										resize : true,
										vScroll : true
									});
								}
								jQuery(this).parents('.bso-combo-sugerencias')
										.find('.bso-ico-sugerencias')
										.removeClass('collapsed').addClass(
												'expanded');
							},
							minLength : suggestionBoxElement
									.getNumCharsActivation(),
							source : function(request, response) {
								var matcher = new RegExp(jQuery.ui.autocomplete.escapeRegex(request.term), "i");
								var resultados = jQuery
										.grep(suggestionBoxElement.getSuggestions(),
											function(value) {
												value = value.label	|| value;
												return matcher.test(value) || matcher.test(proteoSuggestionBox.normalize(value));
											}
										);

								if (!resultados.length) {
									resultados = [ suggestionBoxElement.getNoResultsLabel() ];
								}
								response(resultados);
							}, select: function( event, ui ) {
								var clientId = ProteoJSFUtils.escapeIdColons(suggestionBoxElement.getClientId());
								var selectorInput = 'input[id="suggestionBox_textInput_'+clientId+'"]';
								var selectorHiddenInput = 'input[id="HIDDEN_suggestionBox_textInput_'+clientId+'"]';
								jQuery( selectorInput ).val( ui.item.label );
								jQuery( selectorHiddenInput ).val( ui.item.value );
								jQuery( selectorHiddenInput ).trigger('change');
								return false;
							},
							focus : function(event, ui) {
								return false;
							},
							search : function(event, ui) {
								holder = '';
							},
							close : function(event, ui) {
								holder = '';
								var curlist = jQuery('div[id="suggestionBox_list_'
										+ clientId + '"]');
								curlist.hide();

								curlist.find('ul:nth-child(2)').fadeIn('fast');
								curlist.find('ul:nth-child(2)').hide();
								curlist.find('ul:first').show();
								curlist.parents('.bso-combo-sugerencias').find(
										'.bso-ico-sugerencias').removeClass(
										'expanded').addClass('collapsed');
							}
						}).data("ui-autocomplete")._renderItem = function(ul,item) {
							if (item.label == suggestionBoxElement.getNoResultsLabel()) {
								return jQuery('<li class="bso-contrato-noresult">').append(
										'<span>' + suggestionBoxElement.getNoResultsLabel()
										+ '</span>').appendTo(ul);

			} else
				return jQuery("<li>").append(jQuery("<a>").text(item.label).attr('value', item.value))
						.appendTo(ul);
		};
	},
	/**
	 * Registra los eventos "keyup" y "blur" del input del componente.
	 *
	 * Cuando se lance el evento keyup, se esconderá el
	 * desplegable de lista.
	 *
	 * Cuando se lance el evento blur, se comprobará que el
	 * valor introducido en el campo de texto corresponde con alguna de las
	 * sugerencias pre-definidas en el componente. De lo contrario se
	 * borrará su contenido.
	 *
	 * @param {ProteoSuggestionBoxElement}
	 *            suggestionBoxElement
	 */
	registerTextInputEvents : function(suggestionBoxElement) {
		var clientId = ProteoJSFUtils.escapeIdColons(suggestionBoxElement
				.getClientId());
		var input = jQuery('input[id="suggestionBox_textInput_'
				+ suggestionBoxElement.getClientId() + '"]');
		var suggestions = suggestionBoxElement.getSuggestions();

		input.keyup(function() {
			jQuery("#suggestionBox_list_" + clientId).hide();
		});

		var selectorHiddenInput = 'input[id="HIDDEN_suggestionBox_textInput_'+suggestionBoxElement.getClientId()+'"]';

		input.blur(function() {
			var value = input.val();
			if (value != "") {
				var found = false;
				for (var i = 0; i < suggestions.length; i++) {
					if (value == suggestions[i].label) {
						found = true;
						jQuery( selectorHiddenInput ).val(suggestions[i].value);
						break;
					}
				}
				if (!found) {
					input.val("");
					jQuery( selectorHiddenInput ).val("");
				}
			}
			else {
				input.val("");
				jQuery( selectorHiddenInput ).val("");
			}

			jQuery( selectorHiddenInput ).trigger('change');
		});
	},
	/**
	 * Registra el evento "click" del icono de la lista desplegable, gestionando
	 * su visibilidad.
	 *
	 * @param {ProteoSuggestionBoxElement}
	 *            suggestionBoxElement
	 */
	registerButtonClickEvent : function(suggestionBoxElement) {
		var selectorBtn = 'input[id="suggestionBox_button_'
				+ suggestionBoxElement.getClientId() + '"]';
		jQuery(selectorBtn).click(
				function(e) {
					e.preventDefault();
					if (jQuery(this).next('.bso-lista-sugerencias').length) {
						if (jQuery(this).next('.bso-lista-sugerencias').is(
								':visible')) {
							jQuery('.bso-lista-sugerencias').hide();
							jQuery(this).parents('.bso-combo-sugerencias')
									.find('.bso-ico-sugerencias').removeClass(
											'expanded').addClass('collapsed');
						} else {
							var curlist = jQuery(this).next(
									'.bso-lista-sugerencias');
							if (curlist.data('scrollable')) {
								curlist.fadeIn('fast');
								curlist.customScrollbar('resize');
							} else {

								curlist.fadeIn('fast');
								curlist.customScrollbar({
									fixedThumbHeight : 40,
									resize : true,
									vScroll : true
								});
							}
							jQuery(this).parents('.bso-combo-sugerencias')
									.find('.bso-ico-sugerencias').removeClass(
											'collapsed').addClass('expanded');

						}
					}

				});
	},
	/**
	 * Registra el evento click a los enlaces de la lista.
	 * Añade un listener al {@link Document} para cerrar la
	 * lista mediante evento de teclado.
	 *
	 * @param {ProteoSuggestionBoxElement}
	 *            suggestionBoxElement
	 */
	registerListBehaviors : function(suggestionBoxElement) {
		var clientId = ProteoJSFUtils.escapeIdColons(suggestionBoxElement
				.getClientId());
		var selectorInput = 'input[id="suggestionBox_textInput_' + clientId	+ '"]';
		var selectorHiddenInput = 'input[id="HIDDEN_suggestionBox_textInput_'+clientId+'"]';

		jQuery("#suggestionBox_list_" + clientId + " ul li a").click(
				function() {
					var value = jQuery(this).html();
					jQuery(selectorInput).val(value);
					jQuery( selectorHiddenInput ).val( jQuery(this).attr('value') );
					jQuery( selectorHiddenInput ).trigger('change');

					removeErrorMessage(suggestionBoxElement.getClientId());
					removeInvalidComponentClass(suggestionBoxElement
							.getClientId());

					jQuery(this).parents(".bso-lista-sugerencias").hide();
					jQuery(this).parents('.bso-combo-sugerencias')
					.find('.bso-ico-sugerencias').removeClass(
							'expanded').addClass('collapsed');

				});

		jQuery(document).keyup(function(e) {
			var code = (e.keyCode ? e.keyCode : e.which);
			if (code === 27) {
				if (jQuery("#suggestionBox_list_" + clientId).is(':visible')) {
					jQuery("#suggestionBox_list_" + clientId).hide();
				}
			}
		});
	},
	/**
	 * Normaliza una String quitando los acentos.
	 *
	 * @param term
	 * @returns {String}
	 */
	normalize : function(term) {
		for (var i = 0, ret = ""; i < term.length; i++) {
			ret += this.accentMap[term.charAt(i)] || term.charAt(i);
		}
		return ret;
	},
	/**
	 * Validación de la longitud del valor del campo de texto.
	 *
	 * @param {String}
	 *            clientId
	 * @param {Integer}
	 *            maxLength
	 */
	validate : function(clientId, maxLength) {
		var val = jQuery('input[id="suggestionBox_textInput_' + clientId + '"]')
				.val();
		if (val.length > maxLength) {
			addErrorMessage(clientId,
					"bso.channel.component.suggestionbox.error.maxlength");
			addInvalidComponentClass(clientId);
		} else {
			removeErrorMessage(clientId);
			removeInvalidComponentClass(clientId);
		}
	}
};

/**
 * Clase JS de soporte al objeto proteoAccountInput utilizada para gestionar el
 * control de eventos y de registro de eventos del componente.
 *
 * @constructor
 * @param {String}
 *            clientId
 *
 * @author aaregall
 * @since 2.9.0
 */
function ProteoAccountInputEventController(clientId) {
	this._clientId = clientId;
	this._pastingIBAN = false;
	this._pastingCCC = false;
	this._keyupEventRegistered = false;
	this._blurEventRegistered = false;
}
/**
 * @returns {Boolean}
 */
ProteoAccountInputEventController.prototype.isPastingIBAN = function() {
	return this._pastingIBAN;
};

/**
 * @param {Boolean}
 *            pastingIBAN
 */
ProteoAccountInputEventController.prototype.setPastingIBAN = function(
		pastingIBAN) {
	this._pastingIBAN = pastingIBAN;
};

/**
 * @returns {Boolean}
 */
ProteoAccountInputEventController.prototype.isPastingCCC = function() {
	return this._pastingCCC;
};

/**
 * @param {Boolean}
 *            pastingCCC
 */
ProteoAccountInputEventController.prototype.setPastingCCC = function(pastingCCC) {
	this._pastingCCC = pastingCCC;
};

/**
 * @returns {Boolean}
 */
ProteoAccountInputEventController.prototype.isKeyUpRegistered = function() {
	return this._keyupEventRegistered;
};
/**
 * @param {Boolean}
 *            keyUpRegistered
 */
ProteoAccountInputEventController.prototype.setKeyUpRegistered = function(
		keyUpRegistered) {
	this._keyupEventRegistered = keyUpRegistered;
};
/**
 * @returns {Boolean}
 */
ProteoAccountInputEventController.prototype.isBlurRegistered = function() {
	return this._blurEventRegistered;
};
/**
 * @param {Boolean}
 *            blurEventRegistered
 */
ProteoAccountInputEventController.prototype.setBlurRegistered = function(
		blurEventRegistered) {
	this._blurEventRegistered = blurEventRegistered;
};

/**
 * Clase JS que encapsula métodos relacionados con el DOM del
 * componente Cuenta de Entrada de múltiple modo.
 *
 * @constructor
 * @param clientId,
 *            id del componente
 *
 * @auhtor aaregall
 * @since 2.10.1
 * @returns
 */
function ProteoAccountInputMultiModeWrapper(clientId) {
	this.clientId = clientId;
	this.external = jQuery('[id="externalDIV_' + clientId + '"]');
}

/**
 * @returns Listado de radiobuttons del componente
 */
ProteoAccountInputMultiModeWrapper.prototype.getRadios = function() {
	var radios = jQuery('input[name="accountInput_RadioButton_' + this.clientId
			+ '"][type="radio"]');
	return radios;
};

/**
 * @returns Si el componente en este momento tiene el modo IBAN seleccionado
 */
ProteoAccountInputMultiModeWrapper.prototype.isIbanMode = function() {
	var ibanModeChecked = jQuery(
			'input[id="IBAN_accountInput_RadioButton_' + this.clientId + '"]')
			.is(':checked');
	return ibanModeChecked;
};

/**
 *
 * @returns Si el componente en este momento tiene el modo CCC seleccionado
 */
ProteoAccountInputMultiModeWrapper.prototype.isCccMode = function() {
	var cccModeChecked = jQuery(
			'input[id="CCC_accountInput_RadioButton_' + this.clientId + '"]')
			.is(':checked');
	return cccModeChecked;
};

/**
 * @returns El div correspondiente a la fila de los campos IBAN
 */
ProteoAccountInputMultiModeWrapper.prototype.getIbanRow = function() {
	var row = jQuery('div[id="accountInput_IBANRow_' + this.clientId + '"]');
	return row;
};

/**
 * @returns El listado de campos de texto IBAN.
 */
ProteoAccountInputMultiModeWrapper.prototype.getIbanFields = function() {
	var inputs = jQuery('.bso-textfield.IBAN_'
			+ ProteoJSFUtils.escapeIdColons(this.clientId));
	return inputs;
};

/**
 * @returns El div correspondiente a la fila de los campos CCC
 */
ProteoAccountInputMultiModeWrapper.prototype.getCccRow = function() {
	var row = jQuery('div[id="accountInput_CCCRow_' + this.clientId + '"]');
	return row;
};

/**
 * @returns El listado de campos de texto CCC.
 */
ProteoAccountInputMultiModeWrapper.prototype.getCccFields = function() {
	var inputs = jQuery('.bso-textfield.CCC_'
			+ ProteoJSFUtils.escapeIdColons(this.clientId));
	return inputs;
};

/**
 * @returns El listado de todos los campos de texto del componente.
 */
ProteoAccountInputMultiModeWrapper.prototype.getAllFields = function() {
	var selIban = ".bso-textfield.IBAN_"
			+ ProteoJSFUtils.escapeIdColons(this.clientId);
	var selCcc = ".bso-textfield.CCC_"
			+ ProteoJSFUtils.escapeIdColons(this.clientId);
	var inputs = jQuery(selIban + ',' + selCcc);
	return inputs;
};

/**
 * @returns {Boolean}, si alguno de los campos IBAN tiene valor o no.
 */
ProteoAccountInputMultiModeWrapper.prototype.isAnyIbanFieldFilled = function() {
	var ibanDC = jQuery(
			'input[id="IBAN_DC_' + this.clientId + '"][type="text"]').val();
	var bank = jQuery('input[id="IBAN_1_' + this.clientId + '"][type="text"]')
			.val();
	var branch = jQuery('input[id="IBAN_2_' + this.clientId + '"][type="text"]')
			.val();
	var dcAndFirstTwoAccountDigits = jQuery(
			'input[id="IBAN_3_' + this.clientId + '"][type="text"]').val();
	var firstAccount = jQuery(
			'input[id="IBAN_4_' + this.clientId + '"][type="text"]').val();
	var secondAccount = jQuery(
			'input[id="IBAN_5_' + this.clientId + '"][type="text"]').val();

	var isAnyFieldFilled = (ibanDC != "" || bank != "" || branch != ""
			|| dcAndFirstTwoAccountDigits != "" || firstAccount != "" || secondAccount != "") ? true
			: false;
	return isAnyFieldFilled;
};

/**
 * @returns {Boolean}, si alguno de los campos CCC tiene valor o no.
 */
ProteoAccountInputMultiModeWrapper.prototype.isAnyCccFieldFilled = function() {
	var bank = jQuery('input[id="bank_' + this.clientId + '"][type="text"]')
			.val();
	var branch = jQuery('input[id="branch_' + this.clientId + '"][type="text"]')
			.val();
	var dc = jQuery('input[id="DC_' + this.clientId + '"][type="text"]').val();
	var accountNumber = jQuery(
			'input[id="CCC_' + this.clientId + '"][type="text"]').val();

	var isAnyFieldFilled = (bank != "" || branch != "" || dc != "" || accountNumber != "") ? true
			: false;
	return isAnyFieldFilled;
};

/**
 * @returns {Boolean}, si todos los campos IBAN están completos.
 */
ProteoAccountInputMultiModeWrapper.prototype.areIbanFieldsFilled = function() {

	var ibanDC = jQuery(
			'input[id="IBAN_DC_' + this.clientId + '"][type="text"]').val();
	var bank = jQuery('input[id="IBAN_1_' + this.clientId + '"][type="text"]')
			.val();
	var branch = jQuery('input[id="IBAN_2_' + this.clientId + '"][type="text"]')
			.val();
	var dcAndFirstTwoAccountDigits = jQuery(
			'input[id="IBAN_3_' + this.clientId + '"][type="text"]').val();
	var firstAccount = jQuery(
			'input[id="IBAN_4_' + this.clientId + '"][type="text"]').val();
	var secondAccount = jQuery(
			'input[id="IBAN_5_' + this.clientId + '"][type="text"]').val();

	// Comprobamos que los campos están rellenos
	var filled = (ibanDC != "" && bank != "" && branch != ""
			&& dcAndFirstTwoAccountDigits != "" && firstAccount != "" && secondAccount != "") ? true
			: false;

	// Comprobamos que tienen la longitud adecuada
	if(filled) {
		filled = filled
			&& ibanDC.length == 2
			&& bank.length == 4
			&& branch.length == 4
			&& dcAndFirstTwoAccountDigits.length == 4
			&& firstAccount.length == 4
			&& secondAccount.length == 4;
	}

	return filled;
};

/**
 * @returns {Boolean}, si todos los campos CCC están completos.
 */
ProteoAccountInputMultiModeWrapper.prototype.areCccFieldsFilled = function() {
	var bank = jQuery('input[id="bank_' + this.clientId + '"][type="text"]')
			.val();
	var branch = jQuery('input[id="branch_' + this.clientId + '"][type="text"]')
			.val();
	var dc = jQuery('input[id="DC_' + this.clientId + '"][type="text"]').val();
	var accountNumber = jQuery(
			'input[id="CCC_' + this.clientId + '"][type="text"]').val();

	// Comprobamos que los campos están rellenos
	var filled = (bank != "" && branch != "" && dc != "" && accountNumber != "") ? true : false;

	// Comprobamos que tienen la longitud adecuada
	if(filled) {
		filled = filled
			&& bank.length == 4
			&& branch.length == 4
			&& dc.length == 2
			&& accountNumber.length == 10;
	}

	return filled;
};

/**
 * @param {String}
 *            code, código de papaís. Por
 *            ejemplo: 'ES'
 * @returns el código de país reemplazado
 *          numéricamente según el
 *          estándar IBAN.
 */
ProteoAccountInputMultiModeWrapper.prototype.getCountryCode = function(code) {
	code = (code) ? code.toUpperCase() : '';

	code = code.replace(/A/ig, '10');
	code = code.replace(/B/ig, '11');
	code = code.replace(/C/ig, '12');
	code = code.replace(/D/ig, '13');
	code = code.replace(/E/ig, '14');
	code = code.replace(/F/ig, '15');
	code = code.replace(/G/ig, '16');
	code = code.replace(/H/ig, '17');
	code = code.replace(/I/ig, '18');
	code = code.replace(/J/ig, '19');
	code = code.replace(/K/ig, '20');
	code = code.replace(/L/ig, '21');
	code = code.replace(/M/ig, '22');
	code = code.replace(/N/ig, '23');
	code = code.replace(/O/ig, '24');
	code = code.replace(/P/ig, '25');
	code = code.replace(/Q/ig, '26');
	code = code.replace(/R/ig, '27');
	code = code.replace(/S/ig, '28');
	code = code.replace(/T/ig, '29');
	code = code.replace(/U/ig, '30');
	code = code.replace(/V/ig, '31');
	code = code.replace(/W/ig, '32');
	code = code.replace(/X/ig, '33');
	code = code.replace(/Y/ig, '34');
	code = code.replace(/Z/ig, '35');
	return code;
};

/**
 * Calcula a partir de los valores actuales de los campos CCC, el
 * dígito de control IBAN.
 *
 * @returns {String} dígito de control IBAN
 */
ProteoAccountInputMultiModeWrapper.prototype.calcIbanDc = function() {
	var countryCode = jQuery(
			'input[id="countryCode_' + this.clientId + '"][type="hidden"]')
			.val();
	countryCode = this.getCountryCode(countryCode);

	var fields = this.getCccFields();

	var bank = fields.eq(0).val() || '';
	var branch = fields.eq(1).val() || '';
	var dc = fields.eq(2).val() || '';
	var account = fields.eq(3).val() || '';

	var iban = bank.toString() + branch.toString();
	var MOD_1 = iban % 97;

	iban = "" + MOD_1 + dc.toString() + account.substring(0, 2);
	MOD_1 = iban % 97;
	iban = "" + MOD_1 + account.toString().substring(2, account.length)
			+ countryCode + '00';
	MOD_iban = iban % 97;
	var dc_iban = 98 - MOD_iban;

	if (dc_iban < 10) {
		dc_iban = "0" + dc_iban.toString();
	}

	return isNaN(dc_iban) ? '' : dc_iban.toString();
};

/**
 * @description Clase Javascript encargada de gestionar la
 *              resolución del nombre del banco a partir del
 *              valor especificado en el campo de entrada del componente.
 *              Registra el evento al body de resolución de
 *              nombre del banco y lo lanza en caso de que el componente tenga
 *              especificado valor.
 *
 * @constructor
 * @param {String}
 *            clientId
 * @param {Object}
 *            data
 *
 * @author aaregall
 * @since 2.10.1
 */
function ProteoAccountInputBankNameResolver(clientId, data) {
	this.clientId = clientId || null;
	this.data = data || {};
	this.isMultiMode = jQuery(
			'input[id="accountInput_multiMode_' + this.clientId + '"]').val();
	this.bindEventListener();
	this.resolveOnLoad();
}

/**
 * Lógica de resolución del nombre del banco a
 * partir del código.
 *
 * @param code
 * @returns el código del banco, en caso de no ser encontrado
 *          devolverá <code>undefined</code>.
 */
ProteoAccountInputBankNameResolver.prototype.resolve = function(code) {
	var name = '';
	if (this.data && !(jQuery.isEmptyObject(this.data))) {
		name = this.data[code];
	}
	return (name && name.length > 0) ? name : undefined;
};

/**
 * Lanza el evento de resolución de nombre del banco a partir
 * del valor del banco actual.
 */
ProteoAccountInputBankNameResolver.prototype.resolveOnLoad = function() {
	var bank = jQuery('input[id="IBAN_1_' + this.clientId + '"][type="text"]')
			.val();
	var validValue = ((new RegExp('^[0-9]+$').test(bank)) && (bank.length == 4));
	var hasErrors = (jQuery(
			'input[id="accountInput_hasErrors_' + this.clientId
					+ '"][type="hidden"]').val() == 'true');
	var hasData = (!jQuery.isEmptyObject(this.data));
	if (validValue && !hasErrors && hasData) {
		jQuery('body').trigger('proteoAccountInputOnResolveBankNameEvent', [ {
			'value' : bank,
			'clientId' : this.clientId
		} ]);
	}
};

/**
 * @returns El elemento al que se establece como contenido la ayuda contextual.
 */
ProteoAccountInputBankNameResolver.prototype.getBottomHelpElement = function() {
	var prefix = (this.isMultiMode == 'true') ? 'accountInput_CCCMessage_'
			: 'accountInput_IBANMessage_';
	return jQuery('span[id="' + prefix + this.clientId + '"]');
};

/**
 * @returns Campo oculto al que se establece como valor la ayuda contextual.
 */
ProteoAccountInputBankNameResolver.prototype.getBottomHelpHidden = function() {
	var prefix = (this.isMultiMode == 'true') ? 'accountInput_CCCMessage_hidden_'
			: 'accountInput_IBANMessage_hidden_';
	return jQuery('input[id="' + prefix + this.clientId + '"][type="hidden"]');
};

/**
 * Enlaza el listener del evento de resolución de nombre de
 * banco al body. Este evento se lanza en diferentes ocasiones: al cargar el
 * componente con valores, añadir mensajes de error...
 */
ProteoAccountInputBankNameResolver.prototype.bindEventListener = function() {
	jQuery('body').bind('proteoAccountInputOnResolveBankNameEvent',
			jQuery.proxy(function(event, data) {
				if (!data.clientId || (data.clientId !== this.clientId)) {
					return;
				}

				var val = this.resolve(data.value);
				var msg = (val) ? val : this.getBottomHelpHidden().val();
				this.getBottomHelpElement().html(msg);
			}, this));
};

/**
 * Objeto de gestión del comportamiento y
 * validación cliente del componente Cuenta de Entrada (IBAN o
 * CCC)
 *
 * @author aaregall
 * @since 2.10.0
 */
var proteoAccountInputMultiMode = {
	isSubmittingForm : false,
	initComponent : function(clientId, banksData) {

		banksData = (!jQuery.isEmptyObject(banksData)) ? banksData : {};
		new ProteoAccountInputBankNameResolver(clientId, banksData);
		var eventController = new ProteoAccountInputEventController(clientId);
		var wrapper = new ProteoAccountInputMultiModeWrapper(clientId);

		this.registerInputEvents(eventController, wrapper);
	},
	/**
	 * Registra una serie de eventos a las etiquetas de entrada de datos del
	 * componente con un objeto {@link ProteoAccountInputEventController} para
	 * el control del registro de eventos.
	 *
	 * @param {String}
	 *            clientId
	 */
	registerInputEvents : function(eventController, wrapper) {
		this.registerRadioButtonsClickEvents(wrapper);
		this.registerTextInputsBlurEvents(eventController, wrapper);
		this.registerTextInputsKeyupEvents(eventController, wrapper);
		this.registerTextInputsKeypressEvents(eventController, wrapper);
		this.registerIBANPasteEvent(eventController, wrapper);
		this.registerCCCPasteEvent(eventController, wrapper);
	},
	/**
	 * Registra el evento click de los radioButtons del componente, en el que se
	 * habilitan/deshabilitan los campos de texto de IBAN o CCC
	 * según qué radio se haya seleccionado.
	 *
	 * @param {ProteoAccountInputMultiModeWrapper}
	 *            wrapper
	 */
	registerRadioButtonsClickEvents : function(wrapper) {
		var clientId = wrapper.clientId;
		wrapper
				.getRadios()
				.each(
						function() {

							jQuery(this)
									.bind(
											'click',
											function() {

												/*
												 * var parent =
												 * jQuery(this).parents('.bso-campo');
												 * if
												 * (parent.hasClass('bso-fila-inactiva')) {
												 * parent.parents('.bso-fila-iban').find('.bso-campo').addClass('bso-fila-inactiva');
												 * parent.removeClass('bso-fila-inactiva');
												 * parent.parents('.bso-fila-iban').find('.bso-textfield').attr('disabled',
												 * true);
												 * parent.find('.bso-textfield').attr('disabled',
												 * false); }
												 */
												var cuenta_entrada = jQuery(
														this).parents(
														'.bso-cuenta-entrada');
												cuenta_entrada
														.find('.custom-radio')
														.removeClass('selected');
												cuenta_entrada.find(
														'.custom-radio')
														.removeAttr('checked');
												jQuery(this).parent(
														'.custom-radio')
														.addClass('selected');
												jQuery(this).attr('checked',
														'checked');

												cuenta_entrada.find(
														'.bso-campo')
														.removeClass('active');

												var parent = jQuery(this)
														.parents('.bso-campo');
												parent.addClass('active', 400);
												if (parent
														.hasClass('bso-fila-inactiva')) {
													parent
															.parents(
																	'.bso-cuenta-entrada')
															.find('.bso-campo')
															.addClass(
																	'bso-fila-inactiva');
													parent
															.removeClass('bso-fila-inactiva');
													parent
															.parents(
																	'.bso-cuenta-entrada')
															.find(
																	'.bso-textfield')
															.attr('disabled',
																	true);
													parent.find(
															'.bso-textfield')
															.attr('disabled',
																	false);
												}

												function _clearErrorsWithCallback(
														callback) {
													if (wrapper.isIbanMode()) {
														proteoAccountInputMultiMode
																.clearCCCError(clientId);
													} else if (wrapper
															.isCccMode()) {
														proteoAccountInputMultiMode
																.clearIBANError(clientId);
													}
													callback();
												}


												_clearErrorsWithCallback(function() {
													if (wrapper.isIbanMode()) {
														proteoAccountInputMultiMode
																.validateIBAN(
																		wrapper,
																		true);
													} else if (wrapper
															.isCccMode()) {
														proteoAccountInputMultiMode
																.validateCCC(
																		wrapper,
																		true);
													}
												});

											});
						});
	},
	/**
	 * Registra el evento de perdida de foco de los campos de texto del
	 * componente, en el que se aplica el padding de zeros a la izquierda al
	 * valor numérico del campo.
	 *
	 * @param {ProteoAccountInputEventController}
	 *            eventController
	 * @param {ProteoAccountInputMultiModeWrapper}
	 *            wrapper
	 */
	registerTextInputsBlurEvents : function(eventController, wrapper) {
		if (!eventController.isBlurRegistered()) {

			wrapper
				.getAllFields()
				.blur(function() {

					var curValue = jQuery(this).val();
					if (!isNaN(curValue)) {
						if (curValue.length > 0) {
							var curLength = jQuery(this).val().length;
							var maxLength = jQuery(this).attr("maxLength");
							var zeroCount = 0;
							if (curLength < maxLength) {
								zeroCount = (maxLength - curLength);
								for (var i = 0; i < zeroCount; i++) {
									curValue = 0 + curValue;
								}
							}
							jQuery(this).val(curValue);
						}
					}

					var completedFields = wrapper.areIbanFieldsFilled() || wrapper.areCccFieldsFilled();

					jQuery(this)
						.promise()
						.done(function() {
							proteoAccountInputMultiMode.autocomplete(wrapper);
							proteoAccountInputMultiMode.triggerBankResolverEvent(wrapper.clientId);
						});

					if (jQuery(this).parents().hasClass("bso-fila-iban")) {
						proteoAccountInputMultiMode.validateIBAN(wrapper, true);
						if(completedFields) {
							wrapper.getIbanFields().eq(0).trigger('change');
						}
					} else if (jQuery(this).parents().hasClass("bso-fila-ccc")) {
						proteoAccountInputMultiMode.validateCCC(wrapper, true);
						if(completedFields) {
							console.log('Lanzamos change ' + wrapper.getCccFields().eq(0).val());
							wrapper.getCccFields().eq(0).trigger('change');
						}
					}

				});

			eventController.setBlurRegistered(true);
		}
	},
	/**
	 * Autocompleta los campos del modo opuesto con los valores de los campos
	 * del modo actual, siempre que haya algun campo con valor. De lo contrario,
	 * vacia todos los campos del modo opuesto.
	 *
	 * @param {ProteoAccountInputMultiModeWrapper}
	 *            wrapper
	 * @param {Function}
	 *            callback, función a ejecutar cuando se
	 *            termine el autocompletado.
	 */
	autocomplete : function(wrapper, callback) {
		var fields = undefined;
		var oposite = undefined;

		if (wrapper.isIbanMode()) {
			fields = wrapper.getIbanFields();
			oposite = wrapper.getCccFields();

			if (wrapper.isAnyIbanFieldFilled()) {
				oposite.eq(0).val(fields.eq(1).val());
				oposite.eq(1).val(fields.eq(2).val());
				oposite.eq(2).val(
						(fields.eq(3).val() != undefined) ? fields.eq(3).val()
								.substring(0, 2) : '');
				oposite.eq(3)
						.val(
								(fields.eq(4).val() != undefined && fields
										.eq(3).val().length > 2) ? fields.eq(3)
										.val().substring(2, 4)
										+ fields.eq(4).val()
										+ fields.eq(5).val() : ''
										+ fields.eq(4).val()
										+ fields.eq(5).val());
			} else {
				oposite.each(function() {
					jQuery(this).val('');
				});
			}
		} else if (wrapper.isCccMode()) {
			fields = wrapper.getCccFields();
			oposite = wrapper.getIbanFields();

			if (wrapper.isAnyCccFieldFilled()) {
				oposite.eq(0).val(wrapper.calcIbanDc());
				oposite.eq(1).val(fields.eq(0).val());
				oposite.eq(2).val(fields.eq(1).val());
				oposite.eq(3).val(
						fields.eq(2).val()
								+ ((fields.eq(3).val() != undefined) ? fields
										.eq(3).val().substring(0, 2) : ''));
				oposite.eq(4)
						.val(
								(fields.eq(3).val() != undefined && fields
										.eq(3).val().length > 2) ? fields.eq(3)
										.val().substring(2, 6) : '');
				oposite.eq(5)
						.val(
								(fields.eq(3).val() != undefined && fields
										.eq(3).val().length > 6) ? fields.eq(3)
										.val().substring(6, 10) : '');
			} else {
				oposite.each(function() {
					jQuery(this).val('');
				});
			}
		}

		if (callback) {
			callback();
		}
	},
	/**
	 * Registra el evento keyup de los campos de texto del componente. Controla
	 * que si el campo está lleno, el foco salte al siguiente
	 * campo, y la navegación de foco de inputs mediante
	 * tabulación.
	 *
	 * Realiza llamadas a la función de autocompletado del modo
	 * opuesto
	 *
	 * @param {ProteoAccountInputEventController}
	 *            eventController
	 * @param {ProteoAccountInputMultiModeWrapper}
	 *            wrapper
	 */
	registerTextInputsKeyupEvents : function(eventController, wrapper) {
		if (!eventController.isKeyUpRegistered()) {

			wrapper
					.getAllFields()
					.keyup(
							function(e) {

								var jInput = jQuery(this);

								if ((wrapper.isIbanMode() && eventController
										.isPastingIBAN())
										|| (wrapper.isCccMode() && eventController
												.isPastingCCC())) {
									return;
								}

								if (wrapper.isIbanMode()
										&& (!wrapper.isAnyIbanFieldFilled())) {
									proteoAccountInputMultiMode
											.clearIBANError(wrapper.clientId);
								} else if (wrapper.isCccMode()
										&& (!wrapper.isAnyCccFieldFilled())) {
									proteoAccountInputMultiMode
											.clearCCCError(wrapper.clientId);
								}

								var code = (e.keyCode ? e.keyCode : e.which);

								var curValue = jInput.val();
								var regex = /^\d+$/;
								if (!regex.test(curValue)) {
									curValue = curValue.substring(0,
											curValue.length - 1);
								}
								proteoAccountInputMultiMode
										.autocomplete(wrapper);


								if (jQuery.inArray(code, [ 35, 36, 37, 39, 8,
										45, 46 ]) !== -1) {
									return;
								}

								if (jInput.val().length == jInput
										.attr('maxLength')) {

									if (jInput.hasClass('bso-textfield')) {

										if (code == 9 || code == 16) {

											window.setTimeout(jQuery.proxy(
													function() {
														this.focus();
													}, this), 10);
											return;
										}

										if (wrapper.isCccMode()) {
											jInput.next('.bso-textfield')
											.focus();
										} else if (wrapper.isIbanMode()) {
											jInput.next('.bso-textfield')
													.focus();
										}

									} else {
										if (jInput.next().length) {
											jInput.next().focus();
										}
									}
								}
							});

			eventController.setKeyUpRegistered(true);
		}
	},
	/**
	 * Previene la introducción de carácteres
	 * no deseados en los campos de texto.
	 *
	 * @param {ProteoAccountInputEventController}
	 *            eventController
	 * @param {ProteoAccountInputMultiModeWrapper}
	 *            wrapper
	 */
	registerTextInputsKeypressEvents : function(eventController, wrapper) {
		wrapper
				.getAllFields()
				.each(
						function() {
							jQuery(this)
									.keypress(
											function(event, pars) {
												var key = (typeof (event.charCode) == 'undefined') ? event.keyCode
														: event.charCode;
												var val = String
														.fromCharCode(key);
												var p = jQuery.extend({
													locale : 'es',
													allowed : '1234567890',
													allow : ''
												}, pars);
												if (p.allowed.indexOf(val) == -1
														&& key != '0') {
													event.preventDefault();
												}
											});
						});
	},
	/**
	 * Registra el evento de pegado desde el portapapeles en los inputs
	 * correspondientes al campo IBAN del componente. Usa jQuery.proxy y un
	 * pequeño timeout para poder modificar los valores.
	 *
	 * Si el pegado es válido, al completar la funcionalidad de
	 * autocompletado se lanza programáticamente el evento
	 * 'change' asociado al componente.
	 *
	 * @param {ProteoAccountInputEventController}
	 *            eventController
	 * @param {ProteoAccountInputMultiModeWrapper}
	 *            wrapper
	 */
	registerIBANPasteEvent : function(eventController, wrapper) {

		wrapper.getIbanRow().find(".bso-textfield:first").bind(
				"paste",
				function(event) {
					var maxLength = jQuery(this).attr("maxLength");
					jQuery(this).attr("maxLength", "50");
					eventController.setPastingIBAN(true);
					var limit = 22;

					setTimeout(jQuery.proxy(function() {
						var pastedValue = jQuery(this).val();
						var newStr = pastedValue.replace(/\D/g, '');
						var ibanFields = wrapper.getIbanFields();

						jQuery(this).attr("maxLength", maxLength);
						if (newStr.length == limit) {
							var from = 0;
							for (var i = 0; i <= 5; i++) {
								var part = newStr.substr(from, 4);
								if (i == 0) {
									part = newStr.substr(from, 2);
								}
								wrapper.getIbanRow().find(".bso-textfield").eq(
										i).val(part);
								from = (i == 0) ? from + 2 : from + 4;
							}

							ibanFields.eq(5).focus();
                            proteoAccountInputMultiMode.moveCursorToEnd(ibanFields.eq(5));

							proteoAccountInputMultiMode.autocomplete(wrapper,
									function() {
										proteoAccountInputMultiMode
												.validateIBAN(wrapper);
										wrapper.getIbanFields().eq(0).trigger(
												'change');
									});
						} else {
							wrapper.getIbanRow().find(".bso-textfield").eq(0)
									.val(newStr.substr(0, 2));
						}
						eventController.setPastingIBAN(false);
					}, this), 100);
				});
	},
	/**
	 * Registra el evento de pegado desde el portapapeles en los inputs
	 * correspondientes al campo CCC del componente. Usa jQuery.proxy y un
	 * pequeño timeout para poder modificar los valores.
	 *
	 * Si el pegado es válido, al completar la funcionalidad de
	 * autocompletado se lanza programáticamente el evento
	 * 'change' asociado al componente.
	 *
	 * @param {ProteoAccountInputEventController}
	 *            eventController
	 * @param {ProteoAccountInputMultiModeWrapper}
	 *            wrapper
	 */
	registerCCCPasteEvent : function(eventController, wrapper) {
		wrapper.getCccRow().find(".bso-textfield:first").bind(
				"paste",
				function(event) {

					jQuery(this).attr("maxLength", "50");
					eventController.setPastingCCC(true);
					var limit = 20;

					setTimeout(jQuery.proxy(function() {

						var pastedValue = jQuery(this).val();
						var newStr = pastedValue.replace(/\D/g, '');
						jQuery(this).attr("maxLength", "4");

						var row = wrapper.getCccRow();
						if (newStr.length == limit) {
							row.find('.bso-textfield').eq(0).val(
									newStr.substr(0, 4));
							row.find('.bso-textfield').eq(1).val(
									newStr.substr(4, 4));
							row.find('.bso-textfield').eq(2).val(
									newStr.substr(8, 2));
							row.find('.bso-textfield').eq(3).val(
									newStr.substr(10, 10));

							row.find('.bso-textfield').eq(3).focus();
							proteoAccountInputMultiMode.moveCursorToEnd(row
									.find('.bso-textfield').eq(3));
						} else {
							row.find('.bso-textfield').eq(0).val(
									newStr.substr(0, 4));
						}
						proteoAccountInputMultiMode.autocomplete(wrapper,
								function() {
									proteoAccountInputMultiMode
											.validateCCC(wrapper);
									wrapper.getCccFields().eq(0).trigger(
											'change');
								});
						eventController.setPastingCCC(false);
					}, this), 100);
				});
	},
	/**
	 * Valida la cuenta IBAN del componente en caso de que todos los campos
	 * están llenos.
	 *
	 * @param {ProteoAccountInputMultiModeWrapper}
	 *            wrapper
	 */
	validateIBAN : function(wrapper) {
		var clientId = wrapper.clientId;
		var fields = wrapper.getIbanFields();

		var ibanDC = fields.eq(0).val();
		var bank = fields.eq(1).val();
		var branch = fields.eq(2).val();
		var dcAndFirstTwoAccountDigits = fields.eq(3).val();
		var firstAccount = fields.eq(4).val();
		var secondAccount = fields.eq(5).val();

		if (dcAndFirstTwoAccountDigits.length == 4 && firstAccount.length == 4
				&& secondAccount.length == 4) {
			var dc = dcAndFirstTwoAccountDigits.substring(0, 2);
			var accountNumber = dcAndFirstTwoAccountDigits.substring(2,
					dcAndFirstTwoAccountDigits.length)
					+ firstAccount.toString() + secondAccount.toString();

			if (ibanDC != "" && bank != "" && branch != "" && dc != ""
					&& accountNumber != "") {


				if (!this.isValidNumericString(ibanDC)) {
					this
							.addIBANError(clientId,
									"bso.channel.component.accountinput.error.notnumeric.ibandc");
					return false;
				}

				if (!this.isValidNumericString(bank)) {
					this
							.addIBANError(clientId,
									"bso.channel.component.accountinput.error.notnumeric.bank");
					return false;
				}

				if (!this.isValidNumericString(branch)) {
					this
							.addIBANError(clientId,
									"bso.channel.component.accountinput.error.notnumeric.branch");
					return false;
				}

				if (!this.isValidNumericString(dc)) {
					this
							.addIBANError(clientId,
									"bso.channel.component.accountinput.error.notnumeric.dc");
					return false;
				}

				if (!this.isValidNumericString(accountNumber)) {
					this
							.addIBANError(clientId,
									"bso.channel.component.accountinput.error.notnumeric.accountnumber");
					return false;
				}


				if (ibanDC.length != 2) {
					this
							.addIBANError(clientId,
									"bso.channel.component.accountinput.error.length.ibandc");
					return false;
				}

				if (bank.length != 4) {
					this
							.addIBANError(clientId,
									"bso.channel.component.accountinput.error.length.bank");
					return false;
				}

				if (branch.length != 4) {
					this
							.addIBANError(clientId,
									"bso.channel.component.accountinput.error.length.branch");
					return false;
				}

				if (dc.length != 2) {
					this
							.addIBANError(clientId,
									"bso.channel.component.accountinput.error.length.dc");
					return false;
				}

				if (accountNumber.length != 10) {
					this
							.addIBANError(clientId,
									"bso.channel.component.accountinput.error.length.accountnumber");
					return false;
				}

				var firstPartOK = (this.getControlDigit("00" + bank + branch) == parseInt(
						dc.charAt(0), 10));
				var secondPartOK = (this.getControlDigit(accountNumber) == parseInt(
						dc.charAt(1), 10));

				if (!firstPartOK || !secondPartOK) {
					this
							.addIBANError(clientId,
									"bso.channel.component.accountinput.error.invalid.ccc");
					return false;
				}

				if (wrapper.calcIbanDc() != ibanDC) {
					this
							.addIBANError(clientId,
									"bso.channel.component.accountinput.error.invalid.ibandc");
					return false;
				}

				this.clearIBANError(clientId);
			}

		}

		if (!wrapper.isAnyIbanFieldFilled()) {
			this.clearIBANError(clientId);
		}

		return true;
	},
	/**
	 * Valida la cuenta CCC del componente en caso de que todos los campos
	 * están llenos.
	 *
	 * @param {ProteoAccountInputMultiModeWrapper}
	 *            wrapper
	 */
	validateCCC : function(wrapper) {
		var clientId = wrapper.clientId;

		/**
		 * Función privada que realiza las validaciones. Se
		 * hace de este modo para poder recuperar el scope dentro de la
		 * función y poder llamar a los
		 * métodos y funciones de objeto mediante el mismo.
		 * Deberá llamarse mediante jQuery.proxy(function,
		 * context).
		 *
		 * {@link http://api.jquery.com/jQuery.proxy/}
		 *
		 * @returns {Boolean}
		 */
		function _validate() {

			var bank = jQuery('input[id="bank_' + clientId + '"]').val();
			var branch = jQuery('input[id="branch_' + clientId + '"]').val();
			var dc = jQuery('input[id="DC_' + clientId + '"]').val();
			var accountNumber = jQuery('input[id="CCC_' + clientId + '"]')
					.val();

			if (bank != "" && branch != "" && accountNumber != "") {

				if (!this.isValidNumericString(bank)) {
					this
							.addCCCError(clientId,
									"bso.channel.component.accountinput.error.notnumeric.bank");
					return false;
				}

				if (!this.isValidNumericString(branch)) {
					this
							.addCCCError(clientId,
									"bso.channel.component.accountinput.error.notnumeric.branch");
					return false;
				}

				if (!this.isValidNumericString(dc)) {
					this
							.addCCCError(clientId,
									"bso.channel.component.accountinput.error.notnumeric.dc");
					return false;
				}

				if (!this.isValidNumericString(accountNumber)) {
					this
							.addCCCError(clientId,
									"bso.channel.component.accountinput.error.notnumeric.accountnumber");
					return false;
				}

				if (bank.length != 4) {
					this
							.addCCCError(clientId,
									"bso.channel.component.accountinput.error.length.bank");
					return false;
				}

				if (branch.length != 4) {
					this
							.addCCCError(clientId,
									"bso.channel.component.accountinput.error.length.branch");
					return false;
				}

				if (dc.length != 2) {
					this
							.addCCCError(clientId,
									"bso.channel.component.accountinput.error.length.dc");
					return false;
				}

				if (accountNumber.length != 10) {
					this
							.addCCCError(clientId,
									"bso.channel.component.accountinput.error.length.accountnumber");
					return false;
				}

				var firstPartOK = (this.getControlDigit("00" + bank + branch) == parseInt(
						dc.charAt(0), 10));
				var secondPartOK = (this.getControlDigit(accountNumber) == parseInt(
						dc.charAt(1), 10));

				if (!firstPartOK || !secondPartOK) {
					this
							.addCCCError(clientId,
									"bso.channel.component.accountinput.error.invalid.ccc");
					return false;
				}

				this.clearCCCError(clientId);
			}

			if (!wrapper.isAnyCccFieldFilled() && !this.isSubmittingForm) {
				this.clearCCCError(clientId);
			}

			return true;
		}
		;

		return _validate.apply(this, []);
	},
	/**
	 * Añade mensaje de error a la cuenta CCC del componente.
	 *
	 * @param {String}
	 *            clientId
	 * @param {String}
	 *            key
	 */
	addCCCError : function(clientId, key) {
		addErrorMessage(clientId, key);
		addInvalidComponentClass(clientId);
		jQuery('span[id="accountInput_CCCMessage_' + clientId + '"]').text(
				ProteoLocalizer.getLiteral(key));
	},
	/**
	 * Borra el mensaje de error de la cuenta CCC del componente.
	 *
	 * @param {String}
	 *            clientId
	 */
	clearCCCError : function(clientId, removeClass) {
		var shouldRemoveClass = removeClass | true;

		removeErrorMessage(clientId);

		if (shouldRemoveClass) {
			removeInvalidComponentClass(clientId);
		}
		removeInvalidComponentClass(clientId);
		var message = jQuery(
				'input[id="accountInput_CCCMessage_hidden_' + clientId + '"]')
				.val();
		jQuery('span[id="accountInput_CCCMessage_' + clientId + '"]').text(
				message);

		this.triggerBankResolverEvent(clientId);
	},
	hasErrors : function(clientId) {
		var error = jQuery('input[id="' + clientId + 'error"][type="hidden"]')
				.val();
		return (error != "");
	},
	/**
	 * Añade el mensaje de error de la cuenta IBAN del
	 * componente.
	 *
	 * @param {String}
	 *            clientId
	 * @param {String}
	 *            key
	 */
	addIBANError : function(clientId, key) {
		addErrorMessage(clientId, key);
		addInvalidComponentClass(clientId);
		jQuery('span[id="accountInput_IBANMessage_' + clientId + '"]').text(
				ProteoLocalizer.getLiteral(key));
	},
	/**
	 * Borra el mensaje de error de la cuenta IBAN del componente.
	 *
	 * @param {String}
	 *            clientId
	 */
	clearIBANError : function(clientId, removeClass) {
		var shouldRemoveClass = removeClass | true;
		removeErrorMessage(clientId);
		if (shouldRemoveClass) {
			removeInvalidComponentClass(clientId);
		}
		var message = jQuery(
				'input[id="accountInput_IBANMessage_hidden_' + clientId + '"]')
				.val();
		jQuery('span[id="accountInput_IBANMessage_' + clientId + '"]').text(
				message);

		this.triggerBankResolverEvent(clientId);
	},
	/**
	 * Valida si el valor parametrizado es numérico (0 a la
	 * izquierda también).
	 *
	 * @param {String}
	 *            value
	 * @returns {Boolean}
	 */
	isValidNumericString : function(value) {
		var str = value.toString();

		for (var i = 0; i < str.length; i++) {
			var c = str.charAt(i);
			if (c < "0" || c > "9") {
				return false;
			}
		}
		return true;
	},
	/**
	 * Algoritmo para obtener el dígito de control de un valor.
	 *
	 * @param {String}
	 *            value
	 * @returns {Number}
	 */
	getControlDigit : function(value) {
		var valores = new Array(1, 2, 4, 8, 5, 10, 9, 7, 3, 6);
		var control = 0;

		for (var i = 0; i <= 9; i++) {
			control += parseInt(value.charAt(i), 10) * valores[i];
		}

		control = 11 - (control % 11);
		if (control == 11)
			control = 0;
		else if (control == 10)
			control = 1;

		return control;
	},
	/**
	 * Función para poner el cursor al final del input,
	 * solución a problema de compatibilidad en IE <=8.
	 *
	 * @param {DOMImplementation}
	 *            el
	 */
	moveCursorToEnd : function(el) {
		if (typeof el.selectionStart == "number") {
			el.selectionStart = el.selectionEnd = el.value.length;
		} else if (typeof el.createTextRange != "undefined") {
			el.focus();
			var range = el.createTextRange();
			range.collapse(false);
			range.select();
		}
	},
	/**
	 * Comprueba si se ha seleccionado el modo de entrada de datos (Radiobutton
	 * IBAN o CCC).
	 *
	 * @param {String}
	 *            clientId
	 * @returns {Boolean}
	 */
	isAccountModeSelected : function(clientId) {
		var ibanModeChecked = jQuery(
				'input[id="IBAN_accountInput_RadioButton_' + clientId + '"]')
				.is(':checked');
		var cccModeChecked = jQuery(
				'input[id="CCC_accountInput_RadioButton_' + clientId + '"]')
				.is(':checked');
		return (ibanModeChecked || cccModeChecked);
	},
	/**
	 * Comprueba que se haya seleccionado el modo de entrada y que los inputs
	 * IBAN no están vacios. Si no se da algun caso, devuelve
	 * false y añade al componente el mensaje y clase de error.
	 *
	 * @param {String}
	 *            clientId
	 * @returns {Boolean}
	 */
	isRequiredIBANFilled : function(clientId) {

		if (!this.isAccountModeSelected(clientId)) {
			proteoAccountInputMultiMode.addIBANError(clientId,
					"bso.channel.component.accountinput.error.empty.mode");
			return false;
		}

		var ibanDC = jQuery('input[id="IBAN_DC_' + clientId + '"]').val()
				|| undefined;
		var bank = jQuery('input[id="IBAN_1_' + clientId + '"]').val()
				|| undefined;
		var branch = jQuery('input[id="IBAN_2_' + clientId + '"]').val()
				|| undefined;
		var dcAndFirstTwoAccountDigits = jQuery(
				'input[id="IBAN_3_' + clientId + '"]').val()
				|| undefined;
		var firstAccount = jQuery('input[id="IBAN_4_' + clientId + '"]').val()
				|| undefined;
		var secondAccount = jQuery('input[id="IBAN_5_' + clientId + '"]').val()
				|| undefined;

		if (!ibanDC && !bank && !branch && !dcAndFirstTwoAccountDigits
				&& !firstAccount && !secondAccount) {
			proteoAccountInputMultiMode.addIBANError(clientId,
					"bso.channel.component.common.component.error.required");
			return false;
		}

		if (!ibanDC) {
			proteoAccountInputMultiMode.addIBANError(clientId,
					"bso.channel.component.accountinput.error.empty.ibandc");
			return false;
		}
		if (!bank) {
			proteoAccountInputMultiMode.addIBANError(clientId,
					"bso.channel.component.accountinput.error.empty.bank");
			return false;
		}
		if (!branch) {
			proteoAccountInputMultiMode.addIBANError(clientId,
					"bso.channel.component.accountinput.error.empty.branch");
			return false;
		}
		if (!dcAndFirstTwoAccountDigits) {
			proteoAccountInputMultiMode.addIBANError(clientId,
					"bso.channel.component.accountinput.error.empty.dc");
			return false;
		}

		if (!firstAccount || !secondAccount) {
			proteoAccountInputMultiMode
					.addIBANError(clientId,
							"bso.channel.component.accountinput.error.empty.accountnumber");
			return false;
		}

		if (!ibanDC && !bank && !branch && !dcAndFirstTwoAccountDigits
				&& !firstAccount && !secondAccount) {
			proteoAccountInputMultiMode.addIBANError(clientId,
					"bso.channel.component.accountinput.error.empty.mode");
			return false;
		}

		return true;
	},
	/**
	 * Comprueba que se haya seleccionado el modo de entrada y que los inputs
	 * CCC no están vacios. Si no se da algun caso, devuelve
	 * false y añade al componente el mensaje y clase de error.
	 *
	 * @param {String}
	 *            clientId
	 * @returns {Boolean}
	 */
	isRequiredCCCFilled : function(clientId) {

		if (!this.isAccountModeSelected(clientId)) {
			proteoAccountInputMultiMode.addCCCError(clientId,
					"bso.channel.component.accountinput.error.empty.mode");
			return false;
		}

		var bank = jQuery('input[id="bank_' + clientId + '"]').val()
				|| undefined;
		var branch = jQuery('input[id="branch_' + clientId + '"]').val()
				|| undefined;
		var dc = jQuery('input[id="DC_' + clientId + '"]').val() || undefined;
		var accountNumber = jQuery('input[id="CCC_' + clientId + '"]').val()
				|| undefined;

		if (!bank && !branch && (!dc || dc == "--") && !accountNumber) {
			proteoAccountInputMultiMode.addCCCError(clientId,
					"bso.channel.component.common.component.error.required");
			return false;
		}

		if (!bank) {
			proteoAccountInputMultiMode.addCCCError(clientId,
					"bso.channel.component.accountinput.error.empty.bank");
			return false;
		}

		if (!branch) {
			proteoAccountInputMultiMode.addCCCError(clientId,
					"bso.channel.component.accountinput.error.empty.branch");
			return false;
		}

		if (!dc) {
			proteoAccountInputMultiMode.addCCCError(clientId,
					"bso.channel.component.accountinput.error.empty.dc");
			return false;
		}

		if (!accountNumber) {
			proteoAccountInputMultiMode
					.addCCCError(clientId,
							"bso.channel.component.accountinput.error.empty.accountnumber");
			return false;
		}

		return true;
	},
	triggerBankResolverEvent : function(clientId) {
		var bank = jQuery('input[id="IBAN_1_' + clientId + '"][type="text"]')
				.val();
		jQuery('body').trigger('proteoAccountInputOnResolveBankNameEvent', [ {
			'value' : bank,
			'clientId' : clientId
		} ]);
	}
};

/**
 * Objeto de gestión del comportamiento y
 * validación cliente del componente Cuenta de Entrada IBAN
 *
 * @author aaregall
 * @since 2.9.0
 */
var proteoAccountInput = {
	isSubmittingForm : false,
	initComponent : function(clientId, banksData) {

		banksData = (!jQuery.isEmptyObject(banksData)) ? banksData : {};
		new ProteoAccountInputBankNameResolver(clientId, banksData);
		this.registerInputEvents(clientId);
	},
	/**
	 * Registra una serie de eventos a las etiquetas de entrada de datos del
	 * componente con un objeto {@link ProteoAccountInputEventController} para
	 * el control del registro de eventos.
	 *
	 * @param {String}
	 *            clientId
	 */
	registerInputEvents : function(clientId) {
		var eventController = new ProteoAccountInputEventController(clientId);
		this.registerTextInputsBlurEvents(clientId, eventController);
		this.registerTextInputsKeyupEvents(clientId, eventController);
		this.registerTextInputsKeypressEvents(clientId, eventController);
		this.registerIBANPasteEvent(clientId, eventController);
	},
	/**
	 * Registra el evento de perdida de foco de los campos de texto del
	 * componente, en el que se aplica el padding de zeros a la izquierda al
	 * valor numérico del campo.
	 *
	 * @param {String}
	 *            clientId
	 * @param {ProteoAccountInputEventController}
	 *            eventController
	 */
	registerTextInputsBlurEvents : function(clientId, eventController) {
		if (!eventController.isBlurRegistered()) {

			var selectorIBAN = ".bso-textfield.IBAN_" + clientId;
			selectorIBAN = ProteoJSFUtils.escapeIdColons(selectorIBAN);

			jQuery(selectorIBAN).blur(function() {

				var curValue = jQuery(this).val();
				if (!isNaN(curValue)) {
					if (curValue.length > 0) {
						var curLength = jQuery(this).val().length;
						var maxLength = jQuery(this).attr("maxLength");
						var zeroCount = 0;
						if (curLength < maxLength) {
							zeroCount = (maxLength - curLength);
							for (var i = 0; i < zeroCount; i++) {
								curValue = 0 + curValue;
							}
						}
						jQuery(this).val(curValue);
					}
				}

				jQuery(this).promise().done(function() {
					proteoAccountInput.triggerBankResolverEvent(clientId);
				});

				if (jQuery(this).parents().hasClass("bso-fila-iban")) {
					proteoAccountInput.validateIBAN(clientId, false);
				}

			});
			eventController.setBlurRegistered(true);
		}
	},
	/**
	 * Previene la introducción de carácteres
	 * no deseados en los campos de texto.
	 *
	 * @param {String}
	 *            clientId
	 * @param {ProteoAccountInputEventController}
	 *            eventController
	 */
	registerTextInputsKeypressEvents : function(clientId, eventController) {
		var selectorIBAN = ".bso-textfield.IBAN_" + clientId;
		selectorIBAN = ProteoJSFUtils.escapeIdColons(selectorIBAN);
		jQuery(selectorIBAN)
				.each(
						function() {
							jQuery(this)
									.keypress(
											function(event, pars) {
												var key = (typeof (event.charCode) == 'undefined') ? event.keyCode
														: event.charCode;
												var val = String
														.fromCharCode(key);
												var p = jQuery.extend({
													locale : 'es',
													allowed : '1234567890',
													allow : ''
												}, pars);
												if (p.allowed.indexOf(val) == -1
														&& key != '0') {
													event.preventDefault();
												}
											});
						});

	},
	/**
	 * Registra el evento keyup de los campos de texto del componente. Controla
	 * que si el campo esttá lleno, el foco salte al siguiente
	 * campo, y la navegación de foco de inputs mediante
	 * tabulación.
	 *
	 * @param {String}
	 *            clientId
	 * @param {ProteoAccountInputEventController}
	 *            eventController
	 */
	registerTextInputsKeyupEvents : function(clientId, eventController) {
		if (!eventController.isKeyUpRegistered()) {

			var selectorIBAN = ".bso-textfield.IBAN_" + clientId;
			selectorIBAN = ProteoJSFUtils.escapeIdColons(selectorIBAN);

			jQuery(selectorIBAN)
					.keyup(
							function(e) {

								var isIBAN = false;

								if (jQuery(this).parents().hasClass(
										"bso-fila-iban")) {
									isIBAN = true;
									if (eventController.isPastingIBAN()) {
										return;
									}
								}

								if (isIBAN
                                        && !(proteoAccountInput.isAnyIBANFieldFilled(clientId))) {
									proteoAccountInput.clearIBANError(clientId);
								}

								var code = (e.keyCode ? e.keyCode : e.which);
								if (jQuery.inArray(code, [ 35, 36, 37, 39, 8,
										45, 46 ]) !== -1) {
									return;
								}

								var curValue = jQuery(this).val();
								var regex = /^\d+$/;
								if (!regex.test(curValue)) {
									curValue = curValue.substring(0,
											curValue.length - 1);
								}

								if (jQuery(this).val().length == jQuery(this)
										.attr("maxLength")) {

									if (jQuery(this).hasClass("bso-textfield")) {

										if (code == 9 || code == 16) {
											window.setTimeout(jQuery.proxy(
                                                    function() {
                                                           this.focus();
                                                    }, this), 10);
											return;

										}

										jQuery(this).next(".bso-textfield")
												.focus();

									} else {
										if (jQuery(this).next().length) {
											jQuery(this).next().focus();
										}
									}
								}
							});

			eventController.setKeyUpRegistered(true);
		}
	},
	/**
	 * Registra el evento de pegado desde el portapapeles en los inputs
	 * correspondientes al campo IBAN del componente.
	 *
	 * @param {String}
	 *            clientId
	 * @param {ProteoAccountInputEventController}
	 *            eventController
	 */
	registerIBANPasteEvent : function(clientId, eventController) {
		jQuery('div[id="accountInput_IBANRow_' + clientId + '"]').find(
				".bso-textfield:first").bind(
				"paste",
				function(event) {

					var maxLength = jQuery(this).attr("maxLength");
					jQuery(this).attr("maxLength", "50");

					eventController.setPastingIBAN(true);

					var limit = 22;

					setTimeout(jQuery.proxy(function() {
						var pastedValue = jQuery(this).val();
						var newStr = pastedValue.replace(/\D/g, '');

						jQuery(this).attr("maxLength", maxLength);

						if (newStr.length == limit) {
							var from = 0;
							for (var i = 0; i <= 5; i++) {
								var part = newStr.substr(from, 4);

								if (i == 0) {
									part = newStr.substr(from, 2);
								}

								jQuery(
										'div[id="accountInput_IBANRow_'
												+ clientId + '"]').find(
										".bso-textfield").eq(i).val(part);
								from = (i == 0) ? from + 2 : from + 4;
							}
							proteoAccountInput.validateIBAN(clientId);
							jQuery(
									'div[id="accountInput_IBANRow_' + clientId
											+ '"]')
									.find(".bso-textfield:first").trigger(
											'change');
							jQuery(
									'div[id="accountInput_IBANRow_' + clientId
											+ '"]').find(".bso-textfield:last")
									.focus();
						} else {
							jQuery(
									'div[id="accountInput_IBANRow_' + clientId
											+ '"]').find(".bso-textfield")
									.eq(0).val(newStr.substr(0, 2));
						}
						eventController.setPastingIBAN(false);

					}, this), 100);
				});
	},
	/**
	 * Comprueba si hay algún input CCC con valor.
	 *
	 * @param {String}
	 *            clientId
	 * @returns {Boolean}
	 */
	isAnyIBANFieldFilled : function(clientId) {
		var ibanDC = jQuery('input[id="IBAN_DC_' + clientId + '"]').val();
		var bank = jQuery('input[id="IBAN_1_' + clientId + '"]').val();
		var branch = jQuery('input[id="IBAN_2_' + clientId + '"]').val();
		var dcAndFirstTwoAccountDigits = jQuery(
				'input[id="IBAN_3_' + clientId + '"]').val();
		var firstAccount = jQuery('input[id="IBAN_4_' + clientId + '"]').val();
		var secondAccount = jQuery('input[id="IBAN_5_' + clientId + '"]').val();

		var isAnyFieldFilled = (ibanDC != "" || bank != "" || branch != ""
				|| dcAndFirstTwoAccountDigits != "" || firstAccount != "" || secondAccount != "") ? true
				: false;

		return isAnyFieldFilled;
	},
	/**
	 * Valida la cuenta IBAN del componente en caso de que todos los campos
	 * están llenos.
	 *
	 * @param {String}
	 *            clientId
	 * @returns {Boolean}
	 */
	validateIBAN : function(clientId, clearError) {
		var _clearError = (clearError != undefined) ? clearError : true;

		var ibanDC = jQuery('input[id="IBAN_DC_' + clientId + '"]').val();
		var bank = jQuery('input[id="IBAN_1_' + clientId + '"]').val();
		var branch = jQuery('input[id="IBAN_2_' + clientId + '"]').val();
		var dcAndFirstTwoAccountDigits = jQuery(
				'input[id="IBAN_3_' + clientId + '"]').val();
		var firstAccount = jQuery('input[id="IBAN_4_' + clientId + '"]').val();
		var secondAccount = jQuery('input[id="IBAN_5_' + clientId + '"]').val();

		if (dcAndFirstTwoAccountDigits.length >= 4 && firstAccount.length >= 4
				&& secondAccount.length >= 4) {
			var dc = dcAndFirstTwoAccountDigits.substring(0, 2);
			var accountNumber = dcAndFirstTwoAccountDigits.substring(2,
					dcAndFirstTwoAccountDigits.length)
					+ firstAccount.toString() + secondAccount.toString();

			if (ibanDC != "" && bank != "" && branch != "" && dc != ""
					&& accountNumber != "") {

				if (!this.isValidNumericString(ibanDC)) {
					this
							.addIBANError(clientId,
									"bso.channel.component.accountinput.error.notnumeric.ibandc");
					return false;
				}

				if (!this.isValidNumericString(bank)) {
					this
							.addIBANError(clientId,
									"bso.channel.component.accountinput.error.notnumeric.bank");
					return false;
				}

				if (!this.isValidNumericString(branch)) {
					this
							.addIBANError(clientId,
									"bso.channel.component.accountinput.error.notnumeric.branch");
					return false;
				}

				if (!this.isValidNumericString(dc)) {
					this
							.addIBANError(clientId,
									"bso.channel.component.accountinput.error.notnumeric.dc");
					return false;
				}

				if (!this.isValidNumericString(accountNumber)) {
					this
							.addIBANError(clientId,
									"bso.channel.component.accountinput.error.notnumeric.accountnumber");
					return false;
				}

				if (ibanDC.length != 2) {
					this
							.addIBANError(clientId,
									"bso.channel.component.accountinput.error.length.ibandc");
					return false;
				}

				if (bank.length != 4) {
					this
							.addIBANError(clientId,
									"bso.channel.component.accountinput.error.length.bank");
					return false;
				}

				if (branch.length != 4) {
					this
							.addIBANError(clientId,
									"bso.channel.component.accountinput.error.length.branch");
					return false;
				}

				if (dc.length != 2) {
					this
							.addIBANError(clientId,
									"bso.channel.component.accountinput.error.length.dc");
					return false;
				}

				if (accountNumber.length != 10) {
					this
							.addIBANError(clientId,
									"bso.channel.component.accountinput.error.length.accountnumber");
					return false;
				}

				var firstPartOK = (this.getControlDigit("00" + bank + branch) == parseInt(
						dc.charAt(0), 10));
				var secondPartOK = (this.getControlDigit(accountNumber) == parseInt(
						dc.charAt(1), 10));

				if (!firstPartOK || !secondPartOK) {
					this
							.addIBANError(clientId,
									"bso.channel.component.accountinput.error.invalid.ccc");
					return false;
				}
				var ccc = bank.toString() + branch.toString() + dc.toString()
						+ accountNumber.toString();

				if (this.getIbanControlDigit(ccc) != ibanDC) {
					this
							.addIBANError(clientId,
									"bso.channel.component.accountinput.error.invalid.ibandc");
					return false;
				}

				this.clearIBANError(clientId);
			}

		}

		if (_clearError) {
			this.clearIBANError(clientId);
		}

		return true;
	},
	hasErrors : function(clientId) {
		var error = jQuery('input[id="' + clientId + 'error"][type="hidden"]')
				.val();
		return (error != "");
	},
	/**
	 * Añade el mensaje de error de la cuenta IBAN del
	 * componente.
	 *
	 * @param {String}
	 *            clientId
	 * @param {String}
	 *            key
	 */
	addIBANError : function(clientId, key) {
		addErrorMessage(clientId, key);
		addInvalidComponentClass(clientId);
		jQuery('span[id="accountInput_IBANMessage_' + clientId + '"]').text(
				ProteoLocalizer.getLiteral(key));
	},
	/**
	 * Borra el mensaje de error de la cuenta IBAN del componente.
	 *
	 * @param {String}
	 *            clientId
	 */
	clearIBANError : function(clientId, removeClass) {
		var shouldRemoveClass = removeClass | true;
		removeErrorMessage(clientId);
		if (shouldRemoveClass) {
			removeInvalidComponentClass(clientId);
		}
		var message = jQuery(
				'input[id="accountInput_IBANMessage_hidden_' + clientId + '"]')
				.val();
		jQuery('span[id="accountInput_IBANMessage_' + clientId + '"]').text(
				message);

		this.triggerBankResolverEvent(clientId);
	},
	/**
	 * Valida si el valor parametrizado es numérico (0 a la
	 * izquierda también).
	 *
	 * @param {String}
	 *            value
	 * @returns {Boolean}
	 */
	isValidNumericString : function(value) {
		var str = value.toString();

		for (var i = 0; i < str.length; i++) {
			var c = str.charAt(i);
			if (c < "0" || c > "9") {
				return false;
			}
		}
		return true;
	},
	/**
	 * Algoritmo para obtener el dígito de control de un valor.
	 *
	 * @param {String}
	 *            value
	 * @returns {Number}
	 */
	getControlDigit : function(value) {
		var valores = new Array(1, 2, 4, 8, 5, 10, 9, 7, 3, 6);
		var control = 0;

		for (var i = 0; i <= 9; i++) {
			control += parseInt(value.charAt(i), 10) * valores[i];
		}

		control = 11 - (control % 11);
		if (control == 11)
			control = 0;
		else if (control == 10)
			control = 1;

		return control;
	},
	/**
	 * Algoritmo para obtener el dígito de control de un valor.
	 *
	 * @param {String}
	 *            value
	 * @returns {Number}
	 */
	getIbanControlDigit : function(value) {

		var iban = value.toString() + "142800";

		resto = iban.substring(0, 9);
		resto = resto % 97;

		resto = '' + resto + iban.substring(9, 16);
		resto = resto % 97;

		resto = '' + resto + iban.substring(16, 23);
		resto = resto % 97;

		resto = '' + resto + iban.substring(23, 26);
		resto = resto % 97;

		var dc_iban = 98 - resto;

		if (dc_iban < 10) {
			dc_iban = "0" + dc_iban.toString();
		}
		return dc_iban.toString();
	},
	/**
	 * Función para poner el cursor al final del input,
	 * solución a problema de compatibilidad en IE <=8.
	 *
	 * @param {DOMImplementation}
	 *            el
	 */
	moveCursorToEnd : function(el) {
		if (typeof el.selectionStart == "number") {
			el.selectionStart = el.selectionEnd = el.value.length;
		} else if (typeof el.createTextRange != "undefined") {
			el.focus();
			var range = el.createTextRange();
			range.collapse(false);
			range.select();
		}
	},
	/**
	 * Comprueba que se haya seleccionado el modo de entrada y que los inputs
	 * IBAN no están vacios. Si no se da algun caso, devuelve
	 * false y añade al componente el mensaje y clase de error.
	 *
	 * @param {String}
	 *            clientId
	 * @returns {Boolean}
	 */
	isRequiredIBANFilled : function(clientId) {
		var ibanDC = jQuery('input[id="IBAN_DC_' + clientId + '"]').val()
				|| undefined;
		var bank = jQuery('input[id="IBAN_1_' + clientId + '"]').val()
				|| undefined;
		var branch = jQuery('input[id="IBAN_2_' + clientId + '"]').val()
				|| undefined;
		var dcAndFirstTwoAccountDigits = jQuery(
				'input[id="IBAN_3_' + clientId + '"]').val()
				|| undefined;
		var firstAccount = jQuery('input[id="IBAN_4_' + clientId + '"]').val()
				|| undefined;
		var secondAccount = jQuery('input[id="IBAN_5_' + clientId + '"]').val()
				|| undefined;

		if (!ibanDC && !bank && !branch && !dcAndFirstTwoAccountDigits
				&& !firstAccount && !secondAccount) {
			proteoAccountInput
					.addIBANError(clientId,
							"bso.channel.component.accountinput.error.empty.required.iban");
			return false;
		}

		if (!ibanDC) {
			proteoAccountInput.addIBANError(clientId,
					"bso.channel.component.accountinput.error.empty.ibandc");
			return false;
		}
		if (!bank) {
			proteoAccountInput.addIBANError(clientId,
					"bso.channel.component.accountinput.error.empty.bank");
			return false;
		}
		if (!branch) {
			proteoAccountInput.addIBANError(clientId,
					"bso.channel.component.accountinput.error.empty.branch");
			return false;
		}
		if (!dcAndFirstTwoAccountDigits) {
			proteoAccountInput.addIBANError(clientId,
					"bso.channel.component.accountinput.error.empty.dc");
			return false;
		}

		if (!firstAccount || !secondAccount) {
			proteoAccountInput
					.addIBANError(clientId,
							"bso.channel.component.accountinput.error.empty.accountnumber");
			return false;
		}

		if (!ibanDC && !bank && !branch && !dcAndFirstTwoAccountDigits
				&& !firstAccount && !secondAccount) {
			proteoAccountInput.addIBANError(clientId,
					"bso.channel.component.accountinput.error.empty.mode");
			return false;
		}

		return true;
	},
	triggerBankResolverEvent : function(clientId) {
		var bank = jQuery('input[id="IBAN_1_' + clientId + '"][type="text"]')
				.val();
		jQuery('body').trigger('proteoAccountInputOnResolveBankNameEvent', [ {
			'value' : bank,
			'clientId' : clientId
		} ]);
	}
};

/**
 * Objeto de gestión del comportamiento y
 * validación cliente del componente Cuenta de Entrada IBAN
 * Internacional
 *
 * @author icobosil
 * @since 2.9.0
 */
var proteoInternationalAcountInput = {
	isSubmittingForm : false,
	initComponent : function(clientId) {

		this.registerInputEvents(clientId);
	},
	/**
	 * Registra una serie de eventos a las etiquetas de entrada de datos del
	 * componente con un objeto {@link ProteoAccountInputEventController} para
	 * el control del registro de eventos.
	 *
	 * @param {String}
	 *            clientId
	 */
	registerInputEvents : function(clientId) {
		var eventController = new ProteoAccountInputEventController(clientId);
		this.registerTextInputsBlurEvents(clientId, eventController);
		this.registerTextInputsKeyupEvents(clientId, eventController);
		this.registerTextInputsKeypressEvents(clientId, eventController);
		this.registerIBANPasteEvent(clientId, eventController);
	},
	/**
	 * Registra el evento de perdida de foco de los campos de texto del
	 * componente, en el que se aplica el padding de zeros a la izquierda al
	 * valor numérico del campo.
	 *
	 * @param {String}
	 *            clientId
	 * @param {ProteoAccountInputEventController}
	 *            eventController
	 */
	registerTextInputsBlurEvents : function(clientId, eventController) {
		if (!eventController.isBlurRegistered()) {

			var selectorIBAN = ".bso-textfield.IBAN_" + clientId;
			selectorIBAN = ProteoJSFUtils.escapeIdColons(selectorIBAN);

			jQuery(selectorIBAN).blur(
					function() {

						if (jQuery(this).parents().hasClass("bso-fila-iban")) {
							proteoInternationalAcountInput.validateIBAN(
									clientId, false);
						}

					});
			eventController.setBlurRegistered(true);
		}
	},
	/**
	 * Previene la introducción de carácteres
	 * no deseados en los campos de texto.
	 *
	 * @param {String}
	 *            clientId
	 * @param {ProteoAccountInputEventController}
	 *            eventController
	 */
	registerTextInputsKeypressEvents : function(clientId, eventController) {
		var selectorIBAN = ".bso-textfield.IBAN_" + clientId;
		selectorIBAN = ProteoJSFUtils.escapeIdColons(selectorIBAN);
		jQuery(selectorIBAN)
				.each(
						function() {
							jQuery(this)
									.keypress(
											function(event, pars) {
												var key = (typeof (event.charCode) == 'undefined') ? event.keyCode
														: event.charCode;
												var val = String
														.fromCharCode(key);
												var p = jQuery.extend({
													locale : 'es',
													allowed : '1234567890',
													allow : ''
												}, pars);
												if (!(/^[a-z0-9\s]+$/i
														.test(val))
														&& key != '0') {
													event.preventDefault();
												}
											});
						});

	},
	/**
	 * Registra el evento keyup de los campos de texto del componente. Controla
	 * que si el campo está lleno, el foco salte al siguiente
	 * campo, y la navegación de foco de inputs mediante
	 * tabulación.
	 *
	 * @param {String}
	 *            clientId
	 * @param {ProteoAccountInputEventController}
	 *            eventController
	 */
	registerTextInputsKeyupEvents : function(clientId, eventController) {
		if (!eventController.isKeyUpRegistered()) {

			var selectorIBAN = ".bso-textfield.IBAN_" + clientId;
			selectorIBAN = ProteoJSFUtils.escapeIdColons(selectorIBAN);

			jQuery(selectorIBAN)
					.keyup(
							function(e) {

								var isIBAN = false;

								if (jQuery(this).parents().hasClass(
										"bso-fila-iban")) {
									isIBAN = true;
									if (eventController.isPastingIBAN()) {
										return;
									}
								}

								if(isIBAN
                                        && !(proteoInternationalAcountInput.isAnyIBANFieldFilled(clientId))) {
									proteoInternationalAcountInput
											.clearIBANError(clientId);
								}

								var code = (e.keyCode ? e.keyCode : e.which);
								if (jQuery.inArray(code, [ 35, 36, 37, 39, 8,
										45, 46 ]) !== -1) {
									return;
								}

								var curValue = jQuery(this).val();
								var regex = /^\d+$/;
								if (!regex.test(curValue)) {
									curValue = curValue.substring(0,
											curValue.length - 1);
								}

								if (jQuery(this).val().length == jQuery(this)
										.attr("maxLength")) {

									if (jQuery(this).hasClass("bso-textfield")) {
										if (code == 9 || code == 16) {
											window.setTimeout(jQuery.proxy(
                                                    function() {
                                                           this.focus();
                                                    }, this), 10);
                                       return;

										}

										jQuery(this).next(".bso-textfield")
												.focus();

									} else {
										if (jQuery(this).next().length) {
											jQuery(this).next().focus();
										}
									}
								}
							});

			eventController.setKeyUpRegistered(true);
		}
	},
	/**
	 * Registra el evento de pegado desde el portapapeles en los inputs
	 * correspondientes al campo IBAN del componente.
	 *
	 * @param {String}
	 *            clientId
	 * @param {ProteoAccountInputEventController}
	 *            eventController
	 */
	registerIBANPasteEvent : function(clientId, eventController) {
		jQuery('div[id="accountInput_IBANRow_' + clientId + '"]').find(
				".bso-textfield:first").bind(
				"paste",
				function(event) {

					var maxLength = jQuery(this).attr("maxLength");
					jQuery(this).attr("maxLength", "50");

					eventController.setPastingIBAN(true);

					setTimeout(jQuery.proxy(function() {
						var pastedValue = jQuery(this).val();
						var newStr = pastedValue.replace(/\W/g, '');

						jQuery(this).attr("maxLength", maxLength);

						jQuery(
								'div[id="accountInput_IBANRow_' + clientId
										+ '"]').find(".bso-textfield").eq(0)
								.val(newStr);

						jQuery(this).change();
						eventController.setPastingIBAN(false);

					}, this), 100);
				});
	},
	/**
	 * Comprueba si hay algún input CCC con valor.
	 *
	 * @param {String}
	 *            clientId
	 * @returns {Boolean}
	 */
	isAnyIBANFieldFilled : function(clientId) {
		var iban = jQuery('input[id="IBAN_COMPLETE_' + clientId + '"]').val();

		var isAnyFieldFilled = (iban != "") ? true : false;

		return isAnyFieldFilled;
	},
	/**
	 * Valida la cuenta IBAN del componente en caso de que todos los campos
	 * están llenos.
	 *
	 * @param {String}
	 *            clientId
	 * @returns {Boolean}
	 */
	validateIBAN : function(clientId, clearError) {
		var _clearError = (clearError != undefined) ? clearError : true;
//		var re = new RegExp(
//				'[a-zA-Z]{2}[0-9]{2}[a-zA-Z0-9]{4}[0-9]{7}([a-zA-Z0-9]?){0,16}');

		var iban = jQuery('input[id="IBAN_COMPLETE_' + clientId + '"]').val();
		iban = iban.replace(/[\W_]+/g, "");

		if (iban.length >= 4) {

//			if (!iban.match(re)) {
//				this.addIBANError(clientId,
//						"bso.channel.component.accountinput.invalid");
//				return false;
//			}

			this.clearIBANError(clientId);

		}

		if (_clearError) {
			this.clearIBANError(clientId);
		}

		return true;
	},
	hasErrors : function(clientId) {
		var error = jQuery('input[id="' + clientId + 'error"][type="hidden"]')
				.val();
		return (error != "");
	},
	/**
	 * Añade el mensaje de error de la cuenta IBAN del
	 * componente.
	 *
	 * @param {String}
	 *            clientId
	 * @param {String}
	 *            key
	 */
	addIBANError : function(clientId, key) {
		addErrorMessage(clientId, key);
		addInvalidComponentClass(clientId);
		jQuery('span[id="accountInput_IBANMessage_' + clientId + '"]').text(
				ProteoLocalizer.getLiteral(key));
	},
	/**
	 * Borra el mensaje de error de la cuenta IBAN del componente.
	 *
	 * @param {String}
	 *            clientId
	 */
	clearIBANError : function(clientId, removeClass) {
		var shouldRemoveClass = removeClass | true;
		removeErrorMessage(clientId);
		if (shouldRemoveClass) {
			removeInvalidComponentClass(clientId);
		}
		var message = jQuery(
				'input[id="accountInput_IBANMessage_hidden_' + clientId + '"]')
				.val();
		jQuery('span[id="accountInput_IBANMessage_' + clientId + '"]').text(
				message);

		//this.triggerBankResolverEvent(clientId);
	},
	/**
	 * Valida si el valor parametrizado es numérico (0 a la
	 * izquierda también).
	 *
	 * @param {String}
	 *            value
	 * @returns {Boolean}
	 */
	isValidNumericString : function(value) {
		var str = value.toString();

		for (var i = 0; i < str.length; i++) {
			var c = str.charAt(i);
			if (c < "0" || c > "9") {
				return false;
			}
		}
		return true;
	},
	/**
	 * Algoritmo para obtener el dígito de control de un valor.
	 *
	 * @param {String}
	 *            value
	 * @returns {Number}
	 */
	getControlDigit : function(value) {
		var valores = new Array(1, 2, 4, 8, 5, 10, 9, 7, 3, 6);
		var control = 0;

		for (var i = 0; i <= 9; i++) {
			control += parseInt(value.charAt(i), 10) * valores[i];
		}

		control = 11 - (control % 11);
		if (control == 11)
			control = 0;
		else if (control == 10)
			control = 1;

		return control;
	},
	/**
	 * Se transforman las letras en numeros (A = 10, B = 11, ..., Z = 35) tal y
	 * como se especifica en el ISO13616
	 */
	getCountryCode : function(value) {
		value = value.toUpperCase();
		return value.split('').map(function(n) {
			var code = n.charCodeAt(0);
			if (code >= A && code <= Z) {

				return code - A + 10;
			} else {
				return n;
			}
		}).join('');
	},
	/**
	 * Algoritmo para obtener el dígito de control de un valor.
	 *
	 * @param {String}
	 *            value
	 * @returns {Number}
	 */
	getIbanControlDigit : function(value) {
		var iban = value.toString() + "142800";

		resto = iban.substring(0, 9);
		resto = resto % 97;

		resto = '' + resto + iban.substring(9, 16);
		resto = resto % 97;

		resto = '' + resto + iban.substring(16, 23);
		resto = resto % 97;

		resto = '' + resto + iban.substring(23, 26);
		resto = resto % 97;

		var dc_iban = 98 - resto;

		if (dc_iban < 10) {
			dc_iban = "0" + dc_iban.toString();
		}
		return dc_iban.toString();
	},
	/**
	 * Función para poner el cursor al final del input,
	 * solución a problema de compatibilidad en IE <=8.
	 *
	 * @param {DOMImplementation}
	 *            el
	 */
	moveCursorToEnd : function(el) {
		if (typeof el.selectionStart == "number") {
			el.selectionStart = el.selectionEnd = el.value.length;
		} else if (typeof el.createTextRange != "undefined") {
			el.focus();
			var range = el.createTextRange();
			range.collapse(false);
			range.select();
		}
	},
	/**
	 * Comprueba que se haya seleccionado el modo de entrada y que los inputs
	 * IBAN no están vacios. Si no se da algun caso, devuelve
	 * false y añade al componente el mensaje y clase de error.
	 *
	 * @param {String}
	 *            clientId
	 * @returns {Boolean}
	 */
	isRequiredIBANFilled : function(clientId) {
		var iban = jQuery('input[id="IBAN_COMPLETE_' + clientId + '"]').val()
				|| undefined;

		if (!iban) {
			proteoInternationalAcountInput.addIBANError(clientId,
					"bso.channel.component.common.component.error.required");
			return false;
		}

		return true;
	},
};

/**
 * Objeto de gestión del comportamiento y
 * validación cliente del componente Fecha de Entrada.
 *
 * @author aaregall
 * @since 2.9.0
 */
var proteoDateInput = {
	/**
	 * Inicialización del componente.
	 *
	 * @param {String}
	 *            clientId
	 * @param {String}
	 *            minDate
	 * @param {String}
	 *            maxDate
	 */
	init : function(clientId, minDate, maxDate) {
		this.registerInputsKeydownEvents(clientId);
		this.applyCalendar(clientId, minDate, maxDate);
	},
	/**
	 * Registra el handler de prevención de
	 * introducción de carácteres no
	 * numéricos en los input's del componente.
	 *
	 * @param {String}
	 *            clientId
	 */
	registerInputsKeydownEvents : function(clientId) {
		var _isPermittedKey = function(keycode, event) {
			if (jQuery.inArray(keycode, [ 17, 46, 8, 9, 27, 13, 190 ]) !== -1
					|| (keycode == 65 && event.ctrlKey === true)
					|| (keycode >= 35 && keycode <= 39)) {
				return true;
			}
			return false;
		};
		var _onlyNumbersAllowed = function(e, element, maxlength) {
			var keycode = e.keyCode || e.which;
			if (element.value.length == maxlength) {
				if (!_isPermittedKey(keycode, e)) {
					e.preventDefault();
				}
			}
			if (_isPermittedKey(keycode, e)) {
				return;
			} else {
				if (e.shiftKey || (keycode < 48 || keycode > 57)
						&& (keycode < 96 || keycode > 105)) {
					e.preventDefault();
				}
			}
		};

		var selector = "input[id*='" + clientId
				+ "'][type='text'][class*='bso-textfield-fecha']";
		jQuery(selector).each(function() {
			var maxlength = jQuery(this).attr('maxlength');
			jQuery(this).keydown(function(e) {
				_onlyNumbersAllowed(e, this, maxlength);
			});
		});

	},
	/**
	 * Aplica funcionalidad JavaScript y valdiación del
	 * componente.
	 *
	 * @param {String}
	 *            clientId
	 * @param {String}
	 *            minDate
	 * @param {String}
	 *            maxDate
	 */
	applyCalendar : function(clientId, minDate, maxDate) {

		jQuery('div[id="calendarLayer_' + clientId + '"]').hide();
		jQuery('input[name="day_' + clientId + '"]').mask('00');
		jQuery('input[name="month_' + clientId + '"]').mask('00');
		jQuery('input[name="year_' + clientId + '"]').mask('0000');

		jQuery('input[name="calendarBtn_' + clientId + '"]')
				.click(
						function() {

							if (!(typeof (jQuery(this).closest(
									".bso-fecha:not(.bso-form-disabled)")
									.attr("class")) == "undefined")) {
								if (jQuery(
										'div[id="calendarLayer_' + clientId
												+ '"]').hasClass(
										"hasDatepicker")) {
									jQuery(
											'div[id="calendarLayer_' + clientId
													+ '"]').hide(
											200,
											function() {
												jQuery(
														'div[id="calendarLayer_'
																+ clientId
																+ '"]')
														.datepicker('destroy');
											});
									jQuery("html").unbind("mouseup.calendario");
								} else {

									jQuery(".bso-calendario").each(function() {
										jQuery(this).hide(200, function() {
											jQuery(this).datepicker('destroy');
										});
									})

									jQuery(
											'div[id="calendarLayer_' + clientId
													+ '"]').show(200);
									jQuery(
											'div[id="calendarLayer_' + clientId
													+ '"]').position({
										of : this,
										my : "left top+12",
										at : "left-22 bottom",
										collision : 'none none'
									});

									jQuery('html').unbind('mouseup.calendario');

									var today = new Date();
									var dd = today.getDate();
									var mm = today.getMonth() + 1;
									var yyyy = today.getFullYear();

									if (dd < 10) {
										dd = '0' + dd;
									}
									if (mm < 10) {
										mm = '0' + mm;
									}
									today = dd + '/' + mm + '/' + yyyy;

									var curDay = jQuery(
											'input[name="day_' + clientId
													+ '"]').val();
									var curMonth = jQuery(
											'input[name="month_' + clientId
													+ '"]').val();
									var curYear = jQuery(
											'input[name="year_' + clientId
													+ '"]').val();
									var defDate = '';

									if (curDay != '' && curMonth != ''
											&& curYear != '') {
										defDate = curMonth + '/' + curDay + '/'
												+ curYear;
									} else {
										defDate = jQuery.datepicker.parseDate(
												'dd/mm/yy', today ? today : '');
									}

									var minDay = parseInt(minDate.substring(0,
                                            2));

									var minMonth = parseInt(minDate.substring(
											3, 5));
									var minYear = parseInt(minDate.substring(6,
											10));

									var maxDay = parseInt(maxDate.substring(0,
											2));
									var maxMonth = parseInt(maxDate.substring(
											3, 5));
									var maxYear = parseInt(maxDate.substring(6,
											10));

									jQuery(
											'div[id="calendarLayer_' + clientId
													+ '"]')
											.show(200)
											.datepicker(
													{
														altFormat : 'dd/mm/yy',
														defaultDate : defDate,
														firstDay : 1,
														changeMonth : false,
														changeYear : false,
														minDate : new Date(
																minYear,
																minMonth - 1,
																minDay),
														maxDate : new Date(
																maxYear,
																maxMonth - 1,
																maxDay),
														altFormat : "d/mm/yy",
														yearRange : '1910:2080',
														dayNames : [
																ProteoLocalizer
																		.getLiteral("date.day.long.sunday"),
																ProteoLocalizer
																		.getLiteral("date.day.long.monday"),
																ProteoLocalizer
																		.getLiteral("date.day.long.tuesday"),
																ProteoLocalizer
																		.getLiteral("date.day.long.wednesday"),
																ProteoLocalizer
																		.getLiteral("date.day.long.thursday"),
																ProteoLocalizer
																		.getLiteral("date.day.long.friday"),
																ProteoLocalizer
																		.getLiteral("date.day.long.saturday") ],
														dayNamesMin : [
																ProteoLocalizer
																		.getLiteral("date.day.short.sunday"),
																ProteoLocalizer
																		.getLiteral("date.day.short.monday"),
																ProteoLocalizer
																		.getLiteral("date.day.short.tuesday"),
																ProteoLocalizer
																		.getLiteral("date.day.short.wednesday"),
																ProteoLocalizer
																		.getLiteral("date.day.short.thursday"),
																ProteoLocalizer
																		.getLiteral("date.day.short.friday"),
																ProteoLocalizer
																		.getLiteral("date.day.short.saturday") ],
														monthNames : [
																ProteoLocalizer
																		.getLiteral("date.month.long.january"),
																ProteoLocalizer
																		.getLiteral("date.month.long.february"),
																ProteoLocalizer
																		.getLiteral("date.month.long.march"),
																ProteoLocalizer
																		.getLiteral("date.month.long.april"),
																ProteoLocalizer
																		.getLiteral("date.month.long.may"),
																ProteoLocalizer
																		.getLiteral("date.month.long.june"),
																ProteoLocalizer
																		.getLiteral("date.month.long.july"),
																ProteoLocalizer
																		.getLiteral("date.month.long.august"),
																ProteoLocalizer
																		.getLiteral("date.month.long.september"),
																ProteoLocalizer
																		.getLiteral("date.month.long.october"),
																ProteoLocalizer
																		.getLiteral("date.month.long.november"),
																ProteoLocalizer
																		.getLiteral("date.month.long.december"), ],
														monthNamesShort : [
																ProteoLocalizer
																		.getLiteral("date.month.short.january"),
																ProteoLocalizer
																		.getLiteral("date.month.short.february"),
																ProteoLocalizer
																		.getLiteral("date.month.short.march"),
																ProteoLocalizer
																		.getLiteral("date.month.short.april"),
																ProteoLocalizer
																		.getLiteral("date.month.short.may"),
																ProteoLocalizer
																		.getLiteral("date.month.short.june"),
																ProteoLocalizer
																		.getLiteral("date.month.short.july"),
																ProteoLocalizer
																		.getLiteral("date.month.short.august"),
																ProteoLocalizer
																		.getLiteral("date.month.short.september"),
																ProteoLocalizer
																		.getLiteral("date.month.short.october"),
																ProteoLocalizer
																		.getLiteral("date.month.short.november"),
																ProteoLocalizer
																		.getLiteral("date.month.short.december"), ],
														prevText : 'Anterior',
														nextText : 'Siguiente',
														showOtherMonths : true,
														showAnim : 'fadeIn',
														onChangeMonthYear : function() {
															setTimeout(
																	"jQuery('.ui-datepicker-prev').attr('href', 'javascript:;'); jQuery('.ui-datepicker-next').attr('href', 'javascript:;');",
																	200);
														},
														onSelect : function(
																dateText, inst) {
															jQuery(
																	'div[id="calendarLayer_'
																			+ clientId
																			+ '"]')
																	.hide(
																			200,
																			function() {
																				jQuery(
																						'div[id="calendarLayer_'
																								+ clientId
																								+ '"]')
																						.datepicker(
																								'destroy');
																			});

															var day = dateText
																	.split('/')[1];
															var month = dateText
																	.split('/')[0];
															var year = dateText
																	.split('/')[2];

															proteoDateInput
																	.handleChoiceEvent(
																			clientId,
																			day,
																			month,
																			year,
																			function() {
																				jQuery(
																						'input[name="day_'
																								+ clientId
																								+ '"]')
																						.val(
																								day);
																				jQuery(
																						'input[name="month_'
																								+ clientId
																								+ '"]')
																						.val(
																								month);
																				jQuery(
																						'input[name="year_'
																								+ clientId
																								+ '"]')
																						.val(
																								year);

																				jQuery(
																						'html')
																						.unbind(
																								'mouseup.calendario');
																				proteoDateInput
																						.validateDate(
																								clientId,
																								minDate,
																								maxDate);
																			});
														}
													});

									jQuery('.ui-datepicker-prev').attr('href',
											'javascript:;');
									jQuery('.ui-datepicker-next').attr('href',
											'javascript:;');
								}
								jQuery('html')
										.bind(
												'mouseup.calendario',
												function(event) {

													if (!jQuery(event.target)
															.hasClass(
																	'bso-ico-calendario')
															&& jQuery(
																	event.target)
																	.parents(
																			'.bso-calendario').length == 0) {
														jQuery(
																'div[id="calendarLayer_'
																		+ clientId
																		+ '"]')
																.hide(
																		200,
																		function() {
																			jQuery(
																					'div[id="calendarLayer_'
																							+ clientId
																							+ '"]')
																					.datepicker(
																							'destroy');
																		});
														jQuery('html')
																.unbind(
																		'mouseup.calendario');
													}
												});
							}
						});

		jQuery(document).keyup(
				function(e) {
					if (e.keyCode === 27) {
						if (jQuery('.hasDatepicker').length) {
							jQuery('div[id="calendarLayer_' + clientId + '"]')
									.hide(
											200,
											function() {
												jQuery(
														'div[id="calendarLayer_'
																+ clientId
																+ '"]')
														.datepicker('destroy');
											});
						}
					}
				});
	},
	/**
	 * Gestiona el "evento de selección" de fecha mediante el
	 * datepicket de jQuery UI (<code>jQuery.datepicker.onSelect</code>).
	 * Lanza programaticamente el evento <code>change</code> del textinput
	 * correspondiente al año cuando cambia el valor.
	 *
	 * @param {String}
	 *            clientId
	 * @param {String}
	 *            day
	 * @param {String}
	 *            month
	 * @param {String}
	 *            year
	 * @param {Function}
	 *            applyChanges
	 */
	handleChoiceEvent : function(clientId, day, month, year, applyChanges) {
		var oldDay = jQuery('input[name="day_' + clientId + '"]').val();
		var oldMonth = jQuery('input[name="month_' + clientId + '"]').val();
		var oldYear = jQuery('input[name="year_' + clientId + '"]').val();

		applyChanges();

		if ((oldDay !== day) || (oldMonth !== month) || (oldYear !== year)) {
			jQuery('input[name="year_' + clientId + '"]').trigger('change');
		}

	},
	/**
	 * Realiza validación de fecha del componente.
	 *
	 * @param {String}
	 *            clientId
	 * @param {String
	 *            minDate
	 * @param {String
	 *            maxDate
	 */
	validateDate : function(clientId, minDate, maxDate) {

		var day = jQuery('input[name="day_' + clientId + '"]').val() || false;
		var month = jQuery('input[name="month_' + clientId + '"]').val() || false;
		var year = jQuery('input[name="year_' + clientId + '"]').val() || false;

		if (day && month && year) {

			if (isNaN(day) || isNaN(month) || isNaN(year)) {
				addErrorMessage(clientId,
						"bso.channel.component.dateinput.error.format");
				addInvalidComponentClass(clientId);
				return;
			}

			var invalidDay = false;
			var isLeapYear = false;
			var isThirtyDaysMonth = false;

			if (month == 4 || month == 6 || month == 9 || month == 11
					|| month == 2) {
				if (month == 2) {
					if ((year % 4 == 0) && (year % 100 != 0)
							|| (year % 400 == 0)) {
						isLeapYear = true;
						if (day > 29) {
							invalidDay = true;
						}
					} else {
						if (day > 28) {
							invalidDay = true;
						}
					}
				} else {
					isThirtyDaysMonth = true;
					if (day > 30) {
						invalidDay = true;
					}
				}
			}

			if (month == 2) {
                if (isLeapYear) {

					invalidDay = !(!isNaN(day) && day >= 1 && day <= 29);
				}
			} else if (!isThirtyDaysMonth) {
				invalidDay = !(proteoDateInput.isDayValid(day));
			}

			if (invalidDay || !proteoDateInput.isMonthValid(month)
					|| !proteoDateInput.isYearValid(year)) {

				addErrorMessage(clientId,
						"bso.channel.component.dateinput.error.invalid");
				addInvalidComponentClass(clientId);
				return;
			}

			var d = new Date();
			d.setFullYear(year, month - 1, day);

			minDate = proteoDateInput.parseStringToDate(minDate);
			maxDate = proteoDateInput.parseStringToDate(maxDate);

			if (!(d >= minDate && d <= maxDate)) {

				var minDateString = ((minDate.getDate() < 10) ? "0"
						+ minDate.getDate() : minDate.getDate())
						+ "/"
						+ ((minDate.getMonth() < 10) ? "0"
								+ (minDate.getMonth() + 1) : (minDate
								.getMonth() + 1)) + "/" + minDate.getFullYear();
				var maxDateString = ((maxDate.getDate() < 10) ? "0"
						+ maxDate.getDate() : maxDate.getDate())
						+ "/"
						+ ((maxDate.getMonth() < 10) ? "0"
								+ (maxDate.getMonth() + 1) : (maxDate
								.getMonth() + 1)) + "/" + maxDate.getFullYear();

				addErrorMessage(clientId,
						"bso.channel.component.dateinput.error.notinrange");
				addInvalidComponentClass(clientId);
				return;
			}

			removeErrorMessage(clientId);
			removeInvalidComponentClass(clientId);
		} else if (!day && !month && !year) {
			removeErrorMessage(clientId);
			removeInvalidComponentClass(clientId);
		}
	},
	/**
	 * Validación del campo día. Llama a la
	 * función de validación de fecha.
	 *
	 * @param {String}
	 *            clientId
	 * @param {String
	 *            minDate
	 * @param {String
	 *            maxDate
	 */
	validateDayInput : function(clientId, minDate, maxDate) {
		proteoDateInput.validateDate(clientId, minDate, maxDate);
	},
	/**
	 * Validación del campo mes. Llama a la
	 * función de validación de fecha.
	 *
	 * @param {String}
	 *            clientId
	 * @param {String
	 *            minDate
	 * @param {String
	 *            maxDate
	 */
	validateMonthInput : function(clientId, minDate, maxDate) {
		proteoDateInput.validateDate(clientId, minDate, maxDate);
	},
	/**
	 * Validación del campo año. Llama a la
	 * función de validación de fecha.
	 *
	 * @param {String}
	 *            clientId
	 * @param {String
	 *            minDate
	 * @param {String
	 *            maxDate
	 */
	validateYearInput : function(clientId, minDate, maxDate) {
		proteoDateInput.validateDate(clientId, minDate, maxDate);
	},
	/**
	 * Dada la string de fecha en formato dd/MM/yyyy, devuelve un objeto Date.
	 *
	 * @param {String}
	 *            param
	 * @returns {Date}
	 */
	parseStringToDate : function(param) {
		if ((param) && !(typeof param === Date) && (typeof param === "string")
				&& (param.split("/").length == 3)) {
			var date = param.split("/");
			param = new Date();
			param.setFullYear(date[2], date[1] - 1, date[0]);
		}
		return param;
	},
	/**
	 * Validación básica de
	 * día.
	 *
	 * @param day
	 * @returns {Boolean}
	 */
	isDayValid : function(day) {
		return (!isNaN(day) && day >= 1 && day <= 31);
	},
	/**
	 * Validación básica de mes.
	 *
	 * @param month
	 * @returns {Boolean}
	 */
	isMonthValid : function(month) {
		return (!isNaN(month) && month >= 1 && month <= 12);
	},
	/**
	 * Validación básica de
	 * año. El año mínimo es
	 * 1990.
	 *
	 * @param year
	 * @returns {Boolean}
	 */
	isYearValid : function(year) {
		if (isNaN(year) || (year.length != 2 && (year.length < 4))) {
			return false;
		}
		return true;
	}
};

/**
 * ProteoCurrencyInput, gestión de comportamiento JavaScript
 *
 * @author dgonzamo
 * @since 2.9.0
 */
var proteoCurrencyInput = {
	/**
	 * Realiza validación de el importe de entrada.
	 *
	 * @param {String}
	 *            clientId
	 * @param {String
	 *            minCurrency
	 * @param {String
	 *            maxCurrency
	 */
	validateCurrency : function(ID, currency, minCurrency, maxCurrency,
			maxLength) {
		var clientId = ID.replace(/:/g, "\\:");
		if (parseFloat(currency) != null
				&& (parseFloat(maxCurrency) != null || parseFloat(minCurrency))) {
			if (parseFloat(currency) > parseFloat(maxCurrency)
					|| parseFloat(currency) < parseFloat(minCurrency)) {
				if (parseFloat(currency) > parseFloat(maxCurrency)) {
					addErrorMessage(ID,
							'bso.channel.component.currencyinput.max');
				} else {
					addErrorMessage(ID,
							'bso.channel.component.currencyinput.min');
				}
				addInvalidComponentClass(ID);
				return false;
			}
			removeErrorMessage(ID);
			removeInvalidComponentClass(ID);
			return true;
		} else if (currency != "0") {
			addErrorMessage(ID, 'bso.channel.component.currencyinput.invalid');
			addInvalidComponentClass(ID);
			return false;
		} else if (maxLength != null && currency.length > maxLength) {
			addErrorMessage(clientId,
					"bso.channel.component.currencyinput.error.maxlength");
			addInvalidComponentClass(clientId);
			return false;
		} else {
			removeErrorMessage(clientId);
			removeInvalidComponentClass(clientId);
			return true;
		}
	},

	addRequiredInputError : function(id,labelMsg) {

		/*Add error message*/
		var errorMessage = labelMsg+ " : "+ ProteoLocalizer.getLiteral('bso.channel.component.common.component.error.required');
		addStandarErrorComponentMessages(errorMessage);

		/*Add invalid class*/
		if (id != null && id != 'null') {
			jQuery("#" + id + "_currencyInput_input").addClass("bso-form-error");
		}

		jQuery("#" + id + "_componentHelp:eq(1)").text(ProteoLocalizer.getLiteral('bso.channel.component.common.component.error.required'));
		jQuery("#" + id + "_componentHelp:eq(1)").css("color","#DD1414");
	},

	addRequiredComboError : function(id,labelMsg) {
		/*Add error message*/
		var errorMessage = labelMsg+ " : "+ ProteoLocalizer.getLiteral('bso.channel.component.common.component.error.required');
		addStandarErrorComponentMessages(errorMessage);

		/*Add invalid class*/
		if (id != null && id != 'null') {
			jQuery("#" + id + "_currencyInput_combo").addClass("bso-form-error");
		}

		jQuery("#" + id + "_componentHelp:eq(0)").text(ProteoLocalizer.getLiteral('bso.channel.component.common.component.error.required'));
		jQuery("#" + id + "_componentHelp:eq(0)").css("color","#DD1414");
	}
};

/**
 * ProteoDropdownLink, gestión de comportamiento JavaScript
 *
 * @author dgonzamo
 * @since 2.9.0
 */
var proteoDropdownLink = {

	initComponent : function(clientId) {

		if (jQuery('div[id="' + clientId + '"]').length > 0) {
			jQuery('div[id="' + clientId + '"] .bso-desplegable a').each(
					function() {
						jQuery(this).click(
								function(e) {
									e.preventDefault();
									var _parent = jQuery(this).parent(
											'.bso-desplegable');
									var content = jQuery(this).next(
											'.bso-desplegable-info');

									var id = clientId.replace(/:/g, "\\:");
									jQuery('p#' + id + "_down").toggle();
									jQuery('p#' + id + "_drop").toggle();

									content.slideToggle('fast', function() {
										_parent.toggleClass('activo');
									});
								});
					});
		}
	},
	/**
	 * Plegará o desplegará la
	 * información adicional cambiando las clases de los divs
	 *
	 */
	dropdown : function(clientId) {
		var id = clientId.replace(/:/g, "\\:");
		if (!jQuery("div#" + id + " .bso-desplegable").hasClass('activo')) {

			jQuery('p#' + id + "_down").removeAttr("style");
			jQuery('p#' + id + "_drop").attr("style", "display:none");
			jQuery("div#" + id + " .bso-desplegable").addClass('activo');
			jQuery("div#" + id + " .bso-desplegable-info").attr("style",
					"display:block");

		} else {

			jQuery('p#' + id + "_drop").removeAttr("style");
			jQuery('p#' + id + "_down").attr("style", "display:none");
			jQuery("div#" + id + " .bso-desplegable").removeClass(
					'bso-desplegable-activo');
			jQuery("div#" + id + " .bso-desplegable-info").removeAttr("style");
		}
	}
};

/**
 * Objeto de gestión de comportamiento JavaScript para el
 * componente ProteoTitleDropdown.
 *
 * @author aaregall
 * @since 2.9.0
 */
var proteoTitleDropdown = {
	initComponent : function(clientId) {

		var id = clientId.replace(/:/g, "\\:");
		if (jQuery("div#" + id + ".bso-titulo-desplegable").length > 0) {
			jQuery("div#" + id + ".bso-titulo-desplegable .bso-desplegable h5")
					.each(
							function() {
								jQuery(this)
										.click(
												function(e) {
													e.preventDefault();
													var _parent = jQuery(this)
															.parent(
																	'.bso-desplegable');
													var content = jQuery(this)
															.next(
																	'.bso-desplegable-info');

													content
															.slideToggle(
																	'fast',
																	function() {
																		_parent
																				.toggleClass('activo');
																	});
												});
							});
		}
	},
	titleActiveClass : "bso-titulo-desplegado",
	/**
	 * Toggle de la visibilidad del contenido del título
	 * desplegable.
	 *
	 * @param {String}
	 *            clientId
	 */
	dropdown : function(clientId) {
		jQuery('div[id="titleDropdown_content_' + clientId + '"]').toggle();
		jQuery('div[id="titleDropdown_title_' + clientId + '"]').toggleClass(
				this.titleActiveClass);
	}
};

/**
 * Objeto de gestión de comportamiento JavaScript para el
 * componente ProteoBanner.
 *
 * @author dgonzamo
 * @since 2.9.0
 */
var proteoBanner = {
	/**
	 * Muestra el banner asociándolo a un trigger, depende
	 *
	 * @param {String}
	 *            clientId, identificador del banner.
	 * @param {String}
	 *            triggerId, identificador del componente que
	 *            actuará como trigger.
	 * @param {String}
	 *            pointerSelector, corersponde a la clase CSS del elemento al
	 *            que apuntará la flecha del banner.
	 * @param {Number}
	 *            child, corresponde al índice
	 *            numérico del hijo (indexado en 1) al que
	 *            apuntará el banner según la
	 *            classe ({@param pointerSelector}).
	 */
	showBanner : function(clientId, triggerId, pointerSelector, child) {

		var pointer = null;
		pointerSelector = (pointerSelector === undefined) ? ''
				: pointerSelector;
		child = (child === undefined || child === "") ? 1 : child;

		if (pointerSelector && pointerSelector.length) {
			var isTable = pointerSelector.match(/nth-child/);
			if (isTable) {
				var isHeader = false;
				var isSelectable = (jQuery('[id*="' + triggerId + '"]').first()
						.find('.bso-th-radio').length > 0);
				var index = (!isSelectable) ? 1 : 2;

				if (pointerSelector.match(/th:/)) {
					var splitted = pointerSelector.split('th:nth-child(');
					var headerNum = parseInt(splitted[1].substring(0,
							(splitted[1].length - 1)));
					headerNum = (headerNum + index);
					pointerSelector = splitted[0] + 'th:nth-child(' + headerNum
							+ ')';
					isHeader = true;

				} else if (pointerSelector.match(/td:/)) {
					var splitted = pointerSelector.split('td:nth-child(');
					var cellNum = parseInt(splitted[1].substring(0,
							(splitted[1].length - 1)));
					cellNum = (cellNum + index);
					pointerSelector = splitted[0] + 'td:nth-child(' + cellNum
							+ ')';
				}

				var selector = '[id*="' + triggerId + '"] ' + pointerSelector;
				pointer = (!isHeader) ? jQuery(selector).wrapInner('<span />')
						.find('span') : jQuery(selector);

			} else {

				if (child && child.length) {

					var trigger = jQuery('[id*="' + triggerId + '"]').first();

					if (pointerSelector == 'bso-texto'
							|| pointerSelector == 'bso-label'
							|| pointerSelector == 'bso-cell-left'
							|| pointerSelector == 'bso-cell-right') {
						trigger.find('[class*="' + pointerSelector + '"]')
								.first().eq(child - 1).wrapInner('<span />');
						pointer = trigger.find(
								'[class*="' + pointerSelector + '"]').first()
								.eq(child - 1).find('span');
					} else {
						var list = trigger.find('[class*="' + pointerSelector
								+ '"]');
						pointer = list.eq(child - 1);
					}

				} else {
					var trigger = jQuery('[id*="' + triggerId + '"]').first();
					if (pointerSelector == 'bso-texto'
							|| pointerSelector == 'bso-label'
							|| pointerSelector == 'bso-cell-left'
							|| pointerSelector == 'bso-cell-right') {

						if (trigger.hasClass(pointerSelector)) {
							trigger.wrapInner('<span/>');
							pointer = trigger.find('span');
						} else {
							trigger.find('.' + pointerSelector).wrapInner(
									'<span />');
							pointer = trigger.find(
									'[class*="' + pointerSelector + '"]')
									.first().find('span');
						}

					} else {
						pointer = (trigger.hasClass(pointerSelector)) ? trigger
								: trigger.find(
										'[class*="' + pointerSelector + '"]')
										.first();
					}
				}
			}
		} else {

			var trigger = jQuery('[id="' + triggerId + '"]');
			pointer = (trigger.hasClass('bso-imagen')) ? trigger.find('img')
					: trigger;
		}

		try {
			pointer.position().left;
		} catch (e) {
			pointer = jQuery('[id*="' + triggerId + '"]').first();
			var msg = 'ProteoBannerComponent : No se ha encontrado el nodo hijo n\u00famero "'
					+ child
					+ '" con clase CSS "'
					+ pointerSelector
					+ '" del componente "'
					+ triggerId
					+ '", al que debe apuntar el banner.';
			msg += '\nEn su lugar, el banner apuntar\u00e1 al nodo con id "'
					+ pointer.attr('id') + '".';

		}

		var banner = jQuery(document.getElementById(clientId));

		var pointerLeft = parseInt(pointer.position().left);
		var pointerRight = parseInt(pointerLeft + pointer.width());

		var bannerPos = 'left';
		var pointerPos = 'left';

		/*
		 * if ((pointerLeft > 40) && (pointerLeft <= 190)) { bannerPos =
		 * 'left-40'; pointerPos = 'left'; } else if ((pointerLeft > 190) &&
		 * (pointerLeft <= 380)) { bannerPos = 'center'; pointerPos = 'center'; }
		 * else if (pointerLeft > 380 ) { pointerPos = 'right'; if (pointerRight >
		 * 530) { bannerPos = 'right+10'; } else { bannerPos = 'right+30'; } }
		 */

		if (pointerLeft > 40 && pointerLeft <= 190) {
			bannerPos = "left-40";
			pointerPos = "left";
		} else if (pointerLeft > 190 && pointerLeft <= 380) {
			bannerPos = "center";
			pointerPos = "center";
		} else if (pointerLeft > 380) {
			if (pointerRight > 530)
				bannerPos = "right";
			else
				bannerPos = "right+40";
			pointerPos = "right";
		}

		this.applyPosition(banner, pointer, bannerPos, pointerPos);

		if (banner.hasClass('bso-banner-hidden')) {
			banner.removeClass('bso-banner-hidden');
			banner.addClass('bso-banner-visible');
		}
	},
	/**
	 * Mostrará u ocultará el banner
	 *
	 * @param {String}
	 *            clientId
	 */
	hiddeBanner : function(clientId) {
		if (jQuery('[id="' + clientId + '"]').hasClass('bso-banner-visible')) {
			jQuery('[id="' + clientId + '"]').removeClass('bso-banner-visible');
			jQuery('[id="' + clientId + '"]').addClass('bso-banner-hidden');
		} else {
			jQuery('[id="' + clientId + '"]').removeClass('bso-banner-hidden');
			jQuery('[id="' + clientId + '"]').addClass('bso-banner-visible');
		}
	},
	/**
	 * Aplica la posición del banner y de su flecha
	 * respectivamente a la posición del elemento al que debe
	 * apuntar.
	 *
	 * @param {jQueryElement}
	 *            banner
	 * @param {jQueryElement}
	 *            pointingAt
	 * @param {String}
	 *            bannerPos
	 * @param {String}
	 *            linkPosDefines which position on the element being positioned
	 *            to align with the target element: "horizontal vertical"
	 *            alignment. A single value such as "right" will be normalized
	 *            to "right center", "top" will be normalized to "center top"
	 *            (following CSS convention). Acceptable horizontal values:
	 *            "left", "center", "right". Acceptable vertical values: "top",
	 *            "center", "bottom". Example: "left top" or "center center".
	 *            Each dimension can also contain offsets, in pixels or percent,
	 *            e.g., "right+10 top-25%". Percentage offsets are relative to
	 *            the element being positioned.
	 *
	 */
	applyPosition : function(banner, pointingAt, bannerPos, linkPos) {
		banner.position({
			of : pointingAt,
			my : bannerPos + " top+12",
			at : linkPos + " bottom",
			collision : 'none none'
		});
		banner.find('.bso-banner-arrow').position({
			of : pointingAt,
			my : "center top+6",
			at : "center bottom",
			collision : 'none none'
		});
	}

};

/**
 * ProteoTabs, gestión de comportamiento JavaScript
 *
 * @author dgonzamo
 * @since 2.9.0
 */
var proteoTabs = {

	/**
	 * Cambiará de un tab y el otro
	 * hará al contrario
	 *
	 */
	initContent : function(parent) {
		var idParent = parent.replace(/:/g, "\\:");
		var totalTabs = jQuery('div#' + idParent).find('li').size();
		if (totalTabs > 2) {
			jQuery('div#' + idParent).find('ul').addClass('col3');
		} else {
			jQuery('div#' + idParent).find('ul').addClass('col2');
		}

		var idActivo = jQuery('div#' + idParent).find('.bso-tab-active').attr(
				'id');
		var targetActivo = jQuery('li[id^="' + idActivo + '"]').attr('value');
		jQuery('div#' + ProteoJSFUtils.escapeIdColons(targetActivo))
				.removeAttr("style");
		jQuery('div#' + ProteoJSFUtils.escapeIdColons(targetActivo)).attr(
				"style", "width:auto");

		var targetsInactivos = jQuery('div#' + idParent + ' li').not('.bso-tab-active');

		targetsInactivos.each( function() {
			jQuery('div#' + ProteoJSFUtils.escapeIdColons(jQuery(this).attr('value'))).attr(
					"style", "display: none;");
		});


	},

	/**
	 * Cambiará de activo a inactivo un tab y el otro
	 * hará al contrario
	 *
	 */
	tabActive : function(clientId, parent) {

		var idTab = clientId;
		var idParent = parent.replace(/:/g, "\\:");
		var idActivo = jQuery('div#' + idParent).find('.bso-tab-active').attr(
				'id');
		var targetTab = jQuery('li[id^="' + idTab + '"]').attr('value');
		var targetActivo = jQuery('li[id^="' + idActivo + '"]').attr('value');
		jQuery('div#' + idParent).find('.bso-tab-active').removeClass(
				'bso-tab-active');
		jQuery('li#' + ProteoJSFUtils.escapeIdColons(idTab)).addClass(
				'bso-tab-active');
		jQuery('div#' + ProteoJSFUtils.escapeIdColons(targetActivo)).attr(
				"style", "display: none;");
		jQuery('div#' + ProteoJSFUtils.escapeIdColons(targetTab)).removeAttr(
				"style");
		jQuery('div#' + ProteoJSFUtils.escapeIdColons(targetTab)).attr("style",
				"width:auto");
	},
};

/**
 * Objeto de gestión de comportamiento Javascript del
 * componente ProteoLightboxComponent.
 *
 * @author aaregall
 * @since 2.9.0
 */
var proteoLightbox = {
	/**
	 * Inicializa el componente Lightbox.
	 *
	 * @param {String}
	 *            clientId
	 * @param {String}
	 *            triggerId, id del componente que actuará como
	 *            trigger.
	 * @param {Boolean}
	 *            showOnload, define si se mostrará el lightbox
	 *            en inicializar-se o no.
	 */
	initLightbox : function(clientId, triggerId, showOnload) {
		var lightbox = jQuery("div[id='lightbox_" + clientId + "']");

		this.setPosition(lightbox);
		if (triggerId != null) {
			var trigger = jQuery("#" + ProteoJSFUtils.escapeIdColons(triggerId));
			trigger.addClass("bso-enlace-lightbox");
			this.registerTriggerClick(clientId, lightbox, trigger);
		}

		this.registerLightboxTabGuard(clientId);
		this.registerWindowResizeEvent(clientId);

		jQuery(document).bind("errorAddedOrRemovedToContext", function(event) {
			proteoLightbox.setPosition(lightbox);
		});

		if (showOnload) {
			this.open(clientId);
		}
	},
	/**
	 * Muestra el lightbox y la capa de overlay.
	 *
	 * @param {String}
	 *            clientId
	 * @param {DOMElement}
	 *            lightbox
	 */
	open : function(clientId) {
		var lightbox = jQuery("div[id='lightbox_" + clientId + "']");
		jQuery("div[id='lightbox_overlay_" + clientId + "']").show();
		lightbox.css("visibility", "visible");
		lightbox.show();
		lightbox.find(".bso-tabbable").first().focus();
	},
	/**
	 * Cierra el lightbox.
	 *
	 * @param {String}
	 *            clientId
	 */
	close : function(clientId) {
		var lightbox = jQuery('div[id="lightbox_' + clientId + '"]');
		lightbox.css("visibility", "hidden");
		lightbox.hide();
		jQuery("div[id='lightbox_overlay_" + clientId + "']").hide();
	},
	/**
	 * Registra el evento click del trigger que mostrará u
	 * ocultará el lightbox.
	 *
	 * @param {String}
	 *            clientId
	 * @param {DOMElement}
	 *            lightbox
	 * @param {DOMElement}
	 *            trigger
	 */
	registerTriggerClick : function(clientId, lightbox, trigger) {
		trigger.click(function(event) {
			event.preventDefault();
			if (lightbox.css("visibility") == "visible") {
				proteoLightbox.close(clientId);
			} else {
				proteoLightbox.open(clientId);
			}
		});
	},
	/**
	 * Aplica la funcionalidad TabGuard al lightbox.
	 *
	 * @param {String}
	 *            clientId
	 */
	registerLightboxTabGuard : function(clientId) {
		jQuery('.bso-lightbox:visible').tabGuard();
	},
	/**
	 * Registra el evento de cuando se cambia la ventana de
	 * tamaño, para re-definir la posición del
	 * lightbox.
	 *
	 * @param {String}
	 *            clientId
	 */
	registerWindowResizeEvent : function(clientId) {
		jQuery(window).resize(
				function() {
					var lightbox = jQuery("div[id='lightbox_" + clientId
							+ "']:visible");
					proteoLightbox.setPosition(lightbox);
				});
	},
	/**
	 * Define la posición del lightbox.
	 *
	 * @param {DOMElement}
	 *            lightbox
	 */
	setPosition : function(lightbox) {
		lightbox.css({
        'margin-top': '-' + lightbox.height() / 2 + 'px',
            'margin-left': '-' + lightbox.width() / 2 + 'px'
        });
	}
};

/**
 * Objeto de gestión de comportamiento Javascript del
 * componente ProteoTooltipComponent.
 *
 * @auhtor aaregall
 * @since 2.9.0
 */
var proteoTooltip = {

	/**
	 * Clase que se añade automáticamente al
	 * trigger cuando se registra la funcionalidad.
	 */
	bindedClass : 'proteo-tooltip-trigger',

	/**
	 * Inicializa el comportamiento del tooltip asociado a su trigger.
	 *
	 * @param {String}
	 *            clientId
	 * @param {String}
	 *            triggerId
	 */
	initTrigger : function(clientId, triggerId, evento, ffloat) {

		var trigger = jQuery("#" + ProteoJSFUtils.escapeIdColons(triggerId));
		trigger.addClass("bso-enlace-tooltip");
		var objtooltip = jQuery('div[id="tooltip_' + clientId + '"]');

		if (trigger.length > 0) {
			trigger.each(function() {

				jQuery(this).click(
					function(evento) {
						evento.stopPropagation();
						evento.preventDefault ? evento.preventDefault() : evento.returnValue = false;

						if (objtooltip.is(':visible')) {
							objtooltip.fadeTo('fast', 0, function() {
								objtooltip.hide();
							});
						} else {

							// Cierre de resto de elementos desplegables, excepto el actual
							BSOnlineComponents.closeAll(clientId);

							proteoTooltip.positionTooltip(objtooltip, trigger, ffloat);
							objtooltip.fadeTo('fast', 1);
						}

					});

				// Recalcular posición del tooltip al cambiar el tamaño
				// de la ventana del navegador
//			    var lastWindowHeight = jQuery(window).height();
//			    var lastWindowWidth = jQuery(window).width();

				jQuery(window).resize( function() {

					if (objtooltip.is(':visible')) {
//				        if(jQuery(window).height() != lastWindowHeight || jQuery(window).width() != lastWindowWidth){

//				            lastWindowHeight = jQuery(window).height();
//				            lastWindowWidth = jQuery(window).width();

							proteoTooltip.positionTooltip(objtooltip, trigger, ffloat);
//				        }
					}
				});

			});

			objtooltip.find('.bso-tooltip-cerrar').click(
				function() {
					jQuery(this).parents('.bso-tooltip').fadeTo('fast', 0,
							function() {
								jQuery(this).hide();
							});
			});
		}
		if (jQuery(".bso-contenedor-informativo").length > 0) {
			jQuery('.bso-contenedor-informativo .bso-close').click(function() {
				jQuery(this).parent().fadeOut('fast');
			});
		}
	},
	positionTooltip : function(objtooltip, trigger, ffloat) {

		var objLeft = parseInt(trigger.offset().left);
		var objRight = parseInt(objLeft + trigger.width());

		var linkPos = "left";

		var boxOffset = "";
		var arrowOffset = "";

		if (ffloat == "right") {
			boxOffset = "right";
			linkPos = "right-7";
			arrowOffset = "right";
		} else if (ffloat == "left") {
			boxOffset = "left";
			linkPos = "left";
			arrowOffset = "left";
		} else if( ffloat == "center"){
			boxOffset = "center";
			linkPos = "center";
			arrowOffset = "center";
		} else {
			// Auto
			if (objLeft > 40 && objLeft <= 190) {
				boxOffset = "left";
				linkPos = "left";
				arrowOffset = "left";
			} else if (objLeft > 190 && objLeft <= 380) {
				boxOffset = "center";
				linkPos = "center";
				arrowOffset = "center";
			} else if (objLeft > 380) {
				if (objRight >= 530){
					boxOffset = "left";
					linkPos = "left";
					arrowOffset = "left";
				}
				else{
					boxOffset = "right+40";
					linkPos = "right";
					arrowOffset = "right";
				}
			}
		}

		objtooltip.show();

		objtooltip.position({
			of : trigger,
			my : boxOffset + " top+15",
			at : linkPos + " bottom-7",
			collision : 'none none'
		});

		objtooltip.find('.bso-tooltip-arrow').position({
			of : objtooltip,
			my : arrowOffset + " top-12",
			at : arrowOffset + " top+6",
			collision : 'none none'
		});
	},

	toggle : function(event, clientId, triggerElement) {

		var nav = navigator.appName;
		if (nav == "Microsoft Internet Explorer") {
		   window.event.cancelBubble = true;
		}
		else {
		   if((event instanceof MouseEvent)){
				event.stopPropagation();
				event.preventDefault ? event.preventDefault() : event.returnValue = false;
			}
		}

		var objtooltip = jQuery('div[id="tooltip_' + clientId + '"]');
		var  float = "left";

		objtooltip.find('.bso-tooltip-cerrar').click(function() {
			jQuery(this).parents('.bso-tooltip').fadeTo('fast', 0, function() {
				jQuery(this).hide();
				if (jQuery('.bso-combo-estandar-select').hasClass("activated")) {
		        		var desplCombo = jQuery('.bso-combo-estandar-select.activated');
		        		desplCombo.find('.bso-combo-estandar-ul').fadeOut('fast');
		        	 	desplCombo.removeClass('activated');
		        	 	jQuery('.bso-combo-estandar-select-flecha').removeClass('expanded');
	         		}
			});
		});

		// Recalcular posición del tooltip al cambiar el tamaño
		// de la ventana del navegador

	    var lastWindowHeight = jQuery(window).height();
	    var lastWindowWidth = jQuery(window).width();

		jQuery(window).resize( function() {

			//confirm window was actually resized
			if (objtooltip.is(':visible')) {
				if(jQuery(window).height() != lastWindowHeight
		        		|| jQuery(window).width() != lastWindowWidth){

		            //set this windows size
		            lastWindowHeight = jQuery(window).height();
		            lastWindowWidth = jQuery(window).width();

		            proteoTooltip.positionTooltip(objtooltip, jQuery(triggerElement), float);

		        }
			}
		});

		if (objtooltip.is(':visible')) {
			objtooltip.fadeTo('fast', 0, function() {
				objtooltip.hide();
			});
		} else {

			// Cierre de resto de elementos desplegables, excepto el actual
			BSOnlineComponents.closeAll(clientId);

			proteoTooltip.positionTooltip(objtooltip, jQuery(triggerElement), float);
			objtooltip.fadeTo('fast', 1);
		}
	},

	closeAll : function(clientId) {

		var elemId = "tooltip_" + clientId;

		jQuery('.bso-tooltip').each(function(){

			var tooltip = jQuery(this);
			var excludeElement = tooltip.attr('id') === elemId
				|| tooltip.attr('name') === elemId;

			if(!excludeElement) {
				tooltip.fadeTo('fast', 0, function() {
					jQuery(this).hide();
					if (jQuery('.bso-combo-estandar-select').hasClass("activated")) {
		        		var desplCombo = jQuery('.bso-combo-estandar-select.activated');
		        		desplCombo.find('.bso-combo-estandar-ul').fadeOut('fast');
		        	 	desplCombo.removeClass('activated');
		        	 	jQuery('.bso-combo-estandar-select-flecha').removeClass('expanded');
			     	}
				});
			}
		});
	}

	/**
	 * Calcula y cambia la posición del tooltip respecto a la
	 * posición del trigger.
	 *
	 * @param {DOM}
	 *            tooltip
	 * @param {DOM}
	 *            trigger
	 */
	/*
	 * calculatePosition : function(tooltip, trigger) { var objLeft =
	 * parseInt(trigger.position().left); var objRight = parseInt(objLeft +
	 * trigger.width());
	 *
	 *
	 * if( objLeft > 40 && objLeft <= 190 ) { tooltipPos = "left-40"; linkPos =
	 * "left"; } else if ( objLeft > 190 && objLeft <= 380 ) { tooltipPos =
	 * "center"; linkPos = "center"; } else if ( objLeft > 380 ) { if( objRight >
	 * 530 ) tooltipPos = "right"; else tooltipPos = "right+40"; linkPos = "right"; }
	 *
	 * this.setPosition(tooltip, trigger, tooltipPos, linkPos); },
	 */
	/**
	 * Posiciona el tooltip según las opciones de
	 * inicialización del trigger y del tooltip.
	 *
	 * @param {DOM}
	 *            tooltip
	 * @param {DOM}
	 *            trigger
	 * @param {String}
	 *            tooltipPos
	 * @param {String}
	 *            linkPos
	 */
	/*
	 * setPosition : function (tooltip, trigger, tooltipPos, linkPos) {
	 * tooltip.position({ of: trigger, my: tooltipPos + " top+12", at: linkPos + "
	 * bottom", collision: 'none none' });
	 * tooltip.find('.bso-tooltip-arrow').position({ of: trigger, my: "center
	 * top+6", at: "center bottom", collision: 'none none' }); },
	 */
	/**
	 * Registra el evento click del trigger para mostar u ocultar el tootlip
	 * según su visibilidad.
	 *
	 * @param {DOM}
	 *            trigger
	 * @param {DOM}
	 *            tooltip
	 */
	/*
	 * registerTriggerClick : function (trigger, tooltip) {
	 * trigger.click(function(e){ e.preventDefault();
	 * proteoTooltip.calculatePosition(tooltip, trigger); if
	 * (tooltip.css("visibility") == "visible") { tooltip.css("visibility",
	 * "hidden"); } else { tooltip.css("visibility", "visible"); }
	 * trigger.addClass(this.bindedClass); },
	 */
	/**
	 * Abre o cierra el tooltip
	 *
	 * @param {String}
	 *            clientId, identificador del componente tooltip
	 * @param {DocumentFragment}
	 *            triggerElement, objeto DOM nativo del trigger
	 */
	/*
	 * toggle : function(clientId, triggerElement) {
	 *
	 * var tooltip = jQuery('div[id="tooltip_'+clientId+'"]');
	 *
	 * if (!jQuery(triggerElement).hasClass(this.bindedClass)) {
	 * proteoTooltip.calculatePosition(tooltip, jQuery(triggerElement)); if
	 * (tooltip.css("visibility") == "visible") { tooltip.css("visibility",
	 * "hidden"); } else { tooltip.css("visibility", "visible"); } } },
	 */
	/**
	 * Cierra el tooltip.
	 *
	 * @param {String}
	 *            clientId
	 */
	/*
	 * close : function(clientId) { var tooltip =
	 * jQuery('div[id="tooltip_'+clientId+'"]'); tooltip.css("visibility",
	 * "hidden"); }
	 */
};

var proteoTip = {
	initTrigger : function(clientId, triggerId, evento) {
		var trigger = jQuery("#" + ProteoJSFUtils.escapeIdColons(triggerId));

		if (trigger.length > 0) {
			trigger.each(function() {

				var objtip = jQuery('div[id="tip_' + clientId + '"]');
				var objlink = jQuery(this);
				var objLeft = parseInt(jQuery(this).position().left);
				var tipPos = "center";
				var linkPos = "center";

				if (evento == "click") {
					jQuery(this).click(
							function() {
								if (objtip.is(':visible')) {
									objtip.fadeTo('fast', 0, function() {
										objtip.hide();
									});
								} else {

									// Cierre de resto de elementos desplegables, excepto el actual
									BSOnlineComponents.closeAll(clientId);

									proteoTip.position_tip(objtip, objlink,
											tipPos, linkPos);
									objtip.fadeTo('fast', 1);
								}
							});
				} else if (evento == "hover") {

					jQuery(this).hover(
							function() {
								proteoTip.position_tip(objtip, objlink, tipPos,
										linkPos);
								objtip.fadeTo('fast', 1, function() {
								});
							},
							function() {
								proteoTip.position_tip(objtip, objlink, tipPos,
										linkPos);
								objtip.fadeTo('fast', 0, function() {
									objtip.hide();
								});

							});
				}
			});


			jQuery('.bso-tip .bso-tip-close').click(function() {
				jQuery(this).parents('.bso-tip').fadeTo('fast', 0, function() {
					jQuery(this).hide();
				});
			});
		}
	},

	position_tip : function(objtip, objlink, tipPos, linkPos) {
		objtip.show();

		var maxWidth = 0;
		objtip.find("div:first").css("display", "inline-block");

		if (objtip.find("div:first").find("p").length > 0) {
			objtip.find("div:first").find("p").each(function() {
				jQuery(this).css("word-break", "break-word");
				if (jQuery(this).width() > maxWidth) {
					maxWidth = jQuery(this).width();
				}
			});
		}
		if (objtip.find("div:first").find("div").length > 0) {
			objtip.find("div:first").find("div").each(function() {
				jQuery(this).css("word-break", "break-word");
				if (jQuery(this).width() > maxWidth) {
					maxWidth = jQuery(this).width();
				}
			});
		}
		objtip.find("div:first").css("display", "");

		if (objtip.width() <= maxWidth) {
			objtip.width(maxWidth + 50);
		}

		var sourceLink = objlink;
		if (typeof sourceLink === "string") {
			sourceLink = jQuery("#" + ProteoJSFUtils.escapeIdColons(objlink));
		}
		objtip.position({
			of : sourceLink,
			my : tipPos + " bottom",
			at : linkPos + " top-6",
			collision : 'none none'
		});
		objtip.find('span').position({
			of : sourceLink,
			my : "center bottom",
			at : "center top+1",
			collision : 'none none'
		});
	},
	toggle : function(clientId, triggerElement) {


		jQuery(".bso-tip").not('div[id="tip_' + clientId + '"]').each(
				function() {
					jQuery(this).hide();
				});

		var objtooltip = jQuery('div[id="tip_' + clientId + '"]');
		var tooltipPos = "left";
		var linkPos = "left";

		objtooltip.find('.bso-tip-close').click(function() {
			jQuery(this).parents('.bso-tip').fadeTo('fast', 0, function() {
				jQuery(this).hide();
			});
		});

		if (objtooltip.is(':visible')) {
			objtooltip.fadeTo('fast', 0, function() {
				objtooltip.hide();
			});
		} else {

			// Cierre de resto de elementos desplegables, excepto el actual
			BSOnlineComponents.closeAll(clientId);

			proteoTip.position_tip(objtooltip, triggerElement, tooltipPos,
					linkPos);
			objtooltip.fadeTo('fast', 1);
		}
	},

	closeAll : function(clientId) {

		var elemId = "tip_" + clientId;

		jQuery('.bso-tip').each(function(){

			var tip = jQuery(this);
			var excludeElement = tip.attr('id') === elemId
				|| tip.attr('name') === elemId;

			if(!excludeElement) {
				tip.hide();
			}
		});
	}
};


/**
 * Objeto de gestión de comportamiento Javascript del
 * componente ProteoTooltipLateralComponent.
 *
 * @auhtor dgonzamo
 * @since 2.9.0
 */
var proteoTooltipLateral = {
	/**
	 * Clase que se añade automáticamente al
	 * trigger cuando se registra la funcionalidad.
	 */
	bindedClass : 'proteo-tooltip-trigger',
	/**
	 * Inicializa el comportamiento del tooltip lateral asociado a su trigger.
	 *
	 * @param {String}
	 *            clientId
	 * @param {String}
	 *            triggerId
	 */
	initTrigger : function(clientId, triggerId) {
		/*
		 * var id = clientId.replace(/:/g, "\\:"); var tooltipLateral =
		 * jQuery("div#"+id+"_tooltip_lateral"); var trigger =
		 * jQuery("#"+ProteoJSFUtils.escapeIdColons(triggerId));
		 * trigger.addClass("bso-enlace-tooltiplateral");
		 *
		 * this.calculatePosition(tooltipLateral, trigger);
		 * this.registerTriggerClick(trigger, tooltipLateral);
		 *
		 * jQuery(document).bind("errorAddedOrRemovedToContext", function(event) {
		 * proteoTooltipLateral.calculatePosition(tooltipLateral, trigger); });
		 */

		var id = clientId.replace(/:/g, "\\:");
		var tooltipLateral = jQuery("div#" + id + "_tooltip_lateral");
		var trigger = jQuery("#" + ProteoJSFUtils.escapeIdColons(triggerId));
		trigger.addClass("bso-enlace-tooltiplateral");

		if (trigger.length > 0) {
			trigger.each(function() {

				var objTooltip = jQuery("div#" + id + "_tooltip_lateral");
				var tooltipPos = "right";
				var linkPos = "left-15";

				jQuery(this).click(
						function(event) {
							event.preventDefault();
							if (objTooltip.is(':visible')) {
								objTooltip.fadeTo('fast', 0, function() {
									objTooltip.hide();
								});
							} else {

								// Cierre de resto de elementos desplegables, excepto el actual
								BSOnlineComponents.closeAll(clientId);

								proteoTooltipLateral.positionLateral(
										objTooltip, triggerId, tooltipPos,
										linkPos);
								objTooltip.fadeTo('fast', 1);
							}
						});
			});


			tooltipLateral.find('.bso-tooltip-cerrar').click(
					function() {
						jQuery(this).parents('.bso-tooltip-lateral').fadeTo(
								'fast', 0, function() {
									jQuery(this).hide();
								});
					});
		}
	},
	positionLateral : function(objTooltip, id_tooltip, tooltipPos, linkPos) {
		objTooltip.show();
		objTooltip.position({
			of : jQuery("#" + ProteoJSFUtils.escapeIdColons(id_tooltip)),
			my : tooltipPos + " top-24",
			at : linkPos + " center",
			collision : 'none none'
		});
	}
/*
 * calculatePosition : function (tooltipLateral, trigger) { var objLeft =
 * parseInt(trigger.position().left); var objRight = parseInt(objLeft +
 * trigger.width()); var objTop = parseInt(trigger.position().top); var
 * tooltipLateralPos = "right"; var linkPos = "left-18";
 *
 * this.setPosition(tooltipLateral, trigger, tooltipLateralPos, linkPos); },
 */
/**
 * Posiciona el tooltip según las opciones de
 * inicialización del trigger y del tooltip lateral.
 *
 * @param {DOM}
 *            tooltipLateral
 * @param {DOM}
 *            trigger
 * @param {String}
 *            tooltipPos
 * @param {String}
 *            linkPos
 */
/*
 * setPosition : function (tooltipLateral, trigger, tooltipPos, linkPos) {
 * tooltipLateral.position({ of: trigger, my: tooltipPos + " top-35", at:
 * linkPos + " center", collision: 'none none' }); },
 */
/**
 * Registra el evento onClick del trigger para mostar u ocultar el tootlip
 * lateral según su visibilidad.
 *
 * @param {DOM}
 *            trigger
 * @param {DOM}
 *            tooltipLateral
 */
/*
 * registerTriggerClick : function (trigger, tooltipLateral) {
 * trigger.click(function(e){ e.preventDefault();
 * proteoTooltipLateral.calculatePosition(tooltipLateral, trigger); if
 * (tooltipLateral.css("visibility") == "visible") {
 * tooltipLateral.css("visibility", "hidden"); } else {
 * tooltipLateral.css("visibility", "visible"); } });
 * trigger.addClass(this.bindedClass); },
 */
/**
 * Abre o cierra el tooltip
 *
 * @param {String}
 *            clientId, identificador del componente tooltip
 * @param {DocumentFragment}
 *            triggerElement, objeto DOM nativo del trigger
 */
/*
 * toggle : function(clientId, triggerElement) {
 *
 * var tooltipLateral = jQuery('div[id="'+clientId+'_tooltip_lateral"]');
 *
 * if (!jQuery(triggerElement).hasClass(this.bindedClass)) {
 * proteoTooltipLateral.calculatePosition(tooltipLateral,
 * jQuery(triggerElement)); if (tooltipLateral.css("visibility") == "visible") {
 * tooltipLateral.css("visibility", "hidden"); } else {
 * tooltipLateral.css("visibility", "visible"); } } },
 */
/**
 * Cierra el tooltipLateral.
 *
 * @param {String}
 *            clientId
 */
/*
 * close : function(clientId) { var id = clientId.replace(/:/g, "\\:"); var
 * tooltipLateral = jQuery('div#'+id+"_tooltip_lateral");
 * tooltipLateral.css("visibility", "hidden"); }
 */
};

/**
 * Objeto de gestión de comportamiento Javascript del
 * componente ProteoDropdownContainerComponent.
 *
 * @author aaregall
 * @since 2.9.0
 */
var proteoDropdownContainer = {
	/**
	 * Muestra/esconde el contenido del contenedor desplegable
	 * según su estado.
	 *
	 * @param {String}
	 *            clientId
	 */
	toggle : function(clientId) {
		var checkbox = jQuery('input[id="' + clientId
				+ '_dropdownContainer_checkbox"]');
		var dropdown = jQuery('div[id="dropdownContainer_blockDropwdown_'
				+ clientId + '"]');
		var container = dropdown
				.parent(".bso-contenedor-desplegable:not(.bso-form-disabled)");

		if (container.length > 0 && dropdown.length > 0) {
			checkbox.parent(".custom-checkbox").toggleClass("selected");
			if (dropdown.is(':visible')) {
				dropdown.fadeTo('fast', 0, function() {
					dropdown.slideUp('fast', function() {
						dropdown.removeClass('bso-bloque-desplegado');
					});
				});
				checkbox.attr("checked", false);
			} else {
				dropdown.slideDown('fast', function() {
					dropdown.fadeTo('fast', 1);
					dropdown.addClass('bso-bloque-desplegado');
				});
				checkbox.attr("checked", true);
			}
		}
	}
};

/**
 * ProteoEmailInput, gestión de comportamiento JavaScript
 *
 * @author dgonzamo
 * @since 2.9.0
 */
var proteoEmailInput = {

		initComponent:function(clientId){

			jQuery('input[id="' + clientId + '"]').keyup(function(e){
				var key=e.keyCode? e.keyCode : e.charCode;
				if(key !== 18 && key !== 17 && key !== 16){
				filtroEmail(jQuery(this),clientId);}
			});
			jQuery('input[id="' + clientId + '"]').bind('paste',function(e){
				var text = '';
				if (window.clipboardData && window.clipboardData.getData) {
					text = window.clipboardData.getData('Text');
				}
				else if (e.originalEvent.clipboardData && e.originalEvent.clipboardData.getData) {
					text = e.originalEvent.clipboardData.getData('text/plain');
				}

				if(text){
					text = eliminarCaract(text);
					// TODO: Probar
					var escapedId = ProteoJSFUtils.escapeIdColons(clientId);
					jQuery("#" + escapedId).val(text);
				}
				return false;
			});
		},
	/**
	 * Comprobación de que se han introducido emails en el
	 * input
	 */
	validate : function(clientId) {
		var regex = new RegExp(
				"^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,6})$");
		var emails = jQuery('input[name="' + clientId + '"]').val();
		var isValid = false;
		var parts = emails.split("\;");

		var firstEmail = (emails.indexOf(';') != 0) ? emails.split('\;')[0]
				: emails;

		isValid = regex.test(firstEmail);

		var i = 1;
		while (isValid && (i < parts.length) && (parts[i] != "")) {
			var aux = parts[i].replace(/ /g, "");
			isValid = regex.test(aux);
			i++;
		}

		if (isValid || firstEmail == "") {
			removeErrorMessage(clientId);
			removeInvalidComponentClass(clientId);
		} else {
			addErrorMessage(clientId,
					'bso.channel.component.emailinput.invalid');
			addInvalidComponentClass(clientId);
		}
		return isValid;
	}
};

/**
 * ProteoPhoneInput, gestión de comportamiento JavaScript
 *
 * @author dgonzamo
 * @since 2.9.0
 */
var proteoPhoneInput = {
	/**
	 * Registra la función asociada al evento
	 * <code>keydown</code>, cuya permite la introducción de
	 * prefijo o valores numéricos según la
	 * configuración definida.
	 *
	 * @param {String}
	 *            clientId
	 * @param {Boolean}
	 *            mobile
	 * @param {Boolean}
	 *            prefix
	 * @param {Boolean}
	 *            international
	 */
	registerKeyDownHandler : function(clientId, mobile, prefixOpcional, prefix, international) {

		var _isPermittedKey = function(keycode, event) {
			if (jQuery.inArray(keycode, [ 17, 46, 8, 9, 27, 13, 190 ]) !== -1
					|| (keycode == 65 && event.ctrlKey === true)
					|| (keycode >= 35 && keycode <= 39)) {
				return true;
			}
			return false;
		};

		var _onlyNumbersAllowed = function(e, element, maxlength) {
			var keycode = e.keyCode || e.which;
			if (element.value.length == maxlength) {
				if (!_isPermittedKey(keycode, e)) {
					e.preventDefault();
				}
			}
			if (_isPermittedKey(keycode, e)) {
				return;
			} else {
				if (e.shiftKey || (keycode < 48 || keycode > 57)
						&& (keycode < 96 || keycode > 105)) {
					e.preventDefault();
				}
			}
		};

		jQuery('input[id="' + clientId + '"]').keydown(function(event) {

			var length = jQuery(this).val().length;
			var first = (length == 0);
			var keycode = event.keyCode || e.which;

			if (_isPermittedKey(keycode, event)) {
				return true;
			}

			if (!international && ! prefixOpcional && !prefix) {

				if (mobile) {
					if (first && (keycode != 54 && keycode != 102)) {
						return false;
					}
				}

				_onlyNumbersAllowed(event, this, 9);

			} else if (!international && ! prefixOpcional && prefix) {

				if (first) {
					return (keycode == 187 || keycode == 107);
				}

				if (length == 1) {
					if ((keycode != 51 && keycode != 99)) {
						return false;
					}
				} else if (length == 2) {
					if ((keycode != 52 && keycode != 100)) {
						return false;
					}
				} else if (length == 3 && mobile) {
					if ((keycode != 54 && keycode != 102)) {
						return false;
					}
				}

				_onlyNumbersAllowed(event, this, 13);

			} else if (!international && prefixOpcional && ! prefix) {

				if (first && (keycode == 187 || keycode == 107)) {
					return true;
				}

				_onlyNumbersAllowed(event, this, 13);

			} else if (!international && prefixOpcional && prefix) {

				if (first) {
					return (keycode == 187 || keycode == 107);
				}

				if (length == 1) {
					if ((keycode != 51 && keycode != 99)) {
						return false;
					}
				} else if (length == 2) {
					if ((keycode != 52 && keycode != 100)) {
						return false;
					}
				} else if (length == 3 && mobile) {
					if ((keycode != 54 && keycode != 102)) {
						return false;
					}
				}

				_onlyNumbersAllowed(event, this, 13);

			} else if (international && prefixOpcional && ! prefix && ! mobile ) {

				if ( first && keycode == 107 ) {
					return true;
				} else {
					_onlyNumbersAllowed(event, this, 13);
				}

			} else if (international && ! prefixOpcional && ! prefix && ! mobile ) {

				if ( first && keycode == 107 ) {
					return true;
				} else {
					_onlyNumbersAllowed(event, this, 13);
				}

			} else {
				if (first && ! prefixOpcional) {
					return (keycode == 187 || keycode == 107);
				}
				_onlyNumbersAllowed(event, this, 17);
			}


			return true;
		});
	},
	/**
	 * Validación de formato del teleléfono
	 * según configuración.
	 *
	 * @param {String}
	 *            clientId
	 * @param {Boolean}
	 *            mobile
	 * @param {Boolean}
	 *            prefix
	 * @param {Boolean}
	 *            international
	 */
	validate : function(clientId, mobile, prefixOpcional, prefix, international) {
		var value = jQuery('input[id="' + clientId + '"]').val();
		var isValid = true;

		if (value.length > 0) {
			var check = (prefix) ? value.substring(1) : value;

			if (isNaN(check)) {
				addErrorMessage(clientId,
						'bso.channel.component.phoneinput.error.digits');
				addInvalidComponentClass(clientId);
				return;
			}


			if (international) {
				isValid = (value.length >= 9 && value.length <= 16);
			} else {

				if (prefix) {
					isValid = ( (value.length == 12) || (value.length == 13) );
				} else {
					isValid = ( (value.length == 9) || (value.length == 10) || (value.length == 12) || (value.length == 13) );
				}
			}

			if (!isValid) {
				addErrorMessage(clientId,
						'bso.channel.component.phoneinput.error.digits');
				addInvalidComponentClass(clientId);
				return;
			}

			if (mobile) {

				var mustStart = "6";
				var positionToSubstr = 1;
				if (prefix && ! prefixOpcional) {
					mustStart = "+34" + mustStart;
					positionToSubstr = positionToSubstr + 3;
				}

				if (value.substring(0, positionToSubstr) !== mustStart) {
					addErrorMessage(clientId,
							'bso.channel.component.phoneinput.error.invalid.mobile');
					addInvalidComponentClass(clientId);
					return;
				}
			} else {

				if (prefix && (value.substring(0, 1) !== "+")) {
					addErrorMessage(clientId,
							'bso.channel.component.phoneinput.error.invalid.national');
					addInvalidComponentClass(clientId);
					return;
				}
			}

			if ( ! prefixOpcional && ! prefix) {

				if (international) {

					addErrorMessage(clientId, 'bso.channel.component.phoneinput.error.invalid.international');
					addInvalidComponentClass(clientId);
					return;

				} else {

					addErrorMessage(clientId, 'bso.channel.component.phoneinput.error.invalid.national');
					addInvalidComponentClass(clientId);
					return;

				}
			}

		}

		if (isValid) {
			removeErrorMessage(clientId);
			removeInvalidComponentClass(clientId);
		}
	}
};

/**
 * Objeto de gestión de comportamiento Javascript del
 * componente ProteoDropdownFilterComponent.
 *
 * @auhtor dgonzamo
 * @since 2.9.0
 */
var proteoDropdownFilter = {
	/**
	 * Método que inicializa el comportamiento DOM del
	 * componente, registrando eventos necesarios y aplicando el API
	 * Autocomplete.
	 *
	 * @param {Array}
	 *            params
	 */
	initComponent : function(clientId) {

		jQuery(document).keyup(function(e) {
			var id = clientId.replace(/:/g, "\\:");
			var idFilter = id + "_filter_component";
			var idList = id + "_list";

			if (e.keyCode === 27) {
				if (jQuery('ul#' + idList).is(':visible')) {
					jQuery('ul#' + idList).hide();
					jQuery('div#' + idFilter).removeClass('bso-desplegado');
				}
			}
		});

		if (jQuery('div[id="' + clientId
				+ '_filter_component"].bso-filtro-desplegable').length > 0) {

			jQuery(
					'div[id="'
							+ clientId
							+ '_filter_component"].bso-filtro-desplegable:not(.bso-disabled)')
					.each(
							function() {
								jQuery(this)
										.find('.bso-filtro-desplegable-select')
										.each(
												function() {
													var selector = jQuery(this);
													var list = selector
															.find('.bso-combo-normal-lista ul');
													selector
															.click(function() {
																jQuery(this)
																		.siblings()
																		.find(
																				'.bso-filtro-desplegable-ul')
																		.fadeOut(
																				'fast');
																jQuery(this)
																		.toggleClass(
																				'expanded');
															});
												});
							});


			jQuery(
					'div[id="'
							+ clientId
							+ '_filter_component"] .bso-filtro-desplegable-ul li')
					.click(
							function() {
								var container = jQuery(this).parents(
										'.bso-filtro-desplegable');
								jQuery(this).parents(
										'.bso-filtro-desplegable-select').find(
										'.bso-combo-normal-input a span').html(
										jQuery(this).html());
								jQuery(this).siblings().removeClass('active');
								jQuery(this).addClass('active');
								container.find('.bso-hidden').val(
										jQuery(this).attr('data-value'));
							});
		}
	},

	/**
	 * Muestra/esconde el contenido del contenedor del filtro.
	 *
	 * @param {String}
	 *            clientId
	 */
	toggle : function(clientId) {
		var id = clientId.replace(/:/g, "\\:");
		var idFilter = id + "_filter_component";
		var idList = id + "_list";

		if (jQuery('div#' + idFilter).hasClass('bso-desplegado')) {
			jQuery('ul#' + idList).removeAttr("style");
			jQuery('ul#' + idList).attr("style", "display:none");
			jQuery('div#' + idFilter).removeClass('bso-desplegado');
		} else {

			jQuery('.bso-filtro-listado').hide();
			jQuery('.bso-filtro-desplegable').removeClass('bso-desplegado');
			jQuery('div#' + idFilter).addClass('bso-desplegado');
			jQuery('div#' + id).next('.bso-filtro-listado').show();
			jQuery('ul#' + idList).removeAttr("style");
			jQuery('ul#' + idList).attr("style", "display:block");
			jQuery.fn.navigate('destroy');
			jQuery('.bso-filtro-listado a', jQuery('div#' + idFilter))
					.navigate();
			jQuery('div#' + id).parent('.bso-filtro-desplegable').addClass(
					'bso-desplegado');
		}
	},

	/**
	 * Evento para el listado
	 *
	 * @param {String}
	 *            clientId
	 */
	elementsEvent : function(clientId, element) {
		var id = clientId.replace(/:/g, "\\:");
		var idFilter = id + "_filter_component";
		var idList = id + "_list";
		var idElement = id + "_element_" + element;
		var ul = jQuery('ul#' + idList);
		var selector = jQuery('div#' + idFilter);
		ul.find('a').removeClass('bso-active');
		jQuery('a#' + idElement).addClass('bso-active');

		var valor = jQuery('a#' + idElement).html();
		selector.find('.bso-active').html(valor);
		selector.removeClass('bso-desplegado');

		ul.removeAttr("style");
		ul.attr("style", "display:none");
		if (ul.prev().hasClass('bso-selector')) {
			ul.prev().focus();
		}
		jQuery('input#' + id).val(element);

	},

};

/**
 * Clase del objeto modelo de las columnas del componente Tabla
 * Básica.
 *
 * @constructor
 * @param {Array}
 *            params
 * @returns {ProteoColumnObject}
 *
 * @author aaregall
 * @since 2.9.0
 */
function ProteoColumnObject(params) {
	this.getWidth = function getWidth() {
		return params.width || null;
	};
	this.getCode = function getCode() {
		return params.code || null;
	};
	this.isSortable = function isSortable() {
		return params.sortable || false;
	};
	this.getOrder = function getOrder() {
		return params.order || null;
	};
	this.isSortedOnStart = function isSortedOnStart() {
		return params.sortedOnStart || false;
	};
};

/**
 * Clase del objeto modelo de gestión de componente Tabla
 * Básica
 *
 * @constructor
 * @param {Array}
 *            params
 * @returns {ProteoDatatableBasicObject}
 *
 * @author aaregall
 * @since 2.9.0
 */
function ProteoDatatableBasicObject(params) {
	/**
	 * @returns {String}
	 */
	this.getClientId = function getClientId() {
		return params.clientId || null;
	};
	/**
	 * @returns {Array}
	 */
	this.getColumns = function getColumns() {
		return params.columns || null;
	};
	/**
	 * @returns {Object} la definición de las cabezeras de las
	 *          columnas según si son ordenables o no.
	 */
	this.getHeaders = function getHeaders() {
		var columns = this.getColumns();
		var headers = {};
		for (var i = 0; i < columns.length; i++) {
			var col = columns[i];
			if (!col.isSortable()) {
				headers[i] = {
					sorter : false
				};
			}
		}
		return headers;
	};
	this.isSelectable = function isSelectable() {
		return params.selectable || false;
	};

	this.isRowDropdown = function isRowDropdown() {
		return params.rowDropdown || false;
	};

	/**
	 * @returns {Array} devuelve un array en cuyas posiciones se situan otros
	 *          objetos de tipo Array de dos posiciones con valores
	 *          numéricos. El primer valor corresponde al
	 *          índice del <code>th</code> de la tabla, de
	 *          izquierda a derecha. El segundo valor corresponde al tipo de
	 *          ordenación, 0 para ascendiente, 1 para
	 *          descendiente.
	 *
	 * @link http://tablesorter.com/docs/example-option-sort-list.html|Ejemplo
	 *       documentación jQuery.tablesorter
	 */
	this.getSortList = function getSortList() {
		var columns = this.getColumns();
		var sortList = [];
		var finalList = [];
		for (var i = 0; i < columns.length; i++) {
			var col = columns[i];
			var listItem = [];
			if (col.isSortable() && col.isSortedOnStart()) {
				if (col.getOrder()) {
					if (col.getOrder() == "asc") {
						listItem[0] = [ (i), 0 ];
					} else if (col.getOrder() == "desc") {
						listItem[0] = [ (i), 1 ];
					}
				}
			}
			if ((typeof listItem[0]) != "undefined") {
				sortList[i] = listItem[0];
			}
		}

		var index = 0;
		for (var i = 0; i < sortList.length; i++) {
			if ((typeof sortList[i]) != "undefined") {
				finalList[index] = sortList[i];
				index++;
			}
		}

		return finalList;
	};
};

/**
 * Objeto de gestión de comportamiento Javascript del
 * componente Tabla Básica (ProteoDatatableBasicComponent).
 *
 * @author aaregall
 * @since 2.9.0
 */
var proteoDatatableBasic = {
	/**
	 * Instancia un nuevo {@link ProteoDatatableBasicObject} e inicializa la
	 * funcionalidad del componente.
	 *
	 * @param {Array}
	 *            params
	 */
	initComponent : function initComponent(params) {

		var proteoDatatableBasicObj = new ProteoDatatableBasicObject(params);
		this.applyTablesorter(proteoDatatableBasicObj);
		this.wrapInnerColumnHeaders(proteoDatatableBasicObj.getClientId());
		if (proteoDatatableBasicObj.isRowDropdown()) {
			this.toggleRows(proteoDatatableBasicObj.getClientId());
		}

		var escapedId = ProteoJSFUtils.escapeIdColons(proteoDatatableBasicObj.getClientId())
		if (jQuery('#' + escapedId + ' .bso-tabla-unica').length > 0) {
			jQuery('#' + escapedId + ' .bso-tabla-unica tbody tr')
					.click(
				function() {
					jQuery('#' + escapedId + ' .bso-tabla-unica')
							.find('.custom-radio').removeClass(
									'selected');
					jQuery('#' + escapedId + ' .bso-tabla-unica').find(':radio')
							.removeAttr('checked');
					jQuery(this).find('.custom-radio').addClass(
							'selected');
					jQuery(this).find(':radio').prop('checked',
							true);
					jQuery(this).find(':radio').trigger("change");
				});
		}

	},
	/**
	 * Aplica la configuración e inicializa el plugin
	 * jQuery.tablesorter en la tabla del componente.
	 *
	 * @param {ProteoDatatableBasicObject}
	 *            proteoDatatableBasicObj
	 */
	applyTablesorter : function(proteoDatatableBasicObj) {
		var escapedId = ProteoJSFUtils.escapeIdColons(proteoDatatableBasicObj
				.getClientId());

		var extract = function(node) {
			var text = '';
			if (!jQuery(node).hasClass('dropdown')) {
				if (node.hasChildNodes() && node.nodeName !== 'SCRIPT') {
					for (var i = 0; i < node.childNodes.length; i++) {
						text += extract(node.childNodes[i]);
					}
				} else if (node.nodeType === 3) {
					var value = jQuery(node).text();
					if (ProteoJSFUtils.isDateString(value)) {
						text += value;
					} else {
						var numVal = value.replace(".", "");
						numVal = parseFloat(numVal.replace(',', '.'));
						if (isNaN(numVal)) {
							text += value;
						} else {
							text += numVal;
						}
					}
				}
			}

			 var ExpReg= /^(\d{1,2})\/(\d{1,2})\/(\d{2})$/;
			 if(ExpReg.test(text)){
				 var day = text.substring(0, 2);
				 var month = text.substring(3, 5);
				 var year = text.substring(6,text.length);
				 var textDate = month + "/" + day + "/" + year;
				 var ms = Date.parse(textDate);

				 text = ms;
			 }
			return text;
		};
		jQuery("#" + escapedId + " table").tablesorter({
			dateFormat : "dd/mm/yy",
			headers : proteoDatatableBasicObj.getHeaders(),
			sortList : proteoDatatableBasicObj.getSortList(),
			textExtraction : extract
		});
	},
	/**
	 * Sitúa dentro de un tag <code>span</code> el contenido
	 * de los <code>th</code>'s de la tabla.
	 *
	 * @param {String}
	 *            clientId
	 */
	wrapInnerColumnHeaders : function swapColumnContent(clientId) {
		var escapedId = ProteoJSFUtils.escapeIdColons(clientId);
		var selector = "#"
				+ escapedId
				+ " table th.header:not(.bso-th-first, .bso-th-last, .bso-th-radio)";
		jQuery(selector).wrapInner("<span />");
	},
	/**
	 * Pequeño hack para corregir el valor del atributo onclick
	 * de los inputs de las tablas seleccionables. Este hack se aplica cuando el
	 * elemento seleccionable tiene asociadas una acción AJAX y
	 * una acción Javascript.
	 *
	 * @param {String}
	 *            clientId
	 * @param {String}
	 *            inputType, tipo de campo de entrada ("radio" para la tabla de
	 *            selección única, "checkbox"
	 *            para múltiple selección).
	 */
	removePreventDefaultSelectionOnClickEvent : function(clientId, inputType) {
		jQuery("input[id*='" + clientId + "'][type='" + inputType + "']").each(
				function() {
					var onClick = jQuery(this).attr("onclick");
					if(onClick != null && onClick !== "undefined"){
						var splitted = onClick.split("return false");
						if (splitted.length > 1) {
							jQuery(this).attr("onclick", splitted[0]);
						}
					}
				});
	},

	/**
	 * Expandir filas de la tabla
	 */
	toggleRows : function(clientId) {
		var escapedId = ProteoJSFUtils.escapeIdColons(clientId);
		var selector = "#" + escapedId;

		jQuery(selector).on('click', 'table tbody tr', function(e) {
			e.stopPropagation();
			jQuery(this).find('.dropdown').slideToggle('fast');
		});
	},
	verMasElementosClick : function(clientID) {
		var escapedId = clientID.replace(/:/g, "\\:");

		var contenedor = jQuery('#' + escapedId);

		contenedor.find('.bso-vermas a').hide();
		contenedor.find('.bso-loading').animate({
			opacity : 1
		});
	}
};

/**
 * Métodos base para los componentes currencyInput y
 * numberInput, gestión de comportamiento JavaScript
 *
 * @author dgonzamo
 * @since 2.10.0
 */
var proteoNumberBase = {
	/**
	 * Solo se permitirrá la introducción de un
	 * separador de decimales y de dígitos. Cuando se recupere
	 * el foco sobre el input se seleccionará todo el valor.
	 */
	validarNumero : function(id, decimals, separator) {
		var clientId = id.replace(/:/g, "\\:");

		jQuery('input#' + clientId).keypress(function(e, pars) {
			var key;

			if (typeof (e.charCode) == 'undefined') {

				key = e.keyCode;
			} else {

				key = e.charCode;
			}

			var value = String.fromCharCode(key);
			var p = jQuery.extend({
				locale : "es",
				allowed : "1234567890",
				allow : ""
			}, pars);


			p.allowed += ".";
			p.allowed += ",";
			p.allowed += "-";
			if (separator == null) {
				separator = ',';
				if (p.locale == 'es') {
					separator = ',';
				}
			}
			if ((value == "," || value == ".")) {
				if (jQuery(this).val().indexOf(separator) != -1) {
					e.preventDefault();
				} else {
					jQuery(this).val(jQuery(this).val() + separator);
					e.preventDefault();
				}
			}
			if (p.allowed.indexOf(value) == -1 && key != '0') {
				e.preventDefault();
			}
			if (jQuery(this).val().length > 0 && value == "-") {
				e.preventDefault();
			}
		});
	},

	/**
	 * Evento onFocus
	 *
	 */
	eventoFocus : function(id) {
		var element = document.getElementById(id);
		setTimeout(function() {
			jQuery(element).select();
		}, 0);
	},

	/**
	 * Comprobará que el valor introducido sea un Double para
	 * aplicarle la máscara, si no es un Double se
	 * entenderá que ya se aplica la
	 * máscara.
	 */
	comprobarInput : function(clientId, number) {
		var isNegative = false;

		if (number.indexOf("-") == 0) {
			number = number.replace(/-/g, "");
			isNegative = true;
		}
		if (/(?:^\d{1,3}(?:\.?\d{3})*(?:,\d{0,9})?$)|(?:^\d{1,3}(?:,?\d{3})*(?:\.\d{0,9})?$)/
				.test(number)) {
			if (parseFloat(number) == parseFloat("0")) {
				return true;
			} else {
				if (isNegative) {
					number = "-" + number;
				}
				jQuery('input#' + clientId).val(number);
				return true;
			}
		} else if (isNegative && number == "") {
			jQuery('input#' + clientId).val("-");
			return true;
		} else {
			return false;
		}
	},

	/**
	 * Genera y aplica la máscara al valor de entrada
	 *
	 */
	applyMask : function(ID, separator, thousand, decimals, minNumber,
			maxNumber, type, maxLength) {

		var clientId = ID.replace(/:/g, "\\:");
		var isNegative = false;
		var milSeparator = "";
		var number = jQuery('input#' + clientId).val();
		if (number.indexOf("\.") == 0 || number.indexOf(",") == 0) {
			number = "0" + number;
		}
		if (separator == ",") {
			number = number.replace(/\./g, "");
			number = number.replace(/,/g, ".");
		} else {
			number = number.replace(/,/g, "");
		}
		if (proteoNumberBase.comprobarInput(clientId, number) == true) {
			numeroSinFormato = parseFloat(
					jQuery("#" + clientId).val().toString()).toString();
			if (type == "number") {
				proteoNumberInput.validateNumber(ID, numeroSinFormato,
						minNumber, maxNumber, maxLength);
			} else {
				proteoCurrencyInput.validateCurrency(ID, numeroSinFormato,
						minNumber, maxNumber, maxLength);
			}

			if (numeroSinFormato.indexOf("-") == 0) {
				numeroSinFormato = numeroSinFormato.replace(/-/g, "");
				isNegative = true;
			}
			var partes = numeroSinFormato.split("\.");

			if (numeroSinFormato.indexOf('.') != -1) {
				var parteEntera = partes[0];
			} else {
				var parteEntera = numeroSinFormato;
			}
			if (thousand == "true") {
				if (separator == null || separator == ".") {
					milSeparator = ",";
				} else {
					milSeparator = ".";
				}
			}
			var nuevaParteEntera = "";
			while (parteEntera.length > 3) {
				nuevaParteEntera = milSeparator
						+ parteEntera.substring(parteEntera.length - 3,
								parteEntera.length) + nuevaParteEntera;
				parteEntera = parteEntera.substring(0, parteEntera.length - 3);
			}
			if (parteEntera == "") {
				parteEntera = "0";
			}

			var parteDecimal = partes[1];
			var nuevaParteDecimal = "";
			if (decimals != null && decimals > 0) {

				if (parteDecimal != null) {
					for (i = 0; i < (decimals); i++) {
						if (parteDecimal[i] == null) {
							nuevaParteDecimal = nuevaParteDecimal + 0;
						} else {
							nuevaParteDecimal = nuevaParteDecimal
									+ parteDecimal[i];
						}
					}
				} else {
					for (i = 0; i < (decimals); i++) {
						nuevaParteDecimal = nuevaParteDecimal + 0;
					}
				}
				res = parteEntera + nuevaParteEntera + separator
						+ nuevaParteDecimal;
			} else {
				res = parteEntera + nuevaParteEntera;
			}
			if (isNegative) {
				res = "-" + res;
			}
			jQuery('input#' + clientId).val(res);
		} else if (jQuery('input#' + clientId).val() == "") {
			removeErrorMessage(ID);
			removeInvalidComponentClass(ID);
		} else if(nav=="Microsoft Internet Explorer"){
			removeErrorMessage(ID);
			removeInvalidComponentClass(ID);
		}else {

			if (type == "currency") {
				addErrorMessage(ID,
						'bso.channel.component.currencyinput.invalid');
			} else {
				addErrorMessage(ID, 'bso.channel.component.numberinput.invalid');
			}
			addInvalidComponentClass(ID);
		}
	}
};

/**
 * numberInput, gestión de comportamiento JavaScript
 *
 * @author dgonzamo
 * @since 2.10.0
 */
var proteoNumberInput = {
	/**
	 * Realiza validación de el número de
	 * entrada.
	 *
	 * @param {String}
	 *            clientId
	 * @param {String
	 *            minNumber
	 * @param {String
	 *            maxNumber
	 */
	validateNumber : function(ID, number, minNumber, maxNumber, maxLength) {
		var clientId = ID.replace(/:/g, "\\:");
		if (parseFloat(number)
				&& (parseFloat(maxNumber) != null || parseFloat(minNumber))) {
			if (parseFloat(number) > parseFloat(maxNumber)
					|| parseFloat(number) < parseFloat(minNumber)) {
				if (parseFloat(number) > parseFloat(maxNumber)) {
					addErrorMessage(ID, 'bso.channel.component.numberinput.max');
				} else {
					addErrorMessage(ID, 'bso.channel.component.numberinput.min');
				}
				addInvalidComponentClass(ID);
				return false;
			}
			removeErrorMessage(ID);
			removeInvalidComponentClass(ID);
			return true;
		} else if (number != "0") {
			addErrorMessage(ID, 'bso.channel.component.numberinput.invalid');
			addInvalidComponentClass(ID);
			return false;
		} else if (maxLength != null && number.length > maxLength) {
			addErrorMessage(clientId,
					"bso.channel.component.numberinput.error.maxlength");
			addInvalidComponentClass(clientId);
			return false;
		} else {
			removeErrorMessage(clientId);
			removeInvalidComponentClass(clientId);
			return true;
		}
	}
};

/**
 * dropdownButton, gestión de comportamiento JavaScript
 *
 * @author bcaracen
 * @since 3.0.0
 */
var proteoDropdownButton = {
	initComponent : function(clientId) {

		this.onClickDropdown(clientId);

		jQuery('.bso-importe-entrada .bso-boton-desplegable ul li').each(
				function() {
					var li = jQuery(this);
					li.click(function() {
						jQuery(this).parents('.bso-boton-desplegable').find(
								'.bc div').html(jQuery(this).html());
						jQuery(this).parent('ul').fadeOut('fast');
						jQuery(this).parent('ul').prev('.bso-button')
								.removeClass('active');

						jQuery(this).parents('.bso-boton-desplegable').find(
								'input[type="hidden"]').val(
								jQuery(this).attr('value'));
					});
				});

		// Clases odd/even
		jQuery('.bso-boton-desplegable ul li').each(
				function() {

					if (jQuery(this).index() % 2 < 1){
						if(!jQuery(this).hasClass('odd')){
							jQuery(this).addClass('odd');
						}
					}
					else {
						if(!jQuery(this).hasClass('even')){
							jQuery(this).addClass('even');
						}
					}

				}
		);

	},
	onClickButton : function(event, clientId) {
		if (event.stopPropagation) {
			event.stopPropagation();
		}

		// Cierre de todos los elementos desplegables, excepto el actual
		BSOnlineComponents.closeAll(clientId);

		if (jQuery('div[id="' + clientId + '"].bso-boton-desplegable').length > 0) {
			jQuery('div[id="' + clientId + '"].bso-boton-desplegable button')
					.each(
							function() {
								var boton = jQuery(this);
								if (boton.parents('.bso-disabled').length <= 0) {
									jQuery('.bso-boton-desplegable button')
											.not(boton).removeClass('active');
									jQuery('.bso-boton-desplegable ul li')
											.removeClass('active');
									var ul = boton.next('ul');
									jQuery('.bso-boton-desplegable ul').not(ul)
											.fadeOut('fast');
									ul.fadeToggle('fast');
									boton.toggleClass('active');
								}
							});
		}
	},

	onClickDropdown : function(event, clientId) {
		jQuery('.bso-boton-desplegable ul li span').each(function() {
			jQuery(this).click(function(ev) {
				ev.preventDefault();
				ev.stopPropagation();
				ev.stopImmediatePropagation();
				var span = jQuery(this);
				span.parent('li').toggleClass('active');
				span.next('ul').slideToggle('fast');
			});
		});
	},

	onClickElement : function(event) {
		event.preventDefault();
	},

	closeAll : function(clientId) {

		jQuery('.bso-boton-desplegable button').each(function() {

			var button = jQuery(this);
			var excludeElement = button.attr('id') === clientId
				|| button.attr('name') === clientId;

			if (!excludeElement
					&& button.parents('.bso-disabled').length <= 0) {

				jQuery('.bso-boton-desplegable button').not(button).removeClass('active');
				jQuery('.bso-boton-desplegable ul li').removeClass('active');
				var ul = button.next('ul');
				if(ul.is(':visible')) {
					jQuery('.bso-boton-desplegable ul').not(ul).fadeOut('fast');
					ul.fadeToggle('fast');
					button.toggleClass('active');
				}

			}
		});
	}
};

/**
 * ProteoInformationContainer, gestión de comportamiento
 * JavaScript
 *
 * @author aescolan
 * @since 3.0.0
 */
var proteoInformationContainer = {

	initComponent : function(clientId) {

		jQuery("div[id*='" + clientId + "'].bso-contenedor-info .bso-close")
				.click(function() {
					jQuery(this).parent().fadeOut('fast');
				});
	}

};

/**
 * GESTIÓN DE ERRORES -- VALIDACIÓN DE
 * FORMULARIO
 */

/**
 * Habilita el componenete de error
 *
 * @author acostaav
 * @since 2.9.0
 */
function disableStandarErrorComponent() {
	document.getElementById('proteoStandardError').style.display = "none";
	jQuery(document).trigger("errorAddedOrRemovedToContext");
}

/**
 * Deshabilita el componenete de error y lanza el event
 *
 * @author acostaav
 * @since 2.9.0
 */
function enableStandarErrorComponent() {
	document.getElementById('proteoStandardError').style.display = "inherit";
	jQuery(document).trigger("errorAddedOrRemovedToContext");
}

/**
 * Eliminas los mensajes de error (parrafos) del código HTML
 * del componente de error
 *
 * @author acostaav
 * @since 2.9.0
 */
function cleanStandarErrorComponentMessages() {
	jQuery("#proteoStandardErrorMessagesContainer").empty();
}

/**
 * Inserta mensajes de error (parrafos) en el código HTML del
 * componente de error
 *
 * @author acostaav
 * @since 2.9.0
 * @param message
 *            Mensaje a añadir en el componente de error. El
 *            mensaje a mostrar debe seguir el patrón 'label :
 *            error'
 */
function addStandarErrorComponentMessages(message) {
	jQuery("#proteoStandardErrorMessagesContainer").append(
			"<P>" + message + "<P/>");
}

/**
 * Realiza la validación del formulario
 *
 * @author acostaav
 * @since 2.9.0
 * @param formId
 *            Identificador del formuario
 */
function validateForm(formId) {

	var escapedId = formId.replace(/:/g, "\\:");
	cleanStandarErrorComponentMessages();

	// Comprueba si algún componente requerido del formulario está vacio
	var requiredCheck = validateRequiredFormElements(escapedId);

	var formValid = true;

	// Si algun componente falla su propia validación, el formulario será
	// inválido
	var numErrors = 0;

	jQuery(".proteoError", "#" + escapedId).each(function(index) {

		var id = jQuery(this).attr('id');
		var componentId = id.substring(0, id.indexOf('error'));

		if (jQuery(this).val() != "") {
			numErrors++;

			addStandarErrorComponentMessages(jQuery(this).val());

			formValid = false;

			addInvalidComponentClass(componentId);
		}
	});

	if (numErrors > 0) {
		enableStandarErrorComponent();
		jQuery('html, body').animate({
			scrollTop : 0
		}, 0);
	}

	if (formValid && requiredCheck) {
		return true;
	} else {
		return false;
	}

}

/**
 * Realiza la validación de campor requeridos en el formulario
 *
 * @author acostaav
 * @since 2.9.0
 * @param formId
 *            Identificador del formuario
 */

function validateRequiredFormElements(formId) {

	var valid = true;

	jQuery("[required*='required'][id]", "#" + formId).not(":disabled").each( function() {

		var id = jQuery(this).attr('id').replace(/:/g, "\\:");
		/*var labelMsg = getLabelMessage(id);*/

		/*CheckBox*/
		if (jQuery("#" + id).attr("type") == "checkbox") {

			var clientId = id;
			var checked = false;

			if ((id.indexOf("multipleOption_")) != -1) {
				var clientIdWithSufix = id.replace(
						"multipleOption_", "");
				clientId = clientIdWithSufix.substr(0,
						clientIdWithSufix.length - 2);
			}

			var _continue = true;
			jQuery(
					'input[type="checkbox"][id*="' + clientId
							+ '"]').each(function() {
				if (_continue) {
					if (jQuery(this).is(":checked")) {
						_continue = false;
						checked = true;
					}
				}
			});

			labelMsg = getLabelMessage(clientId);

			if (checked == false) {
				valid = false;
				addRequiredMessage(clientId, labelMsg);
			} else {
				jQuery(
						"#"
								+ ProteoJSFUtils
										.escapeIdColons(clientId)
								+ "error").val("");
				jQuery(
						"#"
								+ ProteoJSFUtils
										.escapeIdColons(clientId)
								+ "_componentHelpAuxError")
						.val("");
			}
		}
		/*CurrencyInput input*/
		else if(jQuery(this).parent("#" + id + "_currencyInput_input").length > 0) {
			labelMsg = getLabelMessage(id);
			if (jQuery(this).val() == "" || parseFloat(jQuery(this).val().replace(/\./g, '').replace(",", '.')) == 0) {
				valid = false;

				proteoCurrencyInput.addRequiredInputError(id,labelMsg);

			}
		}
		/*CurrencyInput combo*/
		else if(jQuery(this).parents("[id*=_currencyInput_combo]").length > 0) {
			var clientId = id.replace("combo-estandar_","");
			labelMsg = getLabelMessage(clientId);
			if (jQuery("div[id='" + id+ "'] input").val() == "default") {
				valid = false;

				proteoCurrencyInput.addRequiredComboError(clientId,labelMsg);

			}
		}
		/*Combo*/
		else if (jQuery("div[id='" + id+ "']").hasClass("bso-combo-estandar-select")) {
			var clientId = id.replace("combo-estandar_","");
			var labelMsg = getLabelMessage(clientId);
			if(jQuery("div[id='" + id+ "'] input").val() == "default") {
				addRequiredMessage(clientId, labelMsg);
				valid = false;
			}
			else {
				removeRequiredMessage(clientId, labelMsg);
			}
		}
		/*DateInput*/
		else if ((id.indexOf("day_") != -1)
				|| (id.indexOf("month_") != -1)
				|| (id.indexOf("year_") != -1)) {

			var clientId = "";
			if (id.indexOf("day_") != -1) {
				clientId = id.replace("day_", "");
			}
			if (id.indexOf("month_") != -1) {
				clientId = id.replace("month_", "");
			}
			if (id.indexOf("year_") != -1) {
				clientId = id.replace("year_", "");
			}

			labelMsg = getLabelMessage(clientId);

			var day = jQuery(
					'input[name="day_' + clientId + '"]')
					.val() || false;
			var month = jQuery(
					'input[name="month_' + clientId + '"]')
					.val() || false;
			var year = jQuery(
					'input[name="year_' + clientId + '"]')
					.val() || false;

			if (!day || !month || !year) {
				valid = false;
				addRequiredMessage(clientId, labelMsg);
			} else {
				removeRequiredMessage(clientId, labelMsg);
			}

		}
		/*SuggestionBox*/
		else if (id.indexOf("suggestionBox_textInput_") != -1) {
			id = id.replace("suggestionBox_textInput_", "");
			labelMsg = getLabelMessage(id);
			if (jQuery(this).val() == "" || parseFloat(jQuery(this).val()) == 0) {
				valid = false;
				addRequiredMessage(id, labelMsg);
			} else {
				removeRequiredMessage(ProteoJSFUtils.escapeIdColons(id), labelMsg);
			}
		}
		/*PhoneInput*/
		else if ((id.indexOf("_phone_input") != -1)) {
			id = id.replace("_phone_input", "");
			labelMsg = getLabelMessage(id);
			if (jQuery(this).val() == "" || parseFloat(jQuery(this).val()) == 0) {
				valid = false;
				addRequiredMessage(id, labelMsg);
			} else {
				removeRequiredMessage(ProteoJSFUtils.escapeIdColons(id), labelMsg);
			}
		}
		/*RadioButton*/
		else if ((id.indexOf("radioButton_")) != -1) {
			var clientIdWithSufix = id.replace("radioButton_",
					"");
			var clientId = clientIdWithSufix.substr(0,
					(clientIdWithSufix.length - 2));
			var selected = false;

			jQuery(
					'input[type="radio"][id*="' + clientId
							+ '"]').each(function() {
				if (jQuery(this).is(":checked")) {
					selected = true;
				}
			});

			labelMsg = getLabelMessage(clientId);

			if (!selected) {
				retorn = false;
				addRequiredMessage(clientId, labelMsg);
			} else {
				removeRequiredMessage(clientId, labelMsg);
			}

		}
		/*AccountInput*/
		else if ((jQuery(this).attr("class") !== "undefined" && jQuery(this).attr("class") != null) &&
					((jQuery(this).attr("class").indexOf("IBAN_") != -1
					|| jQuery(this).attr("class").indexOf("CCC_") != -1)
					&& !jQuery(this).hasClass("bso-international"))) {


			var ibanClass = jQuery(this).attr("class");

			if ((ibanClass.indexOf("IBAN_") != -1)
					|| (ibanClass.indexOf("CCC_") != -1)) {

				var classesToReplace = [ "CCC_", "IBAN_",
						"bso-textfield ", "bso-size1" ];

				var clientId = jQuery(this).attr(
						"class");

				for (var i = 0; i < classesToReplace.length; i++) {
					clientId = clientId.replace(
							classesToReplace[i], "");
				}

				clientId = clientId.replace(" ", "");

				var isMultiMode = jQuery(
						'input[id="accountInput_multiMode_'
								+ clientId + '"]').val();
				if (isMultiMode === "true") {

					function validateRequiredAccountInputMultiMode(
							id, valid, callback) {

						var ibanSelected = jQuery(
								'input[type="radio"][id="IBAN_accountInput_RadioButton_'
										+ clientId + '"]').is(
								':checked');
						var filled = (ibanSelected == true) ? proteoAccountInputMultiMode
								.isRequiredIBANFilled(clientId)
								: filled = proteoAccountInputMultiMode
										.isRequiredCCCFilled(clientId);

						labelMsg = getLabelMessage(clientId);

						if (!filled) {
							valid = false;
							addRequiredMessage(ProteoJSFUtils.escapeIdColons(clientId), labelMsg);
						} else {
							removeRequiredMessage(
									ProteoJSFUtils.escapeIdColons(clientId),
									labelMsg);
						}
						callback();

						return valid;
					}

					proteoAccountInputMultiMode.isSubmittingForm = true;
					valid = validateRequiredAccountInputMultiMode(
							id,
							valid,
							function() {
								proteoAccountInputMultiMode.isSubmittingForm = false;
							});

				} else if(isMultiMode === "false"){

					function validateRequiredAccountInput(
							escapedId, valid, callback) {
						var filled = proteoAccountInput
								.isRequiredIBANFilled(clientId);

						labelMsg = getLabelMessage(clientId);

						if (!filled) {
							valid = false;
							addRequiredMessage(ProteoJSFUtils.escapeIdColons(clientId), labelMsg);
						} else {
							removeRequiredMessage(
									ProteoJSFUtils.escapeIdColons(clientId),
									labelMsg);
						}
						callback();

						return valid;
					}

					proteoAccountInput.isSubmittingForm = true;
					valid = validateRequiredAccountInput(
							id,
							valid,
							function() {
								proteoAccountInput.isSubmittingForm = false;
							});

				}
			}
		}
		/*AccountInternationalInput*/
		else if(((jQuery(this).attr("class") !== "undefined" && jQuery(this).attr("class") != null)) && jQuery(this).attr("class").indexOf("IBAN_") != -1 && jQuery(this).hasClass("bso-international")) {
			var clientId = id.replace("IBAN_COMPLETE_","");
			var labelMsg = getLabelMessage(clientId);
			if (jQuery(this).val() == "" || parseFloat(jQuery(this).val()) == 0) {
				valid = false;
				addRequiredMessage(clientId, labelMsg);
			} else {
				removeRequiredMessage(ProteoJSFUtils.escapeIdColons(clientId), labelMsg);
			}
		}
		/*ContractsCombo*/
		else if(id.indexOf("contractsCombo_textInput_") != -1) {
			var clientId = id.replace("arqAppComponent_contractsCombo_textInput_", "");
			labelMsg = getLabelMessage(clientId);
			if (jQuery(this).val() == "" || parseFloat(jQuery(this).val()) == 0) {
				valid = false;
				addRequiredMessage(clientId, labelMsg);
			} else {
				removeRequiredMessage(ProteoJSFUtils.escapeIdColons(clientId), labelMsg);
			}
		}
		/*Any Input (CurrencyInput)*/
		else if (jQuery(this).is("input")) {
			labelMsg = getLabelMessage(id);
			if (jQuery(this).val() == "" || parseFloat(jQuery(this).val()) == 0) {
				valid = false;
				addRequiredMessage(id, labelMsg);
			} else {
				removeRequiredMessage(ProteoJSFUtils.escapeIdColons(id), labelMsg);
			}
		}
	});

	return valid;
}

/*******************************************************************************
 * Variable donde se registan las funciones de validación para
 * componentes aplicativos
 *
 ******************************************************************************/
var functionalComponentsRegistered = [];

/**
 * Inserta funciones de validación de componentes aplicativos
 * en un array para su ejecutarlas durante la validación del
 * formulario.
 *
 * @author acostaav
 * @since 2.10.0
 * @param functionToValidate
 *            Nombre de la función a ejecutar para realizar la
 *            validación del componente
 */
function registerValidation(functionToValidate) {

	functionalComponentsRegistered.push(functionToValidate);
}

/**
 * Recupera el label asociado a un componente. En caso de no existir label
 * asociada al componente, recupera su id
 *
 * @author acostaav
 * @since 2.9.0
 * @param id
 *            Identificador del componente
 */
function getLabelMessage(id) {

	var escapedId = "";

	if (id.indexOf('\\:') == -1) {
		escapedId = id.replace(/:/g, "\\:");
	} else {
		escapedId = id;
	}

	var labelMsg = jQuery("#label_" + escapedId).text();

	if (labelMsg != null && labelMsg != 'null' && labelMsg != 'unfefined'
			&& labelMsg != '') {
		return labelMsg;
	} else {
		return id;
	}

}

/**
 * Añade el mensaje de error de campo requerido
 *
 * @author acostaav
 * @since 2.9.0
 * @param id
 *            Identificador del componente
 * @param label
 *            Contenido de la etiqueta del componente
 */
function addRequiredMessage(id, label) {

	var mes = "bso.channel.component.common.component.error.required".replace(
			/\./g, "\\.");

	if (jQuery("#" + id + "_" + mes).val()) {
		jQuery("#" + id + "error").val(
				getLabelMessage(id) + " : "
						+ jQuery("#" + id + "_" + mes).val());
	} else {
		jQuery("#" + id + "error")
				.val(
						label
								+ " : "
								+ ProteoLocalizer
										.getLiteral('bso.channel.component.common.component.error.required'));
	}

	jQuery("#" + id + "_componentHelpAuxError")
			.val(
					ProteoLocalizer
							.getLiteral('bso.channel.component.common.component.error.required'));

}

/**
 * Elimina el mensaje de error de campo requerido
 *
 * @author acostaav
 * @since 2.9.0
 * @param id
 *            Identificador del componente
 * @param label
 *            Contenido de la etiqueta del componente
 */
function removeRequiredMessage(id, label) {

	var errorLabel = new String(label
			+ " : "
			+ ProteoLocalizer
					.getLiteral('bso.channel.component.common.component.error.required'));

	var errorValue = "";

	var unescapedId = id.replace(/\\/g, "");
	var element = document.getElementById(unescapedId + "error");

	if(element != null && element != undefined){
		errorValue = new String(element.value);
	}

	if (errorValue.valueOf() == errorLabel.valueOf()) {
		jQuery("#" + ProteoJSFUtils.escapeIdColons(element.id)).val("");
	}

	if (jQuery("#" + id + "_componentHelpAuxError") != "undefined") {
		jQuery("#" + id + "_componentHelpAuxError").val("");
	}

	// Eliminamos la clase de error
	removeInvalidComponentClass(id);

}

/**
 * Añade el mensaje de error de campo requerido
 *
 * @author acostaav
 * @since 2.9.0
 * @param id
 *            Identificador del componente
 * @param label
 *            Contenido de la etiqueta del componente
 * @param literalArray
 *            Array donde se almacenan los literales de componentes aplicativos
 * @param message
 *            Literal contenedor del mensaje de error (key)
 */
function addRequiredMessageFunctionalComponent(id, label, literalArray, message) {

	var mes = message.replace(/\./g, "\\.");

	if (jQuery("#" + id + "_" + mes).val()) {
		jQuery("#" + id + "error").val(
				getLabelMessage(id) + " : "
						+ jQuery("#" + id + "_" + mes).val());
	} else {
		jQuery("#" + id + "error").val(
				label
						+ " : "
						+ ProteoLocalizer.getFunctionalComponentLiteral(
								literalArray, message));
	}

	jQuery("#" + id + "_componentHelpAuxError").val(
			ProteoLocalizer
					.getFunctionalComponentLiteral(literalArray, message));

}

/**
 * Elimina el mensaje de error de campo requerido
 *
 * @author acostaav
 * @since 2.9.0
 * @param id
 *            Identificador del componente
 * @param label
 *            Contenido de la etiqueta del componente
 * @param literalArray
 *            Array donde se almacenan los literales de componentes aplicativos
 * @param message
 *            Literal contenedor del mensaje de error (key)
 */
function removeRequiredMessageFunctionalComponent(id, label, literalArray,
		message) {

	if (jQuery("#" + id + "error").val() == label
			+ " : "
			+ ProteoLocalizer.getFunctionalComponentLiteral(literalArray,
					message)) {

		jQuery("#" + id + "error").val("");

		jQuery("#" + id + "_componentHelpAuxError").val("");
	}

}

/**
 * Añade el mensaje de error
 *
 * @author acostaav
 * @since 2.9.0
 * @param escapedId
 *            Identificador del componente
 * @param message
 *            Literal contenedor del mensaje de error (key)
 *
 */
function addErrorMessage(escapedId, message) {

	var id = "";

	if (escapedId.indexOf('\\:') == -1) {
		id = escapedId.replace(/:/g, "\\:");
	} else {
		id = escapedId;
	}

	var mes = message.replace(/\./g, "\\.");

	if (jQuery("#" + id + "_" + mes).val()) {
		jQuery("#" + id + "error").val(
				getLabelMessage(escapedId) + " : "
						+ jQuery("#" + id + "_" + mes).val());
	} else {
		jQuery("#" + id + "error").val(
				getLabelMessage(escapedId) + " : "
						+ ProteoLocalizer.getLiteral(message));
	}

	jQuery("#" + id + "_componentHelpAuxError").val(
			ProteoLocalizer.getLiteral(message));

}

/**
 * Añade el mensaje de error para componentes aplicativos
 *
 * @author acostaav
 * @since 2.9.0
 * @param escapedId
 *            Identificador del componente
 * @param literalArray
 *            Array donde se almacenan los literales de componentes aplicativos
 * @param message
 *            Literal contenedor del mensaje de error (key)
 */
function addErrorMessageFunctionalComponent(escapedId, literalArray, message) {

	var id = escapedId.replace(/:/g, "\\:");
	var mes = message.replace(/\./g, "\\.");


	if (jQuery("#" + id + "_" + mes).val()) {
		jQuery("#" + id + "error").val(
				getLabelMessage(escapedId) + " : "
						+ jQuery("#" + id + "_" + mes).val());
	} else {
		jQuery("#" + id + "error").val(
				getLabelMessage(escapedId)
						+ " : "
						+ ProteoLocalizer.getFunctionalComponentLiteral(
								literalArray, message));
	}

	jQuery("#" + id + "_componentHelpAuxError").val(
			ProteoLocalizer
					.getFunctionalComponentLiteral(literalArray, message));

}

/**
 * Elimina el mensaje de error
 *
 * @author acostaav
 * @since 2.9.0
 * @param escapedId
 *            Identificador del componente
 */
function removeErrorMessage(escapedId) {

	if(escapedId != null){
		var id = escapedId.replace(/:/g, "\\:");

		jQuery("#" + id + "error").val("");
		jQuery("#" + id + "_componentHelpAuxError").val("");
	}
}

/**
 * Añade la clase de error del componente
 *
 * @author acostaav
 * @since 2.9.0
 * @param id
 *            Identificador del componente
 */
function addInvalidComponentClass(id) {

	var componentId = id.replace(/:/g, "\\:");

	if (componentId != null && componentId != 'null') {
		jQuery("#externalDIV_" + componentId).addClass("bso-form-error");
	}

	var errorMessage = jQuery("#" + componentId + "_componentHelpAuxError")
			.val();
	jQuery("#" + componentId + "_componentHelp").text(errorMessage);
}

/**
 * Elimina la clase de error del componente
 *
 * @author acostaav
 * @since 2.9.0
 * @param id
 *            Identificador del componente
 */
function removeInvalidComponentClass(id) {

	if (id != null){
		var componentId = id.replace(/:/g, "\\:");

		if (componentId != null && componentId != 'null') {

			jQuery("#externalDIV_" + componentId).removeClass("bso-form-error");

			var helpMessage = jQuery("#" + componentId + "_componentHelpAuxHelp")
					.val();
			jQuery("#" + componentId + "_componentHelp").text(helpMessage);
		}
	}
}

/**
 * Previene realizar múltiples submits si se realizan
 * múltiples click sobre un componente, en navegaciones AJAX.
 * No se podría realizar un nuevo submit hasta que se haya
 * resuelto la petición
 *
 * @author acostaav
 * @since 2.10.0
 * @param data
 */
function handleDisableButton(data) {

	if (data.source != null && data.source.type != "submit") {
		return;
	}

	switch (data.status) {
	case "begin":
		data.source.disabled = true;
		break;
	case "complete":
		if (data.source != null) {
			data.source.disabled = false;
		}
		break;
	}

}

/**
 * Previene realizar múltiples submits si se realizan
 * múltiples click sobre un componente, en navegaciones HTTP.
 * No se podría realizar un nuevo submit hasta que se haya
 * resuelto la petición
 *
 * @author acostaav
 * @since 2.10.0
 * @param data
 */
function preventDoubleSubmissionForm(formId) {


	//var $form = jQuery("#" + formId);
	var $form = jQuery("#" + formId.replace(/:/g, "\\:"));

	if ($form.data('submitted') === true) {

		return false;
	} else {

		$form.data('submitted', true);
		return true;
	}

}

/**
 * ProductContainer, gestión de comportamiento JavaScript
 *
 * @author fmunozze
 * @since 2.11.0
 */
var proteoProductContainer = {
	initContent : function(clientID, isBox) {
		var escapedId = clientID.replace(/:/g, "\\:");

		jQuery('#' + escapedId + ' .bso-icono-favorito').unbind('click');
		jQuery('#' + escapedId + ' .bso-icono-favorito').bind(
				'click',
				function() {
					if (isBox) {
						jQuery(this).parents('.bso-cp-caja').toggleClass(
								'bso-favorito');
					} else {
						jQuery(this).parents('.bso-cp-lista').toggleClass(
								'bso-favorito');
					}
				});

		proteoProductContainer.customTTip(clientID);
	},
	verMasElementosClick : function(clientID) {
		var escapedId = clientID.replace(/:/g, "\\:");

		var contenedor = jQuery('#' + escapedId);

		contenedor.find('.bso-vermas a').hide();
		contenedor.find('.bso-loading').animate({
			opacity : 1
		});
	},
	customTTip : function(clientID) {
		var escapedId = clientID.replace(/:/g, "\\:");

		if (jQuery('#' + escapedId + ' .bso-enlace-tip').length > 0) {
			jQuery('#' + escapedId + ' .bso-enlace-tip')
					.each(
							function() {

								var objtip = jQuery(this).next('.bso-tip');
								var objlink = jQuery(this);
								var objLeft = parseInt(jQuery(this).position().left);
								var objRight = parseInt(objLeft
										+ jQuery(this).width());
								var objTop = parseInt(jQuery(this).position().top);
								var tipPos = "center";
								var linkPos = "center";

								if (jQuery(this).hasClass('click')) {

									jQuery(this).unbind('click');
									jQuery(this).bind(
											'click',
											function(event) {
												event.preventDefault();
												if (objtip.is(':visible')) {
													objtip.fadeTo('fast', 0,
															function() {
																objtip.hide();
															});
												} else {
													proteoProductContainer
															.position_tip(
																	objtip,
																	objlink,
																	tipPos,
																	linkPos);
													objtip.fadeTo('fast', 1);
												}
											});

								} else if (jQuery(this).hasClass('hover')) {

									jQuery(this)
											.hover(
													function() {
														proteoProductContainer
																.position_tip(
																		objtip,
																		objlink,
																		tipPos,
																		linkPos);
														objtip
																.fadeTo(
																		'fast',
																		1,
																		function() {
																			objtip
																					.hide();
																		});
													},
													function() {
														proteoProductContainer
																.position_tip(
																		objtip,
																		objlink,
																		tipPos,
																		linkPos);
														objtip
																.fadeTo('fast',
																		0);
													});
								}
							});


			jQuery('#' + escapedId + ' .bso-tip .bso-tip-close').click(
					function() {
						jQuery(this).parents('.sbd-tip').fadeTo('fast', 0,
								function() {
									jQuery(this).hide();
								});
					});
		}
	},
	position_tip : function(objtip, objlink, tipPos, linkPos) {
		objtip.show();
		objtip.position({
			of : objlink,
			my : tipPos + " bottom",
			at : linkPos + " top-6",
			collision : 'none none'
		});
		objtip.find('span').position({
			of : objlink,
			my : "center bottom",
			at : "center top+1",
			collision : 'none none'
		});
	},
};

/**
 * Objeto de gestión de comportamiento Javascript del componente
 * ProteoAmountComponent.
 *
 * @auhtor rvillacr
 * @since 3.0.0
 */
var proteoAmount = {
	/**
	 * Inicializa el comportamiento del componente amount asociado a su trigger.
	 *
	 * @param {String}
	 *            clientId
	 * @param {String}
	 *            triggerId
	 */
	initTrigger : function(clientId, triggerId, evento) {
		var trigger = jQuery("#" + ProteoJSFUtils.escapeIdColons(triggerId));
		var objAmount = jQuery('div[id="' + clientId + '"]');

		if (trigger.length > 0) {
			trigger.each(function() {
				jQuery(this).click(function(e) {
					e.preventDefault();
					if (objAmount.is(':visible')) {
						objAmount.fadeTo('fast', 0, function() {
							objAmount.hide();
						});
					} else {
						objAmount.fadeTo('fast', 1);
					}
				});
			});
		}
	}
};

/**
 * Objeto de gestión de comportamiento Javascript del componente
 * ProteoSelectCardComponent.
 *
 * @auhtor rvillacr
 * @since 3.0.0
 */
var proteoSelectCard = {
	/**
	 * Inicializa el comportamiento del componente amount asociado a su trigger.
	 *
	 * @param {String}
	 *            clientId
	 * @param {String}
	 *            triggerId
	 */
	initComponent : function(clientId) {

		var escapedId = clientId.replace(/:/g, "\\:");
		var idUlLi = jQuery('#' + escapedId + " li");
		var idcomboEstandar = jQuery('#' + escapedId + "_combo_estandar");
		var idcomboEstandarNotDisabled = jQuery('#' + escapedId
				+ "_combo_estandar" + ':not(.sbd-disabled)');

		jQuery(idcomboEstandar)
				.each(
						function(i) {
							if (jQuery(this).find('.sbd-hidden').length <= 0) {
								var hiddenName = 'combo_' + (i + 1);
								var hidden = '<input class="sbd-hidden" type="hidden" name="'
										+ hiddenName + '" value="" />';
								jQuery(this).find('.sbd-combo-normal-lista')
										.after(hidden);
							}
						});

		jQuery(idcomboEstandarNotDisabled)
				.each(
						function() {
							var curCombo = jQuery(this);
							curCombo
									.find('.sbd-combo-estandar-select')
									.bind(
											'click',
											function() {
												var curSelect = jQuery(this);

												jQuery(this)
														.navigate('destroy');
												jQuery(
														'.sbd-combo-estandar:not(.sbd-disabled) .sbd-combo-estandar-select-flecha')
														.removeClass('expanded');
												jQuery(
														'.sbd-combo-estandar:not(.sbd-disabled) .sbd-combo-estandar-ul')
														.fadeOut('fast');

												if (!curCombo
														.find(
																'.sbd-combo-estandar-ul')
														.is(':visible')) {
													curSelect
															.find(
																	'.sbd-combo-estandar-select-flecha')
															.addClass(
																	'expanded');
													curCombo
															.find(
																	'.sbd-combo-estandar-ul')
															.fadeIn('fast');
													curCombo.find('ul li')
															.navigate();
												}
											});
						});

		idUlLi.click(function() {
			var container = jQuery(this).parents('.sbd-combo-estandar');
			jQuery(this).parents('.sbd-combo-estandar').find(
					'.sbd-combo-normal-input a span').addClass('selected')
					.html(jQuery(this).html());
			container.find('.sbd-hidden').val(jQuery(this).attr('data-value'));
		});

	}

};

/**
 * Objeto de gestión de comportamiento Javascript del componente Switch.
 *
 * @auhtor rvillacr
 * @since 3.0.0
 */
var proteoSwitch = {
	/**
	 * Inicializa el comportamiento del componente switch.
	 *
	 * @param {String}
	 *            clientId
	 */
	initComponent : function(clientId) {

		var escapedId = clientId.replace(/:/g, "\\:");
		var idLabel = jQuery("label[id='" + clientId + "_label']");
		idLabel.click(function(e) {
			e.preventDefault();
			if (jQuery(this).hasClass('off')) {
				jQuery(this).removeClass('off').addClass('on');

				jQuery("#" + escapedId + " input").attr('checked', true);
			} else {
				jQuery(this).removeClass('on').addClass('off');
				jQuery("#" + escapedId + " input").val("false");
				jQuery("#" + escapedId + " input").attr('checked', false);
			}
		});
	}
};

/**
 * Objeto de gestión de comportamiento Javascript del componente Switch.
 *
 * @auhtor rvillacr
 * @since 3.0.0
 */
var proteoTitulares = {
	/**
	 * Inicializa el comportamiento del componente Titulares.
	 *
	 * @param {String}
	 *            clientId
	 */
	initComponent : function(clientId) {

		var escapedId = clientId.replace(/:/g, "\\:");
		var idEnlaceTip = jQuery('#' + escapedId + "_enlace_tip");

		var idcomboEstandar = jQuery('#' + escapedId + "_combo_estandar");
		var idcomboEstandarNotDisabled = jQuery('#' + escapedId
				+ "_combo_estandar" + ':not(.sbd-disabled)');

		jQuery(".sbd-enlace-tip").each(function() {

			var objtip = jQuery(this).next('.sbd-tip');
			var objlink = jQuery(this);
			var objLeft = parseInt(jQuery(this).position().left);
			var objRight = parseInt(objLeft + jQuery(this).width());
			var objTop = parseInt(jQuery(this).position().top);
			var tipPos = "center";
			var linkPos = "center";

			if (jQuery(this).hasClass('click')) {

				jQuery(this).unbind('click');
				jQuery(this).bind('click', function(event) {
					event.preventDefault();
					if (objtip.is(':visible')) {
						objtip.fadeTo('fast', 0, function() {
							objtip.hide();
						});
					} else {
						position_tip(objtip, objlink, tipPos, linkPos);
						objtip.fadeTo('fast', 1);
					}
				});

			} else if (jQuery(this).hasClass('hover')) {

				jQuery(this).hover(function() {
					position_tip(objtip, objlink, tipPos, linkPos);
					objtip.fadeTo('fast', 1, function() {
						objtip.hide();
					});
				}, function() {
					position_tip(objtip, objlink, tipPos, linkPos);
					objtip.fadeTo('fast', 0);
				});
			}
		});

		jQuery('.sbd-tip .sbd-tip-close').click(function() {
			jQuery(this).parents('.sbd-tip').fadeTo('fast', 0, function() {
				jQuery(this).hide();
			});
		});
	}
};
function position_tip(objtip, objlink, tipPos, linkPos) {
	objtip.show();
	objtip.position({
		of : objlink,
		my : tipPos + " bottom",
		at : linkPos + " top-6",
		collision : 'none none'
	});
	objtip.find('span').position({
		of : objlink,
		my : "center bottom",
		at : "center top+1",
		collision : 'none none'
	});
}

/**
 * Objeto de gestión de comportamiento Javascript del componente exportData.
 *
 * @auhtor fmunozze
 * @since 3.0.0
 */
var proteoExportDataEstadosOriginalesCheck = {};
var proteoExportData = {

		cookieTimer : "", //Referencia al timer de comprobación de la cookie
		cookiePattern : "", //Patron que sigue la cookie

	/**
	 * Inicializa el componente
	 *
	 * @param clientId
	 *            id del componente que contiene el exportData
	 * @param disabled
	 *            indica si esta deshabilitado el componente
	 */
	initComponent : function(clientId, disabled, trigger) {

		var emailInputID = clientId + ":cpInEmail";
		var emailInputEscapedID = ProteoJSFUtils.escapeIdColons(emailInputID);

		var labelIdComponent = "label_" + emailInputID;
		var labelIdEscape = ProteoJSFUtils.escapeIdColons(labelIdComponent);

		jQuery("#" + emailInputEscapedID).hide();
		jQuery("#" + labelIdEscape).hide();

		var blockOptions = clientId + ':optionsBlock';
		var blockOptionsEscaped = ProteoJSFUtils.escapeIdColons(blockOptions);
		proteoExportDataEstadosOriginalesCheck[clientId] = {};
		jQuery('#' + blockOptionsEscaped + ' input[type="radio"]')
				.each(
						function() {
							var inputID = jQuery(this).attr('id');
							if (jQuery(this).attr('checked') == 'checked'
									|| jQuery(this).attr('checked') == true) {
								proteoExportDataEstadosOriginalesCheck[clientId][inputID] = true;
							} else {
								proteoExportDataEstadosOriginalesCheck[clientId][inputID] = false;
							}
						});

		jQuery("#" + trigger.replace(/:/g, "\\:"))
				.click(
						function() {
							var blockOptions = clientId + ':optionsBlock';
							var blockOptionsEscaped = blockOptions.replace(
									/:/g, "\\:");
							var emailInputEnabled = false;
							jQuery(
									'#' + blockOptionsEscaped
											+ ' input[type="radio"]')
									.each(
											function() {

												var inputID = jQuery(this)
														.attr('id');
												var checked = proteoExportDataEstadosOriginalesCheck[clientId][inputID];
												jQuery(this).prop('checked',
														checked);
												if (checked) {
													if (!jQuery(this).parent()
															.hasClass(
																	'selected')) {
														jQuery(this)
																.parent()
																.addClass(
																		'selected');
													}

													if (!emailInputEnabled
															&& jQuery(this)
																	.val() == 'send_mail_data') {
														emailInputEnabled = true;
													}
												} else {
													jQuery(this).parent()
															.removeClass(
																	'selected');
												}

												proteoExportData
														.cleanError(jQuery(this)
																.attr('name'));
											});

							proteoExportData.enableDisableEmail(clientId, emailInputEnabled);
						});

		proteoExportData.enableDisableEmail(clientId, false);

	},
	/**
	 * Deshabilita y reincia el campo email
	 */
	enableDisableEmail : function(clientId, enable) {

		var idComponent = clientId + ":cpInEmail";
		var idComponentEscaped = ProteoJSFUtils.escapeIdColons(idComponent);

		var labelIdComponent = "label_" + idComponent;
		var labelIdEscape = ProteoJSFUtils.escapeIdColons(labelIdComponent);

		if (enable) {
			jQuery("#" + labelIdEscape).fadeIn();
			jQuery("#" + idComponentEscaped).fadeIn();
			jQuery("#" + idComponentEscaped).val("");
		} else {
			jQuery("#" + labelIdEscape).fadeOut();
			jQuery("#" + idComponentEscaped).fadeOut();
			jQuery("#" + idComponentEscaped).val("");

		}
		proteoExportData.cleanError(idComponent);
		removeErrorMessage(idComponent);
		removeInvalidComponentClass(idComponent);

	},
	/**
	 * Limpia los errores ingresados
	 */
	cleanError : function(inputId) {

		var idComponentHelp = inputId + "_componentHelp";
		var idComponentEscaped = ProteoJSFUtils.escapeIdColons(idComponentHelp);
		jQuery("#" + idComponentEscaped).html("");

		var idComponentHelpAuxError = inputId + "_componentHelpAuxError";
		idComponentEscaped = ProteoJSFUtils.escapeIdColons(idComponentHelpAuxError);
		jQuery("#" + idComponentEscaped).val("");

		var idComponentHelpAuxHelp = inputId + "_componentHelpAuxHelp";
		idComponentEscaped = ProteoJSFUtils.escapeIdColons(idComponentHelpAuxHelp);
		jQuery("#" + idComponentEscaped).val("");

		var idComponentError = inputId + "error";
		idComponentEscaped = ProteoJSFUtils.escapeIdColons(idComponentError);
		jQuery("#" + idComponentEscaped).val("");
	},

	/**
	 * Controla el evento click sobre el radio de DataDestination
	 *
	 * @param {Object}
	 *            objRadio
	 */
	selectDataDestination : function(clientId, objRadio) {
		proteoExportData.enableDisableEmail(clientId, (objRadio.value == "send_mail_data"));
	},

	disableDoubleSubmit : function() {
		jQuery("form").data('submitted', false);
		return true;
	},

	validateForm : function(clientId) {

		var isValid = true;

		cleanStandarErrorComponentMessages();

		var idComponent = clientId + ":cpInEmail";
		var externalDIVEscaped = "externalDIV_" + idComponent;
		externalDIVEscaped = externalDIVEscaped.replace(/:/g, "\\:");

		var destinationID = "radioButton_" + clientId + ":cpInpRbDataDestinationOpts_1";
		destinationID = destinationID.replace(/:/g, "\\:");

		var idComponentEscaped = idComponent.replace(/:/g, "\\:");

		// Validacion del campo eMail
		if(jQuery("#" + destinationID).is(":checked")) {
			if (!jQuery("#" + externalDIVEscaped).hasClass('bso-form-disabled')){
				if(jQuery("#" + idComponentEscaped).val() == '') {
					removeErrorMessage(clientId);
					removeInvalidComponentClass(clientId);
					addErrorMessage(idComponent,
						"bso.channel.component.common.component.error.required");
					isValid = false;
				}
				else{
					isValid = proteoEmailInput.validate(idComponentEscaped);
				}

				addInvalidComponentClass(idComponent);
			}
		}

		if(isValid) {
			removeErrorMessage(idComponent);
			removeInvalidComponentClass(idComponent);
			this.manageDownload(clientId);
		}

		return isValid;
	},

	manageDownload : function(clientId) {

		//Para trazar la descarga se esperara que el servidor responda con una
		// cookie con el mismo valor que se enviará en la petición
		var downloadId = (new Date()).getTime();

		// Se inserta en un campo hidden el valor de la cookie que se esperará
		var cookieField = jQuery("input[id='" + clientId + ":cookieDownloadID" + "']");
		cookieField.val(downloadId);

        // Se crea un expresión regular que servirá para
        // detectar si la cookie esperada esá llegando al cliente
        this.cookiePattern = new RegExp( ( "downloadID=" + downloadId ), "i" );

        // Se lanza una función periodicamente mediante un timer
        // para revisar si se ha recibido la cookie esperada
        this.cookieTimer = setInterval( function() {proteoExportData.checkCookies(clientId)}, 500 );

        proteoLightbox.open(clientId + ":cnStrLb_waitingLayer");

	},

	checkCookies : function(clientId) {
        // Si la cookie se ha actualizado y el valor se corresponde
        // con el esperado, se cierra el lightbox
        if ( document.cookie.search( this.cookiePattern ) >= 0 ) {

        	clearInterval( this.cookieTimer );

            // Ocultamos la capa de espera
			proteoLightbox.close(clientId + ":cnStrLb_waitingLayer");
        }
    }

};

/**
 * Objeto que controla las funcionalidades Javascript del componente Ficha Producto (productCard)
 */
var productCard = {

	init : function(clientId) {

		productCard.showHide(clientId);
		//productCard.toggleFav();

	},

	showHide: function(clientId) {

		var productCard = jQuery("#" + ProteoJSFUtils.escapeIdColons(clientId));

		var title = jQuery(productCard).find('.sbd-ficha-titulo');
		var trigger = jQuery(productCard).find('.ico-dropdown');
		var content = jQuery(productCard).find('.sbd-ficha-contenido');
		trigger.click( function(){
			if( title.hasClass('expanded') ) {
				content.fadeOut('fast');
				title.removeClass('expanded').addClass('collapsed');
			} else {
				content.fadeIn('fast');
				title.removeClass('collapsed').addClass('expanded');
			}
		});
	},

	toggleFav: function(clientId) {

		var productCard = jQuery("#" + ProteoJSFUtils.escapeIdColons(clientId));

		var fichaEle = jQuery(productCard);
		var favEle = fichaEle.find('.sbd-ficha-prod-ico-estrella');
		favEle.append('<i class="ico-fav"></i>');
		favEle.unbind('click');
		favEle.bind('click', function(){
			favEle.parents('.sbd-ficha-producto');
			fichaEle.toggleClass('sbd-favorito');
		});

	},

	copyToClipboard : function(event, text) {

		var success = false;

		if (window.clipboardData) { // IE
			window.clipboardData.setData('Text', text);
			success = true;
		}

		else { // Otros navegadores

			var range = document.createRange(),
		      	selection;

			// Creamos un elemento temporal donde situaremos el valor a copiar
		    var tmpElem = jQuery('<div>');
		    tmpElem.css({
		      position: "absolute",
		      left:     "-1000px",
		      top:      "-1000px",
		    });

		    tmpElem.text(text);
		    jQuery("body").append(tmpElem);

		    range.selectNodeContents(tmpElem.get(0));
		    selection = window.getSelection();
		    selection.removeAllRanges();
		    selection.addRange(range);

		    // Ejecutamos el comando de copia
		    try {
		      success = document.execCommand ("copy", false, null);
		    }
		    catch (e) {
		    	console.log('Error at writing in clipboard')
		    }
		    if (success) {
		    	// Eliminamos el elemento temporal
		    	tmpElem.remove();
		    }

		}

		return success;
	}

};

var proteoFichaProducto = {
	moreInfo : function(clientId, literalMasInfo, literalMenosInfo) {

		var linkId = (clientId + "_informacion").replace(/:/g, "\\:");

		var link = jQuery("#" + linkId);
		var fields = jQuery('.sbd-f-contrato, .sbd-f-proxima-liquidacion, .sbd-f-estado');
		var linkShow = jQuery('#informacion').text();
		linkShow = jQuery.trim(linkShow);
		if (linkShow == literalMasInfo) {
			fields.fadeTo('fast', 1);
			jQuery('#informacion').html(literalMenosInfo + "<span></span>");
			jQuery('.sbd-ficha-producto .sbd-ficha-prod-mas-info a span')
					.removeClass('moreInfo');
			jQuery('.sbd-ficha-producto .sbd-ficha-prod-mas-info a span')
					.addClass('lessInfo');

		} else {
			fields.slideUp('fast');
			jQuery('#informacion').html(literalMasInfo + "<span></span>");
			jQuery('.sbd-ficha-producto .sbd-ficha-prod-mas-info a span')
					.removeClass('lessInfo');
			jQuery('.sbd-ficha-producto .sbd-ficha-prod-mas-info a span')
					.addClass('moreInfo');
		}
	}
};

var proteoEditarAlias = {

	cancel : function(event, clientId, triggerElement, oldText) {
		var idTextbox = clientId.replace('tooltip_editAlias', 'input_alias');
		jQuery('#' + idTextbox.replace(/:/g, "\\:")).val(oldText);

		proteoTooltip.toggle(event, clientId, triggerElement);
	},

	show : function(event, clientId, triggerElement, floatBehaviour) {

		var objtooltip = jQuery('div[id="tooltip_' + clientId + '"]');

		var nav = navigator.appName;
		if (nav == "Microsoft Internet Explorer") {
		   window.event.cancelBubble = true;
		}
		else {
		   if((event instanceof MouseEvent)){
				event.stopPropagation();
				//event.preventDefault ? event.preventDefault() : event.returnValue = false;
			}
		}

		objtooltip.find('.bso-tooltip-cerrar').click(function() {
			jQuery(this).parents('.bso-tooltip').fadeTo('fast', 0, function() {
				jQuery(this).hide();
				if (jQuery('.bso-combo-estandar-select').hasClass("activated")) {
					var desplCombo = jQuery('.bso-combo-estandar-select.activated');
					desplCombo.find('.bso-combo-estandar-ul').fadeOut('fast');
					desplCombo.removeClass('activated');
					jQuery('.bso-combo-estandar-select-flecha').removeClass('expanded');
				}
			});
		});

		if (objtooltip.is(':visible')) {
			objtooltip.fadeTo('fast', 0, function() {
				objtooltip.hide();
			});
		} else {

			// Cierre de resto de elementos desplegables, excepto el actual
			BSOnlineComponents.closeAll(clientId);

			proteoEditarAlias.tooltipOffset(objtooltip, triggerElement, floatBehaviour);
			objtooltip.fadeTo('fast', 1);
		}

		jQuery(window).resize( function() {
			if (objtooltip.is(':visible')) {
				proteoEditarAlias.tooltipOffset(objtooltip, triggerElement, floatBehaviour);
			}
		});

	},

	tooltipOffset : function(objtooltip, triggerElement, tooltipPos){

		objtooltip.show();

		var boxOffset = "";
		var arrowOffset = "center+6";

		if (nav == "Microsoft Internet Explorer") {
			arrowOffset += " top";
		}

		if(tooltipPos == "" || typeof (tooltipPos) === "undefined"){
			tooltipPos = "center";
		}

		if (tooltipPos == "right") {
			boxOffset = "left";
		} else if (tooltipPos == "left") {

			boxOffset = "right";
			if (nav == "Microsoft Internet Explorer") {

				if(jQuery(triggerElement).offset().left == objtooltip.offset().left){
					boxOffset += "-28.5";
				}

			} else {

				if(jQuery(triggerElement).offset().left == objtooltip.offset().left){
					boxOffset += "-10";
				} else {
					boxOffset += "+6.5";
				}
			}

		} else if(tooltipPos == "auto") {

			// Posición automática dentro de los límites de la plantilla
			var objLeft = parseInt(jQuery(triggerElement).offset().left);
			var objRight = parseInt(objLeft + jQuery(triggerElement).width());
			tooltipPos = "left";

			if (objLeft > 40 && objLeft <= 190) {
				boxOffset = "left";
			} else if (objLeft > 190 && objLeft <= 380) {
				boxOffset = "center";
			} else if (objLeft > 380) {
				if (objRight >= 530){
					boxOffset = "left";
				}
				else{
					boxOffset = "right+40";
				}
			}
		}

		objtooltip.position({
			of : triggerElement,
			my : boxOffset + " top+7",
			at : boxOffset + " top+12",
			collision : 'none none'
		});

		objtooltip.find('.bso-tooltip-arrow').position({
			of : triggerElement,
			my : "top+13",
			at : "center" + arrowOffset,
			collision : 'none none'
		});
	},

	validateAlias : function(clientId) {
		var alias = jQuery(
				"div[id='" + ProteoJSFUtils.escapeIdColons(clientId)
						+ "'] input[id$='input_alias']").val();
		var idComponent = jQuery(
				"div[id='" + ProteoJSFUtils.escapeIdColons(clientId)
						+ "'] input[id$='input_alias']").attr('id');

		if (alias.length < 3) {
			addErrorMessage(idComponent,"bso.channel.component.editAlias.error");
			addInvalidComponentClass(idComponent);
			return false;
		} else {
			return true;
		}
	}

};

var movementTabs = {
	changeTab : function(clientId, tabId) {

		disableStandarErrorComponent();
		cleanStandarErrorComponentMessages();

		if (jQuery("div[id='" + ProteoJSFUtils.escapeIdColons(tabId) + "']")
				.find(".bso-tabla").length == 0) {
			addStandarErrorComponentMessages(ProteoLocalizer
					.getLiteral("bso.channel.component.movementsTabs.error.NoMovs"));
			enableStandarErrorComponent();
		}

	}
};

var proteoImageBanner = {

	/**
	 * Método que llama a la URL que nos devuelve el script del banner
	 */
	scriptAsyncLoad : function(url, id) {

		var escapedId = id.replace(/:/g, "\\:");

	    if (window.attachEvent){
	        window.attachEvent('onload', async_load);
	    }
	    else{
	        window.addEventListener('load', async_load, false);
	    }

	    function async_load(){

	    	jQuery.getScript(url, function() {

				//Caja contenedora de la imagen
				var elementDIV = jQuery('#' + escapedId);

				if (url.indexOf("MENU_PRIVADO") > -1) {
					if (typeof (B3) != "undefined") {
						if (B3 !== '') {
							elementDIV.append(B3);
						}
					} else {
						if (typeof (B1) != "undefined") {
							if (B1 !== '') {
								elementDIV.append(B1);
							}
						} else {
							elementDIV.append('<!-- Sense campanya//-->');
						}
						if (typeof (B2) != "undefined") {
							if (B2 !== '') {
								elementDIV.append(B2);
							}
						} else {
							elementDIV.append('<!-- Sense campanya//-->');
						}
					}
				} else {
					if (typeof (B1) != "undefined") {
						if (B1 !== '') {
							elementDIV.append(B1);
						}
					}
				}
			});
	    }
	}
};

/**
 * Funciones genéricas para componentes
 */
var BSOnlineComponents = {

	fadeOut : function(id) {
		var clientId = ProteoJSFUtils.escapeIdColons(id);
		jQuery('#' + clientId).fadeOut('fast');
	},

	/**
	 * Método que cierra todos los elementos desplegables en pantalla,
	 * excepto el elemento cuyo Identificador se informa por parámetro
	 * Si no se informa el identificador, se cierran todos los elementos
	 *
	 * Elementos desplegables:
	 * <ul>
	 * 	<li>Tips</li>
	 *  <li>Tooltips</li>
	 * 	<li>Dropdowns</li>
	 * </ul>
	 *
	 * @param clientId	Identificador del elemento a respetar
	 */
	closeAll : function(clientId) {

		// Cierre de tips
		proteoTip.closeAll(clientId);

		// Cierre de tooltips
		proteoTooltip.closeAll(clientId);

		// Cierre de Dropdowns
		proteoDropdownButton.closeAll(clientId);

	}

};

/**
 * Funciones para el componente evisionInput
 */
var evisionInput = {

	initComponent : function(devicePrintID, tokenFSO_ID, flashContent_ID, resourcesPath) {

		document.getElementById(devicePrintID).value = urlEncode(add_deviceprint());

        var flashVars = 'field_name=' + tokenFSO_ID + '\u0026ip_address=0.0.0.0';
        var flashMovie = resourcesPath + 'txtransfersbs/js/rsa_fso';

        if (DetectFlashVer(6,0,0)) {
        	var flashContent = AC_FL_GetRunContent('id', 'flash_id', 'width', '1', 'height', '1', 'movie', flashMovie, 'quality', 'high', 'bgcolor', '#FFFFFF', 'flashVars', flashVars);
        	jQuery('#' + flashContent_ID).append(flashContent);
        }

	}
};

/**
 * Funciones para el componente AdvancedDataList
 */
var advancedDataList = {

	init : function(clientId){

		// Inicialización de los componentes "tip"
		tips.init();
	},

	executeHiddenAction : function(actionListener) {

		jQuery('.bso-hidden-action').each(function() {

			var input = jQuery(this).find('input');
			if(input && jQuery(input)
				&& advancedDataList.endsWith(jQuery(input).attr('id'), 'hiddenAction')) {
				jQuery(input).val(actionListener);
				jQuery(input).trigger('change');
				return false;
			}

		});

	},

	endsWith : function(str, pattern) {
		var d = str.length - pattern.length;
		return d >= 0 && str.lastIndexOf(pattern) === d;
	}
};

/**
 * Funciones de bso-exito
 */
var bsoExito = {
	fixPosition: function(){
		jQuery('.bso-exito:not(:has(.bso-exito-info))').addClass('bso-exito-vcenter');
	}
};

/**
 * Control de visibilidad de un elemento a partir de otro elemento
 */
var viewToggle = {
	init: function(clientId, targetId, instant){
		var trigger = jQuery('#' + ProteoJSFUtils.escapeIdColons(clientId));
		var target = jQuery('#' + ProteoJSFUtils.escapeIdColons(targetId));
		trigger.click(function(){
			if(target.is(':visible')){
				target.slideUp('slow').hide();
			}else{
				target.slideDown('slow').show();
			}
		});
	}
};
