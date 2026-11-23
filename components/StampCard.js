'use client';

import { useState } from 'react';

const goal = 10;

export default function StampCard() {
  const [stamps, setStamps] = useState([]);
  const complete = stamps.length === goal;

  function addStamp() {
    setStamps((previous) => previous.length < goal
      ? [...previous, previous.length + 1]
      : previous);
  }

  return (
    <section id="stamps" className="stamp" aria-labelledby="stamp-title">
      <h2 id="stamp-title">스탬프 쿠폰</h2>
      <p role="status">
        {stamps.length}/{goal}개 · {complete
          ? '쿠폰을 완성했어요!'
          : stamps.length === 0 ? '아직 스탬프가 없습니다.' : `${goal - stamps.length}개 더 모으면 쿠폰 완성!`}
      </p>
      <div className="stamp-slots" aria-hidden="true">
        {Array.from({ length: goal }, (_, index) => (
          <span key={index} className={index < stamps.length ? 'filled' : ''}>
            {index < stamps.length ? '☾' : index + 1}
          </span>
        ))}
      </div>
      <div className="actions">
        <button className="order" disabled={complete} onClick={addStamp}>스탬프 찍기</button>
        <button disabled={stamps.length === 0} onClick={() => setStamps((previous) => previous.slice(0, -1))}>하나 취소</button>
        <button disabled={stamps.length === 0} onClick={() => setStamps([])}>초기화</button>
      </div>
    </section>
  );
}
