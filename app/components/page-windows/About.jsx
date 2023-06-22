import Headshot from "./Headshot";

export default function About(props){

    return (
        <div id="About" className={`min-h-screen flex flex-col
                    transition-all my-9  
                    items-center justify-center w-full
                    `
                }> 
                <h2 className='text-4xl font-bold'> About Me </h2>

                <p className='text-2xl my-5 font-semibold'>
                I am a software engineer and language learner from Portland, Maine and relocating to Saint Louis, Missouri. I build tools to help others learn language, and I build trinkets to help myself learn new technologies. 
                </p> 

                <p className='text-xl my-5 font-semibold'>
                My current fascinations are: <span className="underline font-bold"> Next.JS 13</span> and <span className="underline font-bold"> Anki Spaced Repetition Software</span>.
                </p> 
                <Headshot/>

        </div>
    )
}
