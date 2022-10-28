import React from 'react';
import Header from "../Common/Header/Header";
import Banner from "./Banner/Banner";
import New from "./New/New";
import Categories from "./Categories/Categories";
import Popular from "./Popular/Popular";
import Footer from "../Common/Footer/Footer";

const Home = () => {
  return (
    <>
      <Header/>
      <main>
        <Banner/>
        <div className="container">
          <New/>
          <Categories/>
          <Popular/>
        </div>
      </main>
      <Footer/>
    </>
  );
};

export default Home;