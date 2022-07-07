import React, { useReducer } from "react";
import axios from "axios";

export const airpodsContext = React.createContext();

const API = "http://localhost:8010/airpods";

const INIT_STATE = {
  airpods: [],
  oneAirpods: null,
  pages: 0,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_AIRPODS":
      return {
        ...state,
        airpods: action.payload.data,
        pages: Math.ceil(action.payload.headers["x-total-count"] / 3),
      };

    case "GET_ONE_AIRPODS":
      return {
        ...state,
        oneAirpods: action.payload,
      };

    default:
      return state;
  }
}

const AirpodsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function createAirpods(newAirpods) {
    await axios.post(API, newAirpods);
  }

  async function getAirpods() {
    // console.log(`${API}${window.location.search}`);
    let res = await axios(`${API}${window.location.search}`);
    // console.log(res);
    dispatch({
      type: "GET_AIRPODS",
      payload: res,
    });
  }

  //   console.log(state.pages);
  async function deleteAirpods(id) {
    await axios.delete(`${API}/${id}`);
    getAirpods();
  }

  async function getOneAirpods(id) {
    let res = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_AIRPODS",
      payload: res.data,
    });
  }

  async function updateAirpods(id, editedProduct) {
    await axios.patch(`${API}/${id}`, editedProduct);
  }
  return (
    <airpodsContext.Provider
      value={{
        airpods: state.airpods,
        oneAirpods: state.oneAirpods,
        pages: state.pages,
        createAirpods,
        getAirpods,
        deleteAirpods,
        getOneAirpods,
        updateAirpods,
      }}>
      {children}
    </airpodsContext.Provider>
  );
};
export default AirpodsContextProvider;
