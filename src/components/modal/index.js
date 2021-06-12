import React from "react";
import { Modal, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #222",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: "translate(-50%, -50%)",
  },
  modalPopup: {
    top: '50%',
    left: '50%',
    transform: `translate(-50%, -50%)`,
  }
}));

export const ModalPopup = ({ title, message, handleClose, isOpen }) => {
  const classes = useStyles();

  const body = (
    <div className={classes.paper}>
      <h2 id="simple-modal-title">{title}</h2>
      <p id="simple-modal-description">{message}</p>
    </div>
  );

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {body}
    </Modal>
  );
};