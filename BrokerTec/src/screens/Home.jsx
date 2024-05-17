import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Estoy en el Home</h1>
      <button onClick={() => navigate('/')}>Vovler</button>
    </div>
  );
}
