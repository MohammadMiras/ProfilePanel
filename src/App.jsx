import { useState } from 'react'

function App() {
    const [count, setCount] = useState(0)

    return <div className="bg-red-500 h-5 w-full">
        {count}
    </div>
}

export default App
