import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const handleLogOff = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
    
        navigate('/login');
      };


    const handLogoClick = () => {
            navigate('/');
    };

    return (
        <div className="header">
            <a href="/" onClick={handLogoClick}>
                <img className="logo" src="/images/logo.png" alt="Logo"/>
            </a>
            <Button className="log-off-button" variant="link" size="lg" onClick={handleLogOff}>Log off</Button>
        </div>
    );
};

export default Header;
