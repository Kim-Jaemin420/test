import styles from './Split.module.scss';

interface Props {
  split: number;
  errorInfo: number;
  setSplit: (value: number) => void;
  setPageCount: (page: number) => void;
}

function Split({ split, errorInfo, setSplit, setPageCount }: Props) {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value }: { value: string } = e.target;

    setSplit(+value);
  };

  const onSubmit = () => {
    setPageCount(4);
  };

  return (
    <div className="splitwrap">
      <div className={styles.container}>
        <h2>몇 분할로 운동을 원하시나요?</h2>
        <div onChange={onChange}>
          <input type="radio" value="1" name="split" className={styles.radio_button} /> 0분할
          <input type="radio" value="3" name="split" className={styles.radio_button} /> 3분할
          <input type="radio" value="5" name="split" className={styles.radio_button} /> 5분할
        </div>
        {errorInfo && <span className={styles.error_msg}>{errorInfo}</span>}
      </div>
      <button
        className={styles.next__button}
        type="button"
        onClick={onSubmit}
        disabled={errorInfo ? true : false}
      >
        다음
      </button>
    </div>
  );
}

export default Split;
