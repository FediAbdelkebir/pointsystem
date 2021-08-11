//methds must be optimized

const Tache = require('../models/Tache');
const axios = require('axios');

const getAllTaches = (req, res) => {
    Tache.find({}, (err, taches) => {
        if (err)
            res.status(500).send({error: err})
        else {
            if (taches.length){
                console.log(taches);
                res.send(taches);
            }
            else
                //liste vide
                res.sendStatus(204)
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
    const {Nom, Code, Description,Points,Responsable,Etat} = req.body;
    Tache.create({Nom, Code, Description,Points,Responsable,Etat}, (err, tache)=>{
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
            const {Nom, Code, Description,Points,Responsable,Etat} = req.body;
            //possibility to check the fields (validation) before saving !!!!!!!!!!!!!!!!!!!!!!
            tache.Nom = Nom;
            tache.Code = Code;
            tache.Description = Description;
            tache.Points=Points;
            tache.Responsable=Responsable;
            tache.Etat=Etat;
            //save using tache not Tache (cz tache is the modified var and Tache is the model name) !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            tache.save()
                .then(modifiedTache=>{
                    res.send(modifiedTache)
                })
                .catch(modErr=>{
                    res.send(500).send({error: modErr});
                })
        }
    })    
}
function Create(iduser){
    axios.post("http://localhost:4000/userpoints/createuserpoints", {
        iduser: iduser,
        points:0
    }).then((res) => {
                console.log(res.data);
              }).catch((err) => {
                console.error(err);
              });
}
const Valider = (req, res) => {
    var NewUserPoints=0;
    var OldUserPoints=0;
    var existuser =false;
    var Total = 0;
    Tache.findOne({_id: req.params.id.trim()}, (findErr, tache)=>{
        const {iduser} = req.body;
if(findErr){res.status(500).send({error: findErr});}
        else {
            tache.Etat="Validé";
            NewUserPoints=tache.Points;
            tache.save().then(modifiedUser=>{ res.send(modifiedUser)}).catch(modErr=>{ res.send(500).send({error: modErr});})
                //9bal l update nchoufou fama user fi l userpoints wwala le
                try{axios.get("http://localhost:4000/userpoints/finduser/"+iduser).then(res=>{      
                     existuser=true
                     res.data.map(userpoints=>{
                        OldUserPoints=userpoints.points;
                        Total=NewUserPoints+OldUserPoints;
                        console.log("Tache Points: "+Total)
               
                //tasna3 user ken ma famech
if(existuser==false){try{Create(iduser)}catch(e){}}
                 //9bal l update nchoufou fama user fi l userpoints wwala le

                        axios.put("http://localhost:4000/userpoints/updateuserpoints/"+iduser,{
                    points: Total
                }).then((res) => {
                  console.log(res.data);
                }).catch((err) => {
                  console.error(err);
                });
                    })}).catch(err=>console.log)
                }catch(e){console.log("Cant find user");}
 
                 console.log("Tache Points b3d l ction: "+Total)
                
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
    deleteTache,
    Valider
}