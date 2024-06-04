import './App.css';
import { React, useState } from 'react'
import NvbTaskAddOrEdit from './components/NvbTaskAddOrEdit';
import NvbListTask from './components/NvbListTask';

function App() {
  //Mock data
  const nvb_listTasks = [
    { nvb_taskId: 2201900003, nvb_taskName: "Nông Văn Bách", nvb_level: "Small" },
    { nvb_taskId: 1, nvb_taskName: "Học lập trình fronend", nvb_level: "Small" },
    { nvb_taskId: 2, nvb_taskName: "Học lập trình reactjs", nvb_level: "Medium" },
    { nvb_taskId: 3, nvb_taskName: "Học lập trình với fronend - reactjs", nvb_level: "high" },
    { nvb_taskId: 4, nvb_taskName: "Học lập trình Fullstack(PHP, Java, NetCore)", nvb_level: "Small" },
  ];
  //Sử dụng hàm useStage để lưu trữ trạng thái dữ liệu
  const [nvbListTasks, setNvbListTasks] = useState(nvb_listTasks);


  //tạo state dữ liệu cho form(add, edit)
  // đối tượng task
  const nvbTaskObj = {
    nvb_taskId: 0,
    nvb_taskName: "NTU",
    nvb_level: "Medium"
  };
  //Tạo state
  const [nvbTask, setNvbTask] = useState(nvbTaskObj); // dữ liệu trên form
  //state để phân biệt trạng thái là thêm mới hay sửa
  const [nvbIsAddOrEdit, setNvbIsAddOrEdit] = useState(true); // mặc đinh ban đầu là form thêm mới
  
  
  // nhận dữ liệu khi sửa 
  const nvbHandleEdit = (param) => {
    console.log("App - Edit", param);
    // Cập nhật lại nvbTask
    setNvbTask(param);
    // Cập nhật trạng thái form là sửa
    setNvbIsAddOrEdit(false);
  };


  const nvbHandleSubmit = (nvbParam) => {
    console.log("App:", nvbParam);
    if(nvbIsAddOrEdit===true){ // trường hợp thêm mới dữ liệu
      setNvbListTasks((prev) => {
        return [...prev,nvbParam];
      });
    }else{
      // Trường hợp sửa dữ liệu
      for (let i = 0; i < nvbListTasks.length; i++) {
        if(nvbListTasks[i].nvb_taskId == nvbParam.nvb_taskId){
          nvbListTasks[i] = nvbParam;
          break;
        }
        
      }
      //Cập nhật lại state (nvbListTasks)
      setNvbListTasks((prev) => {
        return [...prev];
      });
    }
  };

// Hàm xóa
const nvbHandleDelete =(param)=>{
  let nvbResul = nvbListTasks.filter(x=>x.nvb_taskId != param.nvb_taskId);
  setNvbListTasks(nvbResul);
}
  return (
    <div className="container border">
      <h1>Nông Văn Bách - K22CNT2</h1>
      <hr />
      <div>
        {/*Danh sách list task */}
        <NvbListTask renderNvbListTasks={nvbListTasks}
          onNvbTaskEdit={nvbHandleEdit}
          onNvbTaskDelete={nvbHandleDelete}
        />
      </div>
      <div>
      <NvbTaskAddOrEdit 
        renderNvbTask ={nvbTask}
        renderNvbIsAddOrEdit ={nvbIsAddOrEdit}
        nvbOnSubmit={nvbHandleSubmit} />
      </div>
    </div>
  );
}

export default App;
