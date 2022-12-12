import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'


const List=({listas})=>{
    return(
        <div className='text-center row row-cols-5 gx-5'>
            {
                listas.map((lista)=>{
                    return <div className="col p-4" >
                        <div className="card border border-4" style={{ height: "100%" }}>
                    <img src={lista.imagen} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <Link to={`/Detalle/${lista.id}`}><h5 className="card-title">{lista.name}</h5></Link>
                      <div>
                      <h7 className="card-title">${lista.precio}</h7>
                      </div>
                      <a href="#" className="btn btn-primary">Comprar</a>
                    </div>
                  </div>
                  </div>
                })
            }
        </div>
    )
}
    
List.proptype = {
    lista: PropTypes.array.isRequired
}

export default List;