import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import accountService from '../../_services/account.service';


function RegisterForm() {

  let navigate = useNavigate()

  const [credentials, setCredentials] = React.useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: ""
  });


  const [error, setError] = React.useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;

    setCredentials({
      ...credentials,
      [event.currentTarget.name]: value
    });

  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {

    event.preventDefault();

    if (credentials.password !== credentials.passwordConfirm) {
        setError("Les mots de passe ne correspondent pas");
        console.log(error);
        return;
    }

    accountService.register({
        username: credentials.username,
        email: credentials.email,
        password: credentials.password
    })
    .then(
        res => {
          navigate('/login');
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
                S'inscrire
            </h1>
        
            { error !== "" &&
            <div className="alert alert-error shadow-lg">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span> { error }</span>
                </div>
            </div>
            }

            <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                <label htmlFor="username">Nom d'utilisateur </label>
                <input type="text" name="username"  value={credentials.username} onChange={onChange}/>
            </div>
            <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                <label htmlFor="email">Email </label>
                <input type="text" name="email"  value={credentials.email} onChange={onChange}/>
            </div>
            <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                <label htmlFor="password">Mot de passe </label>
                <input type="text" name="password" value={credentials.password} onChange={onChange}/>
            </div>
            <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                <label htmlFor="passwordConfirm">Confirmer le mot de passe </label>
                <input type="text" name="passwordConfirm" value={credentials.passwordConfirm} onChange={onChange}/>
            </div>
            <div className="grblock mb-2 text-sm font-medium text-gray-900 dark:text-whiteoup">
                <button>S'inscrire</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
  }

export default RegisterForm;