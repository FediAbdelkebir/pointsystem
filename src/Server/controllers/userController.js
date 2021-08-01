const User = require("../models/User");

const getAllUsers = (req, res) => {
    User.find({},null,{sort: {createdAt:-1}}, (err, users) => {
        if (err)
            res.status(500).send({error: err})
        else {
            if (users)
                res.send(users);
            else
                //liste vide
                res.status(500).send({error: "Users list is empty !"})
        }
    })
}

const getUserById = (req, res) => {
    User.find({_id: req.params.id.trim()}, (err, user) => {
        if (err)
            res.status(500).send({error: err})
        else {
            if (user) 
                res.send(user);
            else 
                res.status(404).send({error: "Utilisateur Introuvable !"});
        }
    })
}

const createUser = (req, res) => {
    const {name, email, enrollnumber} = req.body;
    User.create({ name, email, enrollnumber }, (err, user)=>{
        if(err)
            res.status(500).send({error: err})
        else
            res.send(user);
    });  
}

const updateUser = (req, res) => {
    User.findOne({_id: req.params.id.trim()}, (findErr, user)=>{
        if(findError)
            res.status(500).send({error: findErr});
        else {
            const {name, email, enrollnumber} = req.body;
            //possibility to check the fields (validation) before saving !!!!!!!!!!!!!!!!!!!!!!
            user.name = name;
            user.email = email;
            user.enrollnumber = enrollnumber;
            User.save()
                .then(modifiedUser=>{
                    res.send(modifiedUser)
                })
                .catch(modErr=>{
                    res.send(500).send({error: modErr});
                })
        }
    })    
}


const deleteUser = (req, res) => {
    User.findOneAndRemove({_id: req.params.id.trim()})
        .then(result => {
            if (result) {               
                res.send(user);
            } else {
                res.status(404).send({error: "Utilisateur Introuvable !"});
            }
        })
        .catch(error => {
            res.send(error);
        });
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}