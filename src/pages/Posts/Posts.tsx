import Post from "@components/Post/Post"

const Posts = () => {
    const textBody = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius morbi enim nunc faucibus a pellentesque sit amet."

    return (
        <div className="bg-[#191919] flex flex-col items-center pt-32" style={{"height": "100vh"}}>
            <Post title="Hello Floof!" username="@fwuffyboi" body={textBody} />
        </div>
    )
}

export default Posts;