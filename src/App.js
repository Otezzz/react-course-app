import React, {useState} from 'react';

import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import './App.css';

const App = () => {
    const [goals, setGoals] = useState([
        {text: 'Start text!', id: 'text1'},
        {text: 'Start text2', id: 'text2'}
    ]);
    console.log();

    const goalHandler = goalData => {
        debugger;

        setGoals(prevGoals => {
            const updatedGoals = [...prevGoals];
            updatedGoals.unshift({ text: goalData, id: Math.random().toString() });
            return updatedGoals;
        });
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
