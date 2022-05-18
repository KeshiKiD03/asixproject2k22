ns4 = (document.layers)? true:false
ie4 = (document.all)? true:false

function doAction(formname) {
	for (j = 0; j < document.forms.length; j++) {
		for (i = 0; i < document.forms[j].elements.length; i++) {
			if (document.forms[j].elements[i].type == "submit" ) {
				document.forms[j].elements[i].disabled=true;
			}
		}
	}
	document.forms[formname].submit();
}
		
function validateKey(evt)  {
	if (evt.keyCode == 13 ||evt.which == '13') validate();
}
function validateKeyRecordado(evt)  {
        if (evt.keyCode == 13 ||evt.which == '13') validateRecordado();
}


function CookiesEnabled() {
  var count = document.cookie.length;
  SetCookie("BROWSER_CHECK", "checking");
  if (document.cookie.length > count) {
    DeleteCookie("BROWSER_CHECK");
    return true;
  }
  else {
    DeleteCookie("BROWSER_CHECK");
    return false;
  }
}

function getCookieVal (offset) {
  var endstr = document.cookie.indexOf(";", offset);
  if (endstr == -1)
    endstr = document.cookie.length;
  return unescape(document.cookie.substring(offset, endstr));
}

function GetCookie (name) {
  return readCookie(name);
}

function SetCookie (name,value,expires,path,domain,secure) {
  document.cookie = name + "=" + escape (value) +
    ((expires) ? "; expires=" + expires.toGMTString() : "") +
    ((path) ? "; path=" + path : "") +
    ((domain) ? "; domain=" + domain : "") +
    ((secure) ? "; secure" : "");
}

function DeleteCookie (name,path,domain) {
  if (GetCookie(name)) {
    document.cookie = name + "=" +
      ((path) ? "; path=" + path : "") +
      ((domain) ? "; domain=" + domain : "") +
      "; expires=Thu, 01-Jan-70 00:00:01 GMT";
  }
}

function Acces(valor)
{
   acces = GetCookie('ACCES');
   if (acces == null || !acces.length) { SetCookie('ACCES',valor,'','/'); }
   else if (acces.indexOf(valor) == -1) {
      SetCookie('ACCES',valor,'','/');
   }
}	


function setLoginCookie(div){		
	var cookieAceptacionCookies_SabAtl = GetCookie("aceptacionCookies_SabAtl");
	var cookieAceptacionCookies_BSAndorra = GetCookie("aceptacionCookies_BSAndorra");
	
	if(cookieAceptacionCookies_SabAtl == "true" || cookieAceptacionCookies_BSAndorra=="true"){
		var expdate = new Date();
		expdate.setTime (expdate.getTime() + 365*(24 * 60 * 60 * 1000)); // 1 any  
		SetCookie("LOGINTYPE",div,expdate,"/");
	}
}
function getEntry (subject, entry)
	{
	entry += "=";

	var posIni = subject.indexOf(entry);

	if (posIni < 0)
	return "";
	
	posIni += entry.length;
	var isDelimited=(subject.charAt(posIni)=="\"");
	
	var posFi;
	var endChar=",";

	
	 if(isDelimited)

	{	
		posIni+=1;					
			endChar="\"";					
	 }
		
		posFi = subject.indexOf(endChar, posIni);
		while (posFi > 0 && subject.charAt(posFi-1) == "\\")
		{
			posFi = subject.indexOf(endChar, posFi+1);
		}
			
	if (posFi > 0) 	return subject.substring(posIni, posFi);

	return subject.substring(posIni);

}
			
			
			
			
			
			
			
			
			
			var SEP = '|';
var PAIR = '=';

// browser detection
ua = navigator.userAgent.toLowerCase();
opera = ua.indexOf("opera") >= 0;
internetExplorer = ua.indexOf("msie") >= 0 && !opera;
iemac = internetExplorer && ua.indexOf("mac") >= 0;
moz = ua.indexOf("mozilla") && !internetExplorer && !opera;
os = navigator.platform;

// misc. functions
function activeXDetect(componentClassID) {
	componentVersion = document.body.getComponentVersion('{'+componentClassID+'}','ComponentID');
	return (componentVersion != null) ? componentVersion : false;
}

