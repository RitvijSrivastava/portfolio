import React, { Component } from 'react'
import MainHeading from './MainHeading';
import SubTopic from './SubTopic';
import ContactMe from './ContactMe';

export class Home extends Component {
    render() {
        return (
            <>
                <MainHeading />
                <SubTopic />
                <ContactMe />
            </>
        );
    }
}

export default Home
