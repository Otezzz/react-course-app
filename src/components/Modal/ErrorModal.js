import React from 'react';

import Button from '../UI/Button/Button'
import styles from './ErrorModal.module.css';

const ErrorModal = props => {

    return (
        {!props.modalHandler && return();}

        <div>
            <div className={styles.backdrop}></div>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <h2>Invalid input</h2>
                </div>
                <div className={styles.content}></div>
                <div className={styles.actions}>
                    <Button type="button">Okay</Button>
                </div>
            </div>
        </div>
    );
};

export default ErrorModal;