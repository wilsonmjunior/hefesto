import { User } from "./types"

export async function getUser(username: string): Promise<User> {
  const response = await fetch(`https://api.github.com/users/${username}`,{
    next: {
      revalidate: 30,
    },
    cache: 'no-store',
  })
  
  return response.json()
}