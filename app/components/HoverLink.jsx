
export default function HoverLink(props){

    return(
        <div className={` px-2
            transition-all notebook-input notebook-unfocused 
            hover:notebook-hover hover:delay-0 hover:duration-250
            border-l border-transparent 
            hover:border-black
            active:notebook-focused

            2xl:text-4xl
            ${props.className}
            `}>
            <a href={props.href} >{props.children}</a>
        </div>
    )
}
