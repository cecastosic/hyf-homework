import React, { useState } from "react";
import UserDetails from "./UserDetails";

function User({ user }) {
  const [details, setDetails] = useState(false);

  const showDetails = event => {
    event.preventDefault();
    setDetails(!details);
  };

  return (
    <li>
      <a href={user.url} onClick={event => showDetails(event)}>
        <img src={user.avatar_url} alt={user.login} />
        <span>{user.login}</span>
      </a>
      {details && <UserDetails id={user.id} user={user} />}
    </li>
  );
}

export default User;
