import cx from '@/lib/classnames';
import React from 'react';
import styles from './index.module.css';

interface IProps {
  summary: string;
}

const AboutMeSummary: React.FC<IProps> = ({ summary }) => {
  return (
    <div
      className={cx(styles.summary, 'max-w-5xl mx-auto px-5 text-justify')}
      dangerouslySetInnerHTML={{ __html: summary }}
    ></div>
  );
};

export default AboutMeSummary;
