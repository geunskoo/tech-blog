import React, { useEffect } from 'react';

const Utterances = ({ repo }) => {
  useEffect(() => {
    const script = document.createElement('script');
    const anchor = document.getElementById('utterances-comments');
    script.setAttribute('src', 'https://utteranc.es/client.js');
    script.setAttribute('repo', repo);
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute('theme', 'github-light');
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    anchor.appendChild(script);

    return () => {
      anchor.innerHTML = '';
    };
  }, [repo]); // repo가 변경될 때마다 useEffect 내부 로직을 다시 실행

  return <div id="utterances-comments" />;
};

export default Utterances;
