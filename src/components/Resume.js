import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCalendarAlt, faBuilding } from '@fortawesome/free-regular-svg-icons'
import { faMapMarkerAlt, faUniversity, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/Resume.module.css';
import { Container, Image, Col, Row } from 'react-bootstrap';

function WorkCard(props) {
  return (
    <>
    <Container className={styles.work_container}>
      <Col>
        <Row>
          <Col>
            <h4>Flutter Developer</h4>
          </Col>
          <Col>
            <h6 className={styles.pill}>Part Time</h6>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
            <Col>
              <p className={styles.work_company}>
                <FontAwesomeIcon icon={faBuilding} size="1x" color="grey" className={styles.work_icon} />
                {props.companyName}
              </p>
            </Col>
            <Col>
              <p className={styles.work_location}>
                <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" color="grey" className={styles.work_icon} />
                {props.location}
              </p>
            </Col>
            </Row>
          </Col>
          <Col >
          <p className={styles.date}>
            <FontAwesomeIcon icon={faCalendarAlt} size="1x" color="grey" className={styles.work_icon} />
            {props.startYear}-
          </p>
          </Col>
        </Row>
      </Col>
    </Container>
    </>
  );
}



function EducationCard(props) {
  return (
    <>
    <Container className={styles.work_container}>
      <Col>
        <Row>
          <Col>
            <h4>{props.degreeName}</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
            <Col>
              <p className={styles.work_company}>
                <FontAwesomeIcon icon={faGraduationCap} size="1x" color="grey" className={styles.work_icon} />
                {props.collegeName}
              </p>
            </Col>
            </Row>
          </Col>
          <Col >
          <p className={styles.date}>
            <FontAwesomeIcon icon={faCalendarAlt} size="1x" color="grey" className={styles.work_icon} />
            {props.startYear}<pre> - </pre>
            <FontAwesomeIcon icon={faCalendarAlt} size="1x" color="grey" className={styles.work_icon} />
            {props.endYear}
          </p>
          </Col>
        </Row>
      </Col>
    </Container>
    </>
  );
}

function ProfessionalSummary() {
  return (
    <>
      <h2 className={styles.topic1}>Professional Summary</h2>
        <p className={styles.content1}>
          Results-oriented Flutter developer with 1+ years of experience developing,
          testing and maintaining cross-platform applications. Designed and developed applications
          for private clients and startups from use cases and functional requirements. Investing time in
          learning new technologies.                      
        </p>
        <br />
        <br />
        <br />
    </>
  );
}

function WorkExperience() {
  return (
    <>
      <h2>Work Experience</h2>
      <br />
      <br />
      <WorkCard companyName={"Faraday Tech"} location={"Jaipur, India"} startYear={"September 2019"} endYear={"-"} />
      <hr className={styles.work_breaker}/>
      <WorkCard companyName={"InnGrow Tech"} location={"Mumbai, India"} startYear={"March 2020"} endYear={"-"} />
      <br />
      <br />
      <br />
      
    </>
  );
}


function Education() {
  return (
    <>
      <h2>Education</h2>
      <br />
      <br />
      <EducationCard degreeName={"Bachelor in Computer Science Engineering"} collegeName={"Manipal University Jaipur"} startYear={"August 2018"} endYear={"May 2022"}/>
      <hr className={styles.work_breaker}/>
      <EducationCard degreeName={"Class 12"} collegeName={"City Montessori School"} startYear={"August 2016"} endYear={"May 2017"}/>
      <hr className={styles.work_breaker}/>
      <EducationCard degreeName={"Class 10"} collegeName={"City Montessori School"} startYear={"August 2014"} endYear={"May 2015"}/>
      <br />
      <br />
      <br />
    </>
  );
}

export class Resume extends Component {
    render() {
        return (
            <>
              <Container className={styles.container}>
                  <Row className="no-gutters">
                    <Col className={styles.sidecol1} lg={4}>
                      <Image src={require('../assets/circle_avatar.jpg')} roundedCircle className={styles.image}></Image>
                      <h2 className={styles.title}>Ritvij<br />Srivastava</h2> 
                      <h4 className={styles.subtitle}>Flutter Developer</h4>
                      <br className={styles.separator}/>
                      <Row className={styles.details}>
                        <FontAwesomeIcon icon={faEnvelope} size="1x" color="grey" className={styles.icon} />
                        <h6>                        
                          ritvijsrivastava99@gmail.com
                        </h6>
                      </Row>
                      
                      <hr className={styles.sidebar_separation}/>
                      <Row className={styles.details}>
                        <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" color="grey" className={styles.icon}  />
                        <h6>                        
                           Lucknow, India
                        </h6>
                      </Row>
                      <hr className={styles.sidebar_separation}/>
                      <Row className={styles.details}>
                        <FontAwesomeIcon icon={faUniversity} size="1x" color="grey" className={styles.icon} />
                        <h6>                        
                          Student
                        </h6>
                      </Row>
                      <br />
                      <br />
                      <br />
                      {/* TODO: ADD A Button to DOWNLOAD RESUME */}
                    </Col>
                    <Col className={styles.sidecol2}>
                      <ProfessionalSummary />
                      <WorkExperience />
                      <Education />
                    </Col>
                  </Row>
              </Container>
            </>
        )
    }
}

export default Resume
