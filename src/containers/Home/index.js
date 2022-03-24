import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux'
import { getPokemons } from '../../api/services/getPokemons';
import { setPokemon } from '../../actions';

import PokemonList from '../../components/PokemonList';
import Searcher from '../../components/Searcher';
import './styles.css';


function Home() {

  const dispatch = useDispatch()
  const list = useSelector(state => state.list)

  useEffect(() => {
    getPokemons(20)
    .then((res) => {
      dispatch(setPokemon(res.data.results))
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
