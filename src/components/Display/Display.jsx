import './Display.css'
import { useState } from 'react'

const Display = () => {
  
  const [result, setResult] = useState(0)

  return (
      <p className="Display">
        {result}
      </p>
  )
}

export default Display
