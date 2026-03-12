import Link from 'next/link'
import React from 'react'
export const metadata={
  title:'Services'
}
function services() {
  return (
    <div>
     <div> this is services page</div>
     <Link href={`/services/design`}>design</Link>{"  "}
     <Link href={`/services/development`}>development</Link>{"  "}
    </div>
  )
}

export default services
