import React from 'react';
import SvgGithub2 from '../../../assets/svg/svgGithub2/svgGithub2';
import SvgWebpage from '../../../assets/svg/svgWebpage/svgWebpage';
import styles from './project.module.scss';

const Project = ({ num, title, github, website, desc, technologies }) => {
    let stack = technologies.map((technology) => {
        return <p key={technology}>{technology}</p>;
    });

    return (
        <div className={styles.Project}>
            <div>
                <span>{num}</span>
                <h2>{title}</h2>
                <a href={github}>
                    <SvgGithub2 />
                </a>
                <a href={website}>
                    <SvgWebpage />
                </a>
            </div>
            <p className={styles.Paragraph}>{desc}</p>
            <div className={styles.Technologies}>{stack}</div>
        </div>
    );
};

export default Project;
