import React, { useReducer } from "react";
import axios from "axios";

export const iphone13ProContext = React.createContext();

const API = "http://localhost:8006/iphone13Pro";

const INIT_STATE = {
  iphone13Pro: [],
  oneIphone13Pro: null,
  pages: 0,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_IPHONE_13_PRO":
      return {
        ...state,
        iphone13Pro: action.payload.data,
        pages: Math.ceil(action.payload.headers["x-total-count"] / 3),
      };

    case "GET_ONE_IPHONE_13_PRO":
      return {
        ...state,
        oneIphone13Pro: action.payload,
      };

    default:
      return state;
  }
}

const Iphone13ProContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function createIphone13Pro(newAir) {
    await axios.post(API, newAir);
  }

  async function getIphone13Pro() {
    // console.log(`${API}${window.location.search}`);
    let res = await axios(`${API}${window.location.search}`);
    // console.log(res);
    dispatch({
      type: "GET_IPHONE_13_PRO",
      payload: res,
    });
  }

  //   console.log(state.pages);
  async function deleteIphone13Pro(id) {
    await axios.delete(`${API}/${id}`);
    getIphone13Pro();
  }

  async function getOneIphone13Pro(id) {
    let res = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_IPHONE_13_PRO",
      payload: res.data,
    });
  }

  async function updateIphone13Pro(id, editedProduct) {
    await axios.patch(`${API}/${id}`, editedProduct);
  }
  return (
    <iphone13ProContext.Provider
      value={{
        iphone13Pro: state.iphone13Pro,
        oneIphone13Pro: state.oneIphone13Pro,
        pages: state.pages,
        createIphone13Pro,
        getIphone13Pro,
        deleteIphone13Pro,
        getOneIphone13Pro,
        updateIphone13Pro,
      }}>
      {children}
    </iphone13ProContext.Provider>
  );
};
export default Iphone13ProContextProvider;
