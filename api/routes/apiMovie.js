const router = require("express").Router();
const fetch = require("node-fetch");
const { Movie } = require("./../db");

router.get("/:name", async (req, res, next) => {
  try {
    const moviesDatabase = await Movie.findAll();
    if (moviesDatabase.length == 0) {
      const name = req.params.name;
      const data = await fetch(
        `http://www.omdbapi.com/?apikey=20dac387&s=${name}`
      );
      const pelis = await data.json();
      const movies = await pelis.Search.map((m) => ({
        id: m.imdbID,
        title: m.Title,
        year: m.Year,
        photo: m.Poster,
      }));
      await movies.map((mo) => {
        Movie.findOrCreate({
          where: {
            id: mo.id,
            title: mo.title,
            year: mo.year,
            photo: mo.photo,
          },
        });
      });
      res.json(movies);
    } else {
      res.json(moviesDatabase);
    }
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  const newMovie = await Movie.create(req.body);
  res.json(newMovie);
});

router.put("/:id", async (req, res) => {
  await Movie.update(req.body, {
    where: { id: req.params.id },
  });
  res.send("pelicula modificada");
});
router.delete("/:id", async (req, res) => {
  await Movie.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.send("Se elimino la pelicula con id " + req.params.id);
});

module.exports = router;
