import { NavLink } from "react-router-dom";
import CohortIcon from "../../assets/icons/cohortIcon";
import HomeIcon from "../../assets/icons/homeIcon";
import ProfileIcon from "../../assets/icons/profileIcon";
import useAuth from "../../hooks/useAuth";
import "./style.css";

const Navigation = () => {
  const { token, loggedInUserInfo } = useAuth();

  if (!token) {
    return null;
  }

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">
            <HomeIcon colour="#000046" />
            <p>Home</p>
          </NavLink>
        </li>
        <li>
          <NavLink to={`/profile/${loggedInUserInfo.id}`}>
            <ProfileIcon />
            <p>Profile</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/cohorts">
            <CohortIcon />
            <p>Cohort</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
