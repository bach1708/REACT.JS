
import './App.css';
import NvbListUsers from './components/NvbListUsers';
import axios from './api/nvbApi'
import { useEffect, useState } from 'react';
function NvbApp() {

  const [nvbListUsers,setNvbListUsers] = useState([])

  //đọc dữ liệu từ api
  const nvbGetAllUsers = async ()=>{
    const nvbResponse = await axios.get("nvbUsers");
    console.log("Api Data:",nvbResponse.data);
    setNvbListUsers(nvbResponse.data)
  }

  
  useEffect(()=>{
    nvbGetAllUsers();
    console.log("State Data:",nvbListUsers)
  },[])

  return (
    <div className="container border my-3">
      <h1>Làm việc với MockApi</h1>
      <hr/>
      <NvbListUsers renderNvbListUsers={nvbListUsers}/>
    </div>
  );
}

export default NvbApp;
