import { useState } from "react";
import useModal from "../../hooks/useModal";
import "./style.css";
import Button from "../button";
import { deletePost } from "../../service/apiClient";

const DeletePostModal = ({id}) => {
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

    return (
        <>

            <section className="delete-confirmation">
                <p>Are you sure you want to delete this post?</p>
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