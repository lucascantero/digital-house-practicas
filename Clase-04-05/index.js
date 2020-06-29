// Servidor

const http = require("http");
const fs = require("fs");
//const movie = require("./movie");
var movies = JSON.parse(require("fs").readFileSync("./movie.json", "utf8"));
//console.log(movies.title.sort());
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });

    // Route System
    switch (req.url) {
      // Home
      case "/":
        let titulo = movies.forEach(movie);
        cantidad = movies.length;
        res.write(
          "​Bienvenidos a DH Movies el mejor sitio para encontrar las mejores películas, incluso mucho mejor que Netflix, Cuevana y PopCorn​."
        );
        res.write(`Cantidad de peliculas${cantidad}`);
        res.write(movies.title);
        res.end();
        break;
      // En cartelera
      case "/en-cartelera":
        res.end("En cartelera");
        break;
      case "/mas-votadas":
        res.end("Más Votadas");
        break;
      case "/sucursales":
        res.end("Sucursales");
        break;
      case "/contacto":
        res.end("Contacto");
        break;
      case "/preguntas-frecuentes":
        res.end("Preguntas Frecuentes");
        break;
      default:
        res.end("404 not found");
    }
  })
  .listen(3030, "localhost", () => console.log("Server running in 3030 port"));
