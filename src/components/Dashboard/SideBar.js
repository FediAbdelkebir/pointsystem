import React, { useState, useEffect } from 'react';
import axios from "axios";
import '../vendor/bootstrap-select/dist/css/bootstrap-select.min.css';
import '../css/style.css';
import Header from './Header';
//import Head from './Head';
import Scripts from './Scripts';
import {Link} from "react-router-dom";

export default function SideBar() {
    return (
        <div style={{fontFamily: "'poppins', sans-serif"}}>
            {/*<Head />*/}
            <Header />
          <div className="deznav">
            <div className="deznav-scroll">
				<ul className="metismenu" id="menu">
                    <li><a className="has-arrow ai-icon"  aria-expanded="false">
							<i className="flaticon-381-networking"></i>
							<span className="nav-text">Societé</span>
						</a>
                        <ul aria-expanded="false">
                            <li><Link to={`/Societes`}>Societes</Link></li>
							<li><a href="index.html">Employees</a></li>	
                            <li><Link to={`/Taches`}>Taches</Link></li>
						</ul>
                    </li>
                    <li><a className="has-arrow ai-icon"  aria-expanded="false">
                    <i className="flaticon-381-notepad"></i>
							<span className="nav-text">Taches</span>
						</a>
                        <ul aria-expanded="false">
                            <li><a href="./ui-accordion.html">Liste Des Taches</a></li>
                            <li><Link to={`/AjouterTache`}>Ajouter Tache</Link></li>
                            <li><a href="./ui-badge.html">Affecter Tache</a></li>
                            <li><a href="./ui-button.html">Gestion Taches</a></li>
                        </ul>
                    </li>
                    <li><a className="has-arrow ai-icon"  aria-expanded="false">
							<i className="fa fa-shopping-cart"></i>
							<span className="nav-text">Shops</span>
						</a>
                        <ul aria-expanded="false"> 	
									<li><a href="./ecom-product-list.html">Produit List</a></li>
									<li><a href="./ecom-product-detail.html">Produit Detailles</a></li>
									<li><a href="./ecom-product-order.html">Order</a></li>
									<li><a href="./ecom-checkout.html">Checkout</a></li>
									<li><a href="./ecom-invoice.html">Invoice</a></li>

                        </ul>
                    </li>
                    <li><a className="has-arrow ai-icon"  aria-expanded="false">
							<i className="flaticon-381-controls-3"></i>
							<span className="nav-text">Statistiques</span>
						</a>
                        <ul aria-expanded="false">
                            <li><a href="./chart-flot.html">Employees</a></li>
                            <li><a href="./chart-morris.html">Produits</a></li>
                            <li><a href="./chart-chartjs.html">Taches</a></li>
                        </ul>
                    </li>
                    
                </ul>
				<div className="copyright">
					<p><strong>SIV - Admin Dashboard</strong> © 2021 All Rights Reserved</p>
				</div>
			</div>
        </div>   
        <Scripts/>
        </div>
    );

}