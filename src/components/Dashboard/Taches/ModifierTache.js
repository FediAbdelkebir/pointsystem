import React, { useState, useEffect } from 'react';
import axios from "axios";
import '../../vendor/bootstrap-select/dist/css/bootstrap-select.min.css';
import '../../css/style.css';
import SideBar from '../SideBar';

export default function AjouterTache() {
    return (
<div Style="font-family: 'poppins', sans-serif;">
    
  <SideBar />
  <div class="content-body">
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
                                                <label>Modifier Nom Tache</label>
                                                <input type="text" class="form-control" placeholder="Nouveau nom de la tache"/>
                                            </div>
                                            <div class="form-group col-md-2">
                                            <label>Nouveau Nombre de Points </label>
                                            <input type="text" class="form-control"/>
                                            </div>
                                            <div class="form-group col-md-2">
                                            <p class="mb-1">Nouveau Date Range Pick</p>
                                            <input class="form-control input-daterange-datepicker" type="text" name="daterange" value="01/01/2015 - 01/31/2015"/>
                                            </div>
                                            <div class="form-group col-md-4">
                                                
                                                <label>Nouveau Responsable</label>
                                                <div class="form-group col-md-6">
                                                <div class="dropdown bootstrap-select form-control dropup"><select id="inputState" class="form-control" tabindex="-98">
                                                    <option selected="">Choose...</option>
                                                    <option>Option 1</option>
                                                    <option>Option 2</option>
                                                    <option>Option 3</option>
                                                </select><button type="button" class="btn dropdown-toggle btn-light" data-toggle="dropdown" role="button" data-id="inputState" title="Choose..." aria-expanded="false"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">Choose...</div></div> </div></button><div class="dropdown-menu" role="combobox" Style="max-height: 411px; overflow: hidden; min-height: 112px; position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, -2px, 0px);" x-placement="top-start"><div class="inner show" role="listbox" aria-expanded="false" tabindex="-1" Style="max-height: 395px; overflow-y: auto; min-height: 96px;"><ul class="dropdown-menu inner show"><li class="selected active"><a role="option" class="dropdown-item selected active" aria-disabled="false" tabindex="0" aria-selected="true"><span class=" bs-ok-default check-mark"></span><span class="text">Choose...</span></a></li><li><a role="option" class="dropdown-item" aria-disabled="false" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">Option 1</span></a></li><li><a role="option" class="dropdown-item" aria-disabled="false" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">Option 2</span></a></li><li><a role="option" class="dropdown-item" aria-disabled="false" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">Option 3</span></a></li></ul></div></div></div>
                                            </div>
                                            </div>
                                            
                                            
                                            <div class="form-group col-md-9" >
                                            <label>Description detaillé de la tache </label>
                                        <textarea class="form-control" rows="5" id="comment" placeholder="Nouvelle Description sur la tache.."></textarea>
                                        </div>
                                        
                                        </div>

                                        <div class="form-group">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox"/>
                                                <label class="form-check-label">
                                                    Send Mail (Modification) 
                                                </label>
                                            </div>
                                        </div>
                                        
                                        <button type="submit" class="btn btn-primary">+ Modifier Tache</button>
                                    </form>
                                </div>
                            </div>
    </div>
  </div>

</div>

      
    );
}