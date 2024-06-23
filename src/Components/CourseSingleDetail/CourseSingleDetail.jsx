import { useState } from "react";
import "./CourseSingleDetail.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import ContactTitle from "../ContactTitle/ContactTitle";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Accordion from "./../CourseSingleAccordions/CourseSingleAccordions.jsx";
import Lesson_Icon from "./../../../public/assetsProject/imges/lesson.png";
import Right_sign from "./../../../public/assetsProject/imges/rightsign.svg";
import lock_sign from "./../../../public/assetsProject/imges/lock.svg";
import Course_single_img from './../../../public/assetsProject/imges/course-single.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaste } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faXTwitter, faPinterest, faInstagram, faFacebookF,faYoutube } from '@fortawesome/free-brands-svg-icons';
import SingleCourseFAQs from "../SinglePageFAQs/SinglePageFAQs.jsx";
import filled_star from './../../../public/assetsProject/imges/filled-star.png'
import not_filled_star from './../../../public/assetsProject/imges/not-filled-star.png'



const Overview = () => {
  return (
    <div>
      <p>
        LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This
        is one of the best WordPress LMS Plugins which can be used to easily
        create & sell courses online. You can create a course curriculum with
        lessons & quizzes included which is managed with an easy-to-use
        interface for users. Having this WordPress LMS Plugin, now you have a
        chance to quickly and easily create education, online school,
        online-course websites with no coding knowledge required.
      </p>

      <p>
        LearnPress is free and always will be, but it is still a premium
        high-quality WordPress Plugin that definitely helps you with making
        money from your WordPress Based LMS. Just try and see how amazing it is.
        LearnPress WordPress Online Course plugin is lightweight and super
        powerful with lots of Add-Ons to empower its core system.How to use WPML
        Add-on for LearnPress? No comments yet! You be the first to comment.
      </p>
    </div>
  );
};

