localhost:3000/comments
localhost:3000/comments/1
localhost:3000/comments/2
localhost:3000/comments/3
localhost:3000/comments/[id] = O
localhost:3000/comments/[id]/sub/[] = X

- /src/app/comments/page.js
- /src/app/comments/loading.js
- /src/app/comments/[id]/page.js
- /src/app/comments/[id]/loading.js
- /src/lib/commentsFetch.js


# 기본
API 사용한다면
- /src/app/api/comments/page.js
- /src/app/api/comments/loading.js
- /src/app/api/comments/[id]/page.js
- /src/app/api/comments/[id]/loading.js

# 임시
- localhost:3000/api/comments/route.js
localhost:3000/api/comments/1
localhost:3000/api/comments/2
localhost:3000/api/comments/3
localhost:3000/api/comments/[id] = O
localhost:3000/api/comments/[id]/sub/[] = X