import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import styles from '../styles/SubTopic.module.css';

export class SubTopic extends Component {
    render() {
        return (
            <>
              <Container className={styles.container}>
                <h4>About: </h4>
                <p className="align-left">I am a Student. So, broke and full of hope. Ergo, I Code. I ,primarily, am an app (Flutter) Developer but I have worked
                    on Java (Java Spring) and ReactJS before. (This website made possible by ReactJS). In terms of capability, I am more of 
                    a backend developer than a frontend one. I have intermediate knowledge MySQL and Firebase. I also do little bit of competitive
                    programming (Language Used: CPP). Recently have started learning Data Science and Machine Learning (Python, Matlab). On the hunt for
                    freelancing or part time job or an internship. I have experience working in startups.

                    <br />
                    <br />

                    <span>TL;DR</span>
                    <br />
                    <br />
                    <ul>
                        <li>Languages Known (intermediate) : Flutter, ReactJS</li>
                        <li>Languages Known (beginner-intermediate) : CPP, Python, Java, Matlab</li>
                        <li>Backend: MySQL, Firebase</li>
                        <li>Others: NodeJS, Git</li>
                    </ul>
                    <ul>
                        <li>In need of: Freelancing, Part-Time Job, Internships</li>
                    </ul>
                    <ul>
                        <li>Experience: Worked in two different startups as a Flutter Developer</li>
                    </ul>
                </p>
              </Container> 
            </>
        )
    }
}

export default SubTopic
