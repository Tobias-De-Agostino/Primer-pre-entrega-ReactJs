import { memo, useMemo } from "react"

const Ejemplo = memo(() => {
    
    for (let i = 0; i < 1000; i++) {
        console.log(i)
    }


    return (
        <div>
            Ejemplo
        </div>
    )
})

export default Ejemplo