const Curriculum = () => {
  return (
    <div>
      <p>
        LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This
        is one of the best WordPress LMS Plugins which can be used to easily
        create & sell courses online.
      </p>

      <Accordion
        title="Lessons With Video Content"
        subTitle="5 Lessons "
        subTitle2="45 Mins"
      >
         <ul className="Mk-AccordionUl">
          <li>
            <div className="Mk-liMargin">
              <img className="Mk-LessonIcon" src={Lesson_Icon} alt="" />{" "}
              <span>Lessons with video content</span>
            </div>
            <div className="Mk-Priview">
              <button className="MK-Accordion-btn">
                <p>Preview</p>
              </button>
              <span className="Mk-Li-Span">12:30</span>
              <div>
                <img className="Mk-RightSign" src={Right_sign} alt="" />
              </div>
            </div>
          </li>
          <li>
            <div>
              <img className="Mk-LessonIcon" src={Lesson_Icon} alt="" />{" "}
              <span>Lessons with video content</span>
            </div>
            <div className="Mk-Priview">
              <button className="MK-Accordion-btn">
                <p>Preview</p>
              </button>
              <span className="Mk-Li-Span">12:30</span>
              <div>
                <img src={Right_sign} alt="" />
              </div>
            </div>
          </li>
          <li>
            <div>
              <img className="Mk-LessonIcon" src={Lesson_Icon} alt="" />{" "}
              <span>Lessons with video content</span>
            </div>
            <div className="Mk-Priview">
              <button className="MK-Accordion-btn">
                <p>Preview</p>
              </button>
              <span className="Mk-Li-Span Mk-225">2:25</span>
              <div>
                <img className="Mk-lockSign" src={lock_sign} alt="" />
              </div>
            </div>
          </li>
          <li>
            <div>
              <img className="Mk-LessonIcon" src={Lesson_Icon} alt="" />{" "}
              <span>Lessons with video content</span>
            </div>
            <div className="Mk-Priview">
              <button className="MK-Accordion-btn">
                <p>Preview</p>
              </button>
              <span className="Mk-Li-Span Mk-225">2:25</span>
              <div>
                <img className="Mk-lockSign" src={lock_sign} alt="" />
              </div>
            </div>
          </li>
          <li>
            <div>
              <img className="Mk-LessonIcon" src={Lesson_Icon} alt="" />{" "}
              <span>Lessons with video content</span>
            </div>
            <div className="Mk-Priview">
              <button className="MK-Accordion-btn">
                <p>Preview</p>
              </button>
              <span className="Mk-Li-Span Mk-225">2:25</span>
              <div>
                <img className="Mk-lockSign" src={lock_sign} alt="" />
              </div>
            </div>
          </li>
        </ul>
      </Accordion>
      <Accordion
        title="Lessons With Video Content"
        subTitle="3 Lessons "
        subTitle2="45 Mins"
      >
        <ul className="Mk-AccordionUl">
          <li>
            <div className="Mk-liMargin">
              <img className="Mk-LessonIcon" src={Lesson_Icon} alt="" />{" "}
              <span>Lessons with video content</span>
            </div>
            <div className="Mk-Priview">
              <button className="MK-Accordion-btn">
                <p>Preview</p>
              </button>
              <span className="Mk-Li-Span">12:30</span>
              <div>
                <img className="Mk-RightSign" src={Right_sign} alt="" />
              </div>
            </div>
          </li>
          <li>
            <div>
              <img className="Mk-LessonIcon" src={Lesson_Icon} alt="" />{" "}
              <span>Lessons with video content</span>
            </div>
            <div className="Mk-Priview">
              <button className="MK-Accordion-btn">
                <p>Preview</p>
              </button>
              <span className="Mk-Li-Span">12:30</span>
              <div>
                <img className="Mk-RightSign" src={Right_sign} alt="" />
              </div>
            </div>
          </li>
          <li>
            <div>
              <img className="Mk-LessonIcon" src={Lesson_Icon} alt="" />{" "}
              <span>Lessons with video content</span>
            </div>
            <div className="Mk-Priview">
              <button className="MK-Accordion-btn">
                <p>Preview</p>
              </button>
              <span className="Mk-Li-Span Mk-225">2:25</span>
              <div>
                <img className="Mk-lockSign" src={lock_sign} alt="" />
              </div>
            </div>
          </li>
        </ul>
      </Accordion>

      <Accordion
        title="Lessons With Video Content"
        subTitle="5 Lessons "
        subTitle2="45 Mins"
      >
         <ul className="Mk-AccordionUl">
          <li>
            <div className="Mk-liMargin">
              <img className="Mk-LessonIcon" src={Lesson_Icon} alt="" />{" "}
              <span>Lessons with video content</span>
            </div>
            <div className="Mk-Priview">
              <button className="MK-Accordion-btn">
                <p>Preview</p>
              </button>
              <span className="Mk-Li-Span">12:30</span>
              <div>
                <img className="Mk-RightSign" src={Right_sign} alt="" />
              </div>
            </div>
          </li>
          <li>
            <div>
              <img className="Mk-LessonIcon" src={Lesson_Icon} alt="" />{" "}
              <span>Lessons with video content</span>
            </div>
            <div className="Mk-Priview">
              <button className="MK-Accordion-btn">
                <p>Preview</p>
              </button>
              <span className="Mk-Li-Span">12:30</span>
              <div>
                <img className="Mk-RightSign" src={Right_sign} alt="" />
              </div>
            </div>
          </li>
          <li>
            <div>
              <img className="Mk-LessonIcon" src={Lesson_Icon} alt="" />{" "}
              <span>Lessons with video content</span>
            </div>
            <div className="Mk-Priview">
              <button className="MK-Accordion-btn">
                <p>Preview</p>
              </button>
              <span className="Mk-Li-Span Mk-225">2:25</span>
              <div>
                <img className="Mk-lockSign" src={lock_sign} alt="" />
              </div>
            </div>
          </li>
          <li>
            <div>
              <img className="Mk-LessonIcon" src={Lesson_Icon} alt="" />{" "}
              <span>Lessons with video content</span>
            </div>
            <div className="Mk-Priview">
              <button className="MK-Accordion-btn">
                <p>Preview</p>
              </button>
              <span className="Mk-Li-Span Mk-225">2:25</span>
              <div>
                <img className="Mk-lockSign" src={lock_sign} alt="" />
              </div>
            </div>
          </li>
          <li>
            <div>
              <img className="Mk-LessonIcon" src={Lesson_Icon} alt="" />{" "}
              <span>Lessons with video content</span>
            </div>
            <div className="Mk-Priview">
              <button className="MK-Accordion-btn">
                <p>Preview</p>
              </button>
              <span className="Mk-Li-Span Mk-225">2:25</span>
              <div>
                <img className="Mk-lockSign" src={lock_sign} alt="" />
              </div>
            </div>
          </li>
        </ul>
      </Accordion>
      <Accordion
        title="Lessons With Video Content"
        subTitle="5 Lessons "
        subTitle2="45 Mins"
      >
         <ul className="Mk-AccordionUl">
          <li>
            <div className="Mk-liMargin">
              <img className="Mk-LessonIcon" src={Lesson_Icon} alt="" />{" "}
              <span>Lessons with video content</span>
            </div>
            <div className="Mk-Priview">
              <button className="MK-Accordion-btn">
                <p>Preview</p>
              </button>
              <span className="Mk-Li-Span">12:30</span>
              <div>
                <img className="Mk-RightSign" src={Right_sign} alt="" />
              </div>
            </div>
          </li>
          <li>
            <div>
              <img className="Mk-LessonIcon" src={Lesson_Icon} alt="" />{" "}
              <span>Lessons with video content</span>
            </div>
            <div className="Mk-Priview">
              <button className="MK-Accordion-btn">
                <p>Preview</p>
              </button>
              <span className="Mk-Li-Span">12:30</span>
              <div>
                <img className="Mk-RightSign" src={Right_sign} alt="" />
              </div>
            </div>
          </li>
          <li>
            <div>
              <img className="Mk-LessonIcon" src={Lesson_Icon} alt="" />{" "}
              <span>Lessons with video content</span>
            </div>
            <div className="Mk-Priview">
              <button className="MK-Accordion-btn">
                <p>Preview</p>
              </button>
              <span className="Mk-Li-Span Mk-225">2:25</span>
              <div>
                <img className="Mk-lockSign" src={lock_sign} alt="" />
              </div>
            </div>
          </li>
          <li>
            <div>
              <img className="Mk-LessonIcon" src={Lesson_Icon} alt="" />{" "}
              <span>Lessons with video content</span>
            </div>
            <div className="Mk-Priview">
              <button className="MK-Accordion-btn">
                <p>Preview</p>
              </button>
              <span className="Mk-Li-Span Mk-225">2:25</span>
              <div>
                <img className="Mk-lockSign" src={lock_sign} alt="" />
              </div>
            </div>
          </li>
          <li>
            <div>
              <img className="Mk-LessonIcon" src={Lesson_Icon} alt="" />{" "}
              <span>Lessons with video content</span>
            </div>
            <div className="Mk-Priview">
              <button className="MK-Accordion-btn">
                <p>Preview</p>
              </button>
              <span className="Mk-Li-Span Mk-225">2:25</span>
              <div>
                <img className="Mk-lockSign" src={lock_sign} alt="" />
              </div>
            </div>
          </li>
        </ul>
      </Accordion>
      <Accordion
        title="Lessons With Video Content"
        subTitle="5 Lessons "
        subTitle2="45 Mins"
      >
         <ul className="Mk-AccordionUl">
          <li>
            <div className="Mk-liMargin">
              <img className="Mk-LessonIcon" src={Lesson_Icon} alt="" />{" "}
              <span>Lessons with video content</span>
            </div>
            <div className="Mk-Priview">
              <button className="MK-Accordion-btn">
                <p>Preview</p>
              </button>
              <span className="Mk-Li-Span">12:30</span>
              <div>
                <img  className="Mk-RightSign" src={Right_sign} alt="" />
              </div>
            </div>
          </li>
          <li>
            <div>
              <img className="Mk-LessonIcon" src={Lesson_Icon} alt="" />{" "}
              <span>Lessons with video content</span>
            </div>
            <div className="Mk-Priview">
              <button className="MK-Accordion-btn">
                <p>Preview</p>
              </button>
              <span className="Mk-Li-Span">12:30</span>
              <div>
                <img className="Mk-RightSign" src={Right_sign} alt="" />
              </div>
            </div>
          </li>
          <li>
            <div>
              <img className="Mk-LessonIcon" src={Lesson_Icon} alt="" />{" "}
              <span>Lessons with video content</span>
            </div>
            <div className="Mk-Priview">
              <button className="MK-Accordion-btn">
                <p>Preview</p>
              </button>
              <span className="Mk-Li-Span Mk-225">2:25</span>
              <div>
                <img className="Mk-lockSign" src={lock_sign} alt="" />
              </div>
            </div>
          </li>
          <li>
            <div>
              <img className="Mk-LessonIcon" src={Lesson_Icon} alt="" />{" "}
              <span>Lessons with video content</span>
            </div>
            <div className="Mk-Priview">
              <button className="MK-Accordion-btn">
                <p>Preview</p>
              </button>
              <span className="Mk-Li-Span Mk-225">2:25</span>
              <div>
                <img className="Mk-lockSign" src={lock_sign} alt="" />
              </div>
            </div>
          </li>
          <li>
            <div>
              <img className="Mk-LessonIcon" src={Lesson_Icon} alt="" />{" "}
              <span>Lessons with video content</span>
            </div>
            <div className="Mk-Priview">
              <button className="MK-Accordion-btn">
                <p>Preview</p>
              </button>
              <span className="Mk-Li-Span Mk-225">2:25</span>
              <div>
                <img className="Mk-lockSign" src={lock_sign} alt="" />
              </div>
            </div>
          </li>
        </ul>
      </Accordion>
    </div>
  );
};

