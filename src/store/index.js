import { createStore } from 'redux'
import countReducer from './reducers/counter.js'

const store = createStore(countReducer)
export default store