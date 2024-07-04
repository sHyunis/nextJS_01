"use client" // 이것을 쓰는 이상 상호작용을 할 것이라 클라이언트 컴포넌트로써 작용

import React, { useState } from 'react'
import NavItem from './NavItem'
import styles from './Navbar.module.css'

// 첫 번째 방법: react 타입
// const Navbar = () => {
//     const navBars = [
//         {
//             pathName: "Home",
//             path: "/"
//         },
//         {
//             pathName: "Makeup",
//             path: "/makeup"
//         },
//         {
//             pathName: "About",
//             path: "/about"
//         },
//         {
//             pathName: "Profile",
//             path: "/profile"
//         }
//     ]
//     const [ num, setNum ] = useState(0);
//   return (
//     <nav>
//         <ul className={styles.nav_container}>
//             {
//                 navBars.map((nav, index) => 
//                     <NavItem key={nav.pathName} 
//                              nav={nav} 
//                              num={num} 
//                              setNum={setNum}
//                              index={index} 
//                     />
//                 )
//             }
//         </ul>
//     </nav>
//   )
// }

// 두 번째 방법
const Navbar = () => {
    const navBars = [
        {
            pathName: "Home",
            path: "/"
        },
        {
            pathName: "Makeup",
            path: "/makeup"
        },
        {
            pathName: "Comments",
            path: "/comments"
        },
        {
            pathName: "About",
            path: "/about"
        },
        {
            pathName: "Profile",
            path: "/profile"
        }
    ]
    const [ num, setNum ] = useState(0);
  return (
    <nav>
        <ul className={styles.nav_container}>
            {
                navBars.map((nav) => 
                    <NavItem key={nav.pathName} nav={nav} />
                )
            }
        </ul>
    </nav>
  )
}

export default Navbar