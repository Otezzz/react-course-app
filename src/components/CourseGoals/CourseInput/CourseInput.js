import React, {useState} from 'react';

import Button from '../../UI/Button/Button';
import ErrorModal from '../../Modal/ErrorModal';
import styles from './CourseInput.module.css';

const CourseInput = props => {
    const [userText, setUserText] = useState('');
    const [ageText, setAgeText] = useState('');
    const [useModal, setUseModal] = useState(false);
    const [error, setError] = useState();

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

        if (userName === '') {
            setError('Please enter valid name & age. (non-empty values)');
        } else if (age === '') {
            setError('Please enter a valid age (>0)');
        }

        if (userName === '' || age === '') {
            setUseModal(true);
            setUserText('');
            setAgeText('');

            return;
        }

        props.compText(compiledText);
        setUserText('');
        setAgeText('');
    };

    const cancelModalHandler = (data) => {
        setUseModal(data);
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
            {useModal && <ErrorModal errorText={error} onCancelModal={cancelModalHandler}/>}
        </form>
    );
};

export default CourseInput;
