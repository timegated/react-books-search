import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const nav = () => {
    return (
        <Navbar className="mb-2 p-3" bg="primary" variant="dark" expand="sm">
            <Link className="navbar-brand" to="/">
                Book Search
            </Link>
        </Navbar>
    )
}

export default Nav