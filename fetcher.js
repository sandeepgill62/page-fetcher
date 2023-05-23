
//request module
const request = require('request');
//fs module
const fs = require('fs');


//connection function to get from URL and call the callback function to write the data
const connection = (functionToRunWhenReadData) => {
  request('http://www.example.edu/', (error, response, body) => {
    if (!error) {
      //callback function
      functionToRunWhenReadData(body.length);
    }
    else {
      console.log("ERROR: URL is not valid");
    }
  });
}

//callback function implementation
const writeIntoFile = (bodyLength) => {
  const filePath = './index.html';
  try {
    //write data into file
    fs.writeFileSync(filePath, bodyLength);
    //print mesage on screen
    console.log(`Downloaded and saved ${bodyLength} bytes to ./index.html`);
  } catch (err) {
    console.error("ERROR: File path is not valid");
  }
}

//call connection function
connection(writeIntoFile);
