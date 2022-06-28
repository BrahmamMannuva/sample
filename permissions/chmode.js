const fs = require('fs')
/*console.log('granting read, write and execute access to user');

fs.chmodSync('permissions/chmode.js',0o777)

fs.chmod('permissions/permission.txt',0o777,()=>{
    console.log('file permission changed')
    
    try {
        console.log(fs.readFileSync('permissions/permission.txt','utf8'))
        fs.writeFile('permissions/permission.txt','Data write on permission text file',()=>{
    
        })  
    }
    catch (err) {
        console.log(err)
    }
})*/


const content = fs.readFileSync('permissions/permit.txt','utf8')
fs.open('permissions/permission.txt','w',function(err){
    if (err) throw err
    fs.writeFile('permissions/permission.txt',content,()=>{
        console.log('content written on permission file')
    })
    console.log('file created for writtable')
})