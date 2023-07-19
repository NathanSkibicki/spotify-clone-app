import { findAllByDisplayValue } from "@testing-library/react";

export const initialState = {
    user: null, 
    playlists: [],
    playing: false,
    item: null,
    token: null,
};

//Note: action is how you manipulate how state looks like (setting everything)
const reducer = (state, action) => {
console.log(action);
//Action -> type, [payload]
    switch(action.type){
        case 'SET_USER':
            return {
                //...state keeps the current state
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            }
        case 'SET_PLAYLISTS':
            return{
                ...state,
                token: action.playlists,
            }
        default: 
            return state;
    }
}

export default reducer;