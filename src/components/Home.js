import React, { Component } from 'react'
import MainHeading from './MainHeading';
import SubTopic from './SubTopic';
import ContactMe from './ContactMe';
import LargePicture from './LargePicture';

export class Home extends Component {
    render() {
        return (
            <>
                <MainHeading />
                <LargePicture />
                <SubTopic />
                <ContactMe />
            </>
        );
    }
}

export default Home
