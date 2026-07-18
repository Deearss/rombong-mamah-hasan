import React from "react";
import MediaQuery from "react-responsive";

function Tablet({ children }) {
  return (
    <>
      <MediaQuery minWidth={768} maxWidth={1023}>
        {children}
      </MediaQuery>
    </>
  );
}

export default Tablet;
