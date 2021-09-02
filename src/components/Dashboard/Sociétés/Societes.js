import React, { useState, useEffect } from 'react';
import axios from "axios";
import '../../vendor/bootstrap-select/dist/css/bootstrap-select.min.css';
import '../../css/style.css';
import SideBar from '../SideBar';
import {Link} from "react-router-dom";
import Swal from "sweetalert2";
import {sortBy} from "underscore";
import $ from 'jquery';


export default function Societes() {
    const [isLoading, setIsLoading] = useState(true);
    const [societes,setSocietes]=useState([]);

    const handleChange = (e) => {
        var keyword = document.getElementById("ValeurRechercheSocietes").value;
        if (keyword.length<1){
          console.log("Fergha");
          axios.get("http://143.110.210.169:4000/societes/")
          //axios.get("http://localhost:4000/societes/")
        .then(res=>{
            setSocietes(res.data);
            setIsLoading(false);
        })
        .catch(err=>console.log)
        }else{
        var filtered_societes = societes;

          filtered_societes=societes.filter(societe=>societe.Nom.toLowerCase().includes(keyword.toLowerCase()));
          setSocietes(filtered_societes);
        }
        
  }
  

    const deletesociete = (id) => {
      Swal.fire({
        title: "Vous etez sur?",
        text: "Veuillez Vérifier vos besoin avant de envoyé ",
        icon: "warning",
        showDenyButton: true,
        confirmButtonText: `Oui, Supprimer`,
        denyButtonText: `Non, Annuler`,
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete("http://143.110.210.169:4000/societes/"+id);
         // axios.delete("http://localhost:4000/societes/"+id);
          Swal.fire("Success", "Votre tache a été Modifié :) ", "success");
        } else {
          Swal.fire(
            "Annulé",
            "Vous Avez Annulé la suppresion de cette tache.",
            "error"
          );
        }
      });

      
    };
    const deleteall = (id) => {
      Swal.fire({
        title: "Vous etez sur?",
        text: "Veuillez Vérifier vos besoin avant de envoyé ",
        icon: "warning",
        showDenyButton: true,
        confirmButtonText: `Oui, Supprimer`,
        denyButtonText: `Non, Annuler`,
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete("http://143.110.210.169:4000/societes/"+id);
          //axios.delete("http://localhost:4000/societes/"+id);
          Swal.fire("Success", "societes Supprimé :) ", "success");
        } else {
          Swal.fire(
            "Annulé",
            "Vous Avez Annulé la suppresion de ces societes.",
            "error"
          );
        }
      });
    }

    useEffect(()=>{
      axios.get("http://143.110.210.169:4000/societes/")
        //axios.get("http://localhost:4000/societes/")
        .then(res=>{
            setSocietes(res.data);
            setIsLoading(false);
        })
        .catch(err=>console.log)
    }, []);

