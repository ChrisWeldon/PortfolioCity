
import { useRef } from 'react'

export default function HemisphereLight(props){
    const light = useRef()

    //useHelper(light, HemisphereLightHelper, 5)

    return (
        <hemisphereLight 
            skyColor={"#E9D1B7"}
            groundColor={"#8E7F4A"}
            intensity={.1}/>
    )
}
