import React from 'react';
import "./Suggestions.css";
import { Avatar } from '@mui/material';

function Suggestions() {
  const users = [
    { username: 'chaechae', relation: 'New to Instagram' },
    { username: 'hebbbb', relation: 'New to Instagram' },
    { username: 'suejennie', relation: 'New to Instagram' },
    { username: 'bootcampstar', relation: 'New to Instagram' },
    { username: 'stevejobs', relation: 'New to Instagram' }
  ];

  return (
    <div className="suggestions">
      <div className="suggestions__title">Suggestions for you</div>
      <div className="suggestions__usernames">
        {
          users.map((user, index) => (
            <div key={index} className="suggestion__username">
              <div className="username__left">
                <span className="avatar">
                  <Avatar>{user.username.charAt(0).toUpperCase()}</Avatar>
                </span>
                <div className="username__info">
                  <span className="username">{user.username}</span>
                  <span className="relation">{user.relation}</span>
                </div>
              </div>
              <button className="follow__button">follow</button>
            </div>
          ))
        }
      </div>
    </div>);
}

export default Suggestions;
