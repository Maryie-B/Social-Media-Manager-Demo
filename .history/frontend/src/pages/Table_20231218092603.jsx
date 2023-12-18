import { useEffect } from "react";
import List from "../components/table/List.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import useAllPostsStore from "../features/allPostsStore.js";

const Table = () => {
    const fetchPosts = useAllPostsStore((state) => state.fetchPosts);

    useEffect(() => {
        fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Container fluid className="main-container">
            <Row className="table-header">
                <Col xl={9} lg={8} md={8} sm={6} xs={6}>Articles</Col>
                <Col xl={3} lg={4} md={4} sm={6} xs={6}>Actions</Col>
            </Row>
            <List/>
        </Container>
    );
};

export default Table;
