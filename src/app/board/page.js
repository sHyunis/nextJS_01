// 'use server' // server 페이지는 디폴트다 ( 명시하지 않아도 된다 )
// SSR : server side rendering
// javascript 실행이 서버에서 실행된다.
// html 페이지를 제작해서 전송했으므로 브라우저는 할일이 없음 => 엄청 빨리 처리됨
// 검색 대상이 된다.

import Link from 'next/link';
import React from 'react'

// html이 이미 번역이 완료 되어서 브라우저에 전달된다. // 빌드시점이 빠르다.
// ssr 에서만 사용 가능
export const metadata = { // 검색어의 대상이 되도록 만들어 놓은 것
    title : 'board',
    description : 'board description',
    keyword : ['next', 'react', 'javascript', 'use server']
}


const getComments = async () => { // fetch할 용도 // fetch 하는데는 시간이 걸리기에 async 사용
    const res = await fetch('http://localhost:3000/board/api');
    // const res = await fetch('/board/api');
    const datas = await res.json();

    return datas;
}
const deleteComments = async () => { // fetch할 용도 // fetch 하는데는 시간이 걸리기에 async 사용
    const res = await fetch('http://localhost:3000/board/api', {
        method : 'DELETE'
    });
    const datas = await res.json();
    
    return datas;
}


//localhost:3000/comments // 폴더 기준으로 라우트가 나뉜다.
const Board = async () => {

    // await new Promise(resolve => setTimeout(resolve, 5000));
    // 5초 지연 

    const comments = await getComments();

  return (
    <div>
        <h1> Board </h1>
        {
            comments
        }

        {/* <Link href={}> </Link> */}
    </div>
  )
}

export default Board