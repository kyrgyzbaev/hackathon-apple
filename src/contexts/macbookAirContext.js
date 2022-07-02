import React, { useReducer } from "react";
import axios from "axios";

export const macbookAirContext = React.createContext();

const API = "http://localhost:8004/macbookAir";

const INIT_STATE = {
  airs: [],
  oneAir: null,
  pages: 0,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_AIRS":
      return {
        ...state,
        airs: action.payload.data,
        pages: Math.ceil(action.payload.headers["x-total-count"] / 3),
      };

    case "GET_ONE_AIR":
      return {
        ...state,
        oneAir: action.payload,
      };

    default:
      return state;
  }
}

const MacbookAirContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function createAir(newAir) {
    await axios.post(API, newAir);
  }

  async function getAirs() {
    // console.log(`${API}${window.location.search}`);
    let res = await axios(`${API}${window.location.search}`);
    // console.log(res);
    dispatch({
      type: "GET_AIRS",
      payload: res,
    });
  }

  //   console.log(state.pages);
  async function deleteAir(id) {
    await axios.delete(`${API}/${id}`);
    getAirs();
  }

  async function getOneAir(id) {
    let res = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_AIR",
      payload: res.data,
    });
  }

  async function updateAir(id, editedProduct) {
    await axios.patch(`${API}/${id}`, editedProduct);
  }
  return (
    <macbookAirContext.Provider
      value={{
        airs: state.airs,
        oneAir: state.oneAir,
        pages: state.pages,
        createAir,
        getAirs,
        deleteAir,
        getOneAir,
        updateAir,
      }}>
      {children}
    </macbookAirContext.Provider>
  );
};
export default MacbookAirContextProvider;
