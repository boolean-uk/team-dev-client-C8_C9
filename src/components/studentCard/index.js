import { useState } from "react";
import ProfileCircle from "../profileCircle";
import CascadingMenu from "../cascadingMenu";
import './style.css';

const StudentCard = ({ person }) => {
  
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const name = `${person.firstName} ${person.lastName}`
  const userInitials = name.match(/\b(\w)/g)

  const handleClick = () => {
    setIsMenuVisible(true)
  }

  return (
    <li className="personCard">
      <ProfileCircle initials={userInitials} hasMenu={false} /> 
      <p className="text-blue">{name}</p>

      <div className="edit-icon">
        <p className="text-blue1" onClick={handleClick}>...</p>
        {isMenuVisible && <CascadingMenu name={'cohortCCMenu'} setIsMenuVisible={setIsMenuVisible} />}
      </div>
    </li>

  )
}

export default StudentCard; 