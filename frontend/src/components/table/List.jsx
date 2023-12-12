import Item from "./Item.jsx";
import useAllPostsStore from "../../features/allPostsStore.js";


const List = () => {
    const posts = useAllPostsStore((state) => state.posts);

    if (!posts) {
        return <h1>LOADING...</h1>
    }


    return (
        <div className="list">
            {posts.map((data) => (
                <Item key={data.id} data={data}/>
            ))}
        </div>
    );
};

export default List;
