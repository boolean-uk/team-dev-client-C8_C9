import ProfileCircle from "../profileCircle";
import './style.css';

const StudentCard = ({ person }) => {
  
  const name = `${person.firstName} ${person.lastName}`
  const userInitials = name.match(/\b(\w)/g)

  return (
    <li className="personCard">
      <ProfileCircle initials={userInitials} hasMenu={false} /> 
      <p className="text-blue">{name}</p>

      <div className="edit-icon">
        <p className="text-blue1">...</p>
      </div>
    </li>

  )
}

export default StudentCard; 