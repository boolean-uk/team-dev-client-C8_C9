import CohortStudent from "../../components/cohortStudent"
import useAuth from "../../hooks/useAuth"

const Cohorts = () => {

    const { loggedInUserInfo } = useAuth()

    return (
        <>
        {loggedInUserInfo.role==="STUDENT" ?
            <CohortStudent />
        :
        // REPLACE THIS WITH TEACHER VIEW
            <div>Teacher</div>
        }
        </>
    )
}

export default Cohorts