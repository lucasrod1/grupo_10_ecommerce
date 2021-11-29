// import axios from 'axios';
import React from 'react';

function User() {
    let users = fetch('http://127.0.0.1:3001/api/users')
    .then(response => response.json())
    .then(data => console.log(data));


    // let users = axios.get('https://127.0.0.1:3001/api/users')
    // .then(response => {
    // console.log(response);
    // });
    console.log("Imprime ok")
    return (
      <div className="UserCount">
        <h1>User Count</h1>
        <h2>{users.userCount}</h2>
      </div>
    );
  }
  
  export default User;