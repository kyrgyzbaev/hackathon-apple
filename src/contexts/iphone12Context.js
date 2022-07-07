import React, { useReducer } from "react";
import axios from "axios";

export const iphone12Context = React.createContext();

const API = "http://localhost:8008/iphone12";

const INIT_STATE = {
  iphone12: [],
  oneIphone12: null,
  pages: 0,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_IPHONE_12":
      return {
        ...state,
        iphone12: action.payload.data,
        pages: Math.ceil(action.payload.headers["x-total-count"] / 3),
      };

    case "GET_ONE_IPHONE_12":
      return {
        ...state,
        oneIphone12: action.payload,
      };

    default:
      return state;
  }
}

const Iphone12ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function createIphone12(newIphone) {
    await axios.post(API, newIphone);
  }

  async function getIphone12() {
    // console.log(`${API}${window.location.search}`);
    let res = await axios(`${API}${window.location.search}`);
    // console.log(res);
    dispatch({
      type: "GET_IPHONE_12",
      payload: res,
    });
  }

  //   console.log(state.pages);
  async function deleteIphone12(id) {
    await axios.delete(`${API}/${id}`);
    getIphone12();
  }

  async function getOneIphone12(id) {
    let res = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_IPHONE_12",
      payload: res.data,
    });
  }

  async function updateIphone12(id, editedProduct) {
    await axios.patch(`${API}/${id}`, editedProduct);
  }
  return (
    <iphone12Context.Provider
      value={{
        iphone12: state.iphone12,
        oneIphone12: state.oneIphone12,
        pages: state.pages,
        createIphone12,
        getIphone12,
        deleteIphone12,
        getOneIphone12,
        updateIphone12,
      }}>
      {children}
    </iphone12Context.Provider>
  );
};
export default Iphone12ContextProvider;
