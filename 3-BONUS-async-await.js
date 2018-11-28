/*
  3. Async/Await
    - Guess what? Deals with asynchronous code!
    - The following is still working with promises, its just a prettier way of working with them
    - Developers started getting sick of too many nested .then's
    - So they created "async/await" to make it cleaner!
    - Any promise based library supports async/await (because we're still working with promises!)
    - Example 2 is identical to this and accomplishes the exact same thing

    - **HOW CAN I IDENTIFY IT?**
      - Note the function that has asynchronous code in it is marked as "async"
      - Note the value that returns a promise (in this case the call to axios) is tagged with "await"

    - **ERROR HANDLING?** 
      - We use a try/catch block to handle any potential errors that come up, Google try/catch for more info!

    - **WHERE WILL I SEE IT?** 
      - Most modern codebases!
*/

var axios = require('axios');

async function getData() {
	try {
		// Look how much cleaner this is!
		var myData = await axios.get('/someEndpoint');
		console.log(myData);
	} catch (error) {
		// If things go wrong!
		console.log('Ahh crap' + error);
	}
}
