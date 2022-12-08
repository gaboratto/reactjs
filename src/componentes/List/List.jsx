import PropTypes from 'prop-types';

const List=({listas})=>{
    return(
        <div className='text-center row row-cols-4 gx-5'>
            {
                listas.map((lista)=>{
                    return <div className="col p-4" >
                        <div className="card border border-4" style={{ height: "100%" }}>
                    <img src={lista.imagen} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">{lista.name}</h5>
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