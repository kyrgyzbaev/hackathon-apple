import React, { useReducer } from "react";
import axios from "axios";

export const macsContext = React.createContext();

const API = "http://localhost:8003/mac";
const API2 = "http://localhost:8004/adverstingPicture";

const INIT_STATE = {
  macs: [],
  oneMac: null,
  pages: 0,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_MACS":
      return {
        ...state,
        macs: action.payload.data,
        pages: Math.ceil(action.payload.headers["x-total-count"] / 3),
      };

    case "GET_ONE_MAC":
      return {
        ...state,
        oneMac: action.payload,
      };

    default:
      return state;
  }
}

const MacsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function createMac(newMac) {
    await axios.post(API, newMac);
  }

  async function getMacs() {
    // console.log(`${API}${window.location.search}`);
    let res = await axios(`${API}${window.location.search}`);
    // console.log(res);
    dispatch({
      type: "GET_MACS",
      payload: res,
    });
  }

  //   console.log(state.pages);
  async function deleteMac(id) {
    await axios.delete(`${API}/${id}`);
    getMacs();
  }

  async function getOneMac(id) {
    let res = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_MAC",
      payload: res.data,
    });
  }

  async function updateMac(id, editedProduct) {
    await axios.patch(`${API}/${id}`, editedProduct);
  }
  return (
    <macsContext.Provider
      value={{
        macs: state.macs,
        advertisingPicture: state.advertisingPicture,
        oneMac: state.oneMac,
        onePicture: state.onePicture,
        pages: state.pages,
        pagesPicture: state.pagesPicture,
        createMac,
        getMacs,
        deleteMac,
        getOneMac,
        updateMac,
      }}>
      {children}
    </macsContext.Provider>
  );
};
export default MacsContextProvider;
