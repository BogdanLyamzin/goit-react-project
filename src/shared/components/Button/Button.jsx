import PropTypes from 'prop-types'


const Button =({ children, type = 'button', onClick = () => null,className}) =>{
    return <button  className={`${className}`} type={type} onClick={onClick}>{children}</button>
};

export default Button;

Button.propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
}
