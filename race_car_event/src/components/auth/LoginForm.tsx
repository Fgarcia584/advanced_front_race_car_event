import React from 'react';
import { useNavigate } from 'react-router-dom';
import accountService from '../../_services/account.service';


function LoginForm() {

  let navigate = useNavigate()

  const [credentials, setCredentials] = React.useState({
    email: "test@test.com",
    password: "azerty"
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;

    setCredentials({
      ...credentials,
      [event.currentTarget.name]: value
    });
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    accountService.login(credentials)
      .then(
        res => {
          accountService.saveToken(res.data.data.token);
          navigate('/');
        }
      )
      .catch(err => console.log(err))
  };

  return (
    <form onSubmit={onSubmit}>
        <div className="group">
            <label htmlFor="email">Email</label>
            <input type="text" name="email"  value={credentials.email} onChange={onChange}/>
        </div>
        <div className="group">
            <label htmlFor="password">Mot de passe</label>
            <input type="text" name="password" value={credentials.password} onChange={onChange}/>
        </div>
        <div className="group">
            <button>Connexion</button>
        </div>
    </form>
  );
  }

export default LoginForm;