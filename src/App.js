import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

//went to bootstrap and got a nav bar
//nav bar changes url of the app

import { Content } from './components/content';
import { Header } from './components/header';
import { Footer } from './components/footer';
import Container from 'react-bootstrap/esm/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import { Read } from './components/read';
import { Create } from './components/create';

//Changing from a function to a class

class App extends React.Component {

  render() {
    return(
      <Router>

        {/* //JSX code this is the start of the JSX launuguage
// This is the component */}
        <div >
          <Navbar bg="primary" variant="dark">
            <Container>
              <Navbar.Brand href="/">Navbar</Navbar.Brand>

{/*//changes to /read or /create changing url */}

              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/read">Read</Nav.Link>
                <Nav.Link href="/create">Create</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
      
     {/* //client side routing*/}
      
          <Routes>
            <Route path='/' element={<Content></Content>} exact></Route>
            <Route path='/read' element={<Read />}></Route>
            <Route path='/create' element={<Create />}></Route>

{/*import styleing sheets */}


          </Routes>
          {/* <Header></Header>
    <Content></Content>
    <Footer></Footer>  */}
        </div>
      </Router>
    );
  }

}

//Functional component up and running 

export default App;
