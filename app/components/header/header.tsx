import React from "react";
import { AppBar, Toolbar, Typography, Button, Avatar } from "@mui/material";
import {useMutation} from "@tanstack/react-query";
import {postNewQuestion} from "@/app/services/api";
import Modal from "@/app/components/modal/modal";

const Header = ({title}) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
            {title}
        </Typography>

        <Button color="inherit" onClick={handleClickOpen}>ایجاد سوال +</Button>
          <Modal open={open} handleClose={handleClose}/>
        <Avatar alt="Avatar" src="/static/images/avatar/1.jpg" />
          <h3>علی شهابی</h3>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