function stripIllegalChars(value) {
	t = "";
	//first we need to escape any "\n" or "/" or "\"
	value = value.toLowerCase();
	for (i = 0; i < value.length; i++) {
		if (value.charAt(i) != '\n' && value.charAt(i) != '/' && value.charAt(i) != "\\") {
			t += value.charAt(i);
		}
		else if (value.charAt(i) == '\n') {
			t += "n";
		}
	}
	return t;
}

function stripFullPath(tempFileName, lastDir) {
	fileName = tempFileName;
	//anything before the last lastDir will be lost
	filenameStart = 0;
	filenameStart = fileName.lastIndexOf(lastDir);
	if (filenameStart < 0) return tempFileName;
	filenameFinish = fileName.length;
	fileName = fileName.substring(filenameStart + lastDir.length, filenameFinish);
	return fileName;
}

// fingerprinting functions
function fingerprint_browser () {
	t = ua +SEP+ navigator.appVersion +SEP+ navigator.platform;
	if (internetExplorer) {t += SEP + navigator.appMinorVersion +SEP+ navigator.cpuClass +SEP+
		navigator.browserLanguage;
		t += SEP + ScriptEngineBuildVersion();
	} else if (moz) {
		t += SEP + navigator.language;
	}
	return t;
}

function fingerprint_display () {
	t = "";
	if (self.screen) {
		t += screen.colorDepth +SEP+ screen.width +SEP+ screen.height +SEP+
		screen.availHeight;
	}
	return t;
}

function fingerprint_timezone () {
	var gmtHours = (new Date().getTimezoneOffset()/60)*(-1);
	return gmtHours;
}

function fingerprint_lang(){
	var lang;
	if (typeof(navigator.language) != "undefined")
	{
	lang = navigator.language;
	}
	else if (typeof(navigator.browserLanguage) != "undefined")
	{
	lang = navigator.browserLanguage;
	}
	else
	{
	lang = "";
	}
	return lang;
}

function fingerprint_syslang () {
	var lang;
	(typeof(navigator.systemLanguage) != "undefined") ? lang = navigator.systemLanguage
	: lang = "";
	return lang;
}

function fingerprint_userlang () {
	var lang;
	(typeof(navigator.userLanguage) != "undefined") ? lang = navigator.userLanguage :
	lang = "";
	return lang;
}

// async post methods
function form_add_data(fd, name, value) {
	if (fd && fd.length > 0) {
	fd += "&";
	}
	else {
	fd = "";
	}
	fd += name + '=' + escape(value);
	return fd;
}

function form_add_fingerprint(fd, name, value) {
	fd = form_add_data(fd, name + "d", value);
	return fd;
}

// fingerprint communiation


