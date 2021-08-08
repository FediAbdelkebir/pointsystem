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
function Ajouter(){
Swal.fire({
        title: 'Ajouter Une Tache',
        input: 'select',
        inputOptions: {
          'Taches': {
            Nom: taches.map(tache=>{return tache.Nom})
          }
        },
        inputPlaceholder: 'Selectioner une tache',
        showDenyButton: true,
        confirmButtonText: `Ajouter`,
        denyButtonText: `Non`,
        inputValidator: (value) => {
          return new Promise((resolve) => {
              resolve('Vous Allez Ajouter Cette Tache a ')
          })
        }
      }).then((result) => {
        if (result.isConfirmed) {

        }else{

        }
      });
}
function Supprimer(){
    Swal.fire({
            title: 'Supprimer Une Tache',
            input: 'select',
            inputOptions: {
              'Taches': {
                apples: 'Apples',
                bananas: 'Bananas',
                grapes: 'Grapes',
                oranges: 'Oranges'
              }
            },
            inputPlaceholder: 'Selectioner une tache a supprimer',
            showDenyButton: true,
            confirmButtonText: `Supprimer`,
            denyButtonText: `Non`,
            inputValidator: (value) => {
              return new Promise((resolve) => {
                  resolve('Vous Allez supprimer Cette Tache de ')
              })
            }
          }).then((result) => {
            if (result.isConfirmed) {
    
            }else{
    
            }
          });
    }
    function Valider(){
        Swal.fire({
                title: 'Valider Une Tache',
                input: 'select',
                inputOptions: {
                  'Taches': {
                    apples: 'Apples',
                    bananas: 'Bananas',
                    grapes: 'Grapes',
                    oranges: 'Oranges'
                  }
                },
                inputPlaceholder: 'Selectioner une tache a valider',
                showDenyButton: true,
                confirmButtonText: `Supprimer`,
                denyButtonText: `Non`,
                inputValidator: (value) => {
                  return new Promise((resolve) => {
                      resolve('Vous Allez Ajouter Cette Tache a Valider')
                  })
                }
              }).then((result) => {
                if (result.isConfirmed) {
        
                }else{
        
                }
              });
        }
    const UsersTaches = isLoading ? (
        <h3>Loading Users...</h3>
      ) : users.length ? (
        users.map((tache) => {
          return (
              
            <div className="card col-3" key={users._id}>
                <div className="card-body text-center ai-icon text-primary">
                <img src="https://cdn.discordapp.com/attachments/475963741616472074/872798593101225984/IMG_20210617_021024_482.jpg"/>
                    <h4 className="my-2">{users.Nom}</h4>
                    
                    <a href="javascript:void(0);" className="btn btn-rounded  my-1 btn-sm btn-danger px-4" onClick={Supprimer}>Supprimer <span className="btn-icon-left text-danger"><i className="fa fa-minus-square"></i></span>
                    </a>&nbsp;
                    <a href="javascript:void(0);" className="btn btn-rounded  my-1 btn-sm btn-info px-4" onClick={Ajouter}>Ajouter <span className="btn-icon-left text-info"><i className="fa fa-plus-square"></i></span></a>&nbsp;
                    <a href="javascript:void(0);" className="btn btn-rounded  my-1 btn-sm btn-success px-4" onClick={Valider}>Valider <span className="btn-icon-left text-success"><i className="fa fa-check"></i></span></a>&nbsp;
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