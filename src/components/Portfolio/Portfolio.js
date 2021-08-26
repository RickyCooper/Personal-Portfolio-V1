import Project from '../UI/Project/Project';
import React from 'react';
import SectionWrap from '../UI/SectionWrap/SectionWrap';
import styles from './portfolio.module.scss';

/* eslint-disable max-len */

const Portfolio = () => {
    return (
        <SectionWrap
            classStyle={styles}
            className="PortfolioWrap"
            id="portfolio"
        >
            <main className={styles.Portfolio}>
                <h1>WHAT I&apos;VE BUILT</h1>
                <div className={styles.Projects}>
                    <Project
                        num="01."
                        title="Openbox.io"
                        github="https://github.com/RickyCooper/OpenBox.io"
                        website="https://open-box.io"
                        desc="An online game creator web app designed to enables users to develop, host and share their own party games with friends. features include a full fledged game building UI, community built games showcase."
                        technologies={[`React`, `Node`, `Express`, `MongoDB`]}
                    />
                    <Project
                        num="02."
                        title="Class Climate"
                        github="https://github.com/RickyCooper/OpenBox.io"
                        website="https://open-box.io"
                        desc="A classoom managment web application designed to make it easier for teachers to apply behavior policy without disrupting learning, features were developed with the input of real teachers."
                        technologies={[`MERN`]}
                    />
                    <Project
                        num="03."
                        title="Recipe sharing WEBAPP"
                        github="https://github.com/RickyCooper/OpenBox.io"
                        website="https://open-box.io"
                        desc="A classoom managment web application designed to make it easier for teachers to apply behavior policy without disrupting learning, features were developed with the input of real teachers."
                        technologies={[`MERN`]}
                    />
                </div>

                <p className={styles.More} style={{ color: `white` }}>
                    GO TO MY{` `}
                    <a
                        href="https://github.com/RickyCooper"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        GITHUB
                    </a>
                    {` `}
                    TO SEE MY OTHER PROJECTS
                </p>
            </main>
        </SectionWrap>
    );
};

export default Portfolio;
