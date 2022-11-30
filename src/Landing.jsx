import React, { useState } from "react";
import ReactDOM from "react-dom";
import "bulma/css/bulma.min.css";
import { SearchBar } from "./App";
import data from "./data.json";
import App from "./App";
import { useParams } from "react-router-dom";

function Landing() {
  return (
    <>
      <section className="hero is-light is-fullheight">
        <div className="hero-body ">
          <div className="container  ">
            <div className="columns is-flex is-centered mb-5 pd-5">
              <figure className="image  is-inline-block ml-auto mr-auto">
                <img
                  src="https://www.triconinfotech.com/wp-content/uploads/2022/02/RETINA-LOGO-1-1-3.svg"
                  className=" main-logo svg-logo "
                  alt="Tricon Infotech"
                />
              </figure>
            </div>
            <SearchBar
              placeholder="Enter a name"
              data={data}
              index={App.index}
              setIndex={App.setIndex}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Landing;
