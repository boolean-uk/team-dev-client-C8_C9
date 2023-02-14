import ProfileCircle from "../profileCircle";
import './style.css';

const CohortTitleCard = ({ info }) => {

    const start = info.startDate.split('T')[0].split('-').reverse().join("-")
    const end = info.endDate.split('T')[0].split('-').reverse().join("-")

    return (
        <div className="titleCard border-bottom">
            <div className="profileCircle ">
                <ProfileCircle initials={"< >"}/>
            </div>

            <div className="cohort-inf ">
                <p className="text-blue"> Cohort name, Cohort ID </p>

                <p className="text-blue1 ">Start: {start} - End: {end}</p>
            </div>             
        </div>
    )
}
export default CohortTitleCard;