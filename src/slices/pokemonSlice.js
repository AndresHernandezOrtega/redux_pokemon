import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPokemonWithDetails } from "../api/services/getPokemons";
import { toggleLoader } from "./uiSlice";

const initialState = {
    list: [],
}

export const fetchPokemons = createAsyncThunk(
    "pokemon/fetchPokemons",
    async (_,{ dispatch }) => {
        try {
            dispatch(toggleLoader())
            const pokemonList = await getPokemonWithDetails()
            dispatch(setPokemons(pokemonList))
            dispatch(toggleLoader())

        } catch (error) {
            console.error(error)
        }
    }
)

export const updateFavoritesAction = (id = null) => (dispatch) => {

    let favorites = localStorage.getItem("favorites") 
    ? JSON.parse(localStorage.getItem("favorites"))
    : localStorage.setItem("favorites", "[]" ) 

    if (id && favorites.find(fav => fav === id) ){
        favorites = favorites.filter(fav => fav !== id)
    }else if(id) favorites.push(id);

    localStorage.setItem("favorites", JSON.stringify(favorites))

    dispatch(updateFavorites(favorites))
}

const pokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {
        setPokemons: (state, action) => {
            state.list = action.payload
        },

        updateFavorites: (state, action) => {
            state.favorites = action.payload
        }

    }
})

export const {setPokemons, updateFavorites} = pokemonSlice.actions
export default pokemonSlice.reducer
