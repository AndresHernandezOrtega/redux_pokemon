import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux'

// actions
import { getPokemonWithDetails, updateFavoritesAction } from '../../actions';
import Loader from '../../components/Loader';

import PokemonList from '../../components/PokemonList';
import Searcher from '../../components/Searcher';
import './styles.css';


function Home() {

  const dispatch = useDispatch()
  const state = useSelector(state => state)

  useEffect(() => {
      dispatch(getPokemonWithDetails())
      dispatch(updateFavoritesAction())
  }, [])


  return (
    <div className='Home'>
      <Searcher />
      <Loader loading={state.loading}/> 
      < PokemonList pokemons={state.list}/>
    </div>
  );
}

export default (Home);
