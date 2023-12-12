import React from 'react';
import DatePicker from 'react-datepicker';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendar} from "@fortawesome/free-solid-svg-icons";

const Post = () => {
    const [startDate, setStartDate] = React.useState(null);

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col lg={3} md={3} sm={3} className="date-picker">
                    <DatePicker autofocus="false"
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                placeholderText="Schedule"
                                className="post-datepicker"
                    />
                    <span className="calendar-icon">
                    <FontAwesomeIcon icon={faCalendar} />
                </span>
                </Col>
                <Col md="auto">
                    <div className="post-divider"></div>
                </Col>
                <Col lg={2} md={2} sm={2} className="date-picker">
                    <Button variant="primary" id="post-btn" className="fuck-you">Publish</Button>
                </Col>
            </Row>
        </Container>
    );


};

export default Post;
