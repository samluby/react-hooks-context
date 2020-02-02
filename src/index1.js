import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'


const Counter = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title = `count = ${count}`
    })
    return (
        <div>
            <p>当前数量：{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button>{count}</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
}


ReactDOM.render(<Counter />, document.getElementById('root'))
