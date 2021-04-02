import React from 'react';
import styles from '../svg.module.scss';

/* eslint-disable max-len */

const svgGithub = () => {

    let styleArray = [styles.SocialSvgStyling, styles.Github, styles.SizingFooter];

    return (
        <a
            className={[...styleArray].join(` `)}
            href="https://github.com/RickyCooper"
            target="_blank"
            rel="noopener noreferrer"
        >
            <svg
                height="45"
                viewBox="3 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M16.875 35.6251C7.5 38.4376 7.5 30.9376 3.75 30.0001M30 41.2501V33.9938C30.0703 33.0997 29.9495 32.2009 29.6457 31.3572C29.3418 30.5134 28.8617 29.744 28.2375 29.1001C34.125 28.4438 40.3125 26.2126 40.3125 15.9751C40.312 13.3572 39.305 10.8398 37.5 8.94382C38.3547 6.65352 38.2943 4.12197 37.3313 1.87507C37.3313 1.87507 35.1188 1.21882 30 4.65007C25.7025 3.48536 21.1725 3.48536 16.875 4.65007C11.7563 1.21882 9.54375 1.87507 9.54375 1.87507C8.58071 4.12197 8.52027 6.65352 9.375 8.94382C7.55649 10.8539 6.54848 13.3941 6.5625 16.0313C6.5625 26.1938 12.75 28.4251 18.6375 29.1563C18.0206 29.7938 17.5449 30.5539 17.2412 31.3874C16.9375 32.2209 16.8128 33.1089 16.875 33.9938V41.2501"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </a>
    );
};

export default svgGithub;
