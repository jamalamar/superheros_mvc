
let express = require('express')
let app = express()

app.get('/', (req, res)=> {
	res.send("Here to save the day...")
})

app.listen(3000)