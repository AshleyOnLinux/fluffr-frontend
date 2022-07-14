interface postData {
    /**
     * Post Title
     */
    title: string;
    /**
     * Post Body
     */
    body: string;
    /**
     * Post author's username
     */
    username: string;
}

const Post = ( post: postData ) => {

    return (
        <div className=" bg-[#4D4D4D] p-4 rounded-md" style={{
            "width": "90%",
        }}>
            <h1 className="text-6xl text-white pb-2">{post.title}</h1>
            <h3 className="text-xl text-[#bdbdbd] pb-2">{post.username}</h3>
            <hr />
            <p className="text-3xl text-white pt-2">{post.body}</p>
        </div>
    );
}

export default Post;