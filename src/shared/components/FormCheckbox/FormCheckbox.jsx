import PropTypes from 'prop-types'
import { v4 } from 'uuid';

import styles from './FormCheckbox.module.sass'


const FormCheckbox = ({ label, className, ...props}) => {
    const id = v4();

    return (
        <div>
            {label && <label htmlFor={id}>{label}</label>}
            <input id={id} className={`${styles.checkboxInput}  ${className}`} type="checkbox" {...props }/>
        </div>
            )
	
}


 
export default FormCheckbox


FormCheckbox.defaultProps = {
    checked: false,
    className: '',
    onChange: () => { }
}


FormCheckbox.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string,
    checked: PropTypes.bool
}
