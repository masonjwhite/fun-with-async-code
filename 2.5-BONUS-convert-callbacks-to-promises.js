/* 
  2.5 Can I turn a callback-based function into one that uses promises?
    - You betcha! Check it out!
    - Let's refactor the example from 1 to use promises
*/

var fs = require('fs');

// Promise-ify our fs.readFile function
function readFileWithPromise(filename) {
	// Notice how we're returning a promise!
	return new Promise(function(resolve, reject) {
		fs.readFile(filename, function(error, data) {
			if (error) {
				reject(error); // Reject will trigger the catch()
			}
			resolve(data); // Resolve will trigger the then()
		});
	});
}

// Now let's use it! We can use .then and .catch!
readFileWithPromise('yo.txt')
	.then(function(data) {
		console.log(data);
	})
	.catch(function(error) {
		console.log(error);
	});
