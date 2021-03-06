import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Tunes from './Tunes';
import Sidebar from './Sidebar';
import { Navbar, Button, ToggleButton, Container } from 'react-bootstrap';
//import { Glyphicon } from 'react-bootstrap'
import SidebarBackground from './SidebarBackground';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContextDemo from './ContextDemo';
import BootstrapDemo from './BootstrapDemo';

//--- test checkin after transferring GitHub repository ---

function toggleClass(id, cls) {
  var elem = document.getElementById(id);
  if (elem) {
    if (elem.classList.contains(cls)) {
      elem.classList.remove(cls);
    } else {
      elem.classList.add(cls);
    }
  }
}

function App() {
  //   useEffect((event) => {
  //     execSearch(event);
  // }, []);
  const [menuVisible, setMenuVisible] = useState(false);

  const showSidebar = (show) => {
    console.log('showSidebar');
    setMenuVisible(show);
    var elem = document.getElementById('main-menu');
    if (elem == null) {
      console.log('showSidebar - elem == null');
      return;
    }

    if (show) {
      elem.classList.add('main-menu-visible');
    } else {
      elem.classList.remove('main-menu-visible');
    }

    elem = document.getElementById('sidebar-background');
    if (elem == null) {
      console.log('showSidebar - elem == null');
      return;
    }

    if (show) {
      elem.classList.add('sidebar-background-visible');
    } else {
      elem.classList.remove('sidebar-background-visible');
    }
  }

  const hideSideBar = () => {
    console.log('hideSideBar');
    showSidebar(false);
  }

  return (
    <Router>
      <div className="App">
        <Navbar id="main-navbar" className="navbar-static-top" variant="dark" bg="dark" fixed="top" >
          <Button className="navbar-button" onClick={() => showSidebar(!menuVisible)} variant="dark" size="sm"><span className="glyphicon glyphicon-menu-hamburger"></span></Button>
          <Sidebar isVisible={menuVisible} clickFunc={hideSideBar} />
        </Navbar>
        <div className="content" id="content">
          <SidebarBackground clickFunc={hideSideBar} />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/BootstrapDemo">
              <BootstrapDemo />
            </Route>
            <Route path="/contextdemo">
              <ContextDemo />
            </Route>
            <Route path="/tunes">
              <Tunes />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Over React Demo
        <div>
        <small>A sandbox to demonstrate React and the React Bootstrap component library</small>
      </div>
    </h1>
  </div>
);


export default App;
