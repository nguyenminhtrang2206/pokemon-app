import React from 'react';
import './App.css';
import Layout from './components/Layout';

import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import Home from './pages/Home';
import PokeList from './pages/PokeList';


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