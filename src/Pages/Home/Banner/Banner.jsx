import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
   

    return (
        <div className="">
            <Carousel className="text-center border" >
             <div className="md:h-[600px] h-[400px]">
                    <img  src="https://i0.wp.com/edunews.com.bd/wp-content/uploads/2020/06/IMG-20200602-WA0006.jpg?fit=556%2C313&ssl=1" />     
                </div>
                <div  className="md:h-[600px] h-[400px]">
                    <img  src="https://www.msprotidin.com/postimage/6095719ad188bGovt.%20Titumir%20College.PNG.webp" />  
                </div>
                <div  className="md:h-[600px] h-[400px]">
                    <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-qhOL2H33OI2am4xruWBE8Hr0hyl0c4Wyyz9d38qKUPilsUcH7C9G0sz32SYwmpceOVA&usqp=CAU" />
                </div>
                <div  className="md:h-[600px] h-[400px]">
                    <img  src="https://en.banglapedia.org/images/4/43/EdenCollege.jpg" />
                </div>
                <div  className="md:h-[600px] h-[400px]">
                    <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo3poQ071H-CGZ0JYonnPaTRAnkq-QeO5pNVQDIKmo23iaVhrh9fe6_JOhUPz9s6Ho15w&usqp=CAU" />
                </div>
                <div  className="md:h-[600px] h-[400px]">
                    <img   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTTCluTCUwugs6vl_ovcsB3gWf4Mu4tFjiCip7mmprNejP7xHYaBDUruGd3GZsSlBqQ8Y&usqp=CAU" />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;