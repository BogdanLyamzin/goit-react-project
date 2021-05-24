import { v4 } from 'uuid';


const FormField = ({ label, className , ...inputProps}) => {
    const id = v4();
    return (
        <div>
            {label && <label htmlFor={id}>{label}</label>}
            <input id={id} className={`${className}`} {...inputProps} />
        </div>
    )
}
export default FormField;