import React from 'react';
import setting from '../../../public/assets/svgIcon/setting.svg';
// import {} from './index.scss';

function FitnessRoutine(): JSX.Element {
  return (
    <section>
      <h2 className="a11yhidden">헬스 루틴</h2>
      <div>
        <em>nickname님 아주 잘하고 있어요!💪</em>
        <nav>
          <button type="button">
            <img src={setting} alt="" />
          </button>
        </nav>
        <ol />
      </div>
    </section>
  );
}

export default FitnessRoutine;
