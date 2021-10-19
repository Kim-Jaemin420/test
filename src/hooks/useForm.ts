import { useState, useEffect } from 'react';

interface SurveyState {
  nickname: string;
  gender: string;
  age: number;
  height: number;
  weight: number;
  split: number;
}

interface Props {
  initialState: SurveyState;
  validate: (value: SurveyState) => void;
}

const useForm = ({ initialState, validate }: Props) => {
  const [errors, setErrors] = useState<any>({});
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [surveyState, setSurveyState] = useState<SurveyState>(initialState);

  useEffect(() => {
    const newError = validate(surveyState);
    setErrors(newError);
  }, [surveyState, validate]);

  const setState = (key: string) => (value: string | number) => {
    setSurveyState(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const setPageCount = (newPageCount: number) => {
    setCurrentPage(newPageCount);
  };

  return {
    errors,
    currentPage,
    surveyState,
    setState,
    setPageCount,
  };
};

export default useForm;
