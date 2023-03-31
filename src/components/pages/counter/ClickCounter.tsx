'use client'

import { Button } from "@/components"
import { useState } from "react"

export function ClickCounter() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-[1000px] p-10 flex items-center justify-between">
      <Button
        color="secondary"
        onClick={() => setCount(oldState => oldState + 1)}
      >
        Increment
      </Button>

      <Button 
        onClick={() => setCount(oldState => oldState > 0 ? oldState - 1 : 0)}
      >
        Decrement
      </Button>

      <Button 
        color="secondary"
        variant="outlined"
        onClick={() => setCount(oldState => oldState > 0 ? oldState - 1 : 0)}
      >
        Teste
      </Button>

      <Button 
        color="none"
        variant="outlined"
        onClick={() => setCount(oldState => oldState > 0 ? oldState - 1 : 0)}
      >
        None Outlined
      </Button>

      <Button 
        color="none"
        onClick={() => setCount(oldState => oldState > 0 ? oldState - 1 : 0)}
      >
        None
      </Button>

      <Button 
        color="success"
        variant="outlined"
        onClick={() => setCount(oldState => oldState > 0 ? oldState - 1 : 0)}
      >
        Success Outlined
      </Button>

      <Button 
        color="success"
        onClick={() => setCount(oldState => oldState > 0 ? oldState - 1 : 0)}
      >
        Success
      </Button>

      <div className="ml-2">{count}</div>
    </div>
  )
}
