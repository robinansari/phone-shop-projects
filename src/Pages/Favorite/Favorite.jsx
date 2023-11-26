import { useEffect, useState } from "react";



const Favorite = () => {
    const [favorite ,setFavorite]=useState([]);
    const [eror,setEror]=useState("");

    useEffect(()=>{
        const favouriteItems =JSON.parse(localStorage.getItem("robin"));
        console .log(favouriteItems)
        
        if(!favouriteItems){
            setFavorite(favouriteItems)
            
            
        }
        else {
           setEror("No data founds")
        }
        console.log(favorite)
        
    },[])
    return (
        <div>
            {
                eror?<p>{eror}</p>: 
                <div>
                
                </div>
            }
        </div>
    );
};

export default Favorite;