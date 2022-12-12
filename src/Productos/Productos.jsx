import List from '../componentes/List'
import './Productos.scss';

import arrayProductos from '../componentes/Array/arrayProductos.js'

const listaProductos = ()=>{

    
    
     return <div className='colorFondo'>

        <h1 className='TextoCentrado titulo padding-top'>Nuestros Productos</h1>
        <List  listas={arrayProductos}/>


   

     </div>
     

}

export default listaProductos;