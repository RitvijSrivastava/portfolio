import React from 'react';
import { Container, Row , Col} from 'react-bootstrap';
import styles from '../styles/CustomNavbar.module.css';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import Home from './Home';
import Projects from './Projects';


// Function to display Logo
function Logo() {
    return (
        <div className={styles.logo} >
            RS
        </div>
    );
}

export class CustomNavbar extends React.Component {
    render() {
        return (
            <>
                <Router>
                    <Container fluid className={styles.custom_margin}>
                        <Row>
                            <Col xs={3} lg={9} md={9} > 
                                <Link to="/portfolio" className={styles.logo_link}> <Logo /> </Link>
                            </Col>
                            <Row>    
                                <Col className={styles.center}>
                                    {/* <a href="/">Home</a> */}
                                    <Link to="/portfolio"> Home </Link>
                                </Col>
                                <Col className={styles.center}>
                                    {/* <a href="/projects">Resume</a> */}

                                    <Link to="/projects"> Resume</Link>
                                   
                                </Col>
                                <Col className={styles.center}>
                                    {/* <a href="/projects">Projects</a> */}

                                    <Link to="/projects"> Projects</Link>
                                   
                                </Col>
                            </Row>
                        </Row>
                    </Container>


                    <Switch> 
                        <Route exact path='/portfolio' component={Home}></Route> 
                        <Route exact path='/projects' component={Projects}></Route> 
                        <Route exact path="/" component={Home}></Route>
                    </Switch> 
                </Router>
            </>
        )
    }
}

export default CustomNavbar

