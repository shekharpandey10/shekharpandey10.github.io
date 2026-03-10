import Link from 'next/link'
import React from 'react'

function Design() {
  return (
    <div>
      <div>this is design page</div>
      <Link href={`/services/design/figma_design`}>figma design</Link>{"  "}
      <Link href={`/services/design/graphic_design`}>graphic design</Link>

    </div>
  )
}

export default Design
