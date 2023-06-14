
import { useRef } from 'react'

import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'

const fullConfig = resolveConfig(tailwindConfig)

export default function HemisphereLight(props){
    const light = useRef()

    //useHelper(light, HemisphereLightHelper, 5)

    return (
        <hemisphereLight 
            {...props}
            skyColor={fullConfig.theme.colors.morningsky}
            groundColor={fullConfig.theme.colors.morningsky}
            intensity={.3}/>
    )
}
