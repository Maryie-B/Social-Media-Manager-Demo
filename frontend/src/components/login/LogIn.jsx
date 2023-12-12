import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../axiosConfig';

const LogIn = () => {
    const navigate = useNavigate();
    //TODO: create SHOW PASSWORD functionality
    // eslint-disable-next-line no-unused-vars
    const [showPassword, setShowPassword] = useState(false);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const handleLogin = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axiosInstance.post('http://127.0.0.1:8000/login/', {
            username,
            password
          });
    
          localStorage.setItem('accessToken', response.data.access);
          localStorage.setItem('refreshToken', response.data.refresh);
          
          navigate('/');
        } catch (err) {
          if (err.response) {
            setError(err.response.data.detail || 'Invalid credentials');
          } else {
            setError('Login failed. Please try again.');
          }
        }
      };

    return (
        <div className="login-form">
            <h2 id="login-title">Log-in</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <Form>
                <Form.Group controlId="username">
                    <Form.Label className="label">User:</Form.Label>
                    <Form.Control type="text"
                                  placeholder="Please type in your username."
                                  className="input"
                                  value={username}
                                  onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="label">Password:</Form.Label>
                    <Form.Control className="input" type="password" placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit" className="mx-auto d-block"
                        id="login-button" onClick={handleLogin}>
                    Log-in
                    <FontAwesomeIcon icon={faChevronRight} className="icon" />
                </Button>
            </Form>
        </div>
    );
};

export default LogIn;
