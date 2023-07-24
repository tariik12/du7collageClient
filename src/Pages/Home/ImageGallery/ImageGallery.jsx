import { useEffect, useState } from "react";

const ImageGallery = () => {

    const [galleryData, setGalleryData] = useState([])
// console.log(alleryData[1].events)
    useEffect(() =>{
        fetch('gallery.json')
        .then(res => res.json())
        .then(data =>setGalleryData(data))
    },[])
    return (
        <div className=' mb-20  '>
  <div className="hidden md:block ">
  <div className='md:flex   ' >
          {/* 1row */}
          <div className='md:w-1/2 '>
            <div className=' md:h-[600px] p-2 '  data-aos="zoom-in">
              <div data-aos="fade-left" className=' h-[200px] grid grid-cols-1 md:grid-cols-2 gap-2'>
                {
                  galleryData?.slice(0,6).map((clGallery, index) => (
                    <div key={index} className="md:card w-full h-[250px]   bg-base-100 shadow-xl ">
                      <img src={clGallery.image} className="w-full h-full  rounded-lg   " />
                    </div>
                  ))
                }
              </div>
            </div>
            {/* 3row */}
            <div className=' p-2 h-[300px] mt-52 '  data-aos="flip-right">
              <div data-aos="fade-down" className='md:h-[200px] grid grid-cols-2 md:grid-cols-3 gap-2'>
                {
                  galleryData?.slice(4,10).map((clGallery, index) => (
                    <div key={index} className="card   h-[140px] bg-base-100 shadow-xl">
                      <img src={clGallery.image} className="w-full  h-full rounded-lg   " />
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
          <div className='w-1/2'>
            {/* 2row */}
            <div className=' p-2 md:h-[300px] ' data-aos="flip-right">
              <div data-aos="fade-right" className='md:h-[200px] grid grid-cols-2 md:grid-cols-3  gap-2'>
                  {
                    galleryData?.slice(7,13).map((clGallery, index) => (
                      <div key={index} className="card  h-[140px] bg-base-100 shadow-xl">
  
                        <img src={clGallery.image} className="  rounded-lg w-full h-full " />
                      </div>
                    ))
                  }
              </div>
            </div>
            {/* 4row */}
            <div className=' p-2 md:h-[600px]  overflow-hidden md:overflow-visible '  data-aos="zoom-in">
              <div data-aos="fade-down" className='h-[200px] grid grid-cols-1 md:grid-cols-2  gap-2'>
                {
                  galleryData?.slice(7,13).map((clGallery, index) => (
                    <div key={index} className="card w-full h-[250px]   bg-base-100 shadow-xll">
                      <img src={clGallery.image} className=" w-full h-full  rounded-lg " />
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
  </div>
    
        {/* 5row */}
        
          <div className='' data-aos="zoom-out-right">
            <div  className='md:h-[200px] grid grid-cols-2 md:grid-cols-6 '>
              {
                galleryData?.slice(0,12).map((clGallery, index) => (
                  <div key={index} className="card  m-2  bg-base-100 shadow-xl" >
                    <img src={clGallery.image} className="w-full h-full  rounded-lg  mx-auto " />
                  </div>
                ))
              }
            </div>
            </div>
        </div>
    );
};

export default ImageGallery;