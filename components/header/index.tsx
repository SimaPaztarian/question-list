import React from "react";
import { AppBar, Toolbar, Typography, Button, Avatar } from "@mui/material";
import Modal from "@/components/modal";

const Index = ({ title }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AppBar
      sx={{
        background: "white",
      }}
      position="sticky"
    >
      <Toolbar>
        <Typography variant="h6" sx={{ color: "black", flexGrow: 1 }}>
          {title}
        </Typography>
        <Button
          color="inherit"
          sx={{
            background: "#27AE60",
            "&:hover": {
              background: "#1f8c4d",
            },
          }}
          onClick={handleClickOpen}
        >
           سوال جدید +
        </Button>
        <Modal open={open} handleClose={handleClose} />
        <Avatar alt="Avatar" src="/static/avatar.jpg" />
        <Typography variant="h10" sx={{ color: "black" }}>
          مهسا موحد
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Index;
