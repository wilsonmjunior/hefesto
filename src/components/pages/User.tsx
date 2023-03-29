export async function User() {
  const response = await fetch('https://api.github.com/users/wilsonmjunior')
  const user = await response.json()

  return (
    <div>
      <h3>User</h3>
      <div>
        {JSON.stringify(user)}
      </div>
    </div>
  )
}
