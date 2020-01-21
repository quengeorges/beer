// Store/Reducers/favoriteReducer.js

const initialState = { favoritesBeer: [] }

function toggleFavorite(state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'TOGGLE_FAVORITE':
            const favoriteFilmIndex = state.favoritesBeer.findIndex(item => item.id === action.value.id)
            if (favoriteFilmIndex !== -1) {
                // Le film est déjà dans les favoris, on le supprime de la liste
                nextState = {
                    ...state,
                    favoritesBeer: state.favoritesBeer.filter( (item, index) => index !== favoriteFilmIndex)
                }
            }
            else {
                // Le film n'est pas dans les films favoris, on l'ajoute à la liste
                nextState = {
                    ...state,
                    favoritesBeer: [...state.favoritesBeer, action.value]
                }
            }
            return nextState || state
        default:
            return state
    }
}

export default toggleFavorite
