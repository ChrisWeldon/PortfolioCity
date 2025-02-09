
import { useRef } from 'react'

export default function HemisphereLight(props){
    const light = useRef()

    //useHelper(light, HemisphereLightHelper, 5)

    return (
        <hemisphereLight 
            {...props}
            skyColor={"#dce6ff"}
            groundColor={"#dce6ff"}
            intensity={.3}/>
    )
}
