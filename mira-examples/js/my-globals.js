
switch(window.location.protocol) {
  // set root_url depending on whether running locally or not
  case 'file:':
    var root_url = "http://localhost:3000/api/projects/2";
    break;
  default: 
    var root_url = "https://46.101.208.152/api/projects/5";
}


var patient_profile_root = "ex6.1_simple_profile.html";

var entityMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': '&quot;',
  "'": '&#39;',
  "/": '&#x2F;'
};


function escapeHtml(string) {
  return String(string).replace(/[&<>"'\/]/g, function (s) {
    return entityMap[s];
  });
}


// function as text
function htmlFunc(func) {
  entire = func.toString();
  body = entire.substring(entire.indexOf("{") + 1, entire.lastIndexOf("}"));
  return escapeHtml(body).replace(/root_url/g, '"' + root_url + '"'); // "g" modifier for global match, replaces all instances
}

// http://stackoverflow.com/a/979325/1002140
var sort_by = function(field, reverse, primer){

   var key = primer ? 
       function(x) {return primer(x[field])} : 
       function(x) {return x[field]};

   reverse = !reverse ? 1 : -1;

   return function (a, b) {
       return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
     } 
}


function noNull(value,replace) {
  replace = typeof replace !== 'undefined' ? replace : "";
  return (value == null) ? replace : value
}


function infoBox(text,dom_id) {
  dom_id = typeof dom_id !== 'undefined' ? a : "info-box-prepend";
  if (typeof jQuery != 'undefined') {
    $("#" + dom_id).prepend('<div class="info-box-div">' + text + '</div>');
  }
}

if (typeof jQuery != 'undefined') {
  $('#info-box-toggle').click(function() {
    $('#info-box').toggle();
  });
}