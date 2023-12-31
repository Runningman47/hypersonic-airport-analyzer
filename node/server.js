'use strict';

//using express to create a server...
//basically imports express
const express = require('express');
const fs = require('fs');


//cors installed... allows browser to make request to remote server
//cors also added to dependencies
const cors = require('cors');

//creates our server
const app = express();

//applying cors
app.use(cors());

/*
//get function to retrieve data from our server. in this case, a str to say it's working
app.get('/', function (req, res) {
    res.send('this is working')
});
*/

//port 3001, with function to confirm that our server is running
app.listen(3001, function () {
    console.log('app is running on port 3001!');
});

//to serve static files from server (static files: html, css, js)
//create folder in current folder called "public"
//use following code... try this if ajax request doesnt work
//app.use(express.static(__dirname + '/public'));

//variable to hold airport data from txt file
let aptData = '';

//using the file system module in node.js to read airportData.txt file and to send its contents as a json string to our JS program so that our JS program can parse it into a an array of JS objects
fs.readFile('airportData.txt', function (err, data) {
    if (err) {
        console.log('error!!!');
    } return aptData = (data.toString());
})




//setHeader function equivalent in express??? ('content-type', 'text/html' or 'application/json')

//remember, the "/" is the url to the requested resource on the server. root here, could be "/profile", etc.
//with the path and the requests in express... basically they are if statements to say that "if" you go to this server url, do this, etc.
//example here is request to the root page in the server
app.get("/", (req, res) => {
    //it automatically does JSON.stringify()
    res.send(aptData);
});

//---methods...
//-get... to receive resource
//-post... to create a resource
//-put... to change state or update resource
//-delete... to remove a resource



//for now, we want the following structure to our app
// root/home screen --> res = this is working (our app UI) (GET)
//database update screen --> UI to update the airport DB (PUT)

//later, might want sign-in
//signin screen --> POST success/fail
//register --> POST user
//profile/userID --> Get user



/* Node.js and Express are licensed as follows:


Node.js is licensed for use as follows:

"""
Copyright Node.js contributors. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to
deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.
"""

Express is licensed as follows:

(The MIT License)

Copyright (c) 2009-2014 TJ Holowaychuk <tj@vision-media.ca>
Copyright (c) 2013-2014 Roman Shtylman <shtylman+expressjs@gmail.com>
Copyright (c) 2014-2015 Douglas Christopher Wilson <doug@somethingdoug.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


*/

