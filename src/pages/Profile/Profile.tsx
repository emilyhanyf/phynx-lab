import React from 'react';
import { Link } from 'react-router-dom';

const Profile: React.FC = () => {
  return (
    <div className="container">
      <h1>User Profile</h1>
      <p>This is a dummy user profile page.</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default Profile;
