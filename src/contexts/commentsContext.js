import React, { useReducer } from "react";
import axios from "axios";

export const commentsContext = React.createContext();

const API = "http://localhost:8011/comments";

const INIT_STATE = {
  comments: [],
  oneComments: null,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_COMMENTS":
      return {
        ...state,
        comments: action.payload.data,
      };

    case "GET_ONE_COMMENTS":
      return {
        ...state,
        oneComments: action.payload,
      };

    default:
      return state;
  }
}

const CommentsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function createComments(newComments) {
    await axios.post(API, newComments);
  }

  async function getComments() {
    // console.log(`${API}${window.location.search}`);
    let res = await axios(`${API}${window.location.search}`);
    // console.log(res);
    dispatch({
      type: "GET_COMMENTS",
      payload: res,
    });
  }

  //   console.log(state.pages);
  async function deleteComments(id) {
    await axios.delete(`${API}/${id}`);
    getComments();
  }

  async function getOneComments(id) {
    let res = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_COMMENTS",
      payload: res.data,
    });
  }

  async function updateComments(id, editedProduct) {
    await axios.patch(`${API}/${id}`, editedProduct);
  }
  return (
    <commentsContext.Provider
      value={{
        comments: state.comments,
        oneComments: state.oneComments,
        createComments,
        getComments,
        deleteComments,
        getOneComments,
        updateComments,
      }}>
      {children}
    </commentsContext.Provider>
  );
};
export default CommentsContextProvider;
