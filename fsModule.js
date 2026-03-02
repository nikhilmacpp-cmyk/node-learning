const fs = require('fs');

fs.readFile('file.txt','utf8',(err,data)=>{
    console.log('data load 1')
})
  console.log('data load 2')
const filesync = fs.readFileSync('file.txt')
  console.log('data load 4',filesync)