import React, { useReducer } from "react";
import axios from "axios";

export const airpodsMaxContext = React.createContext();

const API = "http://localhost:8009/airPodsMax";

const INIT_STATE = {
  airpodsMax: [],
  oneAirpodsMax: null,
  pages: 0,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_AIRPODS_MAX":
      return {
        ...state,
        airpodsMax: action.payload.data,
        pages: Math.ceil(action.payload.headers["x-total-count"] / 3),
      };

    case "GET_ONE_AIRPODS_MAX":
      return {
        ...state,
        oneAirpodsMax: action.payload,
      };

    default:
      return state;
  }
}

const AirpodsMaxContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function createAirpodsMax(newAirpods) {
    await axios.post(API, newAirpods);
  }

  async function getAirpodsMax() {
    // console.log(`${API}${window.location.search}`);
    let res = await axios(`${API}${window.location.search}`);
    // console.log(res);
    dispatch({
      type: "GET_AIRPODS_MAX",
      payload: res,
    });
  }

  //   console.log(state.pages);
  async function deleteAirpodsMax(id) {
    await axios.delete(`${API}/${id}`);
    getAirpodsMax();
  }

  async function getOneAirpodsMax(id) {
    let res = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_AIRPODS_MAX",
      payload: res.data,
    });
  }

  async function updateAirpodsMax(id, editedProduct) {
    await axios.patch(`${API}/${id}`, editedProduct);
  }
  return (
    <airpodsMaxContext.Provider
      value={{
        airpodsMax: state.airpodsMax,
        oneAirpodsMax: state.oneAirpodsMax,
        pages: state.pages,
        createAirpodsMax,
        getAirpodsMax,
        deleteAirpodsMax,
        getOneAirpodsMax,
        updateAirpodsMax,
      }}>
      {children}
    </airpodsMaxContext.Provider>
  );
};
export default AirpodsMaxContextProvider;
