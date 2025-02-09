
import ProjectLink from '@/components/ProjectLink'
import Image from 'next/image'

export default function DescAnkiCLI(props){

    return(
        <div id={props.id} className="
            flex flex-col 
            w-full
            space-y-2

        ">
            <h1 className="font-semibold text-4xl">
                Anki Language Command Line Interface 
            </h1>
            <div className="pl-6">
                <p className="text-lg leading-tight"> 
                    A command line interface written in <span className="italic font-semibold">Javascript</span>  to help language learners generate large vocab decks on the fly for Anki Spaced Repetition software.
                </p>
                <div className={`my-2 flex flex-col md:flex-row
                    space-y-2 md:space-y-0 md:space-x-2`}>
                    <div className='h-36 w-4/5 md:h-44 md:w-96 relative '>
                    <Image
                        src="/projects/ankitool/ankitool_addingcard.png"
                        className='rounded-sm'
                        alt="picture of chris jumping in front of zurich"
                        objectFit='cover'
                        fill={true}
                    />
                    </div>
                    <div className='h-36 w-4/5 md:h-44 md:w-96 relative '>
                    <Image
                        src="/projects/ankitool/ankitool_finisheddingcards.png"
                        className='rounded-sm'
                        alt="picture of chris jumping in front of zurich"
                        objectFit='cover'
                        fill={true}
                    />
                    </div>
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
                    <li>NodeJS
                    </li>
                    <span>&bull;</span>
                    <li>CLI</li>
                    <span>&bull;</span>
                    <li>Anki</li>
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
