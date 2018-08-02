import * as types from './types'
import {combineReducers} from 'redux'

function count(state = 10,action){
    switch(action.type){
        case types.ADD:
            return state + 1
        case types.REMOVE:
            return state - 1
        default:
            return state
    }
}

function auth(state = {
    isAuth:false,
    user:'Ancy'
},action){
    switch(action.type){
        case types.LOGIN:
            return {...state,isAuth:true}
        case types.LOGOUT:
            return {...state,isAuth:false}
        default:
            return state
    }
}

export default combineReducers({count,auth})