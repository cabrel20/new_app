import React,{useState} from "react"
import Forms from "./Components/Forms";
import Wrapper from "./Components/Wrapper";
import Items from "./Components/Items";
import Modal from "./Components/Modal";


  function App(){
    let [foodTable,setFoodTable]=useState([]);
    const [isValid,setIsValid]=useState(true);
    const validHandler=()=>{
      setIsValid(false);
    }
    const addFoodHandler=(food)=>{
             setFoodTable(()=>{
                return [...foodTable,food];
               })
              
    }

    const viewHandler=()=>{
      setIsValid(!isValid);
    }
   document.getElementById("body").classList="bg-slate-100"
    return(<React.Fragment>
      <div className="flex flex-col items-center py-12 w-full gap-8">
           <h1 className="text-3xl text-gray-600 ">My Food App</h1>
           <Wrapper className="bg-white rounded-lg w-3/5 shadow-lg">
              <Forms handler={addFoodHandler} validInputHandler={validHandler}/>
           </Wrapper>
          {foodTable.map((foods)=> <Items image={foods.image} description={foods.description} name={foods.name} key={foods.id}/>)}
          {isValid?null:<Modal viewHandler={viewHandler}/>}
      </div>
    </React.Fragment>)
  }

export default App;
