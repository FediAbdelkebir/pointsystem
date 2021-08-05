import React, { useState, useEffect } from 'react';
import axios from "axios";
import '../../vendor/bootstrap-select/dist/css/bootstrap-select.min.css';
import '../../css/style.css';
import SideBar from '../SideBar';

export default function AjouterSociete({addSociete}) {
    const [societe, setSociete] = useState({
        Nom: "",
        Code: "",
        SUPAD: ""
    });

    const handleChange = (e)=>{
        setSociete({
            ...societe,
            [e.target.id]: e.target.value
        })
    };

    const handleClick = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:4000/societes/create", {...societe})
            .then(res=>{
                addSociete(res.data);
                
            })
            .catch(err=>{
                console.error(err);
            });
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
                                                <input type="text" className="form-control" placeholder="Nom Complet De la Societe" onChange={handleChange} type="text" id={"Nom"}/>
                                            </div>
                                            <div className="form-group col-md-2">
                                            <label>Code Societe </label>
                                            <input type="text" className="form-control" onChange={handleChange} type="text" id={"Code"}/>
                                            </div>
                                            <div className="form-group col-md-3">
                                                <label>Super Admin</label>
                                                <input type="text" className="form-control" placeholder="SuperAdmin" onChange={handleChange} type="text" id={"SUPAD"}/>
                                            </div>
                                        </div>
                                        
                                        <button className="btn btn-primary" onClick={handleClick}>+ Ajouter Societe</button>
                                    </form>
                                </div>
                            </div>
    </div>
  </div>
</div>

      
    );
}