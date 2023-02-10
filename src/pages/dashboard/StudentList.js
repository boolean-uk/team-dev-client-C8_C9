import { useEffect, useState } from "react";
import CascadingMenu from "../../components/cascadingMenu";
import ProfileCircle from "../../components/profileCircle";
import { get } from "../../service/apiClient";
// import nameList from "placeholder"
import "./style.css";


const StudentList = () => {
    const [students, setStudents] = useState([])

    useEffect(() => {
        const getUserInfo = async () => {
            const res = await get("users?role=STUDENT");
            setStudents(res.data.users);
        };
        getUserInfo();
    }, []);

    console.log("Students", students)

    return (
        <>
            {/* <NameList />  */}
            {students.map(student => {
                const userInitials = student.firstName.match(/\b(\w)/g) + student.lastName.match(/\b(\w)/g)

                return (
                    <section className="create-post-user-details lists-teacher-view">

                        <ProfileCircle initials={userInitials} />
                        <p className="list-user-name"> {student.firstName} {student.lastName}</p>
                        <div className="edit-icon">
                            <p>...</p>
                            {/* <CascadingMenu /> */}
                        </div>
                    </section>
                )
            })}

            <button className="see-all-students-button">All Students</button>

        </>
    )
}

export default StudentList