// Importamos la funcion connect de la libreria react-redux
// para la creacion de un contenedor donde se crearan las conexiones
// con el store de redux
// generando el Nuevo componente AppRedux
import { connect } from 'react-redux';
import { App } from '../App';


//1) "mapStateToProps" que es una funcion que recibe el state de la aplicación como parametro y return un objeto con las propiedades que queremos que se muestren en el componente, el objeto tiene una propiedad esa key es la propieda que queremeos  actualizar y su valor ser elactual valor que se tiene en el state
const mapStateToProps = (state) => {
    return { ciudad: state.ciudad }
}

//2) "mapDispatchToProps" este parametro tambien es una funcion que recibe el metodo dispatch como parametro. Este metodo es el que se encarga de disparar las acciones que se van a ejecutar en el reducer. El objeto que retorna tendra como
// key: cada key llegara al componente como una props. Y su valor será la funcion que se encarga de disparar la accion. 
//Ejemplo:    
// <button onClick={this.props.buenos_aires}>Buenos Aires</button>

const mapDispatchToProps = (dispatch) => {
    return {
        buenos_aires: () => {
            dispatch({ type: 'BUENOS_AIRES' })
        },
        madrid: () => {
            dispatch({ type: 'MADRID' })
        },
        paris: () => {
            dispatch({ type: 'PARIS' })
        },
        washington: () => {
            dispatch({ type: 'WASHINGTON' })
        },
        moscu: () => {
            dispatch({ type: 'MOSCU' })
        },
    }
}

const createContainerRedux = connect(mapStateToProps, mapDispatchToProps)

const AppRedux = createContainerRedux(App)

export default AppRedux;