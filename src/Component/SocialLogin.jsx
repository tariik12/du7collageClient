import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthProvider";

const SocialLogin = () => {
    const {handleGoogleProvider} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname ||"/";
    const handleGoogleSingIn =() =>{
      handleGoogleProvider()
        .then(result =>{
             const loggedUser =(result.user)
             console.log(loggedUser)
            if(loggedUser){
                const saveUser = { name: loggedUser.displayName, email: loggedUser.email, photo: loggedUser.photoURL }
            fetch('https://du7collage-server.vercel.app/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(saveUser)
            })
            .then(res => res.json())
            .then((data) => {
               console.log(data)
                    navigate(from, {replace:true});
                    toast.success('login success')
                
            })
            }
        })
        .catch(error =>console.log(error.message))
    }
    return (
        <div>
            <div className="divider"></div>
            <div className="text-center my-4">
            <button onClick={handleGoogleSingIn} className="btn btn-circle btn-success btn-outline">
               <FaGoogle/>
            </button>
            </div>
        </div>
    );
};

export default SocialLogin;