const Instructor = () => {
  return (
    <>
    <div className="w-100 d-flex justify-content-between gap-4 Mk-flex-direction">
      <div><img className="Mk-course-single-img" src={Course_single_img} alt="" /></div>
      <div className="Mk-instructor-contact">
        <h4>ThimPress</h4>
        <p>LearnPress is a comprehensive WordPress LMS Plugin for WordPress. 
          This is one of the best WordPress LMS Plugins which can be used to 
          easily create & sell courses online.</p>
          <div className="Mk-ThimPressUl">
            <ul>
            
            <li className='Mk-Instructor-Li'><FontAwesomeIcon icon={faGraduationCap} size="2xs" style={{color: "var(--main-color)",}} /><span> 156 Students </span> </li>
            <li className='Mk-Instructor-Li'><FontAwesomeIcon icon={faPaste} size="2xs" style={{color: "var(--main-color)",}} /> <span> 20 Lessons </span> </li>
            </ul>
          </div>
         
      </div>
      
    </div>
    <p className="Mk-LearnPress-p">LearnPress is a comprehensive WordPress LMS Plugin for WordPress. 
          This is one of the best WordPress LMS Plugins which can be used to 
          easily create & sell courses online.</p>
          <div className="Mk-LinksLearnPress">
            <div className="Mk-Links">
              <span>Follow:</span>
                <a href="#"><FontAwesomeIcon style={{color: "var(--dark-grey)",}} size="xs" icon={faFacebookF} /></a>
                <a href="#"><FontAwesomeIcon style={{color: "var(--dark-grey)",}}size="xs" icon={faPinterest} /></a>
                <a href="#"><FontAwesomeIcon style={{color: "var(--dark-grey)",}} size="xs" icon={faXTwitter} /></a>
                <a href="#"><FontAwesomeIcon style={{color: "var(--dark-grey)",}} size="xs" icon={faInstagram} /></a>
                <a href="#"><FontAwesomeIcon style={{color: "var(--dark-grey)",}} size="xs" icon={faYoutube} /></a>
            </div>
          </div>
 
    </>
  );
};

