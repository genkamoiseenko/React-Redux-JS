import{ combineReducers } from "redux";
import language from './language'
import secondPageReducers from "./secondPageReducers";



export default combineReducers( {
    language,
    secondPageReducers,
})
