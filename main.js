'use strict';

 //http://www.w3schools.com/jsref/met_table_insertrow.asp

// TODO Change to map
function createTable (data) {
  for (var d = 0; d < data.length; d++) {
      var msg = '<tr><td class="position">' + data[d].position_title + '</td>' + '<td>' + data[d].salary + '</td></tr>\n';
      document.querySelector('.data').innerHTML += msg;
  }
}
