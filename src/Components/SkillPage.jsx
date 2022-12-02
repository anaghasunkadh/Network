import React,{useState} from "react";

function SkillPage() {
    const [inputList, setinputList]= useState([{Skill1:'', Skill2:''}]);
  
    const handleinputchange=(e, index)=>{
      const {name, value}= e.target;
      const list= [...inputList];
      list[index][name]= value;
      setinputList(list);
    }
   
    const handleremove= index=>{
      const list=[...inputList];
      list.splice(index,1);
      setinputList(list);
    }
  
    const handleaddclick=()=>{ 
      setinputList([...inputList, { Skill1:'', Skill2:''}]);
    }
    return (
      <div className="container">
          <div className="row">
          <div className="field mr-0 pt-3 px-6">
          <label class="label">Skill</label>
             
              { 
              inputList.map( (x,i)=>{
                return(
                    
                <div className="row mb-3">
                   <div class="form-group col-md-4">
                   <label className="is-family-monospace has-text-weight-bold">Programming Languages </label>
                    <input type="text"  name="firstName" class="input"  placeholder="Enter the Skill" onChange={ e=>handleinputchange(e,i)} />
                    
                   <label className="is-family-monospace has-text-weight-bold">Rating </label>
                    <input type="text"  name="firstName" class="input"  placeholder="Enter the Rating" onChange={ e=>handleinputchange(e,i)} />
                 </div>
                 
  
                 <div>
                 <label className="is-family-monospace has-text-weight-bold" >Frameworks</label>
                    <input type="text"  name="firstName" class="input"  placeholder="Enter the Skill" onChange={ e=>handleinputchange(e,i)} />
              
                   <label className="is-family-monospace has-text-weight-bold">Rating </label>
                    <input type="text"  name="firstName" class="input"  placeholder="Enter the Rating" onChange={ e=>handleinputchange(e,i)} />
                 </div>
                
  
                 <div>
                 <label className="is-family-monospace has-text-weight-bold">Libraries</label>
                    <input type="text"  name="firstName" class="input"  placeholder="Enter the Skill" onChange={ e=>handleinputchange(e,i)} />
              
                   <label className="is-family-monospace has-text-weight-bold">Rating </label>
                    <input type="text"  name="firstName" class="input"  placeholder="Enter the Rating" onChange={ e=>handleinputchange(e,i)} />
                 </div>
                 <div class="form-group col-md-2 mt-4">
                 {
                    inputList.length!==1 &&
                    <button  className="btn btn-danger mx-1" onClick={()=> handleremove(i)} style={{marginBottom: 10}}>Remove</button>
                 }
                 { inputList.length-1===i &&
                 <button  className="btn btn-success" onClick={ handleaddclick}>Add More</button>
                 }
                 </div>
  
                 
                 
              </div>
                );
               } )} 
  
                 
         </div>
       </div>
       
      </div>
       
    );
  }

  export default SkillPage;