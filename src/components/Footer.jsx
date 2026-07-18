import React from "react";

function Footer({ className }) {
  return (
    <>
      <footer
        className={`font-capriola p-5 text-center text-xs flexc flex-col gap-2 bg-light shadow ${className}`}
      >
        <div>
          {" "}
          Icons made by{" "}
          <a
            className="text-blue-500"
            href="https://www.flaticon.com/authors/freepik"
            title="Freepik"
          >
            {" "}
            Freepik{" "}
          </a>{" "}
          from{" "}
          <a
            className="text-blue-500"
            href="https://www.flaticon.com/"
            title="Flaticon"
          >
            www.flaticon.com
          </a>
        </div>
        <div>
          {" "}
          Icons made by{" "}
          <a
            className="text-blue-500"
            href="https://www.flaticon.com/authors/amonrat-rungreangfangsai"
            title="amonrat rungreangfangsai"
          >
            {" "}
            amonrat rungreangfangsai{" "}
          </a>{" "}
          from{" "}
          <a
            className="text-blue-500"
            href="https://www.flaticon.com/"
            title="Flaticon"
          >
            www.flaticon.com
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
