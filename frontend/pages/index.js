import {useState} from 'react';

export default function HomeScreen() {
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');

  return (
    <div>
      <h1>Login</h1>
      <form>
        <input placeholder="Usuário" name="user" />
        <input placeholder="password" name="password" type="password" />
        <div>
          <button>
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
}
