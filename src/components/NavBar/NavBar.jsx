import React from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../CartWidget/CartWidget";
import logoGrande from "../img/logoGrande.png";
import Form from 'react-bootstrap/Form';
import { NavLink, Link } from "react-router-dom";

function NavBar() {
	return (
		<Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
			<Container>
				<Navbar.Brand>
					<Link to="/">
						<img src={logoGrande} alt="Logo Gold" width={100} />
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="m-auto">
						<Nav.Link as={Link} to='/'>INICIO</Nav.Link>
						<Nav.Link as={Link} to='/empresa'>EMPRESA</Nav.Link>
						<Nav.Link as={Link} to='/contacto'>CONTACTO</Nav.Link>
						<NavDropdown title="PRODUCTOS" to='/category' id="basic-nav-dropdown">
							<NavDropdown.Item as={NavLink} activeClassName='active' to='/category/Proteinas' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Proteinas</NavDropdown.Item>
							<NavDropdown.Item as={NavLink} activeClassName='active' to='/category/Aminoacidos' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Aminoacidos</NavDropdown.Item>
							<NavDropdown.Item as={NavLink} activeClassName='active' to='/category/Termogenicos' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Termogenicos</NavDropdown.Item>
							<NavDropdown.Item as={NavLink} activeClassName='active' to='/category/Pre-Entreno' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Pre-Entreno</NavDropdown.Item>
							<NavDropdown.Item as={NavLink} activeClassName='active' to='/category/Fuerza y Resistencia' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Fuerza y Resistencia</NavDropdown.Item>
							<NavDropdown.Item as={NavLink} activeClassName='active' to='/category/Ganador de Masa' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Ganador de Masa</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Form className="d-flex">
						<Form.Control
							type="search"
							placeholder="Search"
							className="me-2"
							aria-label="Search"
						/>
					</Form>  
				</Navbar.Collapse>
			</Container>
			<NavLink style={{TextDecoration: 'none'}} to='/cart'><CartWidget /></NavLink>
		</Navbar>
	);
}

export default NavBar;
