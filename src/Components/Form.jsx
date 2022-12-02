import React,{useState} from "react";

import Forms from "./Forms";
import SkillPage from "./SkillPage";


function Form(){
    const[page,setPage]=useState(0);

    const FormTitles= ["Employee Details" , "Employee Skills"];

    const PageDisplay = () => {
      if (page === 0){
          return <Forms/>;
      }else if ( page === 1){
          return <SkillPage/>
      }
    };

    return(
        <div className="form">
            <div className="progressbar"> </div>
                <div className="form-containder">
                    <div className="header">
                        <h1 className="is-size-4 has-text-centered has-text-weight-bold">{FormTitles[page]}</h1>
                    </div>
                        <div className="body">
                            {PageDisplay()}
                        </div>
                            <div className="footer">
                            <div class="field is-grouped mb-4 px-6">
                            <div class="control">
                                <button class="button is-link"
                                disabled={page == 0} 
                                onClick={()=>{
                                    setPage((currentPage)=>currentPage - 1);
                                    }} >Prev</button>
                                    </div>
                                <button  class="button is-link"
                                disabled={page == FormTitles.length -1}
                                 onClick={()=>{
                                    setPage((currentPage)=>currentPage + 1);
                                    }}>Next</button>
                            </div>
                      </div>
                    </div>
                </div>
           
    )
}
export default Form


  
    