import React from 'react';
import SvgLogo from '../../../assets/svg/svgLogo/svgLogo';
import styles from './navigation.module.scss';

const Navigation = () => {
    return (
        <div className={styles.Navigation}>
            <ul>
                <li>
                    <SvgLogo active />{` `}
                </li>
                <li>
                    <a href="#work">WORK</a>{` `}
                </li>
                <li>
                    <a href="#about">ABOUT</a>{` `}
                </li>
                <li>
                    <a href="#contact">CONTACT</a>{` `}
                </li>
            </ul>
        </div>
    );
};

export default Navigation;
