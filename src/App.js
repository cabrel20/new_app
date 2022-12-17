import React,{useState} from "react"
import Wrapper from "./Components/Wrapper";
import CardItem from "./Components/CardItem";
import People from "./Components/data";
import Modal from "./Components/Modal";
  function App(){
    const [isView,setIsView]=useState(false);
    const [people,setPeople]=useState(People);
    const peopleHandler=(id1)=>{
       setIsView(true);
       setPeople(People.filter((pers)=>pers.id===id1));
    }
    const viewHandler=()=>{
      setIsView(!isView);
    }
   document.getElementById("body").classList="bg-slate-100"
    return(<React.Fragment>
      <div className="flex flex-col items-center py-12 w-full gap-8">
            <h1 className="text-gray-600 text-5xl">Amis</h1>
         <Wrapper className="w-2/5 bg-gray-50 rounded-md shadow-xl">
             {People.map((person)=><CardItem image={person.image} name={person.name} age={person.age} personHandler={()=>peopleHandler(person.id)}/>)} 
    </Wrapper>
          
     { isView ? <Modal name={people[0].name} image={people[0].image} age={people[0].age} metier={people[0].metier} viewHandler={viewHandler}/>:null}
          
      </div>
    </React.Fragment>)
  }

export default App;
