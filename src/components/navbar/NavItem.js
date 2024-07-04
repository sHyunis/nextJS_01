import Link from 'next/link' //next/link라는 곳에서 가져온다. react-router-dom 이 아니다. 기능도 다름
import React from 'react'
import styles from './Navbar.module.css'
import { usePathname } from 'next/navigation'

// 첫 번째 방법
// const NavItem = ({nav, num, setNum, index}) => {
//   return (
//     <li key={nav.pathName}>
//         <Link href={nav.path}
//               onClick={() => setNum(index)}
//               className={ num === index ? styles.active : null }
//         >
//             {nav.pathName}
//         </Link>
//     </li>
//   )
// }

// 두 번째 방법
const NavItem = ({ nav }) => {
  // useNavigate, useLocation(현재 라우트에 대한 정보)
  const pathName = usePathname();
  console.log( pathName );
  // makeup, about, profile 서로 비교
  return (
    <li key={nav.pathName}>
        <Link href={nav.path}
              // className={ pathName === nav.path && styles.active } // 참이면 active 넣기
              className={ pathName === nav.path ? styles.active : undefined } // className에는 boolean방식을 사용하는것을 권장하지 않는다.
        >
            {nav.pathName}
        </Link>
    </li>
  )
}

export default NavItem