import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import { Link, useHistory } from "react-router-dom";
import { productContext } from "../../Context/ProductContext";
import { Button, Grid } from "@material-ui/core";
import { RiEditBoxLine } from "react-icons/ri";
import { AiTwotoneDelete } from "react-icons/ai";
import { RiHeartAddLine } from "react-icons/ri";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 400,
    marginBottom: 20,
    height: 700,
    background: "white",
    borderRadius: "4%",
  },
  media: {
    height: 180,
    paddingTop: "56.25%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function ProductCard({ item }) {
  const classes = useStyles();
  console.log(item);
  const history = useHistory();
  const { deleteProduct } = useContext(productContext);

  let icons = (
    <CardActions>
      <Link to={`/edit/${item.id}`} style={{ textDecoration: "none" }}>
        <IconButton aria-label="add to favorites">
          <RiEditBoxLine />
        </IconButton>
      </Link>
      <IconButton
        aria-label="share"
        onClick={() => deleteProduct(item.id, history)}
      >
        <AiTwotoneDelete />
      </IconButton>
      <IconButton>
        <RiHeartAddLine />
      </IconButton>
    </CardActions>
  );

  return (
    <>
      <Grid spacing={5}>
        <Card id="card" className={classes.root}>
          <Link
            to={`/detail/${item.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <CardMedia
              className={classes.media}
              image={item.image}
              title=""
              style={{ marginTop: "10px", paddingBottom: 0 }}
            />
            <CardContent>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
              ></Typography>
            </CardContent>
          </Link>
          <CardContent>
            <CardHeader
              title={`${item.name}`}
              subheader={`${item.type}`}
              style={{ paddingTop: 0 }}
            />
            <Typography variant="body2" color="textSecondary" component="p">
              ${item.price}
            </Typography>
          </CardContent>
          {icons}
        </Card>
      </Grid>
    </>
  );
}
