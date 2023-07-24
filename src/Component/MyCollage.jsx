import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import {  MdRateReview } from 'react-icons/md';

// 
const MyCollage = () => {
const {user} = useContext(AuthContext)
const [loading,setLoading] = useState(true)
    const [myCollage,setMyCollageData] = useState([])
console.log(myCollage)
    useEffect(() =>{
        setLoading(true)
        fetch(`https://du7collage-server.vercel.app/admissionForm/${user.email}`)
        .then(res => res.json())
        .then(data =>{ 
            setLoading(false)
            setMyCollageData(data)

        })
    },[user])

    if(loading){
        return <progress className="progress w-56"></progress>
       }
    return (
        <div className=" overflow-x-auto pt-[100px]  w-full">
        <table className="table w-full">
            {/* head */}
            <thead>
                <tr>
                <th className="font-bold" data-aos="zoom-in">NO</th>
                    <th className="font-bold" data-aos="zoom-in">collage Name</th>
                    <th className="font-bold" data-aos="zoom-in">Student Name</th>
                    <th className="font-bold" data-aos="zoom-in">Student Email</th>
                    <th className="font-bold" data-aos="zoom-in">Phone Number</th>
                    <th className="font-bold" data-aos="zoom-in">Subject</th>
                    <th className="font-bold" data-aos="zoom-in"> Death Of Birth
</th>
                    <th className="font-bold" data-aos="zoom-in">Image</th>
                    <th className="font-bold" data-aos="zoom-in">Review</th>
                </tr>
            </thead>
            <tbody >
                {
                    myCollage?.map((myData, index) => (
                        <tr key={index}>
                            <td data-aos="zoom-in">{index + 1}</td>
                            <th data-aos="zoom-in">
                                {myData.collageName}
                            </th>
                            <td data-aos="zoom-in">{myData.studentName}</td>
                            <td data-aos="zoom-in">
                                <div className="font-bold">{myData.studentEmail}</div>
                            </td>
                            <td data-aos="zoom-in">   
                                    {myData.phone}
                            </td>
                            <td data-aos="zoom-in">{myData.subjectName}</td>
                            <td data-aos="zoom-in">{myData.birthData}</td>
                            <td data-aos="zoom-in">
                            <div className="avatar">
                                    <div className="w-24 rounded ">
                                    {<img src={myData.image} alt="" />}
                                    </div>
                                </div></td>
                           
                         
                            <td data-aos="zoom-in">
                                <Link to="/feedback"><MdRateReview className="text-4xl text-cyan-900 "/></Link>
                            </td>
                           
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
    );
};

export default MyCollage;