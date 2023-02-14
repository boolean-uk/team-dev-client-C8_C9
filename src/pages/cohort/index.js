import CohortStudent from "../../components/cohortStudent"
import useAuth from "../../hooks/useAuth"
import CohortsTeacherView from "../CohortsTeacherView"

const Cohorts = () => {

    const { loggedInUserInfo } = useAuth()

    return (
        <>
        {loggedInUserInfo.role==="STUDENT" ?
            <CohortStudent />
        :
            <CohortsTeacherView />
        }
        </>
    )
}

export default Cohorts