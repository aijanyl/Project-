import axios from "axios";
import React, { useReducer } from "react";
import { useHistory } from "react-router";
import { API } from "../Helpers/constants";

export const productContext = React.createContext();

const INIT_STATE = {
  products: [],
  edit: null,
  pages: 1,
  detail: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload.data,
        pages: Math.ceil(action.payload.data.count / 6),
      };
    case "EDIT_PRODUCT":
      return { ...state, edit: action.payload };
    case "GET_DETAIL_PRODUCT":
      return { ...state, detail: action.payload };
  }
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const history = useHistory();

  const getProducts = async (history) => {
    const search = new URLSearchParams(history.location.search);
    search.set(`_limit`, 6);
    history.push(`${history.location.pathname}?${search.toString()}`);
    const data = await axios.get(`${API}/products/${window.location.search}`);
    console.log(data);
    dispatch({
      type: "GET_PRODUCTS",
      payload: data,
    });
  };

  const addProduct = async (newProduct) => {
    console.log(newProduct);
    try {
      await axios.post(`${API}/products`, newProduct);
      console.log(`added`);
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  const deleteProduct = async (id, history) => {
    axios.delete(`${API}/products/${id}`);
    console.log(`deleted`);
    getProducts(history);
  };

  const editProduct = async (id) => {
    const { data } = await axios.get(`${API}/products/${id}`);
    dispatch({
      type: "EDIT_PRODUCT",
      payload: data,
    });
  };

  const saveEditedProduct = async (editedProduct) => {
    try {
      await axios.patch(`${API}/products/${editedProduct.id}`, editedProduct);
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  const getDetail = async (id) => {
    const { data } = await axios.get(`${API}/products/${id}`);
    dispatch({
      type: "GET_DETAIL_PRODUCT",
      payload: data,
    });
  };

  return (
    <productContext.Provider
      value={{
        products: state.products,
        edit: state.edit,
        pages: state.pages,
        detail: state.detail,
        getProducts,
        addProduct,
        deleteProduct,
        editProduct,
        saveEditedProduct,
        getDetail,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
