import './App.css';
import React, {useState} from 'react'
import NvbListTask from './components/NvbListTask';
import NvbTaskAddOrEdit from './components/NvbTaskAddOrEdit';

function App() {
  //Mock data
  const nvb_listTasks = [
    {nvb_taskId:2201900003,nvb_taskName:"Nông Văn Bách",nvb_level:"Small"},
    {nvb_taskId:1,nvb_taskName:"Học lập trình fronend",nvb_level:"Small"},
    {nvb_taskId:2,nvb_taskName:"Học lập trình reactjs",nvb_level:"Medium"},
    {nvb_taskId:3,nvb_taskName:"Học lập trình với fronend - reactjs",nvb_level:"high"},
    {nvb_taskId:4,nvb_taskName:"Học lập trình Fullstack(PHP, Java, NetCore)",nvb_level:"Small"},
  ];
  //Sử dụng hàm useStage để lưu trữ trạng thái dữ liệu
  const [nvbListTasks,setNvbListTasks] = useState(nvb_listTasks);
 
  const nvbHandleSubmit =(nvbParam)=>{
    console.log("App:",nvbParam);
    setNvbListTasks(prev =>{
      return[
        ...prev,
        nvbParam
      ]

    })
  }
  return (
    <div className="container border">
      <h1>Nông Văn Bách - K22CNT2</h1>
      <hr/>
      <div>
        {/*Danh sách list task */}
        <NvbListTask renderNvbListTasks = {nvbListTasks} />
      </div>
      <NvbTaskAddOrEdit nvbOnSubmit={nvbHandleSubmit}  />
    </div>
  );
}

export default App;
