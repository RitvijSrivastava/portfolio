import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import '../styles/MainHeading.module.css'

export class MainHeading extends Component {
    render() {
        return (
            <>
                <Container> 
                    <h1>
                        Hello, My name is Ritvij. <br />
                        I am a Novice Coder ;)
                    </h1>
                    
                </Container>
            </>

        )
    }
}

export default MainHeading
