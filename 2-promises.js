/*
  2.Promises
    - Deals with asnychronous code

    - **HOW CAN I IDENTIFY IT?** 
      - Take note of the ".then" and ".catch", that's a dead giveaway you're using promises

    - **ERROR HANDLING?** 
      - .catch is run if any errors occur

    - **WHERE WILL I SEE IT?** 
      - Many modern libraries support promises (e.g. Axios!)
*/

var axios = require('axios');

axios
	// This returns a promise
	.get('/someEndpoint')

	// Then we chain our ".then" onto it
	.then(function(response) {
		console.log(response);
	})

	// We also chain our ".catch" in case something goes wrong!
	.catch(function(error) {
		console.log('Ahh crap' + error);
	});
