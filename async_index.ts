const fs = require('fs');
console.log('Start');
fs.readFile('hello.txt', function(err: any,data: any) {
  if ( err ) {
    throw err;
  };
  console.log(data.toString());
});
console.log('End');
