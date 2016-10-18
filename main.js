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
  }, function(err) {
    console.log(err + ': Try again');
});

console.log(ourData[0].salary);
