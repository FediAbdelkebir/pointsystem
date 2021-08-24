import React, { useState, useEffect } from 'react';
import axios from "axios";
import '../../vendor/bootstrap-select/dist/css/bootstrap-select.min.css';
import '../../css/style.css';
import SideBar from '../SideBar';
import Swal from "sweetalert2";
export default function AjouterTache({history}) {
    const [tache, setTache] = useState({
        Nom: "",
        Code: "",
        Description: "",
        Etat:"",
        Responsable:"",
        Points:"",
      });
      const handleChange = (e) => {
        setTache({
            tache,
          [e.target.id]: e.target.value,
        });
      };
      const [users,setUsers]=useState([]);
      const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
    axios.get("http://localhost:4000/users")
    .then(res=>{
        setUsers(res.data);
        setIsLoading(false);
    })
    .catch(err=>console.log)
}, []);

const SelectList = isLoading ? <option>Chargements des utilisateurs ...</option> : users.length ? (
  users
      .map(user=>{
          return(
            <option selected>{user.name}</option>
          )
      })
  ): <h3>Aucun Utilisateur Trouvé !</h3>;
    function Verif(){
      if ((document.getElementById("NomTache").value=="")||(document.getElementById("CodeTache").value=="")||
      (document.getElementById("DescriptionTache").value=="")||(document.getElementById("PointsTache").value=="")){
        return false;
      }else{
        return true;
      }

    };
      const handleClick = (e) => {
        if (Verif()){
        Swal.fire({
          title: "Vous etez sur?",
          text: "Veuillez Vérifier vos besoin avant de envoyé ",
          icon: "warning",
          showDenyButton: true,
          confirmButtonText: `Ajouter`,
          denyButtonText: `Non`,
        }).then((result) => {
          if (result.isConfirmed) {
            
            tache.Nom = document.getElementById("NomTache").value;
            tache.Code = document.getElementById("CodeTache").value;
            tache.Description = document.getElementById("DescriptionTache").value;
            tache.Etat = "En Cours";
            tache.Points = document.getElementById("PointsTache").value;
            tache.Responsable = document.getElementById("ResponsableTache").value;;
            console.log({ tache });
    
            e.preventDefault();
            axios
              .post("http://localhost:4000/taches/createtache", {
                Nom: tache.Nom,
                Code: tache.Code,
                Description: tache.Description,
                Etat: tache.Etat,
                Points:tache.Points,
                Responsable:tache.Responsable,
              })
              .then((res) => {
                Swal.fire("Success", "Votre tache a été créé :) ", "success");
                console.log(res.data);
                history.push("/Taches");
              })
              .catch((err) => {
                Swal.fire("Ooops", "Une Erreur au niveau de l'insertion ", "error");
                console.error(err);
              });
          } else {
            Swal.fire("Annulé", "Vous Avez Annulé l'ajout d'une tache.", "error");
          }
        });
      }else{
        Swal.fire("Erreur", "Veuillez remplire tous les champs", "error");
      }
      };

    return (
<div Style="font-family: 'poppins', sans-serif;">
  <SideBar />
  <div class="content-body">
    <div class="container-fluid">
      <div class="page-titles">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="javascript:void(0)">Ajouter Taches</a>
          </li>
        </ol>
      </div>
      <div class="card-body">
                                <div class="basic-form">
                                    <form>

                                        <div class="form-row">
                                            <div class="form-group col-md-3">
                                                <label>Nom Tache</label>
                                                <input type="text" class="form-control" placeholder="Nom Complet De la tache"
                                                                      id={"NomTache"}
                                                                      name={"NomTache"}
                                                />
                                            </div>
                                            <div class="form-group col-md-2">
                                            <label>Code Tache </label>
                                            <input type="text" class="form-control"
                                             id={"CodeTache"}
                                             name={"CodeTache"}
                                             placeholder="Code Tache"
                                            />
                                            </div>
                                            <div class="form-group col-md-2">
                                            <label>Nombre de Points </label>
                                            <input type="text" class="form-control"
                                             id={"PointsTache"}
                                             name={"PointsTache"}
                                             placeholder="Nombre de points"
                                            />
                                            </div>
                                            <div className="form-group col-md-5">
              <label>Responsable </label><br></br>
              <select class="dropdown bootstrap-select show-tick form-control col-md-5 " id={"ResponsableTache"}
                      name={"ResponsableTache"}>
              {SelectList}
</select>
            </div>
                                            
                                            
                                            <div class="form-group col-md-9" >
                                            <label>Description detaillé de la tache </label>
                                        <textarea class="form-control" rows="5" id="comment" placeholder="Description sur la tache.."
                                        id={"DescriptionTache"}
                                        name={"DescriptionTache"}
                                        ></textarea>
                                        </div>
                                        
                                        </div>

                                        <div class="form-group">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox"/>
                                                <label class="form-check-label">
                                                    Send Mail 
                                                </label>
                                            </div>
                                        </div>
                                        
                                        
                                    </form>
                                    <button className="btn btn-primary" onClick={handleClick}><i className="fa fa-plus-square"></i> Ajouter Tache</button>
                                </div>
                            </div>
    </div>
  </div>
</div>

      
    );
}