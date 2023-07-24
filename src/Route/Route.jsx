import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import Error from "../Error";
import Collages from "../Pages/Collages/Collages";
import NavAdmission from "../Component/NavAdmission";
import AdmissionFrom from "../Component/AdmissionFrom";
import CollagesDetails from "../Component/CollagesDetails";
import UpdateForm from "../Component/UpdateForm";
import MyCollage from "../Component/MyCollage";
import Feedback from "../Component/Feedback";
import PrivateRoute from "./PrivateRoute";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Error/>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
        },
        {
          path:'/collages',
          element:<Collages/>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
          path:'/admission',
          element:<NavAdmission/>
        },
        {
          path:'/admissionForm',
          element:<AdmissionFrom/>
        },
        {
          path:'/collages/:id',
          element:<PrivateRoute><CollagesDetails/></PrivateRoute>,
          loader:({params})=> fetch(`https://du7collage-server.vercel.app/collages/${params.id}`,)
        },

        {
          path:'/updateForm/:email',
          loader:({params}) => fetch(`https://du7collage-server.vercel.app/users/${params.email}`),
          element:<UpdateForm/>

        },
        {
          path:'/myCollage/',
          element:<MyCollage/>
        },
        {
          path:'/feedback',
          element:<PrivateRoute><Feedback/></PrivateRoute>
        }
      ]
    },
    
  ]);

export default router;