'use client'

import { Suspense } from 'react'
import { Canvas, useThree }  from '@react-three/fiber'
import { SoftShadows, PerspectiveCamera,
    Html, OrbitControls } from '@react-three/drei'

import CityTile from './CityTile'
import HemisphereLight from './HemisphereLight'
import Sun from './Sun'

export default function BackgroundScene(props){

    const { config, softShadowsEnabled } = props

    return (
            <div className="fixed z-0 top-0 left-0 w-screen h-screen">
                <Canvas shadows className="">
                    <Camera
                        position={[config.camX, config.camY, config.camZ]}
                        rotation={[config.camRotX, config.camRotY, config.camRotZ]}
                    />
                    {softShadowsEnabled && <SoftShadows 
                                    size={config.size}
                                    focus={config.focus}
                                    samples={config.samples}
                                />}
                    <fog attach="fog" color="#E9D1B7" near={1} far={config.fogFar}/>
                    <HemisphereLight intensity={.1}/>
                    <Sun position={[config.lightX, 
                        config.lightY,
                        config.lightZ]} target-position={[0, 0, 0]} />

                    <Suspense className="w-full" fallback={<Html> Loading </Html>}>
                      <CityTile
                        position={[0, -2, 0]} 
                        rotation={[0, 0, 0]}
                      />
                      <CityTile
                        position={[0, -2, -9]} 
                        rotation={[0, 0, 0]}
                      />
                      <CityTile
                        position={[0, -2, -18]} 
                        rotation={[0, 0, 0]}
                      />
                      <CityTile
                        position={[0, -2, -27]} 
                        rotation={[0, 0, 0]}
                      />
                    </Suspense>
                </Canvas>
            </div>
    )
}

function Box() {
  return (
    <mesh position={[0,0,-3]}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" transparent opacity={0.5} />
    </mesh>
  )
}


function Camera(props){
    const camera = useThree(state=>state.camera)

    camera.rotation.set(...props.rotation)
    camera.position.set(...props.position)
    //camera.scale.set(.6,.6,6)
    //

    return(
        <PerspectiveCamera makeDefault >
            {props.children}
        </PerspectiveCamera>
    )
}
