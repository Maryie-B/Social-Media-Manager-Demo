/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from 'react';
import axiosInstance from '../axiosConfig';
import {Button} from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import MyCarousel from '../components/manager/MyCarousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';


const AddEditPost = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [hashtags, setHashtags] = useState('');
  const [images, setImages] = useState([]);
  const [error, setError] = useState('');
  const [initialData, setInitialData] = useState({
    title: '',
    description: '',
    hashtags: '',
    images: []
  });
  const navigate = useNavigate();
  const { id } = useParams();
  const fileInput = useRef();
  const descriptionRef = useRef(description);
  const hashtagsRef = useRef(hashtags);
  const titleRef = useRef(title);

  useEffect(() => {
    if (id) {
      axiosInstance.get(`http://127.0.0.1:8000/post/${id}`)
        .then(response => {
          setTitle(response.data.title);
          setDescription(response.data.description);
          setHashtags(response.data.hashtags);
          setImages(response.data.images);

          if (id && response.data) {
            setInitialData({
              title: response.data.title,
              description: response.data.description,
              hashtags: response.data.hashtags,
              images: response.data.images
            });
          }
        })
        .catch(error => {
          console.log(error);
          setError(error);
        });
    }

    return () => {
      images.forEach(image => {
        if (image.filename.startsWith('blob:')) {
          URL.revokeObjectURL(image.filename);
        }
      });
    };
  }, [id]);

  const isFormDirty = () => {
    return (
      title !== initialData.title ||
      description !== initialData.description ||
      hashtags !== initialData.hashtags ||
      images.length !== initialData.images.length 
    );
};

  const adjustHeight = (ref) => {
    if (ref.current) {
        ref.current.style.height = 'auto';
        ref.current.style.height = ref.current.scrollHeight + 'px';
    }

  }

  // Automatically adjusts the size of the textareas if they have content
  useEffect(() => {
    if (description || hashtags) {
      adjustHeight(descriptionRef);
      adjustHeight(hashtagsRef);
      adjustHeight(titleRef)
    }
  }, [description, title, hashtags]); 


  // Sends the uploaded images to the Carousel so that they are immediately displayed
  const handleFileChange = (event) => {
    const uploadedFiles = Array.from(event.target.files);
    console.log(event.target.files[0]);
    const newImages = uploadedFiles.map(file => ({
      id: Math.random(), 
      filename: URL.createObjectURL(file),
      file: file 
    }));
    setImages(prevImages => [...prevImages, ...newImages]);
  };
  
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (title === '' || description === '' || hashtags === '') {
      setError("Please complete all fields");
      return;
    }

    const postData = new FormData();
    postData.append('id', id);
    postData.append('title', title);
    postData.append('description', description);
    postData.append('hashtags', hashtags);

    [...images].forEach(image => {
      if (image.file) {
        postData.append('images', image.file);
      }
    })

    if (id) {
      axiosInstance.put(`http://127.0.0.1:8000/update/${id}`, postData)
        .then(response => {
          console.log(response);
          navigate('/');
        })
        .catch(error => {
          console.log(error);
          setError(error);
        });
    } else {
      axiosInstance.post('http://127.0.0.1:8000/create/', postData)
      .then(response => {
        console.log(response.data);
        navigate('/');
      })
      .catch(error => {
        console.error("Error: ", error.response);
        setError(error.response);
      });
    }
  };

  return (
    <div className="create-edit-container">
      <h4>{ id ? 'Edit Post' : 'Create New Post'}</h4>
      <Container>
        <Row className="justify-content-md-center">
          <Col lg={4} md={4} sm={4} className="post-images-container">
            <MyCarousel images={images} />
            <label htmlFor="file-upload">
                <Button variant="primary" className="upload-button" onClick={() => fileInput.current.click()}>
                  Upload Photos
                </Button>
              </label>
              <input
                  type="file"
                  className="hide-input"
                  ref={fileInput}
                  id="file-upload"
                  onChange={handleFileChange}
                  multiple
              />
          </Col>
          <Col md="auto">
              <div className="vertical-divider"></div>
          </Col>
          <Col lg={4} md={4} sm={4} className="post-details">
            <div>
            <label>Title:</label>
            <textarea 
              ref={titleRef}
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              placeholder='Add title...'
            />
            <br />
            <label>Description:</label>
              <textarea 
                ref={descriptionRef}
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                placeholder='Add description...'
              />
              <br />
              <label>Hashtags:</label>
                <textarea 
                  ref={hashtagsRef}
                  value={hashtags} 
                  onChange={(e) => setHashtags(e.target.value)}  
                  placeholder='Add hashtags...'
                />
                <br />
            </div>
            {error && <Alert variant='danger'>{error}</Alert>}
          </Col>
        </Row>
      </Container>

      {isFormDirty() ? <Button variant="primary" size="lg" className="save-button"
                onClick={handleSubmit}>
                Save
        </Button>
        :
        <Button disabled variant="primary" size="lg" className="save-button"
                onClick={handleSubmit}>
                Save
        </Button>
        }
    
  
    </div>
  );
};

export default AddEditPost;
