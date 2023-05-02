import {useState} from 'react';
import { authService } from '../src/services/auth/authService';
import { useRouter } from 'next/router';

export default function Login() {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    authService
    .login({
      username: username,
      password: password
    })
    .then(()=>{
      router.push('/AuthPageSSR');
    })
    .catch((err)=>{
      alert(err.message);
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
