/* eslint-disable react/prop-types */
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInstagram, faFacebookF} from '@fortawesome/free-brands-svg-icons';
import Accordion from 'react-bootstrap/Accordion';
import MyCarousel from './MyCarousel.jsx';
import Post from './Post';
import TextSection from "./TextSection.jsx";

const MyAccordion = ({post}) => {
    const id = post.id;
    const images = post.images

    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header id="accordion-header">
                    <FontAwesomeIcon icon={faInstagram} className="media-icon" />
                    Instagram
                </Accordion.Header>
                <Accordion.Body className="accordion-content">
                    <div className="carousel-container">
                        <MyCarousel images={images} />
                    </div>
                    <TextSection title={'Description'} text={post.description} id={id} user={post.user} />
                    <TextSection title={'Hashtags'} text={post.hashtags} id={id} user={post.user} />
                    <Post />
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
                <Accordion.Header id="accordion-header">
                    <FontAwesomeIcon icon={faFacebookF} className="media-icon" />
                    Facebook
                </Accordion.Header>
                <Accordion.Body className="accordion-content">
                    <div className="carousel-container">
                        <MyCarousel images={images} />
                    </div>
                    <TextSection title={'Description'} text={post.description} id={id} user={post.user} />
                    <TextSection title={'Hashtags'} text={post.hashtags} id={id} user={post.user} />
                    <Post />
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default MyAccordion;
