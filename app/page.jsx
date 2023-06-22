"use client"

import './page.module.css'

import { Suspense, useMemo, useState, useEffect} from 'react'
import { useControls } from "leva"

import BackgroundScene from './components/BackgroundScene'
import ScrollWindow from './components/ScrollWindow'

export default function Home() {

    const options = useMemo(() => {
        return {
            backgroundSceneEnabled: false,
            sceneVisible: true,
            scrollWindow: true,
            intensity: { value: 1, min: 0, max: 1.5, step: 0.01 },
            radius: { value: 0.4, min: 0, max: 1, step: 0.01 },
            rot_x: { value: 0.01, min: -Math.PI, max: Math.PI, step: 0.01 },
            rot_y: { value: 1.13, min: -Math.PI, max: Math.PI, step: 0.01 },
            rot_z: { value: 0.0, min: -Math.PI, max: Math.PI, step: 0.01 },
            pos_y: { value: 1.6, min: 0, max: 4, step: 0.01 },
        }
    }, [])

    const { softshadow, backgroundSceneEnabled, ...config } = useControls(options)

    return (
        <main className=''>
            
            {backgroundSceneEnabled ? <BackgroundScene
                config={config}
                softShadowsEnabled={softshadow}/>: <></>}
            <ScrollWindow/>
        </main>
    )
}






