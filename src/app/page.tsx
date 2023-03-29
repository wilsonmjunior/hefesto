import Link from 'next/link'

export default function Home() {
  return (
   <main>
      <h1 className="text-xl">Home</h1>
      <div className="flex items-center justify-center">
        <Link href="/counter">Counter Page</Link>
      </div>
   </main>
  )
}
