import React from 'react';
import { Container, Row , Col} from 'react-bootstrap';
import '../styles/CustomNavbar.css';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import Home from './Home';
import Projects from './Projects';


// Function to display Logo
function Logo() {
    return (
        <div className="logo" >
            RS
        </div>
    );
}

export class CustomNavbar extends React.Component {
    render() {
        return (
            <>
                <Router>
                    <Container fluid className="custom-margin">
                        <Row>
                            <Col xs={4} lg={10} md={8} > 
                                {/* <a href="/" className="logo-link">
                                    <Logo />
                                </a> */}
                                <Link to="/portfolio"> <Logo /> </Link>
                            </Col>
                            <Row>    
                                <Col className="center">
                                    {/* <a href="/">
                                        Home
                                    </a> */}
                                    <Link to="/portfolio"> Home </Link>
                                </Col>
                                <Col className="center">
                                    {/* <a href="/projects">
                                        Projects
                                    </a> */}
                                    <Link to="/projects"> Projects</Link>
                                   
                                </Col>
                            </Row>
                        </Row>
                    </Container>


                    <Switch> 
                        <Route exact path='/portfolio' component={Home}></Route> 
                        <Route exact path='/projects' component={Projects}></Route> 
                        <Route path="/" component={Home}></Route>
                    </Switch> 
                </Router>
            </>
        )
    }
}

export default CustomNavbar

