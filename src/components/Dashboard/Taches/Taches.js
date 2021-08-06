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

    const content = isLoading ? <h3>Loading Taches...</h3> : taches.length ? (
        taches.map(tache=>{
            return(
                <pre key={tache._id} style={{marginBottom: "50px"}}>
                    <div>{tache._id}</div>
                    <div>{tache.name}</div>
                    <div>{tache.email}</div>
                    <div>{tache.enrollnumber}</div>
                </pre>
            )
        })
    ): <h3>Empty List !</h3>;

    console.log(taches);
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
        <Link to={`/AjouterTache`} className="btn btn-primary ml-auto">
          + Ajouter Tache
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
                  <strong>Responsable</strong>
                </th>
                <th>
                  <strong>Etat</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
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
                      htmlFor="customCheckBox2"
                    ></label>
                  </div>
                </td>
                <td>
                  <strong>542</strong>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="images/avatar/1.jpg"
                      className="rounded-lg mr-2"
                      alt=""
                      width="24"
                    />{" "}
                    <span className="w-space-no">Dr. Jackson</span>
                  </div>
                </td>
                <td>example@example.com </td>
                <td>01 August 2020</td>
                <td></td>
                <td>
                  <div className="d-flex align-items-center">
                    <span className="badge light badge-success">Successful</span>
                  </div>
                </td>
                <td>
                  <div className="d-flex">
                    <a
                      href="#"
                      className="btn btn-primary shadow btn-xs sharp mr-1"
                    >
                      <i className="fa fa-pencil"></i>
                    </a>
                    <a href="#" className="btn btn-danger shadow btn-xs sharp">
                      <i className="fa fa-trash"></i>
                    </a>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="custom-control custom-checkbox checkbox-success check-lg mr-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheckBox3"
                      required=""
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheckBox3"
                    ></label>
                  </div>
                </td>
                <td>
                  <strong>542</strong>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="images/avatar/2.jpg"
                      className="rounded-lg mr-2"
                      alt=""
                      width="24"
                    />{" "}
                    <span className="w-space-no">Dr. Jackson</span>
                  </div>
                </td>
                <td>example@example.com </td>
                <td>01 August 2020</td>
                <td></td>
                <td>
                  <div className="d-flex align-items-center">
                  <span className="badge light badge-danger">Canceled</span>
                  </div>
                </td>
                <td>
                  <div className="d-flex">
                    <a
                      href="#"
                      className="btn btn-primary shadow btn-xs sharp mr-1"
                    >
                      <i className="fa fa-pencil"></i>
                    </a>
                    <a href="#" className="btn btn-danger shadow btn-xs sharp">
                      <i className="fa fa-trash"></i>
                    </a>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="custom-control custom-checkbox checkbox-success check-lg mr-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheckBox4"
                      required=""
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheckBox4"
                    ></label>
                  </div>
                </td>
                <td>
                  <strong>542</strong>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="images/avatar/3.jpg"
                      className="rounded-lg mr-2"
                      alt=""
                      width="24"
                    />{" "}
                    <span className="w-space-no">Dr. Jackson</span>
                  </div>
                </td>
                <td>example@example.com </td>
                <td>01 August 2020</td>
                <td></td>
                <td>
                  <div className="d-flex align-items-center">
                  <span className="badge light badge-warning">Pending</span>
                  </div>
                </td>
                <td>
                  <div className="d-flex">
                    <a
                      href="#"
                      className="btn btn-primary shadow btn-xs sharp mr-1"
                    >
                      <i className="fa fa-pencil"></i>
                    </a>
                    <a href="#" className="btn btn-danger shadow btn-xs sharp">
                      <i className="fa fa-trash"></i>
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
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