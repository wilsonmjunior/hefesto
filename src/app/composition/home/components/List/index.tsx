'use client';

import { useEffect, useState } from "react";
import axios from "axios";
import { UseCard, User } from "./UserCard";

export function List() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    axios
      .get('https://jsonplaceholder.typicode.com/users', {
        signal: controller.signal,
      })
      .then((response) => {
        setUsers(response.data);
        console.log('data: ', response.data);
      }).catch((error) => {
        console.log(error);
      })

    return () => {
      controller.abort();
    }
  }, []);

  return (
    <div className="mt-8">
      <h1 className="text-4xl">Usuários</h1>

      <div className="flex flex-col mt-4">
        {users.map((user) => (
          <UseCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  )
}
