import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/ContactMe.module.css';
import { Container, Row, Col } from 'react-bootstrap';

export class ContactMe extends Component {
    render() {
        return (
            <>
                <Container className={styles.textcenter}>
                    <Row>
                        <Col>
                            <a href="https://www.github.com/RitvijSrivastava" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} size="5x" color="black"/>
                            </a>
                        </Col>
                        <Col>
                            <a href="https://www.linkedin.com/in/ritvij-srivastava-b4257717b/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} size="5x" color="black"/>
                            </a>
                        </Col>
                        <Col>
                            <a href="mailto: ritvijsrivastava99@gmail.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faEnvelope} size="5x" color="black"/>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default ContactMe
