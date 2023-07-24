import { useEffect, useState } from "react";
import { FaRegArrowAltCircleRight, FaSistrix } from "react-icons/fa";
import { Link } from "react-router-dom";


const CollagesCard = () => {
    const [CollagesData, setCollagesData] = useState([])
// console.log(CollagesData[1].events)
    useEffect(() =>{
        fetch('https://du7collage-server.vercel.app/collages')
        .then(res => res.json())
        .then(data =>setCollagesData(data))
    },[])
    // const [allToys, setAllToys] = useState([])
    const [searchText, setSearchText] = useState('')
    // const [loading, setLoading] = useState(true)
 const handleSearch =() =>{
  //  setLoading(true)
   fetch(`https://du7collage-server.vercel.app/collagesSearch/${searchText}`)
   .then(res =>res.json())
   .then(data =>{
      //  setLoading(false)
       setCollagesData(data)
       console.log(data)
   })
 }
//  if(loading){
//    return <progress className="progress w-56"></progress>
//    }
    return (
        <div className="">
            <h1 className="text-center my-5">Collage</h1>
            <div className="form-control md:w-1/3 mt-20 absolute z-50 top-0 end-0 mx-10 bg-black rounded-2xl">
                    <div className="relative">
                        <input onChange={(event)=>setSearchText(event.target.value)} type="text" placeholder="Search Your Collage" className="input bg-transparent border-cyan-100 w-full pr-16 text-cyan-100" />
                        <button onClick={handleSearch} className="btn  btn-outline absolute top-0 rounded-2xl right-0 rounded-l-none"><FaSistrix className="w-16 text-cyan-100 h-8"/></button>
                    </div>
                </div>

      <div className="grid grid-cols-1  md:grid-cols-3 md:gap-4 mx-4 ">
        {
          CollagesData.slice(0,3).map(collageData => <div key={collageData.collageName} className="card mb-4 w-full bg-base-100 shadow-xl">
            <img src={collageData.image} className="w-full h-72 rounded-md" alt="Shoes" />
            <div className="card-body">
              <h2 className="card-title">
               Collage Name: {collageData.collageName}
              </h2>
              <h2 className="">
              <strong>Admission Dates :</strong> {collageData.admissionDate}
              </h2>
              <div className="flex justify-between">
                <div>
                    <strong>Event</strong>
                    {
                    collageData.events.map((event,index)=><li key={index}>{event.eventName}</li>
                    
                    )
                }
                    </div>
                <div className="me-20">
                <strong>Sports</strong>
                {
                    collageData.sports.map((sport,index)=><li key={index}>{sport.sportsName}</li>
                    
                    )
                }
                </div>
              </div>
              <div className="card-actions justify-between items-center">
              <div className="ms-24">
                <strong>Sports</strong>
                {
                    collageData.researchHistory.map((research,index)=><li key={index}>{research}</li>
                    
                    )
                }
                </div>
                 
              <Link  to={`/collages/${collageData._id}`}  ><button className=" btn-outline  rounded-full btn-info"
  ><FaRegArrowAltCircleRight className="w-16 h-16"/></button></Link>
              </div>
            </div>
          </div>)
        }
      </div>
    </div>
    );
};

export default CollagesCard;
