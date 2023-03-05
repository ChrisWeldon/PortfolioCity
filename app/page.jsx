'use client'
import { useRef, useState, Suspense, useMemo} from 'react'
import { Canvas, useThree, useFrame}  from '@react-three/fiber'
import { useGLTF, useHelper, useScroll, Stats, 
    Box, Plane, OrthographicCamera, OrbitControls,
    ScrollControls, SoftShadows, Scroll} from '@react-three/drei'
import { useControls } from "leva"
import { DirectionalLightHelper, Object3D, CameraHelper, FogExp2 } from 'three'


const deg2rad = degrees => degrees * (Math.PI / 180);

export default function Home() {


    const options = useMemo(() => {
        return {
            enabled: true,
            size: { value: 25, min: 0, max: 100 },
            focus: { value: 0, min: 0, max: 2 },
            samples: { value: 10, min: 1, max: 20, step: 1 },
            fogFar: {value: 11, min: 2, max:20, step:1 },
            camX: {value: 1.3, min:-5, max:5, step:.1},
            camY: {value: 1.2, min:-5, max:5, step:.1},
            camZ: {value: 0, min:-5, max:5, step:.1},
            camRotX: {value: -.3, min:-Math.PI, max:Math.PI, step:Math.PI/180},
            camRotY: {value: .8, min:-Math.PI, max:Math.PI, step:Math.PI/180},
            camRotZ: {value: .27, min:-Math.PI, max:Math.PI, step:Math.PI/180},
        }
    }, [])

    const { enabled, ...config } = useControls(options)

    return (
        <main className='h-full'>
            <Canvas shadows colorManagement className="">
                <CameraPanner
                    position={[config.camX, config.camY, config.camZ]}
                    rotation={[config.camRotX, config.camRotY, config.camRotZ]}
                />
                {enabled && <SoftShadows 
                                size={config.size}
                                focus={config.focus}
                                samples={config.samples}
                            />}
                <fog attach="fog" color="white" near={1} far={config.fogFar}/>
                <ambientLight intensity={0.1} />
                <MyLight position={[-4, 10, -15]} target-position={[0, 0, 0]} />

                <ScrollControls pages={3} damping={0}>
                    <color attach="background" args={['#fff']} />
        {/*<Box castShadow receiveShadow position={[0, 0.5, 0]}>
                      <meshStandardMaterial attach="material" color="white" />
                    </Box>
                    <Plane
                        receiveShadow
                        rotation={[-Math.PI / 2, 0, 0]}
                        position={[0, -1, 0]}
                        args={[1000, 1000]}
                    >
                      <meshStandardMaterial attach="material" color="white" />
                    </Plane>*/}
                  <Model 
                    position={[0, -2, 0]} 
                    rotation={[0, 0, 0]}
                  />
                  <Scroll html>
                    <div className="flex flex-col items-center min-w-screen text-2xl">
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


function CameraPanner(props){

    const camera = useThree(state=>state.camera);


    //camera.rotation.set(deg2rad(-8), deg2rad(-10), deg2rad(-2))
    camera.rotation.set(...props.rotation)
    camera.position.set(...props.position)
    //camera.scale.set(.6,.6,6)
    

    return(
        <>
        </>
    )
}

function MyLight(props){
    const light = useRef()

    //useHelper(light, DirectionalLightHelper, 5)


    return (
        <directionalLight
            {...props}
            ref={light}
            intensity={0.5}
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


function Model(props) {

    const {nodes, materials } = useGLTF('./old_chicago/scene.gltf')

    const group = useRef()

    const scroll = useScroll()

    const starting_z=props.position[2]

    useFrame((state,delta) => {
        //console.log(camera.rotation
        //console.log(camera.position)
        const a = scroll.range(0, 1)*30
        group.current.position.z = a+starting_z
    })

            //<primitive
               // object={gltf.scene}
              //  position={[0, 0, 0]}
             //   rotation={[0, deg2rad(-1), 0]}
            //    children-0-castShadow
           // />

    console.log(nodes)
    console.log(materials)
    return (
        <Suspense fallback={"Loading"}>
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
        </Suspense>
    )
}

useGLTF.preload('./old_chicago/scene.gltf')


