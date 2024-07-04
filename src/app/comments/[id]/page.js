// 'use server'
// 명시적으로 서버 페이지임을 확정

import React from 'react'
import { getComment } from '@/lib/commentFetch';

// const getComment = async (id) => { // 아이디를 입력해서 데이터 하나만 가져온다.
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//     const comment = await res.json();

//     return comment;
// }

// 삭제
const deleteComment = async (id) => { 
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
      method : 'DELETE'
    });
    
    return 'DELETED';
}

// 수정
const updateComment = async (id) => { 
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
      method : 'PUT',
      // body : FormData
    });
    
    return 'PUT';
}


// ☆이렇게 만들면 코드 동작이 가능해진다.
// const getMetaData = async ( { params } ) => {
//     const { id } = params;
//     return {
//         title : id + 'comment',
//         description : 'comments description',
//         keyword : ['next', 'react', 'javascript', 'use server']
//     }
// }

// export const metadata = await getMetaData();


// src/app/comments/[id]/page.js
const CommentPage = async ({ params }) => {
    await new Promise(resolve => setTimeout(resolve, 5000));
    // 5초 지연 

    const { id } = params; // params 에서 자동으로 id를 꺼내오게 되어있다.

    const comment = await getComment(id);
  return (
    <div>
        <h2>{ comment.id }</h2>
        <h2>{ comment.title }</h2>
        <h2>{ comment.body }</h2>
        {/* <button onClick={ () => deleteComment(comment.id) }>delete</button> */}
    </div>
  )
}

export default CommentPage