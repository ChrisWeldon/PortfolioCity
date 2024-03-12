import useWindowScroll from '../hooks/useWindowScroll'
import NavBar from './NavBar'
import About from './page-windows/About';
import Projects from './page-windows/Projects.jsx';
import ProjectLink from './ProjectLink'

import Footer from '@/components/Footer'
import Headshot from '@/components/page-windows/Headshot'

export default function ScrollWindow(props){

    const [ scrollPosition, range, curve, visible, page] = useWindowScroll();

    // for drilling debug options into components
    const { debug } = props;

    return (
        <div className="absolute z-10">
        <div className="fixed flex flex-col top-36 left-12 text-3xl">
            <NavBar debug={debug} visible={scrollPosition>500} {...props}/>
        </div>
        <div className="flex flex-col items-center md:max-xl:items-end max-w-full">
            <div id="Home" className='h-screen flex self-center flex-col'>
                <div className={`
                     sticky top-1/3 flex  flex-row items-end justify-center
                    `}
                >
                    <div className={`transition-all flex flex-col content-center items-center
                        ${range(0, 350) >=1 ? 'opacity-0': 'opacity-100'}
                        `}>
                        <span className='

                            text-4xl
                            sm:text-6xl
                            mx-3
                        '>Christopher W. Evans</span>
                        <span className='text-3xl'>Portfolio</span>   
                    </div>
                </div>
            </div>
            <div className={`
                mx-3 md:w-9/12 sm:mr-3 md:mr-8 xl:w-6/12
                space-y-12          
                `}>
                <About />
                <Projects />


            <div id="Contact" className='font-extrabold flex w-full flex-col bg-blue'>
                    <h1 className="text-6xl">Contact</h1>
                    <div className={`transition-all my-8 flex flex-col 
                        w-full`} > 
                    <ul>
                        <li className="text-2xl"> <h1> <span className="font-bold">Email:</span> cwevans (at) umass (dot) edu</h1> </li>
                        <li className="text-2xl"> <h1> <span className="font-bold">Linkedin:</span> <ProjectLink href="https://www.linkedin.com/in/chrisweldonevans/"> chrisweldonevans</ProjectLink></h1> </li>

                    </ul>
                    
                    </div>
                </div>
                <Footer className={"w-full"}/>
                
            </div>
        </div>
    </div>
    )

}
