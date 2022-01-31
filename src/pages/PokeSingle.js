import React from 'react';
import { useParams } from 'react-router-dom';

const PokeSingle = () => {
    let {pokemonName} = useParams();
    return (
        <div>
            Pokemon Single would be here {pokemonName}
        </div>
    );
};

export default PokeSingle;