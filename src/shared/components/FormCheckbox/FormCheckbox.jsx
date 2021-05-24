import { v4 } from 'uuid';


const FormCheckbox = ({ label, className, onChange = () => null}) => {
    const id = v4();

    return (
        <div>
            {label && <label htmlFor={id}>{label}</label>}
            <input id={id} className={`${className}`} type="checkbox" onChange={onChange }/>
        </div>
            )
	
}
 
export default FormCheckbox