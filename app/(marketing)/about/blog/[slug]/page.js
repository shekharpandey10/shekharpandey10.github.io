import { notFound } from 'next/navigation';
import React from 'react'

export async function generateMetadata({params}){
const {slug}=await params;
console.log(slug,'slug')

return{
  title:`blog no ${slug}`
}
}

async function page({params}) {
    // console.log('params', await params)
    // console.log('searchParams',await searchParams)
    const {slug}=await params;
    if(isNaN(slug)){
      notFound();
    }
    console.log(slug,'slug')
  return (
    <div>
      this is blog no {(await params).slug}
    </div>
  )
}

export default page
