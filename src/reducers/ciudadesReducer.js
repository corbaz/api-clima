// AppReducer es una funcion que se ejecuta al iniciar la APP
// AppReducer recibe dos parametros
// (state) es inicializado x defecto como objeto vacio
// (action) la funcion AppReducer tambien se ejecutará cuando hacemos un dispatch de una action
// action es un objeto que contiene la accion que se desea ejecutar
// generandose un nuevo objeto state segun la action que hayamos disparado

import { types } from "../types/types"

export const ciudadesReducer = (state = { ciudad: 'Mar del Plata' }, action) => {
    switch (action.type) {
        case types.ba:
            return { ciudad: action.payload.ciudad }
        case types.ma:
            return { ciudad: action.payload.ciudad }
        case types.pa:
            return { ciudad: action.payload.ciudad }
        case types.wa:
            return { ciudad: action.payload.ciudad }
        case types.mo:
            return { ciudad: action.payload.ciudad }
        default:
            return state
    }
}