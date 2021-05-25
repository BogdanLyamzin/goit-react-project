import PropTypes from 'prop-types'
import { v4 } from 'uuid';

import styles from './FormCheckbox.module.scss'



const FormCheckbox = ({ label, className, ...props}) => {
    const id = v4();

    return (
          <div className={styles.checkbox}>
            <input id={id} className={ `${styles.checkboxInputHidden} ${className}`} type="checkbox"/>
            <label aria-hidden="true" className={styles.checkboxInput} htmlFor={id}>
                <span className={styles.checkboxIcon}></span>
            </label>
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
