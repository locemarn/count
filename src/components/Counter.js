import React, { useState } from 'react'
import CountButton from './countButton'

const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () =>  {
        setCount(count - 1)
    }

    return (
        <>  
            <h1>{count}</h1>
            <CountButton 
                action={increment}
                label='+'
            />
            <CountButton 
                action={decrement}
                label='-'
            />
        </>
    )
}

export default Counter