const FAQs = () => {
  return <>
    <SingleCourseFAQs/>
  </>;
};

const Reviews = () => {
  return (
    <>
    <h4 className="Mk-ReviewsHeading">Comments</h4>
    <div className="Mk-40Rating">
      <h1>4.0</h1>  
      <div className="Mk-StarsRatings">
        <div className="Mk-Stars">
          <img style={{width : "18px"}} src={filled_star} alt="" />
          <img style={{width : "18px"}} src={filled_star} alt="" />
          <img style={{width : "18px"}} src={filled_star} alt="" />
          <img style={{width : "18px"}} src={filled_star} alt="" />
          <img style={{width : "18px"}} src={not_filled_star} alt="" />
        </div>
        <p>based on 146,951 ratings</p>
      </div>
    </div>
    <div className="Mk-Rating">
      <span className="Mk-Stars-2"> 
        <img className="Mk-Starswidth" src={filled_star} alt="" />
        <img className="Mk-Starswidth" src={filled_star} alt="" />
        <img className="Mk-Starswidth" src={filled_star} alt="" />
        <img className="Mk-Starswidth" src={filled_star} alt="" />
        <img className="Mk-Starswidth" src={filled_star} alt="" />
      </span>
      <span className="Mk-NumOfRate">90%</span>
      <div className="Mk-RatingBar">
        <div className="Mk-RatingBarInner" style={{ width: '90%' }}></div>
      </div>
    </div>
    <div className="Mk-Rating">
      <span className="Mk-Stars-2"> 
        <img className="Mk-Starswidth" src={filled_star} alt="" />
        <img className="Mk-Starswidth" src={filled_star} alt="" />
        <img className="Mk-Starswidth" src={filled_star} alt="" />
        <img className="Mk-Starswidth" src={filled_star} alt="" />
        <img className="Mk-Starswidth" src={not_filled_star} alt="" />
      </span>
      <span className="Mk-NumOfRate">5%</span>
      <div className="Mk-RatingBar">
        <div className="Mk-RatingBarInner" style={{ width: '5%' }}></div>
      </div>
    </div>
    <div className="Mk-Rating">
      <span className="Mk-Stars-2"> 
        <img className="Mk-Starswidth" src={filled_star} alt="" />
        <img className="Mk-Starswidth" src={filled_star} alt="" />
        <img className="Mk-Starswidth" src={filled_star} alt="" />
        <img className="Mk-Starswidth" src={not_filled_star} alt="" />
        <img className="Mk-Starswidth" src={not_filled_star} alt="" />
      </span>
      <span className="Mk-NumOfRate">2%</span>
      <div className="Mk-RatingBar">
        <div className="Mk-RatingBarInner" style={{ width: '2%' }}></div>
      </div>
    </div>
    <div className="Mk-Rating">
      <span className="Mk-Stars-2"> 
        <img className="Mk-Starswidth" src={filled_star} alt="" />
        <img className="Mk-Starswidth" src={filled_star} alt="" />
        <img className="Mk-Starswidth" src={not_filled_star} alt="" />
        <img className="Mk-Starswidth" src={not_filled_star} alt="" />
        <img className="Mk-Starswidth" src={not_filled_star} alt="" />
      </span>
      <span className="Mk-NumOfRate">2%</span>
      <div className="Mk-RatingBar">
        <div className="Mk-RatingBarInner" style={{ width: '2%' }}></div>
      </div>
    </div>
    <div className="Mk-Rating">
      <span className="Mk-Stars-2"> 
        <img className="Mk-Starswidth" src={filled_star} alt="" />
        <img className="Mk-Starswidth" src={not_filled_star} alt="" />
        <img className="Mk-Starswidth" src={not_filled_star} alt="" />
        <img className="Mk-Starswidth" src={not_filled_star} alt="" />
        <img className="Mk-Starswidth" src={not_filled_star} alt="" />
      </span>
      <span className="Mk-NumOfRate">1%</span>
      <div className="Mk-RatingBar">
        <div className="Mk-RatingBarInner" style={{ width: '1%' }}></div>
      </div>
    </div>
  </>
  );
};

