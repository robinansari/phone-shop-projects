import { useEffect, useState } from "react";
import {  Link, useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";

const CardShow = () => {
    const [phn,setPhn]=useState({});

    const {id} = useParams();
    const phone = useLoaderData();
  
  

    useEffect(()=>{
        const findId = phone?.find(phones => phones.id == id);
        setPhn(findId)
    },[id,phone])
   
      let {brand_name,image,phone_name}=phn;
    

      const handleclick =()=>{
        const addedItems =[];
        
        const favouriteItems =JSON.parse(localStorage.getItem("robin"))

        if(!favouriteItems){
          addedItems.push(phn)
          localStorage.setItem("robin",JSON.stringify(addedItems));
          swal("Good job!", "Product added!", "successfully");
        }
        else{

          const isexits =favouriteItems.find(card =>card.id == id)

          if (!isexits){
            addedItems.push(...favouriteItems,phn)
          localStorage.setItem("robin",JSON.stringify(addedItems));
          swal("Good job!", "Product added!", "successfully");
          
          }

          else{
            swal("eror","eror", "eror");
          }

        }
        
         
      }
    return (
      <div className="flex justify-center items-center h-[80vh]">
       
        <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
    <img
      src={image}
      alt="image"
      className="object-cover w-full h-full"
    />
  </div>
  <div className="p-6">
    <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
      {brand_name}
    </h6>
    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      {phone_name}
    </h4>
    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
      Like so many organizations these days, Autodesk is a company in
      transition. It was until recently a traditional boxed software company
      selling licenses. Yet its own business model disruption is only part of
      the story
    </p>
      <div>
      <button onClick={handleclick}
        className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-pink-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        Add to Favourite
       
      </button>
      </div>
      <div className="btn btn-primary mt-2">
        <Link to="/">
        <button>
          Back to previous page
        </button>
        </Link>
      </div>
  </div>
</div>
      </div>




    );
};

export default CardShow;