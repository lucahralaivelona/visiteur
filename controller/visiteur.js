const {ObjectId} =require("mongodb");
// const {Object}=require("mongodb");
const client = require("../bd/connect");
const {Visiteur} = require("../model/visiteur");

const ajouterVisiteur = async (req, res) => {
    try {
        
        let visiteur = new Visiteur(req.body.numVisiteur, req.body.nom, req.body.nombreDeJour, req.body.tarifJournalier)
        let result = await client.bd().collection("visiteur").insertOne(visiteur);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
        
    }
};
const getVisiteur = async (req, res) => {
    try {
        // let id = new Object(req.params.id);
        let id = req.params.id;
       let cursor = client.bd().collection("visiteur").find({numVisiteur : id});
       let result = await cursor.toArray();
       if(result.length > 0) {
        res.status(200).json(result);
       }else {
        res.status(200).json({msg : "l'utilisateur n'existe pas" });
       }
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
        
    }

};
const getAllVisiteur = async (req, res) => {
    try {
       let cursor = client.bd().collection("visiteur").find();
       let result = await cursor.toArray();
       if(result.length > 0) {
        res.status(200).json(result);
       }else {
        res.status(204).json({msg : "aucun utilisateur trouver"})
       }
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
        
    }

};
const modifierVisiteur = async (req, res) => {
    try {
        let id = new ObjectId(req.params.id);
        let nNom = req.body.nom;
        let nNombreDeJour = req.body.nombreDeJour;
        let nTarifJournalier = req.body.tarifJournalier;
        
        let result = await client.bd().collection("visiteur").updateOne({_id : id}, {$set: {nom : nNom, nombreDeJour : nNombreDeJour, tarifJournalier: nTarifJournalier}});
        res.status(200).json(result);
        if (result){
            console.log("succes");
        }
        else{console.log("erreur");};
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
        
        
    }
};
const supprimerVisiteur = async (req, res) => {
    try {
        // let id = req.params.id;
        let id = new ObjectId (req.params.id);
       
        let result = await client.bd().collection("visiteur").deleteOne({_id: id});
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
        
        
    }
}
module.exports = {ajouterVisiteur , getAllVisiteur, getVisiteur, modifierVisiteur, supprimerVisiteur}; 