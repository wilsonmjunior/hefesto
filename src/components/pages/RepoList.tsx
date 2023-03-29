export async function RepoList() {
  const response = await fetch('https://api.github.com/users/wilsonmjunior/repos')
  const repos = await response.json()

  return (
    <div>
      <h3>Repositories</h3>
      <div>
        {JSON.stringify(repos)}
      </div>
    </div>
  )
}
