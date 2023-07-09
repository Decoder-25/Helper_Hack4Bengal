import React from 'react'

const MessagePopup = (props) => {
    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
          return;
        }
        props.setOpen(false);
      };

    return (
    <>
    <div open={props.open} onClose={handleClose}>
      <div onClose={handleClose} severity={props.severity}>
        {props.message}
      </div>
    </div>
    </>
  )
}

export default MessagePopup