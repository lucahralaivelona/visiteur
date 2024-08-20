const express = require("express");
const {ajouterVisiteur, getAllVisiteur, getVisiteur, modifierVisiteur, supprimerVisiteur}=require('../controller/visiteur');
const router = express.Router();

router.route("/visiteurs").post(ajouterVisiteur);
router.route("/visiteurs").get(getAllVisiteur);
router.route("/visiteurs/:id").get(getVisiteur);
router.route("/visiteurs/:id").put(modifierVisiteur);
router.route("/visiteurs/:id").delete(supprimerVisiteur);


module.exports = router;