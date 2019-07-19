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
      console.log("Recup info spectacle ")
  });
});

app.get('/artists', (req, res) => {
  connection.query('SELECT * FROM artists WHERE Id > 6', (err, results) => {
    if (err) {
      res.status(500).send('error');
    }
    else
      res.json(results);
      console.log("Recup Artist ")
  });
});

app.delete('/show/:id', (req, res) => {

  // récupération des données envoyées
  const idShow = req.params.id;

  // connexion à la base de données, et suppression de l'employé
  connection.query('DELETE FROM spectacle WHERE id = ?', [idShow], err => {

    if (err) {
      // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
      console.log(err);
      res.status(500).send("Erreur lors de la suppression d'un employé");
    } else {

      // Si tout s'est bien passé, on envoie un statut "ok".
      res.sendStatus(200);
    }
  });

});

app.post('/show', (req, response) => {

  const formData = req.body;

  connection.query('INSERT INTO spectacle SET ?', formData, (err,res ) => {

    if (err) {
      console.log(err);
      response.status(500).send("Erreur lors de la sauvegarde d'une chanson");
    } else {
      response.sendStatus(200);
    }
  });
});

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});
