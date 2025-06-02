import type { User } from "@types/user";

interface UserCardProps {
  user: User;
}

function UserCard({ user }: UserCardProps) {
  return (
    <div className="user-card">
      <h2 style={{ fontSize: "1.2rem", margin: "0 0 0.5rem 0" }}>
        {user.name}
      </h2>
      <p style={{ margin: 0 }}>Email: {user.email}</p>
      <p style={{ margin: 0 }}>Phone: {user.phone}</p>
      <p style={{ margin: 0 }}>Website: {user.website}</p>
    </div>
  );
}

export default UserCard;
