import React, { useState } from "react";
import ReactDOM from "react-dom";
import "bulma/css/bulma.min.css";
import { SearchBar } from "./App";
import data from "./data.json";
import App from "./App";
import { useParams } from "react-router-dom";

export function SearchBarLanding({
  placeholder,
  data,
  indexland,
  setIndexland,
}) {
  let index2;
  const [filtereddataland, setFilterDataland] = useState([]);

  const handleChangeland = (event) => {
    const search = event.target.value;
    const newfilter = data.filter((value) => {
      return value.name.toLowerCase().startsWith(search.toLowerCase());
    });

    if (search === "") {
      setFilterDataland([]);
    } else {
      setFilterDataland(newfilter);
    }
  };

  const find_user = function (myTodos, search_user) {
    index2 = myTodos.findIndex(function (todo, index2) {
      return todo.name === search_user;
    });
    console.log("the user is at" + " " + index2);
    let userIndex = index2;
    setIndexland(userIndex);
  };

  const handleClick1 = (e) => {
    console.log(e.target.innerText);
    let click_text = e.target.innerText;

    let click_text_contents = click_text.split(/[\n,]/);
    console.log("name is" + " " + click_text_contents[0]);
    find_user(data, click_text_contents[0]);
  };

  return (
    <>
      <div class="field has-addons columns is-flex is-centered pt-6 mt-4">
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder={placeholder}
            onChange={handleChangeland}
          />
        </div>
        <div class="control">
          <a class="button is-info">Search</a>
        </div>
      </div>
      {filtereddataland.length != 0 && (
        <div>
          {filtereddataland.map((value, key) => {
            return (
              <div>
                <a onClick={handleClick1} href={"/" + indexland}>
                  <p className="para box has-background-light mb-4 has-text-black is-size-5 text-weight-normal">
                    {value.name},{value.location}
                    <br />
                    {value.role}
                  </p>
                </a>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

function Landing() {
  const [indexland, setIndexland] = useState(null);
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
            <SearchBarLanding
              placeholder="Enter a name"
              data={data}
              indexland={indexland}
              setIndexland={setIndexland}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Landing;
