import React from 'react'

async function filepath({params,searchParams}) {
    const {filepath}=await params;
    const q=await searchParams
    console.log(filepath)
    console.log(q)
  return (
    <div>
      file /{filepath.join('/')} 
    </div>
  )
}

export default filepath
