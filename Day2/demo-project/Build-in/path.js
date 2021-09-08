const path = require('path')
const fs = require('fs')

console.log(path.sep)

const FilePath = path.join('./subfolder/inside-subfolder/text.txt') 
console.log(FilePath)

const base = path.basename(FilePath)
console.log(base)

const absolute = path.resolve(FilePath)
console.log(absolute)

const rell = fs.readFileSync(FilePath,'utf8',(err,rel) => {
    // err ? console.log("err") : console.log("rel")
})

console.log(rell)