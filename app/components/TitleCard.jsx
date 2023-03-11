
import { useScroll } from '@react-three/drei'
import { useFrame}  from '@react-three/fiber'
import { useEffect, useState } from 'react'

export default function TitleCard(props){
    const scroll = useScroll()


    const [scrollVal, setScrollVal] = useState(0);
    
    useFrame((state,delta) => {
        //console.log(camera.rotation
        //console.log(camera.position)
        const a = scroll.range(0, 1)*30
        setScrollVal(a);
    })


    return (<h1 className="absolute text-5xl"> Hello World. </h1>)
}
