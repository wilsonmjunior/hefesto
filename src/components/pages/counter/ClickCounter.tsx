'use client'

import { Button } from "@/components"
import { useState } from "react"

export function ClickCounter() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-[800px] p-10 flex items-center justify-between">
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => setCount(oldState => oldState + 1)}
      >
        increment
      </Button>

      <Button 
        onClick={() => setCount(oldState => oldState > 0 ? oldState - 1 : 0)}
      >
        decrement
      </Button>

      <div className="ml-2">{count}</div>
    </div>
  )
}
