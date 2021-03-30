import React from 'react';
import styles from './sectionWrap.module.scss';

/* eslint-disable max-len */

const SectionWrap = (props) => {

    let styleArray = [styles.SectionWrap];

    if (props.Secondary) {
        styleArray.push(styles.Secondary);
    } 

    return <div className={[...styleArray].join(` `)}>{props.children}</div>;
};

export default SectionWrap;
