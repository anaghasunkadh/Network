import React, { useState } from "react";
import ReactDOM from "react-dom";
import "bulma/css/bulma.min.css";
import data from "./data.json";

let userSkills = data.map((user) => {
    return { userSkill: user.skills };
  });
  

function UserSkillsTable(props) {

    return(
        <>
        
        <div>
        <table class="table is-fullwidth">
          <thead>
            <tr>
              <th className=" has-text-weight-semi-bold has-text-black has-text-justified">Skill</th>
              <th className="has-text-weight-semi-bold has-text-black has-text-justified"> Rating</th>
            </tr>
          </thead>

          <tbody className="is-size-5 has-text-weight-semi-bold has-text-black">
            {props.userProglang.map((e) => {
              //console.log(e.skill_name + ' ' + e.rating)
              return (
                <tr>
                  <td>{e.skill_name}</td>
                  <td>
                    <progress
                      className="progress is-info"
                      max="100"
                      value={e.rating}
                    >
                      {e.rating}
                    </progress>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      </>
    )
}

  
function UserFrameworkTable(props) {
    return(
        <div>
        <table class="table is-fullwidth">
          <thead>
            <tr>
              <th className=" has-text-weight-semi-bold has-text-black has-text-justified">Skill</th>
              <th className=" has-text-weight-semi-bold has-text-black has-text-justified"> Rating</th>
            </tr>
          </thead>

          <tbody className="is-size-5 has-text-weight-semi-bold has-text-black">
            {props.userframework.map((e) => {
              //console.log(e.skill_name + ' ' + e.rating)
              return (
                <tr>
                  <td>{e.skill_name}</td>
                  <td>
                    <progress
                      className="progress is-info"
                      max="100"
                      value={e.rating}
                    >
                      {e.rating}
                    </progress>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    )
}

function UserLibrariesTable(props) {
    return(
        <div>
        <table class="table is-fullwidth">
          <thead>
            <tr>
              <th className=" has-text-weight-semi-bold has-text-black has-text-justified">Skill</th>
              <th className=" has-text-weight-semi-bold has-text-black has-text-justified"> Rating</th>
            </tr>
          </thead>

          <tbody className="is-size-5 has-text-weight-semi-bold has-text-black">
            {props.userlibraries.map((e) => {
              //console.log(e.skill_name + ' ' + e.rating)
              return (
                <tr>
                  <td>{e.skill_name}</td>
                  <td>
                    <progress
                      className="progress is-info"
                      max="100"
                      value={e.rating}
                    >
                      {e.rating}
                    </progress>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    )
}

export default function Tabss(props){
    let skillVariable = props.indexUser
    
  let skills = userSkills[skillVariable].userSkill;
  
  let [proglang, framework, libraries] = skills;
  let userProglang = proglang.proglang;
  let userframework = framework.framework;
  let userlibraries = libraries.Libraries;
const [toggleState, setToggleState] = useState(1);
  function handleClick2(index) {
    console.log(index);
    setToggleState(index);
  }
  return (
    <div className="container">
      <div class="tabs">
        <ul>
          <li
            className={toggleState === 1 ? "is-active" : " "}
            onClick={() => handleClick2(1)}
          >
            <a className="is-family-monospace is-capitalized ">ProgrammingLanguages</a>
          </li>
          <li
            className={toggleState === 2 ? "is-active" : " "}
            onClick={() => handleClick2(2)}
          >
            <a className="is-family-monospace is-capitalized">Frameworks</a>
          </li>
          <li
            className={toggleState === 3 ? "is-active" : " "}
            onClick={() => handleClick2(3)}
          >
            <a className="is-family-monospace is-capitalized ">Libraries</a>
          </li>
        </ul>
      </div>

      <div className="content-tabs">
        <div
          className={
            toggleState === 1
              ? "has-background-white p-2   is-block"
              : "has-background-white p-2 is-hidden"
          }
        >
         
         <UserSkillsTable userProglang={userProglang}/>
         

        </div>

        <div
          className={
            toggleState === 2
              ? "has-background-white p-2   is-block"
              : "has-background-white p-2 is-hidden"
          }
        >
         
          <UserFrameworkTable userframework={userframework}/>
        </div>

        <div
          className={
            toggleState === 3
              ? "has-background-white p-2   is-block"
              : "has-background-white p-2 is-hidden"
          }
        >
          
          <UserLibrariesTable userlibraries={userlibraries}/>
        </div>
      </div>
    </div>
  );
}
