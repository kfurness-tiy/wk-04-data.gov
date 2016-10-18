'use strict';
var ourData = {};

window.onload = function salaries () {

  let url = 'https://open.whitehouse.gov/resource/wb62-w5sr.json'

  var jQueryPromise = $.ajax({
    dataType: "json",
    url: url,
    data: {
      "$limit" : 25
    }
  })

  var realPromise = Promise.resolve(jQueryPromise);

  realPromise.then(function(ourData) {
    var data = ourData;
    console.log(data);
    createTable(data);
  }, function(err) {
    console.log(err + ': Try again');
  });

}; //ends salaries()
