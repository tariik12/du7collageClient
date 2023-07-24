import { Link } from "react-router-dom";
import logo from "../../../public/fav.png"
import { FaBahai,FaFacebookSquare,FaInstagramSquare,FaTelegram} from "react-icons/fa";
import { toast } from "react-toastify";

const Footer = () => {

  const handleSubscribe =(event) =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    if(email){
      toast.success('Thanks for subscribe!', {
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

    event.target.reset();

       
  }
  
    return (
        <div className="">
            <footer className="footer p-10  text-base-content bg-cyan-100">
  <div>
  
  </div> 
  <div>
    <span className="text-white font-bold text-2xl">Company Details</span> 
    <Link className="link link-hover font-bold text-xl">About us</Link> 
    <Link className="link link-hover font-bold text-xl">Contact</Link> 
    <Link className="link link-hover font-bold text-xl">Jobs</Link> 
    <Link to='/blog' className="link link-hover font-bold text-xl">Blog</Link>
  </div> 
  <div>
    <span className="text-white font-bold text-2xl">Legal</span> 
    <Link className="link link-hover font-bold text-xl">Terms of use</Link> 
    <Link className="link link-hover font-bold text-xl">Privacy policy</Link> 
    <Link className="link link-hover font-bold text-xl">Cookie policy</Link>
  </div>
  <div>
    <span className="text-white font-bold text-2xl">Newsletter</span> 
    <div className="form-control w-80">
      <label className="label">
        <span className="label-text font-bold font-2xl">Enter your email address</span>
      </label> 
      <div className="relative">
      <form onSubmit={handleSubscribe}>
      <input type="email" name="email"  placeholder="username@site.com" className="input input-bordered w-full pr-16" required /> 
        <button className="btn btn-primary btn-outline absolute top-0 right-0 rounded-l-none" type="submit">Subscribe</button>
      </form>
      </div>
    </div>
  </div>
</footer> 
<footer className="footer px-10 py-4 border-t bg-cyan-300 text-base-content border-base-300">
  <div className="items-center grid-flow-col ms-28 md:ms-0">
  <div className="avatar relative flex justify-center items-center ms-10 p-2">
  <div className="w-24  rounded-full ring ring-red-500 ring-offset-base-100 ring-offset-2  ">
    <img src={logo}/>
    <FaBahai className="absolute top-6 left-50 text-white ms-8 w-7 h-7 p-1" />
  </div>
</div>
  </div> 
    <p className="text-center mt-12 font-bold text-xl">&copy; 2023 Your Company. All rights reserved.</p>
  <div className="md:place-self-center md:justify-self-end md:me-28 ms-28 md:ms-0">
    <div className="grid grid-flow-col gap-4 ">
      <FaTelegram className="w-7 h-7"/>
      <FaInstagramSquare className="w-7 h-7"/>
      <FaFacebookSquare className="w-7 h-7"/>
    </div>
  </div>
</footer>
        </div>
    );
};

export default Footer;