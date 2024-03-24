import React from 'react';
import "./block-log.css";

const BlockLog = () => {
  return (
    <div style={{ position: 'relative', marginRight:"3rem" }}> {/* 상대적 포지셔닝 컨텍스트 제공 */}
      {[...Array(3).keys()].map((index) => (
        <div
          key={index}
          className="block"
          style={{
            animationDelay: `${index * 1.25}s`, // 2초에서 1초로 변경
          }}
        >&nbsp;❯_ Hello World; </div>
      ))}
    </div>
  );
};

export default BlockLog;
