import React from 'react'

async function page({params}) {

const {comment}=await params;
  return (
    <div>
      comment is this { comment}
    </div>
  )
}

export default page
