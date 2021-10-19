import { useState } from 'react';
import styles from './Age.module.scss';

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
  // onChange

  const nickRegex = /^[ㄱ-ㅎ|가-힣\s|a-z|A-Z|0-9|_|.|,]+$/g;
  const [error, setError] = useState<boolean | string>(!!!nickname);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value }: { value: string } = e.target;
    setNickname(value); // setState

    if (!nickRegex.test(value)) {
      setError('한글, 영어, 숫자, 특수문자(_.,)만 가능해요');
    } else {
      setError('');
    }
  };
  // onSubmit
  const onSubmit = () => {
    setPageCount(1);
  };

  return (
    <div className="usernamewrap">
      <div className={styles.container}>
        <h2>당신을 뭐라고 불러드릴까요?</h2>
        <input type="text" placeholder="닉네임 입력" value={nickname} onChange={onChange} />
        {error && <span className={styles.error_msg}>{error}</span>}
        <button className={styles.next__button} type="button" onClick={onSubmit} disabled={!!error}>
          다음
        </button>
      </div>
    </div>
  );
}

export default Nickname;
