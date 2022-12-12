import Layout from '../../componentes/Layout'
import Navbar from '../../componentes/Navbar'
import List from '../../componentes/List'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from '../../Home/Home'
import Contacto from '../../Contacto/Contacto'
import Productos from '../../Productos/Productos'
import Detalle from '../../componentes/Detalle/Detalle.jsx'




const Initial=() =>{
    const Menus = [{
        name: 'Inicio',
        href: '/' 
    },
    {
        name: 'Productos',
        href: '/Productos' 
    },
    {
        name: 'Contacto',
        href: '/Contacto' 
    },
    ]
    
    return(
        <BrowserRouter>

            <Navbar menus={Menus}></Navbar>
            
        <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/Contacto' element={<Contacto/>}/>
        <Route exact path='/Productos' element={<Productos/>}/>
        <Route exact path='/Detalle/:idproducto' element={<Detalle/>}/>
        </Routes>
        </BrowserRouter>


    )
} 

export default Initial;