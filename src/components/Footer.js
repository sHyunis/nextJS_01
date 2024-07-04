"use client" // 이 서버 클라이언트를 클라이언트로 사용하겠다는 의미
// ui에서 상호작용이 있어야 하는 친구들이 있다면 사용.

import React from 'react'

const Footer = () => {
    const today = new Date();
  return (
    <footer>{ today.toDateString() }</footer>
    // <footer>{ new Date().toISOString() }</footer>
  )
}

export default Footer