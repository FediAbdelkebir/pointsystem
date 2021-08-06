import React, { useState, useEffect } from 'react';
import axios from "axios";
import '../../vendor/bootstrap-select/dist/css/bootstrap-select.min.css';
import '../../css/style.css';
import SideBar from '../SideBar';
import {Link} from "react-router-dom";

export default function Societes() {
    const [isLoading, setIsLoading] = useState(true);
    const [societes,setSocietes]=useState([]);
    
    const deletesociete = (id) => {
      axios.delete("http://localhost:4000/societes/:id",{
        params: {
          id: id
        }});
    };


    useEffect(()=>{
        axios.get("http://localhost:4000/societes/")
        .then(res=>{
            setSocietes(res.data);
            setIsLoading(false);
        })
        .catch(err=>console.log)
    }, []);

    const content = isLoading ? <h3>Loading Societes...</h3> : societes.length ? (
        societes.map(societe=>{
            return(
                    <tr key={societe._id}>
                <td>
                  <div className="custom-control custom-checkbox checkbox-success check-lg mr-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheckBox2"
                      required=""
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
                    />{" "}
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
                    <a onClick={deletesociete} className="btn btn-danger shadow btn-xs sharp">
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
								<h3>3280</h3>
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
								<h3>245</h3>
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
          <input type="text" className="form-control" placeholder="Search here" />
        </div>
        <Link to={`/AjouterSocietes`} className="btn btn-primary ml-auto"> + Ajouter Societes</Link>
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
        <a href="#" className="btn btn-danger ml-auto"><i className="fa fa-trash"></i> Delete Selected items</a>
      </div>
      <nav>
        <ul className="pagination pagination-gutter pagination-primary no-bg">
          <li className="page-item page-indicator">
            <a className="page-link" href="javascript:void()">
              <i className="la la-angle-left"></i>
            </a>
          </li>
          <li className="page-item ">
            <a className="page-link" href="javascript:void()">
              
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="javascript:void()">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="javascript:void()">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="javascript:void()">
              4
            </a>
          </li>
          <li className="page-item page-indicator">
            <a className="page-link" href="javascript:void()">
              <i className="la la-angle-right"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>

</div>


    );}