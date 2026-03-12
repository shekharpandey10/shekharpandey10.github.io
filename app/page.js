import Link from "next/link";

export const metadata = {
  title: 'Home',
  description: '...',
}
export default async function Home({params,searchParams}) {
  console.log(await params)
  console.log(await searchParams)
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>Hello World</h1>
       <Link href={`/about`}>about</Link>{"  "}
     <Link href={`/services`}>services</Link>{"  "}
    </div>
  );
}
