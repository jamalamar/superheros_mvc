
//Using FileSync (not optimal)
//-----------------------------------------------------------
// let filestream = require('fs')

// let jsonFile = filestream.readFileSync('superheros.json')
// 	let superheros = JSON.parse(jsonFile)
// 	console.log(superheros.join(", "))
// })
//-----------------------------------------------------------



//Using readFile (needs callback
//-----------------------------------------------------------
// let filestream = require('fs')

// let jsonFile = filestream.readFile('superheros.json', (error, data)=>{
// 	let superheros = JSON.parse(data)
// 	console.log(superheros.join(", "))
// })
//-----------------------------------------------------------



//Using ReadStream
//-----------------------------------------------------------
let express = require('express')
let filestream = require('fs')

let app = express()

app.get('/', (request, response)=> {
  let jsonStream = filestream.createReadStream('superheros.json')

  let json = ""
  jsonStream.on('readable', ()=> {
    let jsonBuffer = jsonStream.read()
    if(jsonBuffer != null) {
      json += jsonBuffer.toString()
    }
  })

  jsonStream.on('end', ()=> {
    response.send(JSON.parse(json).join(", "))
  })

})

const PORT = 5000
app.listen(PORT, ()=> {
  console.log("Ready! at port " + PORT)
})
//-----------------------------------------------------------




