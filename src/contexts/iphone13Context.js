import React, { useReducer } from "react";
import axios from "axios";

export const iphone13Context = React.createContext();

const API = "http://localhost:8007/iphone13";

const INIT_STATE = {
  iphone13: [],
  oneIphone13: null,
  pages: 0,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_IPHONE_13":
      return {
        ...state,
        iphone13: action.payload.data,
        pages: Math.ceil(action.payload.headers["x-total-count"] / 3),
      };

    case "GET_ONE_IPHONE_13":
      return {
        ...state,
        oneIphone13: action.payload,
      };

    default:
      return state;
  }
}

const Iphone13ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function createIphone13(newIphone) {
    await axios.post(API, newIphone);
  }

  async function getIphone13() {
    // console.log(`${API}${window.location.search}`);
    let res = await axios(`${API}${window.location.search}`);
    // console.log(res);
    dispatch({
      type: "GET_IPHONE_13",
      payload: res,
    });
  }

  //   console.log(state.pages);
  async function deleteIphone13(id) {
    await axios.delete(`${API}/${id}`);
    getIphone13();
  }

  async function getOneIphone13(id) {
    let res = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_IPHONE_13",
      payload: res.data,
    });
  }

  async function updateIphone13(id, editedProduct) {
    await axios.patch(`${API}/${id}`, editedProduct);
  }
  return (
    <iphone13Context.Provider
      value={{
        iphone13: state.iphone13,
        oneIphone13: state.oneIphone13,
        pages: state.pages,
        createIphone13,
        getIphone13,
        deleteIphone13,
        getOneIphone13,
        updateIphone13,
      }}>
      {children}
    </iphone13Context.Provider>
  );
};
export default Iphone13ContextProvider;
