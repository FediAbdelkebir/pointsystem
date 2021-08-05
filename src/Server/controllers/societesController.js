//methds must be optimized
const Societe = require("../models/Societe");

const getAllSocietes = (req, res) => {
    Societe.find({}, (err, societes) => {
        console.log(societes);
        if (err)
            res.status(500).send({error: err})
        else {
            if (users.length){
                res.send(users);
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
    const {name, email, enrollnumber} = req.body;
    Societe.create({ name, email, enrollnumber }, (err, Societe)=>{
        if(err)
            res.status(500).send({error: err})
        else
            res.send(Societe);
    });  
}

const updateSociete = (req, res) => {
    Societe.findOne({_id: req.params.id.trim()}, (findErr, Societe)=>{
        if(findErr)
            res.status(500).send({error: findErr});
        else {
            const {name, email, enrollnumber} = req.body;
            //possibility to check the fields (validation) before saving !!!!!!!!!!!!!!!!!!!!!!
            Societe.name = name;
            Societe.email = email;
            Societe.enrollnumber = enrollnumber;
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