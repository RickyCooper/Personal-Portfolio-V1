import React from 'react';
import styles from './landing.module.scss';
import Social from '../UI/Social/Social'

const Landing = () => {
    return (
        <div className={styles.container}>
            <header>
                <h1>RICKY</h1>
                <h1>COOPER</h1>
                <div class={styles.yellowUnderline}></div>
                <ul>
                    <li>WEB DEVELOPER</li>
                    <li>UI / UX DESIGNER</li>
                </ul>
            </header>
            <Social/>
            <div className={styles.ViewMyWork}>
                <a href="#work">
                    <p>VIEW MY WORK</p>
                    <span className={styles.arrowDown}/>
                </a>
            </div>
      </div>
    );
}

export default Landing;