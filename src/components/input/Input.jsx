import './Input.css';
import { useFormContext } from 'react-hook-form';
import { findInputError } from '../../utils/findInputError';
import { isFormInvalid } from '../../utils/isFormInvalid';

const Input = ({ type, name, id, label, validation }) => {
    const {
        register,
        formState: { errors },
    } = useFormContext()

    const inputError = findInputError(errors, name)
    const isInvalid = isFormInvalid(inputError)

    return (
        <div className="input">
            <input type={type} name={name} id={id} {...register(name, validation)} />
            <div className="labels">
                <label htmlFor={id}>{label}</label>
                {isInvalid && <label htmlFor="error_msg" className="err_msg">{inputError.error.message}!</label>}
            </div>
        </div>
    )
}

export default Input;