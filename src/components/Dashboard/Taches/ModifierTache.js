import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../vendor/bootstrap-select/dist/css/bootstrap-select.min.css";
import "../../css/style.css";
import SideBar from "../SideBar";
import Swal from "sweetalert2";

export default function ModifierTache(props) {
    const id = props.match.params.id.trim();
  const [isLoading, setIsLoading] = useState(true);
  const [taches, setTaches] = useState([]);
  const [Nouveautache, setNouveautache] = useState({
    Nom: "",
    Code: "",
    Description: "",
    Etat: "",
    Responsable: "",
    Points: "",
  });
  
  const ModifierValeur = (e) => {
    setNouveautache({
      Nouveautache,
      [e.target.id]: e.target.value,
    });
  };
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    //axios.get("http://localhost:4000/users")
    axios.get("http://143.110.210.169:4000/users")
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
  const handleClick = (e) => {
    Swal.fire({
      title: "Vous etez sur?",
      text: "Veuillez Vérifier vos besoin avant de envoyé ",
      icon: "warning",
      showDenyButton: true,
      confirmButtonText: `Modifier`,
      denyButtonText: `Non`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Success", "Votre tache a été Modifié :) ", "success");
        Nouveautache.Nom = document.getElementById("NouveauNomTache").value;
        Nouveautache.Code = document.getElementById("NouveauCodeTache").value;
        Nouveautache.Description = document.getElementById("NouveauDescriptionTache").value;
        Nouveautache.Etat = "En Cours";
        Nouveautache.Points = document.getElementById("NouveauPointsTache").value;
        Nouveautache.Responsable = document.getElementById("ResponsableTache").value;
        console.log("Nouveau Tache : ");
        console.log({ Nouveautache });

        e.preventDefault();
        
        //axios.put(`http://localhost:4000/taches/updatetache/${id}`, {
          axios.put(`http://143.110.210.169:4000/taches/updatetache/${id}`, {
            Nom: document.getElementById("NouveauNomTache").value,
            Code: document.getElementById("NouveauCodeTache").value,
            Description: document.getElementById("NouveauDescriptionTache").value,
            Etat: "En Cours",
            Points: document.getElementById("NouveauPointsTache").value,
            Responsable: document.getElementById("ResponsableTache").value,
          })
          .then((res) => {
            console.log(res.data);
            props.history.push("/Taches");
          })
          .catch((err) => {
            console.error(err);
          });
      } else {
        Swal.fire(
          "Annulé",
          "Vous Avez Annulé la modification de cette tache.",
          "error"
        );
      }
    });
  };
  useEffect(() => {
    axios
      //.get(`http://localhost:4000/taches/tache/${id}`)
      .get(`http://143.110.210.169:4000/taches/tache/${id}`)
      .then((res) => {
        setTaches(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log);
  }, []);
  console.log(taches);
  const modifiertache = isLoading ? (
    <h3>Loading Taches...</h3>
  ) : taches.length ? (
    taches.map((tache) => {
      return (
        <div class="content-body" key={tache._id}>
          <div class="container-fluid">
            <div class="page-titles">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="javascript:void(0)">Modifier Taches</a>
                </li>
              </ol>
            </div>
            <div class="card-body">
              <div class="basic-form">
                <form>
                  <div class="form-row">
                    <div class="form-group col-md-3">
                      <label>Nom Tache</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Nouveau Nom Complet De la tache"
                        id={"NouveauNomTache"}
                        name={"NouveauNomTache"}
                        onChange={ModifierValeur}
                        defaultValue={tache.Nom}
                      />
                    </div>
                    <div class="form-group col-md-2">
                      <label>Code Tache </label>
                      <input
                        type="text"
                        class="form-control"
                        id={"NouveauCodeTache"}
                        name={"NouveauCodeTache"}
                        placeholder="NouveauCode Tache"
                        onChange={ModifierValeur}
                        defaultValue={tache.Code}
                      />
                    </div>
                    <div class="form-group col-md-2">
                      <label>Nombre de Points </label>
                      <input
                        type="text"
                        class="form-control"
                        id={"NouveauPointsTache"}
                        name={"NouveauPointsTache"}
                        placeholder="Nouveau Nombre de points"
                        onChange={ModifierValeur}
                        defaultValue={tache.Points}
                      />
                    </div>
                      <div className="form-group col-md-5">
              <label>Responsable </label><br></br>
              <select class="dropdown bootstrap-select show-tick form-control col-md-5 " id={"ResponsableTache"}
                      name={"ResponsableTache"}>
              {SelectList}
</select>
            </div>
                   

                    <div class="form-group col-md-9">
                      <label>Description detaillé de la tache </label>
                      <textarea
                        class="form-control"
                        rows="5"
                        id="comment"
                        placeholder="Nouveau Description sur la tache.."
                        id={"NouveauDescriptionTache"}
                        name={"NouveauDescriptionTache"}
                        onChange={ModifierValeur}
                        defaultValue={tache.Description}
                      ></textarea>
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" />
                      <label class="form-check-label">Send Mail</label>
                    </div>
                  </div>
                </form>
                <button className="btn btn-primary" onClick={handleClick}>
                  Modifier Tache
                </button>
              </div>
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
      {modifiertache}
    </div>
  );
}
