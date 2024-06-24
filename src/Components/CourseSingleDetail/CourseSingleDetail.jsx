import { useState, useRef } from "react";
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
import Course_single_img from "./../../../public/assetsProject/imges/course-single.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaste } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import {
  faXTwitter,
  faPinterest,
  faInstagram,
  faFacebookF,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import SingleCourseFAQs from "../SinglePageFAQs/SinglePageFAQs.jsx";
import filled_star from "./../../../public/assetsProject/imges/filled-star.png";
import not_filled_star from "./../../../public/assetsProject/imges/not-filled-star.png";
import Pagination from "../Pagination/Pagination.jsx";

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
    </div>
  );
};

const Instructor = () => {
  return (
    <>
      <div className="w-100 d-flex justify-content-between gap-4 Mk-flex-direction">
        <div>
          <img
            className="Mk-course-single-img"
            src={Course_single_img}
            alt=""
          />
        </div>
        <div className="Mk-instructor-contact">
          <h4>ThimPress</h4>
          <p>
            LearnPress is a comprehensive WordPress LMS Plugin for WordPress.
            This is one of the best WordPress LMS Plugins which can be used to
            easily create & sell courses online.
          </p>
          <div className="Mk-ThimPressUl">
            <ul>
              <li className="Mk-Instructor-Li">
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  size="2xs"
                  style={{ color: "var(--main-color)" }}
                />
                <span> 156 Students </span>{" "}
              </li>
              <li className="Mk-Instructor-Li">
                <FontAwesomeIcon
                  icon={faPaste}
                  size="2xs"
                  style={{ color: "var(--main-color)" }}
                />{" "}
                <span> 20 Lessons </span>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="Mk-LearnPress-p">
        LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This
        is one of the best WordPress LMS Plugins which can be used to easily
        create & sell courses online.
      </p>
      <div className="Mk-LinksLearnPress">
        <div className="Mk-Links">
          <span>Follow:</span>
          <a href="#">
            <FontAwesomeIcon
              style={{ color: "var(--dark-grey)" }}
              size="xs"
              icon={faFacebookF}
            />
          </a>
          <a href="#">
            <FontAwesomeIcon
              style={{ color: "var(--dark-grey)" }}
              size="xs"
              icon={faPinterest}
            />
          </a>
          <a href="#">
            <FontAwesomeIcon
              style={{ color: "var(--dark-grey)" }}
              size="xs"
              icon={faXTwitter}
            />
          </a>
          <a href="#">
            <FontAwesomeIcon
              style={{ color: "var(--dark-grey)" }}
              size="xs"
              icon={faInstagram}
            />
          </a>
          <a href="#">
            <FontAwesomeIcon
              style={{ color: "var(--dark-grey)" }}
              size="xs"
              icon={faYoutube}
            />
          </a>
        </div>
      </div>
    </>
  );
};

const FAQs = () => {
  return (
    <>
      <SingleCourseFAQs />
    </>
  );
};

