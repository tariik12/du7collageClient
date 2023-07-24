import { useEffect, useState } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const Collages = () => {
    const [CollagesData, setCollagesData] = useState([])
// console.log(CollagesData[1].events)
    useEffect(() =>{
        fetch('collage.json')
        .then(res => res.json())
        .then(data =>setCollagesData(data))
    },[])
    return (
        <div className="pt-[100px]">
        <h1 className="text-center my-5">All Collage</h1>
    {/* <ForHeader title='Popular Classes'></ForHeader> */}

  <div className="grid grid-cols-1  md:grid-cols-3 md:gap-4 mx-4 ">
    {
      CollagesData.map(collageData => <div key={collageData.collageName} className="card mb-4 w-full bg-base-100 shadow-xl">
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

export default Collages;