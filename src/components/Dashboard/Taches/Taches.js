import React, { useState, useEffect } from 'react';
import axios from "axios";
import '../../vendor/bootstrap-select/dist/css/bootstrap-select.min.css';
import '../../css/style.css';
import SideBar from '../SideBar';
import {Link} from "react-router-dom";

export default function Taches(props) {
    const [isLoading, setIsLoading] = useState(true);
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

    const deletetache = (id) => {
      axios.delete("http://localhost:4000/societes/:id",{
        params: {
          id: id
        }});
    };
    const content = isLoading ? <h3>Loading Societes...</h3> : taches.length ? (
      taches
      .map(tache=>{
        let Etat="";
        if (tache.Etat=="Validé") {
          tache.Etat = <span class="badge light badge-success">Validé</span>;
        }
        if (tache.Etat=="En Cours") {
          tache.Etat = <span class="badge light badge-warning">En Cours</span>;
        }
        if (tache.Etat=="Terminé") {
          tache.Etat = <span class="badge light badge-danger">Terminé</span>;
        }
          return(
                  <tr key={tache._id}>
              <td>
                <div className="custom-control custom-checkbox checkbox-success check-lg mr-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id={"tache.Code"}
                    required=""
                    name={"tache.Code"}
                  />
                  <label
                    className="custom-control-label"
                    for="customCheckBox2"
                  ></label>
                </div>
              </td>
              <td>
                <strong>{tache._id}</strong>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    src="images/avatar/1.jpg"
                    className="rounded-lg mr-2"
                    alt=""
                    width="24"
                  />{" "}
                  <span className="w-space-no">{tache.Nom}</span>
                </div>
              </td>
              <td>{tache.Code}</td>
              <td>{tache.Description}</td>
              <td>{tache.Points}</td>
              <td>{tache.Responsable}</td>
              <td>{tache.Etat}</td>
              <td>
                <div className="d-flex">
                  <Link
                    to={`/ModifierTache/`+tache._id}
                    className="btn btn-primary shadow btn-xs sharp mr-1"
                  >
                    <i className="fa fa-pencil"></i>
                  </Link>
                  <a onClick={deletetache} className="btn btn-danger shadow btn-xs sharp">
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
  <div className="content-body" style={{fontFamily: "'poppins', sans-serif"}}>
    <div className="container-fluid">
      <div className="page-titles">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a>Taches</a>
          </li>
        </ol>
      </div>
      <div className="row">
      <div className="col-xl-3 col-lg-6 col-sm-6">
						<div className="widget-stat card">
							<div className="card-body p-4">
								<h4 className="card-title">Total Students</h4>
								<h3>3280</h3>
								<div className="progress mb-2">
									<div className="progress-bar progress-animated bg-primary" style={{width: "80%"}}></div>
								</div>
								<small>80% Increase in 20 Days</small>
							</div>
						</div>
                    </div>
        <div className="col-xl-3 col-lg-6 col-sm-6">
						<div className="widget-stat card">
							<div className="card-body p-4">
								<h4 className="card-title">Nouveaux Taches</h4>
								<h3>245</h3>
								<div className="progress mb-2">
									<div className="progress-bar progress-animated bg-warning" style={{width: "50%"}}></div>
								</div>
								<small>50% Increase in 25 Days</small>
							</div>
						</div>
                    </div>
        <div className="col-xl-3 col-lg-6 col-sm-6">
						<div className="widget-stat card">
							<div className="card-body p-4">
								<h4 className="card-title">Taches Completes</h4>
								<h3>500</h3>
								<div className="progress mb-2">
									<div className="progress-bar progress-animated bg-red" style={{width: "76%"}}></div>
								</div>
								<small>76% Increase in 20 Days</small>
							</div>
						</div>
                    </div>
        <div className="col-xl-3 col-lg-6 col-sm-6">
						<div className="widget-stat card">
							<div className="card-body p-4">
								<h4 className="card-title">Taches En Cours</h4>
								<h3>280</h3>
								<div className="progress mb-2">
									<div className="progress-bar progress-animated bg-success" style={{Width: "60%"}}></div>
								</div>
								<small>60% Increase in 30 Days</small>
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
          <input type="text" className="form-control" placeholder="Search here" />
        </div>
        <a href="#" className="btn btn-info ml-auto"> <i className="fa fa-sort"></i> Nom</a>
          <a href="#" className="btn btn-info ml-auto"><i className="fa fa-sort"></i> Code</a>
          <a href="#" className="btn btn-info ml-auto"><i className="fa fa-sort"></i> Description</a>
          <a href="#" className="btn btn-info ml-auto"><i className="fa fa-sort"></i> Responsable</a>
          <a href="#" className="btn btn-info ml-auto"><i className="fa fa-sort"></i> Etat</a>
        <Link to={`/AjouterTache`} className="btn btn-primary ml-auto">
          <i className="fa fa-plus-circle"></i> Ajouter Tache
        </Link>
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
                    <label className="custom-control-label" htmlFor="checkAll"></label>
                  </div>
                </th>
                <th>
                  <strong>ROLL NO.</strong>
                </th>
                <th>
                  <strong>Nom</strong>
                </th>
                <th>
                  <strong>Code</strong>
                </th>
                <th>
                  <strong>Description</strong>
                </th>
                <th>
                  <strong>Points</strong>
                </th>
                <th>
                  <strong>Responsable</strong>
                </th>
                <th>
                  <strong>Etat</strong>
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
        <a href="#" className="btn btn-danger ml-auto"><i className="fa fa-trash"></i> Delete Selected items</a>
      </div>
      <nav>
        <ul className="pagination pagination-gutter pagination-primary no-bg">
          <li className="page-item page-indicator">
            <a className="page-link" >
              <i className="la la-angle-left"></i>
            </a>
          </li>
          <li className="page-item ">
            <a className="page-link" >
              1
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link" >
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" >
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" >
              4
            </a>
          </li>
          <li className="page-item page-indicator">
            <a className="page-link" >
              <i className="la la-angle-right"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>

</div>


    );}