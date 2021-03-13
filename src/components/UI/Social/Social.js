import React from 'react';
import SvgCodepen from '../../../assets/svg/svgCodepen/svgCodepen';
import SvgBehance from '../../../assets/svg/svgBehance/svgBehance';
import SvgGitHub from '../../../assets/svg/svgGithub/svgGithub';
import SvgLinkedin from '../../../assets/svg/svgLinkedin/svgLinkedin';
import styles from './social.module.scss';

const Social = () => {

    return (
        <div className={styles.Social}>
            <ul>
                <SvgCodepen/>
                <SvgBehance/>
                <SvgGitHub/>
                <SvgLinkedin/>
            </ul>
        </div>
    )
}

export default Social