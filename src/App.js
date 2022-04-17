import React, {useState} from 'react';

import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import './App.css';

const App = () => {
    const [goal, setGoal] = useState('goal');
    console.log();

    const goalHandler = (goalData) => {
        debugger;
        setGoal(goalData);
    };

    return (
        <div>
            <section id="goal-form">
                <CourseInput compText={goalHandler}/>
            </section>
            <section id="goals">
                <CourseGoalList userCompiled={goal}/>
            </section>
        </div>
    );
};

export default App;
