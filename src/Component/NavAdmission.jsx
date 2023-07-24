import { NavLink } from "react-router-dom";

const NavAdmission = () => {
    return (
        <div className=" flex flex-col mx-auto pb-5  pt-[90px] w-1/2">
    <NavLink to='/admissionForm'  className=" mt-5 text-7xl   border ">Dhaka Collage</NavLink>
    <NavLink to='/admissionForm'  className="mt-5 text-7xl  border ">Titumir Collage</NavLink>
    <NavLink to='/admissionForm' className="mt-5 text-7xl  border ">Eden Collage</NavLink>
    <NavLink to='/admissionForm' className="mt-5 text-7xl  border ">Bangla Collage</NavLink>
    <NavLink to='/admissionForm' className="mt-5 text-7xl  border ">Kavi Nazrul  Collage</NavLink>
    <NavLink to='/admissionForm' className="mt-5 text-7xl  border ">Bodrunnesa Collage</NavLink>
        </div>
    );
};

export default NavAdmission;