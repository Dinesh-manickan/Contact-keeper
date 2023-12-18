import React, { useState, useContext, useEffect } from 'react'
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';
import { useAuth , clearErrors, login } from '../../context/auth/AuthState';
const Login = (props) => {
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const { setAlert } = alertContext;

    const { login, error, clearErrors } = authContext;

    const { isAuthenticated } = authContext;
    

    useEffect(() => {
        
        if (error === 'Invalid Creadentials') {
            setAlert(error, 'danger', "This email is already in use.");
            clearErrors();
        }
    
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [error, isAuthenticated, props.history]);
    const [user, setUser] = useState({
        email:'',
        password: '',
    });

    const { email, password } = user;

    const onChange = e => setUser({...user, [e.target.name]: e.target.value})

    const onSubmit = e => {
        e.preventDefault();
        if(email === '' || password === '')
        {
            setAlert("Please fill out all fields.", "danger");
        } else {
            login(email, password);
        }
    }

  return (
    <div>
        <h1>
            Account <span className='text-primary'>Login</span>
        </h1>
        <form onSubmit={onSubmit}>
            <div className='form-group'>
                <lable htmlFor='email'>Email</lable>
                <input type='email' name='email' value={email} onChange={onChange} />
            </div>
            <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' value={password} onChange={onChange} required/>
            </div>
            <input type='submit' value='Login' className='btn btn-primary btn-block'/>
        </form>
    </div>
  )
}

export default Login;