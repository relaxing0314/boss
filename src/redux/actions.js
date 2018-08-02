import * as types from './types'

export function Add(){
    return {
        type:types.ADD
    }
}

export function Remove(){
    return {
        type:types.REMOVE
    }
}

export function AddAsync(){
    return dispatch => {
        setTimeout(() => {
            dispatch(Add())
        },2000)
    }
}


export function login(){
    return {
        type:types.LOGIN
    }
}

export function logout(){
    return {
        type:types.LOGOUT
    }
}