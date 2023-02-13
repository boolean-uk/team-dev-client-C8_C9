import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { get } from "../../service/apiClient";

function CohortsList() {
  // STATES

  // GLOBAL VARIABLES
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/cohorts-teacher-view`);

    const cohortData = async () => {
      const res = await get(`cohorts`);
      console.log(res.data.cohorts);
    };
    cohortData();
  }, [navigate]);
  return (
    <>
      <h2>Cohorts </h2>
    </>
  );
}
export default CohortsList;
