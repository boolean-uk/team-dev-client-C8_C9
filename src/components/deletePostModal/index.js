import { useState } from "react";
import useModal from "../../hooks/useModal";
import "./style.css";
import Button from "../button";
import { deletePost } from "../../service/apiClient";

const DeletePostModal = ({id, userFirstName, userLastName}) => {
    const { closeModal } = useModal()
    const [message, setMessage] = useState(null)
    const [isError, setIsError ] = useState(false)

    async function onConfirm ()
    {
        const deleteResult = await deletePost(id)
        if(deleteResult.status === "fail"){
            setIsError(true)
            setMessage('Error : ' + deleteResult.message)
        }
        else{
            setIsError(false)
            setMessage('Delete successfull! Closing modal in 2 seconds...')
        }

        setTimeout(() => {
            setMessage(null)
            closeModal()
        }, 2000)
    }

    const name = `${userFirstName} ${userLastName}`;
    const initials = name
      .match(/(\b\S)?/g)
      .join("")
      .match(/(^\S|\S$)?/g)
      .join("")
      .toUpperCase();

    return (
        <>
            <section className="create-post-user-details">
                <div className="profile-icon">
                    <p>{initials}</p>
                </div>
                <div className="post-user-name">
                    <p>{name}</p>
                </div>
            </section>

            <section>
                <p>Warning : You're about to delete this post. This action cannot be undone. Do you wish to continue?</p>
            </section>

            <section className="create-post-actions">
                <Button
                    onClick={onConfirm}
                    text='Yes'
                />
                <Button
                    onClick={closeModal}
                    text='No'
                />
            </section>

            {message && <p className={isError ? 'error' : 'success'}>{message}</p>}
        </>
    )
}

export default DeletePostModal