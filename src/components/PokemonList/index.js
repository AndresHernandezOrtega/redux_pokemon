import React from 'react'
import styles from './styles.module.css'
import { getPokemons } from '../../api/services/getPokemons'

import PokemonCard from './PokemonCard.js'
import { Grid } from 'semantic-ui-react'


export default function PokemonList ({ pokemons }) {

    pokemons = Array(20).fill(" ")

  return (
      <Grid className='PokemonList'>
          
          {
          pokemons.map( pokemon => < PokemonCard pokemon={pokemon} />)
          }

      </Grid>
    )
}
