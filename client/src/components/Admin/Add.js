import {
  IconButton,
  Paper,
  makeStyles,
  TextField,
  Button,
  Select,
  FormControl,
  InputLabel,
  NativeSelect,
  InputBase,
  MenuItem,
} from "@material-ui/core";
import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { productContext } from "../../Context/ProductContext";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(5),
    color: theme.palette.text.secondary,
    background: "white",
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "70wv",
    },
    paddingTop: theme.spacing(5),
  },
  margin: {
    margin: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Add = () => {
  const classes = useStyles();
  let history = useHistory();
  const [values, setValues] = useState({
    name: "",
    type: "",
    price: "",
    image: "",
    description: "",
  });
  const [type, setType] = useState("");

  const handleChange = (event) => {
    setType(event.target.value);
  };

  const { addProduct } = useContext(productContext);

  const handleInp = (e) => {
    let obj = {
      ...values,
      [e.target.name]: e.target.value,
    };
    setValues(obj);
    // console.log(obj);
  };

  const handleSave = () => {
    addProduct(values);
    history.push("/");
  };

  return (
    <div>
      <Paper elevation={3} className={classes.paper}>
        <h1 style={{ textAlign: "center", color: "black" }}>Add Product</h1>
        <div style={{ display: "flex", color: "black" }}>
          <div
            style={{
              width: "75vw",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <form
              className={classes.root}
              noValidate
              autoComplete="off"
              style={{ width: "70vw" }}
            >
              <TextField
                style={{ width: "65vw" }}
                name="name"
                onChange={handleInp}
                value={values.name}
                variant="outlined"
                label="Name"
              />
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={values.type}
                  onChange={handleInp}
                  label="Type"
                  name="type"
                  style={{ width: "65vw" }}
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
                style={{ width: "65vw" }}
                name="price"
                type="number"
                onChange={handleInp}
                value={values.price}
                variant="outlined"
                label="Price"
              />
              <TextField
                style={{ width: "65vw" }}
                name="image"
                onChange={handleInp}
                value={values.image}
                variant="outlined"
                label="Image URL"
              />

              <TextField
                style={{ width: "65vw" }}
                name="description"
                onChange={handleInp}
                value={values.description}
                variant="outlined"
                label="Description"
              />
            </form>
            <IconButton aria-label="share" onClick={handleSave}>
              <Button
                variant="contained"
                style={{ background: "black", color: "white" }}
              >
                Add
              </Button>
            </IconButton>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Add;
