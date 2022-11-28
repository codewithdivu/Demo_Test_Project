// react
import React from "react";
// react-router-dom
import { useNavigate } from "react-router-dom";
// @mui
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Button,
  Typography,
} from "@mui/material";

export default function ShowCard({ show }) {
  // state
  const navigate = useNavigate();
  const { name, premiered, image, id } = show;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link
        sx={{
          cursor: "pointer",
        }}
        onClick={() => navigate(`/shows/${id}`)}
      >
        <CardMedia
          component="img"
          height="500"
          image={image?.original}
          alt="green iguana"
        />
      </Link>
      <CardContent>
        <Link
          noWrap
          underline="none"
          sx={{
            fontSize: "30px",
            color: "black",
            cursor: "pointer",
            fontWeight: "bold",
            "&:hover": {
              color: "#4f2cbe",
            },
          }}
          onClick={() => navigate(`/shows/${id}`)}
        >
          {name}
        </Link>
        <Typography gutterBottom variant="h5" component="div">
          {premiered}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => navigate(`/shows/${id}`)} size="small">
          See More
        </Button>
      </CardActions>
    </Card>
  );
}
