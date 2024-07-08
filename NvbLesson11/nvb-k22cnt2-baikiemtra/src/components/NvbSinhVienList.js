import React from 'react'
import axios from '../api/nvbApi'
export default function NvbSinhVienList({render, onNvbDelete}) {
  let element = render.map((nvbSinhVien,index)=>{
    return(
      <tr key={index}>
                <td>{nvbSinhVien.id}</td>
                <td>{nvbSinhVien.MaSV}</td>
                <td>{nvbSinhVien.HoSV}</td>
                <td>{nvbSinhVien.TenSV}</td>
                <td>{nvbSinhVien.Phai ? "Nam" : "Nu"}</td>
                <td>{nvbSinhVien.NgaySinh}</td>
                <td>{nvbSinhVien.MaKH}</td>
                <td>{nvbSinhVien.HocBong ? "Có" : "Không"}</td>
                <td>{nvbSinhVien.DiemTB}</td>
                <td>{nvbSinhVien.NoiSinh}</td>
                <td>
                   <button className='btn btn-danger' onClick={()=>nvbHandleDelete(nvbSinhVien)}>Delete</button>
                </td>
  
            </tr>
    )
  })
  const nvbHandleDelete = async (param)=>{
    if(window.confirm('Bạn có muốn xóa?')){
    const nvbRes = await axios.delete("nvbSinhVien/"+param.id);
    }
    onNvbDelete();
  }
  return (
    <div className='row'>
      <table className='table table-bordered'>
        <thead>
            <tr>
                <th>Id</th>
                <th>MaSV</th>
                <th>HoSV</th>
                <th>TenSV</th>
                <th>Phai</th>
                <th>NgaySinh</th>
                <th>MaKH</th>
                <th>HocBong</th>
                <th>DiemTB</th>
                <th>NoiSinh</th>
                <th>ChucNang</th>
            </tr>
        </thead>
        <tbody>
            {element}
        </tbody>
      </table>
    </div>
  )
}
