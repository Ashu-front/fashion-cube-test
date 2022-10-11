import React from "react";
import "./productcard.css";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ProductCard = ({ cardImage, cardTitle, cardDesc }) => {
  return (
    <Card sx={{ maxWidth: 345, marginTop: "5%", cursor: "pointer" }} raised>
      <CardMedia
        component="img"
        alt="green iguana"
        // height="140"
        width={100}
        image={cardImage}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{ textAlign: "left" }}
        >
          {cardTitle}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          style={{
            textAlign: "left",
            maxHeight: "40px",
            textOverflow: "ellipsis",
          }}
        >
          {cardDesc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
