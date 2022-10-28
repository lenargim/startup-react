import React from 'react';
import Header from "../Common/Header/Header";
import Breadcrumbs from "../Common/Breadcrumbs/Breadcrumbs";
import './../../App.sass'
import Title from "./Title/Title";
import Data from "./Data/Data";
import Slider from "./Slider/Slider";
import Info from "./Info/Info";
import Mainpart from "./Mainpart/Mainpart";
import Footer from "../Common/Footer/Footer";

const Project = () => {
  return (
    <div>
      <Header/>
      <main className="project main">
        <div className="container">
          <Breadcrumbs/>
          <Title/>
          <Data />
          <Slider/>
          <Info />
          <Mainpart/>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default Project;