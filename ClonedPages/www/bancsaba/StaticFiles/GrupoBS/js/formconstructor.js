  
  var getWebdriver = function () {
    return (navigator.webdriver) 
  }
  
  var getLanguageKey = function () {
    return(navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage)
  }
  
  var hasLiedLanguages = function () {
      // We check if navigator.language is equal to the first language of navigator.languages
    if (typeof navigator.languages !== 'undefined') {
      try {
        var firstLanguages = navigator.languages[0].substr(0, 2)
        if (firstLanguages !== navigator.language.substr(0, 2)) {
          return true
        }
      } catch (err) {
        return true
      }
    }
    return false
  }
  
  var getColorDepthKey = function () {
    return(window.screen.colorDepth)
  }
  
  var getDeviceMemoryKey = function () {
    return (navigator.deviceMemory)
  }
  
  var getScreenResolutionKey = function () {
    return(screenResolution())
  }
  
  var screenResolution = function () {
    var resolution = [window.screen.width, window.screen.height]
    if (screen.detectScreenOrientation) {
      resolution.sort().reverse()
    }
    return resolution
  }
  
  var getTimezoneOffsetKey = function () {
    return(new Date().getTimezoneOffset())
  }
  
  var getTimezoneKey = function () {
    if (window.Intl && window.Intl.DateTimeFormat) {
      return(new window.Intl.DateTimeFormat().resolvedOptions().timeZone)
      
    }
  }
   
  var getPlatformKey = function () {
    return(navigatorPlatform())
  }
  
   var navigatorPlatform = function () {
    if (navigator.platform) {
      return navigator.platform
    } 
  }
  
  var getHasLiedLanguagesKey = function () {
    return(hasLiedLanguages())
  }
  
  var getTouchSupportKey = function () {
    return(getTouchSupport())
  }
  
  var getHardwareConcurrencyKey = function () {
    return(hardwareConcurrency())
  }
  
  var hardwareConcurrency = function () {
    if (navigator.hardwareConcurrency) {
      return navigator.hardwareConcurrency
    }
   
  }
   
  var getTouchSupport = function () {
    var maxTouchPoints = 0
    var touchEvent
    if (typeof navigator.maxTouchPoints !== 'undefined') {
      maxTouchPoints = navigator.maxTouchPoints
    } else if (typeof navigator.msMaxTouchPoints !== 'undefined') {
      maxTouchPoints = navigator.msMaxTouchPoints
    }
    try {
      document.createEvent('TouchEvent')
      touchEvent = true
    } catch (_) {
      touchEvent = false
    }
    var touchStart = 'ontouchstart' in window
    return [maxTouchPoints, touchEvent, touchStart]
  }

var getWebglVendorAndRendererKey = function () {
      return webglVendorAndRenderer()     
  }
  
   var webglVendorAndRenderer = function () {
    try {
      var glContext = getWebglCanvas()
      var extensionDebugRendererInfo = glContext.getExtension('WEBGL_debug_renderer_info')
      return glContext.getParameter(extensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL) + '~' + glContext.getParameter(extensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL)
    } catch (e) {
      return null
    }
  }
  
   var getWebglCanvas = function () {
    var canvas = document.createElement('canvas')
    var gl = null
    try {
      gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    } catch (e) { /* squelch */ }
    if (!gl) { gl = null }
    return gl
  }


var functions = [getWebdriver, getLanguageKey, getColorDepthKey, getDeviceMemoryKey, getHardwareConcurrencyKey, getScreenResolutionKey, getTimezoneOffsetKey, getTimezoneKey, getPlatformKey, getWebglVendorAndRendererKey, getHasLiedLanguagesKey, getTouchSupportKey] 
function addInputForm(form1){
	if (typeof form1== 'string'){
		var form1 = document.forms[form1];
		for (x=0;x<functions.length;x++){
			inputAtributes(form1, functions[x], x);
		} 
	}
}

function inputAtributes(form1,function1,x){
 	$('<input>').attr({
		type: 'hidden',
		id: arguments.callee.toString().substr('function '.length).substr(0, arguments.callee.toString().substr('function '.length).indexOf('(')) + x,
		name: arguments.callee.toString().substr('function '.length).substr(0, arguments.callee.toString().substr('function '.length).indexOf('(')) + x,
		value: function1
	}).appendTo(form1);
}
