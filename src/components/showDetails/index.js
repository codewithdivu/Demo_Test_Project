// react
import React, { useState, useEffect } from "react";
// react-router-dom
import { useParams } from "react-router-dom";
// components
import { axiosGet } from "../../axios/config";
import KeepMountedModal from "../../forms/model";
// css
import "./movieDetails.css";
// @mui
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const ShowDetails = () => {
  // states
  const { id } = useParams();
  const [show, setShow] = useState();
  const [isLoading, setIsLoading] = useState(false);

  console.log("hey_show", show);

  useEffect(() => {
    const fetchShow = async () => {
      setIsLoading(true);
      try {
        const response = await axiosGet(`shows/${id}`);
        setIsLoading(false);
        if (response.status && response.data) {
          setShow(response.data);
        }
      } catch (error) {
        setIsLoading(false);
      }
    };
    fetchShow();
  }, [id]);

  return (
    <>
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            JustifyContent: "center",
            alignItem: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <div
          className="container banner d-flex vw-100  p-5 vh-50"
          style={{
            background: `linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url(${show?.image?.original}) no-repeat right top`,
            backgroundSize: "cover",
            marginTop: "5rem",
          }}
        >
          <div className="d-flex w-25">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={show?.image?.original}
                className="card-img-top"
                alt="..."
              />
              <KeepMountedModal />
            </div>
          </div>
          <div className="d-flex flex-column w-75 mx-3">
            <h1>{show?.name}</h1>
            <h6>{show?.premiered}</h6>
            <p>{show?.summary}</p>
            <h6>Languages</h6>
            <p>{show?.language}</p>
            <h6>Rating</h6>
            <p>{show?.rating?.average}/10</p>
            <h6>Official Website</h6>
            <a href={show?.network?.officialSite}>
              {show?.network?.officialSite || "none"}
            </a>
            <h6>Duration</h6>
            <p>{show?.runtime} Minutes</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ShowDetails;
