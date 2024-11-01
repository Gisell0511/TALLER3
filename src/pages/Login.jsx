import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, selectAuth } from '../redux/store';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const auth = useSelector(selectAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      auth.user &&
      auth.user.name === username && 
      auth.user.password === password
    ) {
      dispatch(login({ username, password }));
      navigate('/home');
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4 text-center">Iniciar Sesión</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            placeholder="Nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            required
          />
          <button type="submit" className="w-full bg-teal-600 text-white py-2 rounded">
            Iniciar Sesión
          </button>
        </form>
        <p className="text-center mt-4">
          ¿No tienes cuenta?{' '}
          <span onClick={() => navigate('/register')} className="text-teal-600 cursor-pointer">
            Regístrate aquí
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;