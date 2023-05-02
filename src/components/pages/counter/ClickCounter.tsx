'use client'

import { useState } from "react"
import { Button } from "@/components"

export function ClickCounter() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-[1000px] p-10 flex items-center justify-between">
      <Button
        color="secondary"
        onClick={() => setCount(oldState => oldState + 1)}
        title="Button"
      />

      <Button
        color="secondary"
        variant="outlined"
        onClick={() => setCount(oldState => oldState > 0 ? oldState - 1 : 0)}
        title="Button"
      />

      <Button
        onClick={() => setCount(oldState => oldState > 0 ? oldState - 1 : 0)}
        title="Button"
      />

      <Button
        variant="outlined"
        onClick={() => setCount(oldState => oldState > 0 ? oldState - 1 : 0)}
        title="Button"
      />

      <Button
        color="gray"
        variant="outlined"
        onClick={() => setCount(oldState => oldState > 0 ? oldState - 1 : 0)}
        title="Button"
      />

      <Button
        color="gray"
        onClick={() => setCount(oldState => oldState > 0 ? oldState - 1 : 0)}
        title="Button"
      />

      <Button
        color="primary"
        variant="outlined"
        onClick={() => setCount(oldState => oldState > 0 ? oldState - 1 : 0)}
        title="Button"
      />

      <Button
        color="primary"
        onClick={() => setCount(oldState => oldState > 0 ? oldState - 1 : 0)}
        title="Button"
      />

      <Button
        color="error"
        variant="outlined"
        onClick={() => setCount(oldState => oldState > 0 ? oldState - 1 : 0)}
        title="Button"
      />

      <Button
        color="error"
        onClick={() => setCount(oldState => oldState > 0 ? oldState - 1 : 0)}
        title="Button"
      />

      <div className="ml-2">{count}</div>
    </div>
  )
}
