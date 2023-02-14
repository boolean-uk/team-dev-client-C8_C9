import ProfileCircle from "../profileCircle";
import './style.css';

const CohortTitleCard = () => {
    return (
        <div>
            <h3 className="text-blue border-bottom"> My cohort</h3>

            <div className="titleCard">
                <div className="profileCircle ">
                    <ProfileCircle />
                </div>

                <div className="cohort-inf ">
                    <p className="text-blue"> Cohort name, Cohort ID </p>

                    <p className="text-blue1 ">Cohort Date</p>
                </div>             
            </div>

        </div>
    )
}
export default CohortTitleCard;