// import { useContext } from 'react';
import { useForm } from 'react-hook-form';
// import { toast } from 'react-toastify';
// import { AuthContext } from '../Provider/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateForm = () => {
    // const { user} = useContext(AuthContext);
    const userData = useLoaderData()
  console.log(userData)

const {email,name,university,address} = userData;
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
  

        fetch(`https://du7collage-server.vercel.app/users/${userData._id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success("Your Toy Update Successful", {
                        position: 'top-center',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'light',
                    });
                }
                console.log(data);
            })
            .catch(error => console.error(error));

        console.log(data);
    };

    // Rest of the component code...




    return (
        <div className="py-10  mx-auto bg-base-100 ">
             
        <div className="card w-full max-w-7xl mx-auto shadow-2xl bg-base-100">
            <h1 className="text-center text-4xl font-extrabold p-5 mt-10  rounded-t-xl ">Update Your Form</h1>
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="card-body">
                <div className="form-control md:w-full">
                            <label className="label">
                                <span className="label-text font-extrabold text-lg">Collage Name</span>
                            </label>
                            <input  {...register("collageName")}  type="text" defaultValue={university} placeholder="Enter your Collage Name" className="input input-bordered"  />
                        </div>
                   
                    <div className="md:flex gap-2">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-extrabold text-lg"> Name</span>
                            </label>
                            <input defaultValue={name} {...register("name")}  type="text" placeholder="Student Name" className="input input-bordered"  />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-extrabold text-lg">Student Email</span>
                            </label>
                            <input {...register("email")} defaultValue={email} type="email" placeholder="Student Email" className="input input-bordered" />
                        </div>
                    </div>

                    <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-extrabold text-lg">Address</span>
                            </label>
                            <input defaultValue={address} {...register("address")} type="text" className="input input-bordered" placeholder="Enter Your address" required />
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

export default UpdateForm;