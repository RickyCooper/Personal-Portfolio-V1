import React, { useState } from 'react';

import ContactForm from '../UI/ContactForm/ContactForm';
import SectionWrap from '../UI/SectionWrap/SectionWrap';
import Social from '../UI/Social/Social';
import styles from './contact.module.scss';

/* eslint-disable max-len */

const Contact = () => {
    const [hasClicked, setHasClicked] = useState(false);

    const currentYear = new Date().getFullYear();

    let showForm = hasClicked ? (
        <ContactForm />
    ) : (
        <main id="contact-main">
            <div className={styles.Contact_Prompt}>
                <h1>YOU MADE IT THIS FAR</h1>
                <button
                    onClick={() => setHasClicked(true)}
                    className={hasClicked ? styles.BtnClicked : null}
                >
                    GET IN TOUCH
                </button>
            </div>
        </main>
    );

    return (
        <SectionWrap classStyle={styles} className="ContentWrap" id={`contact`}>
            {showForm}
            <footer>
                <Social />
                <p>Copyright &copy;{` ${currentYear} Ricky Cooper`}</p>
            </footer>
        </SectionWrap>
    );
};

export default Contact;
