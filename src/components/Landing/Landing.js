import React, { useEffect } from 'react';

import SectionWrap from '../UI/SectionWrap/SectionWrap';
import Social from '../UI/Social/Social';
import styles from './landing.module.scss';

const Landing = () => {
    useEffect(() => {
        const el = document.getElementById(`landing`);
        el.addEventListener(`mousemove`, (e) => {
            el.setAttribute(
                `style`,
                `background-position: ${(e.pageX * 100) / screen.availWidth}% ${
                    (e.pageY * 100) / screen.availHeight
                }%;`,
            );
        });
    }, []);

    // [ INFO ] SectionWrap takes classStyle and className, what this does is...
    // allows me to style the children of this <SectionWrap> and no other

    return (
        <SectionWrap classStyle={styles} className="LandingWrap" id="landing">
            <main id="wrapper">
                <header>
                    <h1>RICKY</h1>
                    <h1>COOPER</h1>
                    <div className={styles.yellowUnderline}></div>
                    <ul>
                        <li>WEB DEVELOPER</li>
                        <li>UI / UX DESIGNER</li>
                    </ul>
                </header>
                <div className={styles.ViewMyWork}>
                    <a href="#work">
                        <p>VIEW MY WORK</p>
                        <span className={styles.arrowDown} />
                    </a>
                </div>
                <Social vertical />
            </main>
        </SectionWrap>
    );
};

export default Landing;
