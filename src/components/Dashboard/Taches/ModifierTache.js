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
        Nouveautache.Responsable = "TestingTaches";
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
            Responsable: "TestingTaches",
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
                    <div class="form-group col-md-4">
                      <label>Responsable</label>
                      <div class="form-group col-md-6">
                        <div class="dropdown bootstrap-select form-control dropup">
                          <select
                            id="inputState"
                            class="form-control"
                            tabindex="-98"
                          >
                            <option selected="">Choose...</option>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                          </select>
                          <button
                            type="button"
                            class="btn dropdown-toggle btn-light"
                            data-toggle="dropdown"
                            role="button"
                            data-id="inputState"
                            title="Choose..."
                            aria-expanded="false"
                          >
                            <div class="filter-option">
                              <div class="filter-option-inner">
                                <div class="filter-option-inner-inner">
                                  Choose...
                                </div>
                              </div>{" "}
                            </div>
                          </button>
                          <div
                            class="dropdown-menu"
                            role="combobox"
                            Style="max-height: 411px; overflow: hidden; min-height: 112px; position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, -2px, 0px);"
                            x-placement="top-start"
                          >
                            <div
                              class="inner show"
                              role="listbox"
                              aria-expanded="false"
                              tabindex="-1"
                              Style="max-height: 395px; overflow-y: auto; min-height: 96px;"
                            >
                              <ul class="dropdown-menu inner show">
                                <li class="selected active">
                                  <a
                                    role="option"
                                    class="dropdown-item selected active"
                                    aria-disabled="false"
                                    tabindex="0"
                                    aria-selected="true"
                                  >
                                    <span class=" bs-ok-default check-mark"></span>
                                    <span class="text">Choose...</span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    role="option"
                                    class="dropdown-item"
                                    aria-disabled="false"
                                    tabindex="0"
                                    aria-selected="false"
                                  >
                                    <span class=" bs-ok-default check-mark"></span>
                                    <span class="text">Option 1</span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    role="option"
                                    class="dropdown-item"
                                    aria-disabled="false"
                                    tabindex="0"
                                    aria-selected="false"
                                  >
                                    <span class=" bs-ok-default check-mark"></span>
                                    <span class="text">Option 2</span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    role="option"
                                    class="dropdown-item"
                                    aria-disabled="false"
                                    tabindex="0"
                                    aria-selected="false"
                                  >
                                    <span class=" bs-ok-default check-mark"></span>
                                    <span class="text">Option 3</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
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
