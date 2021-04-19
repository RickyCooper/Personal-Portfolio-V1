import React from 'react';
import styles from './svgLogo.module.scss';

/* eslint-disable max-len */

const svgLogo = (props) => {
    let styleArray = [styles.Logo];

    if (props.active) {
        styleArray.push(styles.Active);
    }

    return (
        <svg
            className={[...styleArray].join(` `)}
            viewBox="0 0 49 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            alt="Ricky Cooper logo"
            aria-label="Ricky Cooper logo"
        >
            <rect
                x="1.5"
                y="1.5"
                width="46"
                height="44"
                stroke="white"
                strokeWidth="3"
            />
            <path
                d="M26.7976 12H17V35H32L27.1244 25.216C30.2751 25.216 32.5026 22.3702 32.5026 18.6806C32.5026 14.991 29.9484 12 26.7976 12Z"
                fill="white"
            />
        </svg>
    );
};

export default svgLogo;
