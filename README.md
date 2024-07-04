
localhost:3000/
localhost:3000/about 메뉴가 생긴 것임
localhost:3000/makeup 메뉴가 생긴 것임
localhost:3000/profile 메뉴가 생긴 것임

# app router
1. 메뉴로 폴더명 만들기
규칙: -, _ 외의 특수문자 불가
공백 주의, 대소문자 주의

2. 파일명은 반드시 page.js/route.js
3. 공통 컴포넌트: React의 컴포넌트처럼 만들기
4. 확장자: js, jsx, ts, tsx

# next 는 페이지가 두개로 구성(front)
SSR(server side rendering): server에서 번역해서 브라우저에게 넘겨주는 페이지 -> 서버가 완성된 페이지를 던져주는 것(node가 view단에 있는 html을 던져주는것)
CSR(client side rendering): client에서 번역해서 브라우저에게 넘겨주는 페이지 -> 리액트

아무것도 앞에 안붙으면 서버가 넘겨주는 SSR

"use client" 가 앞에 붙은 애들이 CSR

SSR는 빨리 처리된다.
CSR는 느리게 처리된다.
다만 클라이언트 측에서 상호작용이 필요한 곳에서 사용.

# npm run dev로 실행

# Next.js 스페셜 파일(용도가 정해진 파일)
/src/app/폴더
- page.js // 컴포넌트명(폴더명의 첫글자 대문자)
- layout.js // 똑같은 역할 // 공통적인 디자인이 필요 할 때
- template.js
- not-found.js // 404처리
- loading.js // 로딩 처리
- error.js // 에러 처리
- route.js


