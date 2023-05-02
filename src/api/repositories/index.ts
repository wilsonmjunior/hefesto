import { RepositoryResponse } from "./types"

// endpoint calls
export async function getSearchIssues(search: string): Promise<RepositoryResponse[]> {
  const response = await fetch(`https://api.github.com/repositories/1300192/issues?page=1&per_page=2`)
  return response.json()
}

export async function getRepoByUsername(username: string): Promise<RepositoryResponse[]> {
  const response = await fetch(`https://api.github.com/users/${username}/repos`)
  return response.json()
}
