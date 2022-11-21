import PropTypes from 'prop-types';
import './Navbar';
import { Children } from 'react';
import { CartWidget } from '../CartWidget/CartWidget';

const Navbar = ({menus,children}) =>{
    return(
        <div className='navbar'>
            <div className='navbar__menus'>
                {
                    menus.map((menu)=>{
                        return <div className='navbar__menu transition' >{menu}</div>
                    })
                }
            </div>

            <div>
                {children}
            </div>

            <CartWidget />
                
            

        </div>
    )
}


Navbar.proptype ={
    menus: PropTypes.array.isRequired,
    children: PropTypes.element
    
}

export default Navbar;