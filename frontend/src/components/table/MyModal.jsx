/* eslint-disable react/prop-types */
import { Modal, Button } from 'react-bootstrap';
import MyCarousel from "../manager/MyCarousel.jsx";
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";

const MyModal = ({ show, handleClose, data, images }) => {
    const navigate = useNavigate();
    let currentUserID;
    const token = localStorage.getItem('accessToken');
    if (token) {
        const decodedToken = jwtDecode(token);
        currentUserID = decodedToken.user_id; 
    }

    return (
        <Modal show={show} onHide={handleClose} centered className="modal">
            <Modal.Header closeButton className="modal-header">
                <Modal.Title>{data.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-body">
                <div>
                    <h4 className="text-right">Description</h4>
                    <p className="text-right">{data.description}</p>
                </div>
                <div className="hashtags">
                    <h4 className="text-left">Hashtags</h4>
                    <p>{data.hashtags}</p>
                </div>
                <MyCarousel images={images} />
            </Modal.Body>
            <Modal.Footer>
                {currentUserID === data.user ?
                    <Button className="modal-edit-btn" variant="ghost" onClick={() => navigate(`/edit-post/${data.id}`)}>Edit</Button> :
                    <Button disabled className="modal-edit-btn" variant="ghost" onClick={() => navigate(`/edit-post/${data.id}`)}>Edit</Button>
                }
            </Modal.Footer>
        </Modal>
    );

};

export default MyModal;
