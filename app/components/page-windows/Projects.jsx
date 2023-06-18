import ProjectLink from '@/components/ProjectLink'
import DescAnkiWebApp from '@/projects/DescAnkiWebApp'
import DescAnkiCLI from '@/projects/DescAnkiCLI'
import DescGarminWatchface from '@/projects/DescGarminWatchface'
import DescCityScroller from '@/projects/DescCityScroller'

export default function Projects(props){
    return (
        <div id="Projects" className='
            min-h-screen flex flex-col
            space-y-24
        '>
            <h1 className="text-6xl text-center font-extrabold ">Projects</h1>

            <DescAnkiWebApp id="AnkiLangWeb"/>
            <DescAnkiCLI id="AnkiLangCLI"/>
            <DescGarminWatchface id="GarminWatchface"/>
            <DescCityScroller id="CityScroller"/>
            
        </div>
    )
}
