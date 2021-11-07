import React, { useState } from  'react';
import {
  Navbar,
  NavbarBrand,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler
} from 'reactstrap'

import {Link} from 'react-router-dom';



function Header() {
    const [open, setOpen]= useState(false)

    const toggler = () => {
        setOpen(!open)
    }

  return (
    <div className='container-header'>

     <Navbar color='light' light expand='md'>
       <div className='container'>
       <NavbarBrand tag={Link} to='/'>Minhas Séries</NavbarBrand>
          <NavbarToggler onClick={toggler} />
           <Collapse isOpen={open} navbar>
              <Nav className='ml-auto' navbar>
                 <NavItem>
                     <NavLink tag={Link} to='/generos'>Genêros</NavLink>
                 </NavItem>

                 <NavItem>
                     <NavLink tag={Link} to='/series'>Séries</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
       </div>
       
      </Navbar>

    </div>
  );
}

export default Header;
