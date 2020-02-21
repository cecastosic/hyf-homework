import React, { useState, useEffect } from "react";

function UserDetails({id, user}) {
    const [details, setDetails] = useState("");

    const fetchDetailsData = async () => {
    const url = `https://api.github.com/users/${user.login}`;
    const details = await fetch(url)
                 .then(data => data.json())
                 .catch(error => console.log(error));
                 console.log(details);
        setDetails(details);
    }
    useEffect(() => {
        fetchDetailsData();
      }, []);

    return (
        <div className="details">
            <p className="bold">{details.name}</p>
            <p>{details.blog}</p>
            <p>{details.bio}</p>
            <p>{details.location}</p>
            <div className="section">
                <p>Public repos: {details.public_repos}</p>
                <p>Followers: {details.followers}</p>
                <p>Following: {details.following}</p>
            </div>
        </div>
    );
}

export default UserDetails;