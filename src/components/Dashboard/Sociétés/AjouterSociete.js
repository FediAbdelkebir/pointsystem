import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../vendor/bootstrap-select/dist/css/bootstrap-select.min.css";
import "../../css/style.css";
import SideBar from "../SideBar";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

export default function AjouterSociete() {
  let history = useHistory();
  const [societe, setSociete] = useState({
    Nom: "",
    Code: "",
    SUPAD: "",
  });
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
  const handleChange = (e) => {
    setSociete({
      societe,
      [e.target.id]: e.target.value,
    });
  };
function Verif(){
  if((document.getElementById("NomSociete").value=="")||(document.getElementById("CodeSociete").value=="")||(document.getElementById("SUPAD").value=="")){
return false
  }
  else{
    return true
  }     
}
  const handleClick = (e) => {
    if(Verif()){
    Swal.fire({
      title: "Vous etez sur?",
      text: "Veuillez Vérifier vos besoin avant de envoyé ",
      icon: "warning",
      showDenyButton: true,
      confirmButtonText: `Ajouter`,
      denyButtonText: `Non`,
    }).then((result) => {
      if (result.isConfirmed) {
        
        societe.Nom = document.getElementById("NomSociete").value;
        societe.Code = document.getElementById("CodeSociete").value;
        societe.SUPAD = document.getElementById("SUPAD").value;
        console.log({ societe });

        e.preventDefault();
        axios
          .post("http://localhost:4000/societes/create", {
            Nom: societe.Nom,
            Code: societe.Code,
            SUPAD: societe.SUPAD,
          })
          .then((res) => {
            Swal.fire("Success", "Votre Societe a été créé :) ", "success");
            console.log(res.data);
            history.push("/Societes");
          })
          .catch((err) => {
            Swal.fire("Ooops", "Une Erreur au niveau de l'insertion ", "error");
            console.error(err);
          });
      } else {
        Swal.fire("Annulé", "Vous Avez Annulé l'ajout d'une societe.", "error");
      }
    });
  }else{
    Swal.fire("Erreur", "Veuillez remplire tous les champs .", "error");
  }
  };
  
  return (
    <div Style="font-family: 'poppins', sans-serif;">
      <SideBar />
      <div className="content-body">
        <div className="container-fluid">
          <div className="page-titles">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="javascript:void(0)">Ajouter Societe</a>
              </li>
            </ol>
          </div>
          <div className="card-body">
            <div className="basic-form">
              <form>
                <div className="form-row">
                  <div className="form-group col-md-3">
                    <label>Nom Societe</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nom Complet De la Societe"
                      type="text"
                      id={"NomSociete"}
                      name={"NomSociete"}
                    />
                  </div>
                  <div className="form-group col-md-2">
                    <label>Code Societe </label>
                    <input
                      type="text"
                      className="form-control"
                      type="text"
                      id={"CodeSociete"}
                      name={"CodeSociete"}
                    />
                  </div>
                  
                  
                  <div className="form-group col-md-5">
              <label>Super Admin</label><br></br>
              <select class="dropdown bootstrap-select show-tick form-control col-md-5 " id={"SUPAD"}
                      name={"SUPAD"}>
              {SelectList}
</select>
            </div> 
                  
                </div>
                
              </form>
              <button className="btn btn-primary" onClick={handleClick}>
              <i className="fa fa-plus-square"></i> Ajouter Societe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
