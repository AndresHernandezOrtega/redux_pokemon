import { SET_POKEMON, TOGGLE_LOADER, UPDATE_FAVORITES } from "../actions/type";

const initialState = {
    list: [],
    loading: false  
}

const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_POKEMON:
            
            return {...state, list: action.payload};
        
        case TOGGLE_LOADER: 
            return {...state, loading : !state.loading}
        
        case UPDATE_FAVORITES:
            return { ...state, favorites: action.payload}
    
        default:
            return {...state};
    }
}

export default pokemonReducer