const fs = require('fs')
 // reading and writing files


// Blocking Synchonus way
//  const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
//  console.log(textIn)


//  const textOut = `This is what we know abut the Avocado: ${textIn}.\n Created on ${Date.now()}`
//  fs.writeFileSync('./txt/output.txt', textOut)

//  console.log(textOut)


 //Async fs
 fs.readFile('./txt/start.txt', 'utf-8', (err, data) => {
    console.log(data)
 } )