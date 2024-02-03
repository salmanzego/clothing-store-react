import { useState } from 'react';
import './Login.css';
import Input from '../input/Input';
import { FormProvider, useForm } from 'react-hook-form';
import { submitForm } from '../../utils/submitForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import google_logo from '../../assets/images/google_logo.png';

const Login = () => {
    const methods = useForm();
    const navigate = useNavigate();
    const [errMsg, setErrMsg] = useState('');
    const submitFn = async (data,url) => {
        document.getElementById('login_btn').disabled = true;
        const response = await submitForm(data,url);
        if (response.status === 404) {
            setErrMsg(response.msg);
            document.getElementById('login_btn').disabled = false;
        } else if (response.status === 302) {
            navigate(response.redirectTo);
        }
    }

    const emailValidation = {
        required: {
            value: true,
            message: 'required',
        },
        maxLength: {
            value: 30,
            message: '30 characters max',
        },
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email'
        }
    }
    const passwordValidation = {
        required: {
            value: true,
            message: 'required',
        },
        minLength: {
            value: 6,
            message: 'Min 6 characters',
        }
    }

    return (
        <FormProvider {...methods}>
            <div className="login_card">
                <h2 className='login_title'>Login.</h2>
                {errMsg && <p className='error_display'><FontAwesomeIcon icon="fa-solid fa-circle-exclamation" /> {errMsg}</p>}
                <form action="" method="post" onSubmit={e => e.preventDefault()} noValidate>
                    <Input type="email" name="email" id="email" label="enter your email address" validation={emailValidation} />
                    <Input type="password" name="password" id="password" label="enter password" validation={passwordValidation} />
                    <div className="row mt-3 have_ac">
                        <p className='mb-0'>Don't have an account? <a href="/signup">create account</a></p>
                    </div>
                    <div className="row">
                        <button type="submit" className='login_btn' id='login_btn' onClick={methods.handleSubmit(data => submitFn(data, '/login'))}>Login</button>
                    </div>

                    <div className="row">
                        <button className='google_login_btn'><img src={google_logo} alt="" />Login with Google</button>
                    </div>
                </form>
            </div>
        </FormProvider>
    )
}

export default Login;