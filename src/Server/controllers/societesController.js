//methds must be optimized
const Societe = require("../models/Societe");

const getAllSocietes = (req, res) => {
    Societe.find({}, (err, societes) => {
        console.log(societes);
        if (err)
            res.status(500).send({error: err})
        else {
            if (societes.length){
                res.send(societes);
            } 
            else
                //liste vide
                {console.log("list vide");
                res.sendStatus(204)}
        }
    })
}

const getSocieteById = (req, res) => {
    Societe.find({_id: req.params.id.trim()}, (err, Societe) => {
        if (err)
            res.status(500).send({error: err})
        else {
            if (Societe) 
                res.send(Societe);
            else 
                res.status(404).send({error: "Societe Introuvable !"});
        }
    })
}

const createSociete = (req, res) => {
    const {Nom, Code, SUPAD} = req.body;
    console.log(req.body);
    Societe.create({ Nom, Code, SUPAD}, (err, societe)=>{
        if(err)
            res.status(500).send({error: err})
        else
            res.send(societe);
    });  
}

const updateSociete = (req, res) => {
    Societe.findOne({_id: req.params.id.trim()}, (findErr, Societe)=>{
        if(findErr)
            res.status(500).send({error: findErr});
        else {
            const { Nom, Code, SUPAD}= req.body;
            //possibility to check the fields (validation) before saving !!!!!!!!!!!!!!!!!!!!!!
            Societe.Nom = Nom;
            Societe.Code = Code;
            Societe.SUPAD = SUPAD;
            Societe.save()
                .then(modifiedSociete=>{
                    res.send(modifiedSociete)
                })
                .catch(modErr=>{
                    res.send(500).send({error: modErr});
                })
        }
    })    
}


const deleteSociete = (req, res) => {
    Societe.findOneAndRemove({_id: req.params.id.trim()})
        .then(Societe => {
            if (Societe) {               
                res.send(Societe);
            } else {
                res.status(404).send({error: "Societe Introuvable !"});
            }
        })
        .catch(error => {
            res.send(error);
        });
}

module.exports = {
    getAllSocietes,
    getSocieteById,
    createSociete,
    updateSociete,
    deleteSociete
}