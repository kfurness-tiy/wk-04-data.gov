'use strict';

function createTable (data) {
  data.map( function (data) {
      var msg = '<tr><td class="position">' + data.position_title + '</td>' + '<td>' + data.salary + '</td></tr>\n';
      document.querySelector('.data').innerHTML += msg;
  });
}

var globalData = (function () {
  var data = {};

  function setData(apiData) {
    data = apiData;
    // clicked(data);
    return data;
  }

  var clicked = function (data) {
      console.log(data);
      console.log(data[0].salary);
      var randomInfo = 'Position: ' + data[0].position_title + "\nSalary: " + data[0].salary;
      console.log(randomInfo); //not logging this!
      document.querySelector('.randomSalInfo').innerHTML = randomInfo;
  }

  return {
    setData: setData,
    // clicked: clicked
  };
})();

document.querySelector('button').onclick = globalData.clicked;

// function buttonSalary (data){
//   var randomInfo = 'Position: ' + data[0].position_title + "\nSalary: " + data[0].salary;
//   document.querySelector('.randomSalInfo').innerHTML = randomInfo;
// }
