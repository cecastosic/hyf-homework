import React, { useState } from "react";
import UserDetails from "./UserDetails";

function User({ user }) {
  const [showDetails, setShowDetails] = useState(false);

  const showUserDetails = event => {
    event.preventDefault();
    setShowDetails(!showDetails);
  };

  return (
    <li>
      <a href={user.url} onClick={event => showUserDetails(event)}>
        <img src={user.avatar_url} alt={user.login} />
        <span>{user.login}</span>
      </a>
      {showDetails && <UserDetails id={user.id} user={user} />}
    </li>
  );
}

export default User;
