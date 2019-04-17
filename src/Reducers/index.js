import {combineReducers} from 'redux'
import reducerusers from './reducersusers'
import reducerservices from './reducerservices'
import reducersbiens from './reducersbiens'
import reducerevents from './reducerevents'
import  reducersdons from './reducersdons'
export default combineReducers({reducerusers,reducerservices,reducersbiens,reducerevents, reducersdons})
