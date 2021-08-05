//methds must be optimized
const Tache = require('../models/Tache');

const getAllTaches = (req, res) => {
    console.log("wslt");
    Tache.find({}, (err, taches) => {
        console.log(taches);
        if (err)
            res.status(500).send({error: err})
        else {
            if (taches.length){
                res.send(taches);
            }
            else
                //liste vide
                {console.log("list vide");
                res.sendStatus(204)}
        }
    })
}

const getTacheById = (req, res) => {
    Tache.find({_id: req.params.id.trim()}, (err, tache) => {
        if (err)
            res.status(500).send({error: err})
        else {
            if (tache) 
                res.send(tache);
            else 
                res.status(404).send({error: "Tache Introuvable !"});
        }
    })
}

const createTache = (req, res) => {
    const {name, email, enrollnumber} = req.body;
    Tache.create({ name, email, enrollnumber }, (err, tache)=>{
        if(err)
            res.status(500).send({error: err})
        else
            res.send(tache);
    });  
}

const updateTache = (req, res) => {
    Tache.findOne({_id: req.params.id.trim()}, (findErr, tache)=>{
        if(findErr)
            res.status(500).send({error: findErr});
        else {
            const {name, email, enrollnumber} = req.body;
            //possibility to check the fields (validation) before saving !!!!!!!!!!!!!!!!!!!!!!
            tache.name = name;
            tache.email = email;
            tache.enrollnumber = enrollnumber;
            Tache.save()
                .then(modifiedTache=>{
                    res.send(modifiedTache)
                })
                .catch(modErr=>{
                    res.send(500).send({error: modErr});
                })
        }
    })    
}


const deleteTache = (req, res) => {
    Tache.findOneAndRemove({_id: req.params.id.trim()})
        .then(tache => {
            if (tache) {               
                res.send(tache);
            } else {
                res.status(404).send({error: "Tache Introuvable !"});
            }
        })
        .catch(error => {
            res.send(error);
        });
}

module.exports = {
    getAllTaches,
    getTacheById,
    createTache,
    updateTache,
    deleteTache
}