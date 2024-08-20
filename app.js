const express = require('express');
const {connecter}=require('./bd/connect');
const routeVisiteur = require('./routes/visiteur');
const cors = require('cors');
const app = express();
require('dotenv').config(); // Charger les variables d'environnement

app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use("/api/v1", routeVisiteur);
app.use(cors());
const PORT = process.env.PORT || 3000; // Utiliser la variable d'environnement PORT
const MONGO_URI = process.env.MONGO_URI; // Utiliser la variable d'environnement MONGO_URI

connecter(MONGO_URI, (erreur) => {
  if (erreur) {
    console.log("erreur lors de la connexion avec la base de données");
    process.exit(-1);
    app.listen(3000);
    console.log("connection fait et attente de la requette au port 3000");
  } else {
    console.log("connexion réussie");
  }
});
app.listen(PORT, () => {
console.log(`Server is running on http://localhost:${PORT}`);
 });
