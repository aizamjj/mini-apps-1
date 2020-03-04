[X] Use Express to serve up an index.html file and its associated assets
    [X] Build your Express app inside server.js and your client app inside the client folder. 
    [X] Create a package.json to store project's dependencies (nodemon, express, body-parser).
[ ] The client app should be able to submit JSON data to the server, receive a response containing a CSV-formatted result (the way this is done will vary depending on where you are in the challenge).
[ ] Implement all the report generation logic on the server. Do not use any external libraries (such as via npm). You may use jQuery on the client.

[X] Initially, submission of the JSON data (from the client to server) should be done using an HTML form with a single textarea input field (for the entire JSON text) and a submit button. 
    [X] When the user clicks submit, POST the form data to the server. The form submission process should use the default browser action/behavior. DO NOT use jQuery/AJAX functions in the submission process.
[ ] The response from the server should contain the CSV report along with the form so the user can keep submitting indefinitely, without having to go back to the "form page". DO NOT USE jQuery/AJAX. You may use the supplied examples of JSON and CSV for testing and verification.
    [X] Generate CSV report from form input
    [ ] POST response should include the CSV report and the FORM
    [ ] 

