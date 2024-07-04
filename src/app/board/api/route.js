// node 단의 express 서버단 만듬
// localhost:3000/board/api/
export function GET() { //메서드 이름은 반드시 대문자
    // return new Response('res GET'); // new 도 가능하지만
    return Response.json('res GET'); // 없이 해도 된다.
    // return Response.json(30);
    // 다만 GET과 Response는 대문자를 꼭 사용해야한다.
}
export function POST() { //메서드 이름은 반드시 대문자
    return Response.json('req POST');
}
export function DELETE() { //메서드 이름은 반드시 대문자
    return Response.json('req DELETE');
}
export function PUT() { //메서드 이름은 반드시 대문자
    return Response.json('req PUT');
}