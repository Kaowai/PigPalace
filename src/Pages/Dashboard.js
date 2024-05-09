import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  // const navigate = useNavigate();

  // useEffect(()=> {
  //   const farmId = localStorage.getItem('userInfo');
  //   if (!farmId) {
  //     navigate('/login')
  //   } 
  // }, [])
  // return (
  //   <>
  //     <div>Dashboard</div>
  //     <Link to={'/login'}>LoginOut</Link>
  //   </>


  // )


  return (
    <div>
      <h1 className="tex-xl text-green-900">Dashboard</h1>
      <Link className="text-xxl text-red-600" to="/login">Logout</Link>
    </div>
  )
}

export default Dashboard