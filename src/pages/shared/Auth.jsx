import { useState } from 'react';

function Auth({ mode, onAuthSubmit, onSwitchMode }) {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const isLogin = mode === 'login';

  const handleSubmit = (event) => {
    event.preventDefault();
    onAuthSubmit({ nickname, password }, mode);
  };

  return (
    <main className="auth-page">
      <section className="auth-section">
        <div className="auth-card">
          <h1>{isLogin ? 'Log in' : 'Register'}</h1>
          <form className="auth-form" onSubmit={handleSubmit}>
            <label htmlFor="nickname">Nickname</label>
            <input
              id="nickname"
              name="nickname"
              type="text"
              value={nickname}
              onChange={(event) => setNickname(event.target.value)}
              required
            />

            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />

            <button type="submit" className="primary-button">
              {isLogin ? 'Log in' : 'Create account'}
            </button>
          </form>

          <p className="auth-switch-text">
            {isLogin ? "Don't have an acccount?" : 'Already have an acccount?'}
            <button type="button" className="auth-switch-button" onClick={onSwitchMode}>
              {isLogin ? 'Register' : 'Log in'}
            </button>
          </p>
        </div>
      </section>
    </main>
  );
}

export default Auth;
