import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/Store.js";
import Layout from "./Layout.jsx";
import Homepage from "./pages/home/Homepage.jsx";
import Login from "./pages/login/Login.jsx";
import Signup from "./pages/signup/Signup.jsx";
import UserPanel from "./pages/userPanel/UserPanel.jsx";
import AdminPanel from "./pages/admin/AdminPanel.jsx";
import AddCourse from "./pages/admin/AddCourse.jsx";
import DeleteCourse from "./pages/admin/DeleteCourse.jsx";
import Courses from "./pages/courses/Courses.jsx";
import ContentPage from "./components/ContentPage.jsx";
import PaymentSuccess from "./pages/payment/PaymentSuccess.jsx";
import About from "./pages/about/About.jsx";
import Loader from "./components/Loader.jsx";
import ChangePass from "./pages/changePass/ChangePass.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Homepage />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="user/" element={<UserPanel />} />
      <Route path="user/admin" element={<AdminPanel />} />
      <Route path="user/changepassword" element={<ChangePass />} />
      <Route path="user/admin/addCourse" element={<AddCourse />} />
      <Route path="user/admin/deleteCourse" element={<DeleteCourse />} />
      <Route path="courses" element={<Courses />} />
      <Route path="courses/:courseID" element={<ContentPage />} />
      <Route path="courses/paymentSuccess" element={<PaymentSuccess />} />
      <Route path="loader" element={<Loader />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      bodyClassName="toastBody"
    />
  </Provider>
);
