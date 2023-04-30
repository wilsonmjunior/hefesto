import { RepositoryResponse } from "./types"

// endpoint calls
export async function getRepo(username: string): Promise<RepositoryResponse[]> {
  const response = await fetch(`https://api.github.com/users/${username}/repos`)

  return response.json()
}
