import React from 'react'
import styles from './styles.module.css'
import { Grid, Icon, Image, Label} from 'semantic-ui-react'
import {MAIN_COLOR, FAV_COLOR } from '../../utils/constants'

export default function PokemonCard({pokemon}) {
  return (
    <Grid.Column mobile={16} tablet={8} computer={4} >
      <div className={styles.PokemonCard}>
          <Icon name='favorite' color={FAV_COLOR}/>
          <Image centered src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png" alt="Pokemon front"/>
          <p className={styles.PokemonCardTitle}>Ditto</p>
          <Label color={MAIN_COLOR}> Normal </Label>
      </div>
    </Grid.Column>
  )
}
