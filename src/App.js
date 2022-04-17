import React, {useState} from 'react';

import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import './App.css';

const App = () => {
    const [goals, setGoals] = useState([
        'Start text!',
        'Start text2'
    ]);
    console.log();

    const goalHandler = (goalData) => {
        debugger;
        setGoals(goalData);
    };

    return (
        <div>
            <section id="goal-form">
                <CourseInput compText={goalHandler}/>
            </section>
            <section id="goals">
                <CourseGoalList userCompiled={goals}/>
            </section>
        </div>
    );
};

export default App;
