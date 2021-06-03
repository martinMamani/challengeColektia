module.exports = (sequelize, type) => {
  return sequelize.define("movie", {
    title: type.STRING,
    year: type.STRING,
    photo: type.STRING,
  });
};
