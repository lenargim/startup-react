import React from 'react';
import Sidebar from "./Sidebar/Sidebar";
import s from './Mainpart.module.sass'
import Content from "./Content/Content";
import useCheckScreen from "../../../handlers/handler";
import Info from "./Sidebar/Info/Info";
import {Route, Routes} from "react-router-dom";
import Award from "./Award/Award";


const Mainpart = () => {
  return (
    <div className={s.mainpart}>
      <Sidebar/>
      <Routes>
        <Route path={'award'} element={<Award/>}/>
        <Route  path={'/'} element={<Content/>}/>
      </Routes>
      {!useCheckScreen(1023) || <Info/>}
    </div>
  );
};

export default Mainpart;