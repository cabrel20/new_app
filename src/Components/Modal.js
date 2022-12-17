import React from "react"
import ReactDom from "react-dom"
import "../App.css"
import Wrapper from "./Wrapper"
const Overlay=(props)=>{
    return(<div className="overlay" onClick={props.handler}/>)
} 

const Card=({name,age,image,metier,handler})=>{
   
       return(   
         <div className=" flex flex-col items-center w-4/5 rounded-lg modal w-full">
             <Wrapper className="w-3/5 rounded-lg bg-white">
        <div className="flex flex-col items-center gap-2  py-3 pl-3">
         <img src={image} alt="person" className="h-32 w-32 rounded-full object-cover"/>
         <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
            <h2 className="text-gray-600 text-lg">{metier}</h2>
            <h2 className="text-gray-500 text-lg">{age} ans</h2>
              <button className="px-6 py-2 rounded-md text-white my-2 bg-blue-500 text-white " onClick={handler}>Cancel</button>
         </div>
        </div>
        </Wrapper>
         </div>);
         
  
} 

const Modal=({name,age,image,metier,viewHandler})=>{
    return(<React.Fragment>
        {ReactDom.createPortal(<Overlay handler={viewHandler}/>,document.getElementById("overlay-modal"))}
        {ReactDom.createPortal(<Card name={name} age={age} image={image} metier={metier} handler={viewHandler}/>,document.getElementById("Card"))}
    </React.Fragment>)
}

export default Modal