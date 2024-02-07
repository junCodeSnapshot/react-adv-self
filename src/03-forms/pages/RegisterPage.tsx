import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';

import '../styles/styles.css';

export const RegisterPage = () => {

    const { onChange, resetForm, isValidEmail, email, name, password1, password2, formData} = useForm  ({
        name: '',
        email: '',
        password1: '',
        password2: '',
    });
    // const { email, name, password1, password2 } = formData;

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData)
    }   
    return (
        <div>
            <h1>Register Page</h1>

            <form noValidate onSubmit={onSubmit }>
                <input 
                    type="text" 
                    placeholder="Name"
                    value={name}
                    onChange={ onChange }
                    name='name'
                    className={ `${name.trim().length <= 0 && 'has-error'}` }
                />
                {/* we didn't use a ternary because it ask for a else condition like '? this : null' */}
                {name.trim().length <= 0 && <span>Este campo es necesario</span>}
                <input 
                    type="email" 
                    placeholder="Email"
                    value={email}
                    onChange={ onChange }
                    name='email'
                    className={`${!isValidEmail(email)&& 'has-error'}`}
                />
                {!isValidEmail(email) && <span>Este campo es necesario</span>}

                <input 
                    type="password" 
                    placeholder="Password"
                    value={password1}
                    onChange={ onChange }
                    name='password1'
                />
                {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
                {password1.trim().length < 6 && password1.trim().length > 0 && <span>La contraseña tiene que tener más de 6 caracteres</span>}
                <input 
                    type="password" 
                    placeholder="Repeat Password"
                    value={password2}
                    onChange={ onChange }
                    name='password2'
                />
                {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
                {password2.trim().length > 0 && password2 !== password1 && <span>Las passwords no coinciden</span>}
                <button type="submit">Send</button>
                <button type="button" onClick={resetForm}>Reset</button>
            </form>
        </div>
    )
}
