import React from 'react'

export default function NvbListTask({renderNvbListTasks, onNvbTaskEdit, onNvbTaskDelete}) {
 console.log(renderNvbListTasks);
 // Hàm xử lí khi sửa
 const nvbHandleEdit = (param)=>{
    console.log("Click edit:", param);
    onNvbTaskEdit(param) // đẩy lên app thông qua props(onNvbTaskEdit)
 }
 //Hàm xử lí khi xóa
 const nvbHandleDelete =(param)=>{
    if(window.confirm('Bạn có chắc chắn xóa không')){
        onNvbTaskDelete(param) // Đẩy dữ liệu xóa lên trên App.js
    }
 }

 //render data
 let nvbElementTask = renderNvbListTasks.map((task, index)=>{
    return (
            <tr key={index}>
                <td>{index+1}</td>
                <td>{task.nvb_taskId}</td>
                <td>{task.nvb_taskName}</td>
                <td>{task.nvb_level}</td>
                <td>
                    <button className='btn btn-success'
                         onClick={()=>nvbHandleEdit(task)}
                         >Edit</button>
                    <button className='btn btn-danger'
                    onClick={()=>nvbHandleDelete(task)}>Remove</button>
                </td>
            </tr>
    )
 })
    return (
    <div>
        <h2>Danh sách các nhiệm vụ</h2>
      <table className='table table-bordered'>
        <thead>
            <tr>
                <th>STT</th>
                <th>Task Id</th>
                <th>Task Name</th>
                <th>Task Level</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {nvbElementTask}
        </tbody>
      </table>
    </div>
  )
}
