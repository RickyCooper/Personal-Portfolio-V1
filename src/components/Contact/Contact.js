import React, { useEffect, useState } from 'react';

import ContactForm from '../UI/ContactForm/ContactForm';
import SectionWrap from '../UI/SectionWrap/SectionWrap';
import Social from '../UI/Social/Social';
import styles from './contact.module.scss';

/* eslint-disable max-len */

const Contact = () => {
    const [hasClicked, setHasClicked] = useState();

    useEffect(() => {
        const contactForm = document.getElementById(`contactForm`);

        if (hasClicked) {
            contactForm.style.display = `flex`;
            contactForm.classList.add(styles.ShowForm);
            contactForm.classList.remove(styles.HideForm);
            document.body.classList.add(styles.fixScroll);
        } else if (!hasClicked) {
            contactForm.classList.add(styles.HideForm);
            contactForm.classList.remove(styles.ShowForm);
            contactForm.addEventListener(`animationend`, (event) => {
                if (!event.animationName.includes('slideOut')) {
                    return;
                }
                contactForm.style.display = `none`;
            });
            document.body.classList.remove(styles.fixScroll);
        }
    }, [setHasClicked, hasClicked]);

    return (
        <SectionWrap>
            <ContactForm clicked={setHasClicked} />
            <div className={styles.Contact} id={`contactBtn`}>
                <h1>YOU MADE IT THIS FAR</h1>
                <button
                    onClick={() => setHasClicked(true)}
                    className={hasClicked ? styles.BtnClicked : null}
                >
                    GET IN TOUCH
                </button>
            </div>
            <footer>
                <Social />
                <p>
                    <a href="mailto:Contact@rickycooper.com">
                        Contact@rickycooper.com
                    </a>
                </p>
            </footer>
        </SectionWrap>
    );
};

export default Contact;
