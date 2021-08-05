import React, { useState, useEffect } from 'react';
import axios from "axios";
import '../../vendor/bootstrap-select/dist/css/bootstrap-select.min.css';
import '../../css/style.css';
import SideBar from '../SideBar';

export default function Taches() {
    const [isLoading, setIsLoading] = useState(true);
    const [taches,setTaches]=useState([]);

    useEffect(()=>{
        axios.get("http://localhost:4000/taches/")
        .then(res=>{
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
{content}
  <SideBar />
  <div class="content-body" Style="font-family: 'poppins', sans-serif;">
    <div class="container-fluid">
      <div class="page-titles">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="javascript:void(0)">Taches</a>
          </li>
        </ol>
      </div>
      <div class="row">
      <div class="col-xl-3 col-lg-6 col-sm-6">
						<div class="widget-stat card">
							<div class="card-body p-4">
								<h4 class="card-title">Total Students</h4>
								<h3>3280</h3>
								<div class="progress mb-2">
									<div class="progress-bar progress-animated bg-primary" Style="width: 80%"></div>
								</div>
								<small>80% Increase in 20 Days</small>
							</div>
						</div>
                    </div>
        <div class="col-xl-3 col-lg-6 col-sm-6">
						<div class="widget-stat card">
							<div class="card-body p-4">
								<h4 class="card-title">Nouveaux Taches</h4>
								<h3>245</h3>
								<div class="progress mb-2">
									<div class="progress-bar progress-animated bg-warning" Style="width: 50%"></div>
								</div>
								<small>50% Increase in 25 Days</small>
							</div>
						</div>
                    </div>
        <div class="col-xl-3 col-lg-6 col-sm-6">
						<div class="widget-stat card">
							<div class="card-body p-4">
								<h4 class="card-title">Taches Completes</h4>
								<h3>500</h3>
								<div class="progress mb-2">
									<div class="progress-bar progress-animated bg-red" Style="width: 76%"></div>
								</div>
								<small>76% Increase in 20 Days</small>
							</div>
						</div>
                    </div>
        <div class="col-xl-3 col-lg-6 col-sm-6">
						<div class="widget-stat card">
							<div class="card-body p-4">
								<h4 class="card-title">Taches En Cours</h4>
								<h3>280</h3>
								<div class="progress mb-2">
									<div class="progress-bar progress-animated bg-success" Style="width: 60%"></div>
								</div>
								<small>60% Increase in 30 Days</small>
							</div>
						</div>
                    </div>
        </div>
      <div class="form-head d-flex mb-4 mb-md-5 align-items-start">
        <div class="input-group search-area d-inline-flex">
          <div class="input-group-append">
            <span class="input-group-text">
              <i class="flaticon-381-search-2"></i>
            </span>
          </div>
          <input type="text" class="form-control" placeholder="Search here" />
        </div>
        <a href="javascript:void(0);" class="btn btn-primary ml-auto">
          + Ajouter Tache
        </a>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-responsive-md">
            <thead>
              <tr>
                <th class="width50">
                  <div class="custom-control custom-checkbox checkbox-success check-lg mr-3">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="checkAll"
                      required=""
                    />
                    <label class="custom-control-label" for="checkAll"></label>
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
                  <div class="custom-control custom-checkbox checkbox-success check-lg mr-3">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="customCheckBox2"
                      required=""
                    />
                    <label
                      class="custom-control-label"
                      for="customCheckBox2"
                    ></label>
                  </div>
                </td>
                <td>
                  <strong>542</strong>
                </td>
                <td>
                  <div class="d-flex align-items-center">
                    <img
                      src="images/avatar/1.jpg"
                      class="rounded-lg mr-2"
                      alt=""
                      width="24"
                    />{" "}
                    <span class="w-space-no">Dr. Jackson</span>
                  </div>
                </td>
                <td>example@example.com </td>
                <td>01 August 2020</td>
                <td></td>
                <td>
                  <div class="d-flex align-items-center">
                    <span class="badge light badge-success">Successful</span>
                  </div>
                </td>
                <td>
                  <div class="d-flex">
                    <a
                      href="#"
                      class="btn btn-primary shadow btn-xs sharp mr-1"
                    >
                      <i class="fa fa-pencil"></i>
                    </a>
                    <a href="#" class="btn btn-danger shadow btn-xs sharp">
                      <i class="fa fa-trash"></i>
                    </a>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="custom-control custom-checkbox checkbox-success check-lg mr-3">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="customCheckBox3"
                      required=""
                    />
                    <label
                      class="custom-control-label"
                      for="customCheckBox3"
                    ></label>
                  </div>
                </td>
                <td>
                  <strong>542</strong>
                </td>
                <td>
                  <div class="d-flex align-items-center">
                    <img
                      src="images/avatar/2.jpg"
                      class="rounded-lg mr-2"
                      alt=""
                      width="24"
                    />{" "}
                    <span class="w-space-no">Dr. Jackson</span>
                  </div>
                </td>
                <td>example@example.com </td>
                <td>01 August 2020</td>
                <td></td>
                <td>
                  <div class="d-flex align-items-center">
                  <span class="badge light badge-danger">Canceled</span>
                  </div>
                </td>
                <td>
                  <div class="d-flex">
                    <a
                      href="#"
                      class="btn btn-primary shadow btn-xs sharp mr-1"
                    >
                      <i class="fa fa-pencil"></i>
                    </a>
                    <a href="#" class="btn btn-danger shadow btn-xs sharp">
                      <i class="fa fa-trash"></i>
                    </a>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="custom-control custom-checkbox checkbox-success check-lg mr-3">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="customCheckBox4"
                      required=""
                    />
                    <label
                      class="custom-control-label"
                      for="customCheckBox4"
                    ></label>
                  </div>
                </td>
                <td>
                  <strong>542</strong>
                </td>
                <td>
                  <div class="d-flex align-items-center">
                    <img
                      src="images/avatar/3.jpg"
                      class="rounded-lg mr-2"
                      alt=""
                      width="24"
                    />{" "}
                    <span class="w-space-no">Dr. Jackson</span>
                  </div>
                </td>
                <td>example@example.com </td>
                <td>01 August 2020</td>
                <td></td>
                <td>
                  <div class="d-flex align-items-center">
                  <span class="badge light badge-warning">Pending</span>
                  </div>
                </td>
                <td>
                  <div class="d-flex">
                    <a
                      href="#"
                      class="btn btn-primary shadow btn-xs sharp mr-1"
                    >
                      <i class="fa fa-pencil"></i>
                    </a>
                    <a href="#" class="btn btn-danger shadow btn-xs sharp">
                      <i class="fa fa-trash"></i>
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <nav>
        <ul class="pagination pagination-gutter pagination-primary no-bg">
          <li class="page-item page-indicator">
            <a class="page-link" href="javascript:void()">
              <i class="la la-angle-left"></i>
            </a>
          </li>
          <li class="page-item ">
            <a class="page-link" href="javascript:void()">
              1
            </a>
          </li>
          <li class="page-item active">
            <a class="page-link" href="javascript:void()">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="javascript:void()">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="javascript:void()">
              4
            </a>
          </li>
          <li class="page-item page-indicator">
            <a class="page-link" href="javascript:void()">
              <i class="la la-angle-right"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>

</div>


    );}