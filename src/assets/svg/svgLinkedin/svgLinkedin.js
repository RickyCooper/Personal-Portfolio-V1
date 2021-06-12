import React from 'react';
import styles from '../svg.module.scss';

/* eslint-disable max-len */

const svgLinkedin = () => {
    let styleArray = [styles.SocialSvgStyling, styles.SizingFooter];

    return (
        <a
            className={[...styleArray].join(` `)}
            href="https://www.linkedin.com/in/ricky-cooper-712514b3/"
            target="_blank"
            rel="noopener noreferrer"
        >
            <svg
                id="Bold"
                enableBackground="new 0 0 24 24"
                viewBox="0 0 28 28"
                xmlns="http://www.w3.org/2000/svg"
                alt="Linkedin Logo"
                aria-label="Linkedin Logo"
            >
                <path d="m23.994 24v-.001h.006v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07v-2.185h-4.773v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243v7.801z" />
                <path d="m.396 7.977h4.976v16.023h-4.976z" />
                <path d="m2.882 0c-1.591 0-2.882 1.291-2.882 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909c-.001-1.591-1.292-2.882-2.882-2.882z" />
            </svg>
        </a>
    );
};

export default svgLinkedin;


