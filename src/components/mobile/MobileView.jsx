import React, { useState, useRef, useEffect } from "react";

import frappe from "../../assets/img/frappe.png";
import cupcake from "../../assets/img/cupcake.png";

import Mobile from "../../Mobile";
import Footer from "../Footer";
import Button from "../button/Button";
import IceLibrary from "../IceLibrary";

function MobileView() {
  const [showIce, setShowIce] = useState(false);
  const [menuList, setMenuList] = useState("idle");

  let menuOpenMB = null;

  let setMenuOpenIce = null;
  let setMenuOpenCupCake = null;
  let setMenuOpenMB = null;
  let setIsButtonDisabledMB = null;
  let nextIce = null;
  let previousIce = null;
  let myHandleTouchLeave = null;
  let setIsButtonDisabledNext = null;
  let setIsButtonDisabledPrevious = null;

  const theMenuButton = useRef(null);
  const theIce = useRef(null);
  const theCupCake = useRef(null);

  const thePrevious = useRef(null);
  const theNext = useRef(null);

  const IceLibRef = useRef(null);

  function munculkan(ref) {
    setShowIce(!showIce);
    ref?.classList.add("animate-squish-barbar");

    setTimeout(() => {
      ref?.classList.remove("animate-squish-barbar");
    }, 120);
  }

  function sembunyikan(ref) {
    ref?.classList.add("animate-squish-barbar-reverse");

    setTimeout(() => {
      setShowIce(!showIce);
      ref?.classList.remove("animate-squish-barbar-reverse");

      setMenuOpenIce(false);
      setMenuOpenCupCake(false);
    }, 120);
  }

  function handleToggle(ref) {
    if (!showIce) {
      munculkan(ref);
    } else {
      sembunyikan(ref);
    }
  }

  return (
    <>
      <div className="flex-col !justify-between h-[120vh] flexc">
        <section className="flex-[5] flexc relative">
          {/* === TOMBOL MENU === */}
          <div className="absolute select-none transcenter z-[3]">
            <Button
              className={`rotate-0 ${menuList == "listIce" && "!size-60"}`}
              theRef={theMenuButton}
              buttonOpen={
                <>
                  {menuList == "idle" && (
                    <>
                      <div className="text-4xl">Rombong</div>
                      <div className="text-xl">Mamah Hasan</div>
                    </>
                  )}
                  {menuList == "listIce" && (
                    <>
                      <div
                        className={`text-center bg-white rounded-full select-none text-primary flexc size-full transall transcenter rotate-0`}
                      >
                        <IceLibrary
                          theRef={IceLibRef}
                          get={({ next, previous }) => {
                            nextIce = next;
                            previousIce = previous;
                          }}
                        />
                      </div>
                    </>
                  )}
                </>
              }
              buttonClose={
                <>
                  <div className="p-4 text-center rounded-full select-none flexc size-full transcenter">
                    <i className="fa-solid fa-xmark"></i>
                  </div>
                </>
              }
              get={({
                menuOpen,
                setMenuOpen,
                setIsButtonDisabled,
                handleTouchLeave,
              }) => {
                myHandleTouchLeave = handleTouchLeave;
                menuOpenMB = menuOpen;
                setMenuOpenMB = setMenuOpenMB || setMenuOpen;
                setIsButtonDisabledMB =
                  setIsButtonDisabledMB || setIsButtonDisabled;
              }}
              clicked={(samting) => {
                handleToggle(theIce.current);
                handleToggle(theCupCake.current);
              }}
            />

            {menuList == "listIce" && (
              <div
                className={`h-[6rem] text-[0.5rem] w-[15rem] transcenter transall hidden !top-[120%] scale-0 ${
                  showIce && "!flex flexc gap-10 !scale-100"
                } 
              ${menuList == "listIce" && "text-[0.7rem]"}`}
              >
                <Button
                  theRef={thePrevious}
                  className={`size-[6em] bg-white`}
                  buttonOpen={
                    <>
                      <div className="p-[1.3em] text-center bg-white rounded-full select-none flexc size-full transcenter">
                        <i className="text-[0.7em] fa-solid fa-caret-left text-primary"></i>
                      </div>
                    </>
                  }
                  buttonClose={
                    <>
                      <div className="p-[1.3em] text-center bg-white rounded-full select-none flexc size-full transcenter">
                        <i className="text-[0.7em] fa-solid fa-caret-left text-primary"></i>
                      </div>
                    </>
                  }
                  get={({ setIsButtonDisabled }) => {
                    setIsButtonDisabledPrevious = setIsButtonDisabled;
                  }}
                  clicked={() => {
                    previousIce && previousIce();
                    setIsButtonDisabledNext(true);

                    myHandleTouchLeave(
                      null,
                      [theMenuButton.current],
                      200,
                      true,
                      () => {
                        setIsButtonDisabledNext(false);
                      }
                    );
                  }}
                />

                <Button
                  theRef={theNext}
                  className={`size-[6em] bg-white`}
                  buttonOpen={
                    <>
                      <div className="p-[1.3em] text-center bg-white rounded-full select-none flexc size-full transcenter">
                        <i className="text-[0.7em] fa-solid fa-caret-right text-primary"></i>
                      </div>
                    </>
                  }
                  buttonClose={
                    <>
                      <div className="p-[1.3em] text-center bg-white rounded-full select-none flexc size-full transcenter">
                        <i className="text-[0.7em] fa-solid fa-caret-right text-primary"></i>
                      </div>
                    </>
                  }
                  get={({ setIsButtonDisabled }) => {
                    setIsButtonDisabledNext = setIsButtonDisabled;
                  }}
                  clicked={() => {
                    nextIce && nextIce();
                    setIsButtonDisabledPrevious(true);

                    myHandleTouchLeave(
                      null,
                      [theMenuButton.current],
                      200,
                      true,
                      () => {
                        setIsButtonDisabledPrevious(false);
                      }
                    );
                  }}
                />
              </div>
            )}

            {/* {showIce && ( */}
            <div
              className={`h-[6rem] text-[1rem] w-[15rem] transcenter transall hidden !top-[140%] scale-0 ${
                showIce && "!flex flexc gap-10 !scale-100"
              } 
              ${menuList == "listIce" && "!mt-10"}
              ${menuList == "listIce" && "text-[0.8rem]"}`}
            >
              <Button
                theRef={theCupCake}
                className={`size-[6em]`}
                buttonOpen={
                  <>
                    <div className="p-[0.3em] text-center bg-white rounded-full select-none flexc size-full transcenter">
                      <img
                        src={cupcake}
                        alt="LOGONYA"
                        className="pointer-events-none select-none size-full"
                      />
                    </div>
                  </>
                }
                buttonClose={
                  <>
                    <div className="p-[0.3em] text-center bg-white rounded-full select-none flexc size-full transcenter">
                      <i className="text-[0.55em] fa-solid fa-xmark text-primary"></i>
                    </div>
                  </>
                }
                get={({ menuOpen, setMenuOpen }) => {
                  setMenuOpenCupCake = setMenuOpenCupCake || setMenuOpen;
                }}
              />

              <Button
                theRef={theIce}
                className={`size-[6em]`}
                buttonOpen={
                  <>
                    <div className="p-[0.3em] text-center bg-white rounded-full select-none flexc size-full transcenter">
                      <img
                        src={frappe}
                        alt="LOGONYA"
                        className="pointer-events-none select-none size-full"
                      />
                    </div>
                  </>
                }
                buttonClose={
                  <>
                    <div className="p-[0.3em] text-center bg-white rounded-full select-none flexc size-full transcenter">
                      <i className="text-[0.55em] fa-solid fa-xmark text-primary"></i>
                    </div>
                  </>
                }
                get={({ menuOpen, setMenuOpen }) => {
                  setMenuOpenIce = setMenuOpenIce || setMenuOpen;
                }}
                clicked={() => {
                  setMenuOpenMB(!menuOpenMB);
                  menuOpenMB = !menuOpenMB;

                  if (menuOpenMB) {
                    setTimeout(() => {
                      setMenuList("idle");
                      setIsButtonDisabledMB(false);
                    }, 150);
                  } else {
                    setMenuList("listIce");
                    setIsButtonDisabledMB(true);
                  }
                }}
              />
            </div>

            {/* )} */}
          </div>
          {/* === TOMBOL MENU === */}

          {/* === MENU 1 === */}

          {/* <div
            ref={theFrappe}
            className={`transcenter flex !top-[75%] transall z-[2] opacity-0 ${
              menuOpen && "!opacity-100"
            }`}
          >
            <button
              ref={frappeButton}
              onPointerDown={(event) => {
                handleTouchStart(event, [frappeButton.current]);
                setMenuOpen(true);
              }}
              onPointerLeave={(event) => {
                handleTouchLeave(event, [frappeButton.current], 200);
                setMenuOpen(true);
              }}
              onPointerUp={(event) => {
                handleTouchEnd(event, [frappeButton.current], 200);
                setMenuOpen(true);
              }}
              className={`relative transall overflow-hidden bg-white rounded-full shadow size-20 flexc shadow-primary ${
                menuOpen && ""
              }`}
            >
              <img
                src={frappe}
                alt="LOGONYA"
                className="text-center transcenter size-14"
              />
            </button>
          </div> */}

          {/* === MENU 1 === */}
        </section>

        <Footer className={`flex-[1]`} />
      </div>
    </>
  );
}

export default MobileView;
