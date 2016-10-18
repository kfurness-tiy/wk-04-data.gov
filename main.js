// function salaryData(data) {
//   ourData = data;
//   console.log(ourData[0].salary);
//   console.log(data);
// }

function dataLoad () {
  return new Promise( function(resolve, reject) {
    setTimeout( function() {
      if (ourData) {
        resolve('got it');
      }
      else {
        reject('no go');
      }

    }, 2000);
  })
};

var loaded = dataLoad();

loaded.then(function(result) {
  console.log(ourData);
  printData(ourData);
  }, function(err) {
    console.log(err + ': Try again');
});

function printData (ourData) {
  var data = ourData;
  console.log(data[0].salary);
  createTable(data);
  // randomData(data);
  }


//http://www.w3schools.com/jsref/met_table_insertrow.asp


function createTable (data) {
  for (var d = 0; d < data.length; d++) {
      var msg = '<tr><td>' + data[d].position_title + '</td>' + '<td>' + data[d].salary + '</td></tr>\n';
      document.querySelector('.data').innerHTML += msg;
  }
}

// function createTable (data) {
//   var body = document.getElementsByTagName('body')[0];
//
//   var tbl = document.createElement('table');
//   var tblBody = document.createElement('tbody');
//   tbl.style.width = '800px';
//   tbl.style.border = '1px solid black';
//
//   for (let i = 0; i < 2; i++) {
//     var row = document.createElement('tr');
//
//   for (var j = 0; j < 10; j++) {
//     var cell = document.createElement('td');
//     var cellText = document.createTextNode(data[j].salary);
//     cell.appendChild(cellText);
//     row.appendChild(cell);
//   }
//
//     tblBody.appendChild(row);
//   }
//
//   tbl.appendChild(tblBody);
//   body.appendChild(tbl);
//   tbl.setAttribute('boder', '2');
// }
//
// function getData(data) {
//   for (var d = 0; d < 10; d++ ) {
//     return data[d].salary;
//   }
// }
