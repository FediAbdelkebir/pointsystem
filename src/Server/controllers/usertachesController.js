//methds must be optimized
const usertaches = require("../models/usertaches");

const getAllUserTaches = (req, res) => {
    usertaches.find({}, (err, usertaches) => {
        console.log(usertaches);
        if (err)
            res.status(500).send({error: err})
        else {
            if (usertaches.length){
                res.send(usertaches);
            } 
            else
                //liste vide
                {console.log("list vide");
                res.sendStatus(204)}
        }
    })
}

const getUserTachesById = (req, res) => {
    usertaches.find({_id: req.params.id.trim()}, (err, usertaches) => {
        if (err)
            res.status(500).send({error: err})
        else {
            if (usertaches) 
                res.send(usertaches);
            else 
                res.status(404).send({error: "Utilisateur Introuvable !"});
        }
    })
}

const createUserTaches = (req, res) => {
    const {name, email, enrollnumber} = req.body;
    usertaches.create({ name, email, enrollnumber }, (err, usertaches)=>{
        if(err)
            res.status(500).send({error: err})
        else
            res.send(usertaches);
    });  
}

const updateUserTaches = (req, res) => {
    usertaches.findOne({_id: req.params.id.trim()}, (findErr, usertaches)=>{
        if(findErr)
            res.status(500).send({error: findErr});
        else {
            const {idtache, iduser} = req.body;
            //possibility to check the fields (validation) before saving !!!!!!!!!!!!!!!!!!!!!!
            usertaches.idtache = idtache;
            usertaches.iduser = iduser;
            usertaches.save()
                .then(modifiedUser=>{
                    res.send(modifiedUser)
                })
                .catch(modErr=>{
                    res.send(500).send({error: modErr});
                })
        }
    })    
}


const deleteUserTaches = (req, res) => {
    usertaches.findOneAndRemove({_id: req.params.id.trim()})
        .then(usertaches => {
            if (usertaches) {               
                res.send(usertaches);
            } else {
                res.status(404).send({error: "UserTaches Introuvable !"});
            }
        })
        .catch(error => {
            res.send(error);
        });
}

module.exports = {
    getAllUserTaches,
    getUserTachesById,
    createUserTaches,
    updateUserTaches,
    deleteUserTaches
}