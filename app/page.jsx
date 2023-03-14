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
            sceneVisible: true,
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






