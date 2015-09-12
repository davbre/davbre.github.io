
// var root_url = "http://localhost:3000/api/projects/1";
// var root_url = "http://46.101.208.152/api/projects/1";
var root_url = "http://46.101.208.152/api/projects/2";

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