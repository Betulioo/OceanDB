const express = require("express");
const { connectDb } = require("./src/utils/database");
const routesCard = require("./src/api/routes/card.routes");
const routesDeck = require("./src/api/routes/deck.routes");
const routesCollection = require("./src/api/routes/collection.routes");
const routesUser = require("./src/api/routes/user.routes");
const routesScore = require("./src/api/routes/score.routes");
const { getCollection } = require("./src/api/controllers/collection.controllers")
const env = require("dotenv");
const cors = require("cors");
const cloudinary = require("cloudinary").v2;
const server = express();

env.config();
          
cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET
});

server.use(cors());

//En este paso añadimos cors y definimos las direcciones que van a tener permiso para utilizar nuestra API. De momento en local:


server.use(express.json());
connectDb();
server.use("/", getCollection);
server.use("/card", routesCard);
server.use("/deck", routesDeck);

server.use("/collection", routesCollection);

server.use("/user", routesUser);
server.use("/score", routesScore);



server.disable("x-powered-by");

const PORT = 5000;
server.listen(PORT, () => {
  console.log("Escuchando por el puerto " + PORT);
});
