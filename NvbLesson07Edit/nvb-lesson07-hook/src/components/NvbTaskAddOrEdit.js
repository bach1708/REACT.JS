import React, {useEffect, useState} from 'react'

export default function NvbTaskAddOrEdit(renderNvbTask,renderNvbIsAddOrEdit,nvbOnSubmit) {
    // // đối tượng task
    // const nvbTaskObj = {
    //     nvb_taskId:0,
    //     nvb_taskName:"",
    //     nvb_level:""
    // }
    const [nvbTask, setNvbTask] = useState(renderNvbTask);
    useEffect(()=>{
        setNvbTask(renderNvbTask)
    },[renderNvbTask])

    // Tạo tiêu đề form 
    const nvbTieude = renderNvbIsAddOrEdit==true?"Thêm mới task":"Sửa thông tin task";
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
    }
    const nvbHandleSubmit = (nvbEvent)=>{
        nvbEvent.preventDefault();
        nvbOnSubmit(nvbTask);
    }
  return (
    <div>
        <h2>{nvbTieude}</h2> 
        <form>
            <div className='input-group mb-3'>
                <span className='input-group-text' id='bassic-addon1'>Task ID</span>
                <input type='text' 
                    name='nvb_taskId' value={nvbTask.nvb_taskID} onChange={nvbHandleChange}
                    className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/> 
            </div>
            <div className='input-group mb-3'>
                <span className='input-group-text' id='bassic-addon1'>Task Name</span>
                <input type='text' 
                    name='nvb_taskName' value={nvbTask.nvb_taskID} onChange={nvbHandleChange}
                    className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon2"/> 
            </div>
            <div className='input-group mb-3'>
            <span className='input-group-text' id='bassic-addon1'>Task Level</span>
                <select name='nvb_level' value={nvbTask.nvb_level} onChange={nvbHandleChange} className="form-control"
                aria-describedby="basic-addon">
                    <option value={'Small'}>Small</option>
                    <option value={'Medium'}>Medium</option>
                    <option value={'High'}>High</option>
                </select>
            </div>
            <button onClick={nvbHandleSubmit}className='btn btn-primary'>Ghi lại</button>
        </form>
    </div>
  )
}
