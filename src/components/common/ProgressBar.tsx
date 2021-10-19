import React, { useState, useEffect } from 'react';
import styles from './ProgressBar.module.scss';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function ProgressBar({ percent }: { percent: number }): JSX.Element {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(percent * 300);
  }, [percent]);

  return (
    <div className={cx('wrapper')}>
      <div style={{ width: `${value}px` }} className={cx('progress')} />
      <span className={cx('step')}>
        <span className={cx('current__step')}>{percent * 5}</span> / 5 step
      </span>
    </div>
  );
}

export default ProgressBar;
