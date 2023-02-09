import { useState, useEffect } from "react";
import { get } from "../../service/apiClient";
import "./nameList.css";
function NameList(inputText) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUserInfo = async () => {
      const res = await get(`users`);
      setUsers([...users, res.data.users]);
    };
    getUserInfo();
  }, []);
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

            console.log(users);
          }
          return (
            <section className="create-post-user-details" id="HI">
              <div className="profile-icon">
                <p>{initials}</p>
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
