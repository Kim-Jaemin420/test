import { useState } from 'react';
import styles from './Age.module.scss';
import ProgressBar from '../common/ProgressBar';
import { Input } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

// interface Props {
//   nickname: string;
//   setNickname: (value: string) => void;
//   setPageCount: (page: number) => void;
// }

// function Nickname({ nickname, setNickname, setPageCount }: Props) {
//   const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
//     const { value }: { value: string } = e.target;

//     setNickname(value);
//   };

//   const onSubmit = () => {
//     setPageCount(1);
//   };

//   return (
//     <div className="usernamewrap">
//       <div className={styles.container}>
//         <h2>당신을 뭐라고 불러드릴까요?</h2>
//         <input type="text" placeholder="닉네임 입력" value={nickname} onChange={onChange} />
//         <button className="next__button" type="button" onClick={onSubmit}>
//           다음
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Nickname;

interface Props {
  nickname: string;
  setNickname: (value: string) => void;
  setPageCount: (page: number) => void;
}

function Nickname({ nickname, setNickname, setPageCount }: Props) {
  const nickRegex = /^[가-힣\s|ㄱ-ㅎ|a-z|A-Z|0-9|_|.|,]+$/g;
  const nickLengthRegex = /^.{2,8}$/g;
  const [error, setError] = useState<boolean | string>(!nickname);
  console.log(error);

  // onChange
  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value }: { value: string } = e.target;
    setNickname(value); // setState

    if (!nickRegex.test(value)) {
      setError('한글, 영어, 숫자, 특수문자(_.,)만 가능해요');
    } else if (!nickLengthRegex.test(value)) {
      setError('2 ~ 8글자만 가능해요');
    } else {
      setError(false);
    }
  };
  // onSubmit
  const onSubmit = () => {
    setPageCount(1);
  };

  return (
    <div className="usernamewrap">
      <ProgressBar percent={1 / 5} />
      <div className={styles.container}>
        <h2>당신을 뭐라고 불러드릴까요?</h2>
        <input type="text" placeholder="닉네임 입력" value={nickname} onChange={onChange} />

        {/* {typeof error === 'string' && (
          <div className={styles.error__icon}>
            <ErrorOutlineIcon />
          </div>
        )} */}
        {error && <span className={styles.error_msg}>{error}</span>}
        <button className={styles.next__button} type="button" onClick={onSubmit} disabled={!!error}>
          다음
        </button>
      </div>
    </div>
  );
}

export default Nickname;
