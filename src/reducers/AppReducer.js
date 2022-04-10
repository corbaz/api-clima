const INITIAL_STATE = {}

// AppReducer es una funcion que se ejecuta al iniciar la APP
// AppReducer recibe dos parametros
// (state) es inicializado x defecto con INITIAL_STATE
// (action) la funcion AppReducer tambien se ejecutará cuando hacemos un dispatch de una action
// action es un objeto que contiene la accion que se desea ejecutar
// generandose un nuevo objeto state segun la action que hayamos disparado

export function AppReducer(state = INITIAL_STATE, action) {
    console.log(state, action)
    switch (action.type) {
        case 'BUENOS_AIRES':
            return { ciudad: 'Buenos Aires' }
        case 'MADRID':
            return { ciudad: 'Madrid' }
        case 'PARIS':
            return { ciudad: 'París' }
        case 'WASHINGTON':
            return { ciudad: 'Washington' }
        case 'MOSCU':
            return { ciudad: 'Moscú' }
        default:
            return state
    }
}