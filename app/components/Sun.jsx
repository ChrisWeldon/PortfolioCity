
import { useRef } from 'react'

export default function Sun(props){
    const light = useRef()

    //useHelper(light, DirectionalLightHelper, 5)


    return (
        <directionalLight
            {...props}
            ref={light}
            intensity={0.5}
            color={"#fffddc"}
            castShadow
            shadow-mapSize-width={1536}
            shadow-mapSize-height={1536}
            shadow-bias={-.0003}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-bottom={-40}
            shadow-camera-top={0}
        />
    )
}
