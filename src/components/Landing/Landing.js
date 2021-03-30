import React from 'react';
import SectionWrap from '../UI/SectionWrap/SectionWrap';
import Social from '../UI/Social/Social';
import styles from './landing.module.scss';

const Landing = () => {
    return (
        <SectionWrap>
            <header>
                <h1>RICKY</h1>
                <h1>COOPER</h1>
                <div className={styles.yellowUnderline}></div>
                <ul>
                    <li>WEB DEVELOPER</li>
                    <li>UI / UX DESIGNER</li>
                </ul>
            </header>
            <Social vertical />
            <div className={styles.ViewMyWork}>
                <a href="#work">
                    <p>VIEW MY WORK</p>
                    <span className={styles.arrowDown} />
                </a>
            </div>
        </SectionWrap>
    );
};

export default Landing;