const Reviews = () => {
  // قسم الهوكس
  //  التحكم بالانديكس الخاص بالصورة الرئيسية ومراقبته

  // التحكم بمصفوفة الكومينتس ومراقبتها
  let [comments, setComments] = useState([
    {
      id: 1,
      text: "First Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed faucibus bibendum augue id cras purus. At eget euismod cursus non. Molestie dignissim sed volutpat feugiat vel.",
      replys: [],
    },
    {
      id: 2,
      text: "Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed faucibus bibendum augue id cras purus. At eget euismod cursus non. Molestie dignissim sed volutpat feugiat vel.",
      replys: [],
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eius iste eum. Possimus id itaque in?",
      replys: [],
    },
    {
      id: 4,
      text: "Lorem ipsum dolor Eveniet eius iste eum. sit amet consectetur adipisicing elit. Possimus id itaque in?",
      replys: [],
    },
    {
      id: 5,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus id itaque in?",
      replys: [],
    },
    {
      id: 6,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. dolor sit amet consectetur adipisicing elit. Possimus id itaque in?",
      replys: [],
    },
    {
      id: 7,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. dolor sit amet consectetur adipisicing elit. Possimus id itaque in?",
      replys: [],
    },
    {
      id: 8,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. dolor sit amet consectetur adipisicing elit. Possimus id itaque in?",
      replys: [],
    },
    {
      id: 9,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. dolor sit amet consectetur adipisicing elit. Possimus id itaque in?",
      replys: [],
    },
    {
      id: 10,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. dolor sit amet consectetur adipisicing elit. Possimus id itaque in?",
      replys: [],
    },
    {
      id: 11,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. dolor sit amet consectetur adipisicing elit. Possimus id itaque in?",
      replys: [],
    },
  ]);

  //
  let [currentPage, setCurrentPage] = useState(1);

  // تتحكم بعدد الكومينتس في صفحة الباجينيشن (Pagination)
  let [commentsPerPage, setCommentsPerPage] = useState(5);

  // مراقبة انبوت الاسم
  let [name, setName] = useState("");

  // مراقبة انبوت الايميل
  let [email, setEmail] = useState("");

  // مراقبة التيكست اريا
  let [commentText, setCommentText] = useState("");

  //  (Posts Replay Comment) تتحكم بحالة زر
  let [displayNone, setDisplayNone] = useState(true);

  // للتيكست اريا Auto Focus تتحكم قي حالة
  let [autoFocus, setAutoFocus] = useState(false);

  // تبين حالة الكومينت فيما اذا كان رد ام لا
  let [isReply, setIsReply] = useState(false);

  // تعيد المعرف الخاص بالرد
  let [replyCommentId, setReplyCommentId] = useState(null);

  // تعيد المعرف الخاص بالرد على الرد
  let [replyOnReplyCommentId, setReplyOnReplyCommentId] = useState(null);

  // انشاء مرجع لربط التيكست اريا به
  const textAreaRef = useRef(null);

  // متغيرات تساعد في الباجينيشن (Pagination)
  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = comments.slice(
    indexOfFirstComment,
    indexOfLastComment
  );

  // تابع يتعامل مع رقم الصفحة القادم من كومبوننت الباجنيشن
  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }

  // (التقدم الى الامام) التعامل مع صفحات الباجنيشن من خلال الاسهم
  function handlePaginationWithArrowINC() {
    if (currentPage < comments.length / commentsPerPage) {
      setCurrentPage(currentPage + 1);
    }
  }

  // (الرجوع الى الخلف) التعامل مع صفحات الباجنيشن من خلال الاسهم
  function handlePaginationWithArrowDEC() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  // (Submit) تابع يفعل عند النقر على زر
  // function handleSubmit() {
  //   // (newComment) انشاء اوبجيكت
  //   const newComment = {
  //     id: comments.length + 1,
  //     text: commentText,
  //     replys: [],
  //   };

  //   setComments([newComment, ...comments]); // اضافة الاوبجيكت السابق الى مصفوفة الكومينتس

  //   // تصفير قيم الانبوتس
  //   setName("");
  //   setEmail("");
  //   setCommentText("");
  // }

  // تابع يفعل قي حالة الرد على الكومينت
  function handleReplayComments(commentId) {
    setComments(
      comments.map((comment) => {
        return commentId === comment.id // مقارنة المعرف الصحيح من اجل الاضافة فيه
          ? {
              ...comment,
              replys: [
                ...comment.replys,
                {
                  // لكي يكون المعرف فريد قي جميع مصفوفات الريببليز وليس فريد في المصفوفة الواحدة فقط
                  id: comments.reduce((total, comment) => {
                    return total + comment.replys.length;
                  }, 1),
                  replayTetx: commentText,
                },
              ],
            }
          : comment;
      })
    );

    // تصفير قيم الانبوتس
    setCommentText("");
  }

  // تابع يفعل قي حالة الرد على رد الكومينت
  function handleReplayOnReplayComments(replayOnReplayCommentId) {
    setComments(
      comments.map((comment) => {
        if (
          comment.replys.some((reply) => reply.id === replayOnReplayCommentId) // مقارنة المعرف الصحيح من اجل الاضافة فيه
        ) {
          return {
            ...comment,
            replys: [
              ...comment.replys,
              {
                // لكي يكون المعرف فريد قي جميع مصفوفات الريببليز وليس فريد في المصفوفة الواحدة فقط
                id: comments.reduce((total, comment) => {
                  return total + comment.replys.length;
                }, 1),
                replayTetx: commentText,
              },
            ],
          };
        }
        return comment;
      })
    );

    // تصفير قيم الانبوتس
    setCommentText("");
  }

  // تابع يفعل في حالة الضغط على مربع الريبلاي الخاص بالكومينت
  function handleClickingOnReplay() {
    // (Posts Replay Comment) عن زر (display: none;) ازالة
    setDisplayNone(false);

    // الى التيكست اريا (Auto Focus) اضافة خاصية
    setAutoFocus(true);
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }
  }

  // (Posts Replay Comment) تابع يفعل عند الضغط على زر
  function handlePostsReplayComment() {
    if (isReply) {
      handleReplayComments(replyCommentId);
    } else {
      handleReplayOnReplayComments(replyOnReplyCommentId);
    }

    // (Posts Replay Comment) الى زر (display: none;) اضافة
    setDisplayNone(true);
    // عن التيكست اريا (Auto Focus) ازالة خاصية
    setAutoFocus(false);
  }

  return (
    <>
      <h4 className="Mk-ReviewsHeading">Comments</h4>
      <div className="Mk-40Rating">
        <h1>4.0</h1>
        <div className="Mk-StarsRatings">
          <div className="Mk-Stars">
            <img style={{ width: "18px" }} src={filled_star} alt="" />
            <img style={{ width: "18px" }} src={filled_star} alt="" />
            <img style={{ width: "18px" }} src={filled_star} alt="" />
            <img style={{ width: "18px" }} src={filled_star} alt="" />
            <img style={{ width: "18px" }} src={not_filled_star} alt="" />
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
          <div className="Mk-RatingBarInner" style={{ width: "90%" }}></div>
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
          <div className="Mk-RatingBarInner" style={{ width: "5%" }}></div>
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
          <div className="Mk-RatingBarInner" style={{ width: "2%" }}></div>
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
          <div className="Mk-RatingBarInner" style={{ width: "2%" }}></div>
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
          <div className="Mk-RatingBarInner" style={{ width: "1%" }}></div>
        </div>
      </div>
      <div className="SHaaban-comment-section Mk-CommentSection">
        {currentComments.map((comment) => {
          return (
            <div className="SHaaban-comment-body" key={comment.id}>
              
              <div className="SHaaban-adding-flex">
                <img
                  className="SHaaban-adding-style-for-comment-imange"
                  src="./../../public/assetsProject/imges/card(12).png"
                  alt=""
                />
                <div className="SHaaban-adding-flex-grow">
                  <div className="SHaaban-adding-flex-center-spaceBetween">
                    <p className="SHaaban-comment-userName">Laura Hipster</p>
                    <p className="SHaaban-comment-date">October 03, 2022</p>
                  </div>
                  <p className="SHaaban-comment-content">{comment.text}</p>
                  <div
                    onClick={() => {
                      handleClickingOnReplay();
                      setIsReply(true);
                      setReplyCommentId(comment.id);
                    }}
                    className="SHaaban-adding-margin-bottom SHaaban-adding-style-with-hover"
                  >
                    <img
                      src="../../public/assetsProject/imageFromHaidar/Vector.svg"
                      alt=""
                    />
                    <span className="SHaaban-adding-style-for-replay">
                      Replay
                    </span>
                  </div>
                </div>
              </div>
              <div className="SHaaban-replay-comment-body">
                {comment.replys.map((c) => {
                  return (
                    <div
                      className="SHaaban-comment-body SHaaban-adding-flex SHaaban-adding-width"
                      key={c.id}
                    >
                      <img
                        className="SHaaban-adding-style-for-comment-imange"
                        src="./../../public/assetsProject/imges/card(12).png"
                        alt=""
                      />
                      <div className="SHaaban-adding-flex-grow">
                        <div className="SHaaban-adding-flex-center-spaceBetween">
                          <p className="SHaaban-comment-userName">
                            Laura Hipster
                          </p>
                          <p className="SHaaban-comment-date">
                            October 03, 2022
                          </p>
                        </div>
                        <p className="SHaaban-comment-content">
                          {c.replayTetx}
                        </p>
                        <div
                          onClick={() => {
                            // تتعامل مع الرد على الردود الخاصة بالتعليقات
                            handleClickingOnReplay();
                            setReplyOnReplyCommentId(c.id);
                          }}
                          className="SHaaban-adding-margin-bottom SHaaban-adding-style-with-hover"
                        >
                          <img
                            src="../../public/assetsProject/imageFromHaidar/Vector.svg"
                            alt=""
                          />
                          <span className="SHaaban-adding-style-for-replay">
                            Replay
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
        {currentComments.map((comment) => {
              return (
                <div className="SHaaban-comment-body" key={comment.id}>
                  <div className="SHaaban-adding-flex">
                    <img
                      className="SHaaban-adding-style-for-comment-imange"
                      src="./../../public/assetsProject/imges/card(12).png"
                      alt=""
                    />
                    <div className="SHaaban-adding-flex-grow">
                      <div className="SHaaban-adding-flex-center-spaceBetween">
                        <p className="SHaaban-comment-userName">
                          Laura Hipster
                        </p>
                        <p className="SHaaban-comment-date">October 03, 2022</p>
                      </div>
                      <p className="SHaaban-comment-content">{comment.text}</p>
                      <div
                        onClick={() => {
                          handleClickingOnReplay();
                          setIsReply(true);
                          setReplyCommentId(comment.id);
                        }}
                        className="SHaaban-adding-margin-bottom SHaaban-adding-style-with-hover"
                      >
                        <img
                          src="../../public/assetsProject/imageFromHaidar/Vector.svg"
                          alt=""
                        />
                        <span className="SHaaban-adding-style-for-replay">
                          Replay
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="SHaaban-replay-comment-body">
                    {comment.replys.map((c) => {
                      return (
                        <div
                          className="SHaaban-comment-body SHaaban-adding-flex SHaaban-adding-width"
                          key={c.id}
                        >
                          <img
                            className="SHaaban-adding-style-for-comment-imange"
                            src="./../../public/assetsProject/imges/card(12).png"
                            alt=""
                          />
                          <div className="SHaaban-adding-flex-grow">
                            <div className="SHaaban-adding-flex-center-spaceBetween">
                              <p className="SHaaban-comment-userName">
                                Laura Hipster
                              </p>
                              <p className="SHaaban-comment-date">
                                October 03, 2022
                              </p>
                            </div>
                            <p className="SHaaban-comment-content">
                              {c.replayTetx}
                            </p>
                            <div
                              onClick={() => {
                                // تتعامل مع الرد على الردود الخاصة بالتعليقات
                                handleClickingOnReplay();
                                setReplyOnReplyCommentId(c.id);
                              }}
                              className="SHaaban-adding-margin-bottom SHaaban-adding-style-with-hover"
                            >
                              <img
                                src="../../public/assetsProject/imageFromHaidar/Vector.svg"
                                alt=""
                              />
                              <span className="SHaaban-adding-style-for-replay">
                                Replay
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
      <Pagination
        commentsPerPageProp={commentsPerPage}
        totalCommentsProp={comments.length}
        paginate={paginate}
        handlePaginationWithArrowINC={handlePaginationWithArrowINC}
        handlePaginationWithArrowDEC={handlePaginationWithArrowDEC}
      />
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

  
  let [email, setEmail] = useState("");
  let [commentText, setCommentText] = useState("");
  const textAreaRef = useRef(null);
  let [autoFocus, setAutoFocus] = useState(false);
   function handleSubmit() {
    // (newComment) انشاء اوبجيكت
    const newComment = {
      id: comments.length + 1,
      text: commentText,
      replys: [],
    };
    console.log(comments);

    setComments([newComment, ...comments]); // اضافة الاوبجيكت السابق الى مصفوفة الكومينتس

    // تصفير قيم الانبوتس
    setName("");
    setEmail("");
    setCommentText("");
    
  }
  let [comments, setComments] = useState([
    {
      id: 1,
      text: "First Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed faucibus bibendum augue id cras purus. At eget euismod cursus non. Molestie dignissim sed volutpat feugiat vel.",
      replys: [],
    },
    {
      id: 2,
      text: "Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed faucibus bibendum augue id cras purus. At eget euismod cursus non. Molestie dignissim sed volutpat feugiat vel.",
      replys: [],
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eius iste eum. Possimus id itaque in?",
      replys: [],
    },
    {
      id: 4,
      text: "Lorem ipsum dolor Eveniet eius iste eum. sit amet consectetur adipisicing elit. Possimus id itaque in?",
      replys: [],
    },
    {
      id: 5,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus id itaque in?",
      replys: [],
    },
    {
      id: 6,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. dolor sit amet consectetur adipisicing elit. Possimus id itaque in?",
      replys: [],
    },
    {
      id: 7,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. dolor sit amet consectetur adipisicing elit. Possimus id itaque in?",
      replys: [],
    },
    {
      id: 8,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. dolor sit amet consectetur adipisicing elit. Possimus id itaque in?",
      replys: [],
    },
    {
      id: 9,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. dolor sit amet consectetur adipisicing elit. Possimus id itaque in?",
      replys: [],
    },
    {
      id: 10,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. dolor sit amet consectetur adipisicing elit. Possimus id itaque in?",
      replys: [],
    },
    {
      id: 11,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. dolor sit amet consectetur adipisicing elit. Possimus id itaque in?",
      replys: [],
    },
  ]);
  let [name, setName] = useState("");

  let [displayNone, setDisplayNone] = useState(true);
  let [currentPage, setCurrentPage] = useState(1);

  // تتحكم بعدد الكومينتس في صفحة الباجينيشن (Pagination)
  let [commentsPerPage, setCommentsPerPage] = useState(5);
  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = comments.slice(
    indexOfFirstComment,
    indexOfLastComment
  );
  
  
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
            {/* <ContactTitle
              Title="Leave a comment"
              subTitle="Your email address will not be published. Required fields are marked *"
            /> */}
            <div className="SHaaban-form-area Mk-FormArea">
            <h4 className="SHaaban-form-area-title">Leave A Comment</h4>
            <p className="SHaaban-form-area-paragraph">
              Your email address will not be published. Required fields are
              marked *
            </p>
            <form id="SHaaban-form-body" action="">
              <div className="SHaaban-styling-form-inputs">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Name*"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Email*"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              
            
              <textarea
                className="SHaaban-styling-text-area"
                name=""
                id=""
                placeholder="Comment"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                ref={textAreaRef}
                autoFocus={autoFocus}
                onSubmit={handleSubmit}
              ></textarea>
              <input type="checkbox" name="" id="SHaaban-checkbox" value="" />
              <label
                id="SHaaban-adding-style-for-label"
                htmlFor="SHaaban-checkbox"
              >
                Save my name, email in this brower for the next time I comment
              </label>
            </form>
            <div className="SHaaban-btn-area">
              <button
                onClick={handleSubmit}
                id="SHaaban-adding-style-for-button"
              >
                Posts Comment
              </button>
              <button
                onClick={() => {
                  handlePostsReplayComment();
                }}
                id="SHaaban-adding-style-for-replay-button"
                className={displayNone ? "d-none" : ""}
              >
                Posts Replay Comment
              </button>
            </div>
          </div>
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
