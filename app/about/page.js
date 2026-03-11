import Link from 'next/link'
import React from 'react'
export const metadata={
  title:'About'
}

function about() {
  return (
    <div>
      <div>this is about pag</div>
      <Link href={`/services`}>services</Link>
    </div>
  )
}

export default about
