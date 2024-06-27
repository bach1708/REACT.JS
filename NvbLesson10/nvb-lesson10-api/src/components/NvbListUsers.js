import React from 'react'

export default function NvbListUsers({renderNvbListUsers}) {
    console.log("NvbListUsers",renderNvbListUsers);
    //hiển thị dữ liệu
    let nvbElementUser= renderNvbListUsers.map((nvbUser,index)=>{
        return (
            <>
             <tr>
                    <td>{nvbUser.id}</td>
                    <th>{nvbUser.UserName}</th>
                    <th>{nvbUser.Password}</th>
                    <th>{nvbUser.Email}</th>
                    <th>{nvbUser.Phone}</th>
                    <th>...</th>
                </tr>
            </>
        )
    })
    return (
    <div className='row'>
  
       <table className='table-bordered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>UserName</th>
                    <th>Password</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Chức năng</th>
                </tr>
            </thead>
            <tbody>
                {nvbElementUser}
            </tbody>
        </table>
       </div>
      

  )
}
