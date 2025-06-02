import type { User } from "@types/user";
import UserCard from "./UserCard";

interface UserListProps {
  users: User[];
}

function UserList({ users }: UserListProps) {
  return (
    <div className="user-list">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserList;
