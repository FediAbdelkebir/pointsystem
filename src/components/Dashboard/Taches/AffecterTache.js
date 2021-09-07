import React, { useState, useEffect } from 'react';
import axios from "axios";
import '../../vendor/bootstrap-select/dist/css/bootstrap-select.min.css';
import '../../css/style.css';
import '../../css/Card.css';
import SideBar from '../SideBar';
import Swal from "sweetalert2";

export default function AjouterTache() {
    const [isLoading, setIsLoading] = useState(true);
    const [users,setUsers]=useState([]);
    const [taches,setTaches]=useState([]);
    const [usertaches,setUserTaches]=useState([]);
    const [UT,setUT]=useState([]);

    useEffect(()=>{
      
        //axios.get("http://localhost:4000/taches/")
        axios.get("http://143.110.210.169:4000/taches/")
        .then(res=>{
            console.log(res);
            setTaches(res.data);
            setIsLoading(false);
        })
        .catch(err=>console.log)
    }, []);

    useEffect(()=>{
        //axios.get("http://localhost:4000/users")
        axios.get("http://143.110.210.169:4000/users")
        .then(res=>{
            setUsers(res.data);
            setIsLoading(false);
        })
        .catch(err=>console.log)
    }, []);
    const handleChange = (e) => {
      var keyword = document.getElementById("ValeurRechercheAffecter").value;
      if (keyword.length<1){
        console.log("Fergha");
        //axios.get("http://localhost:4000/users/")
        axios.get("http://143.110.210.169:4000/users")
      .then(res=>{
        setUsers(res.data);
          setIsLoading(false);
      })
      .catch(err=>console.log)
      }else{
      var filtered_users = users;
        filtered_users=users.filter(user=>user.name.toLowerCase().includes(keyword.toLowerCase()));
        setUsers(filtered_users);
      }
      
}
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
            .post("http://143.110.210.169:4000/usertaches/createusertaches", {
              //.post("http://localhost:4000/usertaches/createusertaches", {
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
          //.delete("http://localhost:4000/usertaches/deleteusertaches/"+idtache+"/"+iduser)
          .delete("http://143.110.210.169:4000/usertaches/deleteusertaches/"+idtache+"/"+iduser)
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
    //axios.get("http://localhost:4000/usertaches/"+iduser)
    axios.get("http://143.110.210.169:4000/usertaches/"+iduser)
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
        position:'top-start',
        inputValidator: function (value) {
          idtache=value;
        }
      }).then((result) => {
        if (result.isConfirmed) {
          handleajout(idtache,iduser);
        } else {

          Swal.fire({title:"Vous Avez Annuler L'affectation d'une tache",
          position:'bottom-end'});
        }
      });
}
function Supprimer(iduser){
  let idtache="";
  let ValueList="";
    //axios.get("http://localhost:4000/usertaches/listtaches/"+iduser)
    axios.get("http://143.110.210.169:4000/usertaches/listtaches/"+iduser)
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
            position:'top-start',
            confirmButtonText: `Supprimer`,
            denyButtonText: `Non`,
            inputValidator: (value) => {
              idtache=value;
            }
          }).then((result) => {
            if (result.isConfirmed) {
              handledelete(idtache,iduser);
            }else{
              Swal.fire({title:"Vous Avez Annuler la Supprision",
              position:'bottom-end'});
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
              //.put("http://localhost:4000/taches/ValiderTache/"+idtache,{iduser:iduser})
              .put("http://143.110.210.169:4000/taches/ValiderTache/"+idtache,{iduser:iduser})
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
       // axios.get("http://localhost:4000/usertaches/listtaches/"+iduser)
        axios.get("http://143.110.210.169:4000/usertaches/listtaches/"+iduser)
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
                position:'top-start',
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
                    Swal.fire({title:"Vous Avez Annuler la Validation",
                    position:'bottom-end'});
                }
              });
        }


    const UsersTaches = isLoading ? (
      <div class="loader">
      <div class="dot">L</div>
      <div class="dot">O</div>
      <div class="dot">A</div>
      <div class="dot">D</div>
      <div class="dot">I</div>
      <div class="dot">N</div>
      <div class="dot">G</div>
      <div class="cogs">
        <div class="cog cog0">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
        <div class="cog cog1">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
        <div class="cog cog2">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
      </div>
    </div> 
      ) : users.length ? (
        users.map((user) => {
          return (

            
    <div className="main-container">
      <div className="poster-container">
        <a href="#"><img src="https://cdn.discordapp.com/attachments/475963741616472074/859136696129683456/IMG_20210617_021024_482.jpg" className="poster"/></a>
      </div>
      <div className="ticket-container">
        <div className="ticket__content">
          <h4 className="ticket__movie-title">{user.name}</h4>
          <p className="ticket__movie-title">{user.email} <p className="ticket__current-price">{user.name}<br/></p></p>
          <button className="ticket__buy-btn  my-1 btn-sm btn-success px-4" onClick={(e) =>Valider(user._id)}><a href="javascript:void(0);" Style="color:white;text-decoration:None;">Valider <span className="btn-icon-left text-success"><i className="fa fa-check"></i></span></a>&nbsp;</button> 
           <button className="ticket__buy-btn my-1 btn-sm btn-info px-4" onClick={(e) =>Ajouter(user._id)}><a href="javascript:void(0);"   Style="color:white;text-decoration:None;">Ajouter <span className="btn-icon-left text-info"><i className="fa fa-plus-square"></i></span></a>&nbsp;</button> 
           <button className="ticket__buy-btn my-1 btn-sm btn-danger px-4" onClick={(e) =>Supprimer(user._id)}><a href="javascript:void(0);"  Style="color:white;text-decoration:None;">Supprimer <span className="btn-icon-left text-danger"><i className="fa fa-minus-square"></i></span></a>&nbsp;</button>
        </div>
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
          <input type="text" className="form-control" placeholder="Rechercher un utilisateur.." id="ValeurRechercheAffecter" onChange={handleChange}/>&nbsp;

        </div>
      </div>
     
      <div className="row" ><div className="hero-container">{UsersTaches} </div></div>
          </div>
        </div>
      </div>

    );
}