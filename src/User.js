// User.js

import React from 'react';

import "./User.css";

const User = (props) => {

  // props.star ? :      // how do we apply className ONLY when star = true?
  return <div className={props.star ? "User-star" : ""}>
      <h3>{props.name}</h3>
      <img src={props.avatar || "https://www.drupal.org/files/issues/default-avatar.png"}/>
    </div>

}

export default User;