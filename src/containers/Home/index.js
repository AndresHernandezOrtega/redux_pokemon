import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux'
import { getPokemons } from '../../api/services/getPokemons';
import { setPokemon } from '../../actions';

import PokemonList from '../../components/PokemonList';
import Searcher from '../../components/Searcher';
import './styles.css';
import axios from 'axios';


function Home() {

  const dispatch = useDispatch()
  const list = useSelector(state => state.list)

  useEffect(() => {
    getPokemons(20)
    .then((res) => {
      const pokemons = res.data.results
      console.log(pokemons)
      return Promise.all(pokemons.map(pokemon => axios.get(pokemon.url)))
      })
    .then((pokemonResponse) => {
      const pokemonsData = pokemonResponse.map(responses => responses.data)
      dispatch(setPokemon(pokemonsData))

    })
  }, [])

  return (
    <div className='Home'>
      <Searcher />
      < PokemonList pokemons={list}/>
    </div>
  );
}

export default (Home);
