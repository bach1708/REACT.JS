import React, {useState} from 'react'

export default function NvbTaskAddOrEdit(nvbOnSubmit) {
    // đối tượng task
    const nvbTaskObj = {
        nvb_taskId:0,
        nvb_taskName:"",
        nvb_level:""
    }
    const [nvbTask, setNvbTask] = useState(nvbTaskObj);
    // Hàm sử lí SỰ kiên thay đổi trên điều khiển
    const nvbHandleChange =(nvbEvent) =>{
        let name = nvbEvent.target.name;
        let value = nvbEvent.target.value;

        setNvbTask(prev =>{ 
            return{
                ...prev,
                [name]:value,
            }
        })
        console.log(nvbTask)
    }
    const nvbHandleSubmit = (nvbEvent)=>{
        nvbEvent.preventDefault();
        nvbOnSubmit(nvbTask);
    }
  return (
    <div>
        <h2>Thêm mới task</h2> 
        <form>
            <div className='input-group mb-3'>
                <span className='input-group-text' id='bassic-addon1'>@taskId</span>
                <input type='text' 
                name='nvb_taskId' value={nvbTask.nvb_taskID} onChange={nvbHandleChange}
                className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>    
                <label>Task ID</label>
                <input name='nvb_taskId' value={nvbTask.nvb_taskId} onChange={nvbHandleChange}></input>
            </div>
            
            <div>
                <label>Task Name</label>
                <input name='nvb_taskName' value={nvbTask.nvb_taskName} onChange={nvbHandleChange}></input>
            </div>
            <div>
                <label>Task Level</label>
                <select name='nvb_level' value={nvbTask.nvb_level} onChange={''}>
                    <option value={'Small'}>Small</option>
                    <option value={'Medium'}>Medium</option>
                    <option value={'High'}>High</option>
                </select>
            </div>
            <button onClick={nvbHandleSubmit}>Ghi Lại</button>
        </form>
    </div>
  )
}
