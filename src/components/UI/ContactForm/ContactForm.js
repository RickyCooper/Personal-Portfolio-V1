import React, { useState } from 'react';

import emailjs from 'emailjs-com';
import styles from './contactForm.module.scss';

/* eslint-disable max-len */

const ContactForm = () => {
    const [name, setName] = useState(``);
    const [email, setEmail] = useState(``);
    const [subject, setSubject] = useState(``);
    const [message, setMessage] = useState(``);

    const sendEmail = async (e) => {
        e.preventDefault();

        await emailjs
            .sendForm(
                `service_7gw3m88`,
                `template_4eoq1h8`,
                e.target,
                `user_D5I0J0vuc6ZobhaO0chs4`,
            )
            .then(
                (result) => {
                    console.log(result.text);
                    resetForm(setName, setEmail, setSubject, setMessage);
                },
                (error) => {
                    console.log(error.text);
                    resetForm(setName, setEmail, setSubject, setMessage);
                },
            );
    };

    const resetForm = (...args) => {
        args.forEach((setArgsState) => setArgsState(``));
    };

    return (
        <div className={styles.ContactForm} id="contactForm">
            <form onSubmit={sendEmail}>
                <h1>GET IN TOUCH</h1>
                <div className={styles.Form_input}>
                    <input
                        onChange={(event) => setName(event.target.value)}
                        value={name}
                        required
                        type="text"
                        name={`user_name`}
                        autoComplete="off"
                    />
                    <label className={styles.Label_input}>
                        <span className={styles.Content_input}>name</span>
                    </label>
                </div>
                <div className={styles.Form_input}>
                    <input
                        onChange={(event) => setEmail(event.target.value)}
                        value={email}
                        required
                        type="text"
                        name={`user_email`}
                        autoComplete="off"
                    />
                    <label className={styles.Label_input}>
                        <span className={styles.Content_input}>email</span>
                    </label>
                </div>
                <div className={styles.Form_input}>
                    <input
                        onChange={(event) => setSubject(event.target.value)}
                        value={subject}
                        required
                        type="text"
                        name={`subject`}
                        autoComplete="off"
                    />
                    <label className={styles.Label_input}>
                        <span className={styles.Content_input}>subject</span>
                    </label>
                </div>
                <div className={styles.Form_textarea}>
                    <textarea
                        onChange={(event) => setMessage(event.target.value)}
                        value={message}
                        required
                        name={`message`}
                        autoComplete="off"
                    ></textarea>
                    <label className={styles.Label_textarea}>
                        <span className={styles.Content_textarea}>message</span>
                    </label>
                </div>
                <button type="submit" value="Send">
                    SEND
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
