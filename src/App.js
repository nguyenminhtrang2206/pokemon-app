import React from 'react';
import './App.css';
import Layout from './Layout';

import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import Home from './Home';
import PokemonsList from './PokemonsList';


const App = () => {
    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/" element= {<Layout/>}>
                    <Route index element={<Home />} />
                    <Route path="/pokemons" element={<PokemonsList />} />
                </Route>
            </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;