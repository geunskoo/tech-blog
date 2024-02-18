import React, { useEffect, useRef } from "react";
import "./typing-banner.css"

const Banner = () => {
  const textRef = useRef(null);
  const repeatCount = 25; // 원하는 반복 횟수로 설정
  let currentIteration = 0;

  useEffect(() => {
    const $text = textRef.current;

    // 글자 모음
    const letters = [
      { text: "백엔드 개발자", color: "#074d89" },
      { text: "클린코드 개발자", color: "#289e8e" }
    ];

    // 글자 입력 속도
    const speed = 180;
    let i = 0;

    // 타이핑 효과
    const typing = async () => {
      const { text, color } = letters[i];
      const letter = text.split("");

      while (letter.length) {
        await wait(speed);
        $text.innerHTML += `<span style="color: ${color};">${letter.shift()}</span>`;
      }

      // 잠시 대기
      await wait(1200);

      // 마지막 반복에서는 지우지 않음
      if (currentIteration < repeatCount - 1) {
        remove(color);
      }
    };

    // 글자 지우는 효과
    const remove = async (color) => {
      const letter = letters[i].text.split("");

      while (letter.length) {
        await wait(speed);

        letter.pop();
        $text.innerHTML = `<span style="color: ${color};">${letter.join("")}</span>`;
      }

      // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
      i = !letters[i + 1] ? 0 : i + 1;

      // 원하는 반복 횟수에 도달했는지 확인
      currentIteration++;

      if (currentIteration < repeatCount) {
        typing();
      }
    };

    // 딜레이 기능 (마이크로초)
    function wait(ms) {
      return new Promise((res) => setTimeout(res, ms));
    }

    // 초기 실행
    setTimeout(typing, 1500);

    // 정리 함수
    return () => {
      clearTimeout(typing);
    };
  }, [repeatCount, currentIteration]);

  return (
    <div className="banner-container">
      <h1>
        <span className="banner-title">안녕하세요! </span><span ref={textRef} className="banner-heading"></span><span>김태근입니다.</span>
      </h1>
      <p className="banner-paragraph">현재 Spring과 Angular를 이용하여 웹개발을 하고 있습니다.</p>
      <p className="banner-paragraph">저는 코드 간의 추상화 수준을 고려하여 유지보수에 용이한 코드개발에 관심이 많습니다.</p>
    </div>
  );
};

export default Banner;
