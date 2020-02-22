import React, { useContext } from "react";
import User from "./User";
import { SearchContext } from "./../App";

function UsersList() {
  const { users } = useContext(SearchContext);

  return (
    <div className="users-list">
      <ul>
        {users.length > 0 ? (
          users.map(user => {
            return <User key={user.id} user={user} />;
          })
        ) : (
          <li>No results</li>
        )}
      </ul>
    </div>
  );
}

export default UsersList;
