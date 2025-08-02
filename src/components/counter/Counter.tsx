import { useState } from "react"
import UseCounter from "../../hooks/useCounter"

export default function Counter() {
  const [amount,setAmount] = useState(0)

  const {increment,decrement,count} = UseCounter()

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => increment()}>Increment</button>
      <input type="number" name="amount" value={amount} onChange={(e) => setAmount(Number(e.target.value))}/>
      {/* <button onClick={() => setCount(amount)}>Set</button> */}
    </div>
  )
}