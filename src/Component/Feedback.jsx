import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";


const Feedback = () => {
    const { user } = useContext(AuthContext);
    // const [,refetch] = GetClasses()
     
   const { register, handleSubmit ,reset} = useForm();


    const onSubmit = (data) => {

        console.log(data)
        fetch('https://du7collage-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }) 
            .then(res => res.json())
            .then(data => {
               reset()
                if (data.insertedId) {
                    toast.success('Classes add  Success')
                }
            })
       

    }
    return (
        <div className="py-10  mx-auto bg-base-100 ">
             
        <div className="card w-full max-w-7xl mx-auto shadow-2xl bg-base-100">
            <h1 className="text-center text-4xl font-extrabold p-5 mt-10  rounded-t-xl ">Update Your Form</h1>
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="card-body">
                   
                    <div className="md:flex gap-2">
                    <div className="form-control md:w-full">
                            <label className="label">
                                <span className="label-text font-extrabold text-lg">collage Name</span>
                            </label>
                            <input  {...register("collageName")}  type="text" placeholder="Enter your Collage Name" className="input input-bordered"  />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-extrabold text-lg">Rating</span>
                            </label>
                            <input {...register("rating")}  type="number" placeholder="Rating" className="input input-bordered" />
                        </div>
                    </div>
                    <div className="md:flex gap-2">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-extrabold text-lg">Student Name</span>
                            </label>
                            <input defaultValue={user.displayName} {...register("name")}  type="text" placeholder="Student Name" className="input input-bordered"  />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-extrabold text-lg">Student Email</span>
                            </label>
                            <input {...register("email")} defaultValue={user.email} type="email" placeholder="Student Email" className="input input-bordered" />
                        </div>
                    </div>

                    <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-extrabold text-lg">Feedback</span>
                            </label>
                            <textarea  {...register("review")} type="text" className="input input-bordered" placeholder="Your Feedback" required />
                        </div>

                    
                    <div className="form-control mt-6 ">
                        <input type="submit" value='submit' className="text-xl font-extrabold btn bg-cyan-700 " />
                    </div>
                </div>
            </form>
        </div>
    </div>
    );
};

export default Feedback;