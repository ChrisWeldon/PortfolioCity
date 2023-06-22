
import { useRef } from 'react'
import { useFrame}  from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { MathUtils, Vector3, MeshPhysicalMaterial, MeshDepthMaterial, Color} from 'three'

import useWindowScroll from '../hooks/useWindowScroll'

const deg2rad = degrees => degrees * (Math.PI / 180);

const loc = new Vector3();

export default function GrantTile(props) {

    const {nodes, materials} = useGLTF('../chris_chicago_tile.glb')

    const group = useRef()

    const [ scrollPosition, range, curve, visible, page] = useWindowScroll();

    const starting_z=props.position[2]

    loc.set(...props.position)

    let material = new MeshPhysicalMaterial();
    material.color = new Color(0xffc87e)

    useFrame((state,delta) => {
        //console.log(camera.rotation
        //console.log(camera.position)
        const a = starting_z + scrollPosition/100

        loc.set(group.current.position.x,
                group.current.position.y,
                a
        )

        group.current.position.z = MathUtils.damp(group.current.position.z, a,
                5, delta)
    })

    return (
        <group castShadow receiveShadow ref={group} {...props} 
            dispose={null}>
            <mesh castShadow receiveShadow
                scale={[.01, .01, .01]}
                rotation={[0, 0, 0]}
                geometry={nodes.city.geometry}
                material={ material }
            />
        </group>
    )
}

useGLTF.preload('../chris_chicago_tile.glb')
