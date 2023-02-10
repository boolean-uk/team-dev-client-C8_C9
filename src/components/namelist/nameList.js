import { useState, useEffect } from "react";
import { get } from "../../service/apiClient";
import "./nameList.css";
import ProfileCircle from "../profileCircle";

function NameList(inputText) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUserInfo = async () => {
      const res = await get(`users`);
      setUsers(res.data.users);
    };
    getUserInfo();
  }, []);

  //    {
  //     users.map((user) => {
  //       const userInitials =
  //         user.firstName.match(/\b(\w)/g) + user.lastName.match(/\b(\w)/g);

  //       return (
  //         <section className="create-post-user-details student-view">
  //           <ProfileCircle initials={userInitials} />
  //           <p>
  //             {user.firstName}
  //             {user.lastName}
  //           </p>
  //           <div className="edit-icon">
  //             <p>...</p>
  //           </div>
  //         </section>
  //       );
  //     });
  //   }
  // }

  //

  return (
    <div>
      {users &&
        users.map((user) => {
          {
            const name = `${user.firstName} ${user.lastName}`;
            const initials = name
              .match(/(\b\S)?/g)
              .join("")
              .match(/(^\S|\S$)?/g)
              .join("")
              .toUpperCase();
          }

          return (
            <section className="create-post-user-details student-view">
              <div className="profile-icon">
                <p>
                  {user.firstName.slice(0, 1)}
                  {user.lastName.slice(0, 1)}
                </p>
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
