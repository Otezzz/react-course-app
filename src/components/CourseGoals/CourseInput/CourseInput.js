import React, {useState} from 'react';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

const CourseInput = props => {
    const [enteredText, setEnteredText] = useState('');

    const formSubmitHandler = event => {
        event.preventDefault();

        debugger;
        const userName = event.target.elements['username'].value;
        const age =event.target.elements['age'].value;
        const compiledText = userName + `${' (' + age + ' years old)'}`;

        props.compText(compiledText);
        setEnteredText('');
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={`${styles['form-control']}`}>
                <label>Username</label>
                <input value={enteredText} type="text" id="username"/>
                <br/>
                <label>Age (Years)</label>
                <input value={enteredText} type="number" id="age"/>
            </div>
            <Button type="submit">Add User</Button>
        </form>
    );
};

export default CourseInput;
