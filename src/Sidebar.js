import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {Navbar, Nav, NavItem, Button, Glyphicon} from 'react-bootstrap';
import './App.css';

function Sidebar(props) {

    var mmClass = "main-menu flex-column bg-dark text-light";
    return (
  
    <Nav className={mmClass} id="main-menu" >
        <Nav.Link className="main-menu-nav">
          <Link className="main-menu-link text-light" to="/" onClick={props.clickFunc}>Home</Link>
        </Nav.Link>
        <Nav.Link className="main-menu-nav">
          <Link className="main-menu-link text-light" to="/contextdemo" onClick={props.clickFunc}>Context Demo</Link>
        </Nav.Link>
        <Nav.Link className="main-menu-nav">
          <Link className="main-menu-link text-light" to="/tunes" onClick={props.clickFunc}>Tunes</Link>
        </Nav.Link>
    {/* <ul class="list-group">
        <li class="list-group-item">
          <Link to="/">Home</Link>
        </li>
        <li class="list-group-item">
          <Link to="/tunes">Tunes</Link>
        </li>
    </ul> */}
  </Nav>
  );

}

export default Sidebar;