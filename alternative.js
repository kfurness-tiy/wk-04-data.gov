function dataLoad () {
//   return new Promise( function(resolve, reject) {
//     setTimeout( function() {
//       if (ourData) {
//         resolve('got it');
//       }
//       else {
//         reject('no go');
//       }
//
//     }, 2000);
//   })
// };
//
// var loaded = dataLoad();

// loaded.then(function(result) {
//   console.log(ourData);
//   printData(ourData);
//   }, function(err) {
//     console.log(err + ': Try again');
// });

// function printData (ourData) {
//   var data = ourData;
//   console.log(data[0].salary);
//   createTable(data);
//   // randomData(data);
//   }
//
//
// //http://www.w3schools.com/jsref/met_table_insertrow.asp
//
//
// function createTable (data) {
//   for (var d = 0; d < data.length; d++) {
//       var msg = '<tr><td>' + data[d].position_title + '</td>' + '<td>' + data[d].salary + '</td></tr>\n';
//       document.querySelector('.data').innerHTML += msg;
//   }
// }
