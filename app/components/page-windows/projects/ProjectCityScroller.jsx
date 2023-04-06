
import ProjectLink from '@/components/ProjectLink'

export default function ProjectCityScroller(props){

    return(
        <div id={props.id} className="
            flex flex-col 
            w-full

        ">
            <h1 className="text-4xl"> City Scroller </h1>
            <div className="pl-4">
                <p> Here is a little description of the webapp and its purpose </p>
                <p> Here is how I did it </p>
                <div> IMAGES OF IT HERE </div>
                <ProjectLink href="https://github.com/ChrisWeldon/PortfolioCity">
                    City Scroller
                </ProjectLink>
            </div>
            
        </div>
    )

}
