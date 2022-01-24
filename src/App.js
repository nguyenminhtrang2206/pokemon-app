import React from 'react';
import './App.css';
import Layout from './Layout';

import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import Home from './Home';
import PokeList from './PokeList';


const App = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="pokelist" element={<PokeList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default App;