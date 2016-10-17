var ourData = {};

window.onload = function salaries () {

  let url = 'https://open.whitehouse.gov/resource/wb62-w5sr.json'

  // over 27,000 hits with the following
  // $.get(url, function(data) {
  //   console.log(data);
  // });

  // we'll do the long version to prevent overload
  $.ajax({
    dataType: "json",
    url: url,
    data: {
      "$limit" : 100
    }
  }).done(function(data) {
     ourData = data;
     console.log(ourData);
  })

};
