import React from "react";
import Header from './header/Header';
import Maincontent from "./maincontent/Maincontent";
import Aside from "./aside/Aside";
import Footer from "./footer/Footer";
import "./Dashboard.css"

const Dashborad = ()=>{
    return(
        <div className="dashboard">
        <Header />
        <div className="dashboard-body">
          <Aside />
          <Maincontent />
        </div>
        <Footer />
      </div>
    )
}

export default Dashborad;