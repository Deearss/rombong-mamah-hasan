import React from "react";
import MediaQuery from "react-responsive";

function Mobile({ children }) {
  return (
    <>
      <MediaQuery maxWidth={767}>{children}</MediaQuery>
    </>
  );
}

export default Mobile;
