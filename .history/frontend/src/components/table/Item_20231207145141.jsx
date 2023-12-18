/* eslint-disable react/prop-types */

import { Button, Container, Row, Col } from 'react-bootstrap';
import MyModal from './MyModal';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { jwtDecode } from "jwt-decode";

const Item = ({ data }) => {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const images = data.images;

    let currentUserID;
    const token = localStorage.getItem('accessToken');
    if (token) {
        const decodedToken = jwtDecode(token);
        currentUserID = decodedToken.user_id; 
    }


    const handleEdit = () => {
        navigate(`/edit-post/${data.id}`);
    };

    const handleMediaManager = () => {
        navigate(`/manager/${data.id}`);
    };

    const handleItemClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    return (
        <>
            <Container fluid>
                <Row className="row text-center">
                    <Col xl={9} lg={8} md={8} sm={6} xs={6} id="item-title" onClick={handleItemClick}>
                        <span>{data.title}</span>
                    </Col>
                    <Col xl={3} lg={4} md={4} sm={6} xs={6} className="item-actions">

                        {/* <Col xs={4}>
                        <div className='item-btn-container'> */}
                            {currentUserID === data.user ? 
                            <Button className="item-btn" variant="info" size="sm" onClick={handleEdit}>Edit</Button> :
                            <Button disabled className="item-btn" variant="info" size="sm" onClick={handleEdit}>Edit</Button> }
                        {/* </div>
                        </Col>
                        <Col xs={8}> */}
                        {/* <div className='item-btn-container'> */}
                            <Button className="item-btn" variant="info" size="sm" onClick={handleMediaManager}>Media Manager</Button>
                        {/* </div>
                        </Col> */}
                    </Col>
                </Row>
            </Container>
            <MyModal show={showModal} handleClose={handleClose} data={data} images={images}/>
        </>
    );

};

export default Item;
