import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutAccountAction } from "../Redux/Actions/AccountActions";
import toast from "react-hot-toast";

function Dashboard() {
  const navigate = useNavigate();


  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutAccountAction());
    localStorage.removeItem('farmID');
    toast.success("Logout Successfully!");
    navigate('/Login')
  }


  useEffect(() => {
    
  }, [])
  return (
    <>
      <div>Dashboard</div>
      <span onClick={handleLogout} className="cursor-pointer">LoginOut</span>
    </>


  )
}

export default Dashboard