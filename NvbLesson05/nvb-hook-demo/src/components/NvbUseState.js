import React,{useState} from 'react'

export default function NvbUseState() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(10);
    //Mang
    const [list, setlish] = useState([1,5])
    //Ham xu ly su kien "them ngau nhien"
    const nvbHandleList = () => {
      //sinh ngau nhien mot gia tri so
      let num = parseInt(Math.random()*100);
      // cap nhat lai state: list
      setlish([
        ...list,
        num
      ])
      // cach khac
      // let lst = list.push(num);
      // setlish(lst);

    }
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 5)}>
        Click me
      </button>
      <hr/>
      <h3>List :{list.toString()}</h3>
      <button onClick={nvbHandleList}>Thêm ngẫu nhiên</button>
    </div>
  )
}
