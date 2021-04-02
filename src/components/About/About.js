import React from 'react';
import SectionWrap from '../UI/SectionWrap/SectionWrap';
import styles from './about.module.scss';

/* eslint-disable max-len */

const About = () => {
    return (
        <SectionWrap Secondary>
            <div className={styles.AboutBgImg}></div>
            <div className={styles.AboutTxt}>
                <h1>About</h1>
                <p>
                    Hello, I’m <span>Ricky Cooper</span> a full stack developer
                    and web designer. I build beauftiful UX focused web applcations that
                    breakaway from the standerd boilerplate design.
                </p>
            </div>
        </SectionWrap>
    );
};

export default About;
