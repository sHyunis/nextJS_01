'use client' // 컴포넌트화 // 한번 클라이언트화 하면 그 안에 있는 것은 자동으로 클라이언트 컴포넌트로 바뀐다.
// client side rendering
// 브라우저에서 javascript를 실행한다.
// 때문에 디버그 모드에서 javascript disable 하면 작동되지 않는다.

// 현대의 컴퓨터가 빨라졌기에 개인 컴퓨터에서 작업해도 무리가 없어졌기 때문이다.
// SEO : 처리가 나쁜 단점이 있다. // 검색어의 검색대상이 안된다. (태그속 내용이 비어 있기 때문)


import React, { useState, useEffect } from 'react'
// import makeup from '../model/products.json'

// localhost:3000/makeup/:id
// localhost:3000/makeup/1
// localhost:3000/makeup/2
// 다이나믹 라우트(아이디): [id] 폴더 만들기
// html, css, javascript // 브라우저에서 하기에 빌드시점이 느리다.

// client는 meta 사용 불가
// export const metadata = {
//   title : 'makeup'
// }

// children
// src/app/makeup/page.js
const Makeup = () => {
  const [makeup, setMakeup] = useState([]);

  const getData = () => {
    fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
    .then(res => res.json())
    .then(res => { 
        setMakeup(res);
        console.log(makeup.length);
    });
  }

useEffect(() => {
  getData();
}, []);

  return (
    <div>
          {
            makeup.map((item) => (
              <p key={item.id}>{item.id}: {item.name}</p>
            ))
          }
    </div>
  )
}

export default Makeup