import React, { useReducer } from "react";
import axios from "axios";

export const macProContext = React.createContext();

const API = "http://localhost:8005/macPro";

const INIT_STATE = {
  macPro: [],
  oneMacPro: null,
  pages: 0,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_MAC_PRO":
      return {
        ...state,
        macPro: action.payload.data,
        pages: Math.ceil(action.payload.headers["x-total-count"] / 3),
      };

    case "GET_ONE_MAC_PRO":
      return {
        ...state,
        oneMac: action.payload,
      };

    default:
      return state;
  }
}

const MacProContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function createMacPro(newMacPro) {
    await axios.post(API, newMacPro);
  }

  async function getMacPro() {
    // console.log(`${API}${window.location.search}`);
    let res = await axios(`${API}${window.location.search}`);
    // console.log(res);
    dispatch({
      type: "GET_MAC_PRO",
      payload: res,
    });
  }

  //   console.log(state.pages);
  async function deleteMacPro(id) {
    await axios.delete(`${API}/${id}`);
    getMacPro();
  }

  async function getOneMacPro(id) {
    let res = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_MAC_PRO",
      payload: res.data,
    });
  }

  async function updateMacPro(id, editedMacPro) {
    await axios.patch(`${API}/${id}`, editedMacPro);
  }

  return (
    <macProContext.Provider
      value={{
        macPro: state.macPro,
        oneMacPro: state.oneMac,
        pages: state.pages,
        createMacPro,
        getMacPro,
        deleteMacPro,
        getOneMacPro,
        updateMacPro,
      }}>
      {children}
    </macProContext.Provider>
  );
};
export default MacProContextProvider;
