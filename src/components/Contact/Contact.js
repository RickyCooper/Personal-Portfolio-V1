import React, { useCallback, useState } from 'react';

import ContactForm from '../UI/ContactForm/ContactForm';
import SectionWrap from '../UI/SectionWrap/SectionWrap';
import Social from '../UI/Social/Social';
import styles from './contact.module.scss';

/* eslint-disable max-len */

const Contact = () => {
    const [hasClicked, setHasClicked] = useState(false);

    const toggleForm = useCallback(() => {
        

        if (hasClicked) {
            document.body.classList.add(styles.fixScroll);
            return <ContactForm clicked={setHasClicked} />;
        } else {
            document.body.classList.remove(styles.fixScroll)
            return (
                <div className={styles.Contact}>
                    <h1>YOU MADE IT THIS FAR</h1>
                    <button
                        onClick={setHasClicked}
                        className={hasClicked ? styles.BtnClicked : null}
                    >
                        GET IN TOUCH
                    </button>
                </div>
            );
        }
    }, [setHasClicked, hasClicked]);

    return (
        <SectionWrap>
            {toggleForm()}
            <footer>
                <Social />
                <p><a href="mailto:Contact@rickycooper.com">Contact@rickycooper.com</a></p>
            </footer>
        </SectionWrap>
    );
};

export default Contact;

/* 

    <div className={styles.Contact}> 
        <h1>YOU MADE IT THIS FAR</h1>
<button className={hasClicked ? styles.BtnClicked : null }>GET IN TOUCH</button>
 </div>


*/
