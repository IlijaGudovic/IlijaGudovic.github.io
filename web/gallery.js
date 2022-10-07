


// 
// 
var request = new XMLHttpRequest();
request.open('GET', './images/', true);

alert(request.responseText)

var resp;

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Success!
    resp = request.responseText;
  }
};

request.send();
var directory_listing = resp;
var regexp = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/i;
var match, files = [];

while ((match = regexp.exec(resp)) != null) {
  files.push(match.index);
}

console.log(files);


// const fs = require("fs");
// var all = fs.readdirSync("./images/");

// console.log(all);

// requirejs.config({

//     baseUrl: 'js',
//     paths:
//     {
//         test: 'test'
//     }

// });


//var fs = require('fs');

// define(function (require) {
//     var fs = require('fs');
//     //mylogger.myfunc();
//  });

// var fs = require('fs');
//var files = fs.readdirSync('images/galery_home');

// alert(files);

// var filename = fileInput.files[0].name;

