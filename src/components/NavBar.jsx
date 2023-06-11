import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import GenresModal from './Genres/GenresModal';
import ("../components/styles/navbar.css")

const NavBar = () => {

    const [showGenres, setShowGenres] = useState(false);

    return (
        <>
            <Navbar className='navbar'>
                <Container className='nav_container'>
                    <Navbar.Brand className='nav__logo' as={Link} to="/" >CinePedia</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto nav__menu">
                            <Nav.Link as={Link} to="/" className="nav__menu">Movies</Nav.Link>
                            <Nav.Link as={Link} to="/actors" className="nav__menu">Actors</Nav.Link>
                            <Nav.Link as={Link} to="/directors" className="nav__menu">Directors</Nav.Link>
                            <Nav.Link onClick={() => setShowGenres(true)} className="nav__menu">Genres</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <GenresModal 
                show={showGenres} 
                handleClose={() => setShowGenres(false)} 
            />
        </>
    );
};

export default NavBar;