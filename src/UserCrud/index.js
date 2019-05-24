import React from "react";
import { userContext } from "./showUsers";
import { produce } from "immer";
import UserCrud from "./CrudScreen";

function useImmerReducer(reducer, initialState) {
  return React.useReducer(produce(reducer), initialState);
}

const userReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          name: action.name
        }
      ];
    case "delete":
      return state.filter((element, index) => index !== action.index);
    default:
      throw new Error();
  }
};

const UserDemo = () => {
  const [users, dispatch] = useImmerReducer(userReducer, []);
  return (
    <div>
      <userContext.Provider value={{ users, dispatch }}>
        <UserCrud />
      </userContext.Provider>
    </div>
  );
};

export default UserDemo