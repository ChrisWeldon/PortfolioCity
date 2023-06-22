'use client'

import { useEffect, useState, useRef, useDeferredValue } from 'react'
import { Canvas, useThree, useFrame, extend }  from '@react-three/fiber'
import { MeshPhysicalMaterial } from 'three'
import { SoftShadows, PerspectiveCamera, Stats,
    OrbitControls, useProgress } from '@react-three/drei'

import { Effects } from '@react-three/drei'
import { UnrealBloomPass } from 'three-stdlib'

extend({UnrealBloomPass})

import GrantTile from './GrantTile'
import HemisphereLight from './HemisphereLight'
import Sun from './Sun'
import { MathUtils, PlaneGeometry } from 'three'

import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'

const fullConfig = resolveConfig(tailwindConfig)


export default function BackgroundScene(props){

    const { config, softShadowsEnabled } = props
    

    return (
            <div className="fixed z-0 top-0 left-0 w-screen h-screen">
                <Canvas shadows className="">
                    <Stats/>
                    <axesHelper args={[4]}/>
                   
                    <Objects sceneVisible={config.sceneVisible} softshadow={config.softshadow}/>
                    <HemisphereLight position={[-10, 10, 10]}/>
                    <Sun position={[-3, 18, -6]} target-position={[0, 0, 0]} />

                    <mesh position={[-10, 4, -15]}>
                      <sphereBufferGeometry args={[.5, 24, 24]} />
                      <meshPhysicalMaterial color={[10, 8, 3]} toneMapped={false} />
                    </mesh>


                    <Camera
                        position={[-3.4, config.pos_y, 0]}
                        rotation={[config.rot_x, config.rot_y, config.rot_z]}
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
        { true ? <fog ref={fog} attach="fog" color={fullConfig.theme.colors.morningorange} near={0} far={500}/> : <></>}
        <group>
            <SoftShadows 
                size={52}
                focus={0.03}
                samples={12}
            />
            <CityStretch position={[0, 0, 0]}/>
            <CityStretch position={[0, 0, -69]}/>
            <mesh position={[0, -2.1, 0]} 
                rotation={[Math.PI / 2, Math.PI, 0]} scale={[1, 1, 1]}>
                <planeBufferGeometry args={[200, 400]}/>
                <meshPhysicalMaterial color={[.8, .8, .8 ]} toneMapped={false} />
            </mesh>
        </group>
        </>
    )
}

function CityStretch(props){

    return (
        <group {...props}>

            {/*third closest tiles*/}
            <GrantTile position={[-40, -2, -30]}
                rotation={[0, -Math.PI/2, 0]}
                scale={[1, .25, 1]}
            /> 
            <GrantTile position={[-40, -2, 13]}
                rotation={[0, -Math.PI/2, 0]}
                scale={[1, .25, 1]}
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

            {/*second closest tiles*/}
            <GrantTile position={[-30, -2, -30]}
                rotation={[0, -Math.PI/2, 0]}
                scale={[1, .25, 1]}
            /> 
            <GrantTile position={[-30, -2, 13]}
                rotation={[0, -Math.PI/2, 0]}
                scale={[1, .75, 1]}
            /> 
            <GrantTile position={[-10, -2, -23]}
                rotation={[0, 0, 0]}
                scale={[1, 1.0, -1]}
            /> 
            <GrantTile position={[-30, -2, -19]}
                rotation={[0, 0, 0]}
                scale={[-1, 1.0, 1]}
            /> 
            <GrantTile position={[-10, -2, -56]}
                rotation={[0, -Math.PI, 0]}
                scale={[-1, 1.0, 1]}
            /> 

            {/*Closest tiles*/}
            <GrantTile position={[-20, -2, -30]}
                rotation={[0, -Math.PI/2, 0]}
                scale={[1, .25, 1]}
            /> 
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
