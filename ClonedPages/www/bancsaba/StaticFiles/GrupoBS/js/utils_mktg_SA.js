(function() {
  var Utils = (function() {

    var keys = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".split("");

    function encode(input) {
      var output = [],
        chr1, chr2, chr3, enc1, enc2, enc3, enc4,
        i = 0;
      while (i < input.length) {
        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);
        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;
        if (isNaN(chr2)) {
          enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
          enc4 = 64;
        }
        output.push(keys[enc1], keys[enc2], keys[enc3], keys[enc4]);
      }
      return output.join('');
    }
	
	

    function randomString(length) {
      var chars = 'abcdefghiklmnopqrstuvwxyz_'.split(''),
        charsLength = chars.length,
        random = Math.random,
        floor = Math.floor,
        result = new Array(length);
      for (var i = 0; i < length; i++) {
        result.push(chars[floor(random() * charsLength)]);
      }
      return result.join("");
    }

  })();
})();


(function(){var e=function(){function t(t){var n=[],r,i,s,o,u,a,f,l=0;while(l<t.length){r=t.charCodeAt(l++);i=t.charCodeAt(l++);s=t.charCodeAt(l++);o=r>>2;u=(r&3)<<4|i>>4;a=(i&15)<<2|s>>6;f=s&63;if(isNaN(i)){a=f=64}else if(isNaN(s)){f=64}n.push(e[o],e[u],e[a],e[f])}return n.join("")}function n(e){var t="abcdefghiklmnopqrstuvwxyz_".split(""),n=t.length,r=Math.random,i=Math.floor,s=new Array(e);for(var o=0;o<e;o++){s.push(t[i(r()*n)])}return s.join("")}var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".split("");(function(e,t){var n=t.getElementsByTagName("head")[0],r=t.createElement("script"),i=[["src",(e.location.protocol=="https:"?"https://":"http://")+"datalog.bancsabadell.com/sabadell_igis_igis/LwC.js"],["async",true],["type","text/javascript"]];for(var s=0,o=i.length;s<o;s++){r.setAttribute(i[s][0],i[s][1])}n.appendChild(r)})(window,document)}()})()

