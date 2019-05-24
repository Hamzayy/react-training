import React, { useRef, useContext } from "react";
import { userContext } from "./showUsers";

const UserCrud = () => {
  const userInput = useRef();
  const { users, dispatch } = useContext(userContext);

  const handleSubmit = e => {
    e.preventDefault();
    if (userInput.current.value) {
      dispatch({
        type: "add",
        name: userInput.current.value
      });
    }
    userInput.current.value = "";
  };

  return (
    <div>
      <form>
        <h2>Use Reducer Example</h2>
        <input type="text" ref={userInput} />
        <button
          className="favorite styled"
          style={{ marginLeft: "50px" }}
          type="button"
          onClick={handleSubmit}
        >
          Add user
        </button>
      </form>
      <ul>
        <h2>Users List</h2>
        {users &&
          users.map((user, index) => {
            return (
              <li key={index}>
                {user.name}
                <button
                  style={{ marginLeft: "50px" }}
                  className="favorite styled"
                  type="button"
                  onClick={() => dispatch({ type: "delete", index })}
                >
                  Delete user
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default UserCrud;
