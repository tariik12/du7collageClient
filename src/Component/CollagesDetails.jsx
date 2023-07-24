
import { useLoaderData } from "react-router-dom";


const CollagesDetails = () => {
    const collagesDetails = useLoaderData([]);
    console.log(collagesDetails)
    const {collageName,image,admissionDate,collegeRating,events,researchHistory,researchWorks, sports} =collagesDetails;
    return (
<div className="mb-10">
    <div>
        <img src={image} className="w-full px-10" alt="" />
    </div>
    <div>
        <h1>{collageName}</h1>
        <h5>{admissionDate}</h5>
        <p>{collegeRating}</p>
    </div>
    <div className="">
            <h1 className="text-center my-5">Collage</h1>

      <div className="grid grid-cols-1  md:grid-cols-3 md:gap-4 mx-4 ">
        {
          events.map((event,index) => <div key={index} className="card mb-4 w-full bg-base-100 shadow-xl">
            <img src={event.eventImage} className="w-full h-72 rounded-md" alt="Shoes" />
            <div className="card-body">
              <h2 className="card-title">
               Collage Event: {event.eventName}
              </h2>
            </div>
          </div>)
        }
      </div>
      <div className="grid grid-cols-1  md:grid-cols-3 md:gap-4 mx-4 ">
        {
          sports.map((sport,index) => <div key={index} className="card mb-4 w-full bg-base-100 shadow-xl">
            <img src={sport.sportsImage} className="w-full h-72 rounded-md" alt="Shoes" />
            <div className="card-body">
              <h2 className="card-title">
               Collage Sport:  {sport.sportsName}
              </h2>
            </div>
          </div>)
        }
      </div>
    </div>
    <div className="flex w-1/2 mx-auto">
               
                <div className="">
                <strong>Research History</strong>
                {
                    researchHistory.map((History,index)=><li key={index}>{History}</li>
                    
                    )
                }
                </div>
                <div className=" ms-32">
                <strong>Research Work</strong>
                {
                    researchWorks.map((work,index)=><li key={index}>{work}</li>
                    
                    )
                }
                </div>
              </div>
</div>
    );
};

export default CollagesDetails;