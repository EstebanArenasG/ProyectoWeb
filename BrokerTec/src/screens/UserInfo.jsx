import React from 'react';

function UserProfile({ user }) {
  return (
    <div className="user-profile">
      <h2>Información del usuario</h2>
      <p><strong>Nombre:</strong> {user.firstName} {user.lastName}</p>
      <p><strong>Correo electrónico:</strong> {user.email}</p>
      <p><strong>País:</strong> {user.country}</p>

    </div>
  );
}

export default UserProfile;