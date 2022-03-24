import React from 'react'
import styles from './styles.module.css'
import { Grid, Icon, Image, Label} from 'semantic-ui-react'
import {MAIN_COLOR, FAV_COLOR } from '../../utils/constants'

export default function PokemonCard({pokemon}) {
  return (
    <Grid.Column mobile={16} tablet={8} computer={4} >
      <div className={styles.PokemonCard}>
          <Icon name='favorite' color={FAV_COLOR}/>
          <Image centered src={pokemon.sprites.front_default} alt="Pokemon front"/>
          <p className={styles.PokemonCardTitle}>{pokemon.name}</p>

          {
            pokemon.types.map((type) => 
              <Label  key={'pokemon_type_' + type.type.slot} color={MAIN_COLOR}> {type.type.name}</Label>
            )

          }
      </div>
    </Grid.Column>
  )
}
