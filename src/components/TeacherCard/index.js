import ProfileCircle from "../profileCircle";
import './style.css';

const TeacherCard = ({ person }) => {

    const name = `${person.firstName} ${person.lastName}`
    const userInitials = name.match(/\b(\w)/g)

    return (
        <li>
            <div className="teachers">
                <div className="profile-circle">
                    <ProfileCircle initials={userInitials}/>
                </div>

                <div className="teacher-inf">
                    <p className="text-blue"> {name} </p>

                    <p className="text-blue1"> Teacher specialist </p>
                </div>

                <div className="edit-icon">
                    <p className="text-blue1">...</p>
                </div>
            </div>
        </li>

    )
}
export default TeacherCard;