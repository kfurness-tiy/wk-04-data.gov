'use strict';

function createTable (data) {
  data.map( function (data) {
      var msg = '<tr><td class="position">' + data.position_title + '</td>' + '<td>' + data.salary + '</td></tr>\n';
      document.querySelector('.data').innerHTML += msg;
  });
}



var globalData = (function () {
  var data = {};

  let setData = function (apiData) {
    data = apiData;
    console.log(data);
    // clicked(data);
    return data;
  };

  let clicked = function () {
      var randomNum = Math.floor(Math.random() * 50);
      console.log(randomNum);
      var randomInfo = 'Position: ' + data[randomNum].position_title + "<br> Salary: " + data[randomNum].salary;
      console.log(randomInfo); //not logging this!
      document.querySelector('.randomSalInfo').innerHTML = randomInfo;
  };



  return {
    setData: setData,
    clicked: clicked,
  };
})();

document.querySelector('button').onclick = globalData.clicked;

// function buttonSalary (data){
//   var randomInfo = 'Position: ' + data[0].position_title + "\nSalary: " + data[0].salary;
//   document.querySelector('.randomSalInfo').innerHTML = randomInfo;
// }
