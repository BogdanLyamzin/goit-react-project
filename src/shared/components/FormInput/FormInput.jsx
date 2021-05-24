import PropTypes from 'prop-types'
import { v4 } from 'uuid';


const FormInput = ({ label, className , ...inputProps}) => {
    const id = v4();
    return (
        <div>
            {label && <label htmlFor={id}>{label}</label>}
            <input id={id} className={`${className}`} {...inputProps} />
        </div>
    )
}
export default FormInput;


FormInput.defaultProps = {
    required: false,
    placeholder: '',
    className: '',
    value: '',
    type: 'text',
    name: '',
    onChange: () => { }
}

FormInput.propTypes = {
    placeholder: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func,
}
