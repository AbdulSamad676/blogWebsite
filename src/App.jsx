import { useState, useEffect } from "react";
import "./App.css";
import authService from "./appwrite_services/auth";
import { login, logout } from "./store/authSlice";
import { useDispatch } from "react-redux";
import { Header, Footer } from "./components/index";
import { Outlet } from "react-router-dom";
function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .catch((error) => {
        console.log("Error in getting current User", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
          {/* <Outlet/> */}
          Appwrite Project Here
        </main>

        <Footer />
      </div>
    </div>
  ) : (
    <div className=" flex justify-center items-center text-2xl">
      {" "}
      loading...
    </div>
  );
}

export default App;
