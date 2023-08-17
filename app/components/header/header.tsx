import React from "react";
import { AppBar, Toolbar, Typography, Button, Avatar } from "@mui/material";

const Header = ({title}) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
            {title}
        </Typography>
        <Button color="inherit">ایجاد سوال +</Button>
        <Avatar alt="Avatar" src="/static/images/avatar/1.jpg" />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
