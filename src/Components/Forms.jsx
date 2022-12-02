import React,{useState} from "react";


function Forms(){
  return (
    <div className="container content box">
    <div className="app">
    <form>
    <div class="field mr-0 pt-3 px-6">
  <label class="label">Name</label>
  <div class="control">
    <input class="input" type="text" placeholder="Text input"/>
  </div>
</div>

<div class="field px-6">
  <label class="label">Role</label>
  <div class="control">
    <input class="input" type="text" placeholder="Text input"/>
  </div>
</div>

<div class="field px-6">
  <label class="label">Age</label>
  <div class="control">
    <input class="input" type="text" placeholder="Text input"/>
  </div>
</div>

<div class="field px-6">
  <label class="label">Location</label>
  <div class="control">
    <input class="input" type="text" placeholder="Text input"/>
  </div>
</div>



<div class="field px-6">
  <label class="label">Experience</label>
  <div class="control">
    <div class="select">
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
        <option>12</option>
        <option>13</option>
        <option>14</option>
        <option>15</option>
      </select>
    </div>
  </div>
</div>

<div class="field px-6">
  <label class="label">About</label>
  <div class="control">
    <textarea class="textarea" placeholder="Textarea"></textarea>
  </div>
</div>




    </form>
  </div>;
 
  </div>
  )
}
export default Forms;
