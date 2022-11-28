import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { axiosGet } from "../../axios/config";
import "./movieDetails.css";
import KeepMountedModal from "../../forms/model";

const ShowDetails = () => {
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
      <div
        className="container banner d-flex vw-100  p-5 vh-50"
        style={{
          background: `linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url(${show?.image?.original}) no-repeat right top`,
          backgroundSize: "cover",
        }}
      >
        <div className="d-flex w-25">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={show?.image?.original}
              className="card-img-top"
              alt="..."
            />
          </div>
        </div>
        <div className="d-flex flex-column w-75 mx-3">
          <h1>{show?.name}</h1>
          <h6>{show?.premiered}</h6>
          <p>{show?.summary}</p>
        </div>
      </div>
      <KeepMountedModal />
    </>
  );
};

export default ShowDetails;
