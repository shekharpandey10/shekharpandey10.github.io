'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation';



function about() {
    const router = useRouter();
  const pathname = usePathname();
  return (
    <div>
      <div>this is about pag</div>
      <Link href={`/services`} >services</Link>
      <br />
      <button onClick={()=>router.push(`${pathname}/blog`)} >blog</button>
    </div>
  )
}

export default about
