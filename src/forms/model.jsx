// react
import React from "react";
// @mui
import { Box, Modal, Button } from "@mui/material";
// Components
import MovieBookingForm from "./movieBookingForm";

// @mui Styles
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function KeepMountedModal() {
  // states
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button color="secondary" onClick={handleOpen}>
        Book Show
      </Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <MovieBookingForm handleClose={handleClose} />
        </Box>
      </Modal>
    </div>
  );
}
