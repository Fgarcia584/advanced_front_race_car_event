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
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-white/10 backdrop-blur-2xl dark:border-gray-700'>
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Se Connecter
            </h1>
            <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                <label htmlFor="email">Email</label>
                <input type="text" name="email"  value={credentials.email} onChange={onChange}/>
            </div>
            <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                <label htmlFor="password">Mot de passe</label>
                <input type="text" name="password" value={credentials.password} onChange={onChange}/>
            </div>
            <div className="grblock mb-2 text-sm font-medium text-gray-900 dark:text-whiteoup">
                <button>Connexion</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
  }

export default LoginForm;