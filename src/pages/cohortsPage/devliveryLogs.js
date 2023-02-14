import { useEffect, useState } from "react"
import Button from "../../components/button"
import TextInput from "../../components/form/textInput"
import SearchIcon from "../../assets/icons/searchIcon"
import Card from "../../components/card"
import "./style.css";

const DeliveryLogs = () => {
    const [searchVal, setSearchVal] = useState("");

    const onChange = (e) => {
        setSearchVal(e.target.value);
      };
    return (
        <>
        <div className="edit-container">
            <section >
            <Card>
                <div className="header-section-search">
                <h2>Delivery Logs</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                    <TextInput
                        icon={<SearchIcon />}
                        value={searchVal}
                        name="Search"
                        onChange={onChange}
                        />
                </form>
                </div>
            </Card>
            </section>
            <div className="main-container">
           <section>
            <Card>
            <h2>Cohorts</h2>
            </Card>
           </section>
            <section>
               <Card>
                <section className="info-bar">
                    <div>
                        <img src="" alt="" />
                        <h4>cohort name</h4>
                        <p>dates</p>
                    </div>
                    <Button text={"Add delivery log"} classes={"offwhite"} />
                </section>
                </Card>
                <Card>
                    <section>
                        
                    </section>
                </Card>
            </section>
            </div>
            </div>
       </>
    )
}
export default DeliveryLogs;