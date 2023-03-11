
import useWindowScroll from '../hooks/useWindowScroll'
import NavBar from './NavBar'

export default function ScrollWindow(props){

    const [ scrollPosition, range, curve, visible, page] = useWindowScroll();


    return (
        <div className="absolute z-10">
        <div className="fixed flex flex-col top-36 left-12 text-3xl">
            <NavBar visible={scrollPosition>500} />
        </div>
        <div className="flex flex-col">
            <div id="Home" className='h-screen flex flex-col'>
                <div className={`
                     sticky top-1/3 flex  flex-row items-end justify-center
                    `}
                >
                    <div className={`transition-all flex flex-col items-center
                        ${range(0, 350) >=1 ? 'opacity-0': 'opacity-100'}
                        `}>
                        <span className='text-6xl'>Christopher W. Evans</span>
                        <span className='text-3xl'>Software Engineer</span>   
                    </div>
                </div>
            </div>
            <div id="About" className='min-h-screen flex flex-col bg-blue'>
                <div className={`transition-all my-8 flex flex-col 
                    items-center w-full`} > 
                    <h1>{scrollPosition} </h1>
                    <p className='w-6/12 '>    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p className='w-6/12 '>    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>

            <div id="Projects" className='min-h-screen flex flex-col bg-blue'>
                <div className={`transition-all my-8 flex flex-col 
                    items-center w-full`} > 
                    <p className='w-6/12 '>    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p className='w-6/12 '>    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            <div id="Resume" className='min-h-screen flex flex-col bg-blue'>
                <div className={`transition-all my-8 flex flex-col 
                    items-center w-full`} > 
                    <p className='w-6/12 '>    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p className='w-6/12 '>    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>
    </div>
    )

}
