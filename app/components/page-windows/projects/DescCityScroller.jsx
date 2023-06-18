
import ProjectLink from '@/components/ProjectLink'

export default function DescCityScroller(props){

    return(
        <div id={props.id} className="
            flex flex-col 
            w-full
            space-y-2

        ">
            <h1 className="font-semibold text-4xl">
                City Scroller
            </h1>
            <div className="pl-6">
                <p className="text-lg leading-tight"> 
                    A ThreeJS and NextJS project exporing how to blend UI/UX with 3D aesthetics. The City Scroller project is displayed as the platform for my portfolio. 
                </p>
                <div className={'my-2 flex flex-row space-x-2'}>
                </div>
            </div>
            <div className="pl-6">
                <ul className='
                    flex flex-row space-x-2 items-center
                    h-fit
                    w-full
                    text-xl
                    font-bold
                '>
                    <li>Javascript
                    </li>
                    <span>&bull;</span>
                    <li>ThreeJS
                    </li>
                    <span>&bull;</span>
                    <li>NextJS
                    </li>
                    <span>&bull;</span>
                    <li>WebGL Shaders</li>
                </ul>
            </div>
            <div className="pl-6 ">
                <ProjectLink href="https://github.com/ChrisWeldon/AnkiTool">
                    Go to repository
                </ProjectLink>
            </div>
            
        </div>
    )

}
