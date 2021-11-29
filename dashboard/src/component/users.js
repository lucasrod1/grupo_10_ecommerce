import axios from 'axios';
import React from 'react';

function User() {
    axios.get('http://127.0.0.1:3001/api/users')
    .then(response => {
    console.log(response);
    });
    console.log("Imprime ok")
    return (
      <div className="UserCount">
        <h1>User Count</h1>
        <h2></h2>
      </div>
    );
  }
  
  export default User;