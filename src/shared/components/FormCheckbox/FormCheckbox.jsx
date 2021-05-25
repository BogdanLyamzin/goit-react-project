import PropTypes from 'prop-types'
import { v4 } from 'uuid';

import styles from './FormCheckbox.module.scss'

const FormCheckbox = ({ label, className, ...checkboxProps}) => {
    const id = v4();

    return (
        <div className="formGroup">
            {label && <label htmlFor={id}>{label}</label> }
          <div className={styles.checkbox}>
            <input id={id} className={ `${styles.checkboxInputHidden} ${className}`} type="checkbox" {...checkboxProps} />
            <span aria-hidden="true" className={styles.checkboxInput} >
                <span className={styles.checkboxIcon}></span>
            </span>
          </div>
        </div>
    )
	
}

export default FormCheckbox

FormCheckbox.defaultProps = {
    checked: false,
    className: '',
    label: '',
    onChange: () => { }
}

FormCheckbox.propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
    checked: PropTypes.bool,
    label: PropTypes.string
}
