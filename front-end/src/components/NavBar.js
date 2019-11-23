import React from "react";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
function NavBar() {
  return (
    <React.Fragment>
      <AppBar title="Calorify" position="fixed"></AppBar>
      <RaisedButton color="inherit">Login</RaisedButton>
    </React.Fragment>
  );
}
export default NavBar;
