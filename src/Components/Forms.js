import React,{useRef} from "react"

function Forms({handler,validInputHandler}){
    let foodName=useRef();
    let foodImage=useRef();
    let foodDes=useRef();

     

    const addHandler=(event)=>{
        event.preventDefault();
        if(foodDes.current.value==="" || foodImage.current.value==="" || foodName.current.value===""){
            validInputHandler();
        }else{
      
       const foodItem={
        id:Math.random(),
        name:foodName.current.value,
        image:foodImage.current.value,
         description:foodDes.current.value,
       }
       handler(foodItem);
       foodName.current.value="";
       foodImage.current.value="";
       foodDes.current.value="";}
    }

    return(<>
        <form className="flex flex-col items-center py-4 gap-4 text-gray-600">
            <input type="text" placeholder="Name of your best food" className="bg-slate-200 w-1/2 h-12 rounded-md pl-3" ref={foodName} />
            <input type="text" placeholder="picture of food (url)" className="bg-slate-200 w-1/2 h-12 rounded-md pl-3" ref={foodImage} />
            <textarea  placeholder="Description" className="bg-slate-200 w-1/2 h-20 rounded-md pl-3" ref={foodDes} ></textarea>
            <button className="px-8 py-2 rounded-md bg-blue-500 text-white" onClick={addHandler}>Enregistrez</button>
        </form>
    </>)
}

export default Forms