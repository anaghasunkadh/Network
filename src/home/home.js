import React, { useState } from "react";
import hello from "hellojs/dist/hello.all.js";
import axios from "axios";
import data from "./data.json";
import Tabss from "./Tabss";

export function Navbar() {
  return (
    <div>
      <div className="navbar-menu">
        <nav
          className="navbar navbar-start has-background-white"
          role="navigation"
        >
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
    </div>
  );
}

function ReadOnly({ data, index, handleDoubleClick }) {
  return (
    <div>
      <table height={110} className="mt-3 pl-0 ml-0">
        <tr className="has-text-black content has-text-weight-medium">
          <td>name:</td>
          <td onDoubleClick={handleDoubleClick}>{data[index].name}</td>
        </tr>
        <tr className="has-text-black has-text-weight-medium">
          <td>Role:</td>
          <td onDoubleClick={handleDoubleClick}>{data[index].role}</td>
        </tr>
        <tr className="has-text-black has-text-weight-medium">
          <td>Experinece:</td>
          <td onDoubleClick={handleDoubleClick}>{data[index].experience}</td>
        </tr>
        <tr className="has-text-black has-text-weight-medium">
          <td>About:</td>
          <td onDoubleClick={handleDoubleClick}>{data[index].about}</td>
        </tr>
      </table>
    </div>
  );
}

function Editable({ data, index }) {
  const msft = hello("msft").getAuthResponse();
  const values = [];
  const [newData, SetNewData] = useState({
    username: data[index].name,
    role: data[index].role,
    experience: data[index].experience,
    about: data[index].about,
  });
  const access_token = msft.access_token;

  function handle(e) {
    const enterData = { ...newData };
    enterData[e.target.id] = e.target.value;
    SetNewData(enterData);

    //console.log(newData.username);
  }

  function Submit(e) {
    e.preventDefault();

    values.push([
      newData.username,
      newData.role,
      newData.experience,
      newData.about,
    ]);

    console.log(values);

    axios
      .post(
        "https://graph.microsoft.com/v1.0/me/drive/root:/demo.xlsx:/workbook/tables/Table1/rows/add",
        { index: null, values },

        {
          headers: { Authorization: `Bearer ${access_token}` },
        }
      )
      .then((res) => {
        console.log(res);
        const successMessage = "Successfully wrote your data to demo.xlsx!";
        alert(successMessage);
      })
      .catch((err) => console.error(err));
  }

  return (
    <div>
      <form onSubmit={(e) => Submit(e)}>
        <table height={110} className="mt-3 pl-0 ml-0">
          <tr>
            <td>name:</td>
            <td>
              <input
                class="input"
                id="username"
                type="text"
                placeholder="enter name"
                required="required"
                name="fullname"
                defaultValue={newData.username}
                onChange={(e) => handle(e)}
              ></input>
            </td>
          </tr>

          <tr>
            <td>Role:</td>
            <td>
              <input
                class="input"
                id="role"
                type="text"
                placeholder="enter role"
                required="required"
                name="role"
                defaultValue={newData.role}
                onChange={(e) => handle(e)}
              />
            </td>
          </tr>
          <tr>
            <td>Experinece:</td>
            <td>
              <input
                class="input"
                type="text"
                id="experience"
                placeholder="enter exp"
                required="required"
                name="exp"
                defaultValue={newData.experience}
                onChange={(e) => handle(e)}
              />
            </td>
          </tr>
          <tr>
            <td>About:</td>
            <td>
              <textarea
                class="textarea"
                id="about"
                placeholder="Textarea"
                defaultValue={newData.about}
                onChange={(e) => handle(e)}
              ></textarea>
            </td>
          </tr>
          <tr>
            <td>
              <button>SAVE CHANGES</button>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
}
function UserData({ data, index }) {
  const [editData, setEditData] = useState(false);
  function handleDoubleClick() {
    setEditData(!editData);
  }
  return (
    <div className="box has-background-light">
      {editData ? (
        <Editable data={data} index={index} />
      ) : (
        <ReadOnly
          data={data}
          index={index}
          handleDoubleClick={handleDoubleClick}
        />
      )}
    </div>
  );
}
export function ProfileInfo({ data, index }) {
  const [edit, displayEdit] = useState(false);
  function handleEdit() {
    displayEdit(!edit);
  }
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

                        <button
                          className="button is-danger is-outlined ml-3"
                          onClick={handleEdit}
                        >
                          Edit
                        </button>
                        {edit ? <UserData data={data} index={index} /> : null}
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

export function ProfileTab() {
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
    <div>
      <div>
        <h3 className="is-size-4 has-text-link"> About</h3>
        <br />
        <p className="is-size-5 has-text-weight-semi-bold has-text-black has-text-justified">
          {data[index].about}
        </p>
      </div>
    </div>
  );
}

export function SkillsAbout({ data, index, setIndex }) {
  let flag = 1;
  return (
    <div>
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
    </div>
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
    let userindex = index2;
    setIndex(userindex);
  };

  const handleClick1 = (e) => {
    console.log(e.target.innerText);
    let click_text = e.target.innerText;

    let click_text_contents = click_text.split(/[\n,]/);
    console.log("name is" + " " + click_text_contents[0]);
    find_user(data, click_text_contents[0]);
  };

  return (
    <div>
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
                <a onClick={handleClick1} href={`/` + index}>
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
    </div>
  );
}

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
    <div>
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
    </div>
  );
}

function Landing({ placeholder_name }) {
  const [indexland, setIndexland] = useState(null);
  return (
    <div>
      <section className="hero is-light is-fullheight ">
        <h1 className="is-size-5">Welcome {placeholder_name}</h1>

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
              placeholder="Enter a Name"
              data={data}
              indexland={indexland}
              setIndexland={setIndexland}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
export function DisplayName({ token, state, setState }) {
  console.log("data eceived" + token);
  React.useEffect(() => {
    axios
      .get(
        "https://graph.microsoft.com/v1.0/me?$select=displayName,mail,userPrincipalName",

        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        const me = res.data;

        setState({ ...state, me: me });
      });
  }, [token]);

  const { me } = state.me;

  return (
    <div>
      <Navbar />
      <Landing placeholder_name={state.me.displayName} />
      <p>hello {state.me.userPrincipalName}</p>
    </div>
  );
}

export function Home() {
  const msft = hello("msft").getAuthResponse();
  const [state, setState] = React.useState({
    me: "",
    successMessage: "",
    token: msft.access_token,
  });

  //console.log("token is " + state.token);
  const access_token = state.token;

  return <DisplayName token={state.token} state={state} setState={setState} />;
}
