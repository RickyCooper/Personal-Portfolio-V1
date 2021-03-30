import React from 'react';
import SvgBehance from '../../../assets/svg/svgBehance/svgBehance';
import SvgCodepen from '../../../assets/svg/svgCodepen/svgCodepen';
import SvgGitHub from '../../../assets/svg/svgGithub/svgGithub';
import SvgLinkedin from '../../../assets/svg/svgLinkedin/svgLinkedin';
import styles from './social.module.scss';

const Social = (props) => {
    let styleArray = [styles.Social];

    if (props.vertical) {
        styleArray.push(styles.Vertical);
    }

    return (
        <div className={[...styleArray].join(` `)}>
            <ul>
                <SvgCodepen />
                <SvgBehance />
                <SvgGitHub />
                <SvgLinkedin />
            </ul>
        </div>
    );
};

export default Social;
