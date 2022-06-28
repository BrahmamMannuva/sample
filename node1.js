let http = require('http')
let fs = require('fs')

let server = http.createServer((req,res)=>{
    if (req.url === '/user'){
        res.setHeader('Content-type','text/html')
        fs.readFile('./demo.html',(error,data)=>{
            res.write(data)
            res.end()
        })
    }else if (req.url === '/profile'){
        
            res.setHeader('Content-type','text/html')
            fs.readFile('./profile.html',(error,data)=>{
                res.write(data)
                res.end()
            })

    }else{
        res.setHeader('Content-type','text/html')
        fs.readFile('./error.html',(error,data)=>{
            res.write(data)
            res.end()
        })
    }

})
server.listen(3000)
console.log('Server has started')




//SERVING JSON DATA
/*let http = require('http')
let fs = require('fs')

let server = http.createServer((req,res)=>{
    res.setHeader('content-type','application/json')
    let student = {
        name:'venkat',
        marks:90,
        city:'Hyderabad'
    }
    res.write(JSON.stringify(student))
    res.end()

})
server.listen(3000,'127.0.0.1')
console.log('Server has started')*/



// SERVING HTML FILES
/*let http = require('http')
let fs = require('fs')

let server = http.createServer((req,res)=>{
    res.setHeader('content-type','text-html')
    fs.readFile('./demo.html',(error,data)=>{
        res.write(data)
        res.end()
    })
})
server.listen(3000,'127.0.0.1')
console.log('server has started')*/




// READ STREAM AND WRITE STREAM
/*let fs = require('fs')
let readStream = fs.createReadStream(__dirname+'/demo.txt')
let writeStream = fs.createWriteStream(__dirname+'/writestream.txt')

let chunk_counter = 0
readStream.on('data',(chunk)=>{
    console.log(chunk.toString())
    writeStream.write(chunk)
    chunk_counter++
    console.log('Number of chunks being read and written are : '+chunk_counter)
})*/
