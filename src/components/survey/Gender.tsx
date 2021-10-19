import styles from './Gender.module.scss';
import ProgressBar from '../common/ProgressBar';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface Props {
  nickname: string;
  gender: string;
  setGender: (value: string) => void;
  setPageCount: (page: number) => void;
}

function Gender({ nickname, gender, setGender, setPageCount }: Props): JSX.Element {
  const onSubmit = () => {
    setPageCount(2);
  };

  const handleClick = (gender: string) => () => {
    setGender(gender);
  };

  return (
    <div>
      <ProgressBar percent={2 / 5} />
      <div className={cx('container')}>
        <h2 className={cx('title')}>
          {nickname}님의 <span>성별</span>은 무엇인가요?
        </h2>
        <div>
          <button
            className={cx('gender__button')}
            autoFocus={gender === 'male'}
            onClick={handleClick('male')}
          >
            남성
          </button>
          <button
            className={cx('gender__button')}
            autoFocus={gender === 'female'}
            onClick={handleClick('female')}
          >
            여성
          </button>
        </div>
        <button className={cx('next__button')} type="button" onClick={onSubmit} disabled={!gender}>
          다음
        </button>
      </div>
    </div>
  );
}

export default Gender;