function Trienom(e){
    e.preventDefault();
  setSocietes(sortBy(societes, "Nom"));
}
function TrieCode(e){
    e.preventDefault();
  setSocietes(sortBy(societes, "Code"));
}
function TrieResponsable(e){
    e.preventDefault();
  setSocietes(sortBy(societes, "SUPAD"));
}

    const content = isLoading ? <h3>Loading Societes...</h3> : societes.length ? (
        societes
        .map(societe=>{
            return(
                    <tr key={societe._id} id="RechercheSocietes">
                <td>
                  <div className="custom-control custom-checkbox checkbox-success check-lg mr-3" name={societe._id}>
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id={societe._id}
                      required=""
                      name={societe._id}
                    />
                    <label
                      className="custom-control-label"
                      for="customCheckBox2"
                    ></label>
                  </div>
                </td>
                <td>
                  <strong>{societe._id}</strong>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="images/avatar/1.jpg"
                      className="rounded-lg mr-2"
                      alt=""
                      width="24"
                    />
                    <span className="w-space-no">{societe.Nom}</span>
                  </div>
                </td>
                <td>{societe.Code}</td>
                <td>{societe.SUPAD}</td>
                <td>
                  <div className="d-flex">
                    <Link
                      to={`/ModifierSociete/`+societe._id}
                      className="btn btn-primary shadow btn-xs sharp mr-1"
                    >
                      <i className="fa fa-pencil"></i>
                    </Link>
                    <a href="#" onClick={(e) =>deletesociete(societe._id, e)} className="btn btn-danger shadow btn-xs sharp">
                      <i className="fa fa-trash"></i>
                      </a>
                  </div>
                </td>
              </tr>
            )
        })
    ): <h3>Empty List !</h3>;
    return (
<div>
  <SideBar />
  <div className="content-body" Style="font-family: 'poppins', sans-serif;">
    <div className="container-fluid">
      <div className="page-titles">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="javascript:void(0)">Societes</a>
          </li>
        </ol>
      </div>
      <div className="row">
      <div className="col-xl-3 col-lg-6 col-sm-6">
						<div className="widget-stat card">
							<div className="card-body p-4">
								<h4 className="card-title">Total Societes</h4>
								<h3>{societes.length}</h3>
								<div className="progress mb-2">
									<div className="progress-bar progress-animated bg-primary" Style="width: 80%"></div>
								</div>
								<small>80% Increase in 20 Days</small>
							</div>
						</div>
                    </div>
        <div className="col-xl-3 col-lg-6 col-sm-6">
						<div className="widget-stat card">
							<div className="card-body p-4">
								<h4 className="card-title">Nouveaux Societes</h4>
								<h3>{societes.length}</h3>
								<div className="progress mb-2">
									<div className="progress-bar progress-animated bg-warning" Style="width: 50%"></div>
								</div>
								<small>50% Increase in 25 Days</small>
							</div>
						</div>
                    </div>
        </div>
      <div className="form-head d-flex mb-4 mb-md-5 align-items-start">
        <div className="input-group search-area d-inline-flex">
          <div className="input-group-append">
            <span className="input-group-text">
              <i className="flaticon-381-search-2"></i>
            </span>
          </div>
          <input type="text" className="form-control" placeholder="Search here" id="ValeurRechercheSocietes" onChange={handleChange}/>&nbsp;

        </div>
        
        <a  href="#" className="btn btn-info ml-auto" onClick={Trienom}> <i className="fa fa-sort"></i> Trie Par Nom</a>
          <a href="#" className="btn btn-info ml-auto" onClick={TrieCode}><i className="fa fa-sort"></i> Trie Par Code</a>
          <a href="#" className="btn btn-info ml-auto" onClick={TrieResponsable}><i className="fa fa-sort"></i> Trie Par Responsable</a>
        <Link to={`/AjouterSocietes`} className="btn btn-primary ml-auto"><i className="fa fa-plus-circle"></i> Ajouter Societes</Link>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-responsive-md">
            <thead>
              <tr>
                <th className="width50">
                  <div className="custom-control custom-checkbox checkbox-success check-lg mr-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="checkAll"
                      required=""
                    />
                    <label className="custom-control-label" for="checkAll"></label>
                  </div>
                </th>
                <th>
                  <strong>ROLL NO.</strong>
                </th>
                <th>
                  <strong>Nom Sociéte</strong>
                </th>
                <th>
                  <strong>Code</strong>
                </th>
                <th>
                  <strong>Responsable</strong>
                </th>
              </tr>
            </thead>
              {content}
             
          </table>
        </div>
      </div>
      <div className="form-head d-flex mb-4 mb-md-5 align-items-start">
        <div className="input-group search-area d-inline-flex">
          <div className="input-group-append">
          </div>
        </div>
        <a href="#" className="btn btn-danger ml-auto" onClick={deleteall}><i className="fa fa-trash"></i> Delete Selected items</a>
      </div>

    </div>
  </div>

</div>


    );}