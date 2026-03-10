import Link from 'next/link'
import React from 'react'

function about() {
  return (
    <div>
      <div>this is about pag</div>
      <Link href={`/services`}>services</Link>
    </div>
  )
}

export default about
