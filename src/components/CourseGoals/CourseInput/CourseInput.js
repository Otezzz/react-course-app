import React, {useState} from 'react';

import Button from '../../UI/Button/Button';
import ErrorModal from '../../Modal/ErrorModal';
import styles from './CourseInput.module.css';

const CourseInput = props => {
    const [userText, setUserText] = useState('');
    const [ageText, setAgeText] = useState('');
    const [useModal, setUseModal] = useState('false');

    const userHandler = (event) => {
        setUserText(event.target.value);
    };

    const ageHandler = (event) => {
        setAgeText(event.target.value);
    };

    const formSubmitHandler = event => {
        event.preventDefault();

        debugger;
        const userName = event.target.elements['username'].value;
        const age =event.target.elements['age'].value;
        const compiledText = userName + `${' (' + age + ' years old)'}`;

        if (userName === undefined) {
            setUseModal(true);
        }

        props.compText(compiledText);
        setUserText('');
        setAgeText('');
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={`${styles['form-control']}`}>
                <label>Username</label>
                <input value={userText} type="text" id="username" onChange={userHandler}/>
                <br/>
                <label>Age (Years)</label>
                <input value={ageText} type="number" id="age" onChange={ageHandler}/>
            </div>
            <Button type="submit">Add User</Button>
            <ErrorModal modalHandler={useModal}/>
        </form>
    );
};

export default CourseInput;
