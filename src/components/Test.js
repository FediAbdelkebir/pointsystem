import React, { useState, useEffect } from 'react';
import axios from "axios";
import './vendor/bootstrap-select/dist/css/bootstrap-select.min.css';
import './css/style.css';
import SideBar from './Dashboard/SideBar';
export default function Home() {
    return (
        <div>
             <SideBar />
            <div class="content-body">
			<div class="container-fluid">
				<div class="form-head d-flex mb-4 mb-md-5 align-items-start">
					<div class="input-group search-area d-inline-flex">
						<div class="input-group-append">
							<span class="input-group-text"><i class="flaticon-381-search-2"></i></span>
						</div>
						<input type="text" class="form-control" placeholder="Search here"/>
					</div>
					<a href="javascript:void(0);" class="btn btn-primary ml-auto">+ Add New Cyrpto</a>
				</div>
                <div class="row">
					<div class="col-xl-3 col-xxl-6 col-lg-6 col-sm-6">
						<div class="card overflow-hidden">
							<div class="card-header border-0 pb-0">
								<div class="mr-auto">
									<h2 class="text-black mb-2 font-w600">$65,123</h2>
									<p class="mb-1 fs-13">
									4%(30 days)</p>
								</div>
								<img src="images/svg/bitcoin-1.svg" alt=""/>	
							</div>
							<div class="card-body p-0">
								<canvas id="widgetChart1" height="75"></canvas>
							</div>
						</div>
                    </div>
					<div class="col-xl-3 col-xxl-6 col-lg-6 col-sm-6">
						<div class="card overflow-hidden">
							<div class="card-header border-0 pb-0">
								<div class="mr-auto">
									<h2 class="text-black mb-2 font-w600">$2,551</h2>
									<p class="mb-1 fs-13">
									
									4%(30 days)</p>
								</div>
								<img src="images/svg/ethereum-1.svg" alt=""/>	
							</div>
							<div class="card-body p-0">
								<canvas id="widgetChart2" height="75"></canvas>
							</div>
						</div>
                    </div>
					<div class="col-xl-3 col-xxl-6 col-lg-6 col-sm-6">
						<div class="card overflow-hidden">
							<div class="card-header border-0 pb-0">
								<div class="mr-auto">
									<h2 class="text-black mb-2 font-w600">$0,55</h2>
									<p class="mb-1 fs-13">
									
									4%(30 days)</p>
								</div>
								<img src="images/svg/ripple-1.svg" alt=""/>	
							</div>
							<div class="card-body p-0">
								<canvas id="widgetChart3" height="75"></canvas>
							</div>
						</div>
                    </div>
					<div class="col-xl-3 col-xxl-6 col-lg-6 col-sm-6">
						<div class="card overflow-hidden">
							<div class="card-header border-0 pb-0">
								<div class="mr-auto">
									<h2 class="text-black mb-2 font-w600">$65,123</h2>
									<p class="mb-1 fs-13">
									
									4%(30 days)</p>
								</div>
								<img src="images/svg/litecoin-1.svg" alt=""/>	
							</div>
							<div class="card-body p-0">
								<canvas id="widgetChart4" height="75"></canvas>
							</div>
						</div>
                    </div>
					<div class="col-xl-6 col-xxl-12 col-lg-12">
						<div class="card">
							<div class="card-header d-sm-flex d-block pb-0 border-0">
								<div>
									<h4 class="text-black fs-20">Market Overview</h4>
									<p class="fs-13 mb-0">Lorem ipsum dolor sit amet, consectetur</p>
								</div>
								<div class="dropdown mt-sm-0 mt-3">
                                    <button type="button" class="btn rounded-0 text-black bgl-light dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
										Monthly (2020)
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <a class="dropdown-item" href="javascript:void(0);">Link 1</a>
                                        <a class="dropdown-item" href="javascript:void(0);">Link 2</a>
                                        <a class="dropdown-item" href="javascript:void(0);">Link 3</a>
                                    </div>
                                </div>
							</div>
							<div class="card-body" id="user-activity">
								<div class="d-flex flex-wrap justify-content-between mb-5">
									<div class="card-action card-tabs icontabs mt-3 mt-sm-0">
										<ul class="nav nav-tabs" role="tablist">
											<li class="nav-item">
												<a class="nav-link active" data-toggle="tab" href="#user" role="tab" aria-selected="true">
													ALL	
												</a>
											</li>
											<li class="nav-item">
												<a class="nav-link" data-toggle="tab" href="#bounce" role="tab" aria-selected="false">
													<i class="fa fa-btc" aria-hidden="true"></i>
												</a>
											</li>
											<li class="nav-item">
												<a class="nav-link" data-toggle="tab" href="#session-duration" role="tab" aria-selected="false">
													<i class="lab la-ethereum"></i>
												</a>
											</li>
										</ul>
									</div>
									<div class="d-flex align-items-center mt-3 mt-sm-0">
										<p class="mb-0 fs-13 mr-3">Average</p>
										<h2 class="mb-0 text-black font-w600">45%</h2>
									</div>
								</div>
								<div class="tab-content" id="myTabContent">
									<div class="tab-pane fade show active" id="user" role="tabpanel">
										<canvas id="activityLine" height="350"></canvas>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xl-6 col-xxl-12 col-lg-12">
						<div class="card">
							<div class="card-header d-block d-sm-flex border-0 pb-0">
								<div>
									<h4 class="text-black fs-20">Cards</h4>
									<p class="fs-13 mb-0">Lorem ipsum dolor sit amet, consectetur</p>
								</div>
								<div class="dropdown custom-dropdown mb-0 mt-3 mt-sm-0">
									<div class="btn text-black bgl-light rounded-0" data-toggle="dropdown">
										Settings
										
									</div>
									<div class="dropdown-menu dropdown-menu-right">
                                        <a class="dropdown-item" href="javascript:void(0);">Details</a>
                                        <a class="dropdown-item text-danger" href="javascript:void(0);">Cancel</a>
                                    </div>
                                </div>
							</div>
							<div class="card-body">
								<div class="owl-bank-wallet owl-carousel owl-loaded owl-drag mb-4">
									<div class="items">
										<img class="mw-100" src="images/card/card1.jpg" alt=""/>
									</div>
									<div class="items">
										<img  class="mw-100" src="images/card/card2.jpg" alt=""/>
									</div>
									<div class="items">
										<img  class="mw-100" src="images/card/card3.jpg" alt=""/>
									</div>
								</div>
								<div class="media align-items-center d-none d-sm-flex">
									<div class="d-inline-block relative donut-chart-sale mr-4">
										<span class="donut" data-peity='{ "fill": ["rgb(60, 75, 165)", "rgba(236, 236, 236, 1)"],   "innerRadius": 32, "radius": 10}'>7/8</span>
										<small class="text-primary">71%</small>
									</div>
									<div class="media-body">
										<p class="mb-2">Monthly Limits</p>
										<h4 class="mb-0 text-black font-w600 fs-20">$20,000 of $100,000</h4>
									</div>
									<a class="btn btn-link ml-auto font-w700" href="javascript:void(0);">View details</a>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xl-6 col-xxl-8 col-lg-8">
						<div class="card">
							<div class="card-header d-block d-sm-flex border-0">
								<div>
									<h4 class="fs-20 text-black">Recent Trading Activities</h4>
									<p class="mb-0 fs-13">Lorem ipsum dolor sit amet, consectetur</p>
								</div>
								<div class="card-action card-tabs mt-3 mt-sm-0">
									<ul class="nav nav-tabs" role="tablist">
										<li class="nav-item">
											<a class="nav-link active" data-toggle="tab" href="#monthly" role="tab">
												Monthly	
											</a>
										</li>
										<li class="nav-item">
											<a class="nav-link" data-toggle="tab" href="#Weekly" role="tab">
												Weekly
											</a>
										</li>
										<li class="nav-item">
											<a class="nav-link" data-toggle="tab" href="#Today" role="tab">
												Today
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div class="card-body tab-content p-0">
								<div class="tab-pane active show fade" id="monthly" role="tabpanel">
									<div class="table-responsive">
										<table class="table shadow-hover card-table">
											<tbody>
												<tr>
													<td>
														<span class="bgl-success p-3 d-inline-block">
															
														</span>
													</td>
													<td>
														<div class="font-w600 wspace-no">
															<span class="mr-1">
																
															</span>
															Bitcoin
														</div>
													</td>
													<td class="font-w500">06:24:45 AM</td>
													<td class="font-w600 text-center">+$5,553</td>
													<td><a class="btn-link text-success float-right" href="javascript:void(0);">Completed</a></td>
												</tr>
												<tr>
													<td>
														<span class="bgl-danger p-3 d-inline-block">
														
														</span>
													</td>
													<td>
														<div class="font-w600  wspace-no">
															<span class="mr-1">
															
															</span>
															Ethereum
														</div>
													</td>
													<td class="font-w500">06:24:45 AM</td>
													<td class="font-w600 text-center">-$542</td>
													<td>
														<a class="btn-link text-dark float-right" href="javascript:void(0);">Pending</a>
													</td>
												</tr>
												<tr>
													<td>
														<span class="bgl-danger p-3 d-inline-block ">
															
														</span>
													</td>
													<td>
														<div class="font-w600  wspace-no">
															<span class="mr-1">
																
															</span>
															Ripple
														</div>
													</td>
													<td class="font-w500">06:24:45 AM</td>
													<td class="font-w600 text-center">-$912</td>
													<td>
														<a class="btn-link text-danger float-right" href="javascript:void(0);">Canceled</a>
													</td>
												</tr>
												<tr>
													<td>
													<span class="bgl-success p-3 d-inline-block">
													
													</span>
													</td>
													<td>
														<div class="font-w600 wspace-no">
															<span class="mr-1">
																
															</span>
															Litecoin
														</div>
													</td>
													<td class="font-w500">06:24:45 AM</td>
													<td class="font-w600 text-center">+$7,762</td>
													<td>
														<a class="btn-link text-success float-right" href="javascript:void(0);">Completed</a>
													</td>
												</tr>
												<tr>
													<td>
														<span class="bgl-success p-3 d-inline-block">
															
														</span>
													</td>
													<td>
														<div class="font-w600 wspace-no">
															<span class="mr-1">
																
															</span>
															Bitcoin
														</div>
													</td>
													<td class="font-w500">06:24:45 AM</td>
													<td class="font-w600 text-center">+$5,553</td>
													<td>
														<a class="btn-link text-success float-right" href="javascript:void(0);">Completed</a>
													</td>
												</tr>
												<tr>
													<td>
														<span class="bgl-danger p-3  d-inline-block">
														
														</span>
													</td>
													<td>
														<div class="font-w600 wspace-no">
															<span class="mr-1">
																
															</span>
															Ripple
														</div>
													</td>
													<td class="font-w500">06:24:45 AM</td>
													<td class="font-w600 text-center">-$912</td>
													<td>
														<a class="btn-link text-danger float-right" href="javascript:void(0);">Canceled</a>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
								<div class="tab-pane" id="Weekly" role="tabpanel">
									<div class="table-responsive">
										<table class="table shadow-hover  card-table">
											<tbody>
												<tr>
													<td>
														<span class="bgl-success p-3  d-inline-block">
															
														</span>
													</td>
													<td>
														<div class="font-w600">
															<span class="mr-1">
																
															</span>
															Bitcoin
														</div>
													</td>
													<td class="font-w500">06:24:45 AM</td>
													<td class="font-w600 text-center">+$5,553</td>
													<td><a class="btn-link text-success float-right" href="#">Completed</a></td>
												</tr>
												<tr>
													<td>
														<span class="bgl-danger p-3  d-inline-block">
														
														</span>
													</td>
													<td>
														<div class="font-w600">
															<span class="mr-1">
																
															</span>
															Ethereum
														</div>
													</td>
													<td class="font-w500">06:24:45 AM</td>
													<td class="font-w600 text-center">-$542</td>
													<td>
														<a class="btn-link text-dark float-right" href="#">Pending</a>
													</td>
												</tr>
												<tr>
													<td>
														<span class="bgl-danger p-3  d-inline-block">
															
														</span>
													</td>
													<td>
														<div class="font-w600">
															<span class="mr-1">
																
															</span>
															Ripple
														</div>
													</td>
													<td class="font-w500">06:24:45 AM</td>
													<td class="font-w600 text-center">-$912</td>
													<td>
														<a class="btn-link text-danger float-right" href="#">Canceled</a>
													</td>
												</tr>
												
												<tr>
													<td>
														<span class="bgl-danger p-3  d-inline-block">
															
														</span>
													</td>
													<td>
														<div class="font-w600">
															<span class="mr-1">
																
															</span>
															Ripple
														</div>
													</td>
													<td class="font-w500">06:24:45 AM</td>
													<td class="font-w600 text-center">-$912</td>
													<td>
														<a class="btn-link text-danger float-right" href="#">Canceled</a>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
								<div class="tab-pane" id="Today" role="tabpanel">
									<div class="table-responsive">
										<table class="table shadow-hover card-table">
											<tbody>
												<tr>
													<td>
														<span class="bgl-success p-3  d-inline-block">
															
														</span>
													</td>
													<td>
														<div class="font-w600">
															<span class="mr-1">
																
															</span>
															Bitcoin
														</div>
													</td>
													<td class="font-w500">06:24:45 AM</td>
													<td class="font-w600 text-center">+$5,553</td>
													<td><a class="btn-link text-success float-right" href="#">Completed</a></td>
												</tr>
												<tr>
													<td>
														<span class="bgl-danger p-3  d-inline-block">
													
														</span>
													</td>
													<td>
														<div class="font-w600">
															<span class="mr-1">
																
															</span>
															Ethereum
														</div>
													</td>
													<td class="font-w500">06:24:45 AM</td>
													<td class="font-w600 text-center">-$542</td>
													<td>
														<a class="btn-link text-dark float-right" href="#">Pending</a>
													</td>
												</tr>
												<tr>
													<td>
														<span class="bgl-danger p-3  d-inline-block">
															
														</span>
													</td>
													<td>
														<div class="font-w600">
															<span class="mr-1">
															
															</span>
															Ripple
														</div>
													</td>
													<td class="font-w500">06:24:45 AM</td>
													<td class="font-w600 text-center">-$912</td>
													<td>
														<a class="btn-link text-danger float-right" href="#">Canceled</a>
													</td>
												</tr>
												<tr>
													<td>
													<span class="bgl-success p-3  d-inline-block">
													
													</span>
													</td>
													<td>
														<div class="font-w600">
															<span class="mr-1">
															
															</span>
															Litecoin
														</div>
													</td>
													<td class="font-w500">06:24:45 AM</td>
													<td class="font-w600 text-center">+$7,762</td>
													<td>
														<a class="btn-link text-success float-right" href="#">Completed</a>
													</td>
												</tr>
												<tr>
													<td>
														<span class="bgl-success p-3  d-inline-block">
														
														</span>
													</td>
													<td>
														<div class="font-w600">
															<span class="mr-1">
															
															</span>
															Bitcoin
														</div>
													</td>
													<td class="font-w500">06:24:45 AM</td>
													<td class="font-w600 text-center">+$5,553</td>
													<td>
														<a class="btn-link text-success float-right" href="javascript:void(0);">Completed</a>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
                            </div>
						</div>
					</div>
					<div class="col-xl-3 col-xxl-4 col-lg-4 col-sm-6">
						<div class="card">
							<div class="card-header border-0">
								<h4 class="mb-0 text-black fs-20">Sell Order</h4>
								<div class="dropdown custom-dropdown mb-0">
                                    <div class="btn sharp btn-primary tp-btn" data-toggle="dropdown">
										
									</div>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <a class="dropdown-item" href="javascript:void(0);">Details</a>
                                        <a class="dropdown-item text-danger" href="javascript:void(0);">Cancel</a>
                                    </div>
                                </div>
							</div>
							<div class="card-body p-0">
								<div class="dropdown custom-dropdown d-block">
									<div class="btn bgl-light d-flex align-items-center rounded-0 svg-btn " data-toggle="dropdown">
										
										<div class="text-left ml-3">
											<span class="d-block fs-16 text-black">Ethereum</span>
										</div>
										<i class="fa fa-angle-down scale5 ml-auto"></i>
									</div>
									<div class="dropdown-menu dropdown-menu-right">
										<a class="dropdown-item" href="javascript:void(0);">4 June 2020 - 4 July 2020</a>
										<a class="dropdown-item" href="javascript:void(0);">5 july 2020 - 4 Aug 2020</a>
									</div>
								</div>
								
								<div class="table-responsive">
                                    <table class="table text-center bg-secondary-hover card-table">
                                        <thead>
											<tr>
												<th class="text-left">Price</th>
												<th>Amount</th>
												<th class="text-right">Total</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td class="text-left">82.3</td>
												<td>0.15</td>
												<td class="text-right">$134,12</td>
											</tr>
											<tr>
												<td class="text-left">83.9</td>
												<td>0.18</td>
												<td class="text-right">$237,31</td>
											</tr>
											<tr>
												<td class="text-left">84.2</td>
												<td>0.25</td>
												<td class="text-right">$252,58</td>
											</tr>
											<tr>
												<td class="text-left">86.2</td>
												<td>0.35</td>
												<td class="text-right">$126,26</td>
											</tr>
											<tr>
												<td class="text-left">91.6</td>
												<td>0.75</td>
												<td class="text-right">$46,92</td>
											</tr>
											<tr>
												<td class="text-left">92.6</td>
												<td>0.21</td>
												<td class="text-right">$123,27</td>
											</tr>
											<tr>
												<td class="text-left">93.9</td>
												<td>0.55</td>
												<td class="text-right">$212,56</td>
											</tr>
											<tr>
												<td class="text-left">94.2</td>
												<td>0.18</td>
												<td class="text-right">$129,26</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							<div class="card-footer border-0 pt-0 text-center">
								<a href="javascript:void(0);" class="btn-link">Show more <i class="fa fa-caret-right ml-2 scale-2"></i></a>
							</div>
						</div>
					</div>
					<div class="col-xl-3 col-xxl-4 col-lg-4 col-sm-6">
						<div class="card">
							<div class="card-header border-0">
								<h4 class="mb-0 text-black fs-20">Buy Order</h4>
								<div class="dropdown custom-dropdown mb-0">
                                    <div class="btn sharp btn-primary tp-btn" data-toggle="dropdown">
									
									</div>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <a class="dropdown-item" href="javascript:void(0);">Details</a>
                                        <a class="dropdown-item text-danger" href="javascript:void(0);">Cancel</a>
                                    </div>
                                </div>
							</div>
							<div class="card-body p-0">
								<div class="dropdown custom-dropdown d-block">
									<div class="btn bgl-light d-flex align-items-center rounded-0 svg-btn " data-toggle="dropdown">
									
										<div class="text-left ml-3">
											<span class="d-block fs-16 text-black">Ripple</span>
										</div>
										<i class="fa fa-angle-down scale5 ml-auto"></i>
									</div>
									<div class="dropdown-menu dropdown-menu-right">
										<a class="dropdown-item" href="javascript:void(0);">4 June 2020 - 4 July 2020</a>
										<a class="dropdown-item" href="javascript:void(0);">5 july 2020 - 4 Aug 2020</a>
									</div>
								</div>
								
								<div class="table-responsive">
                                    <table class="table text-center bg-info-hover card-table">
                                        <thead>
											<tr>
												<th class="text-left">Price</th>
												<th>Amount</th>
												<th class="text-right">Total</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td class="text-left">83.9</td>
												<td>0.18</td>
												<td class="text-right">$237,31</td>
											</tr>
											<tr>
												<td class="text-left">82.3</td>
												<td>0.15</td>
												<td class="text-right">$134,12</td>
											</tr>
											<tr>
												<td class="text-left">84.2</td>
												<td>0.25</td>
												<td class="text-right">$252,58</td>
											</tr>
											<tr>
												<td class="text-left">91.6</td>
												<td>0.75</td>
												<td class="text-right">$46,92</td>
											</tr>
											<tr>
												<td class="text-left">94.2</td>
												<td>0.18</td>
												<td class="text-right">$129,26</td>
											</tr>
											<tr>
												<td class="text-left">86.2</td>
												<td>0.35</td>
												<td class="text-right">$126,26</td>
											</tr>
											<tr>
												<td class="text-left">93.9</td>
												<td>0.55</td>
												<td class="text-right">$212,56</td>
											</tr>
											<tr>
												<td class="text-left">92.6</td>
												<td>0.21</td>
												<td class="text-right">$123,27</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							<div class="card-footer border-0 pt-0 text-center">
								<a href="javascript:void(0);" class="btn-link">Show more <i class="fa fa-caret-right ml-2 scale-2"></i></a>
							</div>
						</div>
					</div>
					<div class="col-xl-6 col-xxl-8 col-lg-8">
						<div class="card">
							<div class="card-header border-0 pb-0 d-block d-md-flex">
								<div>
									<h4 class="fs-20 text-black">Quick Trade</h4>
									<p class="mb-0 fs-13">Lorem ipsum dolor sit amet, consectetur</p>
								</div>
								<div class="dropdown custom-dropdown d-block mt-3 mt-sm-0">
									<div class="btn bgl-light d-flex align-items-center rounded-0 svg-btn btn-md" data-toggle="dropdown">
										<i class="fa fa-angle-down scale5 mr-3"></i>
										<div class="text-left ml-3">
											<span class="d-block fs-16 text-black">561,511 Btc</span>
										</div>
										
									</div>
									<div class="dropdown-menu dropdown-menu-right">
										<a class="dropdown-item" href="javascript:void(0);">4 June 2020 - 4 July 2020</a>
										<a class="dropdown-item" href="javascript:void(0);">5 july 2020 - 4 Aug 2020</a>
									</div>
								</div>
							</div>
							<div class="card-body">
								<div class="basic-form">
                                    <form>
                                        <div class="form-group">
											<div class="input-group input-group-lg">
												<div class="input-group-prepend">
													<span class="input-group-text bg-white border rounded-0">Amount BTC</span>
												</div>
												<input type="number" class="form-control rounded-0" placeholder="0,000000"/>
											</div>
                                        </div>
                                        <div class="form-group">
                                            <div class="input-group input-group-lg">
												<div class="input-group-prepend">
													<span class="input-group-text bg-white border  rounded-0">Price BPL</span>
												</div>
												<input type="number" class="form-control rounded-0" placeholder="0,000000"/>
											</div>
                                        </div>
										<div class="form-group">
                                            <div class="input-group input-group-lg">
												<div class="input-group-prepend">
													<span class="input-group-text bg-white border rounded-0">Fee (1%)</span>
												</div>
												<input type="number" class="form-control rounded-0" placeholder="0,000000"/>
											</div>
                                        </div>
										<div class="form-group">
											<div class="input-group input-group-lg">
												<div class="input-group-prepend">
													<span class="input-group-text bg-white border rounded-0">Total BPL</span>
												</div>
												<input type="number" class="form-control rounded-0" placeholder="0,000000"/>
											</div>
                                        </div>
                                    </form>
                                </div>
							</div>
							<div class="card-footer border-0 pt-0">
								<div class="row align-items-center">
									<div class="col-md-5">
										<p class="mb-0 fs-13">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
									</div>
									<div class="col-md-7 text-left mt-3 mt-sm-0 text-sm-right">
										<a href="javascript:void(0);" class="btn btn-success rounded-0 mb-2">
										BUY
										
										</a>
										<a href="javascript:void(0);" class="btn ml-3 btn-danger rounded-0 mb-2">
										SELL
										
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xl-6 col-xxl-12">
						<div class="card">
							<div class="card-header d-block d-sm-flex border-0 pb-0">
								<div>
									<h4 class="fs-20 text-black">Quick Transfer</h4>
									<p class="mb-0 fs-13">Lorem ipsum dolor sit amet, consectetur</p>
								</div>
								<div class="dropdown custom-dropdown d-block mt-3 mt-sm-0">
									<div class="btn bgl-light d-flex align-items-center rounded-0 svg-btn " data-toggle="dropdown">
										<i class="fa fa-angle-down scale5 mr-3"></i>
										<div class="text-left ml-3">
											<span class="d-block fs-16 text-black">23,511 Ltc</span>
										</div>
									
									</div>
									<div class="dropdown-menu dropdown-menu-right">
										<a class="dropdown-item" href="javascript:void(0);">4 June 2020 - 4 July 2020</a>
										<a class="dropdown-item" href="javascript:void(0);">5 july 2020 - 4 Aug 2020</a>
									</div>
								</div>
							</div>
							<div class="card-body">
								<div class="basic-form">
                                    <form>
                                        <div class="form-group">
											<div class="input-group input-group-lg">
												<div class="input-group-prepend">
													<span class="input-group-text bg-white border rounded-0">Amount BTC</span>
												</div>
												<input type="number" class="form-control rounded-0" placeholder="0,000000"/>
											</div>
                                        </div>
									</form>
								</div>
								<div class="d-flex justify-content-between align-items-center">
									<h4 class="fs-20 text-black mb-0">Recent Contacts</h4>
									<a href="javascript:void(0);" class="btn btn-link">View more</a>
								</div>
								<div class="testimonial-one owl-right-nav owl-carousel owl-loaded owl-drag">
									<div class="items">
										<div>
											<img class="mb-3" src="images/profile/10.jpg" alt=""/>
											<h5 class="text-black mb-0">Samuel</h5>
											<span class="fs-12">@sam224</span>
										</div>
									</div>
									<div class="items">
										<div>
											<img class="mb-3" src="images/profile/11.jpg" alt=""/>
											<h5 class="text-black mb-0">Cindy</h5>
											<span class="fs-12">@cindyss</span>
										</div>
									</div>
									<div class="items">
										<div>
											<img class="mb-3" src="images/profile/12.jpg" alt=""/>
											<h5 class="text-black mb-0">David</h5>
											<span class="fs-12">@davidxc</span>
										</div>
									</div>
									<div class="items">
										<div>
											<img class="mb-3" src="images/profile/13.jpg" alt=""/>
											<h5 class="text-black mb-0">Martha </h5>
											<span class="fs-12">@marthaa</span>
										</div>
									</div>
									<div class="items">
										<div>
											<img class="mb-3" src="images/profile/14.jpg" alt=""/>
											<h5 class="text-black mb-0">Olivia </h5>
											<span class="fs-12">@oliv62</span>
										</div>
									</div>
									<div class="items">
										<div>
											<img class="mb-3" src="images/profile/15.jpg" alt=""/>
											<h5 class="text-black mb-0">Bella</h5>
											<span class="fs-12">@bellazz</span>
										</div>
									</div>
								</div>
							</div>
							<div class="card-footer border-0 pt-0">
								<div class="row align-items-center">
									<div class="col-md-7">
										<p class="mb-0 fs-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
									</div>
									<div class="col-md-5 text-right">
										<a href="javascript:void(0);" class="btn btn-primary d-block rounded-0 mt-3 mt-md-0">
										TRANSFER NOW
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
            </div>
        </div>
        </div>
    );

}
