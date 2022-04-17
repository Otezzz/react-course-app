import React from 'react';

import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
import './CourseGoalList.css';

const CourseGoalList = props => {
    return (
        <ul className="goal-list">
            {props.userCompiled.map(goal => {
                return(
                    <CourseGoalItem
                        text={goal.text}
                        key={goal.id}
                    />
                );
            })}
        </ul>
    );
};

export default CourseGoalList;