function Hashtable()
{
	var keysToIndex = {__indexToValue:[],__indexToKeys:[]};
	var activeEnum = [];
	var tableLength = 0;
	var self = this;
	/*
	This inner Object constructor is used to implement a Java
	style Enumerator (and Iterator) Object.
	*/
	function Enumeration(arrNm)
	{
		var lastIndex = null;
		var enumIndex = 0;
		while(typeof activeEnum[enumIndex] == 'number')enumIndex += 1;
		activeEnum[enumIndex] = 0;
		/*
		Returns true if this Enumerator/ has another entry to
		return, else returns false.
		*/
		this.hasNext = this.hasMoreElements = function(){
			if(activeEnum[enumIndex] < tableLength){
				return true;
			}else{
				if(typeof activeEnum[enumIndex] == 'number'){
					activeEnum[enumIndex] = null;
				}
				return false;
			}
		};
		/*
		Returns the next item from this Enumerator/Iterator (key
		or value, depending on whether it was created with the keys
		or elements methods).
		*/
		this.next = this.nextElement = function(){
			if(this.hasNext){
			lastIndex = activeEnum[enumIndex];
			return keysToIndex[arrNm][activeEnum[enumIndex]++];
			}else{
				return null;
			}
		};
		/*
		Removes the last entry (key/value pair) accessed with the
		next or nextElement methods of this Enumerator/Iterator
		(if any). The key/value pair is removed regardless of whether
		the Enumerator/Iterator was accessing keys or values.
		*/
		this.remove = function(){
			if(typeof lastIndex == 'number'){
				self.remove(keysToIndex.__indexToKeys[lastIndex]);
				lastIndex = null;
			}
		};
	};
	// End Enumeration
	/*
	Returns the value mapped to the provided (String) key, or null
	if the key is not mapped to a value.
	*/
	this.get = function(key){
		if(typeof keysToIndex[key] == 'number'){
			return keysToIndex.__indexToValue[keysToIndex[key]];
		}else{
			return null;
		}
	};
	/*
	Adds the value provided to this Hashtable mapped to the key
	provided.
	*/
	this.put = function(key, value){
		if(typeof keysToIndex[key] == 'number'){
			keysToIndex.__indexToValue[keysToIndex[key]] = value;
		}else{
			keysToIndex[key] = tableLength;
			keysToIndex.__indexToValue[tableLength] = value;
			keysToIndex.__indexToKeys[tableLength++] = key;
		}
	};
	/*
	Removes the key and any value mapped to it from this
	Hashtable.
	*/
	this.remove = function(key){
		var remIndex = keysToIndex[key];
		if(typeof remIndex == 'number'){
			delete keysToIndex[key];
			tableLength -= 1;
			for(var c = remIndex;c < tableLength;c++){
				keysToIndex.__indexToValue[c] =
				keysToIndex.__indexToValue[c+1];
				keysToIndex[(keysToIndex.__indexToKeys[c] =
				keysToIndex.__indexToKeys[c+1])] = c;
			}
			for(var c = 0;c < activeEnum.length;c++){
				if((activeEnum[c])&&(remIndex < activeEnum[c])){
					activeEnum[c] -= 1;
				}
			}
		}
	};
	/*
	Returns the length of this Hashtable.
	*/
	this.size = function(){
		return tableLength;
	};
	/*
	This method is not intended for external use! use elements
	and keys methods instead.
	*/
	this.__enumerate = function(type){
		return new Enumeration(type);
	};
	/*
	Returns an object that is similar to the Java Enumeration
	Interface, having hasMoreElements and nextElement Methods. This
	object also reproduces the Java Iterator interface, having methods
	hasNext, next and remove. This enumeration is of the values stored
	in the Hashtable.
	*/
	Hashtable.prototype.elements = function(){
		return this.__enumerate('__indexToValue');
	}
	/*
	Returns an object that is similar to the Java Enumeration
	Interface, having hasMoreElements and nextElement Methods. This
	object also reproduces the Java Iterator interface, having methods
	hasNext, next and remove. This enumeration is of the keys stored
	in the Hashtable.
	*/
	Hashtable.prototype.keys = function(){
		return this.__enumerate('__indexToKeys');
	}
	/*
	Removes all entry's from the Hashtable
	*/
	Hashtable.prototype.clear = function(){
		var e = this.keys();
		while(e.hasNext()){
			this.remove(e.next());
		}
	}
	Hashtable.prototype.toString = function(){
		var n,e = this.keys();
		var st = '';
		while(e.hasNext()){
			n = e.next();
			st += n+' =&gt; '+this.get(n)+'\r\n';
		}
		return st;
	}
	/*
	Returns true if this Hashtable contains a value that is equal
	to the value provided, else returns false
	*/
	Hashtable.prototype.contains = function(testVal){
		var e = this.elements();
		while(e.hasNext()){
			if(e.next() == testVal)return true;
		}
		return false;
	}
	/*
	Returns true if this Hashtable contains a value that is equal
	to the value provided, else returns false.
	*/
	Hashtable.prototype.containsValue = Hashtable.prototype.contains;
	/*
	Returns true if this Hashtable contains a value mapped to
	the value provided, else returns false.
	*/
	Hashtable.prototype.containsKey = function(testKey){
		return (this.get(testKey) != null);
	}
	/*Returns true if this Hashtable has zero entry's.
	*/
	Hashtable.prototype.isEmpty = function(){
		return (this.size() == 0);
	}
	/*
	If the parameter provided is another Hashtable object
	then all of the key/value pairs from the provided Hashtable
	are added to this Hashtable.
	*/
	Hashtable.prototype.putAll = function(hTable){
		if(hTable.constructor == Hashtable){
			var n,e = hTable.keys();
			while(e.hasNext()){
				n = e.next();
				this.put(n, hTable.get(n));
			}
		}
	}
	/*
	Returns a 'shallow' copy of this Hashtable.
	*/
	Hashtable.prototype.clone = function(){
		var ht = new Hashtable();
		ht.putAll(this);
		return ht;
	}
	/*
	Returns true if this Hashtable equals the parameter
	provided, else it returns false.
	*/
	Hashtable.prototype.equals = function(o){
		return (o == this);
	}
}
