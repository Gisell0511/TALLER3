// src/components/LoginForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Validar que los campos no estén vacíos
    if (!email || !password) {
      setError('Por favor, llena todos los campos');
      return;
    }

    // Limpiar error y despachar acción de login
    setError('');
    dispatch(login({ email }));  // Aquí estamos simulando el login con el email
    navigate('/home'); // Redirige a la página principal después de iniciar sesión
  };

  return (
    <form onSubmit={handleLogin}>
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
