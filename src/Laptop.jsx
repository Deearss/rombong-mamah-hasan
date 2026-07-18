import React from "react";
import MediaQuery from "react-responsive";

function Laptop({ children }) {
  return (
    <>
      <MediaQuery minWidth={1024}>{children}</MediaQuery>
    </>
  );
}

export default Laptop;
