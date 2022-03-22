import React, { useEffect } from 'react';
import { getPokemons } from '../../api/services/getPokemons';

import PokemonList from '../../components/PokemonList';
import Searcher from '../../components/Searcher';
import './styles.css';

function Home() {


  useEffect(() => {

    getPokemons(151)
    .then((res ) => {
      console.log(res.data)
    })

  }, [])
  return (
    <div className='Home'>
      <Searcher />
      < PokemonList/>
    </div>
  );
}

export default Home;
