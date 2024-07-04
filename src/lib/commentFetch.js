export const getComments = async () => { // fetch할 용도 // fetch 하는데는 시간이 걸리기에 async 사용
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const comments = await res.json();

    return comments;
}

export const getComment = async (id) => { // 아이디를 입력해서 데이터 하나만 가져온다.
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const comment = await res.json();

    return comment;
}