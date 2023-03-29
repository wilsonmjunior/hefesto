import { Repository } from "./types"

// endpoint calls
export async function getRepo(username: string): Promise<Repository[]> {
  const response = await fetch(`https://api.github.com/users/${username}/repos`)
  
  return response.json()
}
