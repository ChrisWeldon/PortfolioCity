import HoverLink from './HoverLink'

export default function SubNavBar(props){

    const { children, expand } = props 

    return (
        <div className="transition-all w-full h-fit flex flex-col text-xl px-3">
            <div className={`transition-all border-black h-0 mt-1 flex flex-col pr-4
                    ${expand ?  'border-black border-l h-28': ''}
                `}>
                <div className={`h-fit transition-all ease-in-out delay-100 -translate-x-2
                    opacity-0 ${expand ?  'opacity-100 translate-x-0': ''}
                    `}>
                    <HoverLink href="#AnkiLangWeb">
                        AnkiLang Web
                    </HoverLink>
                </div>
                <div className={`h-fit transition-all delay-150 -translate-x-2
                    opacity-0 ${expand ?  'opacity-100 translate-x-0': ''}
                    `}>
                    <HoverLink href="#AnkiLangCLI">
                        AnkiLang CLI
                    </HoverLink>
                </div>
                <div className={`h-fit transition-all delay-200 -translate-x-2
                    opacity-0 ${expand ?  'opacity-100 translate-x-0': ''}
                    `}>
                    <HoverLink href="#GarminWatchface">
                        Garmin Watchface
                    </HoverLink>
                </div>
                <div className={`h-fit transition-all delay-[250ms] -translate-x-2
                    opacity-0 ${expand ?  'opacity-100 translate-x-0': ''}
                    `}>
                    <HoverLink href="#CityScroller">
                        City Scroller
                    </HoverLink>
                </div>
            </div>
        </div>

    )
}
