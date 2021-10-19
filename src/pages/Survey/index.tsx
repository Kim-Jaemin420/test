// import React, { Fragment, useState } from 'react';
// import { Age, Gender, Nickname, BodyInfo, Split } from '../../components';

// interface SurveyState {
//   nickname: string;
//   gender: string;
//   age: number;
//   height: number;
//   weight: number;
//   split: number;
// }

// const SURVEY_STATE_KEY = {
//   NICKNAME: 'nickname',
//   AGE: 'age',
//   GENDER: 'gender',
//   HEIGHT: 'height',
//   WEIGHT: 'weight',
//   SPLIT: 'split',
// };

// function Survey(): any {
//   const initState = {
//     nickname: '',
//     gender: '',
//     age: 0,
//     height: 0,
//     weight: 0,
//     split: 0,
//   };

//   const [currentPage, setCurrentPage] = useState<number>(0);
//   const [surveyState, setSurveyState] = useState<SurveyState>(initState);
//   const setState = (key: string) => (value: string | number) => {
//     setSurveyState(prev => ({
//       ...prev,
//       [key]: value,
//     }));
//   };

//   const setPageCount = (newPageCount: number) => {
//     setCurrentPage(newPageCount);
//   };

//   const components = [
//     <Nickname
//       nickname={surveyState.nickname}
//       setNickname={setState(SURVEY_STATE_KEY.NICKNAME)}
//       setPageCount={setPageCount}
//     />,
//     <Gender
//       nickname={surveyState.nickname}
//       gender={surveyState.gender}
//       setGender={setState(SURVEY_STATE_KEY.GENDER)}
//       setPageCount={setPageCount}
//     />,
//     <Age
//       age={surveyState.age}
//       setAge={setState(SURVEY_STATE_KEY.AGE)}
//       setPageCount={setPageCount}
//     />,
//     <BodyInfo
//       weight={surveyState.weight}
//       height={surveyState.height}
//       setHeight={setState(SURVEY_STATE_KEY.HEIGHT)}
//       setWeight={setState(SURVEY_STATE_KEY.WEIGHT)}
//       setPageCount={setPageCount}
//     />,
//     <Split />,
//   ];

//   return components.map((component, index) => {
//     if (currentPage === index) return <Fragment key={`survey_page_${index}`}>{component}</Fragment>;
//   });
// }

// export default Survey;

import styles from './index.module.scss';
import { Fragment } from 'react';
import { Age, Gender, Nickname, BodyInfo, Split } from '../../components/survey';
import useForm from '../../hooks/useForm';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface SurveyState {
  nickname: string;
  gender: string;
  age: number;
  height: number;
  weight: number;
  split: number;
}

const SURVEY_STATE_KEY = {
  NICKNAME: 'nickname',
  AGE: 'age',
  GENDER: 'gender',
  HEIGHT: 'height',
  WEIGHT: 'weight',
  SPLIT: 'split',
};

function Survey(): any {
  const initialState = {
    nickname: '',
    gender: '',
    age: 0,
    height: 0,
    weight: 0,
    split: 0,
  };

  const { errors, currentPage, surveyState, setState, setPageCount } = useForm({
    initialState,
    validate: ({ nickname, gender, age, height, weight, split }: SurveyState) => {
      const newErros = {} as any;

      if (isNaN(age)) {
        newErros.age = '나이에는 숫자만 입력할 수 있습니다';
      }

      if (age > 1000) {
        newErros.age = '나이에는 숫자만 입력할수 있습니다';
      }

      if (nickname === '') newErros.nickname = '닉네임을 입력해 주세요';
      if (!gender) newErros.gender = '성별을 선택해 주세요';

      if (!height) newErros.height = '키를 입력해 주세요';
      if (!weight) newErros.weight = '몸무게를 입력해 주세요';
      if (!split) newErros.split = '분할을 선택해 주세요';

      return newErros;
    },
  });

  const components = [
    <Nickname
      nickname={surveyState.nickname}
      setNickname={setState(SURVEY_STATE_KEY.NICKNAME)}
      setPageCount={setPageCount}
    />,
    <Gender
      nickname={surveyState.nickname}
      gender={surveyState.gender}
      setGender={setState(SURVEY_STATE_KEY.GENDER)}
      setPageCount={setPageCount}
    />,
    <Age
      age={surveyState.age}
      // nickname={surveyState.nickname}
      // errorInfo={errors.age}
      setAge={setState(SURVEY_STATE_KEY.AGE)}
      setPageCount={setPageCount}
    />,
    <BodyInfo
      // nickname={surveyState.nickname}
      weight={surveyState.weight}
      // weightErrorInfo={errors.weight}
      height={surveyState.height}
      // heightErrorInfo={errors.height}
      setHeight={setState(SURVEY_STATE_KEY.HEIGHT)}
      setWeight={setState(SURVEY_STATE_KEY.WEIGHT)}
      setPageCount={setPageCount}
    />,
    <Split
      split={surveyState.split}
      errorInfo={errors.split}
      setSplit={setState(SURVEY_STATE_KEY.SPLIT)}
      setPageCount={setPageCount}
    />,
  ];

  return components.map((component, page) => {
    if (currentPage === page) {
      return (
        <div className={styles.container} key={`component-${page}`}>
          <header className={styles.header}>
            <button
              className={styles.previous__button}
              onClick={() => setPageCount(currentPage - 1)}
            >
              <ArrowBackIcon />
            </button>
          </header>
          <Fragment>{component}</Fragment>
        </div>
      );
    }
  });
}

export default Survey;
