/*
  1.Callbacks
    - Deals with asnychronous code

    - **HOW CAN I IDENTIFY IT?**
      - Take note of the callback function declared as the second argument to the readFile function!

    - **ERROR HANDLING?** 
      - The if (err) code block is what fires if something went wrong

    - **WHERE WILL I SEE IT?** 
      - Many older libraries use callbacks, BUT that doesn't mean don't use them! 
*/

var fs = require('fs');

fs.readFile('yo.html', function(error, data) {
	if (error) {
		console.log(error);
	}

	console.log(data);
});
