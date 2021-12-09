import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaTicketAlt } from "react-icons/fa";
import { RiHeartLine } from "react-icons/ri";
import { GiBasketballBasket, GiBasketballBall } from "react-icons/gi";
import "./Sidebar.css";

const useStyles = makeStyles({
  list: {
    width: "28vw",
  },
  fullList: {
    width: "auto",
  },
});

export default function Sidebar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      id="list"
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{ background: "#0d0d0d", height: "100%" }}
    >
      <List>
        <Link to="/list" style={{ textDecoration: "none", color: "white" }}>
          <ListItem /*style={{borderBottom: '0.6px solid', borderTop: '0.6px solid'}}*/
          >
            <GiBasketballBasket size={25} style={{ marginRight: 10 }} />
            Shop
          </ListItem>
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }}>
          <ListItem /*style={{borderBottom: '0.6px solid'}}*/>
            <RiHeartLine size={25} style={{ marginRight: 10 }} />
            Favorite
          </ListItem>
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }}>
          <ListItem /*style={{borderBottom: '0.6px solid'}}*/>
            <FaPhoneAlt size={25} style={{ marginRight: 10 }} />
            Contact Us
          </ListItem>
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }}>
          <ListItem /*style={{borderBottom: '0.6px solid'}}*/>
            <FaTicketAlt size={25} style={{ marginRight: 10 }} />
            Tickets
          </ListItem>
        </Link>
        <Link
          to="/dashboard"
          style={{ textDecoration: "none", color: "white" }}
        >
          <ListItem>
            <GiBasketballBall size={25} style={{ marginRight: 10 }} />
            About Us
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon style={{ color: "white", marginTop: "5px" }} />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
