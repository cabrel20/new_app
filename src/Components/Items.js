
function Items({image,name,description}){
    return(<>
    <div className="flex flex-col items-center py-3 my-8 w-2/6 gap-2 bg-slate-50 rounded-lg shadow-md">
        <img src={image} alt="food" className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"/>
        <h2 className="text-2xl uppercase text-gray-500">{name}</h2>
        <p className="px-4 pb-2 text-md text-start text-gray-500">{description}</p>
    </div>
    </>)
}

export default Items