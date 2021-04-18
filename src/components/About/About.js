import React from 'react';
import SectionWrap from '../UI/SectionWrap/SectionWrap';
import styles from './about.module.scss';

/* eslint-disable max-len */

const About = () => {
    return (
        <SectionWrap classStyle={styles} className="AboutWrap" id="about">
            <main className={styles.About}></main>
        </SectionWrap>
    );
};

export default About;
