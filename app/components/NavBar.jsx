import HoverLink from './HoverLink'
import SubNavBar from './SubNavBar'

import useWindowScroll from '../hooks/useWindowScroll'

export default function NavBar(props){

    const [ scrollPosition, range, curve, page] = useWindowScroll();

    // TODO offload this to the hook so it controls itself
    const { subtitle, visible  } = props 

    return (
        <div className="invisible md:visible transition-all
            pr-4 fixed flex flex-col top-36 md:left-2 lg:left-12 text-3xl">
            <h3 className={`
                transition-all 
                sm:text-2xl
                md:text-4xl 
                xl:text-5xl
                2xl:text-6xl
                opacity-0 -translate-x-2
                ${visible ? 'translate-x-0 opacity-100': ''}`}>
                Chris Evans 
            </h3>
            <div className={`transition-all delay-300 mt-1 flex flex-col pr-4
                    ${visible ?  'border-black border-r': ''}
                `}>
                <div className={`transition-all delay-100 -translate-x-2
                    opacity-0 ${visible ?  'opacity-100 translate-x-0': ''}
                    `}>
                    <HoverLink href="#About">
                        About
                    </HoverLink>
                </div>
                <div className={`transition-all delay-150 -translate-x-2
                    opacity-0 ${visible ?  'opacity-100 translate-x-0': ''}
                    `}>
                    <HoverLink href="#Projects">
                        Projects
                    </HoverLink>
                    <SubNavBar expand={scrollPosition>1000}/>
                </div>
                <div className={`transition-all delay-200 -translate-x-2
                    opacity-0 ${visible ?  'opacity-100 translate-x-0': ''}
                    `}>
                    <HoverLink href="#Contact">
                        Contact
                    </HoverLink>
                </div>
            </div>
            <h3 className="text-2xl">{subtitle}</h3>
        </div>
    )
}
