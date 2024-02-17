import React from "react";
import Header from "../header/Header";
function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default Layout;
