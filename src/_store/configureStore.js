// Store/configureStore.js

import { createStore } from 'redux';
import toggleFavorite from './_reducers/favoriteReducer'

export default createStore(toggleFavorite)
