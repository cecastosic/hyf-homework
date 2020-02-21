import React from "react";
import User from "./User";

function UsersList({ users }) {
  return (
    <div className="users-list">
      <ul>
        {//users.length > 0 ? (
        users.map(user => {
          return <User key={user.id} user={user} />;
        })
        //) : (
        //<li>No results</li>
        //)
        }
      </ul>
    </div>
  );
}

export default UsersList;
