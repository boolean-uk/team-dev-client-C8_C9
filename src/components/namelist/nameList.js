import { useState, useEffect } from "react";
import { get } from "../../service/apiClient";
import "./nameList.css";
function NameList(inputText) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUserInfo = async () => {
      const res = await get(`users`);
      setUsers(res.data.users);
    };
    getUserInfo();
  }, []);

  return (
    <div>
      {users &&
        users.map((user) => {
          {
            const name = `${user.firstName} ${user.lastName}`;
            let initials = "";
            initials = name
              .match(/(\b\S)?/g)
              .join("")
              .match(/(^\S|\S$)?/g)
              .join("")
              .toUpperCase();

            console.log(users);
          }
          return (
            <section className="create-post-user-details" id="HI">
              <div className="profile-icon">
                <p>{name}</p>
              </div>
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
