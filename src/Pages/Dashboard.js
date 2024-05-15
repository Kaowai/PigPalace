import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  useEffect(()=> {
    const farmId = localStorage.getItem('userInfo');
    if (!farmId) {
      navigate('/Login')
    } 
  }, [])
  return (
    <>
      <div>Dashboard</div>
      <Link to={'/Login'}>LoginOut</Link>
    </>


  )
}

export default Dashboard