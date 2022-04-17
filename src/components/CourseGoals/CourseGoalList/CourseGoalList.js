import React from 'react';

import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
import './CourseGoalList.css';

const CourseGoalList = props => {
    return (
        <ul className="goal-list"
            userCompiled={props.userCompiled.map(goal => {
                return(
                    <CourseGoalItem
                        text={goal.text}
                        id={goal.id}
                    />
                );
            })}>
        </ul>
    );
};

export default CourseGoalList;
