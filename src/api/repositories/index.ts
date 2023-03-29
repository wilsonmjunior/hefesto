// endpoint calls
export async function getRepo(username: string) {
  const response = await fetch(`https://api.github.com/users/${username}/repos`)
  
  return response.json()
}
