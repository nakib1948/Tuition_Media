import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { userContext } from '../App'
const Privateroutes = () => {
  const [loggedinUser,setloggedinUser]=useContext(userContext);
return (
    loggedinUser.email ? <Outlet/> : <Navigate to='/selectlogin'/>
  )
}

export default Privateroutes;