import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Layout from '../components/layout/Layout'
import { auth } from '../redux/rootReducer';
import { useAppDispatch, useAppSelector } from '../types/hooks';

const LoginPage: React.FC = () => {
  const [password, setPassword] = useState<string>('');
  const [username, setUsername] = useState<string>('');

  const { isAuth, error } = useAppSelector(state => state);
  const dispatch = useAppDispatch();

  const handleSignIn = () => {
    dispatch(auth({username, password}));
  }

  const handleKeyDown: React.KeyboardEventHandler = (e) => {
    if(e.key === 'Enter' && password && username) handleSignIn()
  }

  if(isAuth) {
    return <Navigate to={'/profile'} />
  }
  return (
    <Layout error={error}>
      <div className='row justify-content-center'>
        <form className='w-50 rounded p-4 login_block'
              onKeyDown={handleKeyDown}>
          <div className="mb-3 row">
            <label className="form-label">
              Логин
              <input type="text" 
                     className="form-control"
                     placeholder="Введите e-mail"
                     onChange={(e) => setUsername(e.target.value)} />
            </label>
          </div>
          <div className="mb-3 row">
            <label className="col-form-label">
              Пароль
              <input type="password"
                     className="form-control"
                     placeholder="Введите пароль"
                     onChange={(e) => setPassword(e.target.value)} />
            </label>
          </div>
          <button type="button"
                  className="btn btn-primary"
                  disabled={!password && !username}
                  onClick={() => handleSignIn()}>
                    Вход
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default LoginPage;