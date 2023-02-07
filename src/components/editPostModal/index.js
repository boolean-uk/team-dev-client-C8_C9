import { useState } from "react"
import useModal from "../../hooks/useModal"
import './style.css'
import Button from '../button'
import { updatePost } from "../../service/apiClient"

const EditPostModal = ({content, id, setContent}) => {
    const { closeModal } = useModal()
    const [message, setMessage] = useState(null)
    const [text, setText] = useState(content)


    const onChange = (e) => {
        setText(e.target.value)
    }

    async function onSubmit ()  {
        setMessage('Submit button was clicked! Closing modal in 2 seconds...')
        let test = await updatePost(id, text)
        if(test.status == "fail"){
            console.log(test.message);
            alert(test.message)
        }
        else
            setContent(text)
        setTimeout(() => {
            setMessage(null)
            closeModal()
        }, 2000)
    }

    return (
        <>
            <section className="create-post-user-details">
                <div className="profile-icon"><p>AJ</p></div>
                <div className="post-user-name"><p>Alex J</p></div>
            </section>

            <section>
                <textarea onChange={onChange} value={text} placeholder="Edit your post"></textarea>
            </section>

            <section className="create-post-actions">
                <Button
                    onClick={onSubmit}
                    text='Post'
                    classes={`${text.length ? 'blue' : 'offwhite' } width-full`}
                    disabled={!text.length}
                />
            </section>

            {message && <p>{message}</p>}
        </>
    )
}

export default EditPostModal