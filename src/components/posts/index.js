import { useEffect, useState } from "react";
import Post from "../post";
import { getPosts } from "../../service/apiClient";

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [isRerender, setIsRerender] = useState(false)
    let setTimeFormat = ''
    useEffect(() => {
        
        getPosts().then(setPosts)
    }, [isRerender])

    return (
        <>
            {posts.map(post => {
                { setTimeFormat = new Date(post.createdAt).toString().substring(0,21)}
                    return <Post
                        key={post.id}
                        name={`${post.author.profile.firstName} ${post.author.profile.lastName}`}
                        date={setTimeFormat}
                        content={post.content}
                        comments={post.comments}
                        id={post.id}
                        setIsRerender={setIsRerender}
                    />
            })}
        </>
    )
}

export default Posts