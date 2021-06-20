                   Payment Application
There are two folders (client,server) which contain frontend UI
and backend server. To start the application use "npm start"
to start UI part i:e Client and "nodemon app.js" to start
server part i:e Server. 
I used NodeJS with express for Server side and ReactJs for
UI part.
When we start UI at "localhost:3000", there is a button which 
will redirect to client details page. After filling client 
details,click on "Go To payment" which will redirect to payment 
page.There enter card details and click "Confirm Payment".
This will send an HTTP request to server that is running on 
"localhost:4000".
In server side there is a post method which will receive the
request and check if the card Details is valid or not.
If valid it will send a response, payment Successful and other
details.If not valid it will send a response, Payment Failed
and other details.
This response information is shown in UI part of the project.  