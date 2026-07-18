import React, { useState, useEffect } from "react";

import kopiHD from "../assets/img/kopiHD.jpeg";
import kopirmbg from "../assets/img/kopirmbg.png";
import tehes from "../assets/img/tehes.png";
import esjeruk from "../assets/img/esjeruk.png";
import esjerukrmbg from "../assets/img/esjerukrmbg.png";

function IceLibrary({ theRef, get = null }) {
  const [showMenu, setShowMenu] = useState(1);

  const menu = 3;

  const next = () => {
    if (showMenu == menu) {
      setShowMenu(1);
    } else {
      setShowMenu(showMenu + 1);
    }
  };

  const previous = () => {
    if (showMenu == 1) {
      setShowMenu(menu);
    } else {
      setShowMenu(showMenu - 1);
    }
  };

  useEffect(() => {
    if (get !== null)
      get({
        next,
        previous,
        showMenu,
      });
  }, [get, showMenu]);

  return (
    <div ref={theRef && theRef} className="bg-primary size-full">
      {showMenu == 1 && (
        <img
          src={kopirmbg}
          alt="LOGONYA"
          className={`pt-11 pointer-events-none select-none px-14 drop-shadow-2xl opacity-0 ${
            showMenu == 1 && "!opacity-100"
          }`}
        />
      )}
      {showMenu == 2 && (
        <img
          src={tehes}
          alt="LOGONYA"
          className={`p-3 pointer-events-none select-none drop-shadow-2xl opacity-0 ${
            showMenu == 2 && "!opacity-100"
          }`}
        />
      )}
      {showMenu == 3 && (
        <img
          src={esjerukrmbg}
          alt="LOGONYA"
          className={`p-3 pointer-events-none select-none drop-shadow-2xl opacity-0 ${
            showMenu == 3 && "!opacity-100"
          }`}
        />
      )}
    </div>
  );
}

export default IceLibrary;
