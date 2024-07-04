// node 단의 express 서버단 만듬
// localhost:3000/board/[id]/api
// localhost:3000/board/1/api
// localhost:3000/board/2/api

export function GET(request, { params }) { //메서드 이름은 반드시 대문자
    const { id } = params;
    return Response.json(id);
}
export function POST(request) { //메서드 이름은 반드시 대문자
    return Response.json('req POST');
}
export function DELETE(request, { params }) { //메서드 이름은 반드시 대문자
    return Response.json('req DELETE');
}
export function PUT(request, { params }) { //메서드 이름은 반드시 대문자
    return Response.json('req PUT');
}