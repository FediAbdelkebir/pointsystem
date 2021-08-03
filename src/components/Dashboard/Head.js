import React, { useState, useEffect } from 'react';
import axios from "axios";

import '../css/style.css';
import '../vendor/bootstrap-select/dist/css/bootstrap-select.min.css';
import '../vendor/chartist/css/chartist.min.css';
import '../vendor/jqvmap/css/jqvmap.min.css';
export default function Head() {
    return ( 
      <div>
              <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width,initial-scale=1"/>
    <title>SVI Admin Dashboard</title>
    <link rel="icon" type="image/png" sizes="16x16" href="./images/favicon.png"/>
    <link href="../vendor/owl-carousel/owl.carousel.css" rel="stylesheet"/>
      </div>
      
    );
}
