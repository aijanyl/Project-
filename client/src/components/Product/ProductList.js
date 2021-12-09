import React, { useContext, useEffect, useState } from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import ProductCard from "./ProductCard";
import { useHistory } from "react-router-dom";
import { Pagination } from "@material-ui/lab";
import { productContext } from "../../Context/ProductContext";
import FilterBar from "./Filterbar";

const useStyles = makeStyles((theme) => ({
  cardPosition: {
    padding: theme.spacing(2),
    margin: "40px auto",
    height: "50%",
  },
}));

const ProductList = () => {
  let history = useHistory();
  const { products, getProducts, pages } = useContext(productContext);
  const classes = useStyles();
  const [tovar, setTovar] = useState([]);

  useEffect(() => {
    getProducts(history);
  }, []);

  useEffect(() => {
    setTovar(products.rows);
  }, [products]);

  const getCurrentPage = () => {
    const search = new URLSearchParams(window.location.search);
    if (!search.get("_page")) {
      return 1;
    }
    return search.get("_page");
  };
  const [page, setPage] = useState(getCurrentPage());

  const handlePage = (e, page) => {
    const search = new URLSearchParams(window.location.search);
    search.set("_page", page);
    history.push(`${history.location.pathname}?${search.toString()}`);
    getProducts(history);
    setPage(page);
    console.log(products);
  };

  return (
    <div>
      <FilterBar />
      <Grid container style={{ justifyContent: "space-evenly" }}>
        {tovar && tovar.length > 0 ? (
          tovar.map((item, index) => (
            <ProductCard item={item} key={index} history={history} />
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </Grid>
      <div
        style={{ display: "flex", justifyContent: "center", color: "white" }}
      >
        <Pagination
          id="pagination"
          count={pages}
          page={+page}
          onChange={handlePage}
          variant="outlined"
          style={{ marginBottom: 30, marginTop: "20px" }}
        />
      </div>
    </div>
  );
};

export default ProductList;
