import ProjectLink from '@/components/ProjectLink'
import Image from 'next/image'

export default function DescAnkiWebApp(props){

    return(
        <div id={props.id} className="
            flex flex-col 
            w-full
            space-y-2

        ">
            <h1 className="font-semibold text-4xl">
                Anki Language Web App
            </h1>
            <div className="pl-6">
                <p className="text-lg leading-tight"> 
                    The webapp successor to AnkiCLI, allowing users to more effectively create and maintain their Anki language vocabulary decks. Written in <span className='font-bold italic'>Javascript</span> using <span className='font-bold italic'>NextJS</span> and integrates with Anki&apos;s opensource card software.
                </p>
                <div className={`my-2 flex flex-col md:flex-row 
                    space-y-2 md:space-y-0 md:space-x-2 `}>
                    <div className='
                        h-36 w-4/5
                        md:h-64 md:w-96 relative '>
                    <Image
                        src="/projects/ankiweb/ankiweb_newdeck.png"
                        className='rounded'
                        alt="picture of chris jumping in front of zurich"
                        objectFit='cover'
                        fill={true}
                    />
                    </div>
                    <div className='
                        h-36 w-4/5
                        md:h-64 md:w-96 relative '>
                    <Image
                        src="/projects/ankiweb/ankiweb_addcard.png"
                        className='rounded'
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
                    <li>Typescript
                    </li>
                    <span>&bull;</span>
                    <li>NextJS
                    </li>
                    <span>&bull;</span>
                    <li>ThreeJS and WebGL</li>
                    <span>&bull;</span>
                    <li>Anki</li>
                </ul>
            </div>
            <div className="pl-6 ">
                <ProjectLink href="https://github.com/ChrisWeldon/AnkiLanguage">
                    Go to repository
                </ProjectLink>
            </div>
            
        </div>
    )

}
