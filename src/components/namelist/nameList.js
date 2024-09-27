import { useState, useEffect } from "react";
import { get } from "../../service/apiClient";
import "./nameList.css";
import ProfileCircle from "../profileCircle";

function NameList({ inputText }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUserInfo = async () => {
      const res = await get(`users`);

      if (inputText.length > 0) {
        setUsers(
          res.data.users.filter(
            (user) =>
              user.firstName.toLowerCase().includes(inputText.toLowerCase()) ||
              user.lastName.toLowerCase().includes(inputText.toLowerCase())
          )
        );
      } else {
        setUsers(res.data.users);
      }
    };
    getUserInfo();
  }, [inputText]);

  return (
    <div>
      {users &&
        users.map((user) => {
          return (
            <section className="create-post-user-details student-view">
              <ProfileCircle
                initials={`${user.firstName.slice(0, 1)}${user.lastName.slice(
                  0,
                  1
                )}`}
              />
              <div className="post-user-name">
                <p id="userName">{`${user.firstName} ${user.lastName}`}</p>
              </div>

              <div className="edit-icon">
                <p>...</p>
              </div>
            </section>
          );
        })}
    </div>
  );
}

export default NameList;
