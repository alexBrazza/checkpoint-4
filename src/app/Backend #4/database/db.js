const Sequelize = require("sequelize")
const db = {}
const sequelize = new Sequelize('login', 'root', 'brazzi', {
    host: "localhost",
    dialect: "mysql",
    operatorAliases: false,


    pool:{
        max: 5,
        min:  0,
        acquire:30000,
        idle: 10000
    }
})
sequelize
 .authenticate()
 .then(() => console.log('Connection has been established successfully.'))
 .catch(err => console.error('Unable to connect to the database:', err));
db.sequelize = sequelize
db.Sequelize=sequelize

module.exports = db

