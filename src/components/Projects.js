import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import styles from '../styles/Projects.module.css';

export class Projects extends Component {
    render() {
        return (
            <>
                <Container className={styles.test_pro} fluid>
                    <h1>Adding Soon Enough!</h1>

                    <p>As soon as I can complete one ;)</p>
                </Container>

            </>
        );
    }
}

export default Projects
