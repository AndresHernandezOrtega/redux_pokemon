import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux'

// actions
import { updateFavoritesAction, fetchPokemons} from '../../slices/pokemonSlice';
import Loader from '../../components/Loader';

import PokemonList from '../../components/PokemonList';
import Searcher from '../../components/Searcher';
import './styles.css';


function Home() {

  const dispatch = useDispatch()
  const state = useSelector(state => state)

  useEffect(() => {
      dispatch(fetchPokemons())
      dispatch(updateFavoritesAction())
  }, [])


  return (
    <div className='Home'>
      <Searcher />
      <Loader loading={state.ui.loading}/> 
      < PokemonList pokemons={state.pokemon.list}/>
    </div>
  );
}

export default (Home);
