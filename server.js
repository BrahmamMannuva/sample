



const fs = require('fs')
let readStream = fs.createReadStream(__dirname+'/demo.txt')
let writeStream = fs.createWriteStream(__dirname+'/writestream.txt')
let chunk_count = 0
readStream.on('data',(chunk)=>{
    console.log(chunk.toString())
    writeStream.write(chunk)
    chunk_count++
    console.log('Number of chunks - ' +chunk_count)
})





/*const http = require('http')
let fs = require('fs')

const server = http.createServer((req,res)=>{
    res.setHeader('Content-type','text-html')
    let readStream = fs.createReadStream(__dirname+'/profile.html')
    readStream.pipe(res)
})
server.listen(3000)
console.log('server has started')*/
