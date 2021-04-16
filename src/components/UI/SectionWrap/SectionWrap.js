import React from 'react';
import landingStyle from '../../Landing/landing.module.scss';
import styles from './sectionWrap.module.scss';

/* eslint-disable max-len */

const SectionWrap = (props) => {
    let styleArray = [styles.SectionWrap];

    if (props.classStyle) {
        styleArray.push(props.classStyle[props.className]);
    }

    return (
        <div className={[...styleArray].join(` `)} id={props.id}>
            {props.children}
        </div>
    );
};

export default SectionWrap;
