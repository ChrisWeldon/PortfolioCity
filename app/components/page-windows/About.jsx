export default function About(props){

    return (
        <div id="About" className={`min-h-screen flex flex-col
                    transition-all my-9  
                    items-center justify-center w-full`
                }> 
                <h2 className='text-3xl'> About Me </h2>

                <p className='text-xl my-5'>
                I am a software engineer and language learner currently base out of Portland, Maine. I build tools to help others learn language, and I build trinkets to help myself learn new technologies. 
                </p> 

                <p className='text-xl my-5'>
                My current fascinations are: <span className="underline"> Next.JS 13</span> and <span className="underline"> Anki Spaced Repetition Software</span>.
                </p> 
        </div>
    )
}
