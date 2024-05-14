import React, { useEffect, useState } from 'react'

export default function NvbUsesEffect() {
    // state: count
    const [count, setCount] = useState(0);
    // ham xu ly su kien click me
    const nvbHandleClick = () => {
        setCount(prev => prev + 1);
    }

        //Su dung ham useEffect de cap nhat lai title
        useEffect(()=>{
            document.title = `Nông Văn Bách: You clicked ${count} times`;
            console.log(`You clicked ${count} times`);
        });
        //useEffect: tham so thu 2 la mang rong
        useEffect(()=>{
            console.log("Chạy lân đầu tiên - Một lần ");
        },[])

        // [deps]
            useEffect(()=>{
                console.log(`useEffect count click:  `,count)
        },[count])
    return (
    <div>
        <h2>Demo - useEffect: You clicked {count} times</h2>
       <button onClick={nvbHandleClick}>
        Click me
       </button>
    </div>
  )
}
