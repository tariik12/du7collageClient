import { Link } from "react-router-dom";


const Work = () => {
    return (
        <div className="">
        <h1 className="text-center my-5">Reachers</h1>

  <div className="grid grid-cols-1  md:grid-cols-3 md:gap-4 mx-4 ">
    
      <div  className="card mb-4 w-full bg-base-100 shadow-xl">
        <h1 className="card-title">Self-healing in CdTe nanostructures</h1>
        <div className="card-body">
<p>Herein, we report a first-principle density functional theory-based study on CdTe nanostructures in 1D (nanorods and nanotubes) and 2D (ultra-thin slabs, monolayers) systems created within the top-down approach in terms of various properties, such as electronic structure, structural stability...</p> <Link to='https://www.rbc.edu/' className="btn md:btn-lg btn-md text-lg md:text-4xl me-2 bg-gradient-to-t from-cyan-500  to-indigo-400">Read more</Link >
        </div>
      </div>
      <div  className="card mb-4 w-full bg-base-100 shadow-xl">
        <h1 className="card-title">Self-healing in CdTe nanostructures</h1>
        <div className="card-body">
<p>Herein, we report a first-principle density functional theory-based study on CdTe nanostructures in 1D (nanorods and nanotubes) and 2D (ultra-thin slabs, monolayers) systems created within the top-down approach in terms of various properties, such as electronic structure, structural stability...</p> <Link to='https://www.rbc.edu/' className="btn md:btn-lg btn-md text-lg md:text-4xl me-2 bg-gradient-to-t from-cyan-500  to-indigo-400">Read more</Link >
        </div>
      </div>
      <div  className="card mb-4 w-full bg-base-100 shadow-xl">
        <h1 className="card-title">Self-healing in CdTe nanostructures</h1>
        <div className="card-body">
<p>Herein, we report a first-principle density functional theory-based study on CdTe nanostructures in 1D (nanorods and nanotubes) and 2D (ultra-thin slabs, monolayers) systems created within the top-down approach in terms of various properties, such as electronic structure, structural stability...</p> <Link to='https://www.rbc.edu/' className="btn md:btn-lg btn-md text-lg md:text-4xl me-2 bg-gradient-to-t from-cyan-500  to-indigo-400">Read more</Link >
        </div>
      </div>
    
  </div>
</div>
    );
};

export default Work;