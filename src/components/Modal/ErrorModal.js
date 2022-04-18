import React, { useState } from 'react';

import Button from '../UI/Button/Button'
import styles from './ErrorModal.module.css';

const ErrorModal = props => {
    // const [modalText, setModalText] = useState();

    const closeModal = () => {
        props.onCancelModal(false);
    };

    return (
        <div className={styles.backdrop} onClick={closeModal}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <h2>Invalid input</h2>
                </div>
                <div className={styles.content}>{props.errorText}</div>
                <div className={styles.actions}>
                    <Button type="button" onClick={closeModal}>Okay</Button>
                </div>
            </div>
        </div>
    );
};

export default ErrorModal;