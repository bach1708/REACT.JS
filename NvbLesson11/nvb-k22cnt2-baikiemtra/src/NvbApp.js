
import './App.css';
import NvbSinhVienList from './components/NvbSinhVienList';
import axios from './api/nvbApi'
import { useState,useEffect } from 'react';
import NvbSinhVienAddOrEdit from './components/NvbSinhVienAddOrEdit';
function NvbApp() {
  const [list,setList] = useState([])
  //đọc dữ liệu từ api
  const nvbGetAllSinhVien = async ()=>{
    const nvbResponse = await axios.get("nvbSinhVien");
    console.log("Api Data:",nvbResponse.data);
    setList(nvbResponse.data)
  }
  useEffect(()=>{
    nvbGetAllSinhVien();
  },[])
  const [nvbAddOrEdit, setNvbAddOrEdit] = useState(false);
  const nvbInitUser = {
    MaSV: "2210900003",
    HoSV: "Nông",
    TenSV: "Bách",
    Phai: true,
    NgaySinh: 17082001,
    MaKH: "Công Nghệ Thông Tin",
    HocBong: true,
    DiemTB: 8,
    NoiSinh: "Lạng Sơn",
    id: "1"
  }
  const [nvbUser,setNvbUser] = useState(nvbInitUser);
  // Hàm xử lý nút thêm mới
  const nvbHandleAddNew =()=>{
    setNvbAddOrEdit(true);
  }
  const nvbHandleClose=(param)=>{
    setNvbAddOrEdit(param);
  }
  const nvbHandleSubmit =(param)=>{
    nvbGetAllSinhVien();
    setNvbAddOrEdit(param);
}
  const nvbHandleDelete=()=>{
    nvbGetAllSinhVien();
  }
  let nvbElementForm = nvbAddOrEdit===true?
    <NvbSinhVienAddOrEdit renderUsers={nvbUser} 
                          onNvbClose={nvbHandleClose}
                          onNvbSubmitForm={nvbHandleSubmit} />:"";
  return (
    <div className="container border my-3">
      <h1>baikiemtra</h1>
     <hr/>
     <NvbSinhVienList render={list} onNvbDelete={nvbHandleDelete} />
     <button className='btn btn-primary' name='btnNvbThemmoi' onClick={nvbHandleAddNew}>Thêm mới</button>
    <hr/>
    {nvbElementForm}
    </div>
  );
}

export default NvbApp;
