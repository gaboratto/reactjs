import './MostrarCarrito.scss';
import Carrito from '../componentes/Carrito/Carrito';


const MostrarCarrito=()=>{
    
    return(
    <div className='colorFondo'>
        <h1 className='titulo TextoCentrado padding-top'>CARRITO DE COMPRAS</h1>
    <ul className='TextoCentrado colorFondo list-group list-group-flush'>
        {
            Carrito.Listado.map((carritoItem)=>{
                
                return(
                   
                    <li className='imagen colorFondo padding-top list-group-item'><img src={carritoItem.producto.imagen}  /><span className='margin'>{carritoItem.cantidad}</span><span className='margin'>{carritoItem.producto.name}</span><span className='margin'>${carritoItem.cantidad * carritoItem.producto.precio}</span></li>
                   
                )
        
            

            })
        

        }
        
    </ul>
    </div>
    )
    

    
}
    



export default MostrarCarrito