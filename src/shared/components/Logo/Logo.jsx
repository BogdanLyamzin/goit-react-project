import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../../../public/images/Logo.svg';

const Logo = () => {
    return (
    
        <Link to='/'>
            <span>KidsLike</span>
            <Logo />
        </Link>
            
    )
}

export default Logo