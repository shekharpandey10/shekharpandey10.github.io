import Link from 'next/link'
import React from 'react'

function dev() {
  return (

    <div>
        <div>this is dev page</div>
      <Link href={`/services/development/app_dev`}>app dev</Link>{"  "}
      <Link href={`/services/development/web_dev`}>web dev</Link>{"  "}
    </div>
  )
}

export default dev
