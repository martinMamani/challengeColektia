const Sequelize = require("sequelize");

const modelMovie = require("./models/movies");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize("peliculas", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

const Movie = modelMovie(sequelize, Sequelize);

sequelize.sync({ force: false }).then(() => {
  console.log("Se crearon las tablas");
});

module.exports = {
  Movie,
};
