import ProjectLink from '@/components/ProjectLink'

export default function ProjectAnkiCLI(props){

    return(
        <div id={props.id} className="
            flex flex-col 
            w-full
            space-y-2

        ">
            <h1 className="text-4xl">
                Anki Language Command Line Interface 
            </h1>
            <div className="pl-6">
                <p> 
                    A command line interface to help language learners
                    generate large vocab decks on the fly.
                </p>
                <p>
                    Written in javascript and integrates with Anki&apos;s opensource
                    card software.
                </p>
            </div>
            <div className="pl-6">
                <ul className='
                    flex flex-row space-x-2 items-center
                    h-fit
                    w-full
                    text-xl
                '>
                    <li>NodeJS
                    </li>
                    <span>&bull;</span>
                    <li>CLI</li>
                    <span>&bull;</span>
                    <li>Anki</li>
                </ul>
            </div>
            <div className="pl-6 pt-4">
                <ProjectLink href="https://github.com/ChrisWeldon/AnkiTool">
                    Github Repo
                </ProjectLink>
            </div>
            
        </div>
    )

}
