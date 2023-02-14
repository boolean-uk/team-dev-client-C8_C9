import Button from "../button"
import ProfileCircle from "../profileCircle"
import useModal from "../../hooks/useModal"
import { useState } from "react"
import './style.css'

const ViewDeliveryLogModal = ({ content }) => {

    const [edit, setEdit] = useState(false);
    const [currentContent, setCurrentContent] = useState(content)
    const [editedLog, setEditedLog] = useState(currentContent)
    const { closeModal } = useModal()

    const handleEdit = () => {
        setEdit(true)
    }

    const handleChange = (event) => {

        if (edit === true) {
            const value = event.target.value
            const name = event.target.name
            const newEditedLog = value
            setEditedLog(newEditedLog)
        }
    }

    const handleSave = () => {
        console.log(editedLog)
        closeModal()
    }

    const handleCancel = () => {
        closeModal()
    }



    return (
        <>
            <section className="title">
                <h2>Delivery Log</h2>
            </section>
            <section className="cohortInfo-container">
                <ProfileCircle initials={"< >"} hasMenu={false} />
                <div>
                    <h4>cohort name</h4>
                    <p>dates</p>
                </div>
            </section>
            <section className="inputField">
                <textarea name="content" onChange={handleChange} value={editedLog}></textarea>
            </section>
            <section className="buttons">
                <Button
                    onClick={handleCancel}
                    value="cancel"
                    text='cancel'
                    classes="offwhite width-full"
                />
                <Button
                    onClick={handleEdit}
                    value="edit"
                    text='edit'
                    classes="offwhite"
                />
                <Button
                    onClick={handleSave}
                    value="save"
                    text='save'
                    classes="offwhite width-full"
                />
            </section>
        </>
    )
}

export default ViewDeliveryLogModal