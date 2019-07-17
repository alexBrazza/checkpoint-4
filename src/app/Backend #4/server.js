let express = require('express')
let cors = require("cors")
let bodyParser = require("body-parser")
let app = express()
let port  = process.env.PORT || 3000

app.use(cors())
app.use(
    bodyParser.urlencoded({extended:false})
)
app.use(bodyParser.json())

let Users = require("./routes/Users")
app.use("/users", Users)

app.listen(port, function() {
    console.log("Server is running on port " + port)
})