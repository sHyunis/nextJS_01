// server side rendering

import React from 'react'

// src/app/makeup/layout.js

export const metadata = {
    title : 'makeup'
}

// children
// src/app/makeup/page.js
const Layout = ( { children } ) => {
  return (
    <div>{children}</div>
  )
}

export default Layout