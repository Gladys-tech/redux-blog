import React from 'react';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./features/pages/Home";
import ArticleId from './features/blogs/ArticleId';
import Error from "./features/pages/Error"
//import Navigation from "./features/Nav/Index"
// import Login from "./Pages/Login";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
      
      {/* <Navigation/> */}
      
      <Routes>
      {/* <Route path="/login" element={<Login/>}/> */}
      <Route index element={<Home />} />
      <Route path="/article/:id" element={<ArticleId />}></Route>
      <Route path="*" element={<Error />}></Route>
      </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
