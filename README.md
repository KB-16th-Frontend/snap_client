# $nap (스냅)

IT's Your Life 6기 - 프론트엔드 스켈레톤 프로젝트입니다.

스냅 : 당신의 하루, 오늘의 시세로 보여줄게요.

해당 프로젝트는 가계부에 시세 차트를 추가하여, 오늘의 소비의 가치가 우리의 하루에 어떤 가치를 가져다 주었는지 평가할 수 있는 애플리케이션 웹입니다.

`Vue.js`를 이용하여 구현하였습니다.

## 기본 실행 방법

(1) 깃 클론 실행

    $ git clone "repository 주소"

(2) 깃 클론 이후 패치 실행

    $ git fetch

- 기본 코드 작성 브랜치 : develop (자유롭게 브랜치 사용하셔도 됩니다.)
- master branch : main

코드를 푸시하기 전, PR을 반드시 거쳐주세요~! 코드 리뷰는 서로 성장하는데 큰 도움이 됩니다. 😆

(3) 모듈 다운로드

    $ npm i

(4) Vue.js 실행

    $ npm run dev

## 디렉토리 구조

```
📦src
 ┣ 📂api
 ┃ ┣ 📜common.js
 ┃ ┗ 📜sample.js
 ┣ 📂assets (전역 스타일링 및 글꼴, 이미지)
 ┃ ┣ 📜base.css
 ┃ ┣ 📜logo.svg
 ┃ ┗ 📜main.css
 ┣ 📂common (전역 변수 및 타입 설정 위치)
 ┃ ┗ 📜constants.js (전역 변수)
 ┣ 📂components (컴포넌트 구성)
 ┃ ┣ 📂common
 ┃ ┃ ┗ 📜BaseButton.vue
 ┃ ┗ 📂layouts
 ┃ ┃ ┣ 📜CommonBody.vue
 ┃ ┃ ┣ 📜CommonFooter.vue
 ┃ ┃ ┗ 📜CommonHeader.vue
 ┣ 📂pages (페이지 컴포넌트)
 ┃ ┗ 📜HomePage.vue
 ┣ 📂router (라우터)
 ┃ ┗ 📜index.js
 ┣ 📂utils (각종 함수 모음)
 ┃ ┗ 📜common.js
 ┣ 📜App.vue
 ┗ 📜main.js
```

도메인 별로 컴포넌트를 구성할 예정입니다.

##

## 기여자

- [Wha1eSon(손영호)](https://github.com/wherewhale)
