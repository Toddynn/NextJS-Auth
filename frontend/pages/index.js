import {useState} from 'react';
import { authService } from '../src/services/auth/authService';

export default function HomeScreen() {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    authService
    .login({
      username: username,
      password: password
    })
    .then(()=>{
      alert('Login realizado com sucesso');
    })
    .catch((err)=>{
      console.log(err)
      alert('usuario ou senha invalidos');
    })
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Usuário</label>
        <input placeholder="Digite seu usuário" name="username" id='username' type='text' onChange={(e)=>setUsername(e.target.value)}/>
        <label htmlFor='password'>Senha</label>
        <input placeholder="Digite sua senha" name="password" id='password' type="password" onChange={(e)=>setPassword(e.target.value)}/>
        <div>
          <button>
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
}
