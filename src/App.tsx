import { useState, useEffect } from "react";

import type { User } from "@types/user";
import UserList from "./components/UserList";
import Loader from "./ui/Loader";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loadingUsers, setLoadingUsers] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    async function fetchUsers() {
      setLoadingUsers(true);
      setError(null);

      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error("Error with response from API.");
        }

        const data: User[] = await response.json();

        setUsers(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Error fetching users data.");
        }
      } finally {
        setLoadingUsers(false);
      }
    }

    fetchUsers();
  }, []);

  if (loadingUsers) {
    return <Loader />;
  }

  if (error) {
    return <div>Error loading users: {error}</div>;
  }

  return (
    <div>
      <h1>My Users List</h1>
      <UserList users={users} />
    </div>
  );
}

export default App;
