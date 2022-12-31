import './Detalle.scss';
import arrayProductos from '../../componentes/Array/arrayProductos.js'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import Carrito from '../Carrito/Carrito';

const Productos = ()=>{
        const {idproducto} = useParams();


        let productoSeleccionado = null


        for (let producto of arrayProductos){
            if (idproducto == producto.id)
            productoSeleccionado=producto
        }
    

        const handlerAddCount=(count)=>{
            Carrito.modificarCarrito(productoSeleccionado,count)
        }
 
    
    
     return <div className='colorFondo'>

        <h1 className='TextoCentrado titulo padding-top'>Detalle del producto {idproducto}</h1>

      <div className='card imagen2 borde colorCardTexto'>
      
      <div className="row" style={{ height: "100%" }}>
         <div className='col'>
            
         <img src={productoSeleccionado.imagen} className="card-img-top" alt="..."/>
         </div>
         
         <div className="col imagen">
            <div className='card-body'>
               <h5 className="card-title textoProducto">{productoSeleccionado.name}</h5>
               <h7 className="card-title textoPrecio">${productoSeleccionado.precio}</h7>
               <p className="card-text textoDetalle">{productoSeleccionado.detalle}</p>
               <ItemCount onChangeCount={(e)=>handlerAddCount(e)}/>
            </div>
            </div>
         </div>
      </div>
      
      
   
     </div>
     

}

export default Productos;