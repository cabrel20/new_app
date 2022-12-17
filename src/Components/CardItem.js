

function CardItem({name,image,age,personHandler}){
    
    return(<>
    <div className="flex gap-2  border-b border-gray-300 py-3 pl-3 cursor-pointer hover:bg-blue-50" onClick={()=>personHandler()}>
         <img src={image} alt="person" className="h-16 w-16 rounded-full object-cover"/>
         <div>
            <h1 className="text-lg font-bold text-gray-600">{name}</h1>
            <h2 className="text-gray-400 text-md">{age} ans</h2>
         </div>
    </div>
    </>)
}

export default CardItem