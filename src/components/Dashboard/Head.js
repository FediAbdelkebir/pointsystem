import React, { useState, useEffect } from 'react';
import axios from "axios";

import '../css/style.css';
import '../vendor/bootstrap-select/dist/css/bootstrap-select.min.css';
import '../vendor/chartist/css/chartist.min.css';
import '../vendor/jqvmap/css/jqvmap.min.css';
export default function Head() {
    return ( 
        <div>
            <title>SVI Admin Dashboard</title>  
            <meta charSet="utf-8"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width,initial-scale=1"/>
            <link rel="icon" type="image/png" sizes="16x16" href="./images/favicon.png"/>
            <link href="https://cdn.discordapp.com/attachments/872812355044646932/872812545734500372/owl.carousel.css" rel="stylesheet"/>
      </div>
      
    );
}
