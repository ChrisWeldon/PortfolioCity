"use client"

import './page.module.css'

import { Suspense, useMemo, useState, useEffect} from 'react'
import { useControls } from "leva"

import BackgroundScene from './components/BackgroundScene'
import ScrollWindow from './components/ScrollWindow'

export default function Home() {
    const def_options = {
        backgroundsceneenabled: true,
        scenevisible: true,
        scrollwindow: true,
        intensity: { value: 1, min: 0, max: 1.5, step: 0.01 },
        radius: { value: 0.4, min: 0, max: 1, step: 0.01 },
        rot_x: { value: 0.01, min: -Math.PI, max: Math.PI, step: 0.01 },
        rot_y: { value: 1.13, min: -Math.PI, max: Math.PI, step: 0.01 },
        rot_z: { value: 0.0, min: -Math.PI, max: Math.PI, step: 0.01 },
        pos_y: { value: 1.6, min: 0, max: 4, step: 0.01 },
    }

    const options = useMemo(() => {
        return def_options
    }, [def_options])

    //const { softshadow, backgroundSceneEnabled, ...config } = useControls(def_options)
    //const { softshadow, backgroundSceneEnabled, ...config } = def_options


    return (
        <main className='max-w-screen-sm'>
            
            <BackgroundScene/>
            <ScrollWindow/>
        </main>
    )
}






