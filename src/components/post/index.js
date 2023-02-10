import LikeIcon from "../../assets/icons/likeIcon"
import CommentIcon from "../../assets/icons/commentIcon"
import useModal from "../../hooks/useModal"
import { useState, useRef } from "react"
import Card from "../card"
import Comment from "../comment"
import EditPostModal from "../editPostModal"
import DeletePostModal from "../deletePostModal"
import ProfileCircle from "../profileCircle"
import "./style.css"

const Post = ({ name, date, content, comments = [], id, likes = 0 }) => {
    const { openModal, setModal } = useModal()
    const [postContent, setContent] = useState(content)
    const [isMenuVisible, setIsMenuVisible] = useState(false)
    const menuRef = useRef(null)

    const userInitials = name.match(/\b(\w)/g)

    const [isLiked, setIsLiked] = useState(false)

    const showEditModal = () => {
        setModal('Edit post', <EditPostModal content={content} id={id} setContent={setContent}/>)
        openModal()
    }
    const showDeleteModal = () => {
        setModal('Edit post', <DeletePostModal content={content} id={id} setContent={setContent}/>)
        openModal()
    }

    const showMenu = () => {
        setIsMenuVisible(true);
    }

    return (
        <Card>
            <article className="post">
                <section className="post-details">
                    <ProfileCircle initials={userInitials} />

                    <div className="post-user-name">
                        <p>{name}</p>
                        <small>{date}</small>
                    </div>

                    <div className="edit-icon">
                        <p onClick={showMenu}>...</p>
                    </div>
                    {isMenuVisible &&
                        <div>
                            <Card>
                                <section>
                                    <ul>
                                        <li><button onClick={showEditModal}>Edit</button></li>
                                        <li><button onClick={showDeleteModal}>Delete</button></li>
                                    </ul>
                                </section>
                            </Card>
                        </div>


                    }
                </section>

                <section className="post-content">
                    <p>{postContent}</p>
                </section>

                <section className={`post-interactions-container border-top 
                `

                }>
                    <div id="likeButton" className="post-interactions">
                        <div className="onHover">
                            <button className= {isLiked.toString()}
                                onClick={() => {
                                    setIsLiked(!isLiked)
                                }}>
                                <LikeIcon isLiked={isLiked}/>
                                <p>Like</p>
                            </button>
                        </div>
                        <div className="onHover">
                            <button id="commentButton" className="postButton"

                                onClick={() => {
                                    //TODO: click event
                                }}>
                                <CommentIcon />
                                <p>Comment</p>
                            </button>
                        </div>
                    </div>

                    <p>{!likes && 'Be the first to like this' || likes}</p>

                </section>

                <section>
                    {comments.map(comment => <Comment key={comment.id} name={comment.name} content={comment.content} />)}
                </section>
            </article>
        </Card >
    )
}

export default Post