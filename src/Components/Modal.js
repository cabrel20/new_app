import React from "react"
import  ReactDOM  from "react-dom"
import "../App.css"
import Wrapper from "./Wrapper"

const Backdrop=({handler})=>{
    return(<div className="overlay" onClick={handler}></div>)
}

const CardModal=({handler})=>{
    return(<div>
         <Wrapper className="w-1/6 rounded-lg bg-slate-50 modal flex flex-col items-center gap-3 py-4">
              <h1 className="text-3xl text-red-500">Notifications</h1>
              <p className="text-xl text-gray-600">Veuillez remplir tous les champs!</p>
              <button className="px-8 py-2 rounded-md bg-blue-600 text-white" onClick={handler}>Okay</button>
         </Wrapper>
    </div>)
}



function Modal({viewHandler}){
    return(<React.Fragment>
      {ReactDOM.createPortal(<Backdrop handler={viewHandler}/>,document.getElementById("overlay-modal"))}
      {ReactDOM.createPortal(<CardModal handler={viewHandler}/>,document.getElementById("Card"))}
    </React.Fragment>)
}

export default Modal