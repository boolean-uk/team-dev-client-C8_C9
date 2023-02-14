import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { get } from "../../service/apiClient";

function CohortsList() {
  // TEST DATA
  const initialValues = [
    { id: 1, cohortName: "TEST Cohort 1" },
    { id: 2, cohortName: "TEST Cohort 2" },
    // { id: 3, cohortName: "Cohort 3" },
  ];

  // STATES
  const [cohortsList, setCohortsList] = useState([]);

  // GLOBAL VARIABLES
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/cohorts-teacher-view`);

    const cohortData = async () => {
      const res = await get(`cohorts`);
      //   console.log("SERVER RESPONSE: ", res.data.cohorts);
      const cohorts = res.data.cohorts;

      console.log("COHORTS: ", cohorts);
      //   console.log("Cohort name: ", cohorts.cohort.cohortName);

      setCohortsList(cohorts);

      //   console.log("After setCohortsList", cohortsList);
    };
    cohortData();
    console.log("STATE inside ", cohortsList);
  }, []);

  console.log("STATE outside ", cohortsList);

  /* {props.store.map((storeItem, index) => (
    <StoreItem
      storeItem={storeItem}
      key={index}
      addToCart={props.addToCart}
    />
  ))} */

  return (
    <>
      <h2>Cohorts </h2>
      <ul>
        {cohortsList.map((cohortItem, index) => (
          <li key={index}>
            <p>
              {cohortItem.cohort.id}: {cohortItem.cohort.cohortName}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
export default CohortsList;
