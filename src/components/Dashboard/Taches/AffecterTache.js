import React, { useState, useEffect } from 'react';
import axios from "axios";
import '../../vendor/bootstrap-select/dist/css/bootstrap-select.min.css';
import '../../css/style.css';
import SideBar from '../SideBar';
import Swal from "sweetalert2";

export default function AjouterTache() {
    const [isLoading, setIsLoading] = useState(true);
    const [users,setUsers]=useState([]);
    const [taches,setTaches]=useState([]);
    const [usertaches,setUserTaches]=useState([]);
    const [UT,setUT]=useState([]);

    useEffect(()=>{
        axios.get("http://localhost:4000/taches/")
        .then(res=>{
            console.log(res);
            setTaches(res.data);
            setIsLoading(false);
        })
        .catch(err=>console.log)
    }, []);

    useEffect(()=>{
        axios.get("http://localhost:4000/users")
        .then(res=>{
            setUsers(res.data);
            setIsLoading(false);
        })
        .catch(err=>console.log)
    }, []);

function handleajout(idtache,iduser){
    Swal.fire({
        title: "Vous etez sur?",
        text: "Veuillez Vérifier vos besoin avant de envoyé ",
        icon: "warning",
        showDenyButton: true,
        confirmButtonText: `Ajouter`,
        denyButtonText: `Non`,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Success", "Votre tache a été créé :) ", "success");
          console.log(idtache,iduser);
          axios
            .post("http://localhost:4000/usertaches/createusertaches", {
              idtache: idtache,
              iduser: iduser,
            })
            .then((res) => {
              console.log(res.data);
            })
            .catch((err) => {
              Swal.fire("Ooops", "Une Erreur au niveau de l'ajout' ", "error");
              console.error(err);
            });
        } else {
          Swal.fire("Annulé", "Vous Avez Annulé l'ajout d'une tache.", "error");
        }
      });
}
function handledelete(idtache,iduser){
  Swal.fire({
      title: "Vous etez sur?",
      text: "Veuillez Vérifier vos besoin avant de envoyé ",
      icon: "warning",
      showDenyButton: true,
      confirmButtonText: `Oui, Supprimer`,
      denyButtonText: `Non`,
    }).then((result) => {
      if (result.isConfirmed) {
        
        console.log(idtache,iduser);
        axios
          .delete("http://localhost:4000/usertaches/deleteusertaches/"+idtache+"/"+iduser)
          .then((res) => {
            Swal.fire("Success", "Vous avez supprimer cette tache :) ", "success");
            console.log(res.data);
          })
          .catch((err) => {
            Swal.fire("Oops", "Une Erreur au niveau de la suppresion", "error");
            console.error(err);
          });
      } else {
        Swal.fire("Annulé", "Vous Avez Annulé la Suppresion.", "error");
      }
    });
}


