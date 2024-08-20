const mongoose = require('mongoose');
// const autoIncrement = require('mongoose-sequence')('mongoose');
class Visiteur{
    constructor(numVisiteur, nom, nombreDeJour, tarifJournalier){
        this.numVisiteur = numVisiteur;
        this.nom = nom;
        this.nombreDeJour = nombreDeJour;
        this.tarifJournalier = tarifJournalier;
       
    }
}
if(mongoose){
    console.log("mongoose importers");
    // const autoIncrement = require("mongoose-sequence")(mongoose);
}else{
    console.log("mongoose non importers")
};
// Userchsema.plugin(autoIncrement);
module.exports = { Visiteur };
