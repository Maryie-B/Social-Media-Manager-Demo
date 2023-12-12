/* eslint-disable react/prop-types */
import { Carousel } from 'react-bootstrap';

const MyCarousel = ({ images }) => {
    
    return (
        <div className="carousel-container">
            <Carousel interval={3000} pause="hover">
                { images.length > 0 ? 
                images.map((image, index) => (
                    <Carousel.Item key={`${image.id}-${index}`}>
                        <img
                            className="d-block w-100 carousel-img"
                            src={image.filename.startsWith('blob:') ? image.filename : `http://127.0.0.1:8000/${image.filename}`}
                            alt={`carousel-img-${image.id}`}
                        />
                    </Carousel.Item>
                ))
                :
                <Carousel.Item>
                    <img
                        className="d-block w-100 placeholder-my-carousel"
                        src={'https://placehold.co/600x400'}
                        alt={'Placeholder'}
                    />
                </Carousel.Item>
                }
            </Carousel>
        </div>
    );
};

export default MyCarousel;
