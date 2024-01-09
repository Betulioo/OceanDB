const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// Importamos el modelo videogame.models.js en este nuevo archivo.
const Card = require('../api/models/card.model');

const cards = [{
    "name": "Blue jellyfish",
    "description": "This jellyfish has many stinging tentacles. The four mouth arms are large with many wrinkles and ripples.",
    "img": "https://res.cloudinary.com/do20itlld/image/upload/v1704807152/Ocean/Cards/marine1_sgd9lt.png"
},{
    "name": "Blue Betta Fish",
    "description": "Bettas are anabantoids, which means they can breathe atmospheric air using a unique organ called the labyrinth. ",
    "img": "https://res.cloudinary.com/do20itlld/image/upload/v1704807153/Ocean/Cards/marine2_rpqxcl.png"
},{
    "name": "Lion's mane jellyfish",
    "description": "the bell of the Lion's Mane is divided into eight lobes, resembling an eight-pointed star. Each lobe contains about 70 to 150 tentacles,",
    "img": "https://res.cloudinary.com/do20itlld/image/upload/v1704807154/Ocean/Cards/marine3_bj1mll.png"
},{
    "name": "The green turtle",
    "description": "Green turtles use the earth’s magnetic field like an invisble map to navigate throughout their migrations. ",
    "img": "https://res.cloudinary.com/do20itlld/image/upload/v1704807155/Ocean/Cards/marine4_k1ty6v.png"
},{
    "name": "Cool Octopus",
    "description": "Octopuses are highly intelligent. Maze and problem-solving experiments have shown evidence of a memory system that can store both short- and long-term memory.",
    "img": "https://res.cloudinary.com/do20itlld/image/upload/v1704807156/Ocean/Cards/marine5_cx5gw8.png"
},{
    "name": "Alpheidae shrimp",
    "description": "distinctive for its disproportionately large claw, larger than half the shrimp's body a pistol-like feature made of two parts. A joint allows the 'hammer' part to move backward into a right-angled position. When released, it snaps into the other part of the claw, emitting an enormously powerful wave of bubbles capable of stunning larger fish and breaking small glass jars.",
    "img": "https://res.cloudinary.com/do20itlld/image/upload/v1704807157/Ocean/Cards/marine6_aaq14d.png"
},{
    "name": "White Platinum Crown Tail Betta",
    "description": "Wild Betta fish are hardy and eat almost any animal small enough for these small fish to consume,",
    "img": "https://res.cloudinary.com/do20itlld/image/upload/v1704807158/Ocean/Cards/marine7_ucwwki.png"
},{
    "name": "coral reef snakes",
    "description": "The nostrils have valves consisting of a specialized spongy tissue to exclude water, and the windpipe can be drawn up to where the short nasal passage opens into the roof of the mouth. This is an important adaptation for an animal that must surface to breathe, but may have its head partially submerged when doing so.",
    "img": "https://res.cloudinary.com/do20itlld/image/upload/v1704807159/Ocean/Cards/marine8_dkybmi.png"
},{
    "name": "Peacock Cichlid",
    "description": "The Peacock’s coloring varies from red, yellow, blue, orange, and gold. To add to their glittering metallic glory, the fish’s scales are iridescent!",
    "img": "hhttps://res.cloudinary.com/do20itlld/image/upload/v1704807160/Ocean/Cards/marine9_evhkyw.png"
},{
    "name": "Peters's elephantnose fish",
    "description": "he elephant nose fish is weakly electric, meaning that it can detect moving prey and worms in the substrate by generating brief electric pulses with the electric organ in its tail. The electroreceptors around its body are sensitive enough to detect the different distortions of the electric field made by objects that conduct or resist electricity.",
    "img": "https://res.cloudinary.com/do20itlld/image/upload/v1704807161/Ocean/Cards/marine10_ujnyvb.png"
},{
    "name": "Angelfish",
    "description": "Angelfish are ambush predators and prey on small fish and macroinvertebrates.",
    "img": "https://res.cloudinary.com/do20itlld/image/upload/v1704807162/Ocean/Cards/marine11_dkhh0e.png"
},{
    "name": "Moray eel",
    "description": " Their jaws are wide, framing a protruding snout. Most possess large teeth used to tear flesh or grasp slippery prey.",
    "img": "https://res.cloudinary.com/do20itlld/image/upload/v1704807163/Ocean/Cards/marine12_pecpzn.png"
},

 ];

// En este caso, nos conectaremos de nuevo a nuestra base de datos
// pero nos desconectaremos tras insertar los documentos

mongoose.connect(process.env.DB_URL);

mongoose.connect(process.env.DB_URL, { // aqui va el link de mongodb

    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
		// Utilizando Videogame.find() obtendremos un array con todos los juegos de la db
    const allCards = await Card.find();
		
		// Si existen juegos previamente, dropearemos la colección
    if (allCards.length) {
      await Card.collection.drop(); //La función drop borra la colección
      console.log('Drop database')
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
		// Una vez vaciada la db de los juegos, usaremos el array videogames
		// para llenar nuestra base de datos con todas los videojuegos.
		await Card.insertMany(cards);
        console.log('DatabaseCreated')
	})
  .catch((err) => console.log(`Error creating data: ${err}`))
	// Por último nos desconectaremos de la DB.
  .finally(() => mongoose.disconnect());
