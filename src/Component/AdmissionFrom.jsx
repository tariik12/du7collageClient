
import { useContext, } from "react";
import { useForm } from "react-hook-form";

import { toast } from "react-toastify";
// import GetClasses from "../../../../Hooks/GetClasses/GetClasses";
import { AuthContext } from "../Provider/AuthProvider";




const img_hosting_token=import.meta.env.VITE_IMAGE_UPLOAD_TOKEN

const AdmissionFrom = () => {

    const { user } = useContext(AuthContext);
    // const [,refetch] = GetClasses()
     
        
   const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
   const { register, handleSubmit ,reset} = useForm();


    const onSubmit = (data) => {

        console.log(data)
        
        // data.email = user.email;
        // data.studentName = user.displayName;
        // data.price = parseInt(watch('price'));
        // data.seats = parseInt(watch('seats'));
        const formData = new FormData();
        formData.append('image',data.image[0]) 
        fetch(img_hosting_url,{
            method:'POST',
            body:  formData
        })
        .then(res => res.json())
        .then(imgResponse =>{
            if(imgResponse.success){
                const imgURL = imgResponse.data.display_url;
               const {collageName,studentEmail,studentName,subjectName,birthData,phone
                ,address} = data
               const studentData = {studentName,studentEmail,subjectName,image:imgURL, birthData,phone,collageName,address};
               console.log(studentData)
                    fetch('https://du7collage-server.vercel.app/admissionForm', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(studentData)
                    }) 
                        .then(res => res.json())
                        .then(data => {
                            // refetch()
                            if (data.insertedId) {
                                toast.success('Classes add  Success')
                            }
                        })
            }
                reset()
        })
       

    }
    return (

        <div className="py-10  mx-auto bg-base-100 ">
            <div className="card w-full max-w-7xl mx-auto shadow-2xl bg-base-100">
                <h1 className="text-center text-4xl font-extrabold p-5 mt-10  rounded-t-xl ">Admission Form</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="card-body">
                    <div className="form-control md:w-full">
                                <label className="label">
                                    <span className="label-text font-extrabold text-lg">Collage Name</span>
                                </label>
                                <input {...register("collageName")}  type="text"  placeholder="Enter your Collage Name" className="input input-bordered"  />
                            </div>
                       
                        <div className="md:flex gap-2">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-extrabold text-lg">Student Name</span>
                                </label>
                                <input {...register("studentName")} defaultValue={user?.displayName} type="text" placeholder="Student Name" className="input input-bordered"  />
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-extrabold text-lg">Student Email</span>
                                </label>
                                <input {...register("studentEmail")} defaultValue={user?.email} type="email" placeholder="Student Email" className="input input-bordered" />
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-extrabold text-lg">Subject Name</span>
                                </label>
                                <input {...register("subjectName")}  type="text" placeholder="Enter your Subject" className="input input-bordered"  />
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span  className="label-text font-extrabold text-lg">Student Image</span>
                                </label>
                                <input type="file" {...register("image")} className="file-input file-input-bordered file-input-md w-full max-w-xs" />
                            </div>
                        </div>

                        <div className="md:flex gap-2">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-extrabold text-lg">Death of birth</span>
                                </label>
                                <input  {...register("birthData")} type="date" placeholder="Enter your Birth date" className="input input-bordered" required />
                            </div>
                        
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-extrabold text-lg">Phone Number</span>
                                </label>
                                <input {...register("phone")} type="phone" className="input input-bordered" placeholder="Enter Phone Number " required />
                            </div>
                        </div>

                        <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-extrabold text-lg">Address</span>
                                </label>
                                <input {...register("address")} type="text" className="input input-bordered" placeholder="Enter Your address" required />
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

export default AdmissionFrom;
