import React from 'react'

// localhost:3000/makeup/1
// localhost:3000/makeup/2
// localhost:3000/makeup/3 ...
// 아이디는 params로 찾는다. ?뒤는 searchParams
// http://localhost:3000/makeup/2?name=kim&gender=male = { params: { id: '2' }, searchParams: { name: 'kim', gender: 'male' } }
// const MakeupDetail = (props) => {
//     console.log(props);
//   return (
//     <div> MakeupDetail { props.params.id } </div>
//   )
// }
const MakeupDetail = ({ params }) => {
    const { id } = params;
    console.log( id );
  return (
    <div> MakeupDetail { id } </div>
  )
}

export default MakeupDetail