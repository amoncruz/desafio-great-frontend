import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Input
} from 'reactstrap';
import {Link} from 'react-router-dom';

const Header = ({setSearchChanged,searchChanged}) => {
    
  const handleSetSearchChanged=()=>{
    if(searchChanged!==undefined){
        setSearchChanged(!searchChanged)
    }
  }

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand ><Link to="/" className="logo">Desafio</Link></NavbarBrand>
        <NavbarToggler />
        <Collapse navbar>
          <Nav className="mx-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to="/" onClick={()=>handleSetSearchChanged()}>Pagina Inicial</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/register">Criar</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/remove">Remover</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/details/0">Consultar</Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
