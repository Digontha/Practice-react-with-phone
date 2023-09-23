import { useEffect, useState } from "react";
import Favorites from "./Favorites";


const CardDetails = () => {

          
    const [phones,setPhones]=useState()
    const [noFound,setNoFound]=useState(false)
    const [slice,setSlice]=useState(3)

//  console.log(phones);
    useEffect(()=>{
           
        const favoritesItem = JSON.parse(localStorage.getItem("favorites"));
        // console.log(favoritesItem);

        if(favoritesItem){
           setPhones(favoritesItem)

        }else{
            setNoFound("Data Not Found")
        }


    },[])
   const handleRemove=()=>{
    localStorage.clear()
    setPhones([])
    setNoFound("Data Not Found")
   }

    return (
      <>
      <div className="flex justify-center mt-10" onClick={handleRemove}>
        <button className="btn btn-warning">Delate All</button>
      </div>
      {
        noFound? <p className="text-center mt-10 font-bold">{noFound}</p> :
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-3">
        {
            phones?.slice(0,slice).map(phone=> <Favorites phone={phone}></Favorites>)
        }
      </div>
      }
     {
        phones?.length > 3 && 
         <div className="flex justify-center my-10">
        {
            slice > 3 ? <button  onClick={()=>setSlice(3)} className="btn btn-success">See less</button> : <button  onClick={()=>setSlice(phones.length)} className="btn btn-success">See more</button>
        }
      </div>
     }
      </>
    );
};

export default CardDetails;