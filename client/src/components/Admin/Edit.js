import { Grid } from "@material-ui/core";
import {
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { makeStyles, Paper } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import { productContext } from "../../Context/ProductContext";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(4),
    color: theme.palette.text.secondary,
    textAlign: "center",
    margin: "40px auto",
    marginTop: 100,
    // maxWidth: 1000,
    height: "auto",
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "40vw",
    },
  },
  formControl: {
    margin: theme.spacing(1),
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Edit = () => {
  let { id } = useParams();
  let history = useHistory();
  const classes = useStyles();
  const { edit, editProduct, getProducts, saveEditedProduct, products } =
    useContext(productContext);
  const [tovar, setTovar] = useState([]);
  const [values, setValues] = useState(null);

  useEffect(() => {
    editProduct(id);
  }, [id]);

  useEffect(() => {
    getProducts(history);
  }, []);

  useEffect(() => {
    setValues(edit);
  }, [edit]);

  const handleEditInp = (e) => {
    let obj = {
      ...values,
      [e.target.name]: e.target.value,
    };
    setValues(obj);
  };

  const handleSave = () => {
    saveEditedProduct(values);
    getProducts(history);
    history.push("/list");
  };

  return (
    <div style={{ paddingTop: "20px", background: "white" }}>
      <>
        <h1 style={{ marginLeft: "35vw", paddingTop: "80px" }}>
          Update product
        </h1>
        {values ? (
          <div
            style={{
              display: "flex",
              marginLeft: "25vw",
              justifyContent: "space-between",
              color: "black",
            }}
          >
            <div
              style={{
                width: "45vw",
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <form className={classes.root} noValidate autoComplete="off">
                <TextField
                  name="name"
                  onChange={handleEditInp}
                  value={values.name}
                  variant="outlined"
                  placeholder="Name"
                />
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Type
                  </InputLabel>
                  <Select
                    style={{ width: "40vw" }}
                    // labelId="demo-simple-select-outlined-label"
                    // id="demo-simple-select-outlined"
                    value={values.type}
                    onChange={handleEditInp}
                    placeholder="Type"
                    name="type"
                  >
                    <MenuItem name="type" value="Outfit">
                      Outfit
                    </MenuItem>
                    <MenuItem name="type" value="Equipment">
                      Equipment
                    </MenuItem>
                    <MenuItem name="type" value="Jersey">
                      Jersey
                    </MenuItem>
                    <MenuItem name="type" value="Sneakers">
                      Sneakers
                    </MenuItem>
                    <MenuItem name="type" value="Headdress">
                      Headdress
                    </MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  name="price"
                  onChange={handleEditInp}
                  value={values.price}
                  variant="outlined"
                  placeholder="Price"
                  type="number"
                />
                <TextField
                  name="image"
                  onChange={handleEditInp}
                  value={values.image}
                  variant="outlined"
                  placeholder="Image URL"
                />

                {/* <TextField name="type" onChange={handleEditInp} value={values.type} variant="outlined" label="Type"/> */}
                <TextField
                  name="description"
                  onChange={handleEditInp}
                  value={values.description}
                  variant="outlined"
                  placeholder="Description"
                  gutterBottom
                  multiline
                  rows={4}
                />
              </form>
              <Link to="/list" style={{ textDecoration: "none" }}>
                <IconButton
                  aria-label="share"
                  onClick={handleSave}
                  style={{ marginLeft: "18vw" }}
                >
                  <Button
                    style={{
                      background: `black`,
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    Save
                  </Button>
                </IconButton>
              </Link>
            </div>
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
      </>
    </div>
  );
};

export default Edit;
