import ProfileCircle from "../profileCircle";
import './style.css';

const TeacherCard = () => {
    return (
        <li>
            <div className="teachers">
                <div className="profile-circle">
                    <ProfileCircle />
                </div>

                <div className="teacher-inf">
                    <p className="text-blue"> Teacher name</p>

                    <p className="text-blue1"> Teacher specialist</p>
                </div>

                <div className="edit-icon">
                    <p className="text-blue1">...</p>
                </div>
            </div>
        </li>

    )
}
export default TeacherCard;