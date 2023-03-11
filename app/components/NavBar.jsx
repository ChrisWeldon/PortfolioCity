
export default function NavBar(props){

    const { subtitle, visible } = props 

    return (
        <div className="pr-4 fixed flex flex-col top-36 left-12 text-3xl">
            <h3 className={`transition-all text-4x opacity-0 -translate-x-2
                ${visible ? 'translate-x-0 opacity-100': ''}`}>
                Chris Evans
            </h3>
            <div className={`transition-all delay-300 mt-1 flex flex-col pr-4
                    ${visible ?  'border-black border-r': ''}
                `}>
                <a href="#About" className={`transition-all delay-100 -translate-x-2 opacity-0
                    ${visible ?  'opacity-100 translate-x-0': ''}
                `}> About </a>
                <a href="#Projects" className={`transition-all delay-150 -translate-x-2 opacity-0
                    ${visible ?  'opacity-100 translate-x-0': ''}
                `}> Projects </a>
                <a href="#Resume" className={`transition-all delay-200 -translate-x-2 opacity-0
                    ${visible ?  'opacity-100 translate-x-0': ''}
                `}> Resume </a>
            </div>
            <h3 className="text-2xl">{subtitle}</h3>
        </div>
    )
}
