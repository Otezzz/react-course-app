import React from 'react';

import './CourseGoalItem.css';

const CourseGoalItem = props => {

    return (
        props.userCompiled.map((goal)=>{
            return (
                <li className="goal-item">
                    {goal}
                </li>
            );
        })
    );
};

export default CourseGoalItem;
