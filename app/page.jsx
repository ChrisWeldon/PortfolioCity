'use client'

import './page.module.css'

import { Suspense, useMemo} from 'react'
import { Canvas, useThree }  from '@react-three/fiber'
import { ScrollControls, SoftShadows, Scroll} from '@react-three/drei'
import { useControls } from "leva"

import CityTile from './components/CityTile'
import HemisphereLight from './components/HemisphereLight'
import Sun from './components/Sun'



export default function Home() {


    const options = useMemo(() => {
        return {
            softShadowsEnabled: true,
            size: { value: 52, min: 0, max: 100 },
            focus: { value: 0.03, min: 0, max: 2 },
            samples: { value: 12, min: 1, max: 20, step: 1 },
            fogFar: {value: 11, min: 2, max:40, step:1 },
            camX: {value: -1.4, min:-5, max:5, step:.1},
            camY: {value: 1.6, min:-5, max:5, step:.1},
            camZ: {value: 0, min:-5, max:5, step:.1},
            camRotX: {value: 0, min:-Math.PI, max:Math.PI, step:Math.PI/180},
            camRotY: {value: 1.62, min:-Math.PI, max:Math.PI, step:Math.PI/180},
            camRotZ: {value: 0, min:-Math.PI, max:Math.PI, step:Math.PI/180},
            lightX: {value: -3, min:-25, max:25, step:1},
            lightY: {value: 18, min:-25, max:25, step:1},
            lightZ: {value: -6, min:-25, max:25, step:1},
        }
    }, [])

    const { softShadowsEnabled, ...config } = useControls(options)

    return (
        <main className='h-full background-fade'>
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

                <ScrollControls pages={3} damping={0}>

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
                  <Scroll html>
                    <div className="flex flex-col items-center text-grass min-w-screen text-2xl">
                        <div className="min-h-screen">
                            <h1>Scroll Down</h1>
                        </div>
                        <div className="min-h-screen"></div>
                        <div className="min-h-screen">
                            <h1>I&apos;m Gay</h1>
                        </div>
                    </div>
                  </Scroll>
                {/*<axesHelper args={[100]}/>*/}
               </ScrollControls>
            </Canvas>
        </main>
    )
}


function Camera(props){
    const camera = useThree(state=>state.camera)

    camera.rotation.set(...props.rotation)
    camera.position.set(...props.position)
    //camera.scale.set(.6,.6,6)

    return(
        <>
        </>
    )
}






