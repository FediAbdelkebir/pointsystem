import React, { useState, useEffect } from 'react';
import axios from "axios";
import '../../vendor/bootstrap-select/dist/css/bootstrap-select.min.css';
import '../../css/style.css';
import SideBar from '../SideBar';

export default function ModiferSociete() {
    return (
<div Style="font-family: 'poppins', sans-serif;">
    
  <SideBar />
  <div className="content-body">
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
                                                <label>Modifier Nom Societe</label>
                                                <input type="text" className="form-control" placeholder="Nouveau nom de la tache"/>
                                            </div>
                                            <div className="form-group col-md-2">
                                            <label>Nouveau Nombre de Points </label>
                                            <input type="text" className="form-control"/>
                                            </div>
                                            <div className="form-group col-md-2">
                                            <p className="mb-1">Nouveau Date Range Pick</p>
                                            <input className="form-control input-daterange-datepicker" type="text" name="daterange" value="01/01/2015 - 01/31/2015"/>
                                            </div>
                                            <div className="form-group col-md-4">
                                                
                                                <label>Nouveau Responsable</label>
                                                <div className="form-group col-md-6">
                                                <div className="dropdown bootstrap-select form-control dropup"><select id="inputState" className="form-control" tabindex="-98">
                                                    <option selected="">Choose...</option>
                                                    <option>Option 1</option>
                                                    <option>Option 2</option>
                                                    <option>Option 3</option>
                                                </select><button type="button" className="btn dropdown-toggle btn-light" data-toggle="dropdown" role="button" data-id="inputState" title="Choose..." aria-expanded="false"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Choose...</div></div> </div></button><div className="dropdown-menu" role="combobox" Style="max-height: 411px; overflow: hidden; min-height: 112px; position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, -2px, 0px);" x-placement="top-start"><div className="inner show" role="listbox" aria-expanded="false" tabindex="-1" Style="max-height: 395px; overflow-y: auto; min-height: 96px;"><ul className="dropdown-menu inner show"><li className="selected active"><a role="option" className="dropdown-item selected active" aria-disabled="false" tabindex="0" aria-selected="true"><span className=" bs-ok-default check-mark"></span><span className="text">Choose...</span></a></li><li><a role="option" className="dropdown-item" aria-disabled="false" tabindex="0" aria-selected="false"><span className=" bs-ok-default check-mark"></span><span className="text">Option 1</span></a></li><li><a role="option" className="dropdown-item" aria-disabled="false" tabindex="0" aria-selected="false"><span className=" bs-ok-default check-mark"></span><span className="text">Option 2</span></a></li><li><a role="option" className="dropdown-item" aria-disabled="false" tabindex="0" aria-selected="false"><span className=" bs-ok-default check-mark"></span><span className="text">Option 3</span></a></li></ul></div></div></div>
                                            </div>
                                            </div>
                                            
                                            
                                            <div className="form-group col-md-9" >
                                            <label>Description detaillé de la tache </label>
                                        <textarea className="form-control" rows="5" id="comment" placeholder="Nouvelle Description sur la tache.."></textarea>
                                        </div>
                                        
                                        </div>

                                        <div className="form-group">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox"/>
                                                <label className="form-check-label">
                                                    Send Mail (Modification) 
                                                </label>
                                            </div>
                                        </div>
                                        
                                        <button type="submit" className="btn btn-primary">+ Modifier Societe</button>
                                    </form>
                                </div>
                            </div>
    </div>
  </div>

</div>

      
    );
}