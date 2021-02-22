const fs = require('fs')
 // reading and writing files

 const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
 console.log(textIn)


 const textOut = `This is what we know abut the Avocado: ${textIn}.\n Created on ${Date.now()}`
 fs.writeFileSync('./txt/output.txt', textOut)

 console.log(textOut)