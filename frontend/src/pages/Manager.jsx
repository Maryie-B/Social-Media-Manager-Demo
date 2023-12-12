import { useEffect } from "react";
import MyAccordion from "../components/manager/MyAccordion.jsx";
import { useParams } from "react-router-dom";
import useAllPostsStore from "../features/allPostsStore.js";

const Manager = () => {
    const { id } = useParams();

    const fetchSinglePost = useAllPostsStore((state) => state.fetchSinglePost);
    const post = useAllPostsStore((state) => state.singlePost);
    const isLoading = useAllPostsStore((state) => state.isLoading);

    useEffect(() => {
        fetchSinglePost(id);
    }, [id, fetchSinglePost]);

    if (isLoading) {
        return (
            <div className="main-container">
                <h1>LOADING...</h1>
            </div>
        );
    }

    return (
        <div className="main-container">
            <h2>{`Post #${id}`}</h2>
            <h3>{post && post.title}</h3>
            {post && <MyAccordion post={post} />}
        </div>
    );
};

export default Manager;
