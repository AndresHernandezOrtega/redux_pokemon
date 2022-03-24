import React from 'react'
import styles from './styles.module.css'
import { getPokemons } from '../../api/services/getPokemons'

import PokemonCard from './PokemonCard.js'
import { Grid } from 'semantic-ui-react'


export default function PokemonList ({ pokemons }) {
  return (
      <Grid className='PokemonList'>
          
          {
          pokemons.map( (pokemon, index) => < PokemonCard pokemon={pokemon} key={`pokemon-${index}`}/>)
          }

      </Grid>
    )

}

PokemonList.defaultProps = {
    pokemons: []
}