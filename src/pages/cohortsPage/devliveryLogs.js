import { useEffect, useState } from "react"
import Button from "../../components/button"
import TextInput from "../../components/form/textInput"
import SearchIcon from "../../assets/icons/searchIcon"
import Card from "../../components/card"
import "./style.css";
import { get } from "../../service/apiClient";
import ProfileCircle from "../../components/profileCircle"
import CohortIcon from "../../assets/icons/cohortIcon"
import useModal from "../../hooks/useModal";
import ViewDeliveryLogModal from "../../components/viewDeliveryLogModal/viewDeliveryLogModal"
import { deliveryLogs } from "../../service/mockData";
import CreateDeliveryLog from "../../components/createDeliveryLogModal"

const DeliveryLogs = () => {
    const [searchVal, setSearchVal] = useState("");
    const [logsList, setLogsList] = useState(deliveryLogs);
    const { openModal, setModal } = useModal();

    const onChange = (e) => {
        setSearchVal(e.target.value);
    };
    const OpenContentLogModal = () => {
        // event.preventDefault()
        const content = document.getElementById('content').textContent
        console.log("2.", content)
        setModal(<ViewDeliveryLogModal content={content} />)
        openModal()
    }
    const OpenAddLogModal = () => {

        setModal(<CreateDeliveryLog />)
        openModal()
    }


    useEffect(() => {
        const logsData = async () => {
            const res = await get(`log/${1}`);
            //   console.log("SERVER RESPONSE: ", res);
            // const logs = res.data.logs;    
            // setLogsList(logs);           
        };
        logsData();
        
    }, []);
    console.log("1.", deliveryLogs)

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
                                <div className="cohortInfo-container">
                                    <ProfileCircle initials={"< >"} hasMenu={false} />
                                    <div>
                                        <h4>cohort name</h4>
                                        <p>dates</p>
                                    </div>
                                </div>
                                <Button text={"Add delivery log"} onClick={OpenAddLogModal} classes={"offwhite width-full"} />
                            </section>
                        </Card>
                        <Card>
                            <section className="deliverylogs-container">
                                {logsList.map((log, index) => (
                                    <li onClick={OpenContentLogModal} className="delivery-log-item" key={index}>
                                        <p>{log.date}</p>
                                        <h4>{log.title}</h4>
                                        {log.lines.map((content, index) => (
                                            <p key={index} id="content">{content.content}</p>
                                        ))}
                                    </li>
                                ))}
                            </section>
                        </Card>
                    </section>
                </div>
            </div>
        </>
    )
}
export default DeliveryLogs;