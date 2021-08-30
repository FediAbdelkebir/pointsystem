import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../vendor/bootstrap-select/dist/css/bootstrap-select.min.css";
import "../../css/style.css";
import SideBar from "../SideBar";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

export default function ModifierSociete(props) {
  let history = useHistory();
const [isLoading, setIsLoading] = useState(true);
const [societes,setSocietes]=useState([]);
  const [societe, oldSociete] = useState({
    Nom: "",
    Code: "",
    SUPAD: "",
  });
  const handleChange = (e) => {
    oldSociete({
        societe,
      [e.target.id]: e.target.value,
    });
  };

  const handleClick = (e) => {
    societe.Nom = document.getElementById("NouveauNomSociete").value;
    societe.Code = document.getElementById("NouveauCodeSociete").value;
    societe.SUPAD = document.getElementById("NouveauSUPAD").value;
    console.log({ societe });

    Swal.fire({
        
      title: "Vous etez sur?",
      text: "Veuillez Vérifier vos besoin avant de envoyé ",
      icon: "warning",
      showDenyButton: true,
      confirmButtonText: `Modifier`,
      denyButtonText: `Non`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Success", "Votre Societe a été modifié :) ", "success");
        e.preventDefault();
        
        axios
          //.put("http://localhost:4000/societes/UpdateSociete/"+props.id, {
            .put("http://143.110.210.169:4000/societes/UpdateSociete/"+props.id, {
            Nom: societe.Nom,
            Code: societe.Code,
            SUPAD: societe.SUPAD,
          })
          .then((res) => {
            console.log(res.data);
            history.push("/Societes");
          })
          .catch((err) => {
            Swal.fire("Ooops", "Une Erreur au niveau de la Modification ", "error");
            console.error(err);
          });
      } else {
        Swal.fire("Annulé", "Vous Avez Annulé la modification d'une societe.", "error");
      }
    });
  };


    useEffect(()=>{
        //axios.get("http://localhost:4000/societes/"+props.id)
        axios.get("http://143.110.210.169:4000/societes/"+props.id)
        .then(res=>{
            setSocietes(res.data);
            setIsLoading(false);
        })
        .catch(err=>console.log)
    }, []);

    const modifier = isLoading ? <h3>Loading Societes...</h3> : societes.length ? (
        societes.map(societe=>{
            return(
                <div className="content-body"  key={societe._id}>
                <div className="container-fluid">
                  <div className="page-titles">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="javascript:void(0)">Modifier Societe</a>
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
                              placeholder="Nouveau Nom Complet De la Societe"
                              type="text"
                              id={"NouveauNomSociete"}
                              name={"NouveauNomSociete"}
                              defaultValue={societe.Nom}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="form-group col-md-2">
                            <label>Code Societe </label>
                            <input
                              type="text"
                              className="form-control"
                              type="text"
                              id={"NouveauCodeSociete"}
                              name={"NouveauCodeSociete"}
                              defaultValue={societe.Code}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="form-group col-md-3">
                            <label>Super Admin</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Nouveau SuperAdmin"
                              type="text"
                              id={"NouveauSUPAD"}
                              name={"NouveauSUPAD"}
                              defaultValue={societe.SUPAD}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </form>
                      <button className="btn btn-primary" onClick={handleClick}>
                        Modifier Societe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
        })
    ): <h3>Vide</h3>;

  return (
    <div Style="font-family: 'poppins', sans-serif;">
      <SideBar />
     {modifier}
    </div>
  );
}
