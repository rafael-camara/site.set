type UserListProps = {
  id: number
  name: string
}

async function fetchUsers(): Promise<UserListProps[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
      ])
    }, 4000)
  })
}

async function UserList() {
  const userList = await fetchUsers()
  console.log('SERVER', userList)
  return (
    <div className="mt-20 text-white">
      <h3>User List</h3>
      <ul>
        {userList.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default function UserListPage() {
  return (
    <>
      <h2>User List</h2>
      <UserList />
    </>
  )
}
