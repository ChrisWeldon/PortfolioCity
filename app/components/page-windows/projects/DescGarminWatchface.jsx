import ProjectLink from '@/components/ProjectLink'
import Image from 'next/image'

export default function DescGarminWatchface(props){

    return(
        <div id={props.id} className="
            flex flex-col 
            w-full
            space-y-2

        ">
            <h1 className="text-4xl font-semibold">
                Garmin Daylight and 24bit Colors
            </h1>
            <div className="pl-6">
                <p className="text-lg leading-tight">The Daylight Minimalist Watchface was built on the Garmin <span className="italic font-bold">Venu</span> platform in <span className="italic font-bold">Monkey-C</span> alongside my 24bit Colors Library. The watchface was built to provide athletes an at-a-glance view of vitals while remaining uncluttered and beautiful, and also to showcase the uses of my 24bit colors library.</p>

                <div className={'my-2 flex max-w-full flex-wrap md:flex-row space-x-2 '}>
                    <div className='h-64 w-32 relative '>
                    <Image
                        src="/projects/garminwatchface/watchface_intro.png"
                        className='rounded'
                        alt="picture of chris jumping in front of zurich"
                        objectFit='cover'
                        fill={true}
                    />
                    </div>
                    <div className='h-64 w-32 relative '>
                    <Image
                        src="/projects/garminwatchface/watchface_morning.png"
                        className='rounded'
                        alt="picture of chris jumping in front of zurich"
                        objectFit='cover'
                        fill={true}
                    />
                    </div>
                    <div className='h-64 w-32 relative '>
                    <Image
                        src="/projects/garminwatchface/watchface_sunset.png"
                        className='rounded'
                        alt="picture of chris jumping in front of zurich"
                        objectFit='cover'
                        fill={true}
                    />
                    </div>
                    <div className='h-64 w-32 relative '>
                    <Image
                        src="/projects/garminwatchface/watchface_midnight.png"
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
                    <li>C Programming
                    </li>
                    <span>&bull;</span>
                    <li>Garmin Venu
                    </li>
                </ul>
            </div>
        
            <div className="pl-6">
                <ProjectLink href="
                    https://github.com/ChrisWeldon/GarminMinimalVenuWatchface
                ">
                    Go to the repository
                </ProjectLink>
            </div>
            
        </div>
    )

}
