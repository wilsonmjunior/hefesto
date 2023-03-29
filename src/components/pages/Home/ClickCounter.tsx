'use client'

import { useState } from "react"

export function ClickCounter() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex items-center">
      <button
        className="btn btn-primary" 
        onClick={() => setCount(oldState => oldState + 1)}
      >
        increment
      </button>
      <button 
        className="btn btn-secondary" 
        onClick={() => setCount(oldState => oldState > 0 ? oldState - 1 : 0)}
      >
        decrement
      </button>
      <div className="ml-2">{count}</div>
    </div>
  )
}
