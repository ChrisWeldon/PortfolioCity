"use client"

import './page.module.css'

import { Suspense, useMemo, useState, useEffect} from 'react'
import { useControls } from "leva"

import BackgroundScene from './components/BackgroundScene'
import ScrollWindow from './components/ScrollWindow'



export default function Home() {


    const options = useMemo(() => {
        return {
            backgroundSceneEnabled: true,
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

    const { softShadowsEnabled, backgroundSceneEnabled, ...config } = useControls(options)


    return (
        <main className=''>
            {backgroundSceneEnabled ? <BackgroundScene
                config={config}
                softShadowsEnabled={softShadowsEnabled}/>: <></>}
            <ScrollWindow/>
        </main>
    )
}






