import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextPage,prevPage } from "../redux/actions";
import style from "../styles/PaginateNew.module.css"


const PaginateNew=({cantPages})=>{
const {numPage}=useSelector((state)=>state)
const dispatch=useDispatch()
function next(){
    dispatch(nextPage())
}

function prev(){
    dispatch(prevPage())
}
    return(   
    
        <div className={style.page}>
        
        {   numPage>1 ? <div>
            <button onClick={prev}>PREV</button>
            <p>{numPage-1}</p>
            </div>:null
}

    <h3>{numPage}</h3>

    {

       numPage < cantPages ? (<div><p>{numPage + 1}</p><button onClick={next}>NEXT</button></div>):null
  
}



    </div>) 
 
    
    
    
}
export default PaginateNew;