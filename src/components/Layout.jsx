import React from "react";
import NavBar from "./NavBarComponent";
import Footer from "./FooterComponent";

const Layout = props => {
  return (
    <React.Fragment>
      <NavBar />
      {props.children}
      <Footer/>
    </React.Fragment>
  );
};

export default Layout;