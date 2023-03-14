
import { useRef } from 'react'

export default function HemisphereLight(props){
    const light = useRef()

    //useHelper(light, HemisphereLightHelper, 5)

    return (
        <hemisphereLight 
            {...props}
            skyColor={"#0000FF"}
            groundColor={"#fcb603"}
            intensity={.2}/>
    )
}
