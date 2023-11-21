import React, { useState } from 'react';


function App() {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 const [users, setUsers] = useState([
  { email: 'user1@example.com', password: 'password1' },
  { email: 'user2@example.com', password: 'password2' },
 ]);

 const handleSignUp = (e) => {
  e.preventDefault();
  const newUser = { email, password };
  setUsers([...users, newUser]);
  console.log('Nuevo usuario:', newUser);
  console.log('Hash:', hashCode(password));
 };

 const handleSubmit = (e) => {
    e.preventDefault();
    validateCredentials();
    console.log('Email:', email);
    console.log('Password:', password);
 };

 const validateCredentials = () => {
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
     alert('Inicio de sesión exitoso');
  } else {
     alert('Correo electrónico o contraseña incorrecta');
  }
 };

 function hashCode(str) {
    let hash = 0;
    for (let i = 0, len = str.length; i < len; i++) {
        let chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}

 return (
    <div className="App">
      <h1>Iniciar sesión</h1>
        <form onSubmit={handleSubmit}>
  <label>
      Correo electrónico:
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
  </label>
  <br />
  <label>
      Contraseña:
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
  </label>
  <br />
  <button type="submit">Iniciar sesión</button>
  </form>
  <br />
  <form onSubmit={handleSignUp}>
  <label>
      Correo electrónico:
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
  </label>
  <br />
  <label>
      Contraseña:
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
  </label>
  <br />
  <button type="submit">Registrarse</button>
  </form>
  </div>
 );
}

export default App;