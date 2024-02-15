---
title: gatsby, netlify 배포 후 css 미적용 문제(2)
date: "2024-02-15T10:00:00"
type: blog
description: 배포 환경에서 F5로 눌러야만 css 적용되는 문제
category: 
  - 블로그 개발
  - gatsby
  - netlify
thumbnail: "./thumbnail.png"
---

### 1. 상황
---
[gatsby, netlify 배포 후 css 미적용 문제(1)➚](https://geunskoo.com/blog-2023-01-15/spharos-academy/)  
위 게시물에서는 배포된 서버가 과거의 css를 계속 유지하고 있는 문제를 다루고 있습니다. 
이번에는 배포 후에 다시 `리프레쉬(F5)`를 해주어야만 `css`가 적용되는 문제를 다뤄보겠습니다.

### 2. 분석
---
배포 환경에서 리프레쉬(F5)를 해주어야만 css가 적용된다는 것은 `초기 로딩 시점`에서 올바르게 css를 찾아오지 못한 가능성이 크다고 볼 수 있습니다.
아래와 같은 상황을 생각해볼 수 있었습니다.
> 1. 올바르지 않은 참조 경로로 지정되어 있는가?
> 2. 참조 경로가 명시적으로 지정되어 있는가?
확인 해본 결과, 저의 경우는 위의 2가지 경우에 모두 해당되는 경우였습니다.

저는 [gatsby-default-starter➚](https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-default)를 이용하여 블로그의 기본적인 구조를 가져오고 커스텀하는 방식으로 블로그를 개발하고 있었습니다.
./src/style.css 에서 모든 컴포넌트의 css가 관리되고 있었고 블로그의 개발 규모가 많이 크지 않을거라 생각하고 그 구조를 그대로 유지했습니다.
일반적으로 Gatsby는 프로젝트의 src 디렉토리에 있는 css 파일을 자동으로 인식하고 사용합니다. 따라서 프로젝트에 css 파일이 있으면 Gatsby가 자동으로 해당 파일을 찾아서 사용하게 됩니다.

그래서 저는 별도로 `Head 태그` 안에 css 파일을 `경로를 명시`해주지 않았습니다. 이것이 문제가 되었습니다.

### 3. 해결
---
gatsby 블로그를 이용하시는 분들은 거의 모든 분께서 [Gatsby Starter Library➚](https://www.gatsbyjs.com/starters/)에서 starter를 이용해서 프로젝트를 생성하실겁니다. 비슷한 상황이시라면 Head 태그는 대부분 아래와 같은 모습으로 생성이 되고 있을 겁니다.  

```js:title=book.js
export const Head = () => <Seo title="Book" />
```
(당연히 상이할수 있습니다.)
만약 페이지.js에서 위와 같이 헤더를 주고 있다면 seo.js에 들어가서 명시적으로 css 파일 경로를 지정하면 문제가 해결됩니다.

```js:title=seo.js
import * as React from "react"

const Seo = ({ title }) => {

  // ... seo 로직

  return (
    <>
      <title>제목 ~~ </title>
      //highlight-start
      <link rel="stylesheet" href="./src/style.css"></link> 
      //highlight-end
      ..
      ..
    </>
  )
}

export default Seo
```
<br>
다음과 같이 명시적으로 올바른 css 경로를 지정해준다면 배포 환경에서 초기 로딩 시점에 올바르게 css를 가져오는 모습을 확인 할 수 있습니다.   

감사합니다.  
<br>
