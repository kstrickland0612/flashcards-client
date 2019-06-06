import React from 'react'
// import { Link } from 'react-router-dom'
import CatDropdown from '../catdropdown/CatDropdown'
import SearchBar from '../searchbar/SearchBar'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
// import Form from 'react-bootstrap/Form'
// import FormControl from 'react-bootstrap/FormControl'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faBolt, faTools, faUser } from '@fortawesome/free-solid-svg-icons'

import './Header.scss'

const authenticatedOptions = (
  <React.Fragment>
    <Nav.Link href="#build-card"><FontAwesomeIcon icon={faTools} /> Build a Card</Nav.Link>
    <NavDropdown alignRight title={<FontAwesomeIcon icon={faUser} />} id="basic-nav-dropdown">
      <NavDropdown.Item href="#my-cards">My Cards</NavDropdown.Item>
      <NavDropdown.Item href="#change-password">Change Password</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#sign-out"><FontAwesomeIcon icon={faSignOutAlt} /> Sign Out</NavDropdown.Item>
    </NavDropdown>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <Nav.Link href="#sign-up">Sign Up</Nav.Link>
    <Nav.Link href="#sign-in">Sign In</Nav.Link>
  </React.Fragment>
)

// const rootOptions = (
//   <React.Fragment>
//     <SearchBar handleSearch={this.handleSearch}/>
//   </React.Fragment>
// )

const Header = ({ user, handleSearch }) => (
  <header className="main-header">
    <Navbar collapseOnSelect bg="dark" variant="dark" expand="xl">
      <Navbar.Brand className="nav-brand" href="#">F<FontAwesomeIcon icon={faBolt} />ash Cards</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          { user && <span className="welcome-message">Hi there, {user.email.split('@')[0]}!</span>}
          {window.location.hash === '#/' ? <SearchBar handleSearch={handleSearch}/> : ''}
          {window.location.hash === '#/' || (window.location.hash.includes('#/cards/') && !window.location.hash.includes('/edit')) ? <CatDropdown /> : ''}
          { user ? authenticatedOptions : unauthenticatedOptions }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
)

export default Header
