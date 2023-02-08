import { useState } from "react";
import Card from "../../components/card";
import TextInput from "../../components/form/textInput";
import SearchIcon from "../../assets/icons/searchIcon";
import ProfileCircle from "../../components/profileCircle";
import "./style.css";

const Search = () => {
  const [searchVal, setSearchVal] = useState("");
  return (
    <>
      <main>
        <Card>
          <form>
            <TextInput icon={<SearchIcon />} value={searchVal} name="Search" />
          </form>
        </Card>
        <Card>
          <p className="people"> People</p>
          <div className="allCard">
            <ul>
              <li className="personCard">
                <ProfileCircle />
                <div className="nameCohort">
                  <p className="text-blue"> First Name Last Name </p>
                  <p className="text-blue1">Cohort info</p>
                </div>
                <button className="profile">
                  <p className="text-blue1">Profile</p>
                </button>

                <div className="edit-icon">
                  <p className="text-blue1">...</p>
                </div>
              </li>

              <li className="personCard">
                <ProfileCircle />
                <div className="nameCohort">
                  <p className="text-blue"> First Name Last Name </p>
                  <p className="text-blue1">Cohort info</p>
                </div>
                <button className="profile">
                  <p className="text-blue1">Profile</p>
                </button>
                <div className="edit-icon">
                  <p className="text-blue1">...</p>
                </div>
              </li>

              <li className="personCard">
                <ProfileCircle />
                <div className="nameCohort">
                  <p className="text-blue"> First Name Last Name </p>
                  <p  className="text-blue1">Cohort info</p>
                </div>
                <button className="profile">
                  <p className="text-blue1">Profile</p>
                </button>
                <div className="edit-icon">
                  <p className="text-blue1">...</p>
                </div>
              </li>
            </ul>
          </div>
        </Card>
      </main>
    </>
  );
};
export default Search;
