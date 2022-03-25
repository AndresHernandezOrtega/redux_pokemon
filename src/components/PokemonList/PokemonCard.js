import React, { useCallback }from 'react'
import styles from './styles.module.css'
import { Grid, Icon, Image, Label} from 'semantic-ui-react'
import {MAIN_COLOR, FAV_COLOR , DEFAULT_COLOR} from '../../utils/constants'

import { useDispatch, useSelector } from 'react-redux'
import { updateFavoritesAction } from '../../actions'

export default function PokemonCard({pokemon}) {
  
  const dispatch = useDispatch()
  const favorites = useSelector(state => state.favorites)
  
  const handleFavorite = useCallback(() => {
    dispatch(updateFavoritesAction(pokemon.id))
  },[favorites])

  return (
    <Grid.Column mobile={16} tablet={8} computer={4} >
      <div className={styles.PokemonCard}>
          <button className={styles.pokemonCardFavorite} onClick={handleFavorite} >
            <Icon name='favorite' color={favorites.includes(pokemon.id) ? FAV_COLOR : DEFAULT_COLOR}/>
          </button> 

          <Image centered src={pokemon.sprites.front_default} alt="Pokemon front"/>
          <p className={styles.PokemonCardTitle}>{pokemon.name}</p>

          {
            pokemon.types.map((type) => 
              <Label  key={'pokemon_type_' + type.slot} color={MAIN_COLOR}> {type.type.name}</Label>
            )

          }
      </div>
    </Grid.Column>
  )
}
