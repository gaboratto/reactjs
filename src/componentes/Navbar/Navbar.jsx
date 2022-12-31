import PropTypes from 'prop-types';
import './Navbar';
import { Children } from 'react';
import { CartWidget } from '../CartWidget/CartWidget';
import { Titulo } from '../Titulo/Titulo';
import MostrarCarrito from '../../MostrarCarrito/MostrarCarrito';
import {Link} from 'react-router-dom'

const Navbar = ({menus,children}) =>{
    return(
        <div className='navbar'>

            <Titulo />

            <div className='navbar__menus'>
                {
                    menus.map((menu)=>{
                        return <a href={menu.href} className='navbar__menu transition' >{menu.name}</a>
                    })

                    
                }
            </div>

            <div>
                {children}
            </div>

            <Link to="/../../MostrarCarrito"><CartWidget /></Link>
            
                
            

        </div>
    )
}


Navbar.proptype ={
    menus: PropTypes.array.isRequired,
    children: PropTypes.element
    
}

export default Navbar;