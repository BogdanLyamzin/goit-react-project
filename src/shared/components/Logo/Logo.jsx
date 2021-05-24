import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../../../public/images/Logo.svg';

const Logo = () => {
    return (
    
        <Link to='/'>
            <h1>KidsLike</h1>
            <Logo />
        </Link>
            

    )
}

export default Logo