function Ajouter(iduser){
let idtache="";

const ValueList=taches.reduce((a, c) => {
  a[c._id] = c.Nom
  return a
 }, {});
    axios.get("http://localhost:4000/usertaches/"+iduser)
        .then(res=>{
            console.log(res);
            setUserTaches(res.data);
            setIsLoading(false);
        })
        .catch(err=>console.log)

Swal.fire({
        title: 'Ajouter Une Tache',
        input: 'select',
        inputOptions: {ValueList},
        inputPlaceholder: 'Selectioner une tache',
        showDenyButton: true,
        confirmButtonText: `Ajouter`,
        denyButtonText: `Non`,
        inputValidator: function (value) {
          idtache=value;
        }
      }).then((result) => {
        if (result.isConfirmed) {
          handleajout(idtache,iduser);
        } else {

          Swal.fire("Annulé", "Vous Avez Annulé ", "error");
        }
      });
}
function Supprimer(iduser){
  let idtache="";
  let ValueList="";
    axios.get("http://localhost:4000/usertaches/listtaches/"+iduser)
    .then(res=>{
        setUT(res.data);
        setIsLoading(false);
    })
    .catch(err=>console.log)
if (UT.length>0){
   ValueList=UT.reduce((a, c) => {
    a[c._id] = taches.find((tache)=>{
      if(tache._id == c.idtache){
        return tache.Nom;
      }
    })
    return a
   }, {});
}
    Swal.fire({
            title: 'Supprimer Une Tache',
            input: 'select',
            inputOptions: {ValueList},
            inputPlaceholder: 'Selectioner une tache a supprimer',
            showDenyButton: true,
            confirmButtonText: `Supprimer`,
            denyButtonText: `Non`,
            inputValidator: (value) => {
              idtache=value;
            }
          }).then((result) => {
            if (result.isConfirmed) {
              handledelete(idtache,iduser);
            }else{
                Swal.fire("Vous Avez Annuler");
            }
          });
    }

    function handleValider(idtache,iduser){
      Swal.fire({
          title: "Vous etez sur?",
          text: "Veuillez Vérifier vos besoin avant de envoyé ",
          icon: "warning",
          showDenyButton: true,
          confirmButtonText: `Oui, Valider`,
          denyButtonText: `Non`,
        }).then((result) => {
          if (result.isConfirmed) {
            console.log(idtache);
            axios
              .put("http://localhost:4000/taches/ValiderTache/"+idtache,{iduser:iduser})
              .then((res) => {
                Swal.fire("Success", "Vous avez valider cette tache :) ", "success");
                console.log(res.data);
              })
              .catch((err) => {
                Swal.fire("Oops", "Une Erreur au niveau de la validation", "error");
                console.error(err);
              });
          } else {
            Swal.fire("Annulé", "Vous Avez Annulé la validation.", "error");
          }
        });
    }
    function Valider(iduser){
      let idtache="";
      let ValueList="";
        axios.get("http://localhost:4000/usertaches/listtaches/"+iduser)
        .then(res=>{
            setUT(res.data);
            setIsLoading(false);
        })
        .catch(err=>console.log)
    if (UT.length>0){
       ValueList=UT.reduce((a, c) => {
        a[c.idtache] = taches.find((tache)=>{
          if(tache._id == c.idtache){
            return tache.Nom;
          }
        })
        return a
       }, {});
    }
        Swal.fire({
                title: 'Valider Une Tache',
                input: 'select',
                inputOptions: {ValueList},
                inputPlaceholder: 'Selectioner une tache a Valider',
                showDenyButton: true,
                confirmButtonText: `Valider`,
                denyButtonText: `Non`,
                inputValidator: (value) => {
                  idtache=value;
                }
              }).then((result) => {
                if (result.isConfirmed) {
                  handleValider(idtache,iduser);
                }else{
                    Swal.fire("Vous Avez Annuler la Validation");
                }
              });
        }

    const UsersTaches = isLoading ? (
        <h3>Loading Users...</h3>
      ) : users.length ? (
        users.map((user) => {
          return (
            <div className="card col-3" key={user._id}>
                <div className="card-body text-center ai-icon text-primary">
                <img src="https://cdn.discordapp.com/attachments/475963741616472074/872798593101225984/IMG_20210617_021024_482.jpg"/>
                    <h4 className="my-2">{user.Nom}</h4>
                    
                    <a href="javascript:void(0);" className="btn btn-rounded  my-1 btn-sm btn-danger px-4" onClick={(e) =>Supprimer(user._id)}>Supprimer <span className="btn-icon-left text-danger"><i className="fa fa-minus-square"></i></span>
                    </a>&nbsp;
                    <a href="javascript:void(0);" className="btn btn-rounded  my-1 btn-sm btn-info px-4" onClick={(e) =>Ajouter(user._id)}>Ajouter <span className="btn-icon-left text-info"><i className="fa fa-plus-square"></i></span></a>&nbsp;
                    <a href="javascript:void(0);" className="btn btn-rounded  my-1 btn-sm btn-success px-4" onClick={(e) =>Valider(user._id)}>Valider <span className="btn-icon-left text-success"><i className="fa fa-check"></i></span></a>&nbsp;
                </div>
                
            </div>

          );
        })
      ) : (
        <h3>Vide</h3>
      );
    return (
        <div Style="font-family: 'poppins', sans-serif;">
        <SideBar />
        <div className="content-body" >
          <div className="container-fluid">
            <div className="page-titles">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="javascript:void(0)">Affecter Tache</a>
                </li>
              </ol>
            </div>
            <div className="form-head d-flex mb-4 mb-md-5 align-items-start">
        <div className="input-group search-area d-inline-flex">
          <div className="input-group-append">
            <span className="input-group-text">
              <i className="flaticon-381-search-2"></i>
            </span>
          </div>
          <input type="text" className="form-control" placeholder="Search here" />&nbsp;

        </div>
        
        <a  className="btn btn-info ml-auto"> <i className="fa fa-sort"></i>Nom</a>
          <a href="#" className="btn btn-info ml-auto"><i className="fa fa-sort"></i>Taches</a>
          <a href="#" className="btn btn-info ml-auto"><i className="fa fa-sort"></i>Responsable</a>
      </div>
     
      <div className="row" >{UsersTaches} </div>
          </div>
        </div>
      </div>

    );
}