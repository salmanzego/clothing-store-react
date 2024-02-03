import { useState } from 'react';
import './SignUp.css';
import Input from '../input/Input';
import { FormProvider, useForm } from 'react-hook-form';
import { submitForm } from '../../utils/submitForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import google_logo from '../../assets/images/google_logo.png';

const SignUp = () => {
    const methods = useForm();
    const navigate = useNavigate();
    const [errMsg, setErrMsg] = useState('');

    
    const submitFn = async (data, url) => {
        document.getElementById('signup_btn').disabled = true;
        const response = await submitForm(data,url);
        if (response.status === 404) {
            setErrMsg(response.msg);
            document.getElementById('login_btn').disabled = false;
        } else if (response.status === 302) {
            navigate(response.redirectTo);
        }
    }

    const userValidation = {
        required: {
            value: true,
            message: 'required',
        },
        maxLength: {
            value: 30,
            message: '30 characters max',
        },
        pattern: {
            value: /^[A-Z0-9._]{4,}$/i,
            message: 'Invalid format'
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
            <div className="signup_card">
                <h2 className='signup_title'>create your account.</h2>
                {errMsg && <p className='error_display'><FontAwesomeIcon icon="fa-solid fa-circle-exclamation" /> {errMsg}</p>}
                <form action="" method="post" onSubmit={e => e.preventDefault()} noValidate>
                    <Input type="text" name="userName" id="userName" label="username" validation={userValidation} />
                    <Input type="email" name="email" id="email" label="email address" validation={emailValidation} />
                    <Input type="password" name="password" id="password" label="password" validation={passwordValidation} />
                    <div className="row mt-3 have_ac">
                        <p className='mb-0'>Have an account? <a href="/login">Log in now</a></p>
                    </div>
                    <div className="row">
                        <button type="submit" className='signup_btn' id='signup_btn' onClick={methods.handleSubmit(data => submitFn(data,'/signup'))}>Sign up</button>
                    </div>

                    <div className="row">
                        <button className='google_signup_btn'><img src={google_logo} alt="" />Sign up with Google</button>
                    </div>
                </form>
            </div>
        </FormProvider>
    )
}

export default SignUp;