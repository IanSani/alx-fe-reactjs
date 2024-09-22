// src/components/UserList.jsx


const UserList = ({ users }) => {
  return (
    <div className="user-list">
      {users.map(user => (
        <div key={user.id} className="user-card">
          <img src={user.avatar_url} alt={user.login} />
          <h3>{user.login}</h3>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
        </div>
      ))}
    </div>
  );
};

export default UserList;