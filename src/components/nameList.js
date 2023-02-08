import { useState, useEffect } from "react";
import ProfileCircle from "./profileCircle";
import { get } from "../service/apiClient";

function NameList() {
  const [users, setUsers] = useState([]);
  console.log(users[0]);

  useEffect(() => {
    const getUserInfo = async () => {
      const res = await get(`users`);
      setUsers([...users, res.data.users]);
    };
    getUserInfo();
  }, [users]);
  let initials = "";
  return (
    <div>
      {users[0] &&
        users[0].map((user) => {
          {
            const name = `${user.firstName} ${user.lastName}`;
            initials = name
              .match(/(\b\S)?/g)
              .join("")
              .match(/(^\S|\S$)?/g)
              .join("")
              .toUpperCase();
          }
          return (
            <section className="create-post-user-details">
              <div className="profile-icon">
                <p>{initials}</p>
              </div>
              <div className="post-user-name">
                <p>{`${user.firstName} ${user.lastName}`}</p>
              </div>
              <span>
                <div className="edit-icon">
                  <p>...</p>
                </div>
              </span>
            </section>
          );
        })}
    </div>
  );
}

export default NameList;
