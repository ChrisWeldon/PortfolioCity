import ProjectLink from '@/components/ProjectLink'
import Image from 'next/image'

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
            <div> 
        <p>AnkiTool uses google custom search API for images, Deepl for some translation, and www.dict.cc for language dictionaries.</p>

    <p>To run: anki-tool</p>

    <p>The initial run will prompt for your Google Search API key, your Google custom search CID, then for your Deepl API key. The keys are optional, but limit functionality if left blank. If you decide to leave the Google keys blank, then images will not be successfully added to cards.</p>
    <Image
        src="/projects/ankitool/ankitool_article.png"
        classname='rounded-lg'
        alt="picture of chris jumping in front of zurich"
        objectfit='cover'
        width={700}
        height={600}
    />

    <p>Fill out the options prompt for deck name, articles, images(yes/no), etc. Once options are complete, prompts for cards will begin.</p>
    <Image
        src="/projects/ankitool/ankitool_addingcard.png"
        alt="picture of Chris jumping in front of Zurich"
        className='rounded-lg'
        objectFit='cover'
        width={700}
        height={600}
    />

    <p>Upon entering text in your target language, prompts for which translation best fits the context of the text your reading. Choosing none will skip the card, while choosing one to many will generate one card for both speaking and translation.</p>
    <Image
        src="/projects/ankitool/ankitool_finisheddingcards.png"
        className='rounded-lg'
        alt="picture of chris jumping in front of zurich"
        objectfit='cover'
        width={700}
        height={600}
    />

    <p>Enter an empty string into text prompt for card to signal the end of the session. Upon ending, the Anki deck will be generated.</p>

    <Image
        src="/projects/ankitool/ankitool_browse.png"
        alt="picture of chris jumping in front of zurich"
        className='rounded-lg'
        objectfit='cover'
        width={700}
        height={600}
    />
            </div>
            <div className="pl-6 pt-4">
                <ProjectLink href="https://github.com/ChrisWeldon/PortfolioCity">
                    Go to Repository
                </ProjectLink>
            </div>
            
        </div>
    )

}
