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
import PokeSingle from './pages/PokeSingle';

const App = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="pokelist" element={<PokeList />} />
            <Route path="/:pokemonName" element={<PokeSingle />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default App;