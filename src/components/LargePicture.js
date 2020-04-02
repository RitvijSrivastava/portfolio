import React from 'react'
import { Container } from  'react-bootstrap';
import '../styles/LargePicture.module.css';

function LargePicture() {
    return (
        <Container className="text-center">
            <img src={require('../assets/front_pic.jpg')} alt={"A person on a beach"}/>
        </Container> 
    )
}

export default LargePicture
