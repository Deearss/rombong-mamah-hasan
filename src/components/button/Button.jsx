import React, { useState, useRef, useEffect } from "react";

function Button({
  theRef,
  buttonOpen,
  buttonClose,
  impactThis = null,
  get = null,
  clicked,
  className,
  cart = null,
  children,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const [isStarted, setIsStarted] = useState(false);

  const menuButton = useRef(null);

  let isForceDisabled = false;
  let isForceOpen = false;

  useEffect(() => {
    if (get !== null)
      get({
        menuOpen,
        setMenuOpen,
        isButtonDisabled,
        setIsButtonDisabled,
        isStarted,
        setIsStarted,
        handleTouchLeave,
        forceDisabled,
        forceOpen,
      });
  }, [get]);

  useEffect(() => {
    if (cart < 1) {
      setMenuOpen(true);
    }
  }, [cart]);

  const changeButton = (theClass) => {
    const refnya = theRef || menuButton;
    if (menuOpen == false) {
      refnya.current.classList.add(theClass);
    } else {
      refnya.current.classList.remove(theClass);
    }
  };

  const forceDisabled = (status) => {
    if (status == true) isForceDisabled = true;
    if (status == false) isForceDisabled = false;
  };

  const forceOpen = (status) => {
    if (status == true) isForceOpen = true;
    if (status == false) isForceOpen = false;
  };

  const animateStart = (ref) => {
    ref.forEach((element) => {
      element.classList.add("!scale-x-[0.90]");
      element.classList.add("!scale-y-95");
      element.classList.add("!text-red-500");
    });
  };

  const animateGoing = (ref) => {
    ref.forEach((element) => {
      element.classList.remove("!scale-x-[0.90]");
      element.classList.remove("!scale-y-95");

      element.classList.add("animate-squish");
      element.classList.remove("!text-red-500");
    });
  };

  const animateEnd = (ref) => {
    ref.forEach((element) => {
      element.classList.remove("animate-squish");
    });
  };

  const handleTouchStart = (event, ref) => {
    if (isButtonDisabled == true) return;

    animateStart(ref);

    setIsStarted(true);
  };

  const handleTouchLeave = (event, ref, delayClick, force, callback) => {
    setTimeout(
      () => {
        if (!force) {
          if (isButtonDisabled == true) return;
          if (isStarted == false) return;
        }

        // setMenuOpen(false);

        animateGoing(ref);

        if (!force) {
          setIsStarted(false);
          setIsButtonDisabled(true); // Set tombol disabled
        }

        setTimeout(() => {
          animateEnd(ref);

          callback && callback();

          if (!force) {
            setIsButtonDisabled(false); // Aktifkan tombol kembali
          }
        }, delayClick);
      },
      force ? 100 : 0
    );
  };

  const handleTouchEnd = (event, ref, delayClick, status) => {
    if (isButtonDisabled == true) return;
    if (!status?.preventStart) {
      if (isStarted == false) return;
    }

    if (isForceOpen == false) {
      setMenuOpen(!menuOpen);
    }

    animateGoing(ref);

    setIsStarted(false);
    setIsButtonDisabled(true); // Set tombol disabled

    if (clicked)
      clicked({
        menuOpen,
        setMenuOpen,
        isButtonDisabled,
        setIsButtonDisabled,
        isStarted,
        setIsStarted,
        changeButton,
        forceDisabled,
        forceOpen,
      });

    setTimeout(() => {
      animateEnd(ref);

      if (isForceDisabled == false) {
        setIsButtonDisabled(false); // Aktifkan tombol kembali
      }
    }, delayClick);
  };

  return (
    <>
      {/* <div className="!-top-[50%] transcenter bg-primary text-white rounded-lg shadow w-[14rem] h-[3rem] flexc font-capriola">
        {menuOpen == true ? (
          <span>menu open</span>
        ) : (
          <span>menu tidak open</span>
        )}
      </div> */}
      <button
        ref={theRef || menuButton}
        onPointerDown={(event) => {
          handleTouchStart(event, [theRef?.current || menuButton.current]);
        }}
        onPointerLeave={(event) => {
          handleTouchLeave(event, [theRef?.current || menuButton.current], 200);
        }}
        onPointerUp={(event) => {
          handleTouchEnd(event, [theRef?.current || menuButton.current], 200);
        }}
        className={`relative flex-col overflow-hidden scale-x-100 scale-y-100 rounded-full shadow select-none shadow-primary text-light bg-primary size-48 flexc transall font-gagalin ${className}`}
      >
        {/* === TEXTNYA === */}
        <div
          className={`text-[5em] select-none rounded-full size-full flexc flex-col transcenter transall opacity-100 scale-100 ${
            menuOpen && "!opacity-0 !scale-0"
          }`}
        >
          {buttonOpen && buttonOpen}
        </div>
        {/* === TEXTNYA === */}
        {children}
        {/* === X NYA === */}
        <div
          className={`text-[5em] select-none transall rounded-full size-full flexc flex-col !ease-in-out transcenter opacity-0 scale-0 ${
            menuOpen && "!scale-100 !opacity-100"
          }`}
        >
          {buttonClose && buttonClose}
        </div>
        {/* === X NYA === */}
      </button>
      {impactThis &&
        impactThis({
          menuOpen,
        })}
    </>
  );
}

export default Button;
