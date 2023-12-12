/* eslint-disable react/prop-types */
import {Button} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useNavigate} from 'react-router-dom';
import { jwtDecode } from "jwt-decode";

const TextSection = ({title, text, id, user}) => {
    const navigate = useNavigate();

    const handleEdit = () => {
        navigate(`/edit-post/${id}`);
    };

    let currentUserID;
    const token = localStorage.getItem('accessToken');
    if (token) {
        const decodedToken = jwtDecode(token);
        currentUserID = decodedToken.user_id; 
    }

    return (
        <div className="description-hashtags">
            <Row>
                <Col>
                    <h5>{title}</h5>
                    <p>{text}</p>
                </Col>
                <Col lg={1} md={1} sm={3} xs={3} className="align-btn">
                {currentUserID === user ?
                    <Button variant="outline-info" className="description-hashtags-btn" onClick={handleEdit}>Edit</Button> :
                    <Button disabled variant="outline-info" className="description-hashtags-btn" onClick={handleEdit}>Edit</Button>
                }
                </Col>
            </Row>
        </div>
    );


};

export default TextSection;
