import { RepoList } from '@/components/pages/home/RepoList'
import { User } from '@/components/pages/home/User'

import Link from 'next/link'
import { Suspense } from 'react'

export default async function Home() {
  // const [user, repos] = await Promise.all([
  //   fetch('https://api.github.com/users/wilsonmjunior'),
  //   fetch('https://api.github.com/users/wilsonmjunior/repos'),
  // ])

  return (
   <main>
      <h1 className="text-xl">Home</h1>
      <div className="flex items-center justify-center">
        <Link href="/counter">Counter Page</Link>
      </div>
     
      <Suspense fallback={<p>Carregando usuário</p>}>
        {/* @ts-expect-error Async Server Component */}
        <User />
      </Suspense>

      {/* @ts-expect-error Async Server Component */}
      <RepoList />
   </main>
  )
}
