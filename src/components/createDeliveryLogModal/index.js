import Button from "../button"
import ProfileCircle from "../profileCircle"
import useModal from "../../hooks/useModal"
import { useState } from "react"
import { post } from "../../service/apiClient";
// import './style.css'

const CreateDeliveryLog = ({cohortData}) => {
    const [content, setContent] = useState("")
    const [log, setLog] = useState([])
    const handleChange = (event) => {
        const value = event.target.value
        const name = event.target.name
        setContent(value)
        console.log("1. value", value)
       
    }
    const handleSave = () => {
        const curentDate = new Date().toLocaleString() + ""
        const data = {
            // cohort_Id: cohortData.cohort_Id,
            date: curentDate
        }
        console.log(data)
        // const endpoint = `logs`
        // post(endpoint, data)
        
    }

    return (
        <>
            <section className="title">
                <h2>Delivery Log</h2>
                
            </section>
            <section className="data">
                <ProfileCircle initials={"< >"} hasMenu={false} />
                
                <h4>cohort name</h4>
                <p>dates</p>
            </section>
            <section className="inputField">
                <textarea name="log" onChange={handleChange}></textarea>
            </section>
            <section className="buttons">  
                <Button
                    // onClick={}
                    value="cancel"
                    text='cancel'
                    classes="offwhite width-full"
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
export default CreateDeliveryLog;