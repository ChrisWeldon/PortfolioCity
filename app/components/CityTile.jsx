import { useRef } from 'react'
import { useFrame}  from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

import useWindowScroll from '../hooks/useWindowScroll'

const deg2rad = degrees => degrees * (Math.PI / 180);

export default function CityTile(props) {

    const {nodes, materials } = useGLTF('./old_chicago/scene.gltf')

    const group = useRef()

    const [ scrollPosition, range, curve, visible, page] = useWindowScroll();

    const starting_z=props.position[2]

    useFrame((state,delta) => {
        //console.log(camera.rotation
        //console.log(camera.position)
        const a = range(0, 2000)*30
        group.current.position.z = a+starting_z
    })

    return (
        <group castShadow receiveShadow ref={group} {...props} 
            rotation={[deg2rad(-90), 0, 0]}
            scale={[.01, .01, .01]}
            dispose={null}>
            <mesh castShadow receiveShadow
                geometry={nodes.Object_2.geometry}
                material={materials.material_0}
            />
            <mesh castShadow receiveShadow
                geometry={nodes.Object_3.geometry}
                material={materials.material_0}
            />
            <mesh castShadow receiveShadow
                geometry={nodes.Object_4.geometry}
                material={materials.material_0}
            />
            <mesh castShadow receiveShadow
                geometry={nodes.Object_5.geometry}
                material={materials.material_0}
            />
            <mesh castShadow receiveShadow
                geometry={nodes.Object_6.geometry}
                material={materials.material_0}
            />
            <mesh castShadow receiveShadow
                geometry={nodes.Object_7.geometry}
                material={materials.material_0}
            />
            <mesh castShadow receiveShadow
                geometry={nodes.Object_8.geometry}
                material={materials.material_0}
            />
            <mesh castShadow receiveShadow
                geometry={nodes.Object_9.geometry}
                material={materials.material_0}
            />
            <mesh castShadow receiveShadow
                geometry={nodes.Object_10.geometry}
                material={materials.material_0}
            />
            <mesh castShadow receiveShadow
                geometry={nodes.Object_11.geometry}
                material={materials.material_0}
            />
            <mesh castShadow receiveShadow
                geometry={nodes.Object_12.geometry}
                material={materials.material_0}
            />
            <mesh castShadow receiveShadow
                geometry={nodes.Object_13.geometry}
                material={materials.material_0}
            />
            <mesh castShadow receiveShadow
                geometry={nodes.Object_14.geometry}
                material={materials.material_0}
            />
            <mesh castShadow receiveShadow
                geometry={nodes.Object_15.geometry}
                material={materials.material_0}
            />
            <mesh castShadow receiveShadow
                geometry={nodes.Object_16.geometry}
                material={materials.material_0}
            />
            <mesh castShadow receiveShadow
                geometry={nodes.Object_17.geometry}
                material={materials.material_0}
            />
            <mesh castShadow receiveShadow
                geometry={nodes.Object_18.geometry}
                material={materials.material_0}
            />
    
        </group>
    )
}

useGLTF.preload('../old_chicago/scene.gltf')
