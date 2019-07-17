let express = require('express')
let cors = require("cors")
const connection = require('./conf');
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

app.get('/spectacle', (req, res) => {
  connection.query('SELECT * FROM spectacle', (err, results) => {
    if (err) {
      res.status(500).send('error');
    }
    else
      res.json(results);
      console.log("ça marche ")
  });
});


app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});
