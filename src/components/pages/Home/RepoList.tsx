import { getRepo } from "@/api/repositories"

export async function RepoList() {
  const repos = await getRepo('wilsonmjunior')

  return (
    <div>
      <h3>Repositories</h3>
      <div>
        {JSON.stringify(repos)}
      </div>
    </div>
  )
}
