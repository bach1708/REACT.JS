import axios from '../api/nvbApi'
import React, { useEffect, useState } from 'react'

export default function NvbSinhVienAddOrEdit(onNvbClose, onNvbSubmitForm, renderUsers) {
    console.log(renderUsers);
    const [nvbId, setNvbId] = useState(0);
    const [nvbMaSV, setNvbMaSV] = useState("");
    const [nvbHoSV, setNvbHoSV] = useState("");
    const [nvbTenSV, setNvbTenSV] = useState("");
    const [nvbPhai, setNvbPhai] = useState("");
    const [nvbNgaySinh, setNvbNgaySinh] = useState("");
    const [nvbMaKH, setNvbMaKH] = useState("");
    const [nvbHocBong, setNvbHocBong] = useState("");
    const [nvbDiemTB, setNvbDiemTB] = useState("");
    const [nvbNoiSinh, setNvbNoiSinh] = useState("");

    useEffect(()=>{
        setNvbId(renderUsers.id)
        setNvbMaSV(renderUsers.MaSV)
        setNvbHoSV(renderUsers.HoSV)
        setNvbTenSV(renderUsers.TenSV)
        setNvbPhai(renderUsers.Phai)
        setNvbNgaySinh(renderUsers.NgaySinh)
        setNvbMaKH(renderUsers.MaKH)
        setNvbHocBong(renderUsers.HocBong)
        setNvbDiemTB(renderUsers.DiemTB)
        setNvbNoiSinh(renderUsers.NoiSinh)
    },[renderUsers])

    const nvbHandleClose = ()=>{
        onNvbClose(false);
    }

    const nvbHandleSubmit= async (event)=>{
        event.preventDefault();
        console.log(nvbId,
            nvbMaSV,
            nvbHoSV,
            nvbTenSV,
            nvbPhai,
            nvbNgaySinh,
            nvbMaKH,
            nvbHocBong,
            nvbDiemTB,
            nvbNoiSinh,);
        //post -> api
        let nvbObjUser = {
            MaSV: nvbMaSV,
            HoSV: nvbHoSV,
            TenSV: nvbTenSV,
            Phai: nvbPhai,
            NgaySinh: nvbNgaySinh,
            MaKH: nvbMaKH,
            HocBong: nvbHocBong,
            DiemTB: nvbDiemTB,
            NoiSinh: nvbNoiSinh,
            id: nvbId
        }
        const nvbRes = await axios.post("nvbSinhVien",nvbObjUser);

        onNvbSubmitForm(false)
    }
  return (
    <div className=''>
      <form>
        <div className="input-group mb-3">
            <span className="input-group-text" id="id">Id</span>
            <input type="text" class="form-control" 
                name='id' value={nvbId} onChange={(ev)=>setNvbId(ev.target.value)}
                placeholder="id" aria-label="id" aria-describedby="id"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="MaSV">MaSV</span>
            <input type="text" class="form-control" 
                name='MaSV' value={nvbMaSV} onChange={(ev)=>setNvbMaSV(ev.target.value)}
                placeholder="MaSV" aria-label="MaSV" aria-describedby="MaSV"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="HoSV">HoSV</span>
            <input type="text" class="form-control" 
                name='HoSV' value={nvbHoSV} onChange={(ev)=>setNvbHoSV(ev.target.value)}
                placeholder="HoSV" aria-label="HoSV" aria-describedby="HoSV"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="TenSV">TenSV</span>
            <input type="text" class="form-control" 
                name='TenSV' value={nvbTenSV} onChange={(ev)=>setNvbTenSV(ev.target.value)}
                placeholder="TenSV" aria-label="TenSV" aria-describedby="TenSV"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="Phai">Phai</span>
            <label>
            <input type="text" class="form-control" 
                name='gender' value={nvbPhai} onChange={(ev)=>setNvbPhai(ev.target.value)}
                placeholder="" aria-label="Phai" aria-describedby="Phai"/>Nam/Nữ</label>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="NgaySinh">NgaySinh</span>
            <input type="date" class="form-control" 
                name='NgaySinh' value={nvbNgaySinh} onChange={(ev)=>setNvbNgaySinh(ev.target.value)}
                placeholder="NgaySinh" aria-label="NgaySinh" aria-describedby="NgaySinh"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="MaKH">MaKH</span>
            <input type="text" class="form-control" 
                name='MaKH' value={nvbMaKH} onChange={(ev)=>setNvbMaKH(ev.target.value)}
                placeholder="MaKH" aria-label="MaKH" aria-describedby="MaKH"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="HocBong">HocBong</span>
            <label>
            <input type="text" class="form-control" 
                name='HocBong' value={nvbHocBong} onChange={(ev)=>setNvbHocBong(ev.target.value)}
                placeholder="" aria-label="HocBong" aria-describedby="HocBong"/>Có/Không</label>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="DiemTB">DiemTB</span>
            <input type="number" class="form-control" 
                name='DiemTB' value={nvbDiemTB} onChange={(ev)=>setNvbDiemTB(ev.target.value)}
                placeholder="DiemTB" aria-label="DiemTB" aria-describedby="DiemTB"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="NoiSinh">NoiSinh</span>
            <input type="text" class="form-control" 
                name='NoiSinh' value={nvbNoiSinh} onChange={(ev)=>setNvbNoiSinh(ev.target.value)}
                placeholder="NoiSinh" aria-label="NoiSinh" aria-describedby="NoiSinh"/>
        </div>
        <button className='btn btn-primary' name='btnNvbSave'onClick={(ev)=>nvbHandleSubmit(ev)}>Ghi lại</button>
        <button className='btn btn-danger' onclick={nvbHandleClose}>Đóng</button>
      </form>
    </div>
  )
}
