import ProfileCircle from "../profileCircle";
import './style.css';

const StudentCard = () => {
  // person object removed from function so app doesn't crash. Make sure ypu bring person down as a prop into this component
  // then follow instructions line 13
  //{ person } - this is the destructured person object.
  // const name = `${person.firstName} ${person.lastName}`
  // const userInitials = name.match(/\b(\w)/g)
  //when person is set up uncomment line 9, 10 and 14 and add the destructured person object into line 7.

  return (
    <li className="personCard">
      {/* <ProfileCircle initials={userInitials} hasMenu={false} />  */}
      <ProfileCircle />
      <p className="text-blue">name </p>

      <div className="edit-icon">
        <p className="text-blue1">...</p>
      </div>
    </li>

  )
}

export default StudentCard; 