import React from 'react'

async function page(params) {
    // console.log('params', await params)
    // console.log('searchParams',await searchParams)
    console.log('params', params)
  return (
    <div>
      this is blog no {(await params).slug}
    </div>
  )
}

export default page
