import Accordion from './../CourseSingleAccordions/CourseSingleAccordions.jsx'; 

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
    </div>
  );
};

export default Curriculum;
