import React, { useState, useEffect } from "react";
// @mui
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import ShowCard from "../showCard";
import { axiosGet } from "../../axios/config";
import { apiRouter } from "../../axios/apiRoutes";

const Shows = () => {
  const [shows, setShows] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchShows = async () => {
      setIsLoading(true);
      try {
        const response = await axiosGet(apiRouter.GET_ALL_SHOWS);
        setIsLoading(false);
        if (response.status && response.data && response.data.length > 0) {
          setShows(response.data);
        }
      } catch (error) {
        setIsLoading(false);
      }
    };
    fetchShows();
  }, []);

  return (
    <Container sx={{ mt: 2 }}>
      <Grid container>
        {shows && shows.length > 0
          ? shows?.map((item) => (
              <Grid sx={{ margin: "1rem 0" }} item xs={12} md={4}>
                <ShowCard show={item.show} />
              </Grid>
            ))
          : "No Shows Found"}
      </Grid>
    </Container>
  );
};

export default Shows;
