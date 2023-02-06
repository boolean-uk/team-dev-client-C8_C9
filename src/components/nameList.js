import { useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";

function nameList() {
  //const { users, setUsers } = props();
  const { token } = useAuth();

  const options = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };
  fetch(`http://localhost:4000/users`, options)
    .then((res) => res.json())
    .then((data) => console.log("data", data));
}

const persons = [
  {
    firstName: "Bruce",
    lastName: "React",
  },
  {
    firstName: "Mary",
    lastName: "React",
  },
  {
    firstName: "Luke",
    lastName: "Flegg",
  },
  {
    firstName: "Paul",
    lastName: "Martin",
  },
  {
    firstName: "georgie",
    lastName: "Martin",
  },
];
const personList = persons.map((person) => {
  <p>
    {person.firstName}
    {person.lastName}
  </p>;
  return <div>{personList}</div>;
});

export default nameList;
