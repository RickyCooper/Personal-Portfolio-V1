import React from 'react';
import SvgLogo from '../../../assets/svg/svgLogo/svgLogo';
import styles from './navigation.module.scss';

const Navigation = () => {
    return (
        <div className={styles.Navigation}>
            <ul>
                <SvgLogo active />
                <a href="#work">WORK</a>
                <a href="#about">ABOUT</a>
                <a href="#contact">CONTACT</a>
            </ul>
        </div>
    );
};

export default Navigation;
