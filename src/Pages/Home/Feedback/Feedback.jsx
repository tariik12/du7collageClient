import { useEffect, useState } from "react";

const Feedback = () => {
    const [reviewsData, setReviewsData] = useState([])
console.log(reviewsData)
    useEffect(() =>{
        fetch('https://du7collage-server.vercel.app/reviews')
        .then(res => res.json())
        .then(data =>setReviewsData(data))
    },[])
    return (
        <div className="md:mt-[300px]">
            <h1 className="text-center my-5">Review</h1>
        {/* <ForHeader title='Popular Classes'></ForHeader> */}

      <div className="grid grid-cols-1  md:grid-cols-3 md:gap-4 mx-4 ">
        {
          reviewsData.slice(0,3).map((index,reviewData) => <div key={index} className="card mb-4 w-full bg-base-100 shadow-xl">
           <h1 className="text-center">{reviewData.collageName}</h1>
            <div className="card-body">
              <h2 className="card-title">
               review Name: {reviewData.name}
              </h2>
              <h2 className="">
             {reviewData.review}
              </h2>
            </div>
          </div>)
        }
      </div>
    </div>
    );
};

export default Feedback;