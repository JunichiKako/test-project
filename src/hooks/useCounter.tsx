import { useState } from "react"
import { useCounterProps } from "./useCounter.types"

export default function UseCounter({initialCount = 0}:useCounterProps = {}) {
  
  const [count,setCount] =useState(initialCount)

  function increment(){
    return setCount(count + 1)
  }

    function decrement(){
    return setCount(count - 1)
  }
  
  return (
    {count,increment,decrement}
  )
}