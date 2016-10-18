'use strict';

function createTable (data) {
  data.map( function (data) {
      var msg = '<tr><td class="position">' + data.position_title + '</td>' + '<td>' + data.salary + '</td></tr>\n';
      document.querySelector('.data').innerHTML += msg;
  });
}

function buttonSalary (data){
  var randomInfo = 'Position: ' + data[0].position_title + "\nSalary: " + data[0].salary;
  document.querySelector('.randomSalInfo').innerHTML = randomInfo;
}
