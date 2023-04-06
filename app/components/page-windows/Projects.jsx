import ProjectLink from '@/components/ProjectLink'
import ProjectAnkiWebApp from '@/projects/ProjectAnkiWebApp'
import ProjectAnkiCLI from '@/projects/ProjectAnkiCLI'
import ProjectGarminWatchface from '@/projects/ProjectGarminWatchface'
import ProjectCityScroller from '@/projects/ProjectCityScroller'

export default function Projects(props){
    return (
        <div id="Projects" className='
            min-h-screen flex flex-col
            space-y-12
        '>
            <h1 className="text-6xl">Projects</h1>

            <ProjectAnkiWebApp id="AnkiWeb"/>
            <ProjectAnkiCLI id="AnkiCLI"/>
            <ProjectGarminWatchface id="GarminWatchface"/>
            <ProjectCityScroller id="CityScroller"/>
            
        </div>
    )
}
