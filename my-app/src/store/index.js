import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import moviesReducer from './reducers/moviesReducer'

const rootReducer = combineReducers({
  moviesReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store