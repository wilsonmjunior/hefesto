import { getUser } from "@/api/users"

export async function User() {
  const user = await getUser('wilsonmjunior')

  return (
    <div>
      <h3>User</h3>
      <div>
        {JSON.stringify(user)}
      </div>
    </div>
  )
}
