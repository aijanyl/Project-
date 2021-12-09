import React, { useContext, useState } from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Button, Card, Grid, InputBase } from "@material-ui/core";
import { useHistory } from "react-router";
import { productContext } from "../../Context/ProductContext";
// import { DatePicker } from "@material-ui/pickers";
import { FaSearchPlus } from "react-icons/fa";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: theme.spacing(1),
    margin: "40px",
    marginTop: 30,
    background: "red",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    display: "row",
    position: "abosolute",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(1),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  typeInp: {
    width: "200px",
    height: "50px",
    border: "none",
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const history = useHistory();
  const [searchVal, setSearchVal] = useState(getSearchVal() || "");
  const { getProducts, getDetail } = useContext(productContext);
  const [type, setType] = useState(getType());
  const [title, setTitle] = useState(getTitle());
  const [selectedDate, handleDateChange] = useState(new Date());

  function getSearchVal() {
    const search = new URLSearchParams(history.location.search);
    return search.get("name_like");
  }

  const handleValue = (e) => {
    setSearchVal(e.target.value);
    const search = new URLSearchParams(history.location.search);
    search.set("name_like", e.target.value);
    history.push(`${history.location.pathname}?${search.toString()}`);
    setSearchVal(e.target.value);
    getProducts(history);
  };

  function getType() {
    const search = new URLSearchParams(history.location.search);
    return search.get("type");
  }

  console.log(history);

  const handleChangeType = (event) => {
    if (event.target.value === "all") {
      history.push(`${history.location.pathname.replace("type")}`);
      getProducts(history);
      setType(event.target.value);
      return;
    }
    const search = new URLSearchParams(history.location.search);
    search.set("type", event.target.value);
    history.push(`${history.location.pathname}?${search.toString()}`);
    getProducts(history);
    setType(event.target.value);
  };

  function getTitle() {
    const search = new URLSearchParams(history.location.search);
    return search.get("title");
  }

  // const handleChangeTitle = (event) => {
  //   if(event.target.value === 'all'){
  //       history.push(`${history.location.pathname.replace('title')}`)
  //       getProducts(history)
  //       setType(event.target.value)
  //       return
  //   }
  //   const search = new URLSearchParams(history.location.search)
  //   search.set('title', event.target.value)
  //   history.push(`${history.location.pathname}?${search.toString()}`)
  //   getProducts(history)
  //   setType(event.target.value)
  // }

  const handleDrop = () => {
    history.push(`${history.location.pathname.replace("type")}`);
    history.push(`${history.location.pathname.replace("title")}`);
    getProducts(history);
    setType(getType());
    setTitle(getTitle());
  };

  return (
    <Grid
      item
      sm={12}
      md={6}
      lg={12}
      style={{
        marginTop: 10,
        width: "100vw",
        marginBottom: 45,
        backgroundColor: "transparent",
        paddingTop: 10,
        borderRadius: 5,
      }}
    >
      <div className={classes.search}>
        <div>{/* <FaSearchPlus/> */}</div>
        <InputBase
          // style={{
          //   border: '1px'
          // }}
          placeholder="Search . . ."
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
          value={searchVal}
          onChange={handleValue}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: 20,
          alignItems: "center",
        }}
      >
        <Grid item sm={12} md={6} lg={4}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingBottom: 10,
            }}
          >
            <FormControl className={classes.formControl}>
              <InputLabel
                className={classes.typeInp}
                id="demo-simple-select-label"
              >
                Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={type}
                onChange={handleChangeType}
              >
                <MenuItem name="type" value="Outfit">
                  Outfit
                </MenuItem>
                <MenuItem name="type" value="Euipment">
                  Euipment
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
          </div>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <Button variant="outlined" color="silver" onClick={handleDrop}>
              Reset
            </Button>
          </div>
        </Grid>
      </div>
    </Grid>
  );
}
