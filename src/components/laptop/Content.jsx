import React, { useEffect, useState, useRef } from "react";
import Button from "../button/Button";

let esKopi = null;
let tehEs = null;
let esKelapa = null;

function Content() {
  //   let menuOpenQty = null;
  let theForceDisabled = null;

  const [cart, setCart] = useState(5);
  const [showQty, setShowQty] = useState([]);
  //   const [forceDisabledQty, setForceDisabledQty] = useState(false);

  function animateShow(ref, index) {
    if (index) {
      const qty = [...showQty, index];
      setShowQty(qty);
    }

    ref?.classList.add("animate-squish-barbar");

    setTimeout(() => {
      ref?.classList.remove("animate-squish-barbar");
    }, 120);
  }

  function animateHidden(ref, index) {
    ref?.classList.add("animate-squish-barbar-reverse");

    setTimeout(() => {
      ref?.classList.remove("animate-squish-barbar-reverse");

      if (index) {
        const qty = showQty.filter((value) => value !== index);
        setShowQty(qty);
      }
    }, 120);
  }

  function handleToggle(ref, index) {
    if (showQty.includes(index)) {
      animateHidden(ref, index);
    } else {
      animateShow(ref, index);
    }
  }

  return (
    <>
      <section>
        <div className="grid justify-center items-center max-w-[70rem] py-3 grid-cols-1 gap-1 mx-auto lg:grid-cols-3 lg:gap-10 [&>article]:h-[20rem] [&>article]:outline [&>article]:outline-1 [&>article]:outline-biru-300 [&>article]:shadow-lg [&>article]:shadow-biru-300">
          {[
            {
              imageLink:
                "https://media.istockphoto.com/id/497863160/id/foto/es-kopi-dalam-cangkir-takeaway.jpg?s=2048x2048&w=is&k=20&c=4_Bl5_V1onYNRM0YbAH6mYPd8hgiH22aCVFrreK4qBs=",
              ProdName: "Es Kopi",
              ProdPrice: 6000,
              deleteRef: useRef(null),
              qtyWrapper: useRef(null),
            },
            {
              imageLink:
                "https://media.istockphoto.com/id/1270188225/id/foto/cangkir-plastik-realistis-di-latar-belakang-putih-terisolasi-mock-up-cold-berang-berang.jpg?s=2048x2048&w=is&k=20&c=nyNFuk6m_h4PPD26oDHzlKj8JF3R3lFSWKAOayHImxI=",
              ProdName: "Teh Es",
              ProdPrice: 5000,
              deleteRef: useRef(null),
              qtyWrapper: useRef(null),
            },
            {
              imageLink:
                "https://media.istockphoto.com/id/1155623658/id/foto/segelas-teh-hitam-lemon-beku-di-latar-belakang-putih.jpg?s=2048x2048&w=is&k=20&c=PcIaVBrF8qeBYFfCCtF9hgA9Mi2ZBEFkwzKk0iwasSk=",
              ProdName: "Es Kelapa",
              ProdPrice: 8000,
              deleteRef: useRef(null),
              qtyWrapper: useRef(null),
            },
            {
              imageLink:
                "https://media.istockphoto.com/id/184284292/id/foto/lumpur.jpg?s=2048x2048&w=is&k=20&c=EELb6G_gMgCCLDgqe3YurLsEllBeCl3hE1OykVF7QKY=",
              ProdName: "Es Jeruk",
              ProdPrice: 6000,
              deleteRef: useRef(null),
              qtyWrapper: useRef(null),
            },
            {
              imageLink:
                "https://media.istockphoto.com/id/160053930/id/foto/gelas-gelas-dengan-makanan-penutup-es-krim-stroberi.jpg?s=2048x2048&w=is&k=20&c=y9mirwtciwZlCe1g8k0f0DOmys98z2QMIXadesFmH_I=",
              ProdName: "Es Susu Jelly",
              ProdPrice: 8000,
              deleteRef: useRef(null),
              qtyWrapper: useRef(null),
            },
          ].map(
            (
              { imageLink, ProdName, ProdPrice, deleteRef, qtyWrapper },
              index
            ) => (
              <article
                key={index}
                className="relative flex flex-col justify-end w-full mx-auto overflow-hidden isolate rounded-3xl"
              >
                <div
                  style={{
                    backgroundImage: `url(${imageLink})`,
                  }}
                  className="w-full h-full bg-center bg-no-repeat bg-cover transcenter"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-biru-300 via-biru-300/40"></div>
                <div className="absolute bottom-0 w-full flexc !justify-end h-[8rem]  px-5 py-8 shadow shadow-biru-300">
                  <Button
                    className={`z-[20] !inline-block py-2 !text-sm text-white transall w-[3rem] h-[2rem] outline outline-1 outline-biru-700 rounded-xl`}
                    cart={cart}
                    buttonOpen={
                      <>
                        <div className="p-[1.3em] text-center rounded-full select-none flexc size-full font-capriola transcenter bg-biru-700 text-white transall">
                          <i className="text-[0.2em] fa-solid fa-plus"></i>
                        </div>
                      </>
                    }
                    buttonClose={
                      <>
                        <div className="p-[1.3em] gap-2 text-center rounded-full select-none flexc size-full font-capriola transcenter bg-teal-600 text-white transall">
                          <div className="text-[0.2em] flexc flex-col gap-2">
                            <span className="size-[2rem] flexc"></span>
                            <span className="size-[2rem] flexc"></span>
                            <span className="size-[2rem] flexc"></span>
                          </div>
                        </div>
                      </>
                    }
                    clicked={({ changeButton, forceDisabled }) => {
                      changeButton("!h-[8rem]");

                      handleToggle(deleteRef.current, index + 1);
                      setCart(cart + 1);
                    }}
                  />

                  <div
                    ref={qtyWrapper}
                    className={`absolute p-[0.5rem] transall text-[0.8em] z-[30] flexc flex-col opacity-0 gap-2 h-[8rem] rounded-lg scale-0 ${
                      showQty.includes(index + 1) && "!opacity-100 !scale-100"
                    } `}
                  >
                    <span className="size-[2rem] flexc"></span>
                    <span className="size-[2rem] flexc rounded-lg bg-biru-700 text-white">
                      {cart}
                    </span>
                    <Button
                      theRef={deleteRef}
                      className={`flexc rounded-lg size-[2rem] scale-x-0 scale-y-0 !bg-biru-700`}
                      clicked={() => {
                        if (cart <= 1) {
                          setCart(cart - 1);
                          handleToggle(deleteRef.current, index + 1);
                        }
                        if (cart !== 0) setCart(cart - 1);
                      }}
                    >
                      {cart == 1 ? (
                        <span className="text-white">🗑️</span>
                      ) : (
                        <span className="size-full flexc">-</span>
                      )}
                    </Button>
                  </div>
                  {/* {showQty.includes(index + 1) && (
                )} */}
                </div>
                <h3 className="z-10 mt-3 text-3xl font-bold text-biru-800 ps-5">
                  {ProdName}
                </h3>
                <div className="z-10 pb-5 overflow-hidden text-base leading-6 text-biru-700 gap-y-1 ps-5">
                  Rp {ProdPrice}
                </div>
              </article>
            )
          )}
        </div>
      </section>
    </>
  );
}

export default Content;
