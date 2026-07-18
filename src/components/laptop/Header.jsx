import React, { useEffect, useState, useRef } from "react";
import Button from "../button/Button";

function Header() {
  const [showCartQuantity, setShowCartQuantity] = useState(false);

  return (
    <>
      <header className="antialiased bg-white font-capriola">
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Rombong Mamah Hasan
              </h1>

              <p className="mt-1.5 text-sm text-gray-500">
                Aneka Minuman Manis dan Menyegarkan
              </p>
            </div>

            <div className="flex items-center gap-4">
              <button
                className="inline-flex items-center justify-center gap-1.5 rounded-sm border border-gray-200 bg-white px-5 py-3 text-gray-900 transition hover:text-gray-700 focus:ring-3 focus:outline-hidden"
                type="button"
              >
                <span className="text-sm font-medium"> Lokasi </span>
                <i className="fa-solid fa-location-dot"></i>
              </button>

              <Button
                className={`z-[20] !inline-block py-2 !text-sm text-white transall w-[6.5rem] h-[2rem] outline outline-1 outline-biru-700 rounded-xl bg-transparent`}
                buttonOpen={
                  <>
                    <div className="p-[1.3em] text-center rounded-full select-none flexc size-full font-capriola transcenter hover:bg-biru-700 bg-transparent text-primary hover:text-white transall">
                      <span className="text-[0.2em]">Keranjang</span>
                    </div>
                  </>
                }
                buttonClose={
                  <>
                    <div className="p-[1.3em] flexc gap-2 text-center rounded-full select-none flexc size-full font-capriola transcenter hover:bg-biru-700 bg-transparent text-primary hover:text-white transall">
                      <i className="text-[0.2em] fa-solid fa-xmark"></i>
                    </div>
                  </>
                }
                clicked={({ menuOpen, changeButton }) => {
                  // setShowCartQuantity(!showCartQuantity);
                  changeButton("!w-[3rem]");
                }}
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
