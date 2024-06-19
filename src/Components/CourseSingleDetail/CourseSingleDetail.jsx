import { useState } from 'react'
import './CourseSingleDetail.css'
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import ContactTitle from "../ContactTitle/ContactTitle";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from './../CourseSingleAccordions/CourseSingleAccordions.jsx'; 

const Overview = () => {
  return (
    <div>
      <p>LearnPress is a comprehensive WordPress LMS Plugin for WordPress. 
      This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online. 
      You can create a course curriculum with lessons & quizzes included which is managed with an easy-to-use interface for users. Having this WordPress LMS Plugin, 
      now you have a chance to quickly and easily create education, online school, online-course websites with no coding knowledge required.</p>

      <p>LearnPress is free and always will be, but it is still a premium high-quality WordPress Plugin that 
      definitely helps you with making money from your WordPress Based LMS. Just try and see how amazing it is. 
      LearnPress WordPress Online Course plugin is lightweight and super powerful with lots of Add-Ons to 
      empower its core system.How to use WPML Add-on for LearnPress?
      No comments yet! You be the first to comment.</p>
    </div>
  )
}

const Curriculum = () => {
  return (
    <div>
      <p>LearnPress is a comprehensive WordPress LMS Plugin for WordPress. 
        This is one of the best WordPress LMS Plugins 
        which can be used to easily create & sell courses online.</p>
      <Accordion 
        title="Lessons With Video Content (5 Lessons, 45 Mins)" 
      >
        <ul>
          <li>Lesson 1: Introduction to the course (12:30)</li>
          <li>Lesson 2: Advanced Topics (10:05)</li>
          <li>Lesson 3: Final Project (2:25)</li>
          <li>Lesson 4: Additional Resources (8:30)</li>
          <li>Lesson 5: Q&A Session (11:10)</li>
        </ul>
      </Accordion>
      <Accordion 
        title="Lessons With Video Content (3 Lessons, 25 Mins)" 
      >
        <ul>
          <li>Lesson 1: Introduction (8:30)</li>
          <li>Lesson 2: Intermediate (10:00)</li>
          <li>Lesson 3: Expert Tips (6:30)</li>
        </ul>
      </Accordion>
      <Accordion 
        title="Lessons With Video Content (3 Lessons, 25 Mins)" 
      >
        <ul>
          <li>Lesson 1: Introduction (8:30)</li>
          <li>Lesson 2: Intermediate (10:00)</li>
          <li>Lesson 3: Expert Tips (6:30)</li>
        </ul>
      </Accordion>
      <Accordion 
        title="Lessons With Video Content (3 Lessons, 25 Mins)" 
      >
        <ul>
          <li>Lesson 1: Introduction (8:30)</li>
          <li>Lesson 2: Intermediate (10:00)</li>
          <li>Lesson 3: Expert Tips (6:30)</li>
        </ul>
      </Accordion>
      <Accordion 
        title="Lessons With Video Content (3 Lessons, 25 Mins)" 
      >
        <ul>
          <li>Lesson 1: Introduction (8:30)</li>
          <li>Lesson 2: Intermediate (10:00)</li>
          <li>Lesson 3: Expert Tips (6:30)</li>
        </ul>
      </Accordion>
    </div>
  );
};


const Instructor = () => {
  return (
    <div>
      <p>LearnPress is a comprehensive WordPress LMS Plugin for WordPress. 
      This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online. 
      You can create a course curriculum with lessons & quizzes included which is managed with an easy-to-use interface for users. Having this WordPress LMS Plugin, 
      now you have a chance to quickly and easily create education, online school, online-course websites with no coding knowledge required.</p>

      <p>LearnPress is free and always will be, but it is still a premium high-quality WordPress Plugin that 
      definitely helps you with making money from your WordPress Based LMS. Just try and see how amazing it is. 
      LearnPress WordPress Online Course plugin is lightweight and super powerful with lots of Add-Ons to 
      empower its core system.How to use WPML Add-on for LearnPress?
      No comments yet! You be the first to comment.</p>
    </div>
  )
}

const FAQs = () => {
  return (
    <div></div>
  )
}

const Reviews = () => {
  return (
    <div>
      <p>This is the instructor content. You can provide information about the course instructor here.</p>
    </div>
  )
}

const Tabs = ({ config }) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="Mk-tabs">
      <div className="Mk-tab-headers">
        {
          config.map((entry, index) => (
            <div 
              key={index}
              className={`Mk-tab-header ${activeTab === index ? "active" : ""}`}
              onClick={() => setActiveTab(index)}
            >
              {entry.header}
            </div>
          ))
        }
      </div>
      <div className="Mk-tab-body">
        {config[activeTab].component}
      </div>
    </div>
  )
}

const CourseSingleDetail = () => {
  return (
    <>
    <div className='Mk-CourseSingleTabsAndCard'>
        <div className='Mk-CommentsAndTabs'>
          <Tabs
            config={[
              { header: "Overview", component: <Overview /> },
              { header: "Curriculum", component: <Curriculum /> },
              { header: "Instructor", component: <Instructor /> },
              { header: "FAQs", component: <FAQs/> },
              { header: "Reviews", component: <Reviews /> },
            ]}
          />
          <div>
             <ContactTitle  Title='Leave a comment' subTitle='Your email address will not be published. Required fields are marked *'/>
        <Form className="Mk-Form">
            <Row className="Mk-Coulmn">
            <Col className="Mk-form-padding">
                <Form.Control
                placeholder="Name*"
                className="Mk-placeholder-padding"
                />
            </Col>
            <Col className="Mk-form-padding">
                <Form.Control
                placeholder="Email*"
                className="Mk-placeholder-padding"
                />
            </Col>
            </Row>
            <FloatingLabel
            controlId="floatingTextarea2"
            style={{ paddingTop: 20, paddingBottom: 20 }}
            >
            <Form.Control
                as="textarea"
                placeholder="Comment"
                style={{ height: "110px" }}
                />
            </FloatingLabel>
            <div className="Mk-checkbox">
            <Form.Check aria-label="option 1" />
            <p>Save my name, email in this brower for the next time I comment</p>
            </div>
            <button className="MK-Contact-Btn">
                <p>Posts comment</p>
            </button>
        </Form>
          </div>
        </div>
        <div className='Mk-CourseSingleCard'>
            <Card className='Mk-CardStyling'>
          <Card.Img className='Mk-CardImg'  variant="top" src='./../../../public/assetsProject/imges/card(6).png' />
              <Card.Body className='Mk-CardBody'>
                        <Card.Text className='Mk-CardText'>
                          <span>$59.0</span>
                          <h4>$49.0</h4>
                        </Card.Text>
                    <Button className='Mk-CardBtn'>Start now</Button>
              </Card.Body>
        </Card>
        </div>
    </div>
    </>
  )
}

export default CourseSingleDetail