const Tabs = ({ config }) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="Mk-tabs">
      <div className="Mk-tab-headers">
        {config.map((entry, index) => (
          <div
            key={index}
            className={`Mk-tab-header ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {entry.header}
          </div>
        ))}
      </div>
      <div className="Mk-tab-body">{config[activeTab].component}</div>
    </div>
  );
};

const CourseSingleDetail = () => {

  

  return (
    <>
      <div className="Mk-CourseSingleTabsAndCard">
        <div className="Mk-CommentsAndTabs">
          <Tabs
            config={[
              { header: "Overview", component: <Overview /> },
              { header: "Curriculum", component: <Curriculum /> },
              { header: "Instructor", component: <Instructor /> },
              { header: "FAQs", component: <FAQs /> },
              { header: "Reviews", component: <Reviews /> },
            ]}
          />
          <div>
            <ContactTitle
              Title="Leave a comment"
              subTitle="Your email address will not be published. Required fields are marked *"
            />
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
                <p>
                  Save my name, email in this brower for the next time I comment
                </p>
              </div>
              <button className="MK-Contact-Btn">
                <p>Posts comment</p>
              </button>
            </Form>
          </div>
        </div>
        <div className="Mk-CourseSingleCard">
          <Card className="Mk-CardStyling">
            <Card.Img
              className="Mk-CardImg"
              variant="top"
              src="./../../../public/assetsProject/imges/card(6).png"
            />
            <Card.Body className="Mk-CardBody">
              <Card.Text className="Mk-CardText">
                <span>$59.0</span>
                <h4>$49.0</h4>
              </Card.Text>
              <Button className="Mk-CardBtn">Start now</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default CourseSingleDetail;
