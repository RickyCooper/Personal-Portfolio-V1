import React from 'react';
import styles from '../svg.module.scss';

/* eslint-disable max-len */

const svgClose = (props) => {
    return (
        <svg
            onClick={() => props.clicked(false)}
            className={styles.Close}
            width="25"
            height="26"
            viewBox="0 0 25 26"
            fill="#202833"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M22.8511 22.893C21.6643 24.0799 19.74 24.0799 18.5532 22.893L10.9656 15.3054C9.77873 14.1186 9.77873 12.1943 10.9656 11.0074C12.1524 9.82059 14.0767 9.82059 15.2636 11.0074L22.8511 18.595C24.038 19.7819 24.038 21.7061 22.8511 22.893Z"
                fill="#202833"
            />
            <path
                d="M9.2613 9.3034C8.07444 10.4903 6.15017 10.4903 4.96331 9.3034L2.14899 6.48908C0.962138 5.30223 0.962141 3.37795 2.149 2.1911C3.33585 1.00424 5.26012 1.00424 6.44698 2.1911L9.2613 5.00542C10.4482 6.19227 10.4482 8.11654 9.2613 9.3034Z"
                fill="#202833"
            />np
            <path
                d="M22.3832 2.1491C23.5701 3.33596 23.5701 5.26023 22.3832 6.44709L6.44707 22.3832C5.26022 23.5701 3.33595 23.5701 2.14909 22.3832C0.962237 21.1964 0.962236 19.2721 2.14909 18.0853L18.0853 2.1491C19.2721 0.962244 21.1964 0.962247 22.3832 2.1491Z"
                fill="#202833"
            />
        </svg>
    );
};

export default svgClose;
