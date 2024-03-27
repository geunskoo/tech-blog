import React, { useState, useEffect } from 'react';
import Spinner from '../common-component/spinner/spinner';

const Utterances = ({ repo }) => {

  const [isLoading, setIsLoading] = useState(true); // 로딩 상태 초기화

  useEffect(() => {
    const script = document.createElement('script');
    const anchor = document.getElementById('utterances-comments');
    script.src = 'https://utteranc.es/client.js';
    script.setAttribute('repo', repo);
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute('theme', 'github-light');
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    script.onload = () => {
      setTimeout(() => setIsLoading(false), 1000);
    };

    anchor.appendChild(script);

    return () => {
      anchor.innerHTML = ''; // 컴포넌트 언마운트 시 스크립트 제거
    };
  }, [repo]);

  return <div id="utterances-comments">
    {isLoading && <Spinner/>}  
  </div>;
};

export default Utterances;
