//methds must be optimized
const userpoints = require("../models/UserPoints");

const getAllUserPoints = (req, res) => {
    userpoints.find({}, (err, userpoints) => {
        console.log(userpoints);
        if (err)
            res.status(500).send({error: err})
        else {
            if (userpoints.length){
                res.send(userpoints);
            } 
            else
                //liste vide
                {console.log("list vide");
                res.sendStatus(204)}
        }
    })
}
const getUserPoints = (req, res) => {
    userpoints.find({points:req.params.points.trim()}, (err, userpoints) => {
        console.log(userpoints);
        if (err)
            res.status(500).send({error: err})
        else {
            if (userpoints.length){
                res.send(userpoints);
            } 
            else
                //liste vide
                {console.log("list vide");
                res.sendStatus(204)}
        }
    })
}

const getUserPointsById = (req, res) => {
    
    userpoints.find({_id: req.params.id.trim()}, (err, userpoints) => {
        if (err)
            res.status(500).send({error: err})
        else {
            if (userpoints) 
                res.send(userpoints);
            else 
                res.status(404).send({error: "Utilisateur Introuvable !"});
        }
    })
}

const createUserPoints = (req, res) => {
    console.log("wslt");
    const {iduser, points} = req.body;
    userpoints.create({ iduser, points }, (err, userpoints)=>{
        if(err)
            res.status(500).send({error: err})
        else
            res.send(userpoints);
    });  
}

const updateUserPoints = (req, res) => {
    userpoints.findOne({_id: req.params.id.trim()}, (findErr, userpoints)=>{
        if(findErr)
            res.status(500).send({error: findErr});
        else {
            const {iduser, points} = req.body;
            //possibility to check the fields (validation) before saving !!!!!!!!!!!!!!!!!!!!!!
            userpoints.iduser = iduser;
            userpoints.points = points;
            userpoints.save()
                .then(modifiedUser=>{
                    res.send(modifiedUser)
                })
                .catch(modErr=>{
                    res.send(500).send({error: modErr});
                })
        }
    })    
}



const deleteUserPoints = (req, res) => {
    userpoints.findOneAndRemove({_id: req.params.id.trim()})
        .then(userpoints => {
            if (userpoints) {               
                res.send(userpoints);
            } else {
                res.status(404).send({error: "UserPoints Introuvable !"});
            }
        })
        .catch(error => {
            res.send(error);
        });
}
const deletePoints = (req, res) => {
    console.log("DeleteTaches")
    userpoints.findOneAndRemove({_id: req.params.iduser.trim(),points: req.params.points.trim()})
        .then(userpoints => {
            if (userpoints) {               
                res.send(userpoints);
            } else {
                res.status(404).send({error: "UserPoints Introuvable !"});
            }
        })
        .catch(error => {
            res.send(error);
        });
}

module.exports = {
    getAllUserPoints,
    getUserPointsById,
    getUserPoints,
    createUserPoints,
    updateUserPoints,
    deleteUserPoints,
    deletePoints
}