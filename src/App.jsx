import React, { useState } from "react";

import "bulma/css/bulma.min.css";
import data from "./data.json";
import Tabss from "./Tabss";
import { useParams } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar has-background-white" role="navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="#">
            <img
              src="https://www.triconinfotech.com/wp-content/uploads/2022/02/RETINA-LOGO-1-1-3.svg"
              className=" main-logo svg-logo"
              alt="Tricon Infotech"
            />
          </a>
        </div>
      </nav>
    </div>
  );
}

function ProfileInfo({ data, index }) {
  return (
    <div className="has-background-light box">
      <div div className=" columns">
        <div className="column ">
          <div className=" has-background-light">
            <br />
            <div className="columns">
              <div className="column is-two-third ">
                <article className="media ">
                  <div className="media-left ">
                    <figure className="image is-128x128 mt-4 ml-4 mr-4">
                      <img
                        className="is-rounded"
                        src="https://bulma.io/images/placeholders/128x128.png"
                        alt="Image"
                      />
                    </figure>
                  </div>
                  <div className="media-content ">
                    <div className="content has-text-link">
                      <p>
                        <h3 className="is-size-5 has-text-black-light text-weight-normal">
                          {data[index].name}
                        </h3>
                        {data[index].role}
                      </p>
                      <div className="block">
                        <button className="button is-primary has-text-white mr-3">
                          Contact
                        </button>

                        <button className="button is-link is-outlined">
                          Share
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>

        <div className="column is-one-third has-background-light">
          <table height={110} width={200} className="mt-3 pl-0 ml-0">
            <tr className="has-text-black content has-text-weight-medium">
              <td>Age:</td>
              <td>{data[index].age}</td>
            </tr>
            <tr className="has-text-black has-text-weight-medium">
              <td>Location:</td>
              <td>{data[index].location}</td>
            </tr>
            <tr className="has-text-black has-text-weight-medium">
              <td>Experinece:</td>
              <td>{data[index].experience}</td>
            </tr>
          </table>

          <tr>
            <td>
              <a href="https://twitter.com/explore">
                <i className=" pr-4 icon-foter fab fa-twitter fa-2x has-text-info is-hovered"></i>
              </a>
              <a href="https://www.linkedin.com/">
                <i className=" pr-4 icon-foter fab fa-linkedin-in has-text-info fa-2x is-hovered"></i>
              </a>
              <a href="#/">
                <i className="pr-4 icon-foter fab fa-stack-overflow has-text-info fa-2x is-hovered"></i>
              </a>
              <a href="www.gmail.com">
                {" "}
                <i className=" pr-4 icon-foter fas fa-envelope has-text-info fa-2x is-hovered"></i>
              </a>
            </td>
          </tr>
        </div>
      </div>
    </div>
  );
}

function ProfileTab() {
  return (
    <div className="tabs">
      <ul>
        <li className=" has-text-link">
          <p className="is-size-5 ml-5 pl-5">Profile</p>
        </li>
      </ul>
    </div>
  );
}

function About({ data, index }) {
  return (
    <>
      <div>
        <h3 className="is-size-4 has-text-link"> About</h3>
        <br />
        <p className="is-size-5 has-text-weight-semi-bold has-text-black has-text-justified">
          {data[index].about}
        </p>
      </div>
    </>
  );
}

function SkillsAbout({ data, index, setIndex }) {
  let flag = 1;
  return (
    <>
      <div className="columns ml-5">
        <div className="column is-two-thirds">
          <div className="box">
            <About data={data} index={index} />

            <hr />
            <h3 class="is-size-4 has-text-link"> Skills</h3>
            <br></br>
            <Tabss indexUser={index} />
          </div>
        </div>
        <div className="columns ml-5">
          <div className="column is-one-thirds mt-4">
            <div className="box">
              <SearchBar
                placeholder="Enter a name"
                data={data}
                index={index}
                setIndex={setIndex}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function SearchBar({ placeholder, data, index, setIndex }) {
  let index2;
  const [filtereddata, setFilterData] = useState([]);

  const handleChange = (event) => {
    const search = event.target.value;
    const newfilter = data.filter((value) => {
      return value.name.toLowerCase().startsWith(search.toLowerCase());
    });

    if (search === "") {
      setFilterData([]);
    } else {
      setFilterData(newfilter);
    }
  };

  const find_user = function (myTodos, search_user) {
    index2 = myTodos.findIndex(function (todo, index2) {
      return todo.name === search_user;
    });
    console.log("the user is at" + " " + index2);
    let userIndex = index2;
    setIndex(userIndex);
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
            onChange={handleChange}
          />
        </div>
        <div class="control">
          <a class="button is-info">Search</a>
        </div>
      </div>
      {filtereddata.length != 0 && (
        <div>
          {filtereddata.map((value, key) => {
            return (
              <div>
                <a onClick={handleClick1}>
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

export default function App() {
  let { id } = useParams();
  const [index, setIndex] = useState(id);

  // console.log(id);

  return (
    <>
      <Navbar />
      <ProfileInfo data={data} index={index} />
      <ProfileTab />

      <SkillsAbout data={data} index={index} setIndex={setIndex} />
    </>
  );
}
