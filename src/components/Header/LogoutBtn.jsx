import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite_services/auth";
import { logout } from "../../store/authSlice";
function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService
      .logoutUser()
      .then(() => {
        dispatch(logout());
      })
      .catch((error) => {
        console.log("Error in Logout Button ");
      });
  };

  return (
    <button className="inline-block py-2 px-6 duration-200 hover:bg-blue-100 rounded-full">
      Logout
    </button>
  );
}

export default LogoutBtn;
