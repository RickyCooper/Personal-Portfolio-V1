import React from 'react';
import SectionWrap from '../UI/SectionWrap/SectionWrap';
import styles from './about.module.scss';

/* eslint-disable max-len */

const About = () => {
    return (
        <SectionWrap classStyle={styles} className="AboutWrap" id="about">
            <main className={styles.About}>
                <h1>
                    HI, I&apos;M <span>RICKY</span>
                </h1>
                <p>
                    A full stack developer and web designer situated in
                    <span> Leicestershire,</span> I discovered my aptitude for
                    building web applications during the course at university I
                    built a recipe sharing social media webapp with PHP. It
                    boasted a uniqiue functionallity that would reccomened
                    recipes based on the users profile and past interactions on
                    the site, view my cv for more details on that project.
                    <br />
                    <br /> The recent nationwide lock-down gave me an abundant
                    amount of free time that I spent learning through Udemy
                    courses and developing projects to showcase my skillset on
                    Github. I focused on learning a particular web development
                    stack called <span>MERN</span> coding the frontend with
                    React, managing my database with MongoDB and building
                    backend REST APIs with Node and Express.
                </p>

                <button>
                    VIEW MY <span>CV</span>
                </button>
            </main>
        </SectionWrap>
    );
};

export default About;
