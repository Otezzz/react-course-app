import React from 'react';

import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
import './CourseGoalList.css';

const CourseGoalList = props => {
  return (
    <ul className="goal-list">
        <CourseGoalItem userCompiled={props.userCompiled}/>
    </ul>
  );
};

export default CourseGoalList;
