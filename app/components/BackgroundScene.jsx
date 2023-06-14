'use client'

import { useEffect, useState, useRef, useDeferredValue } from 'react'
import { Canvas, useThree, useFrame, extend }  from '@react-three/fiber'
import { SoftShadows, PerspectiveCamera, Stats,
    OrbitControls, useProgress } from '@react-three/drei'

import { Effects } from '@react-three/drei'
import { UnrealBloomPass } from 'three-stdlib'

extend({UnrealBloomPass})

import GrantTile from './GrantTile'
import HemisphereLight from './HemisphereLight'
import Sun from './Sun'
import { MathUtils } from 'three'

import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'

const fullConfig = resolveConfig(tailwindConfig)


export default function BackgroundScene(props){

    const { config, softShadowsEnabled } = props
    

    return (
            <div className="fixed z-0 top-0 left-0 w-screen h-screen">
                <Canvas shadows className="">
                    <Stats/>
                   
                    <Objects sceneVisible={config.sceneVisible} softshadow={config.softshadow}/>
                    <HemisphereLight position={[-10, 10, 10]}/>
                    <Sun position={[-3, 18, -6]} target-position={[0, 0, 0]} />

                    <mesh position={[-10, 4, -15]}>
                      <sphereBufferGeometry args={[.5, 24, 24]} />
                      <meshPhysicalMaterial color={[10, 8, 3]} toneMapped={false} />
                    </mesh>


                    <Camera
                        position={[-3.4, 1.6, 0]}
                        rotation={[0, 1.13, 0]}
                    />
                </Canvas> 
            </div>
    )
}

function Bloom(props){


    return ( 
        <Effects  disableGamma>
            {/* threshhold has to be 1, so nothing at all gets bloom by default */}
          <unrealBloomPass threshold={1} 
            strength={props.intensity}
            radius={props.radius} />
        </Effects>
    )


}

function Objects(props){

    const fog = useRef()

    const {sceneVisible} =  props;

    const { active, progress, errors, item, loaded, total } = useProgress()

    useFrame((state, delta) =>{
        if(sceneVisible){
            fog.current.far = MathUtils.lerp(fog.current.far, 16, 0.1)
        }else{
            fog.current.far = MathUtils.lerp(fog.current.far, 0, 0.025)
        }
    }) 
    
    return (
        <>
        <fog ref={fog} attach="fog" color={fullConfig.theme.colors.morningorange} near={0} far={0}/> 
        <group>
            <SoftShadows 
                size={52}
                focus={0.03}
                samples={12}
            />
            <CityStretch position={[0, 0, 0]}/>
            <CityStretch position={[0, 0, -69]}/>
        </group>
        </>
    )
}

function CityStretch(props){

    return (
        <group {...props}>


            <GrantTile position={[-35, -2, 13]}
                rotation={[0, -Math.PI/2, 0]}
                scale={[1, .5, 1]}
            /> 
            <GrantTile position={[-20, -2, -23]}
                rotation={[0, 0, 0]}
                scale={[1, .5, -1]}
            /> 
            <GrantTile position={[-40, -2, -19]}
                rotation={[0, 0, 0]}
                scale={[-1, .5, 1]}
            /> 
            <GrantTile position={[-20, -2, -56]}
                rotation={[0, -Math.PI, 0]}
                scale={[-1, .5, 1]}
            /> 

            {/*Closes tiles*/}
            <GrantTile position={[-20, -2, 13]}
                rotation={[0, -Math.PI/2, 0]}
                scale={[1, .75, 1]}
            /> 
            <GrantTile position={[0, -2, -23]}
                rotation={[0, 0, 0]}
                scale={[1, 1.5, -1]}
            /> 
            <GrantTile position={[-20, -2, -19]}
                rotation={[0, 0, 0]}
                scale={[-1, 1.5, 1]}
            /> 
            <GrantTile position={[0, -2, -56]}
                rotation={[0, -Math.PI, 0]}
                scale={[-1, 1.5, 1]}
            /> 
        </group>
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
