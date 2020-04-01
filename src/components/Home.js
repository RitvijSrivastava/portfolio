import React, { Component } from 'react'
import MainHeading from './MainHeading';
import SubTopic from './SubTopic';
import ContactMe from './ContactMe';
import CustomNavbar from './CustomNavbar';

export class Home extends Component {
    render() {
        return (
            <>
                <CustomNavbar />
                <MainHeading />
                <SubTopic />
                <ContactMe />
            </>
        );
    }
}

export default Home
