import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import '../styles/MainHeading.css'

export class MainHeading extends Component {
    render() {
        return (
            <>
                <Container fluid> 
                    <h1 className="text-center">
                        Hello, My name is Ritvij. <br />
                        I am a Novice Coder ;)
                    </h1>
                    
                </Container>
            </>

        )
    }
}

export default MainHeading
