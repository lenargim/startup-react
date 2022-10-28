import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Components/Home/Home";
import CreateProject from "./Components/CreateProject/CreateProject";
import Project from "./Components/Project/Project";
import Thankyou from "./Components/CreateProject/Thankyou/Thankyou";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/project/*'} element={<Project/>}/>
        <Route path={'create-project/*'} element={<CreateProject/>}/>
        <Route path={'/thankyou'} element={<Thankyou />} />
      </Routes>
    </Router>
  )
}

export default App;
